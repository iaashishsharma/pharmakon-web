import { Router } from "express";
import { requireAdmin } from "../middleware/admin-auth.js";
import SiteSettings from "../models/SiteSettings.js";

const router = Router();
const fields = [
    "companyName", "email", "phone", "address", "gst", "facebook", "instagram", "linkedin", "twitter",
    "heroTitle", "heroSubtitle", "heroDescription", "aboutTitle", "aboutParagraph1", "aboutParagraph2", "aboutParagraph3",
    "visionHeading", "visionDescription", "visionStatement", "visionDetails", "missionStatement", "missionDetails",
];
const defaults = Object.fromEntries(fields.map((field) => [field, SiteSettings.schema.path(field).defaultValue]));
let memorySettings = { ...defaults };

router.get("/", async (_req, res) => {
    if (SiteSettings.db.readyState !== 1) return res.json(memorySettings);
    const settings = await SiteSettings.findOneAndUpdate(
        { key: "primary" },
        { $setOnInsert: { key: "primary", ...defaults } },
        { new: true, upsert: true, setDefaultsOnInsert: true },
    ).lean();
    res.json(settings);
});

router.put("/", requireAdmin, async (req, res) => {
    const update = {};
    for (const field of fields) {
        if (typeof req.body?.[field] !== "string") continue;
        const value = req.body[field].trim();
        if (value.length > 4000) return res.status(400).json({ message: `${field} must be 4000 characters or fewer.` });
        update[field] = value;
    }
    if (!Object.keys(update).length) return res.status(400).json({ message: "No editable site content was provided." });
    if (SiteSettings.db.readyState !== 1) {
        memorySettings = { ...memorySettings, ...update };
        return res.json(memorySettings);
    }
    const settings = await SiteSettings.findOneAndUpdate(
        { key: "primary" },
        { $set: update, $setOnInsert: { key: "primary", ...defaults } },
        { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true },
    ).lean();
    res.json(settings);
});

export default router;