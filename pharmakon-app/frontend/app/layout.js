import Script from "next/script";
import ClientInitializer from "./components/ClientInitializer";
import ContactModal from "./components/ContactModal";
import "./globals.css";

export const metadata = {
  title: "PHARMAKON LIFESCIENCES",
  description: "Pharmakon Lifesciences website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/img/favicon.png" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/splitting.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/rtl.css" />
        <link rel="stylesheet" href="/assets/css/box-layout.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
        <link rel="stylesheet" href="/assets/css/icomon.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/logo.css" />
        <link rel="stylesheet" href="/1.css" />
        <link rel="stylesheet" href="/2.css" />
        <link rel="stylesheet" href="/about-redesign.css" />
        <link rel="stylesheet" href="/dental-products.css" />
        <link rel="stylesheet" href="/page-styles.css" />
      </head>
      <body>
        <ClientInitializer />
        {children}
        <ContactModal />
        <Script src="/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/viewport.jquery.js" strategy="afterInteractive" />
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.waypoints.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.meanmenu.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/splitting.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/splitting-animation.js" strategy="afterInteractive" />
        <Script src="/assets/js/template-settings.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
        <Script src="/assets/js/dynamic-site-content.js?v=1" strategy="lazyOnload" />
      </body>
    </html>
  );
}