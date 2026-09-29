import { Router } from "express";
import { randomUUID } from "node:crypto";
import { requireAdmin } from "../middleware/admin-auth.js";
import Enquiry from "../models/Enquiry.js";

const router = Router();
const memoryEnquiries = [];

router.get("/", requireAdmin, async (_req, res) => {
    const enquiries = Enquiry.db.readyState === 1
        ? await Enquiry.find().sort({ createdAt: -1 }).lean()
        : memoryEnquiries.slice().reverse();
    res.json(enquiries);
});

router.post("/", async (req, res) => {
    const { name, email, phone, subject, message } = req.body || {};
    if (![name, email, phone, subject, message].every((value) => typeof value === "string" && value.trim())) {
        return res.status(400).json({ message: "Please provide your name, email, phone, enquiry type and message." });
    }
    if (name.length > 120 || email.length > 254 || phone.length > 40 || message.length > 4000) {
        return res.status(400).json({ message: "One or more fields exceed the allowed length." });
    }
    const enquiry = { name: name.trim(), email: email.trim(), phone: phone.trim(), subject: subject.trim(), message: message.trim() };
    const saved = Enquiry.db.readyState === 1
        ? await Enquiry.create(enquiry)
        : { ...enquiry, _id: randomUUID(), status: "new", createdAt: new Date() };
    if (Enquiry.db.readyState !== 1) memoryEnquiries.push(saved);
    res.status(201).json({ message: "Enquiry received.", id: saved._id });
});

router.patch("/:id", requireAdmin, async (req, res) => {
    const allowedStatuses = ["new", "contacted", "closed"];
    if (!allowedStatuses.includes(req.body?.status)) return res.status(400).json({ message: "Choose a valid enquiry status." });
    if (Enquiry.db.readyState !== 1) {
        const enquiry = memoryEnquiries.find((item) => item._id === req.params.id);
        if (!enquiry) return res.status(404).json({ message: "Enquiry not found." });
        enquiry.status = req.body.status;
        return res.json(enquiry);
    }
    if (!/^[a-f\d]{24}$/i.test(req.params.id)) return res.status(400).json({ message: "Invalid enquiry id." });
    const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true, runValidators: true });
    if (!enquiry) return res.status(404).json({ message: "Enquiry not found." });
    res.json(enquiry);
});

export default router;