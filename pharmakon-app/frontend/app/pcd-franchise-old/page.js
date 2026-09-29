import ContactModal from "../components/ContactModal";
import Link from "next/link";

export const metadata = {
  title: "PCD Pharma Franchise - PHARMAKON LIFESCIENCES",
};

export default function PcdFranchiseOldPage() {
  return (
    <>
      <div className="page-wrapper">
        
        <div id="preloader" className="preloader">
            <div className="animation-preloader">
                <div className="spinner">
                </div>
                <div className="txt-loading">
                    <span data-text-preloader="P" className="letters-loading">P</span>
                    <span data-text-preloader="H" className="letters-loading">H</span>
                    <span data-text-preloader="A" className="letters-loading">A</span>
                    <span data-text-preloader="R" className="letters-loading">R</span>
                    <span data-text-preloader="M" className="letters-loading">M</span>
                    <span data-text-preloader="A" className="letters-loading">A</span>
                    <span data-text-preloader="K" className="letters-loading">K</span>
                    <span data-text-preloader="O" className="letters-loading">O</span>
                    <span data-text-preloader="N" className="letters-loading">N</span>
                </div>
                <p className="text-center">Loading</p>
            </div>
            <div className="loader">
                <div className="row">
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                </div>
            </div>
        </div>

        
        <button id="gt-back-top" className="gt-back-to-top show">
            <i className="fa-solid fa-arrow-up"></i>
        </button>

        
        <div className="mouseCursor cursor-outer"></div>
        <div className="mouseCursor cursor-inner"></div>

        
        <div className="fix-area">
            <div className="offcanvas__info">
                <div className="offcanvas__wrapper">
                    <div className="offcanvas__content">
                        <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                            <div className="offcanvas__logo">
                                <Link href="/">
                                    <img src="/assets/img/logo/logo.png" alt="logo-img" />
                                </Link>
                            </div>
                            <div className="offcanvas__close">
                                <button>
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <p className="text d-none d-xl-block">
                            At PHARMAKON LIFESCIENCES, we are committed to delivering high-quality pharmaceutical
                            productsthrough advanced manufacturing, trusted third-party solutions, and reliable PCD
                            pharma servicesdesigned to support better healthcare outcomes.
                        </p>
                        <div className="mobile-menu fix mb-3"></div>
                        <div className="offcanvas__contact">
                            <h4>Contact Info</h4>
                            <ul>
                                <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon">
                                        <i className="fal fa-map-marker-alt"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                        <a target="_blank" href="#">163G, SEC 3, Hsiidc, Karnal.</a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon mr-15">
                                        <i className="fal fa-envelope"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                        <a href="mailto:info@example.com"><span className="mailto:info@pharmakonlifesciences.com
">info@pharmakonlifesciences.com
                                            </span></a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon mr-15">
                                        <i className="fal fa-clock"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                        <a target="_blank" href="#">Mod-friday, 09am -05pm</a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon mr-15">
                                        <i className="far fa-phone"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                        <a href="tel:+919802002727">+91 9802 002 727</a>
                                    </div>
                                </li>
                            </ul>
                            <div className="header-button mt-4">

                            </div>
                            <a href="#" className="gt-theme-btn">
                                <span className="gt-text-btn">
                                    <span className="gt-text-2">Contact Us <i className="fa-solid fa-arrow-right"></i></span>
                                </span>
                            </a>
                            <div className="social-icon d-flex align-items-center">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="offcanvas__overlay"></div>

        
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
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>

        
        <header id="header-sticky" className="header-1 header-3">
            <div className="container-fluid">
                <div className="mega-menu-wrapper">
                    <div className="header-main">
                        <div className="header-left">
                            <div className="logo">


                                <div className="logo-container-fade">
                                    <img src="/assets/img/logo/logo.png" alt="Logo 1" className="logo-fade img1" />
                                    <img src="/assets/img/logo/logo2.png" alt="Logo 2" className="logo-fade img2" />
                                </div>






                            </div>
                            <div className="mean__menu-wrapper">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className="has-dropdown active menu-thumb">
                                                <Link href="/">
                                                    About Us
                                                </Link>
                                                <ul className="submenu has-homemenu">
                                                    <li>
                                                        <div className="homemenu-items">
                                                            <div className="homemenu">
                                                                <div className="homemenu-thumb">
                                                                    <img src="/assets/img/header/home-1.jpg" alt="img" />
                                                                    <div className="demo-button">
                                                                        <Link href="/" className="gt-theme-btn">
                                                                            <span className="gt-text-btn">
                                                                                <span className="gt-text-2">Overview<i
                                                                                        className="fa-solid fa-arrow-right"></i></span>
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="homemenu-content text-center">
                                                                    <h4 className="homemenu-title">
                                                                        Overview
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="homemenu">
                                                                <div className="homemenu-thumb mb-15">
                                                                    <img src="/assets/img/header/home-2.jpg" alt="img" />
                                                                    <div className="demo-button">
                                                                        <Link href="/vision-mission"
                                                                            className="gt-theme-btn">
                                                                            <span className="gt-text-btn">
                                                                                <span className="gt-text-2"> Vision &
                                                                                    Mission <i
                                                                                        className="fa-solid fa-arrow-right"></i></span>
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="homemenu-content text-center">
                                                                    <h4 className="homemenu-title">
                                                                        Vision & Mission
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="homemenu">
                                                                <div className="homemenu-thumb mb-15">
                                                                    <img src="/assets/img/header/home-3.jpg" alt="img" />
                                                                    <div className="demo-button">
                                                                        <a href="#" className="gt-theme-btn">
                                                                            <span className="gt-text-btn">
                                                                                <span className="gt-text-2"> Manufacturing
                                                                                    Strength <i
                                                                                        className="fa-solid fa-arrow-right"></i></span>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="homemenu-content text-center">
                                                                    <h4 className="homemenu-title">
                                                                        Manufacturing Strength
                                                                    </h4>
                                                                </div>
                                                            </div>



                                                            <div className="homemenu">
                                                                <div className="homemenu-thumb mb-15">
                                                                    <img src="/assets/img/header/home-4.jpg" alt="img" />
                                                                    <div className="demo-button">
                                                                        <a href="#" className="gt-theme-btn">
                                                                            <span className="gt-text-btn">
                                                                                <span className="gt-text-2"> Contact Us <i
                                                                                        className="fa-solid fa-arrow-right"></i></span>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="homemenu-content text-center">
                                                                    <h4 className="homemenu-title">
                                                                        Contact Us
                                                                    </h4>
                                                                </div>
                                                            </div>








                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown active d-xl-none">
                                                <Link href="/" className="border-none">
                                                    About Us
                                                </Link>
                                                <ul className="submenu">
                                                    <li><a href="#">Overview</a></li>
                                                    <li><Link href="/vision-mission">Vision & Mission</Link></li>
                                                    <li><a href="#">Manufacturing Strength</a></li>
                                                    <li><a href="#">Our Team</a></li>
                                                    <li><a href="#">Contact Us</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <a href="#">
                                                    Our Products
                                                </a>
                                                <ul className="submenu">


                                                    <li><a href="#">Pharmakon Lifesciences</a></li>
                                                    <li><a href="#">Neuropathy Care</a></li>
                                                    <li><a href="#">Dental Care</a></li>
                                                    <li><a href="#">Dermatology Care</a></li>
                                                    <li><a href="#">Gynaecology Care</a></li>
                                                    <li><a href="#">Pediatric Care</a></li>
                                                    <li><a href="#">Dr. Anventor</a></li>

                                                </ul>
                                            </li>

                                            <li>
                                                <a href="#">
                                                    Third Party MANUFACTURING
                                                </a>
                                                <ul className="submenu">
                                                    <li><a href="#">Contract Manufacturing</a></li>
                                                    <li className="has-dropdown">
                                                        <a href="#">
                                                            Third Party Products List
                                                            <i className="fas fa-angle-right"></i>
                                                        </a>
                                                        <ul className="submenu">
                                                            <li><a href="#">Tablets</a></li>
                                                            <li><a href="#">Capsule</a></li>
                                                            <li><a href="#">Injection</a></li>
                                                            <li><a href="#">Syrups/ Dry syrups</a></li>
                                                            <li><a href="#">Herbals</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="has-dropdown">
                                                <Link href="/pcd-franchise">
                                                    Pcd Franchise
                                                </Link>

                                            </li>



                                            <li className="has-dropdown">
                                                <a href="#">
                                                    Contact Us
                                                </a>

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
                                    <h6>
                                        +91-88169-27222
                                    </h6>
                                </div>
                            </div>
                            <a href="#" className="gt-theme-btn">
                                <div className="border-glow-wrapper">
                                    <button className="border-glow-btn">New Launch</button>
                                </div>
                            </a>
                            <div className="header__hamburger d-xl-none my-auto">
                                <div className="sidebar__toggle">
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

        
        <div className="search-popup">
            <div className="search-popup__overlay search-toggler"></div>
            <div className="search-popup__content">
                <form role="search" method="get" className="search-popup__form" action="#">
                    <input type="text" id="search" name="search" placeholder="Search Here..." />
                    <button type="submit" aria-label="search submit" className="search-btn">
                        <span><i className="fa-regular fa-magnifying-glass"></i></span>
                    </button>
                </form>
            </div>
        </div>



        <div className="gt-breadcrumb-wrapper bg-cover" style={{"backgroundImage":"url('/assets/img/breadcrumb-bg.jpg')"}}>
            <div className="gt-right-shape"><img src="/assets/img/breadcrumb-shape.jpg" alt="img" /></div>
            <div className="container">
                <div className="gt-page-heading">
                    <div className="gt-breadcrumb-sub-title">
                        <h1 className="wow fadeInUp" data-wow-delay=".3s">PCD FRANCHISE</h1>
                    </div>
                    <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                        <li><Link href="/">Home</Link></li>
                        <li><i className="fa-solid fa-chevron-right"></i></li>
                        <li>PCD Franchise</li>
                    </ul>
                </div>
            </div>
        </div>

        <section className="pcd-hero">
            <div className="container">
                <div className="pcd-hero-grid">
                    <div className="wow fadeInUp" data-wow-delay=".2s">
                        <span className="pcd-kicker">Monopoly Franchise Opportunity</span>
                        <h2>Build a profitable pharma business with a trusted pharma brand.</h2>
                        <p>Join one of India&apos;s trusted pharma brands and build your own business with Pharmakon
                            Life Sciences. We offer monopoly-based Pharma Franchise opportunities across India with a
                            wide product range and dependable business support.</p>
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

        <section className="pcd-section pcd-why-section">
            <div className="container">
                <div className="pcd-why-feature">
                    <div className="pcd-why-image wow fadeInLeft" data-wow-delay=".2s">
                        <img src="/assets/img/pcd-2.png" alt="Pharmakon pharma product range" />
                        <div className="pcd-why-image-badge"><span>Partner</span>Growth Support</div>
                    </div>
                    <div>
                        <div className="pcd-why-copy wow fadeInUp" data-wow-delay=".25s">
                            <div className="pcd-heading">
                                <span className="pcd-kicker">Why Choose Us</span>
                                <h2>Why choose Pharmakon Life Sciences franchise?</h2>
                                <p>Ideal for pharma distributors, medical representatives, entrepreneurs, and healthcare
                                    professionals looking for a stable, scalable, and long-term pharma business with a
                                    wide product portfolio.</p>
                            </div>
                            <div className="pcd-stat-grid">
                                <div className="pcd-stat"><strong>400+</strong><span>Pharma and herbal products</span></div>
                                <div className="pcd-stat"><strong>30%-40%</strong><span>Profit margin, depending on
                                        category</span></div>
                                <div className="pcd-stat"><strong>Pan India</strong><span>Monopoly franchise
                                        opportunities</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pcd-card-grid">
                    <div className="pcd-card wow fadeInUp" data-wow-delay=".2s"><i className="fa-solid fa-award"></i>
                        <h3>Quality Standards</h3>
                        <ul>
                            <li>ISO and GMP-oriented manufacturing standards</li>
                            <li>Scientifically formulated pharma and Ayurvedic products</li>
                            <li>Strict safety, stability, and consistency checks</li>
                        </ul>
                    </div>
                    <div className="pcd-card wow fadeInUp" data-wow-delay=".35s"><i className="fa-solid fa-chart-line"></i>
                        <h3>Business Growth</h3>
                        <ul>
                            <li>Attractive profit margins</li>
                            <li>High-demand categories across major segments</li>
                            <li>Fast order processing and partner support</li>
                        </ul>
                    </div>
                    <div className="pcd-card wow fadeInUp" data-wow-delay=".5s"><i className="fa-solid fa-handshake-angle"></i>
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

        <section className="pcd-section soft">
            <div className="container">
                <div className="pcd-card-grid">
                    <div className="pcd-card wow fadeInUp" data-wow-delay=".2s"><i
                            className="fa-solid fa-location-crosshairs"></i>
                        <h3>Monopoly Franchise Benefits</h3>
                        <ul>
                            <li>Exclusive monopoly rights for your selected area</li>
                            <li>Zero competition from the same brand</li>
                            <li>Higher market control and repeat orders</li>
                            <li>Long-term relationship and territory protection</li>
                        </ul>
                    </div>
                    <div className="pcd-card wow fadeInUp" data-wow-delay=".3s"><i
                            className="fa-solid fa-indian-rupee-sign"></i>
                        <h3>Investment & Profit Margin</h3>
                        <ul>
                            <li>Investment required: Rs. 100,000 - Rs. 500,000 initial stock</li>
                            <li>Profit margin: 30% - 40%</li>
                            <li>Margin depends on product category</li>
                        </ul>
                    </div>
                    <div className="pcd-card wow fadeInUp" data-wow-delay=".4s"><i className="fa-solid fa-bullhorn"></i>
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
                            <p>All Pharmakon Life Sciences products are manufactured under strict quality norms and
                                developed with a balanced approach of classical Pharma knowledge and modern research.
                            </p>
                        </div>
                        <div className="pcd-card-grid">
                            <div className="pcd-card"><i className="fa-solid fa-industry"></i>
                                <h3>Strict Quality Norms</h3>
                                <p>Manufactured under strict quality norms for dependable product standards.</p>
                            </div>
                            <div className="pcd-card"><i className="fa-solid fa-flask-vial"></i>
                                <h3>Research-Based Formulation</h3>
                                <p>Based on classical Pharma knowledge and modern research.</p>
                            </div>
                            <div className="pcd-card"><i className="fa-solid fa-shield-heart"></i>
                                <h3>Safety & Consistency</h3>
                                <p>Tested for safety, stability, and consistency using high-quality Pharma ingredients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="pcd-section soft">
            <div className="container">
                <div className="pcd-heading wow fadeInUp" data-wow-delay=".2s">
                    <span className="pcd-kicker">Eligibility</span>
                    <h2>Who can apply for franchise?</h2>
                </div>
                <div className="pcd-card-grid">
                    <div className="pcd-card"><i className="fa-solid fa-warehouse"></i>
                        <h3>Trade Partners</h3>
                        <p>Pharma and Ayurvedic distributors, wholesalers, and existing channel partners.</p>
                    </div>
                    <div className="pcd-card"><i className="fa-solid fa-user-doctor"></i>
                        <h3>Healthcare Professionals</h3>
                        <p>Medical representatives, clinic owners, and healthcare professionals.</p>
                    </div>
                    <div className="pcd-card"><i className="fa-solid fa-briefcase"></i>
                        <h3>Entrepreneurs</h3>
                        <p>Business-minded entrepreneurs looking for a low-risk pharma business opportunity.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="pcd-section">
            <div className="container">
                <div className="pcd-heading wow fadeInUp" data-wow-delay=".2s">
                    <span className="pcd-kicker">How to Apply</span>
                    <h2>How to apply for Pharmakon Life Sciences franchise.</h2>
                    <p>Getting started is simple and transparent. We are offering pan-India monopoly franchise
                        opportunities in Tier 1 cities, Tier 2 and Tier 3 cities, rural markets, and semi-urban markets.
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
                                <li>Discuss your business goals, available monopoly areas, product range, investment,
                                    profit margins, and support benefits.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pcd-step wow fadeInUp" data-wow-delay=".35s">
                        <div className="pcd-step-number">3</div>
                        <div>
                            <h3>Select Territory & Investment</h3>
                            <ul>
                                <li>Finalize your monopoly area, initial stock investment, product categories, payment
                                    terms, and delivery schedule.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pcd-step wow fadeInUp" data-wow-delay=".45s">
                        <div className="pcd-step-number">4</div>
                        <div>
                            <h3>Confirmation & Documentation</h3>
                            <ul>
                                <li>Simple documentation process with GST number or PAN card and FSSAI in case of food
                                    supplements.</li>
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

        <section className="pcd-section soft">
            <div className="container">
                <div className="pcd-cta wow fadeInUp" data-wow-delay=".2s">
                    <div>
                        <h2>Ready to apply?</h2>
                        <p>Limited monopoly areas are available. Call or WhatsApp today to start your Pharmakon Life
                            Sciences franchise discussion.</p>
                    </div>
                    <div className="pcd-hero-actions">

                        <a href="https://api.whatsapp.com/send?phone=918816927222&text=I%20am%20interested%20in%20your%20products"
                            target="_blank" className="pcd-outline-btn"><i className="fa-brands fa-whatsapp"></i> WhatsApp
                            Now</a>
                    </div>
                </div>
            </div>
        </section>
        <footer className="gt-footer-section footer-bg">
            <div className="container">
                <div className="gt-footer-widget-wrapper">
                    <div className="row justify-content-between">
                        <div className="col-xl-5 col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".2s">
                            <div className="gt-footer-widget-items">
                                <div className="gt-widget-head">
                                    <Link href="/" className="gt-footer-logo">
                                        <img src="/assets/img/logo/logo1.png" alt="img" />
                                    </Link>
                                </div>
                                <div className="gt-footer-content">
                                    <p>
                                        Innovating Healthcare, Delivering Quality. Premium pharma manufacturing,
                                        third-party
                                        manufacturing and PCD pharma solutions with quality, trust and innovation at the
                                        core.
                                    </p>
                                    <ul className="gt-contact-list">
                                        <li>
                                            <div className="icon">
                                                <img src="/assets/img/call.png" alt="img" />
                                                <span>Phone</span>
                                            </div>
                                            <a href="tel:8816927222">8816927222</a>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <img src="/assets/img/location.png" alt="img" />
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
                                    <li>
                                        <a href="#">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Quality Assurance
                                        </a>
                                    </li>


                                    <li>
                                        <a href="#">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 ps-lg-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="gt-footer-widget-items">
                                <div className="gt-widget-head">
                                    <h3>Our Services</h3>
                                </div>
                                <ul className="gt-list-area">
                                    <li>
                                        <Link href="/pcd-franchise">
                                            Pcd Franchise
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Contract Manufacturing
                                        </a>
                                    </li>


                                    <li>
                                        <a href="#">
                                            Download
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
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
                                        <a
                                            href="mailto:info@pharmakonlifesciences.com">info@pharmakonlifesciences.com</a>
                                    </li>
                                </ul>
                                <div className="footer-socials">
                                    <a href="https://facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="https://instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="https://dribbble.com/"><i className="fa-brands fa-dribbble"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-wrapper">
                        <p>&copy; 2026&nbsp;<b>Pharmakon</b>. All Rights Reserved.</p>
                        <div className="gt-social-icon d-flex align-items-center wow fadeInUp" data-wow-delay=".5s">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-vimeo-v"></i></a>
                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>



    <link rel="stylesheet" href="1.css" />
    <a href="https://api.whatsapp.com/send?phone=919812027027&text=I am interested your pharmakon products"
        className="float" target="_blank">
        <span><img src="/assets/img/whatsapp.png" width="65" height="65" alt="" /></span>
    </a>
    <link rel="stylesheet" href="2.css" />
    <a href="tel:8816927222" className="new-float">
        <span><img src="/assets/img/download.png" width="70" height="70" alt="" /></span>
    </a>


    
    <ContactModal />


    <script dangerouslySetInnerHTML={{ __html: `
        // Page load hote hi form ko smoothly samne laane ke liye
        window.addEventListener('load', function () {
            setTimeout(function () {
                document.getElementById('popupOverlay').classList.add('show');
            }, 800); // 0.8 second ke delay ke baad form smoothly khulega
        });

        // Close Button par click karne par form band karne ke liye
        function closeForm() {
            var overlay = document.getElementById("popupOverlay"); if (overlay) overlay.classList.remove("show");
        }
    ` }} />
    <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('DOMContentLoaded', function () {
            var showcaseImage = document.getElementById('aboutShowcaseImage');
            var tiles = document.querySelectorAll('.pharma-visual-tile[data-image]');

            function activateTile(tile) {
                if (!showcaseImage || !tile) return;
                tiles.forEach(function (item) {
                    item.classList.remove('active');
                });
                tile.classList.add('active');
                showcaseImage.classList.add('is-changing');
                setTimeout(function () {
                    showcaseImage.src = tile.getAttribute('data-image');
                    showcaseImage.alt = tile.getAttribute('data-alt') || showcaseImage.alt;
                    showcaseImage.classList.remove('is-changing');
                }, 180);
            }

            tiles.forEach(function (tile) {
                tile.addEventListener('click', function () {
                    activateTile(tile);
                });
                tile.addEventListener('keydown', function (event) {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        activateTile(tile);
                    }
                });
            });

            var specialSection = document.querySelector('[data-about-special]');
            var counters = document.querySelectorAll('.about-stat-number[data-count]');
            var tabs = document.querySelectorAll('.about-focus-tabs button');
            var panels = document.querySelectorAll('.about-focus-panel');

            tabs.forEach(function (tab) {
                tab.addEventListener('click', function () {
                    var target = tab.getAttribute('data-panel');
                    tabs.forEach(function (item) {
                        item.classList.toggle('active', item === tab);
                        item.setAttribute('aria-selected', item === tab ? 'true' : 'false');
                    });
                    panels.forEach(function (panel) {
                        panel.classList.toggle('active', panel.getAttribute('data-panel') === target);
                    });
                });
            });

            function runCounter(counter) {
                var target = Number(counter.getAttribute('data-count')) || 0;
                var start = performance.now();
                var duration = 1300;
                function update(now) {
                    var progress = Math.min((now - start) / duration, 1);
                    var eased = 1 - Math.pow(1 - progress, 3);
                    counter.textContent = Math.floor(target * eased) + '+';
                    if (progress < 1) {
                        requestAnimationFrame(update);
                    }
                }
                requestAnimationFrame(update);
            }

            if ('IntersectionObserver' in window && specialSection) {
                var counterObserver = new IntersectionObserver(function (entries, observer) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            counters.forEach(runCounter);
                            observer.disconnect();
                        }
                    });
                }, { threshold: 0.35 });
                counterObserver.observe(specialSection);
            } else {
                counters.forEach(runCounter);
            }
        });
    ` }} />
    </>
  );
}
