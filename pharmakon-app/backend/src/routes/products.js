import { Router } from "express";
import { requireAdmin } from "../middleware/admin-auth.js";
import Product from "../models/Product.js";

const router = Router();
let memoryProducts = [];

function makeSlug(value) {
    return value.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

router.get("/", async (req, res) => {
    const query = String(req.query.q || "").trim();
    const category = String(req.query.category || "").trim();
    if (Product.db.readyState !== 1) {
        const result = memoryProducts.filter((product) => product.isActive !== false
            && (!category || product.category === category)
            && (!query || `${product.name} ${product.composition || ""} ${product.type || ""}`.toLowerCase().includes(query.toLowerCase())));
        return res.json(result);
    }
    const filter = { isActive: true };
    if (category) filter.category = category;
    if (query) filter.$text = { $search: query };
    const result = await Product.find(filter).sort({ name: 1 }).lean();
    res.json(result);
});

router.get("/:slug", async (req, res) => {
    const product = Product.db.readyState === 1
        ? await Product.findOne({ slug: req.params.slug, isActive: true }).lean()
        : memoryProducts.find((item) => item.slug === req.params.slug && item.isActive !== false);
    if (!product) return res.status(404).json({ message: "Product not found." });
    res.json(product);
});

router.post("/", requireAdmin, async (req, res) => {
    const { name, category, productCategory, type, composition, packing, image } = req.body || {};
    if (typeof name !== "string" || !name.trim() || typeof category !== "string" || !category.trim()) {
        return res.status(400).json({ message: "Product name and category are required." });
    }
    const product = {
        name: name.trim(),
        slug: makeSlug(`${category}-${name}`),
        category: category.trim(),
        productCategory: typeof productCategory === "string" ? makeSlug(productCategory) : "",
        type: typeof type === "string" ? type.trim() : "Product",
        composition: typeof composition === "string" ? composition.trim() : "",
        packing: typeof packing === "string" ? packing.trim() : "",
        image: typeof image === "string" ? image.trim() : "",
        isActive: true,
    };
    try {
        const created = Product.db.readyState === 1
            ? await Product.create(product)
            : (() => {
                if (memoryProducts.some((item) => item.slug === product.slug)) return null;
                const item = { ...product, _id: `local-${Date.now()}` };
                memoryProducts.unshift(item);
                return item;
            })();
        if (!created) return res.status(409).json({ message: "A product with that name already exists." });
        res.status(201).json(created);
    } catch (error) {
        if (error.code === 11000) return res.status(409).json({ message: "A product with that name already exists." });
        throw error;
    }
});

router.put("/:id", requireAdmin, async (req, res) => {
    const { name, category, productCategory, type, composition, packing, image } = req.body || {};
    if (typeof name !== "string" || !name.trim() || typeof category !== "string" || !category.trim()) {
        return res.status(400).json({ message: "Product name and care area are required." });
    }
    const update = {
        name: name.trim(),
        slug: makeSlug(`${category}-${name}`),
        category: category.trim(),
        productCategory: typeof productCategory === "string" ? makeSlug(productCategory) : "",
        type: typeof type === "string" ? type.trim() : "Product",
        composition: typeof composition === "string" ? composition.trim() : "",
        packing: typeof packing === "string" ? packing.trim() : "",
        image: typeof image === "string" ? image.trim() : "",
    };
    try {
        if (Product.db.readyState !== 1) {
            const product = memoryProducts.find((item) => item._id === req.params.id);
            if (!product) return res.status(404).json({ message: "Product not found." });
            if (memoryProducts.some((item) => item._id !== req.params.id && item.slug === update.slug)) {
                return res.status(409).json({ message: "A product with that name already exists." });
            }
            Object.assign(product, update);
            return res.json(product);
        }
        const product = await Product.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
        if (!product) return res.status(404).json({ message: "Product not found." });
        res.json(product);
    } catch (error) {
        if (error.code === 11000) return res.status(409).json({ message: "A product with that name already exists." });
        throw error;
    }
});

router.delete("/:id", requireAdmin, async (req, res) => {
    if (Product.db.readyState !== 1) {
        const previousLength = memoryProducts.length;
        memoryProducts = memoryProducts.filter((product) => product._id !== req.params.id && product.slug !== req.params.id);
        if (memoryProducts.length === previousLength) return res.status(404).json({ message: "Product not found." });
        return res.json({ message: "Product removed." });
    }
    if (!/^[a-f\d]{24}$/i.test(req.params.id)) return res.status(400).json({ message: "Invalid product id." });
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Product not found." });
    res.json({ message: "Product removed." });
});

export { memoryProducts, makeSlug };
export default router;