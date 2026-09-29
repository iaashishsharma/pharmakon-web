"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }

    let timers = [];

    const initSwipers = () => {
      if (typeof window === "undefined" || !window.Swiper) return;

      // 1. Hero Slider
      const heroEl = document.querySelector(".hero-slider");
      if (heroEl) {
        if (heroEl.swiper && typeof heroEl.swiper.destroy === "function") {
          try {
            heroEl.swiper.destroy(true, true);
          } catch (e) {}
        }
        new window.Swiper(".hero-slider", {
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

      // 2. GT Shop Slider (Our Divisions)
      const shopEl = document.querySelector(".gt-shop-slider");
      if (shopEl) {
        if (shopEl.swiper && typeof shopEl.swiper.destroy === "function") {
          try {
            shopEl.swiper.destroy(true, true);
          } catch (e) {}
        }
        new window.Swiper(".gt-shop-slider", {
          spaceBetween: 30,
          speed: 1300,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
          },
          breakpoints: {
            1199: { slidesPerView: 3 },
            991: { slidesPerView: 2 },
            767: { slidesPerView: 1 },
            575: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          },
        });
      }

      // 3. GT Brand Slider (Brand logos at bottom)
      const brandEl = document.querySelector(".gt-brand-slider");
      if (brandEl) {
        if (brandEl.swiper && typeof brandEl.swiper.destroy === "function") {
          try {
            brandEl.swiper.destroy(true, true);
          } catch (e) {}
        }
        new window.Swiper(".gt-brand-slider", {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          speed: 2000,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          breakpoints: {
            1199: { slidesPerView: 6 },
            991: { slidesPerView: 4 },
            767: { slidesPerView: 3 },
            575: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          },
        });
      }
    };

    initSwipers();
    const interval = setInterval(() => {
      if (typeof window !== "undefined" && window.Swiper) {
        initSwipers();
      }
    }, 250);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}
