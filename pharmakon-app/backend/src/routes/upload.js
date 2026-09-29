import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { requireAdmin } from "../middleware/admin-auth.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Upload destination directory inside frontend public folder
const uploadDir = path.resolve(__dirname, "../../../frontend/public/assets/img/uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, uploadDir);
    },
    filename: (_req, file, cb) => {
        const ext = path.extname(file.originalname) || ".png";
        const cleanName = path.basename(file.originalname, ext)
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
        const uniqueName = `${cleanName}-${Date.now()}${ext}`;
        cb(null, uniqueName);
    },
});

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (_req, file, cb) => {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true);
        } else {
            cb(new Error("Only image files (JPG, PNG, WEBP, GIF, SVG) are allowed."));
        }
    },
});

const router = Router();

router.post("/", requireAdmin, upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No image file provided." });
    }
    const relativeUrl = `/assets/img/uploads/${req.file.filename}`;
    return res.json({ url: relativeUrl, filename: req.file.filename });
});

export default router;
