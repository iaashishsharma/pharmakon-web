import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true, maxlength: 180 },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    category: { type: String, default: "News", trim: true, maxlength: 60 },
    author: { type: String, default: "Pharmakon Lifesciences", trim: true, maxlength: 100 },
    excerpt: { type: String, required: true, trim: true, maxlength: 500 },
    content: { type: String, required: true, trim: true, maxlength: 12000 },
    image: { type: String, default: "assets/img/home-3/news/news-1.jpg", trim: true },
    status: { type: String, enum: ["draft", "published"], default: "draft", index: true },
    publishedAt: { type: Date, default: null },
}, { timestamps: true });

blogPostSchema.index({ status: 1, publishedAt: -1 });

export default mongoose.models.BlogPost || mongoose.model("BlogPost", blogPostSchema);
