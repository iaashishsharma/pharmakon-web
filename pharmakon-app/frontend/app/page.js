import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import HeroSlider from "./components/HeroSlider";

export const metadata = {
  title: "PHARMAKON LIFESCIENCES",
};

export default function HomePage() {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <HeroSlider />





        
        <section className="gt-shop-section-2 fix section-padding section-bg">
            <div className="container">
                <div className="gt-section-title-area">
                    <div className="gt-section-title">
                        <h6 className="wow fadeInUp">P H A R M A K O N</h6>
                        <h2 className="wow splt-txt" data-splitting>
                            Our Divisions
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
                                    <img src="/assets/img/home-3/d-1.jpg" alt="img" />
                                </div>
                                <div className="gt-shop-content">
                                    <h3><a href="#">Pharmakon Life Sciences</a></h3>


                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gt-shop-box-items">
                                <div className="gt-shop-image style-2">
                                    <img src="/assets/img/home-3/d-2.jpg" alt="img" />

                                </div>
                                <div className="gt-shop-content">
                                    <h3><a href="#">Pharmakon Dental Care</a></h3>

                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gt-shop-box-items">
                                <div className="gt-shop-image style-2">
                                    <img src="/assets/img/home-3/d-3.jpg" alt="img" />

                                </div>
                                <div className="gt-shop-content">
                                    <h3><a href="#">Pharmakon Dermatology</a></h3>


                                </div>
                            </div>
                        </div>


                        <div className="swiper-slide">
                            <div className="gt-shop-box-items">
                                <div className="gt-shop-image style-2">
                                    <img src="/assets/img/home-3/d-4.jpg" alt="img" />

                                </div>
                                <div className="gt-shop-content">
                                    <h3><a href="#">Gynaecology Care</a></h3>


                                </div>
                            </div>
                        </div>


                        <div className="swiper-slide">
                            <div className="gt-shop-box-items">
                                <div className="gt-shop-image style-2">
                                    <img src="/assets/img/home-3/d-5.jpg" alt="img" />

                                </div>
                                <div className="gt-shop-content">
                                    <h3><a href="#">Oncology Care</a></h3>


                                </div>
                            </div>
                        </div>


                        <div className="swiper-slide">
                            <div className="gt-shop-box-items">
                                <div className="gt-shop-image style-2">
                                    <img src="/assets/img/home-3/d-6.jpg" alt="img" />
                                </div>
                                <div className="gt-shop-content">
                                    <h3><a href="#">Neurology & Orthopedic</a></h3>


                                </div>
                            </div>
                        </div>


                        <div className="swiper-slide">
                            <div className="gt-shop-box-items">
                                <div className="gt-shop-image style-2">
                                    <img src="/assets/img/home-3/d-7.jpg" alt="img" />

                                </div>
                                <div className="gt-shop-content">
                                    <h3><a href="#">Pediatric Care</a></h3>


                                </div>
                            </div>
                        </div>










                    </div>
                </div>
            </div>
        </section>








        
        <section className="gt-news-section-2 fix section-padding">
            <div className="container">
                <div className="gt-section-title-area">
                    <div className="gt-section-title">
                        <h6 className="wow fadeInUp gt-style-3">Offered Services</h6>
                        <h2 className="wow splt-txt" data-splitting>
                            Delivering Quality Healthcare, Through Innovation & Trust
                        </h2>
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="gt-news-left-items bg-2">
                            <div className="gt-news-image">
                                <img src="/assets/img/home-3/img.jpg" alt="img" />
                            </div>
                            <div className="gt-news-content">



                                <p> Pharmakon is a trusted pharmaceutical company offering high-quality PCD Pharma
                                    Franchise and Contract Manufacturing services across India. With a commitment to
                                    quality, trust, and customer satisfaction, we provide a wide range of pharmaceutical
                                    products manufactured under stringent quality standards. Our franchise partners
                                    benefit from strong marketing support, exclusive business opportunities, and
                                    reliable product supply.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="gt-news-right-items">
                            <div className="gt-news-box-items bg-2 wow fadeInUp" data-wow-delay=".3s">
                                <div className="gt-news-image">
                                    <img src="/assets/img/home-3/img-2.jpg" alt="img" />
                                </div>
                                <div className="gt-news-content">

                                    <h3><a href="/pcd-franchise">Pcd Franchise</a></h3>

                                    <p>Our PCD pharma franchise opportunities are designed to empower distributors and
                                        business partners with premium product support and growth opportunities.</p>
                                    <a href="/pcd-franchise" className="gt-theme-btn style-2">
                                        <span className="gt-text-btn">
                                            <span className="gt-text-2">READ MORE <i
                                                    className="fa-solid fa-arrow-right"></i></span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="gt-news-box-items bg-2 wow fadeInUp" data-wow-delay=".5s">
                                <div className="gt-news-image">
                                    <img src="/assets/img/home-3/img-3.jpg" alt="img" />
                                </div>
                                <div className="gt-news-content">

                                    <h3><a href="/contractmanufacturing">Contract Manufacturing</a></h3>


                                    <p>We provide reliable third-party manufacturing services with quality assurance,
                                        timely production, customized packaging, and professional business support.</p>
                                    <a href="/contractmanufacturing" className="gt-theme-btn style-2">
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







        
        <section className="gt-about-section-3 section-padding fix">
            <div className="container">
                <div className="gt-about-wrapper-3">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="gt-about-left-item">
                                <div className="gt-about-image">
                                    <div className="gt-image wow img-custom-anim-left" data-wow-duration="1.5s"
                                        data-wow-delay="0.3s">
                                        <img src="/assets/img/home-3/about/about-01.jpg" alt="img" />
                                    </div>
                                    <div className="gt-image gt-style-2 wow img-custom-anim-right" data-wow-duration="1.5s"
                                        data-wow-delay="0.3s">
                                        <img src="/assets/img/home-3/about/about-02.jpg" alt="img" />
                                    </div>
                                </div>
                                <div className="gt-about-image-2 wow img-custom-anim-top" data-wow-duration="1.5s"
                                    data-wow-delay="0.3s">
                                    <img src="/assets/img/home-3/about/about-03.jpg" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="gt-about-content">
                                <div className="gt-section-title mb-0">
                                    <h6 className="wow fadeInUp gt-style-3">WHO WE ARE</h6>
                                    <h2 className="wow splt-txt" data-splitting>
                                        Trusted Name in Pharma Manufacturing & Healthcare Solutions

                                    </h2>
                                </div>
                                <p className="gt-about-text wow fadeInUp" data-wow-delay=".5s">
                                    Pharmakon Lifesciences is a professionally driven pharmaceutical company committed
                                    to delivering
                                    superior-quality healthcare products through innovation, integrity, and excellence.
                                    We specialize in
                                    third-party pharma manufacturing and PCD pharma franchise services, offering a wide
                                    portfolio
                                    of products across tablets, capsules, syrups, injectables, ointments, sachets,
                                    nutraceuticals and more.
                                </p>
                                <ul className="gt-about-list wow fadeInUp" data-wow-delay=".3s">
                                    <li>
                                        <i className="fa-solid fa-chevrons-right"></i>
                                        Innovation, Quality & Healthcare Together

                                    </li>
                                    <li>
                                        <i className="fa-solid fa-chevrons-right"></i>
                                        Trusted Pharmaceutical Excellence
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-chevrons-right"></i>
                                        Delivering Quality Healthcare Through Innovation & Trust
                                    </li>

                                </ul>
                                <div className="gt-about-button wow fadeInUp" data-wow-delay=".5s">
                                    <a href="/about" className="gt-theme-btn style-2">
                                        <span className="gt-text-btn">
                                            <span className="gt-text-2">ABOUT MORE <i
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










        
        <section className="gt-purposes-section fix">
            <div className="container">
                <div className="gt-purposes-wrapper">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="gt-purposes-image">
                                <img src="/assets/img/home-1/purposes/purposes-image.jpg" alt="img"
                                    className="wow img-custom-anim-left" />
                                <div className="gt-circle-box">
                                    <a href="#" className="gt-arrow">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                    <div className="gt-text-circle">
                                        <img src="/assets/img/home-1/text-circle.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="gt-purposes-content">
                                <div className="gt-section-title mb-0">

                                    <h2 className="text-white wow splt-txt" data-splitting>
                                        WHY CHOOSE US
                                    </h2>
                                </div>
                                <p className="text">
                                    We believe in creating healthcare solutions that improve lives while maintaining the
                                    highest standards
                                    of professionalism and trust.

                                </p>
                                <ul className="gt-icon-items">
                                    <li className="wow fadeInUp" data-wow-delay=".3s">

                                        <div className="gt-icon-purposes-content">
                                            <h3>Quality Assured Manufacturing</h3>
                                            <p>We deliver quality assured Pharma products manufactured with safety, and
                                                reliability.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay=".5s">

                                        <div className="gt-icon-purposes-content">
                                            <h3>Strong Business Partnership</h3>
                                            <p>Our customer-centric approach helps distributors, franchise partners, and
                                                healthcare businesses grow through trusted support and professional
                                                collaboration.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay=".3s">

                                        <div className="gt-icon-purposes-content">
                                            <h3>Timely Delivery & Consistency</h3>
                                            <p>We value time and ensure seamless production and supply chain management
                                                for uninterrupted
                                                business operations.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <a href="/about" className="gt-theme-btn wow fadeInUp" data-wow-delay=".5s">
                                    <span className="gt-text-btn">
                                        <span className="gt-text-2">LEARN MORE <i
                                                className="fa-solid fa-arrow-right"></i></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>












        
        <div className="gt-brand-section section-padding ">


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
                            <img src="/assets/img/home-1/brand/brand-07.png" alt="img" />
                        </div>
                    </div>

                    <div className="swiper-slide gt-brand-slide-element">
                        <div className="brand-image">
                            <img src="/assets/img/home-1/brand/brand-08.png" alt="img" />
                        </div>
                    </div>

                </div>
            </div>
        </div>






        
        <Footer />
      </div>
    </>
  );
}
