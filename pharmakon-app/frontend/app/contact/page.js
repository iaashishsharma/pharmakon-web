import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact Us - PHARMAKON LIFESCIENCES",
};

export default function ContactPage() {
  return (
    <>
      <div className="page-wrapper">
        <Header />

        {/* Hero Breadcrumb */}
        <div className="gt-breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb-bg.jpg')" }}>
          <div className="gt-right-shape">
            <img src="/assets/img/breadcrumb-shape.jpg" alt="img" />
          </div>
          <div className="container">
            <div className="gt-page-heading">
              <div className="gt-breadcrumb-sub-title">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">CONTACT US</h1>
              </div>
              <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                <li><Link href="/">Home</Link></li>
                <li><i className="fa-solid fa-chevron-right"></i></li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Contact Section */}
        <section className="contact-page-section">
          <div className="container">
            <div className="contact-page-grid">
              <div className="contact-info-panel wow fadeInUp" data-wow-delay=".2s">
                <span className="contact-kicker">Corporate Contact</span>
                <h2>Reach our team for pharma partnerships and product assistance.</h2>
                <p>Use the details below for business enquiries, product availability, documentation, franchise discussion, or manufacturing coordination.</p>
                <ul className="contact-detail-list">
                  <li>
                    <div className="icon"><i className="fa-solid fa-building"></i></div>
                    <div>
                      <span>Company :</span>
                      <p>PARUL HEALTHCARE PVT LTD</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon"><i className="fa-solid fa-location-dot"></i></div>
                    <div>
                      <span>Address :</span>
                      <p>163G, SEC 3, Hsiidc, Karnal.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon"><i className="fa-solid fa-file-invoice"></i></div>
                    <div>
                      <span>GST :</span>
                      <p>06AAJCP3441L1Z8</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon"><i className="fa-solid fa-envelope"></i></div>
                    <div>
                      <span>Email :</span>
                      <a href="mailto:info@pharmakonlifesciences.com">info@pharmakonlifesciences.com</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon"><i className="fa-solid fa-phone"></i></div>
                    <div>
                      <span>Phone :</span>
                      <a href="tel:+919802002727">9802002727</a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="contact-form-panel wow fadeInUp" data-wow-delay=".3s">
                <span className="contact-kicker">Send Your Requirement</span>
                <h2>Tell us how we can support you.</h2>
                <p>Please share your requirement clearly so our team can connect you with the right department.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="contact-map-section">
          <div className="container">
            <div className="contact-map-header wow fadeInUp" data-wow-delay=".2s">
              <div>
                <span className="contact-kicker">Our Location</span>
                <h2>Visit Parul Healthcare Pvt Ltd, Karnal.</h2>
              </div>
              <p>Located at HSIIDC, Karnal, our office supports partners and healthcare businesses with professional coordination and dependable service.</p>
            </div>
            <div className="contact-map-frame wow fadeInUp" data-wow-delay=".3s">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.830012542831!2d76.98362532553935!3d29.666706725116047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e7025c35e54bf%3A0x32c774c487b85bc2!2sParul%20Healthcare%20Pvt%20Ltd%20Third%20Party%20Manufacturing!5e0!3m2!1sen!2sin!4v1782410845382!5m2!1sen!2sin"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Parul Healthcare Pvt Ltd Third Party Manufacturing Google Map"
              ></iframe>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
