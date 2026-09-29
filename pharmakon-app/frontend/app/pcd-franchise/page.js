import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "PCD Pharma Franchise - PHARMAKON LIFESCIENCES",
  description: "Monopoly Pharma Franchise Opportunity with Pharmakon Life Sciences",
};

export default function PcdFranchisePage() {
  return (
    <>
      <div className="page-wrapper">
        <Header />

        {/* Hero Breadcrumb */}
        <div
          className="gt-breadcrumb-wrapper bg-cover"
          style={{ backgroundImage: "url('/assets/img/breadcrumb-bg.jpg')" }}
        >
          <div className="gt-right-shape">
            <img src="/assets/img/breadcrumb-shape.jpg" alt="img" />
          </div>
          <div className="container">
            <div className="gt-page-heading">
              <div className="gt-breadcrumb-sub-title">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  PCD FRANCHISE
                </h1>
              </div>
              <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i>
                </li>
                <li>PCD Franchise</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PCD Hero Section */}
        <section className="pcd-hero">
          <div className="container">
            <div className="pcd-hero-grid">
              <div className="wow fadeInUp" data-wow-delay=".2s">
                <span className="pcd-kicker">Monopoly Franchise Opportunity</span>
                <h2>Build a profitable pharma business with a trusted pharma brand.</h2>
                <p>
                  Join one of India&apos;s trusted pharma brands and build your own business with Pharmakon Life
                  Sciences. We offer monopoly-based Pharma Franchise opportunities across India with a wide product
                  range and dependable business support.
                </p>
                <div className="pcd-hero-actions">
                  <a href="tel:+918816927222" className="gt-theme-btn">
                    <span className="gt-text-btn">
                      <span className="gt-text-2">
                        Call Now <i className="fa-solid fa-phone"></i>
                      </span>
                    </span>
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=918816927222&text=I%20am%20interested%20in%20PCD%20Franchise"
                    target="_blank"
                    rel="noreferrer"
                    className="pcd-outline-btn"
                  >
                    <i className="fa-brands fa-whatsapp"></i> WhatsApp Enquiry
                  </a>
                </div>
                <div className="pcd-trust-strip">
                  <span>
                    <i className="fa-solid fa-circle-check"></i> Monopoly Rights
                  </span>
                  <span>
                    <i className="fa-solid fa-circle-check"></i> 300+ Products
                  </span>
                  <span>
                    <i className="fa-solid fa-circle-check"></i> 30%-40% Margin
                  </span>
                </div>
              </div>
              <div className="pcd-hero-visual wow fadeInRight" data-wow-delay=".3s">
                <img src="/assets/img/pcd-1.jpg" alt="Pharmakon Life Sciences PCD franchise support" />
                <div className="pcd-visual-badge">
                  <strong>PCD</strong>
                  <span>Monopoly franchise opportunity across India</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="pcd-section pcd-why-section">
          <div className="container">
            <div className="pcd-why-feature">
              <div className="pcd-why-image wow fadeInLeft" data-wow-delay=".2s">
                <img src="/assets/img/pcd-2.png" alt="Pharmakon pharma product range" />
                <div className="pcd-why-image-badge">
                  <span>Partner</span>Growth Support
                </div>
              </div>
              <div>
                <div className="pcd-why-copy wow fadeInUp" data-wow-delay=".25s">
                  <div className="pcd-heading">
                    <span className="pcd-kicker">Why Choose Us</span>
                    <h2>Why choose Pharmakon Life Sciences franchise?</h2>
                    <p>
                      Ideal for pharma distributors, medical representatives, entrepreneurs, and healthcare
                      professionals looking for a stable, scalable, and long-term pharma business with a wide product
                      portfolio.
                    </p>
                  </div>
                  <div className="pcd-stat-grid">
                    <div className="pcd-stat">
                      <strong>300+</strong>
                      <span>Pharma and herbal products</span>
                    </div>
                    <div className="pcd-stat">
                      <strong>30%-40%</strong>
                      <span>Profit margin, depending on category</span>
                    </div>
                    <div className="pcd-stat">
                      <strong>Pan India</strong>
                      <span>Monopoly franchise opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pcd-card-grid">
              <div className="pcd-card wow fadeInUp" data-wow-delay=".2s">
                <i className="fa-solid fa-award"></i>
                <h3>Quality Standards</h3>
                <ul>
                  <li>ISO and GMP-oriented manufacturing standards</li>
                  <li>Scientifically formulated pharma and Ayurvedic products</li>
                  <li>Strict safety, stability, and consistency checks</li>
                </ul>
              </div>
              <div className="pcd-card wow fadeInUp" data-wow-delay=".35s">
                <i className="fa-solid fa-chart-line"></i>
                <h3>Business Growth</h3>
                <ul>
                  <li>Attractive profit margins</li>
                  <li>High-demand categories across major segments</li>
                  <li>Fast order processing and partner support</li>
                </ul>
              </div>
              <div className="pcd-card wow fadeInUp" data-wow-delay=".5s">
                <i className="fa-solid fa-handshake-angle"></i>
                <h3>Ethical Support</h3>
                <ul>
                  <li>Transparent business model</li>
                  <li>Strong brand support</li>
                  <li>Experienced marketing guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits & Investment Section */}
        <section className="pcd-section soft">
          <div className="container">
            <div className="pcd-card-grid">
              <div className="pcd-card wow fadeInUp" data-wow-delay=".2s">
                <i className="fa-solid fa-location-crosshairs"></i>
                <h3>Monopoly Franchise Benefits</h3>
                <ul>
                  <li>Exclusive monopoly rights for your selected area</li>
                  <li>Zero competition from the same brand</li>
                  <li>Higher market control and repeat orders</li>
                  <li>Long-term relationship and territory protection</li>
                </ul>
              </div>
              <div className="pcd-card wow fadeInUp" data-wow-delay=".3s">
                <i className="fa-solid fa-indian-rupee-sign"></i>
                <h3>Investment & Profit Margin</h3>
                <ul>
                  <li>Investment required: Rs. 100,000 - Rs. 500,000 initial stock</li>
                  <li>Profit margin: 30% - 40%</li>
                  <li>Margin depends on product category</li>
                </ul>
              </div>
              <div className="pcd-card wow fadeInUp" data-wow-delay=".4s">
                <i className="fa-solid fa-bullhorn"></i>
                <h3>Promotional Support</h3>
                <ul>
                  <li>Visual aids and product literature</li>
                  <li>MR bags, banners, PDFs, and creatives</li>
                  <li>New product launch support</li>
                  <li>Digital and WhatsApp support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing & QA Section */}
        <section className="pcd-section pcd-apply-section">
          <div className="container">
            <div className="pcd-media-row">
              <div className="pcd-section-image wow fadeInLeft" data-wow-delay=".2s">
                <img src="/assets/img/pcd-3.jpg" alt="Pharmakon manufacturing and quality assurance" />
              </div>
              <div>
                <div className="pcd-heading wow fadeInUp" data-wow-delay=".2s">
                  <span className="pcd-kicker">Manufacturing & Quality Assurance</span>
                  <h2>Manufacturing & Quality Assurance</h2>
                  <p>
                    All Pharmakon Life Sciences products are manufactured under strict quality norms and developed with
                    a balanced approach of classical Pharma knowledge and modern research.
                  </p>
                </div>
                <div className="pcd-card-grid">
                  <div className="pcd-card">
                    <i className="fa-solid fa-industry"></i>
                    <h3>Strict Quality Norms</h3>
                    <p>Manufactured under strict quality norms for dependable product standards.</p>
                  </div>
                  <div className="pcd-card">
                    <i className="fa-solid fa-flask"></i>
                    <h3>Research-Based Formulation</h3>
                    <p>Based on classical Pharma knowledge and modern research.</p>
                  </div>
                  <div className="pcd-card">
                    <i className="fa-solid fa-shield-heart"></i>
                    <h3>Safety & Consistency</h3>
                    <p>Tested for safety, stability, and consistency using high-quality Pharma ingredients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="pcd-section soft">
          <div className="container">
            <div className="pcd-heading wow fadeInUp" data-wow-delay=".2s">
              <span className="pcd-kicker">Eligibility</span>
              <h2>Who can apply for franchise?</h2>
            </div>
            <div className="pcd-card-grid">
              <div className="pcd-card">
                <i className="fa-solid fa-warehouse"></i>
                <h3>Trade Partners</h3>
                <p>Pharma and Ayurvedic distributors, wholesalers, and existing channel partners.</p>
              </div>
              <div className="pcd-card">
                <i className="fa-solid fa-user-doctor"></i>
                <h3>Healthcare Professionals</h3>
                <p>Medical representatives, clinic owners, and healthcare professionals.</p>
              </div>
              <div className="pcd-card">
                <i className="fa-solid fa-briefcase"></i>
                <h3>Entrepreneurs</h3>
                <p>Business-minded entrepreneurs looking for a low-risk pharma business opportunity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps Section */}
        <section className="pcd-section pcd-process-section">
          <div className="container">
            <div className="pcd-heading wow fadeInUp" data-wow-delay=".2s">
              <span className="pcd-kicker">How to Apply</span>
              <h2>How to apply for Pharmakon Life Sciences franchise.</h2>
              <p>
                Getting started is simple and transparent. We are offering pan-India monopoly franchise opportunities
                in Tier 1 cities, Tier 2 and Tier 3 cities, rural markets, and semi-urban markets.
              </p>
            </div>
            <div className="pcd-step-list">
              <div className="pcd-step wow fadeInUp" data-wow-delay=".15s">
                <div className="pcd-step-number">1</div>
                <div>
                  <h3>Submit Your Enquiry</h3>
                  <ul>
                    <li>Share name, city or area, contact number, and business background if available.</li>
                  </ul>
                </div>
              </div>
              <div className="pcd-step wow fadeInUp" data-wow-delay=".25s">
                <div className="pcd-step-number">2</div>
                <div>
                  <h3>Discussion with Franchise Team</h3>
                  <ul>
                    <li>
                      Discuss your business goals, available monopoly areas, product range, investment, profit margins,
                      and support benefits.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pcd-step wow fadeInUp" data-wow-delay=".35s">
                <div className="pcd-step-number">3</div>
                <div>
                  <h3>Select Territory & Investment</h3>
                  <ul>
                    <li>
                      Finalize your monopoly area, initial stock investment, product categories, payment terms, and
                      delivery schedule.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pcd-step wow fadeInUp" data-wow-delay=".45s">
                <div className="pcd-step-number">4</div>
                <div>
                  <h3>Confirmation & Documentation</h3>
                  <ul>
                    <li>
                      Simple documentation process with GST number or PAN card and FSSAI in case of food supplements.
                    </li>
                    <li>No hidden charges or royalty.</li>
                  </ul>
                </div>
              </div>
              <div className="pcd-step wow fadeInUp" data-wow-delay=".55s">
                <div className="pcd-step-number">5</div>
                <div>
                  <h3>Order Dispatch & Business Launch</h3>
                  <ul>
                    <li>Products dispatched within 1-2 working days.</li>
                    <li>Transportation time depends on location.</li>
                    <li>Marketing materials and sales planning guidance are shared.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pcd-section soft">
          <div className="container">
            <div className="pcd-cta wow fadeInUp" data-wow-delay=".2s">
              <div>
                <h2>Ready To Apply?</h2>
                <p>
                  Limited monopoly areas are available. Call or WhatsApp today to start your Pharmakon Life Sciences
                  franchise discussion.
                </p>
              </div>
              <div className="pcd-hero-actions">
                <a href="tel:+919802002727" className="pcd-outline-btn">
                  +91 9802 002 727
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=919802002727&text=I%20am%20interested%20in%20your%20products"
                  target="_blank"
                  rel="noreferrer"
                  className="pcd-outline-btn"
                >
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
