import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <div className="page-wrapper">
        
        <div id="preloader" className="preloader">
            <div className="animation-preloader">
                <div className="spinner">
                </div>
                <div className="txt-loading">
                    <span data-text-preloader="C" className="letters-loading">
                        C
                    </span>
                    <span data-text-preloader="O" className="letters-loading">
                        O
                    </span>
                    <span data-text-preloader="N" className="letters-loading">
                        N
                    </span>
                    <span data-text-preloader="Z" className="letters-loading">
                        Z
                    </span>
                    <span data-text-preloader="T" className="letters-loading">
                        T
                    </span>
                    <span data-text-preloader="R" className="letters-loading">
                        R
                    </span>
                    <span data-text-preloader="A" className="letters-loading">
                        A
                    </span>
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
                                    <img src="/assets/img/logo/black-logo.svg" alt="logo-img" />
                                </Link>
                            </div>
                            <div className="offcanvas__close">
                                <button>
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <p className="text d-none d-xl-block">
                            Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a
                            feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
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
                                        <a target="_blank" href="#">Main Street, Melbourne, Australia</a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon mr-15">
                                        <i className="fal fa-envelope"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                        <a href="mailto:info@example.com"><span
                                                className="mailto:info@example.com">info@example.com</span></a>
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
                                        <a href="tel:+11002345909">+11002345909</a>
                                    </div>
                                </li>
                            </ul>
                            <div className="header-button mt-4">

                            </div>
                            <Link href="/contact" className="gt-theme-btn">
                                <span className="gt-text-btn">
                                    <span className="gt-text-2">get a quote <i className="fa-solid fa-arrow-right"></i></span>
                                </span>
                            </Link>
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

        
        <header id="header-sticky" className="header-1 header-5">
            <div className="container-fluid">
                <div className="mega-menu-wrapper">
                    <div className="header-main">
                        <div className="logo">
                            <Link href="/" className="header-logo-2">
                                <img src="/assets/img/logo/black-logo.svg" alt="logo-img" />
                            </Link>
                            <Link href="/" className="header-logo">
                                <img src="/assets/img/logo/white-logo.svg" alt="logo-img" />
                            </Link>
                        </div>
                        <div className="mean__menu-wrapper">
                            <div className="main-menu">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li className="has-dropdown active menu-thumb">
                                            <Link href="/">
                                                Home
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
                                                                            <span className="gt-text-2"> Multi Page <i
                                                                                    className="fa-solid fa-arrow-right"></i></span>
                                                                        </span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="homemenu-content text-center">
                                                                <h4 className="homemenu-title">
                                                                    Constraction
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="homemenu">
                                                            <div className="homemenu-thumb mb-15">
                                                                <img src="/assets/img/header/home-2.jpg" alt="img" />
                                                                <div className="demo-button">
                                                                    <Link href="/index-2" className="gt-theme-btn">
                                                                        <span className="gt-text-btn">
                                                                            <span className="gt-text-2"> Multi Page <i
                                                                                    className="fa-solid fa-arrow-right"></i></span>
                                                                        </span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="homemenu-content text-center">
                                                                <h4 className="homemenu-title">
                                                                    Architecture
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="homemenu">
                                                            <div className="homemenu-thumb mb-15">
                                                                <img src="/assets/img/header/home-3.jpg" alt="img" />
                                                                <div className="demo-button">
                                                                    <a href="index-3.html" className="gt-theme-btn">
                                                                        <span className="gt-text-btn">
                                                                            <span className="gt-text-2"> Multi Page <i
                                                                                    className="fa-solid fa-arrow-right"></i></span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="homemenu-content text-center">
                                                                <h4 className="homemenu-title">
                                                                    Roofing Home
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="homemenu">
                                                            <div className="homemenu-thumb mb-15">
                                                                <img src="/assets/img/header/home-4.jpg" alt="img" />
                                                                <div className="demo-button">
                                                                    <a href="index-4.html" className="gt-theme-btn">
                                                                        <span className="gt-text-btn">
                                                                            <span className="gt-text-2"> Multi Page <i
                                                                                    className="fa-solid fa-arrow-right"></i></span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="homemenu-content text-center">
                                                                <h4 className="homemenu-title">
                                                                    Solar
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="homemenu">
                                                            <div className="homemenu-thumb mb-15">
                                                                <img src="/assets/img/header/home-5.jpg" alt="img" />
                                                                <div className="demo-button">
                                                                    <a href="index-5.html" className="gt-theme-btn">
                                                                        <span className="gt-text-btn">
                                                                            <span className="gt-text-2"> Multi Page <i
                                                                                    className="fa-solid fa-arrow-right"></i></span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="homemenu-content text-center">
                                                                <h4 className="homemenu-title">
                                                                    Industry
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-dropdown active d-xl-none">
                                            <Link href="/" className="border-none">
                                                Home
                                            </Link>
                                            <ul className="submenu">
                                                <li><Link href="/">Constraction</Link></li>
                                                <li><Link href="/index-2">Architecture</Link></li>
                                                <li><a href="index-3.html">Roofing Home</a></li>
                                                <li><a href="index-4.html">Solar</a></li>
                                                <li><a href="index-5.html">Industry</a></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/about">About Us</Link></li>
                                        <li className="has-dropdown">
                                            <a href="news.html">
                                                Pages
                                            </a>
                                            <ul className="submenu">
                                                <li className="has-dropdown">
                                                    <a href="team-details.html">
                                                        Our Team
                                                        <i className="fas fa-angle-right"></i>
                                                    </a>
                                                    <ul className="submenu">
                                                        <li><a href="team.html">Our Team</a></li>
                                                        <li><a href="team-details.html">Team Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown">
                                                    <a href="project-details.html">
                                                        Our Project
                                                        <i className="fas fa-angle-right"></i>
                                                    </a>
                                                    <ul className="submenu">
                                                        <li><a href="project.html">Our Project</a></li>
                                                        <li><a href="project-details.html">Project Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown">
                                                    <a href="shop-details.html">
                                                        Shop Page
                                                        <i className="fas fa-angle-right"></i>
                                                    </a>
                                                    <ul className="submenu">
                                                        <li><Link href="/shop">Shop Grid</Link></li>
                                                        <li><Link href="/shop-list">Shop List</Link></li>
                                                        <li><a href="shop-cart.html">Shop Cart</a></li>
                                                        <li><a href="shop-details.html">Shop Details</a></li>
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="pricing.html">Our Pricing</a></li>
                                                <li><a href="coming-soon.html">Coming Soon</a></li>
                                                <li><a href="404.html">404 Page</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="service-details.html">
                                                Services
                                            </a>
                                            <ul className="submenu">
                                                <li><a href="service.html">Service Page</a></li>
                                                <li><a href="service-details.html">Service Details</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="news-details.html">
                                                Blog
                                            </a>
                                            <ul className="submenu">
                                                <li><Link href="/news-grid">Blog Grid</Link></li>
                                                <li><a href="news.html">Blog Standard</a></li>
                                                <li><a href="news-details.html">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="header-right d-flex justify-content-end align-items-center">
                            <div className="header-right-icon">
                                <a href="#" className="main-header__search search-toggler">
                                    <i className="fa-regular fa-magnifying-glass"></i>
                                </a>
                            </div>
                            <div className="header__hamburger my-auto">
                                <div className="sidebar__toggle">
                                    <div className="header-bar">
                                        <img src="/assets/img/home-1/dot.svg" alt="img" />
                                    </div>
                                </div>
                            </div>
                            <Link href="/contact" className="gt-theme-btn">
                                <span className="gt-text-btn">
                                    <span className="gt-text-2">get a quote</span>
                                </span>
                            </Link>
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
            <div className="gt-right-shape">
                <img src="/assets/img/breadcrumb-shape.jpg" alt="img" />
            </div>
            <div className="container">
                <div className="gt-page-heading">
                    <div className="gt-breadcrumb-sub-title">
                        <h1 className="wow fadeInUp" data-wow-delay=".3s">Error 404</h1>
                    </div>
                    <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                            Error 404
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        
        <section className="gt-error-section section-padding fix">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="gt-error-items">
                            <div className="gt-error-image wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/img/inner-page/404.png" alt="img" />
                            </div>
                            <h2 className="wow fadeInUp" data-wow-delay=".5s">
                                <span> Oops</span>... Looks like You got lost..!!
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay=".3s">
                                Looks like you took a wrong turn! But don’t worry, even the best riders get lost
                                sometimes.
                            </p>
                            <Link href="/" className="gt-theme-btn wow fadeInUp" data-wow-delay=".5s">
                                <span className="gt-text-btn">
                                    <span className="gt-text-2">BACK TO HOME <i className="fa-solid fa-arrow-right"></i></span>
                                </span>
                            </Link>
                        </div>
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
                                        <img src="/assets/img/logo/white-logo.svg" alt="img" />
                                    </Link>
                                </div>
                                <div className="gt-footer-content">
                                    <p>
                                        It is a long established fact that a reader will be distracted the road readable
                                        content of a page when looking at layout. of a page when looking at layout.
                                    </p>
                                    <ul className="gt-contact-list">
                                        <li>
                                            <div className="icon">
                                                <img src="/assets/img/call.png" alt="img" />
                                                <span>Phone</span>
                                            </div>
                                            <a href="tel:0945424780">(094) 542 - 4780</a>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <img src="/assets/img/location.png" alt="img" />
                                                <span>Location</span>
                                            </div>
                                            Toronto, Montreal, City
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
                                        <Link href="/about">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="team-details.html">
                                            Team Members
                                        </a>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            24/7 Online Support
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            Partners
                                        </Link>
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
                                        <a href="service-details.html">
                                            Building Construction
                                        </a>
                                    </li>
                                    <li>
                                        <a href="service-details.html">
                                            Architecture Design
                                        </a>
                                    </li>
                                    <li>
                                        <a href="service-details.html">
                                            Project Management
                                        </a>
                                    </li>
                                    <li>
                                        <a href="service-details.html">
                                            Building Maintenance
                                        </a>
                                    </li>
                                    <li>
                                        <a href="service-details.html">
                                            Flooring & Roofing
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
                                        3770 Hidden Meadow Drive
                                        Venturia, ND 58489
                                    </li>
                                    <li>
                                        <span><i className="fa-solid fa-phone"></i></span>
                                        <a href="tel:+001652069800">+001 6520 698 00</a>
                                    </li>
                                    <li>
                                        <span><i className="fa-solid fa-envelope"></i></span>
                                        <a href="mailto:info@example.com">info@example.com</a>
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
                        <p>© 2025 <b>Conztra</b>. All Rights Reserved.</p>
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
    </>
  );
}
