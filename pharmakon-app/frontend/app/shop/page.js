import Link from "next/link";

export const metadata = {
  title: "Conztra - Construction and Architecture HTML Template",
};

export default function ShopPage() {
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

        
        <div className="gt-breadcrumb-wrapper bg-cover" style={{"backgroundImage":"url('/assets/img/breadcrumb-bg.jpg')"}}>
            <div className="gt-right-shape">
                <img src="/assets/img/breadcrumb-shape.jpg" alt="img" />
            </div>
            <div className="container">
                <div className="gt-page-heading">
                    <div className="gt-breadcrumb-sub-title">
                        <h1 className="wow fadeInUp" data-wow-delay=".3s">SHOP GRID</h1>
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
                            Shop Grid
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        
        <section className="gt-shop-section fix section-padding">
            <div className="container">
                <div className="gt-shop-notices-wrapper">
                    <div className="gt-shop-showing">
                        <ul className="nav">
                            <li className="nav-item">
                                <a href="#grid" data-bs-toggle="tab" className="nav-link active">
                                    <i className="fa-regular fa-grid-2"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#list" data-bs-toggle="tab" className="nav-link">
                                    <i className="fa-solid fa-bars"></i>
                                </a>
                            </li>
                        </ul>
                        <p>Showing 1–14 of 26 results</p>
                    </div>
                    <div className="form-clt">
                        <div className="form">
                            <select className="single-select w-100">
                                <option> Sort by : Default</option>
                                <option> Sort by popularity</option>
                                <option>Sort by popularity</option>
                                <option> Sort by latest</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="tab-content">
                    <div id="grid" className="tab-pane fade show active">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="gt-shop-card-items bg-style">
                                    <div className="gt-shop-image">
                                        <img src="/assets/img/home-1/shop/shop-01.png" alt="img" />
                                        <span className="discount">-27%</span>
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
                                        <div className="gt-star-list">
                                            <div className="gt-star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <span>1 Review</span>
                                        </div>
                                        <h3><a href="shop-details.html">Drill Machine</a></h3>
                                        <ul className="gt-price-list">
                                            <li>
                                                $29.99
                                            </li>
                                            <li>
                                                <del>$37.99</del>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="gt-shop-card-items bg-style">
                                    <div className="gt-shop-image">
                                        <img src="/assets/img/home-1/shop/shop-02.png" alt="img" />
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
                                        <div className="gt-star-list">
                                            <div className="gt-star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <span>1 Review</span>
                                        </div>
                                        <h3><a href="shop-details.html">Professional Jigsaw</a></h3>
                                        <ul className="gt-price-list">
                                            <li>
                                                $29.99
                                            </li>
                                            <li>
                                                <del>$37.99</del>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                <div className="gt-shop-card-items bg-style">
                                    <div className="gt-shop-image">
                                        <img src="/assets/img/home-1/shop/shop-03.png" alt="img" />
                                        <span className="discount">-08%</span>
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
                                        <div className="gt-star-list">
                                            <div className="gt-star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <span>1 Review</span>
                                        </div>
                                        <h3><a href="shop-details.html">Screwdriver Drill</a></h3>
                                        <ul className="gt-price-list">
                                            <li>
                                                $29.99
                                            </li>
                                            <li>
                                                <del>$37.99</del>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                <div className="gt-shop-card-items bg-style">
                                    <div className="gt-shop-image">
                                        <img src="/assets/img/home-1/shop/shop-04.png" alt="img" />
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
                                        <div className="gt-star-list">
                                            <div className="gt-star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <span>1 Review</span>
                                        </div>
                                        <h3><a href="shop-details.html">Wood Cutting</a></h3>
                                        <ul className="gt-price-list">
                                            <li>
                                                $29.99
                                            </li>
                                            <li>
                                                <del>$37.99</del>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="gt-shop-card-items bg-style">
                                    <div className="gt-shop-image">
                                        <img src="/assets/img/home-1/shop/shop-05.png" alt="img" />
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
                                        <div className="gt-star-list">
                                            <div className="gt-star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <span>1 Review</span>
                                        </div>
                                        <h3><a href="shop-details.html">Screwdriver Set</a></h3>
                                        <ul className="gt-price-list">
                                            <li>
                                                $29.99
                                            </li>
                                            <li>
                                                <del>$37.99</del>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="gt-shop-card-items bg-style">
                                    <div className="gt-shop-image">
                                        <img src="/assets/img/home-1/shop/shop-06.png" alt="img" />
                                        <span className="discount">-08%</span>
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
                                        <div className="gt-star-list">
                                            <div className="gt-star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <span>1 Review</span>
                                        </div>
                                        <h3><a href="shop-details.html">Battery screwdriver</a></h3>
                                        <ul className="gt-price-list">
                                            <li>
                                                $29.99
                                            </li>
                                            <li>
                                                <del>$37.99</del>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                <div className="gt-shop-card-items bg-style">
                                    <div className="gt-shop-image">
                                        <img src="/assets/img/home-1/shop/shop-07.png" alt="img" />
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
                                        <div className="gt-star-list">
                                            <div className="gt-star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <span>1 Review</span>
                                        </div>
                                        <h3><a href="shop-details.html">Saw Machine</a></h3>
                                        <ul className="gt-price-list">
                                            <li>
                                                $29.99
                                            </li>
                                            <li>
                                                <del>$37.99</del>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                <div className="gt-shop-card-items bg-style">
                                    <div className="gt-shop-image">
                                        <img src="/assets/img/home-1/shop/shop-08.png" alt="img" />
                                        <span className="discount">-29%</span>
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
                                        <div className="gt-star-list">
                                            <div className="gt-star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <span>1 Review</span>
                                        </div>
                                        <h3><a href="shop-details.html">Grinder Tool</a></h3>
                                        <ul className="gt-price-list">
                                            <li>
                                                $29.99
                                            </li>
                                            <li>
                                                <del>$37.99</del>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="gt-shop-card-items bg-style">
                                    <div className="gt-shop-image">
                                        <img src="/assets/img/home-1/shop/shop-09.png" alt="img" />
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
                                        <div className="gt-star-list">
                                            <div className="gt-star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <span>1 Review</span>
                                        </div>
                                        <h3><a href="shop-details.html">Speed Bench Drill Press</a></h3>
                                        <ul className="gt-price-list">
                                            <li>
                                                $29.99
                                            </li>
                                            <li>
                                                <del>$37.99</del>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="gt-shop-card-items bg-style">
                                    <div className="gt-shop-image">
                                        <img src="/assets/img/home-1/shop/shop-10.png" alt="img" />
                                        <span className="discount">-08%</span>
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
                                        <div className="gt-star-list">
                                            <div className="gt-star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <span>1 Review</span>
                                        </div>
                                        <h3><a href="shop-details.html">Brake Conversion Kit</a></h3>
                                        <ul className="gt-price-list">
                                            <li>
                                                $29.99
                                            </li>
                                            <li>
                                                <del>$37.99</del>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                <div className="gt-shop-card-items bg-style">
                                    <div className="gt-shop-image">
                                        <img src="/assets/img/home-1/shop/shop-11.png" alt="img" />
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
                                        <div className="gt-star-list">
                                            <div className="gt-star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <span>1 Review</span>
                                        </div>
                                        <h3><a href="shop-details.html">Wheel Bearing Retainer</a></h3>
                                        <ul className="gt-price-list">
                                            <li>
                                                $29.99
                                            </li>
                                            <li>
                                                <del>$37.99</del>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                <div className="gt-shop-card-items bg-style">
                                    <div className="gt-shop-image">
                                        <img src="/assets/img/home-1/shop/shop-12.png" alt="img" />
                                        <span className="discount">-29%</span>
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
                                        <div className="gt-star-list">
                                            <div className="gt-star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <span>1 Review</span>
                                        </div>
                                        <h3><a href="shop-details.html">Wheel Bearing Retainer</a></h3>
                                        <ul className="gt-price-list">
                                            <li>
                                                $29.99
                                            </li>
                                            <li>
                                                <del>$37.99</del>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gt-page-nav-wrap pt-5 text-center">
                            <ul>
                                <li><a className="gt-page-numbers" href="#"><i className="icon-icon-2"></i></a></li>
                                <li><a className="gt-page-numbers" href="#">01</a></li>
                                <li><a className="gt-page-numbers" href="#">02</a></li>
                                <li><a className="gt-page-numbers" href="#">03</a></li>
                                <li><a className="gt-page-numbers" href="#"><i className="icon-icon-1"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div id="list" className="tab-pane fade">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="gt-shop-list-items style-2">
                                    <div className="gt-shop-image">
                                        <img src="/assets/img/home-1/shop/list-01.jpg" alt="img" />
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
                                        <span>Backpack, Wonder</span>
                                        <h4><a href="shop-details.html">Wheel Bearing Retainer</a></h4>
                                        <div className="gt-star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(1 Review)</span>
                                        </div>
                                        <ul className="gt-price-list">
                                            <li>
                                                $102.00
                                            </li>
                                            <li>
                                                <del>$226.00</del>
                                            </li>
                                        </ul>
                                        <p>
                                            Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra
                                            vel turpis nunc eget.Auctor urna nunc id cursus. Scelerisque purus semper
                                            eget duis at pharetra vel turpis nunc eget.
                                            Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra
                                            vel turpis nunc eget.
                                        </p>
                                        <a href="shop-cart.html" className="gt-theme-btn">
                                            <span className="gt-text-btn gt-bg-theme-color">
                                                <span className="gt-text-2">ADD TO CART</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="gt-shop-list-items style-2">
                                    <div className="gt-shop-image">
                                        <img src="/assets/img/home-1/shop/list-02.jpg" alt="img" />
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
                                        <span>Backpack, Wonder</span>
                                        <h4><a href="shop-details.html">Brake Conversion Kit</a></h4>
                                        <div className="gt-star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(1 Review)</span>
                                        </div>
                                        <ul className="gt-price-list">
                                            <li>
                                                $102.00
                                            </li>
                                            <li>
                                                <del>$226.00</del>
                                            </li>
                                        </ul>
                                        <p>
                                            Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra
                                            vel turpis nunc eget.Auctor urna nunc id cursus. Scelerisque purus semper
                                            eget duis at pharetra vel turpis nunc eget.
                                            Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra
                                            vel turpis nunc eget.
                                        </p>
                                        <a href="shop-cart.html" className="gt-theme-btn">
                                            <span className="gt-text-btn gt-bg-theme-color">
                                                <span className="gt-text-2">ADD TO CART</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="gt-shop-list-items style-2">
                                    <div className="gt-shop-image">
                                        <img src="/assets/img/home-1/shop/list-03.jpg" alt="img" />
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
                                        <span>Backpack, Wonder</span>
                                        <h4><a href="shop-details.html">Speed Bench Drill Press</a></h4>
                                        <div className="gt-star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(1 Review)</span>
                                        </div>
                                        <ul className="gt-price-list">
                                            <li>
                                                $102.00
                                            </li>
                                            <li>
                                                <del>$226.00</del>
                                            </li>
                                        </ul>
                                        <p>
                                            Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra
                                            vel turpis nunc eget.Auctor urna nunc id cursus. Scelerisque purus semper
                                            eget duis at pharetra vel turpis nunc eget.
                                            Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra
                                            vel turpis nunc eget.
                                        </p>
                                        <a href="shop-cart.html" className="gt-theme-btn">
                                            <span className="gt-text-btn gt-bg-theme-color">
                                                <span className="gt-text-2">ADD TO CART</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="gt-shop-list-items style-2">
                                    <div className="gt-shop-image">
                                        <img src="/assets/img/home-1/shop/list-04.jpg" alt="img" />
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
                                        <span>Backpack, Wonder</span>
                                        <h4><a href="shop-details.html">Wheel Bearing Retainer</a></h4>
                                        <div className="gt-star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(1 Review)</span>
                                        </div>
                                        <ul className="gt-price-list">
                                            <li>
                                                $102.00
                                            </li>
                                            <li>
                                                <del>$226.00</del>
                                            </li>
                                        </ul>
                                        <p>
                                            Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra
                                            vel turpis nunc eget.Auctor urna nunc id cursus. Scelerisque purus semper
                                            eget duis at pharetra vel turpis nunc eget.
                                            Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra
                                            vel turpis nunc eget.
                                        </p>
                                        <a href="shop-cart.html" className="gt-theme-btn">
                                            <span className="gt-text-btn gt-bg-theme-color">
                                                <span className="gt-text-2">ADD TO CART</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="gt-shop-list-items style-2">
                                    <div className="gt-shop-image">
                                        <img src="/assets/img/home-1/shop/list-05.jpg" alt="img" />
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
                                        <span>Backpack, Wonder</span>
                                        <h4><a href="shop-details.html">Professional Jigsaw</a></h4>
                                        <div className="gt-star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(1 Review)</span>
                                        </div>
                                        <ul className="gt-price-list">
                                            <li>
                                                $102.00
                                            </li>
                                            <li>
                                                <del>$226.00</del>
                                            </li>
                                        </ul>
                                        <p>
                                            Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra
                                            vel turpis nunc eget.Auctor urna nunc id cursus. Scelerisque purus semper
                                            eget duis at pharetra vel turpis nunc eget.
                                            Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra
                                            vel turpis nunc eget.
                                        </p>
                                        <a href="shop-cart.html" className="gt-theme-btn">
                                            <span className="gt-text-btn gt-bg-theme-color">
                                                <span className="gt-text-2">ADD TO CART</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gt-page-nav-wrap pt-5 text-center">
                            <ul>
                                <li><a className="gt-page-numbers" href="#"><i className="icon-icon-2"></i></a></li>
                                <li><a className="gt-page-numbers" href="#">01</a></li>
                                <li><a className="gt-page-numbers" href="#">02</a></li>
                                <li><a className="gt-page-numbers" href="#">03</a></li>
                                <li><a className="gt-page-numbers" href="#"><i className="icon-icon-1"></i></a></li>
                            </ul>
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
