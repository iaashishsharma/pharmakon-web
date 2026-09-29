import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";

export const metadata = {
  title: "Vision & Mission - PHARMAKON LIFESCIENCES",
};

export default function VisionMissionPage() {
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
                <h1 className="wow fadeInUp" data-wow-delay=".3s">VISION &amp; MISSION</h1>
              </div>
              <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                <li><Link href="/">Home</Link></li>
                <li><i className="fa-solid fa-chevron-right"></i></li>
                <li>Vision &amp; Mission</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vision & Mission Main Section */}
        <section className="about-legacy-section vision-mission-section section-padding">
          <div className="container">
            <div className="vision-hero-grid">
              <div className="vision-hero-content wow fadeInUp" data-wow-delay=".2s">
                <span className="about-kicker">Vision &amp; Mission</span>
                <h2>Advancing healthcare with quality medicines, ethical practice, and dependable partnerships.</h2>
                <p>
                  At Pharmakon Life Sciences, our direction is clear: create better access to trusted pharmaceutical products while supporting partners with responsive service, strong quality standards, and long-term business confidence.
                </p>
              </div>
              <div className="vision-hero-image wow fadeInRight" data-wow-delay=".3s">
                <img src="/assets/img/home-3/about/vision.jpg" alt="Pharmakon Life Sciences healthcare vision" />
                <div className="vision-floating-card">
                  <i className="fa-solid fa-heart-pulse"></i>
                  <span>Quality-led healthcare growth</span>
                </div>
              </div>
            </div>

            <div className="vision-mission-grid mt-5">
              <div className="vision-mission-card wow fadeInUp" data-wow-delay=".2s">
                <i className="fa-solid fa-eye"></i>
                <span>Our Vision</span>
                <h3>"We are driven to continue innovating for a healthier tomorrow, while remaining grounded in trust today."</h3>
                <p>We aim to build a strong Pan-India presence by delivering reliable pharmaceutical solutions that improve lives and earn the confidence of doctors, partners, and patients.</p>
              </div>
              <div className="vision-mission-card wow fadeInUp" data-wow-delay=".3s">
                <i className="fa-solid fa-bullseye"></i>
                <span>Our Mission</span>
                <h3>"To provide high-quality pharmaceuticals accompanied by unwavering service."</h3>
                <p>Our mission is to provide high-quality products, ethical business practices, responsive support, and scalable pharma solutions for PCD, third-party manufacturing, and institutional supply needs.</p>
              </div>
            </div>

            <div className="vision-image-story mt-5 wow fadeInUp" data-wow-delay=".2s">
              <div className="vision-story-image large">
                <img src="/assets/img/home-3/about/quality.jpg" alt="Pharmakon reliable healthcare vision" />
                <span><i className="fa-solid fa-check"></i> Quality commitment</span>
              </div>
              <div className="vision-story-image">
                <img src="/assets/img/home-3/about/partner.jpg" alt="Pharmakon pharma service mission" />
                <span><i className="fa-solid fa-users"></i> Partner support</span>
              </div>
              <div className="vision-story-image">
                <img src="/assets/img/home-3/about/growth.jpg" alt="Pharmakon trusted pharma growth" />
                <span><i className="fa-solid fa-handshake"></i> Trusted growth</span>
              </div>
            </div>

            <div className="vision-values-block mt-5">
              <div className="about-strengths-heading wow fadeInUp" data-wow-delay=".2s">
                <span className="about-kicker">What Guides Us</span>
                <h2>Values that keep our purpose practical and dependable.</h2>
              </div>
              <div className="vision-values-grid">
                <div className="vision-value-card wow fadeInUp" data-wow-delay=".2s">
                  <i className="fa-solid fa-award"></i>
                  <h3>Quality</h3>
                  <p>Consistent standards across product selection, packaging, and delivery.</p>
                </div>
                <div className="vision-value-card wow fadeInUp" data-wow-delay=".3s">
                  <i className="fa-solid fa-handshake"></i>
                  <h3>Trust</h3>
                  <p>Long-term relationships built through transparency and ethical practices.</p>
                </div>
                <div className="vision-value-card wow fadeInUp" data-wow-delay=".4s">
                  <i className="fa-solid fa-users"></i>
                  <h3>Service</h3>
                  <p>Responsive coordination and practical support for every partner.</p>
                </div>
                <div className="vision-value-card wow fadeInUp" data-wow-delay=".5s">
                  <i className="fa-solid fa-chart-line"></i>
                  <h3>Growth</h3>
                  <p>Scalable solutions designed to support strong pharmaceutical business expansion.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-promise-section vision-commitment-section">
          <div className="container">
            <div className="about-promise-wrap wow fadeInUp" data-wow-delay=".2s">
              <div>
                <span className="about-kicker light">Our Commitment</span>
                <h2>Focused on healthier communities and stronger pharma partnerships.</h2>
              </div>
              <div className="about-promise-points">
                <div><i className="fa-solid fa-vials"></i> Quality medicines</div>
                <div><i className="fa-solid fa-file-medical"></i> Ethical standards</div>
                <div><i className="fa-solid fa-truck"></i> Reliable supply</div>
                <div><i className="fa-solid fa-briefcase-medical"></i> Partner support</div>
              </div>
            </div>
          </div>
        </section>

        <ContactModal />
        <Footer />
      </div>
    </>
  );
}
