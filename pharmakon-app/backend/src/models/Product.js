import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    category: { type: String, required: true, index: true },
    productCategory: { type: String, default: "" },
    type: { type: String, default: "Product" },
    composition: { type: String, default: "" },
    packing: { type: String, default: "" },
    image: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });

productSchema.index({ name: "text", composition: "text", category: "text" });

export default mongoose.models.Product || mongoose.model("Product", productSchema);