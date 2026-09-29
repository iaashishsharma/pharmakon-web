"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Offcanvas Drawer for Mobile */}
      <div className="fix-area">
        <div className={`offcanvas__info ${mobileOpen ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img src="/assets/img/logo/logo.png" alt="Pharmakon" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">
                At PHARMAKON LIFESCIENCES, we are committed to delivering high-quality pharmaceutical products through advanced manufacturing, trusted third-party solutions and reliable PCD pharma services.
              </p>
              <div className="mobile-menu fix mb-3">
                <ul className="mean-nav">
                  <li><Link href="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
                  <li><Link href="/about" onClick={() => setMobileOpen(false)}>About Us</Link></li>
                  <li><Link href="/vision-mission" onClick={() => setMobileOpen(false)}>Vision & Mission</Link></li>
                  <li><Link href="/broad" onClick={() => setMobileOpen(false)}>Broad Range</Link></li>
                  <li><Link href="/dental-care" onClick={() => setMobileOpen(false)}>Dental Care</Link></li>
                  <li><Link href="/derma" onClick={() => setMobileOpen(false)}>Dermatology Care</Link></li>
                  <li><Link href="/gynaecology" onClick={() => setMobileOpen(false)}>Gynaecology Care</Link></li>
                  <li><Link href="/neuro" onClick={() => setMobileOpen(false)}>Neuropathy Care</Link></li>
                  <li><Link href="/oncology" onClick={() => setMobileOpen(false)}>Oncology Care</Link></li>
                  <li><Link href="/ortho" onClick={() => setMobileOpen(false)}>Orthopedic Care</Link></li>
                  <li><Link href="/paedtric" onClick={() => setMobileOpen(false)}>Pediatric Care</Link></li>
                  <li><Link href="/contractmanufacturing" onClick={() => setMobileOpen(false)}>Contract Manufacturing</Link></li>
                  <li><Link href="/pcd-franchise" onClick={() => setMobileOpen(false)}>PCD Franchise</Link></li>
                  <li><Link href="/contact" onClick={() => setMobileOpen(false)}>Contact Us</Link></li>
                </ul>
              </div>
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon"><i className="fal fa-map-marker-alt"></i></div>
                    <div className="offcanvas__contact-text"><a href="#">163G, SEC 3, Hsiidc, Karnal.</a></div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15"><i className="fal fa-envelope"></i></div>
                    <div className="offcanvas__contact-text"><a href="mailto:info@pharmakonlifesciences.com">info@pharmakonlifesciences.com</a></div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15"><i className="far fa-phone"></i></div>
                    <div className="offcanvas__contact-text"><a href="tel:+919802002727">+91 9802 002 727</a></div>
                  </li>
                </ul>
                <Link href="/contact" className="gt-theme-btn" onClick={() => setMobileOpen(false)}>
                  <span className="gt-text-btn"><span className="gt-text-2">Contact Us <i className="fa-solid fa-arrow-right"></i></span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`offcanvas__overlay ${mobileOpen ? "overlay-open" : ""}`} onClick={() => setMobileOpen(false)}></div>

      {/* Header Top Bar */}
      <div className="header-top-section-3">
        <div className="container-fluid">
          <div className="header-top-wrapper-3">
            <div className="header-left">
              <span>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:info@pharmakonlifesciences.com">info@pharmakonlifesciences.com</a>
              </span>
              <span>
                <i className="fa-solid fa-location-dot"></i>
                163G, SEC 3, Hsiidc, Karnal, India
              </span>
            </div>
            <div className="social-item">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Header Main Navigation */}
      <header id="header-sticky" className="header-1 header-3">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo" style={{ position: "relative", zIndex: 10000 }}>
                  <Link href="/" style={{ display: "block" }}>
                    <div className="logo-container-fade" style={{ display: "block" }}>
                      <img src="/assets/img/logo/logo.png" alt="Logo 1" className="logo-fade img1" />
                      <img src="/assets/img/logo/logo2.png" alt="Logo 2" className="logo-fade img2" />
                    </div>
                  </Link>
                </div>
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-dropdown active menu-thumb">
                          <Link href="/about">About Us</Link>
                          <ul className="submenu has-homemenu">
                            <li>
                              <div className="homemenu-items">
                                <div className="homemenu">
                                  <div className="homemenu-thumb">
                                    <img src="/assets/img/header/home-1.jpg" alt="img" />
                                    <div className="demo-button">
                                      <Link href="/about" className="gt-theme-btn">
                                        <span className="gt-text-btn">
                                          <span className="gt-text-2">Overview<i className="fa-solid fa-arrow-right"></i></span>
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">Overview</h4>
                                  </div>
                                </div>
                                <div className="homemenu">
                                  <div className="homemenu-thumb mb-15">
                                    <img src="/assets/img/header/home-2.jpg" alt="img" />
                                    <div className="demo-button">
                                      <Link href="/vision-mission" className="gt-theme-btn">
                                        <span className="gt-text-btn">
                                          <span className="gt-text-2">Vision & Mission <i className="fa-solid fa-arrow-right"></i></span>
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">Vision & Mission</h4>
                                  </div>
                                </div>
                                <div className="homemenu">
                                  <div className="homemenu-thumb mb-15">
                                    <img src="/assets/img/header/home-3.jpg" alt="img" />
                                    <div className="demo-button">
                                      <Link href="/contractmanufacturing" className="gt-theme-btn">
                                        <span className="gt-text-btn">
                                          <span className="gt-text-2">Manufacturing Strength <i className="fa-solid fa-arrow-right"></i></span>
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">Manufacturing Strength</h4>
                                  </div>
                                </div>
                                <div className="homemenu">
                                  <div className="homemenu-thumb mb-15">
                                    <img src="/assets/img/header/home-4.jpg" alt="img" />
                                    <div className="demo-button">
                                      <Link href="/contact" className="gt-theme-btn">
                                        <span className="gt-text-btn">
                                          <span className="gt-text-2">Contact Us <i className="fa-solid fa-arrow-right"></i></span>
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">Contact Us</h4>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown active d-xl-none">
                          <Link href="/about" className="border-none">About Us</Link>
                          <ul className="submenu">
                            <li><Link href="/about">Overview</Link></li>
                            <li><Link href="/vision-mission">Vision & Mission</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a href="#">Our Products</a>
                          <ul className="submenu">
                            <li><Link href="/broad">Pharmakon Lifesciences</Link></li>
                            <li><Link href="/neuro">Neuropathy Care</Link></li>
                            <li><Link href="/dental-care">Dental Care</Link></li>
                            <li><Link href="/derma">Dermatology Care</Link></li>
                            <li><Link href="/gynaecology">Gynaecology Care</Link></li>
                            <li><Link href="/paedtric">Pediatric Care</Link></li>
                            <li><Link href="/ortho">Orthopedic Care</Link></li>
                            <li><Link href="/oncology">Oncology Care</Link></li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <Link href="/contractmanufacturing">Third Party MANUFACTURING</Link>
                          <ul className="submenu">
                            <li><Link href="/contractmanufacturing">Contract Manufacturing</Link></li>
                            <li className="has-dropdown">
                              <Link href="/broad">
                                Third Party Products List <i className="fas fa-angle-right ms-1"></i>
                              </Link>
                              <ul className="submenu">
                                <li><Link href="/broad?search=tablet">Tablets</Link></li>
                                <li><Link href="/broad?search=capsule">Capsules</Link></li>
                                <li><Link href="/broad?search=injection">Injections</Link></li>
                                <li><Link href="/broad?search=syrup">Syrups / Dry Syrups</Link></li>
                                <li><Link href="/broad?search=herbal">Herbals</Link></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <Link href="/pcd-franchise">Pcd Franchise</Link>
                        </li>
                        <li className="has-dropdown">
                          <Link href="/contact">Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="header-right-icon-item">
                  <div className="phone-icon">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <div className="content">
                    <h6> Call us :</h6>
                    <h6>+91-88169-27222</h6>
                  </div>
                </div>
                <Link href="/broad" className="gt-theme-btn">
                  <div className="border-glow-wrapper">
                    <button className="border-glow-btn">New Launch</button>
                  </div>
                </Link>
                <div className="header__hamburger d-xl-none my-auto">
                  <div className="sidebar__toggle" onClick={() => setMobileOpen(true)}>
                    <div className="header-bar">
                      <img src="/assets/img/home-1/dot.svg" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
