import Link from "next/link";

export const metadata = {
  title: "Conztra - Construction and Architecture HTML Template",
};

export default function Index2Page() {
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

        <div className="header-top-section">
            <div className="container-fluid">
                <div className="header-top-wrapper">
                    <span>
                        <i className="fa-solid fa-envelope"></i>
                        <a href="mailto:info@conztramail.com">info@conztramail.com</a>
                    </span>
                    <h6>Welcome to conztra</h6>
                    <span>
                        <i className="fa-solid fa-phone-volume"></i>
                        <a href="tel:18002008747">1 800 200 8747</a>
                    </span>
                </div>
            </div>
        </div>

        
        <header id="header-sticky" className="header-1 header-2">
            <div className="container-fluid">
                <div className="mega-menu-wrapper">
                    <div className="header-main">
                        <div className="logo">
                            <Link href="/" className="header-logo">
                                <img src="/assets/img/logo/black-logo.svg" alt="logo-img" />
                            </Link>
                            <Link href="/" className="header-logo-2">
                                <img src="/assets/img/logo/black-logo.svg" alt="logo-img" />
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

        
        <div className="modal modal-common-wrap fade" id="exampleModal2" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog style-shop-details modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="gt-shop-details-wrapper">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="gt-shop-details-image">
                                        <img src="/assets/img/inner/shop-details/details-01.jpg" alt="img" />
                                        <span className="gt-box-text">(09% Of)</span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="gt-shop-details-content">
                                        <h6><span>Brand:</span> Conztra</h6>
                                        <h2>Cordless Screwdriver Drill</h2>
                                        <ul className="price-list">
                                            <li>
                                                Price: <span>$250.00</span>
                                            </li>
                                            <li>
                                                <del>$279.00</del>
                                            </li>
                                        </ul>
                                        <span className="eye-icon">
                                            <i className="fa-regular fa-eye"></i>
                                            16 people are viewing this right now
                                        </span>
                                        <ul className="color-list">
                                            <li>
                                                <span>Color:</span>
                                            </li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <span>(79+ Review)</span>
                                        </div>
                                        <p>
                                            Hurry! Only 12 units left in stock!
                                        </p>
                                        <div className="cart-quantity">
                                            <p className="qty">
                                                <button className="qtyminus" aria-hidden="true">−</button>
                                                <input type="number" name="qty" id="qty2" min="1" max="10" step="1"
                                                    value="1" />
                                                <button className="qtyplus" aria-hidden="true">+</button>
                                            </p>
                                            <a href="shop-details.html" className="shop-btn theme-btn">Add to cart</a>
                                            <div className="icon-item">
                                                <a href="shop-details.html" className="icon">
                                                    <i className="far fa-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <button type="submit" className="buy-btn">
                                            Buy It Now
                                        </button>
                                        <ul className="gt-list-items">
                                            <li>
                                                <span>Certification:</span> Meets DOT, ECE, or Snell safety standards
                                            </li>
                                            <li>
                                                <span>Maximum Protection:</span> Full coverage for your head, face, and
                                                chin
                                            </li>
                                        </ul>
                                        <div className="share-list">
                                            <span>Share With:</span>
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        </div>
                                        <div className="gt-bank-list">
                                            <div className="">
                                                Guaranteed
                                                <span>Safe & Secure Checkout</span>
                                            </div>
                                            <img src="/assets/img/inner/shop-details/pay_brand.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <section className="hero-section hero-2 fix bg-cover"
            style={{"backgroundImage":"url('/assets/img/home-2/hero-bg.jpg')"}}>
            <div className="container-fluid">
                <div className="row g-4">
                    <div className="col-xl-9 col-lg-8">
                        <div className="hero-content">
                            <h1 className="wow img-custom-anim-left">
                                Modern <span>interior</span>
                                <b>&</b> Architecture
                            </h1>
                            <div className="hero-bottom wow fadeInUp" data-wow-delay=".3s">
                                <div className="hero-button">
                                    <a href="project-details.html" className="gt-theme-btn">
                                        <span className="gt-text-btn">
                                            <span className="gt-text-2">Jour projects <i
                                                    className="fa-solid fa-arrow-right"></i></span>
                                        </span>
                                    </a>
                                    <a href="service-details.html" className="gt-theme-btn new">
                                        <span className="gt-text-btn">
                                            <span className="gt-text-2">our service <i
                                                    className="fa-solid fa-arrow-right"></i></span>
                                        </span>
                                    </a>
                                </div>
                                <p>
                                    Conztra Architecture and Interior Design Studio, providing clients with all services
                                    relating to Architecture & Interior Design.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <div className="hero-box float-bob-y">
                            <div className="count-content">
                                <h2><span className="gt-count">1.5</span>k</h2>
                                <h6>projects complete</h6>
                            </div>
                            <div className="count-content">
                                <h2><span className="gt-count">10</span>+</h2>
                                <h6>Years of experience</h6>
                            </div>
                            <div className="count-content border-none">
                                <h2><span className="gt-count">1.2</span>k</h2>
                                <h6>Client satisfaction</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <div className="service-section-new section-padding fix">
            <div className="container">
                <div className="row justify-content-center mb-70 wow animate fadeInDown" data-wow-delay="200ms"
                    data-wow-duration="1500ms">
                    <div className="col-xxl-7 col-xl-8 col-lg-9">
                        <div className="gt-section-title text-center">
                            <h6 className="wow fadeInUp">B E S T S O L U T I O N S</h6>
                            <h2 className="wow splt-txt" data-splitting>ARCHITECTURAL SOLUTIONS</h2>
                            <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">Sed nisl eros, condimentum nec risus sit
                                amet, finibus conguese.Fusen fringilla est libero sed tempus urna feugiat eu. Curabitur
                                eu feugiat ligu Suspendisse.</p>
                        </div>
                    </div>
                </div>
                <div className="service-top-wrapper">
                    <div className="row g-0 mb-60">
                        <div className="col-lg-7">
                            <ul className="service-list">
                                <li className="single-service wow animate fadeInLeft" data-wow-delay="200ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-content">
                                        <span>01.</span>
                                        <h5>
                                            <a href="service-details.html">Conceptual Design
                                            </a>
                                            <svg width="14" height="14" viewBox="0 0 14 14"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M12.7606 11.8843L0.876899 -5.73629e-07L-3.83304e-08 0.876897L11.8843 12.7606L3.66748 12.7606L3.66748 14L14 14L14 3.66748L12.7606 3.66748L12.7606 11.8843Z" />
                                            </svg>
                                        </h5>
                                    </div>
                                </li>
                                <li className="single-service wow animate fadeInLeft" data-wow-delay="400ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-content">
                                        <span>02.</span>
                                        <h5>
                                            <a href="service-details.html">Schematic Design
                                            </a>
                                            <svg width="14" height="14" viewBox="0 0 14 14"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M12.7606 11.8843L0.876899 -5.73629e-07L-3.83304e-08 0.876897L11.8843 12.7606L3.66748 12.7606L3.66748 14L14 14L14 3.66748L12.7606 3.66748L12.7606 11.8843Z" />
                                            </svg>
                                        </h5>
                                    </div>
                                </li>
                                <li className="single-service wow animate fadeInLeft" data-wow-delay="600ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-content">
                                        <span>03.</span>
                                        <h5>
                                            <a href="service-details.html">Interior Design
                                            </a>
                                            <svg width="14" height="14" viewBox="0 0 14 14"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M12.7606 11.8843L0.876899 -5.73629e-07L-3.83304e-08 0.876897L11.8843 12.7606L3.66748 12.7606L3.66748 14L14 14L14 3.66748L12.7606 3.66748L12.7606 11.8843Z" />
                                            </svg>
                                        </h5>
                                    </div>
                                </li>
                                <li className="single-service wow animate fadeInLeft" data-wow-delay="800ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-content">
                                        <span>04.</span>
                                        <h5>
                                            <a href="service-details.html">Sustainable Design
                                            </a>
                                            <svg width="14" height="14" viewBox="0 0 14 14"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M12.7606 11.8843L0.876899 -5.73629e-07L-3.83304e-08 0.876897L11.8843 12.7606L3.66748 12.7606L3.66748 14L14 14L14 3.66748L12.7606 3.66748L12.7606 11.8843Z" />
                                            </svg>
                                        </h5>
                                    </div>
                                </li>
                                <li className="single-service wow animate fadeInLeft" data-wow-delay="800ms"
                                    data-wow-duration="1500ms">
                                    <div className="service-content">
                                        <span>05.</span>
                                        <h5>
                                            <a href="service-details.html">Urban Planning
                                            </a>
                                            <svg width="14" height="14" viewBox="0 0 14 14"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M12.7606 11.8843L0.876899 -5.73629e-07L-3.83304e-08 0.876897L11.8843 12.7606L3.66748 12.7606L3.66748 14L14 14L14 3.66748L12.7606 3.66748L12.7606 11.8843Z" />
                                            </svg>
                                        </h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <ul className="service-img-group">
                                <li className="active">
                                    <div className="service-img">
                                        <img src="/assets/img/home-2/service/01.jpg" alt="img" />
                                    </div>
                                </li>
                                <li>
                                    <div className="service-img">
                                        <img src="/assets/img/home-2/service/02.jpg" alt="img" />
                                    </div>
                                </li>
                                <li>
                                    <div className="service-img">
                                        <img src="/assets/img/home-2/service/03.jpg" alt="img" />
                                    </div>
                                </li>
                                <li>
                                    <div className="service-img">
                                        <img src="/assets/img/home-2/service/04.jpg" alt="img" />
                                    </div>
                                </li>
                                <li>
                                    <div className="service-img">
                                        <img src="/assets/img/home-2/service/05.jpg" alt="img" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        
        <section className="gt-about-section-2 section-bg-2 fix section-padding">
            <div className="container">
                <div className="gt-about-wrapper-2">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="gt-about-image">
                                <img src="/assets/img/home-2/about/about-01.png" alt="img"
                                    className="wow img-custom-anim-left" />
                                <div className="about-image-2 float-bob-y">
                                    <img src="/assets/img/home-2/about/about-2.jpg" alt="img"
                                        className="wow img-custom-anim-right" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="gt-about-content">
                                <div className="gt-section-title mb-0">
                                    <span className="text-white wow fadeInUp">A B O U T U S</span>
                                    <h2 className="text-white wow splt-txt" data-splitting>
                                        WE ARE PROVIDED WITH AN AMAZING CYCLING SERVICE
                                    </h2>
                                </div>
                                <p className="gt-about-text wow fadeInUp" data-wow-delay=".5s">
                                    We are committed to redefining the construction industry with innovative solutions,
                                    cutting-edge technology, and sustainable practices. Our team of experts ensures
                                    every project is crafted
                                </p>
                                <ul className="gt-about-list wow fadeInUp" data-wow-delay=".3s">
                                    <li>
                                        <i className="fa-solid fa-chevrons-right"></i>
                                        Innovation Eco power Technologies
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-chevrons-right"></i>
                                        Regularly Maintaining and organizing your Tools
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-chevrons-right"></i>
                                        Regularly organizing and Maintaining your Tools
                                    </li>
                                </ul>
                                <Link href="/about" className="gt-theme-btn wow fadeInUp" data-wow-delay=".5s">
                                    <span className="gt-text-btn">
                                        <span className="gt-text-2">DISCOVER MORE <i
                                                className="fa-solid fa-arrow-right"></i></span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="gt-team-section-2 fix section-padding fix section-bg">
            <div className="container">
                <h2 className="gt-sub-title">OUR TEAM MUMBER</h2>
                <div className="gt-section-title text-center">
                    <h6 className="wow fadeInUp">TEAM</h6>
                    <h2 className="wow splt-txt" data-splitting>
                        OUR TEAM MEMBER
                    </h2>
                </div>
                <div className="gt-team-wrapper">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4">
                            <div className="gt-team-left-items">
                                <div className="gt-content-box wow fadeInUp" data-wow-delay=".3s">
                                    <h3><a href="team-details.html">Leslie Alexander</a></h3>
                                    <p>Cheif Financial officer</p>
                                </div>
                                <div className="gt-content-box wow fadeInUp" data-wow-delay=".5s">
                                    <h3><a href="team-details.html">Sohel Tanvir</a></h3>
                                    <p>Cheif Financial officer</p>
                                </div>
                                <div className="gt-content-box wow fadeInUp" data-wow-delay=".3s">
                                    <h3><a href="team-details.html">Alex Carry</a></h3>
                                    <p>Cheif Financial officer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <div className="row">
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="gt-team-box-items">
                                        <img src="/assets/img/home-2/team/team-01.jpg" alt="img" />
                                        <div className="gt-social-icon d-flex align-items-center">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="gt-team-box-items">
                                        <img src="/assets/img/home-2/team/team-02.jpg" alt="img" />
                                        <div className="gt-social-icon d-flex align-items-center">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                    <div className="gt-team-box-items">
                                        <img src="/assets/img/home-2/team/team-03.jpg" alt="img" />
                                        <div className="gt-social-icon d-flex align-items-center">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        
        <div className="gt-brand-section section-padding fix">
            <div className="swiper gt-brand-slider">
                <div className="swiper-wrapper gt-slide-transtion">
                    <div className="swiper-slide gt-brand-slide-element">
                        <div className="brand-image">
                            <img src="/assets/img/home-1/brand/brand-01.png" alt="img" />
                        </div>
                    </div>
                    <div className="swiper-slide gt-brand-slide-element">
                        <div className="brand-image">
                            <img src="/assets/img/home-1/brand/brand-02.png" alt="img" />
                        </div>
                    </div>
                    <div className="swiper-slide gt-brand-slide-element">
                        <div className="brand-image">
                            <img src="/assets/img/home-1/brand/brand-03.png" alt="img" />
                        </div>
                    </div>
                    <div className="swiper-slide gt-brand-slide-element">
                        <div className="brand-image">
                            <img src="/assets/img/home-1/brand/brand-04.png" alt="img" />
                        </div>
                    </div>
                    <div className="swiper-slide gt-brand-slide-element">
                        <div className="brand-image">
                            <img src="/assets/img/home-1/brand/brand-05.png" alt="img" />
                        </div>
                    </div>
                    <div className="swiper-slide gt-brand-slide-element">
                        <div className="brand-image">
                            <img src="/assets/img/home-1/brand/brand-06.png" alt="img" />
                        </div>
                    </div>
                    <div className="swiper-slide gt-brand-slide-element">
                        <div className="brand-image">
                            <img src="/assets/img/home-1/brand/brand-01.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <section className="testimonail-section-2 section-padding fix bg-cover"
            style={{"backgroundImage":"url(/assets/img/home-2/testimonial/bg.jpg)"}}>
            <div className="array-buttons">
                <button className="array-prev">
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="array-next">
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            <div className="container">
                <div className="gt-section-title text-center">
                    <h6 className="text-white wow fadeInUp">Our Testimonial</h6>
                    <h2 className="wow splt-txt text-white" data-splitting>
                        REAL STORIES FROM CONSTRUCTION
                    </h2>
                </div>
                <div className="swiper testimonial-slider-2">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="testimonail-box-item">
                                <div className="star">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p>
                                    “World class Construction solutions to customers stakeholders across a broad range
                                    of construction industry sectors. mindful of our responsibilities as architects.
                                    Through work ”
                                </p>
                                <div className="client-info-item">
                                    <div className="client-image">
                                        <img src="/assets/img/home-2/testimonial/client.jpg" alt="img" />
                                    </div>
                                    <div className="info-content">
                                        <h5>Jackson Hobber</h5>
                                        <span>CEO,AB Tech</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonail-box-item">
                                <div className="star">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p>
                                    “World class Construction solutions to customers stakeholders across a broad range
                                    of construction industry sectors. mindful of our responsibilities as architects.
                                    Through work ”
                                </p>
                                <div className="client-info-item">
                                    <div className="client-image">
                                        <img src="/assets/img/home-2/testimonial/client.jpg" alt="img" />
                                    </div>
                                    <div className="info-content">
                                        <h5>Jackson Hobber</h5>
                                        <span>CEO,AB Tech</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonail-box-item">
                                <div className="star">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p>
                                    “World class Construction solutions to customers stakeholders across a broad range
                                    of construction industry sectors. mindful of our responsibilities as architects.
                                    Through work ”
                                </p>
                                <div className="client-info-item">
                                    <div className="client-image">
                                        <img src="/assets/img/home-2/testimonial/client.jpg" alt="img" />
                                    </div>
                                    <div className="info-content">
                                        <h5>Jackson Hobber</h5>
                                        <span>CEO,AB Tech</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-dot2 mt-5">
                    <div className="dot"></div>
                </div>
            </div>
        </section>

        
        <section className="gt-shop-section-2 fix section-padding section-bg">
            <div className="container">
                <div className="gt-section-title-area">
                    <div className="gt-section-title">
                        <h6 className="wow fadeInUp">C H CE C K I T O U T</h6>
                        <h2 className="wow splt-txt" data-splitting>
                            NEW ARRIVALS
                        </h2>
                    </div>
                    <div className="gt-array-button wow fadeInUp" data-wow-delay=".5s">
                        <button className="array-prev"><i className="fa-solid fa-arrow-left"></i></button>
                        <button className="array-next"><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
                <div className="swiper gt-shop-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="gt-shop-box-items">
                                <div className="gt-shop-image style-2">
                                    <img src="/assets/img/home-2/shop/shop-01.png" alt="img" />
                                    <ul className="gt-shop-icon d-grid justify-content-center align-items-center">
                                        <li>
                                            <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                        </li>
                                        <li>
                                            <a href="shop-cart.html">
                                                <i className="far fa-shopping-cart"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                <i className="far fa-eye"></i>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="gt-shop-content">
                                    <h3><a href="shop-details.html">Running Sniker</a></h3>
                                    <div className="gt-star">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <span>1 Review</span>
                                    </div>
                                    <div className="gt-price-list">
                                        <div className="gt-price">
                                            <del>344.00$</del>
                                            <p>344.00$</p>
                                        </div>
                                        <a href="shop-cart.html" className="gt-theme-btn">
                                            <span className="gt-text-btn">
                                                <span className="gt-text-2">ADD TO CART</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gt-shop-box-items">
                                <div className="gt-shop-image style-2">
                                    <img src="/assets/img/home-2/shop/shop-02.png" alt="img" />
                                    <ul className="gt-shop-icon d-grid justify-content-center align-items-center">
                                        <li>
                                            <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                        </li>
                                        <li>
                                            <a href="shop-cart.html">
                                                <i className="far fa-shopping-cart"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                <i className="far fa-eye"></i>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="gt-shop-content">
                                    <h3><a href="shop-details.html">Safety Helmet</a></h3>
                                    <div className="gt-star">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <span>1 Review</span>
                                    </div>
                                    <div className="gt-price-list">
                                        <div className="gt-price">
                                            <del>344.00$</del>
                                            <p>344.00$</p>
                                        </div>
                                        <a href="shop-cart.html" className="gt-theme-btn">
                                            <span className="gt-text-btn">
                                                <span className="gt-text-2">ADD TO CART</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gt-shop-box-items">
                                <div className="gt-shop-image style-2">
                                    <img src="/assets/img/home-2/shop/shop-03.png" alt="img" />
                                    <ul className="gt-shop-icon d-grid justify-content-center align-items-center">
                                        <li>
                                            <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                        </li>
                                        <li>
                                            <a href="shop-cart.html">
                                                <i className="far fa-shopping-cart"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                <i className="far fa-eye"></i>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="gt-shop-content">
                                    <h3><a href="shop-details.html">Adjustable Wrench Tool</a></h3>
                                    <div className="gt-star">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <span>1 Review</span>
                                    </div>
                                    <div className="gt-price-list">
                                        <div className="gt-price">
                                            <del>344.00$</del>
                                            <p>344.00$</p>
                                        </div>
                                        <a href="shop-cart.html" className="gt-theme-btn">
                                            <span className="gt-text-btn">
                                                <span className="gt-text-2">ADD TO CART</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="project-section section-padding fix">
            <div className="container">
                <div className="gt-section-title text-center">
                    <h6 className="wow fadeInUp">C O M P L E T E D P R O J E C T S</h6>
                    <h2 className="wow splt-txt" data-splitting>BEHIND THE SCENES</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="project-box-item">
                            <div className="project-image">
                                <img src="/assets/img/home-2/project/01.jpg" alt="img" />
                                <div className="project-content">
                                    <ul className="list">
                                        <li>
                                            <a href="project-details.html">Roofing</a>
                                        </li>
                                    </ul>
                                    <h3>
                                        <a href="project-details.html">Building Landmarks that Inspire Generations</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="project-box-item">
                            <div className="project-image">
                                <img src="/assets/img/home-2/project/02.jpg" alt="img" />
                                <div className="project-content">
                                    <ul className="list">
                                        <li>
                                            <a href="project-details.html">Manufacturing</a>
                                        </li>
                                    </ul>
                                    <h3>
                                        <a href="project-details.html">Designing Spaces that Shape the Future</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="project-box-item">
                            <div className="project-image">
                                <img src="/assets/img/home-2/project/03.jpg" alt="img" />
                                <div className="project-content">
                                    <ul className="list">
                                        <li>
                                            <a href="project-details.html">Commercial</a>
                                        </li>
                                    </ul>
                                    <h3>
                                        <a href="project-details.html">Architectural Excellence Beyond Boundaries</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="gt-news-section-2 fix section-padding section-bg">
            <div className="container">
                <div className="gt-section-title-area">
                    <div className="gt-section-title">
                        <h6 className="wow fadeInUp">O U R N E W S</h6>
                        <h2 className="wow splt-txt" data-splitting>
                            RRAD OUR ARTICLES AND NEWS
                        </h2>
                    </div>
                    <a href="news.html" className="gt-theme-btn style-2 wow fadeInUp" data-wow-delay=".5s">
                        <span className="gt-text-btn">
                            <span className="gt-text-2">VIEW ALL News <i className="fa-solid fa-arrow-right"></i></span>
                        </span>
                    </a>
                </div>
                <div className="row">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="gt-news-left-items">
                            <div className="gt-news-image">
                                <img src="/assets/img/home-2/news/news-01.jpg" alt="img" />
                            </div>
                            <div className="gt-news-content">
                                <ul className="gt-date-list">
                                    <li>
                                        <i className="fa-solid fa-calendar-days"></i>
                                        11 March 2025
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-comments"></i>
                                        19 Comments
                                    </li>
                                </ul>
                                <h3><a href="news-details.html">How to Choose the Best Freight Solution Your
                                        Business</a></h3>
                                <a href="news-details.html" className="gt-theme-btn style-2">
                                    <span className="gt-text-btn">
                                        <span className="gt-text-2">READ MORE <i className="fa-solid fa-arrow-right"></i></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="gt-news-right-items">
                            <div className="gt-news-box-items wow fadeInUp" data-wow-delay=".3s">
                                <div className="gt-news-image">
                                    <img src="/assets/img/home-2/news/news-02.jpg" alt="img" />
                                </div>
                                <div className="gt-news-content">
                                    <ul className="gt-date-list">
                                        <li>
                                            <i className="fa-solid fa-calendar-days"></i>
                                            11 March 2025
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-comments"></i>
                                            19 Comments
                                        </li>
                                    </ul>
                                    <h3><a href="news-details.html">A Guide to Hassle-Free Cross-Border Shipping</a>
                                    </h3>
                                    <a href="news-details.html" className="gt-theme-btn style-2">
                                        <span className="gt-text-btn">
                                            <span className="gt-text-2">READ MORE <i
                                                    className="fa-solid fa-arrow-right"></i></span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="gt-news-box-items wow fadeInUp" data-wow-delay=".5s">
                                <div className="gt-news-image">
                                    <img src="/assets/img/home-2/news/news-03.jpg" alt="img" />
                                </div>
                                <div className="gt-news-content">
                                    <ul className="gt-date-list">
                                        <li>
                                            <i className="fa-solid fa-calendar-days"></i>
                                            11 March 2025
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-comments"></i>
                                            19 Comments
                                        </li>
                                    </ul>
                                    <h3><a href="news-details.html">Sustainable Construction Meets Innovative
                                            Crafting.</a></h3>
                                    <a href="news-details.html" className="gt-theme-btn style-2">
                                        <span className="gt-text-btn">
                                            <span className="gt-text-2">READ MORE <i
                                                    className="fa-solid fa-arrow-right"></i></span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="cta-top-section fix bg-cover" style={{"backgroundImage":"url(/assets/img/home-2/cta.jpg)"}}>
            <div className="container">
                <div className="cta-top-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="cta-top-content">
                                <div className="gt-section-title mb-0">
                                    <h6 className="text-white wow fadeInUp">B U I L D I N G Y O U R V I S I O N</h6>
                                    <h2 className="text-white wow splt-txt" data-splitting>
                                        LET'S BUILD DREAM SOMETHING AMAZING
                                    </h2>
                                </div>
                                <div className="cta-top-button">
                                    <Link href="/contact" className="gt-theme-btn wow fadeInUp" data-wow-delay=".5s">
                                        <span className="gt-text-btn">
                                            <span className="gt-text-2">START A PROJECT <i
                                                    className="fa-solid fa-arrow-right"></i></span>
                                        </span>
                                    </Link>
                                    <Link href="/contact" className="primary-btn">
                                        CONTACT WITH US
                                        <i className="icon-icon-1"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 wow slideInUp" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className="cta-image">
                                <img src="/assets/img/home-1/man.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <footer className="gt-footer-section footer-bg fix">
            <h2 className="gt-sub-title">OUR FOOTER</h2>
            <div className="container">
                <div className="gt-footer-widget-wrapper">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="gt-footer-widget-items">
                                <div className="gt-widget-head">
                                    <Link href="/" className="gt-footer-logo">
                                        <img src="/assets/img/logo/white-logo.svg" alt="img" />
                                    </Link>
                                </div>
                                <div className="gt-footer-content">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Mi vitae suspendisse volutpat dapibus.
                                    </p>
                                    <ul className="gt-contact-list-2">
                                        <li>
                                            <a href="tel:18008866999">(1800)-88-66-999</a>
                                        </li>
                                        <li>
                                            <a href="mailto:info@example.com">info@example.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="gt-footer-widget-items">
                                <div className="gt-widget-head">
                                    <h3>Get in Touch</h3>
                                </div>
                                <ul className="gt-contact-list-2">
                                    <li>
                                        <i className="fa-solid fa-location-dot"></i>
                                        3891 Ranchview Dr. Richardson, California 62639
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-clock-two-thirty"></i>
                                        Mon - Sat: 7am to 4.30pm <br />
                                        Sunday: Holiday
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-phone"></i>
                                        <a href="tel:+001652069800">+001 6520 698 00</a>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-envelope"></i>
                                        <a href="mailto:info@example.com">info@example.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 ps-xl-5 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="gt-footer-widget-items">
                                <div className="gt-widget-head">
                                    <h3>Subscribe Newsletter</h3>
                                </div>
                                <div className="gt-footer-content">
                                    <p>Subscribe Newsletter</p>
                                    <form action="#">
                                        <div className="form-clt">
                                            <input type="text" name="email" id="email" placeholder="Your Email Address" />
                                            <button type="submit" className="gt-theme-btn">
                                                <span className="gt-text-btn">
                                                    <span className="gt-text-2">SUBSCRIBE NOW <i
                                                            className="fa-solid fa-arrow-right"></i></span>
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom style-2">
                <div className="container">
                    <div className="gt-footer-bottom-wrapper">
                        <p>© 2025 <b>Conztra</b>. All Rights Reserved.</p>
                        <ul className="gt-footer-list">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <a href="news-details.html">Blog</a>
                            </li>
                            <li>
                                <Link href="/contact">Results</Link>
                            </li>
                            <li>
                                <Link href="/contact">Registered?</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        <div className="gt-social-icon d-flex align-items-center">
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
