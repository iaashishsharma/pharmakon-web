"use client";

import { createContext, useContext, useEffect, useState } from "react";

const defaultSettings = {
  companyName: "PARUL HEALTHCARE PVT LTD",
  email: "info@pharmakonlifesciences.com",
  phone: "+91 9802 002 727",
  address: "163G, SEC 3, Hsiidc, Karnal, India",
  gst: "06AAJCP3441L1Z8",
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",
  heroTitle: "PHARMAKON LIFESCIENCES",
  heroSubtitle: "Quality | Service | Trust",
  heroDescription: "Pharmakon is a professionally driven pharmaceutical company committed to delivering superior-quality healthcare products through innovation, integrity, and excellence.",
  aboutTitle: "Welcome to a defining legacy of trust, excellence, and healthcare innovation.",
  aboutParagraph1: "We are Pharmakon Life Sciences, an esteemed division of Parul Health Care Pvt. Ltd. Established in 2007, our company was built from the ground up by our Founder Director, S. Manmohan Singh.",
  aboutParagraph2: "We planted our roots with a powerful and unwavering ethos, dedicated entirely to advancing healthcare through the production and distribution of top-tier, quality medicines.",
  aboutParagraph3: "At Pharmakon Life Sciences, we pride ourselves on the fact that we do not just deliver a comprehensive and widely accepted product range; we consistently deliver an ecosystem of uncompromising quality.",
  visionHeading: "Advancing healthcare with quality medicines, ethical practice, and dependable partnerships.",
  visionDescription: "At Pharmakon Life Sciences, our direction is clear: create better access to trusted pharmaceutical products while supporting partners with responsive service.",
  visionStatement: "We are driven to continue innovating for a healthier tomorrow, while remaining grounded in trust today.",
  visionDetails: "We aim to build a strong Pan-India presence by delivering reliable pharmaceutical solutions that improve lives.",
  missionStatement: "To provide high-quality pharmaceuticals accompanied by unwavering service.",
  missionDetails: "Our mission is to provide high-quality products, ethical business practices, responsive support, and scalable pharma solutions.",
};

const SiteSettingsContext = createContext(defaultSettings);

export function SiteSettingsProvider({ children }) {
  const [settings, setSettings] = useState(defaultSettings);

  const fetchSettings = async () => {
    try {
      const res = await fetch("/api/settings", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setSettings((prev) => ({ ...prev, ...data }));
      }
    } catch (err) {
      console.warn("Could not fetch site settings from backend:", err);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <SiteSettingsContext.Provider value={settings}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}
