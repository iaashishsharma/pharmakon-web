import "dotenv/config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import Enquiry from "./models/Enquiry.js";
import Product from "./models/Product.js";
import adminRoutes from "./routes/admin.js";
import blogRoutes from "./routes/blogs.js";
import enquiryRoutes from "./routes/enquiries.js";
import productRoutes, { memoryProducts } from "./routes/products.js";
import settingsRoutes from "./routes/settings.js";
import uploadRoutes from "./routes/upload.js";
import { readLegacyCatalogue } from "./legacy-catalogue.js";

import { ensureDefaultAdmin } from "./init-admin.js";

const app = express();
const port = Number(process.env.PORT) || 5000;
const allowedOrigins = new Set((process.env.CLIENT_URL || "http://localhost:3000,http://localhost:5500,http://127.0.0.1:5500").split(",").map((origin) => origin.trim()));

app.disable("x-powered-by");
app.use(cors({
    origin(origin, callback) {
        const localDevelopmentOrigin = process.env.NODE_ENV !== "production"
            && /^http:\/\/(localhost|127\.0\.0\.1|192\.168\.\d{1,3}\.\d{1,3}|10\.\d{1,3}\.\d{1,3}\.\d{1,3}|172\.(1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3})(:\d+)?$/.test(origin || "");
        if (!origin || allowedOrigins.has(origin) || localDevelopmentOrigin) return callback(null, true);
        callback(new Error("This website origin is not allowed by the API."));
    },
    credentials: true,
}));
app.use(express.json({ limit: "32kb" }));
app.get("/api/health", (_req, res) => res.json({ status: "ok", database: mongoose.connection.readyState === 1 ? "connected" : "memory" }));
app.use("/api/admin", adminRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/products", productRoutes);
app.use("/api/enquiries", enquiryRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/upload", uploadRoutes);
app.use((error, _req, res, _next) => {
    console.error(error);
    res.status(500).json({ message: "The request could not be completed." });
});

async function start() {
    try {
        const legacyProducts = await readLegacyCatalogue();
        memoryProducts.splice(0, memoryProducts.length, ...legacyProducts.map((product, index) => ({ ...product, _id: `legacy-${index + 1}` })));
        console.log(`Loaded ${memoryProducts.length} products from the existing Pharmakon site.`);
    } catch (error) {
        console.warn("Existing site products could not be imported:", error.message);
    }
    if (process.env.MONGODB_URI) {
        try {
            await mongoose.connect(process.env.MONGODB_URI);
            await ensureDefaultAdmin();
            if (memoryProducts.length) {
                await Product.bulkWrite(memoryProducts.map(({ _id, ...product }) => ({
                    updateOne: {
                        filter: { slug: product.slug },
                        update: { $set: product },
                        upsert: true,
                    },
                })), { ordered: false });
            }
            console.log("MongoDB connected; catalogue ready.");
        } catch (error) {
            console.error("MongoDB connection failed; starting with temporary in-memory catalogue.", error.message);
        }
    } else {
        console.warn("MONGODB_URI is not set; data changes will be temporary until the server stops.");
    }
    app.listen(port, "0.0.0.0", () => console.log(`Pharmakon API listening on http://localhost:${port}`));
}

start();