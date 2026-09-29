"use client";

import { useEffect, useState } from "react";
import "./admin-theme.css";

const careAreas = ["general", "dental", "neuro", "dermatology", "gynaecology", "paediatric", "orthopaedic", "oncology"];
const blankProduct = { name: "", category: "general", productCategory: "", type: "", composition: "", packing: "", image: "" };
const blankBlog = { title: "", slug: "", category: "News", author: "Pharmakon Lifesciences", excerpt: "", content: "", image: "assets/img/home-3/news/news-1.jpg", status: "draft", publishedAt: "" };

async function getResult(response) {
    const text = await response.text();
    let result;
    try {
        result = JSON.parse(text);
    } catch {
        throw new Error(response.ok ? "Invalid response format from server." : `Server error (${response.status}). Please verify backend is running.`);
    }
    if (!response.ok) throw new Error(result.message || "The request could not be completed.");
    return result;
}

export default function AdminPanel() {
    const [authenticated, setAuthenticated] = useState(false);
    const [checking, setChecking] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [products, setProducts] = useState([]);
    const [enquiries, setEnquiries] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [siteSettings, setSiteSettings] = useState({});
    const [tab, setTab] = useState("products");
    const [productSearch, setProductSearch] = useState("");
    const [careAreaFilter, setCareAreaFilter] = useState("all");
    const [editingId, setEditingId] = useState("");
    const [editingBlogId, setEditingBlogId] = useState("");
    const [form, setForm] = useState(blankProduct);
    const [blogForm, setBlogForm] = useState(blankBlog);
    const [blogStatusFilter, setBlogStatusFilter] = useState("all");
    const [notice, setNotice] = useState("");
    const [busy, setBusy] = useState(false);
    const [uploading, setUploading] = useState(false);

    async function handleImageUpload(e) {
        const file = e.target.files?.[0];
        if (!file) return;
        setUploading(true);
        setNotice("");
        try {
            const formData = new FormData();
            formData.append("image", file);
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });
            const data = await getResult(res);
            if (data.url) {
                setForm((prev) => ({ ...prev, image: data.url }));
                setNotice("Image uploaded successfully!");
            }
        } catch (err) {
            setNotice(err.message || "Failed to upload image.");
        } finally {
            setUploading(false);
        }
    }
    const normalizedProductSearch = productSearch.trim().toLocaleLowerCase();
    const filteredProducts = products.filter((product) => {
        const matchesCareArea = careAreaFilter === "all" || product.category === careAreaFilter;
        const searchableText = [product.name, product.type, product.category, product.productCategory, product.composition]
            .filter(Boolean)
            .join(" ")
            .toLocaleLowerCase();
        return matchesCareArea && (!normalizedProductSearch || searchableText.includes(normalizedProductSearch));
    });

    async function refreshData() {
        const [productResponse, enquiryResponse] = await Promise.all([
            fetch("/api/products", { cache: "no-store" }),
            fetch("/api/enquiries", { cache: "no-store" }),
        ]);
        const [productData, enquiryData, settingsResponse] = await Promise.all([
            getResult(productResponse),
            getResult(enquiryResponse),
            fetch("/api/settings", { cache: "no-store" }).then(getResult),
        ]);
        setProducts(productData);
        setEnquiries(enquiryData);
        setSiteSettings(settingsResponse);
    }

    useEffect(() => {
        let active = true;
        fetch("/api/admin/session", { cache: "no-store" })
            .then((response) => response.ok ? response.json().catch(() => ({ authenticated: false })) : { authenticated: false })
            .then(async (session) => {
                if (!active || !session.authenticated) return;
                setAuthenticated(true);
                try { await refreshData(); }
                catch (error) { if (active) setNotice(error.message); }
            })
            .catch(() => { if (active) setNotice("Backend is unavailable. Start the API server and refresh this page."); })
            .finally(() => { if (active) setChecking(false); });
        return () => { active = false; };
    }, []);

    async function signIn(event) {
        event.preventDefault();
        setBusy(true);
        setNotice("");
        try {
            await getResult(await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            }));
            setAuthenticated(true);
            setPassword("");
            await refreshData();
        } catch (error) { setNotice(error.message); }
        finally { setBusy(false); }
    }

    async function signOut() {
        await fetch("/api/admin/logout", { method: "POST" });
        setAuthenticated(false);
        setProducts([]);
        setEnquiries([]);
        setBlogs([]);
    }

    function beginEdit(product) {
        setEditingId(product._id);
        setForm({ name: product.name || "", category: product.category || "general", productCategory: product.productCategory || "", type: product.type || "", composition: product.composition || "", packing: product.packing || "", image: product.image || "" });
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    async function saveProduct(event) {
        event.preventDefault();
        setBusy(true);
        setNotice("");
        try {
            const endpoint = editingId ? `/api/products/${editingId}` : "/api/products";
            const method = editingId ? "PUT" : "POST";
            await getResult(await fetch(endpoint, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) }));
            setNotice(editingId ? "Product updated on the website." : "Product added to the website catalogue.");
            setEditingId("");
            setForm(blankProduct);
            await refreshData();
        } catch (error) { setNotice(error.message); }
        finally { setBusy(false); }
    }

    async function removeProduct(product) {
        if (!window.confirm(`Remove ${product.name} from the website catalogue?`)) return;
        try {
            await getResult(await fetch(`/api/products/${product._id}`, { method: "DELETE" }));
            setNotice("Product removed from the website catalogue.");
            await refreshData();
        } catch (error) { setNotice(error.message); }
    }

    async function updateEnquiry(enquiry, status) {
        try {
            await getResult(await fetch(`/api/enquiries/${enquiry._id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status }),
            }));
            await refreshData();
        } catch (error) { setNotice(error.message); }
    }

    function contentField(field, label, multiline = false) {
        const inputProps = {
            value: siteSettings[field] || "",
            onChange: (event) => setSiteSettings((current) => ({ ...current, [field]: event.target.value })),
        };
        return (
            <label className="settings-field" key={field}>
                {label}
                {multiline ? <textarea {...inputProps} rows="3" /> : <input {...inputProps} />}
            </label>
        );
    }

    async function saveSiteSettings(event) {
        event.preventDefault();
        setBusy(true);
        setNotice("");
        try {
            const saved = await getResult(await fetch("/api/settings", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(siteSettings),
            }));
            setSiteSettings(saved);
            setNotice("Site content saved. Refresh the public page to see the updates.");
        } catch (error) { setNotice(error.message); }
        finally { setBusy(false); }
    }

    function beginEditBlog(post) {
        setEditingBlogId(post._id);
        setBlogForm({
            title: post.title || "",
            slug: post.slug || "",
            category: post.category || "News",
            author: post.author || "Pharmakon Lifesciences",
            excerpt: post.excerpt || "",
            content: post.content || "",
            image: post.image || "assets/img/home-3/news/news-1.jpg",
            status: post.status || "draft",
            publishedAt: post.publishedAt ? new Date(post.publishedAt).toISOString().slice(0, 10) : "",
        });
    }

    async function saveBlog(event) {
        event.preventDefault();
        setBusy(true);
        setNotice("");
        try {
            const endpoint = editingBlogId ? `/api/blogs/${editingBlogId}` : "/api/blogs";
            const method = editingBlogId ? "PUT" : "POST";
            await getResult(await fetch(endpoint, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blogForm),
            }));
            setNotice(editingBlogId ? "Blog post updated." : blogForm.status === "published" ? "Blog post published." : "Draft saved.");
            setEditingBlogId("");
            setBlogForm(blankBlog);
            await refreshData();
        } catch (error) { setNotice(error.message); }
        finally { setBusy(false); }
    }

    async function removeBlog(post) {
        if (!window.confirm(`Delete “${post.title}”?`)) return;
        try {
            await getResult(await fetch(`/api/blogs/${post._id}`, { method: "DELETE" }));
            setNotice("Blog post deleted.");
            await refreshData();
        } catch (error) { setNotice(error.message); }
    }

    const visibleBlogs = blogStatusFilter === "all" ? blogs : blogs.filter((post) => post.status === blogStatusFilter);

    if (checking) return <main className="admin-loading">Opening site manager...</main>;

    if (!authenticated) {
        return (
            <main className="login-shell">
                <form className="login-panel" onSubmit={signIn}>
                    <div className="admin-brand"><span className="admin-brand-logo-wrap"><img className="admin-brand-logo" src="/pharmakon-logo.png" alt="Pharmakon Lifesciences" /></span><span className="admin-brand-caption">WEBSITE ADMINISTRATION</span></div>
                    <p className="admin-kicker">SECURE ACCESS</p>
                    <h1>Sign in to manage<br />your website.</h1>
                    <label>Username<input value={username} onChange={(event) => setUsername(event.target.value)} autoComplete="username" required /></label>
                    <label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required /></label>
                    <button className="admin-primary" disabled={busy}>{busy ? "Signing in..." : "Sign in"}<span aria-hidden="true">-&gt;</span></button>
                    {notice && <p className="admin-notice error" role="alert">{notice}</p>}
                    <p className="login-footnote">Your existing public website stays as it is.</p>
                </form>
                <div className="login-aside"><span className="aside-index">PLS / 01</span><p>Website<br /><em>content control</em></p><span className="aside-rule" /></div>
            </main>
        );
    }

    return (
        <main className="admin-shell">
            <aside className="admin-sidebar">
                <div className="admin-brand"><span className="admin-brand-logo-wrap"><img className="admin-brand-logo" src="/pharmakon-logo.png" alt="Pharmakon Lifesciences" /></span><span className="admin-brand-caption">SITE CONTROL</span></div>
                <span className="sidebar-label">MANAGE WEBSITE</span>
                <button className={tab === "products" ? "sidebar-link active" : "sidebar-link"} onClick={() => setTab("products")}><span className="sidebar-icon">▦</span> Product catalogue <span className="sidebar-count">{products.length}</span></button>
                <button className={tab === "content" ? "sidebar-link active" : "sidebar-link"} onClick={() => setTab("content")}><span className="sidebar-icon">✎</span> Site content</button>
                <button className={tab === "enquiries" ? "sidebar-link active" : "sidebar-link"} onClick={() => setTab("enquiries")}><span className="sidebar-icon">✉</span> Enquiries <span className="sidebar-count">{enquiries.filter((item) => item.status === "new").length}</span></button>
                <div className="sidebar-bottom"><a href="/" target="_blank" rel="noreferrer">Open existing website <span aria-hidden="true">↗</span></a><button onClick={signOut}>Sign out</button></div>
            </aside>
            <section className="admin-main">
                <header className="admin-topbar"><div><span className="admin-kicker">PHARMAKON LIFESCIENCES</span><h1>{tab === "products" ? "Product catalogue" : tab === "content" ? "Site content" : "Website enquiries"}</h1></div><button className="refresh-button" onClick={() => refreshData()} aria-label="Refresh data" title="Refresh">↻</button></header>
                {notice && <p className="admin-notice" role="status">{notice}<button onClick={() => setNotice("")} aria-label="Dismiss notice">×</button></p>}
                {tab === "content" ? (
                    <form className="settings-editor" onSubmit={saveSiteSettings}>
                        <div className="settings-intro"><div><span className="admin-kicker">EXISTING PUBLIC WEBSITE</span><h2>Update visible site details</h2></div><button className="admin-primary settings-save" disabled={busy}>{busy ? "Saving..." : "Save site content"}<span aria-hidden="true">-&gt;</span></button></div>
                        <div className="settings-groups">
                            <section className="settings-group"><div className="settings-group-heading"><span className="settings-group-number">01</span><div><h3>Company and contact</h3><p>Used in the public site header, footer, and contact details.</p></div></div><div className="settings-fields">{contentField("companyName", "Registered company name")}{contentField("email", "Public email")}{contentField("phone", "Public phone")}{contentField("address", "Address")}{contentField("gst", "GST number")}</div></section>
                            <section className="settings-group"><div className="settings-group-heading"><span className="settings-group-number">02</span><div><h3>Social links</h3><p>Leave a field blank to hide that social link.</p></div></div><div className="settings-fields">{contentField("facebook", "Facebook URL")}{contentField("instagram", "Instagram URL")}{contentField("linkedin", "LinkedIn URL")}{contentField("twitter", "X / Twitter URL")}</div></section>
                            <section className="settings-group"><div className="settings-group-heading"><span className="settings-group-number">03</span><div><h3>Homepage hero</h3><p>Updates the first homepage slide without changing its design.</p></div></div><div className="settings-fields">{contentField("heroTitle", "Main heading")}{contentField("heroSubtitle", "Supporting line")}{contentField("heroDescription", "Description", true)}</div></section>
                            <section className="settings-group"><div className="settings-group-heading"><span className="settings-group-number">04</span><div><h3>About Pharmakon</h3><p>Edit the overview copy on the existing About page.</p></div></div><div className="settings-fields">{contentField("aboutTitle", "Section heading", true)}{contentField("aboutParagraph1", "Paragraph 1", true)}{contentField("aboutParagraph2", "Paragraph 2", true)}{contentField("aboutParagraph3", "Paragraph 3", true)}</div></section>
                            <section className="settings-group"><div className="settings-group-heading"><span className="settings-group-number">05</span><div><h3>Vision and mission</h3><p>Updates the corresponding text on the existing Vision &amp; Mission page.</p></div></div><div className="settings-fields">{contentField("visionHeading", "Section heading", true)}{contentField("visionDescription", "Introduction", true)}{contentField("visionStatement", "Vision statement", true)}{contentField("visionDetails", "Vision details", true)}{contentField("missionStatement", "Mission statement", true)}{contentField("missionDetails", "Mission details", true)}</div></section>
                        </div>
                    </form>
                ) : tab === "products" ? (
                    <div className="admin-content-grid">
                        <form className="editor-panel" onSubmit={saveProduct}>
                            <div className="panel-heading"><div><span className="admin-kicker">CATALOGUE ITEM</span><h2>{editingId ? "Edit product" : "Add a product"}</h2></div>{editingId && <button className="quiet-button" type="button" onClick={() => { setEditingId(""); setForm(blankProduct); }}>Cancel</button>}</div>
                            <label>Product name<input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required /></label>
                            <div className="admin-form-row"><label>Care area<select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })}>{careAreas.map((area) => <option key={area} value={area}>{area}</option>)}</select></label><label>Display type<input value={form.type} onChange={(event) => setForm({ ...form, type: event.target.value })} placeholder="Tablet, syrup, cream" /></label></div>
                            <div className="admin-form-row"><label>Page filter group<input value={form.productCategory} onChange={(event) => setForm({ ...form, productCategory: event.target.value })} placeholder="tablet, mouthwash, capsule" /></label>
                                <label style={{ position: "relative" }}>
                                    Product image
                                    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                                        <input value={form.image} onChange={(event) => setForm({ ...form, image: event.target.value })} placeholder="Path or upload file" style={{ flex: 1 }} />
                                        <label className="quiet-button" style={{ cursor: "pointer", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "4px", margin: 0, padding: "8px 10px", fontSize: "11px" }}>
                                            <span>{uploading ? "Uploading..." : "📁 Upload"}</span>
                                            <input type="file" accept="image/*" style={{ display: "none" }} disabled={uploading} onChange={handleImageUpload} />
                                        </label>
                                    </div>
                                </label>
                            </div>
                            {form.image && (
                                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 10px", border: "1px solid #d8e5eb", borderRadius: "3px", background: "#f8fafc" }}>
                                    <img src={form.image.startsWith("/") ? form.image : `/${form.image}`} alt="Preview" style={{ height: "42px", maxWidth: "80px", objectFit: "contain", borderRadius: "3px", background: "#fff", padding: "2px", border: "1px solid #e2e8f0" }} onError={(e) => { e.target.style.display = 'none'; }} />
                                    <div style={{ fontSize: "11px", color: "#475569", overflow: "hidden", textOverflow: "ellipsis" }}>
                                        <strong>Selected Image:</strong> <span style={{ fontFamily: "monospace", color: "#02699c" }}>{form.image}</span>
                                    </div>
                                </div>
                            )}
                            <label>Composition<textarea value={form.composition} onChange={(event) => setForm({ ...form, composition: event.target.value })} rows="3" /></label>
                            <label>Packing<input value={form.packing} onChange={(event) => setForm({ ...form, packing: event.target.value })} /></label>
                            <button className="admin-primary" disabled={busy}>{busy ? "Saving..." : editingId ? "Save changes" : "Add to catalogue"}<span aria-hidden="true">-&gt;</span></button>
                        </form>
                        <section className="catalogue-panel"><div className="panel-heading"><div><span className="admin-kicker">DATABASE CATALOGUE</span><h2>Products <span className="result-count">{products.length}</span></h2></div><button className="quiet-button" onClick={() => refreshData()}>Refresh</button></div>
                            <div className="catalogue-filters">
                                <label className="catalogue-search"><span aria-hidden="true">⌕</span><input type="search" value={productSearch} onChange={(event) => setProductSearch(event.target.value)} placeholder="Search name, type or composition" aria-label="Search products" />{productSearch && <button type="button" onClick={() => setProductSearch("")} aria-label="Clear product search">×</button>}</label>
                                <label className="catalogue-area-filter"><span>Care area</span><select value={careAreaFilter} onChange={(event) => setCareAreaFilter(event.target.value)} aria-label="Filter products by care area"><option value="all">All care areas</option>{careAreas.map((area) => <option key={area} value={area}>{area}</option>)}</select></label>
                                <span className="filter-result-count">Showing {filteredProducts.length} of {products.length}</span>
                            </div>
                            <div className="product-table-head"><span>PRODUCT</span><span>CARE AREA</span><span>ACTIONS</span></div>
                            <div className="product-table">{filteredProducts.length ? filteredProducts.map((product) => <article className="product-row" key={product._id}><div><strong>{product.name}</strong><small>{product.type || "Product"}{product.productCategory ? ` · ${product.productCategory}` : ""}</small></div><span className="area-tag">{product.category}</span><div className="row-actions"><button onClick={() => beginEdit(product)}>Edit</button><button className="delete-action" onClick={() => removeProduct(product)}>Remove</button></div></article>) : <p className="catalogue-no-results">No products match those filters.</p>}</div>
                        </section>
                    </div>
                ) : (
                    <section className="enquiries-panel"><div className="panel-heading"><div><span className="admin-kicker">CONTACT FORM SUBMISSIONS</span><h2>Enquiries <span className="result-count">{enquiries.length}</span></h2></div><button className="quiet-button" onClick={() => refreshData()}>Refresh</button></div>
                        {enquiries.length ? <div className="enquiry-list">{enquiries.map((enquiry) => <article className="enquiry-row" key={enquiry._id}><div className="enquiry-person"><strong>{enquiry.name}</strong><a href={`mailto:${enquiry.email}`}>{enquiry.email}</a><a href={`tel:${enquiry.phone}`}>{enquiry.phone}</a></div><div className="enquiry-copy"><span className="admin-kicker">{enquiry.subject}</span><p>{enquiry.message}</p><small>{new Date(enquiry.createdAt).toLocaleString()}</small></div><select aria-label={`Update ${enquiry.name} enquiry status`} value={enquiry.status} onChange={(event) => updateEnquiry(enquiry, event.target.value)}><option value="new">New</option><option value="contacted">Contacted</option><option value="closed">Closed</option></select></article>)}</div> : <div className="admin-empty"><span>✉</span><h3>No enquiries yet</h3><p>Contact form submissions from the existing website will appear here.</p></div>}
                    </section>
                )}
                <p className="admin-footer-note">Changes are saved to the product database. Product image files should remain in the existing site&apos;s assets folder.</p>
            </section>
        </main>
    );
}
