import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contract Manufacturing | PHARMAKON LIFESCIENCES",
};

export default function ContractmanufacturingPage() {
  return (
    <>
      <div className="page-wrapper cm-page">
        <Header />

        {/* Hero Breadcrumb */}
        <div className="gt-breadcrumb-wrapper cm-breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb-bg.jpg')" }}>
          <div className="gt-right-shape">
            <img src="/assets/img/breadcrumb-shape.jpg" alt="img" />
          </div>
          <div className="container">
            <div className="gt-page-heading">
              <div className="gt-breadcrumb-sub-title">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">CONTRACT MANUFACTURING</h1>
              </div>
              <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                <li><Link href="/">Home</Link></li>
                <li><i className="fa-solid fa-chevron-right"></i></li>
                <li>Contract Manufacturing</li>
              </ul>
            </div>
          </div>
        </div>

        <main className="cm-page">
          <section className="cm-section cm-intro">
            <div className="container">
              <div className="cm-intro-grid">
                <div className="cm-rich-text">
                  <span className="cm-kicker">Third-Party & Contract Manufacturing</span>
                  <div className="cm-section-title">
                    <h2>Your trusted manufacturing partner for premium pharmaceutical products.</h2>
                  </div>
                  <p>
                    At Pharmakon Lifesciences, we specialize in Third-Party Manufacturing and Contract Manufacturing of high-quality pharmaceutical products. Backed by experienced professionals, advanced manufacturing facilities, and a commitment to quality, we help brands transform their ideas into market-ready healthcare solutions with complete reliability and confidentiality.
                  </p>
                  <p>
                    Whether you're launching a new pharmaceutical brand or expanding your existing product portfolio, Pharmakon Lifesciences provides end-to-end manufacturing solutions tailored to your business goals.
                  </p>
                  <div className="cm-intro-actions">
                    <a href="tel:8816927222" className="cm-btn cm-btn-primary">
                      Call Now <i className="fa-solid fa-phone"></i>
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=919812027027&text=I%20am%20interested%20in%20Pharmakon%20contract%20manufacturing"
                      className="cm-btn cm-btn-outline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp <i className="fa-brands fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
                <figure className="cm-image-stack cm-image-single">
                  <img src="/assets/images/pharma-contract-manufacturing.webp" alt="Pharmaceutical contract manufacturing facility" />
                  <figcaption>
                    <i className="fa-solid fa-kit-medical"></i>
                    Advanced manufacturing support with reliable quality, documentation, and dispatch planning.
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>

          <section className="cm-stats">
            <div className="container">
              <div className="cm-stat-grid">
                <div className="cm-stat">
                  <i className="fa-solid fa-award"></i>
                  <h3>WHO-GMP</h3>
                  <p>GMP-compliant production systems with controlled quality practices.</p>
                </div>
                <div className="cm-stat">
                  <i className="fa-solid fa-vials"></i>
                  <h3>Custom Formulations</h3>
                  <p>Product development support aligned with brand and market needs.</p>
                </div>
                <div className="cm-stat">
                  <i className="fa-solid fa-tablets"></i>
                  <h3>Flexible Capacity</h3>
                  <p>Pilot, medium-scale, and large-volume manufacturing solutions.</p>
                </div>
                <div className="cm-stat">
                  <i className="fa-solid fa-handshake"></i>
                  <h3>Full Support</h3>
                  <p>Documentation, packaging guidance, and technical consultation.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="cm-section">
            <div className="container">
              <div className="row align-items-center g-5">
                <div className="col-lg-6">
                  <div className="cm-section-title">
                    <span className="cm-kicker">Manufacturing Expertise</span>
                    <h2>End-to-end solutions tailored to your business goals.</h2>
                  </div>
                  <div className="cm-rich-text">
                    <p>
                      Our partnership extends beyond manufacturing. We provide continuous technical assistance, product development support, packaging guidance, documentation support, and production consultation to help your pharmaceutical products succeed in a competitive marketplace.
                    </p>
                    <p>
                      Every stage, from raw material procurement to production, packaging, and dispatch, follows clear quality and safety protocols to ensure consistent manufacturing excellence.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <figure className="cm-image-stack cm-image-single cm-image-full">
                    <img src="/assets/images/Custom-Branding-and-Packaging-Available (1).jpeg" alt="Pharmaceutical branding and packaging" />
                    <figcaption>
                      <i className="fa-solid fa-prescription-bottle-medical"></i>
                      Custom branding, packaging guidance, and dispatch-ready presentation for growing pharma brands.
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>

          <section className="cm-section cm-section-soft">
            <div className="container cm-media-showcase">
              <div className="cm-section-title text-center">
                <span className="cm-kicker justify-content-center">Professional Capabilities</span>
                <h2>Capability-focused support for quality pharma manufacturing.</h2>
              </div>
              <div className="cm-capability-layout">
                <figure className="cm-capability-photo">
                  <img src="/assets/images/images.jpg" alt="Pharmaceutical product capability display" />
                </figure>
                <div className="cm-capability-grid">
                  <div className="cm-capability-card">
                    <i className="fa-solid fa-vials"></i>
                    <h3>Formulation Support</h3>
                    <p>Technical assistance for customized pharmaceutical formulations aligned with therapeutic and market requirements.</p>
                  </div>
                  <div className="cm-capability-card">
                    <i className="fa-solid fa-award"></i>
                    <h3>Quality Systems</h3>
                    <p>Batch control, testing discipline, and quality-focused processes for dependable manufacturing output.</p>
                  </div>
                  <div className="cm-capability-card">
                    <i className="fa-solid fa-prescription-bottle-medical"></i>
                    <h3>Product Readiness</h3>
                    <p>Packaging guidance and presentation support to make products ready for professional market launch.</p>
                  </div>
                  <div className="cm-capability-card">
                    <i className="fa-solid fa-truck-medical"></i>
                    <h3>Reliable Dispatch</h3>
                    <p>Organized documentation, production coordination, and timely dispatch support for business continuity.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="cm-section-title text-center">
                <span className="cm-kicker justify-content-center">What We Deliver</span>
                <h2>Reliable manufacturing built around quality, compliance, and confidentiality.</h2>
              </div>
              <div className="cm-service-grid">
                <div className="cm-service">
                  <span className="cm-service-icon"><i className="fa-solid fa-vials"></i></span>
                  <h3>Customized Product Development</h3>
                  <p>Our formulation experts, scientists, and quality professionals work closely with you to develop customized pharmaceutical formulations that align with your brand identity, therapeutic objectives, and market requirements.</p>
                </div>
                <div className="cm-service">
                  <span className="cm-service-icon"><i className="fa-solid fa-kit-medical"></i></span>
                  <h3>Advanced Manufacturing Facilities</h3>
                  <p>Our modern manufacturing facilities are equipped with state-of-the-art machinery and operate in accordance with WHO-GMP and Good Manufacturing Practices (GMP).</p>
                </div>
                <div className="cm-service">
                  <span className="cm-service-icon"><i className="fa-solid fa-award"></i></span>
                  <h3>Uncompromising Quality Assurance</h3>
                  <p>Every batch undergoes comprehensive testing to ensure purity, potency, safety, stability, and compliance with applicable quality standards.</p>
                </div>
                <div className="cm-service">
                  <span className="cm-service-icon"><i className="fa-solid fa-prescription-bottle-medical"></i></span>
                  <h3>Regulatory Compliance</h3>
                  <p>Our experienced regulatory team assists clients with technical documentation, quality records, and compliance requirements for a smooth manufacturing experience.</p>
                </div>
                <div className="cm-service">
                  <span className="cm-service-icon"><i className="fa-solid fa-user-doctor"></i></span>
                  <h3>Complete Confidentiality</h3>
                  <p>We safeguard your formulations, brand concepts, proprietary information, and intellectual property throughout every stage of the manufacturing process.</p>
                </div>
                <div className="cm-service">
                  <span className="cm-service-icon"><i className="fa-solid fa-truck-medical"></i></span>
                  <h3>Flexible Manufacturing Solutions</h3>
                  <p>Our scalable operations are designed to accommodate pilot batches, medium-scale production, or large-volume manufacturing while maintaining quality and timely delivery.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="cm-section">
            <div className="container">
              <div className="cm-section-title">
                <span className="cm-kicker">Manufacturing Flow</span>
                <h2>A clear process for dependable output.</h2>
              </div>
              <div className="cm-process">
                <div className="cm-process-step">
                  <h3>Requirement Study</h3>
                  <p>We understand your product goals, therapeutic category, batch size, and documentation needs.</p>
                </div>
                <div className="cm-process-step">
                  <h3>Development Support</h3>
                  <p>Our team supports formulation, packaging guidance, technical assistance, and compliance planning.</p>
                </div>
                <div className="cm-process-step">
                  <h3>Quality Production</h3>
                  <p>Manufacturing is handled through strict process control, quality checks, and GMP-led practices.</p>
                </div>
                <div className="cm-process-step">
                  <h3>Dispatch & Partnership</h3>
                  <p>Finished products are prepared for dispatch with reliable service and continued customer support.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="cm-section cm-section-soft">
            <div className="container">
              <div className="row g-4 align-items-stretch">
                <div className="col-lg-5">
                  <div className="cm-check-panel">
                    <h2>Why Choose Pharmakon Lifesciences?</h2>
                    <p>Partner with Pharmakon Lifesciences for reliable Third-Party and Contract Manufacturing services. Our expertise, advanced manufacturing capabilities, and customer-focused approach enable us to deliver high-quality pharmaceutical products that meet the highest industry standards.</p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <ul className="cm-check-list">
                    <li><i className="fa-solid fa-check"></i> WHO-GMP & GMP-Compliant Manufacturing</li>
                    <li><i className="fa-solid fa-check"></i> High-Quality Pharmaceutical Formulations</li>
                    <li><i className="fa-solid fa-check"></i> Customized Third-Party Manufacturing Solutions</li>
                    <li><i className="fa-solid fa-check"></i> Premium Pharmaceutical-Grade Raw Materials</li>
                    <li><i className="fa-solid fa-check"></i> Strict Quality Control & Batch Testing</li>
                    <li><i className="fa-solid fa-check"></i> Regulatory & Documentation Support</li>
                    <li><i className="fa-solid fa-check"></i> Complete Confidentiality & Intellectual Property Protection</li>
                    <li><i className="fa-solid fa-check"></i> Flexible Production Capacity</li>
                    <li><i className="fa-solid fa-check"></i> Timely Delivery & Reliable Service</li>
                    <li><i className="fa-solid fa-check"></i> Dedicated Technical & Customer Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="cm-cta">
            <div className="container">
              <div className="row align-items-center g-4">
                <div className="col-lg-8">
                  <h2>Let's Build Your Pharmaceutical Brand Together</h2>
                  <p>Whether you are a pharmaceutical company, healthcare distributor, marketing organization, or startup, we are committed to helping you bring safe, effective, and quality-assured medicines to the market. Together, let's manufacture quality pharmaceutical products that improve lives while building a strong and trusted healthcare brand.</p>
                </div>
                <div className="col-lg-4 text-lg-end">
                  <Link href="/contact" className="cm-btn cm-btn-primary">
                    Contact us today <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
