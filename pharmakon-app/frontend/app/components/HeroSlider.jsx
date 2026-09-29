"use client";

import { useEffect, useRef } from "react";

export default function HeroSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    let swiperInstance = null;

    const initSwiper = () => {
      if (typeof window !== "undefined" && window.Swiper) {
        const el = document.querySelector(".hero-slider");
        if (el) {
          if (el.swiper && typeof el.swiper.destroy === "function") {
            try {
              el.swiper.destroy(true, true);
            } catch (e) {}
          }

          swiperInstance = new window.Swiper(".hero-slider", {
            loop: true,
            slidesPerView: 1,
            effect: "fade",
            speed: 1000,
            autoplay: {
              delay: 3500,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-dot-4",
              clickable: true,
            },
          });
        }
      }
    };

    const timer1 = setTimeout(initSwiper, 50);
    const timer2 = setTimeout(initSwiper, 300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (swiperInstance && typeof swiperInstance.destroy === "function") {
        try {
          swiperInstance.destroy(true, true);
        } catch (e) {}
      }
    };
  }, []);

  return (
    <section className="gt-hero-section-3 fix">
      <div className="left-shape">
        <img src="/assets/img/home-3/hero/shape.png" alt="img" />
      </div>
      <div className="right-shape">
        <img src="/assets/img/home-3/hero/shape-2.png" alt="img" />
      </div>
      <div className="swiper-dot-4"></div>
      <div className="swiper hero-slider" ref={sliderRef}>
        <div className="swiper-wrapper">
          {/* Slide 1 */}
          <div className="swiper-slide">
            <div className="gt-hero-3">
              <div
                className="hero-bg bg-cover"
                style={{ backgroundImage: "url('/assets/img/home-3/hero/hero-1.jpg')" }}
              ></div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="gt-hero-content">
                      <h4>Welcome To</h4>
                      <h1>PHARMAKON LIFESCIENCES</h1>
                      <h3>
                        Quality <span><font color="#02699C">|</font></span> Service <font color="#02699C">|</font> Trust
                      </h3>
                      <div className="hero-item">
                        <div className="hero-image">
                          <img src="/assets/img/home-3/hero/01.jpg" alt="img" />
                        </div>
                        <div className="content">
                          <p>
                            Pharmakon is a professionally driven pharmaceutical company committed to delivering superior-quality healthcare products through innovation, integrity, and excellence.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="swiper-slide">
            <div className="gt-hero-3">
              <div
                className="hero-bg bg-cover"
                style={{ backgroundImage: "url('/assets/img/home-3/hero/hero-2.jpg')" }}
              ></div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="gt-hero-content">
                      <h4>High Quality</h4>
                      <h1>Pharma Products</h1>
                      <h3>trusted by professionals</h3>
                      <div className="hero-item">
                        <div className="hero-image">
                          <img src="/assets/img/home-3/hero/02.jpg" alt="img" />
                        </div>
                        <div className="content">
                          <p>
                            We believe in creating healthcare solutions that improve lives while maintaining the highest standards of professionalism and trust.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="swiper-slide">
            <div className="gt-hero-3">
              <div
                className="hero-bg bg-cover"
                style={{ backgroundImage: "url('/assets/img/home-3/hero/hero-4.jpg')" }}
              ></div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="gt-hero-content">
                      <h4>Pharmakon</h4>
                      <h1>Delivers Quality</h1>
                      <h3>Service Every Time</h3>
                      <div className="hero-item">
                        <div className="hero-image">
                          <img src="/assets/img/home-3/hero/03.jpg" alt="img" />
                        </div>
                        <div className="content">
                          <p>
                            We offer dependable manufacturing services with customized solutions, transparent processes, premium packaging, and timely delivery commitments.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="swiper-slide">
            <div className="gt-hero-3">
              <div
                className="hero-bg bg-cover"
                style={{ backgroundImage: "url('/assets/img/home-3/hero/hero-3.jpg')" }}
              ></div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="gt-hero-content">
                      <h4>Trusted</h4>
                      <h1>Healthcare Solutions</h1>
                      <h3>Backed by Quality and Integrity.</h3>
                      <div className="hero-item">
                        <div className="hero-image">
                          <img src="/assets/img/home-3/hero/03.jpg" alt="img" />
                        </div>
                        <div className="content">
                          <p>
                            We offer dependable manufacturing services with customized solutions, transparent processes, premium packaging, and timely delivery commitments.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
