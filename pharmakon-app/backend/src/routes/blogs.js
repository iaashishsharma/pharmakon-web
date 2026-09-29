import { randomUUID } from "node:crypto";
import { Router } from "express";
import { isAdminRequest } from "../middleware/admin-auth.js";
import BlogPost from "../models/BlogPost.js";

const router = Router();
let memoryPosts = [];

function makeSlug(value) {
    return value.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function parsePost(body) {
    const title = typeof body?.title === "string" ? body.title.trim() : "";
    const excerpt = typeof body?.excerpt === "string" ? body.excerpt.trim() : "";
    const content = typeof body?.content === "string" ? body.content.trim() : "";
    const status = body?.status === "published" ? "published" : "draft";
    if (!title || !excerpt || !content) return { error: "Title, excerpt and article body are required." };
    if (title.length > 180 || excerpt.length > 500 || content.length > 12000) return { error: "Title, excerpt or article body exceeds the allowed length." };
    const slug = makeSlug(typeof body.slug === "string" && body.slug.trim() ? body.slug : title);
    if (!slug) return { error: "Please enter a title that can be used as the article URL." };
    const publishedAt = status === "published" ? (body.publishedAt ? new Date(body.publishedAt) : new Date()) : null;
    if (publishedAt && Number.isNaN(publishedAt.getTime())) return { error: "Publish date is invalid." };
    return {
        post: {
            title,
            slug,
            category: typeof body.category === "string" ? body.category.trim().slice(0, 60) || "News" : "News",
            author: typeof body.author === "string" ? body.author.trim().slice(0, 100) || "Pharmakon Lifesciences" : "Pharmakon Lifesciences",
            excerpt,
            content,
            image: typeof body.image === "string" ? body.image.trim().slice(0, 500) || "assets/img/home-3/news/news-1.jpg" : "assets/img/home-3/news/news-1.jpg",
            status,
            publishedAt,
        }
    };
}

router.get("/", async (req, res) => {
    const includeDrafts = req.query.includeDrafts === "true";
    if (includeDrafts && !isAdminRequest(req)) return res.status(401).json({ message: "Please sign in to view drafts." });
    if (BlogPost.db.readyState !== 1) {
        const posts = memoryPosts
            .filter((post) => includeDrafts || post.status === "published")
            .sort((left, right) => new Date(right.publishedAt || right.createdAt) - new Date(left.publishedAt || left.createdAt));
        return res.json(posts);
    }
    const posts = await BlogPost.find(includeDrafts ? {} : { status: "published" })
        .sort({ publishedAt: -1, createdAt: -1 })
        .lean();
    res.json(posts);
});

router.get("/:slug", async (req, res) => {
    const post = BlogPost.db.readyState === 1
        ? await BlogPost.findOne({ slug: req.params.slug, status: "published" }).lean()
        : memoryPosts.find((item) => item.slug === req.params.slug && item.status === "published");
    if (!post) return res.status(404).json({ message: "Published article not found." });
    res.json(post);
});

router.post("/", async (req, res) => {
    if (!isAdminRequest(req)) return res.status(401).json({ message: "Please sign in to manage blog posts." });
    const parsed = parsePost(req.body);
    if (parsed.error) return res.status(400).json({ message: parsed.error });
    try {
        const created = BlogPost.db.readyState === 1
            ? await BlogPost.create(parsed.post)
            : (() => {
                if (memoryPosts.some((item) => item.slug === parsed.post.slug)) return null;
                const post = { ...parsed.post, _id: randomUUID(), createdAt: new Date(), updatedAt: new Date() };
                memoryPosts.unshift(post);
                return post;
            })();
        if (!created) return res.status(409).json({ message: "A post with this URL slug already exists." });
        res.status(201).json(created);
    } catch (error) {
        if (error.code === 11000) return res.status(409).json({ message: "A post with this URL slug already exists." });
        throw error;
    }
});

router.put("/:id", async (req, res) => {
    if (!isAdminRequest(req)) return res.status(401).json({ message: "Please sign in to manage blog posts." });
    const parsed = parsePost(req.body);
    if (parsed.error) return res.status(400).json({ message: parsed.error });
    try {
        if (BlogPost.db.readyState !== 1) {
            const post = memoryPosts.find((item) => item._id === req.params.id);
            if (!post) return res.status(404).json({ message: "Blog post not found." });
            if (memoryPosts.some((item) => item._id !== req.params.id && item.slug === parsed.post.slug)) {
                return res.status(409).json({ message: "A post with this URL slug already exists." });
            }
            Object.assign(post, parsed.post, { updatedAt: new Date() });
            return res.json(post);
        }
        if (!/^[a-f\d]{24}$/i.test(req.params.id)) return res.status(400).json({ message: "Invalid post id." });
        const post = await BlogPost.findByIdAndUpdate(req.params.id, parsed.post, { new: true, runValidators: true });
        if (!post) return res.status(404).json({ message: "Blog post not found." });
        res.json(post);
    } catch (error) {
        if (error.code === 11000) return res.status(409).json({ message: "A post with this URL slug already exists." });
        throw error;
    }
});

router.delete("/:id", async (req, res) => {
    if (!isAdminRequest(req)) return res.status(401).json({ message: "Please sign in to manage blog posts." });
    if (BlogPost.db.readyState !== 1) {
        const previousLength = memoryPosts.length;
        memoryPosts = memoryPosts.filter((post) => post._id !== req.params.id);
        if (memoryPosts.length === previousLength) return res.status(404).json({ message: "Blog post not found." });
        return res.json({ message: "Blog post removed." });
    }
    if (!/^[a-f\d]{24}$/i.test(req.params.id)) return res.status(400).json({ message: "Invalid post id." });
    const deleted = await BlogPost.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Blog post not found." });
    res.json({ message: "Blog post removed." });
});

export default router;
