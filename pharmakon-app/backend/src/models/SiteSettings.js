import mongoose from "mongoose";

const siteSettingsSchema = new mongoose.Schema({
    key: { type: String, default: "primary", unique: true },
    companyName: { type: String, default: "PARUL HEALTHCARE PVT LTD" },
    email: { type: String, default: "info@pharmakonlifesciences.com" },
    phone: { type: String, default: "+91 9802 002 727" },
    address: { type: String, default: "163G, SEC 3, Hsiidc, Karnal, India" },
    gst: { type: String, default: "06AAJCP3441L1Z8" },
    facebook: { type: String, default: "" },
    instagram: { type: String, default: "" },
    linkedin: { type: String, default: "" },
    twitter: { type: String, default: "" },
    heroTitle: { type: String, default: "PHARMAKON LIFESCIENCES" },
    heroSubtitle: { type: String, default: "Quality | Service | Trust" },
    heroDescription: { type: String, default: "Pharmakon is a professionally driven pharmaceutical company committed to delivering superior-quality healthcare products through innovation, integrity, and excellence." },
    aboutTitle: { type: String, default: "Welcome to a defining legacy of trust, excellence, and healthcare innovation." },
    aboutParagraph1: { type: String, default: "We are Pharmakon Life Sciences, an esteemed division of Parul Health Care Pvt. Ltd. Established in 2007, our company was built from the ground up by our Founder Director, S. Manmohan Singh. Drawing upon his extensive experience as a core pharmaceutical veteran, the company was born from a singular, driving mission: to transform patient care through better healthcare products." },
    aboutParagraph2: { type: String, default: "We planted our roots with a powerful and unwavering ethos, dedicated entirely to advancing healthcare through the production and distribution of top-tier, quality medicines. Through years of relentless dedication, we have successfully translated that noble purpose into a commanding Pan-India footprint, earning the confidence of medical professionals across the nation, reaching communities far and wide." },
    aboutParagraph3: { type: String, default: "At Pharmakon Life Sciences, we pride ourselves on the fact that we do not just deliver a comprehensive and widely accepted product range; we consistently deliver an ecosystem of uncompromising quality, stringent standards, ethical business practices and a highly responsive service team that our partners can rely on to meet the evolving needs of the healthcare sector." },
    visionHeading: { type: String, default: "Advancing healthcare with quality medicines, ethical practice, and dependable partnerships." },
    visionDescription: { type: String, default: "At Pharmakon Life Sciences, our direction is clear: create better access to trusted pharmaceutical products while supporting partners with responsive service, strong quality standards, and long-term business confidence." },
    visionStatement: { type: String, default: "We are driven to continue innovating for a healthier tomorrow, while remaining grounded in trust today." },
    visionDetails: { type: String, default: "We aim to build a strong Pan-India presence by delivering reliable pharmaceutical solutions that improve lives and earn the confidence of doctors, partners, and patients." },
    missionStatement: { type: String, default: "To provide high-quality pharmaceuticals accompanied by unwavering service." },
    missionDetails: { type: String, default: "Our mission is to provide high-quality products, ethical business practices, responsive support, and scalable pharma solutions for PCD, third-party manufacturing, and institutional supply needs." },
}, { timestamps: true });

export default mongoose.models.SiteSettings || mongoose.model("SiteSettings", siteSettingsSchema);