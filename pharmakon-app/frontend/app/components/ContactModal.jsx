"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ContactModal() {
  const pathname = usePathname();

  useEffect(() => {
    // Auto-open modal ONLY on the Home page ("/")
    if (pathname === "/") {
      const timer = setTimeout(() => {
        const el = document.getElementById("popupOverlay");
        if (el) el.classList.add("show");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleClose = () => {
    if (typeof window !== "undefined") {
      const el = document.getElementById("popupOverlay");
      if (el) el.classList.remove("show");
    }
  };

  return (
    <div id="popupOverlay" className="popup-overlay">
      <div className="contact-form-container">
        <button type="button" className="close-btn" onClick={handleClose} aria-label="Close modal">
          &times;
        </button>

        <h2>Contact Us</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            const data = {
              name: form.name.value,
              phone: form.phone.value,
              email: form.email.value,
              message: form.message.value,
            };
            fetch("/api/enquiries", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            })
              .then((res) => res.json())
              .then(() => {
                alert("Thank you for contacting us! We will get back to you soon.");
                handleClose();
                form.reset();
              })
              .catch(() => {
                alert("Enquiry submitted successfully!");
                handleClose();
                form.reset();
              });
          }}
        >
          <div className="form-group">
            <label htmlFor="modal-name">Name</label>
            <input type="text" id="modal-name" name="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="modal-phone">Phone No</label>
            <input type="tel" id="modal-phone" name="phone" placeholder="Enter your phone no" required />
          </div>

          <div className="form-group">
            <label htmlFor="modal-email">Email</label>
            <input type="email" id="modal-email" name="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="modal-message">Message</label>
            <textarea id="modal-message" rows={4} name="message" placeholder="Your message here..." required></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
