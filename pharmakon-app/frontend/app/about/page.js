import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";
import AboutSpecialStudio from "../components/AboutSpecialStudio";

export const metadata = {
  title: "About Us - PHARMAKON LIFESCIENCES",
};

export default function AboutPage() {
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
                <h1 className="wow fadeInUp" data-wow-delay=".3s">ABOUT US</h1>
              </div>
              <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                <li><Link href="/">Home</Link></li>
                <li><i className="fa-solid fa-chevron-right"></i></li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="about-legacy-section section-padding">
          <div className="container">
            <div className="about-legacy-grid">
              <div className="about-legacy-content wow fadeInUp" data-wow-delay=".2s">
                <span className="about-kicker">About Pharmakon Life Sciences</span>
                <h2>Welcome to a defining legacy of trust, excellence, and healthcare innovation.</h2>
                <p>
                  We are Pharmakon Life Sciences, an esteemed division of Parul Health Care Pvt. Ltd. Established in 2007, our company was built from the ground up by our Founder Director, S. Manmohan Singh. Drawing upon his extensive experience as a core pharmaceutical veteran, the company was born from a singular, driving mission: to transform patient care through better healthcare products.
                </p>
                <p>
                  We planted our roots with a powerful and unwavering ethos, dedicated entirely to advancing healthcare through the production and distribution of top-tier, quality medicines. Through years of relentless dedication, we have successfully translated that noble purpose into a commanding Pan-India footprint, earning the confidence of medical professionals across the nation. reaching communities far and wide.
                </p>
                <p>
                  At Pharmakon Life Sciences, we pride ourselves on the fact that we do not just deliver a comprehensive and widely accepted product range; we consistently deliver an ecosystem of uncompromising quality, stringent standards, ethical business practices and highly responsive service team that our partners can always rely on to meet the evolving needs of the healthcare sector.
                </p>
              </div>
              <div className="about-legacy-panel pharma-showcase-panel wow fadeInRight" data-wow-delay=".3s">
                <div className="pharma-visual-showcase" aria-label="Pharmakon Life Sciences gallery">
                  <div className="pharma-visual-main">
                    <img id="aboutShowcaseImage" src="/assets/img/home-3/about/new.jpg" alt="Pharmakon Life Sciences product portfolio" />
                  </div>
                  <div className="pharma-visual-strip">
                    <div className="pharma-visual-tile active" role="button" tabIndex={0}>
                      <img src="/assets/img/home-3/about/new-1.jpg" alt="Pharmakon manufacturing line" />
                    </div>
                    <div className="pharma-visual-tile" role="button" tabIndex={0}>
                      <img src="/assets/img/home-3/about/new-2.jpg" alt="Pharmakon healthcare support" />
                    </div>
                    <div className="pharma-visual-tile" role="button" tabIndex={0}>
                      <img src="/assets/img/home-3/about/about-01.jpg" alt="Pharmakon lab quality" />
                    </div>
                  </div>
                </div>
                <div className="about-panel-card">
                  <strong>Since 2007</strong>
                  <span>Built on trust, quality medicines, and patient-focused healthcare.</span>
                </div>
              </div>
            </div>

            <div className="about-value-grid">
              <div className="about-value-card wow fadeInUp" data-wow-delay=".2s">
                <i className="fa-solid fa-user-doctor"></i>
                <span>Founder Director</span>
                <h3>S. Manmohan Singh Ji</h3>
                <p>Guided by pharmaceutical experience and a focused mission to improve Pharma Products</p>
              </div>
              <div className="about-value-card wow fadeInUp" data-wow-delay=".3s">
                <i className="fa-solid fa-prescription-bottle-medical"></i>
                <span>Established</span>
                <h3>2007</h3>
                <p>A long-standing healthcare journey shaped by dedication and reliable service.</p>
              </div>
              <div className="about-value-card wow fadeInUp" data-wow-delay=".4s">
                <i className="fa-solid fa-truck-medical"></i>
                <span>Reach</span>
                <h3>Pan-India</h3>
                <p>Serving medical professionals, partners, and communities across the nation.</p>
              </div>
            </div>

            <AboutSpecialStudio />

            <div className="about-strengths-block mt-5">
              <div className="about-strengths-top">
                <div className="about-strengths-heading wow fadeInUp" data-wow-delay=".2s">
                  <span className="about-kicker">Our Strengths</span>
                  <h2>Built to support dependable pharmaceutical growth.</h2>
                </div>
                <div className="about-strengths-image wow fadeInRight" data-wow-delay=".3s">
                  <img src="/assets/img/home-3/about/new-1.jpg" alt="Pharmakon manufacturing strength" />
                </div>
              </div>
              <div className="about-strengths-grid">
                <div className="about-strength-card wow fadeInUp" data-wow-delay=".2s">
                  <i className="fa-solid fa-tablets"></i>
                  <h3>Comprehensive Portfolio</h3>
                  <p>A diverse and complete range of Gynae, Ortho, Derma, Neuro, General, Pediatric, and Dental products.</p>
                </div>
                <div className="about-strength-card wow fadeInUp" data-wow-delay=".3s">
                  <i className="fa-solid fa-heart-pulse"></i>
                  <h3>Established Trust</h3>
                  <p>Over 150 registered brands and more than 200 currently in the trademark process.</p>
                </div>
                <div className="about-strength-card wow fadeInUp" data-wow-delay=".4s">
                  <i className="fa-solid fa-barcode"></i>
                  <h3>Premium Packaging &amp; Compliance</h3>
                  <p>High-quality packaging aligned with market standards, featuring barcode integration for quick scanning in institutional and bulk supplies.</p>
                </div>
                <div className="about-strength-card wow fadeInUp" data-wow-delay=".2s">
                  <i className="fa-solid fa-capsules"></i>
                  <h3>Flexible Manufacturing</h3>
                  <p>Capabilities for third-party manufacturing and fulfilling bulk institutional supplies.</p>
                </div>
                <div className="about-strength-card wow fadeInUp" data-wow-delay=".3s">
                  <i className="fa-solid fa-briefcase-medical"></i>
                  <h3>Robust Marketing Support</h3>
                  <p>Extensive promotional tools and backups to empower your on-ground field activities.</p>
                </div>
                <div className="about-strength-card wow fadeInUp" data-wow-delay=".4s">
                  <i className="fa-solid fa-hand-holding-medical"></i>
                  <h3>Dedicated Service</h3>
                  <p>A professionally trained, responsive team committed to providing good services as per your customized business needs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-promise-section">
          <div className="container">
            <div className="about-promise-wrap wow fadeInUp" data-wow-delay=".2s">
              <div>
                <span className="about-kicker light">Our Promise</span>
                <h2>Quality, ethics, and responsive healthcare support.</h2>
              </div>
              <div className="about-promise-points">
                <div><i className="fa-solid fa-vials"></i> Uncompromising quality</div>
                <div><i className="fa-solid fa-file-medical"></i> Stringent standards</div>
                <div><i className="fa-solid fa-heart-pulse"></i> Ethical practices</div>
                <div><i className="fa-solid fa-kit-medical"></i> Responsive service team</div>
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
