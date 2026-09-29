import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCatalog from "../components/ProductCatalog";
import { neuroProducts } from "../data/productsData";

export const metadata = {
  title: "Neuropathy Care - PHARMAKON LIFESCIENCES",
};

export default function NeuroPage() {
  return (
    <>
      <div className="page-wrapper">
        <Header />

        {/* Hero Breadcrumb */}
        <div className="gt-breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb-bg.jpg')" }}>
          <div className="gt-right-shape"><img src="/assets/img/breadcrumb-shape.jpg" alt="" /></div>
          <div className="container">
            <div className="gt-page-heading">
              <div className="gt-breadcrumb-sub-title">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">NEUROPATHY CARE</h1>
              </div>
              <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                <li><Link href="/">Home</Link></li>
                <li><i className="fa-solid fa-chevron-right"></i></li>
                <li>Our Products</li>
                <li><i className="fa-solid fa-chevron-right"></i></li>
                <li>Neuropathy Care</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Intro Banner */}
        <section className="derma-intro">
          <div className="container">
            <span className="eyebrow">NEUROLOGICAL FORMULATIONS</span>
            <h2>Comprehensive Neuropathy Care</h2>
            <p>Precision-formulated neuro care products supporting nerve health, pain management and neurological recovery.</p>
          </div>
        </section>

        {/* Main Product Catalog Grid Section */}
        <section className="gt-shop-section fix section-padding">
          <div className="container">
            <ProductCatalog
              initialProducts={neuroProducts}
              careArea="neuro"
              baseImgPath="/assets/img/products/neuro/"
            />
          </div>
        </section>

        {/* CTA Band */}
        <section className="dental-cta-band">
          <div className="container">
            <div className="dental-cta-wrap wow fadeInUp" data-wow-delay=".2s">
              <div>
                <h2>Partner with Pharmakon for Neuropathy Care.</h2>
                <p>Connect with our team for PCD franchise, contract manufacturing, catalogues and bulk supply support across neuro products.</p>
              </div>
              <div className="dental-cta-actions">
                <Link href="/contact" className="dental-btn dental-btn-primary">
                  Contact Us <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <a
                  href="https://api.whatsapp.com/send?phone=919812027027&text=I%20am%20interested%20in%20Pharmakon%20products"
                  className="dental-btn dental-btn-outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp <i className="fa-brands fa-whatsapp"></i>
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
