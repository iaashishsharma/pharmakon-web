import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="gt-footer-section footer-bg">
        <div className="container">
          <div className="gt-footer-widget-wrapper">
            <div className="row justify-content-between">
              <div className="col-xl-5 col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".2s">
                <div className="gt-footer-widget-items">
                  <div className="gt-widget-head">
                    <Link href="/" className="gt-footer-logo">
                      <img src="/assets/img/logo/logo1.png" alt="Pharmakon" style={{ maxHeight: "60px" }} />
                    </Link>
                  </div>
                  <div className="gt-footer-content">
                    <p>
                      Innovating Healthcare, Delivering Quality. Premium pharma manufacturing,
                      third-party manufacturing and PCD pharma solutions with quality, trust and innovation at the core.
                    </p>
                    <ul className="gt-contact-list">
                      <li>
                        <div className="icon">
                          <img src="/assets/img/call.png" alt="Phone" />
                          <span>Phone</span>
                        </div>
                        <a href="tel:8816927222">8816927222</a>
                      </li>
                      <li>
                        <div className="icon">
                          <img src="/assets/img/location.png" alt="Location" />
                          <span>Location</span>
                        </div>
                        Karnal, Haryana, India
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="gt-footer-widget-items">
                  <div className="gt-widget-head">
                    <h3>Useful Links</h3>
                  </div>
                  <ul className="gt-list-area">
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/vision-mission">Quality Assurance</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-2 ps-lg-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                <div className="gt-footer-widget-items">
                  <div className="gt-widget-head">
                    <h3>Our Services</h3>
                  </div>
                  <ul className="gt-list-area">
                    <li><Link href="/pcd-franchise">Pcd Franchise</Link></li>
                    <li><Link href="/contractmanufacturing">Contract Manufacturing</Link></li>
                    <li><Link href="/broad">Products Catalogue</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                <div className="gt-footer-widget-items">
                  <div className="gt-widget-head">
                    <h3>Our Contact</h3>
                  </div>
                  <ul className="gt-contact-content">
                    <li>
                      <span><i className="fa-solid fa-location-dot"></i></span>
                      163G, SEC 3, Hsiidc, Karnal, India
                    </li>
                    <li>
                      <span><i className="fa-solid fa-phone"></i></span>
                      <a href="tel:8816927222">8816927222</a>
                    </li>
                    <li>
                      <span><i className="fa-solid fa-envelope"></i></span>
                      <a href="mailto:info@pharmakonlifesciences.com">info@pharmakonlifesciences.com</a>
                    </li>
                  </ul>
                  <div className="footer-socials">
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://instagram.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-wrapper">
              <p>© 2026 <b>Pharmakon</b>. All Rights Reserved.</p>
              <div className="gt-social-icon d-flex align-items-center wow fadeInUp" data-wow-delay=".5s">
                <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://vimeo.com/" target="_blank" rel="noreferrer" aria-label="Vimeo"><i className="fa-brands fa-vimeo-v"></i></a>
                <a href="https://pinterest.com/" target="_blank" rel="noreferrer" aria-label="Pinterest"><i className="fa-brands fa-pinterest-p"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <a href="https://api.whatsapp.com/send?phone=919812027027&text=I%20am%20interested%20your%20pharmakon%20products" className="float" target="_blank" rel="noreferrer">
        <span><img src="/assets/img/whatsapp.png" width="65" height="65" alt="whatsapp" /></span>
      </a>
      <a href="tel:8816927222" className="new-float">
        <span><img src="/assets/img/download.png" width="70" height="70" alt="call" /></span>
      </a>
    </>
  );
}

