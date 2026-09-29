import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
    phone: { type: String, required: true, trim: true, maxlength: 40 },
    subject: { type: String, required: true, trim: true, maxlength: 80 },
    message: { type: String, required: true, trim: true, maxlength: 4000 },
    status: { type: String, enum: ["new", "contacted", "closed"], default: "new" },
}, { timestamps: true });

export default mongoose.models.Enquiry || mongoose.model("Enquiry", enquirySchema);