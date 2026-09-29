"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    const apiBase = typeof window !== "undefined" && window.PHARMAKON_API_URL
      ? window.PHARMAKON_API_URL
      : "http://localhost:5000";

    try {
      const res = await fetch(`${apiBase}/api/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          loading: false,
          success: true,
          message: "Thank you! Your message has been sent successfully. Our team will contact you shortly.",
        });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus({
          loading: false,
          success: false,
          message: data.message || "Failed to submit message. Please try again or call us directly.",
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        message: "Unable to reach server. Please check your connection or contact us via phone/WhatsApp.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} id="contact-form">
      {status.message && (
        <div
          className={`alert ${status.success ? "alert-success" : "alert-danger"} mb-4`}
          style={{ padding: "12px 16px", borderRadius: "6px", fontSize: "14px", fontWeight: "600" }}
        >
          {status.message}
        </div>
      )}
      <div className="contact-form-grid">
        <div className="contact-form-field">
          <label htmlFor="name">Full Name :</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-form-field">
          <label htmlFor="phone">Phone No :</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-form-field full">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter business email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-form-field full">
          <label htmlFor="message">Message :</label>
          <textarea
            name="message"
            id="message"
            placeholder="Mention product, franchise, third-party manufacturing, or supply requirement"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          ></textarea>
        </div>
      </div>
      <div className="contact-submit-row mt-3">
        <button type="submit" className="gt-theme-btn" disabled={status.loading}>
          <span className="gt-text-btn">
            <span className="gt-text-2">
              {status.loading ? "SENDING..." : "SEND MESSAGE"}{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </span>
        </button>
      </div>
    </form>
  );
}
