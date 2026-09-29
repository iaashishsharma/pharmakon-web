"use client";

import { useState } from "react";

export default function AboutSpecialStudio() {
  const [activeTab, setActiveTab] = useState("quality");

  return (
    <div className="about-special-studio wow fadeInUp my-5" data-wow-delay=".2s">
      <div className="about-special-copy">
        <span className="about-kicker">Special Highlights</span>
        <h2>Explore Pharmakon through quality, service, and trust.</h2>
        <p>
          Tap the focus buttons to see how dependable quality, responsive service, and long-standing trust shape every partnership.
        </p>
      </div>
      <div className="about-special-dashboard">
        <div className="about-focus-tabs" role="tablist" aria-label="Pharmakon focus areas">
          <button
            className={activeTab === "quality" ? "active" : ""}
            type="button"
            role="tab"
            aria-selected={activeTab === "quality"}
            onClick={() => setActiveTab("quality")}
          >
            <i className="fa-solid fa-award"></i> Quality
          </button>
          <button
            className={activeTab === "service" ? "active" : ""}
            type="button"
            role="tab"
            aria-selected={activeTab === "service"}
            onClick={() => setActiveTab("service")}
          >
            <i className="fa-solid fa-hand-holding-medical"></i> Service
          </button>
          <button
            className={activeTab === "trust" ? "active" : ""}
            type="button"
            role="tab"
            aria-selected={activeTab === "trust"}
            onClick={() => setActiveTab("trust")}
          >
            <i className="fa-solid fa-handshake-angle"></i> Trust
          </button>
        </div>
        <div className="about-focus-panels">
          {activeTab === "quality" && (
            <div className="about-focus-panel active" data-panel="quality">
              <h3>Quality-first medicines</h3>
              <p>
                Every product is supported by strict standards, dependable packaging, and a careful quality approach designed for better healthcare outcomes.
              </p>
            </div>
          )}
          {activeTab === "service" && (
            <div className="about-focus-panel active" data-panel="service">
              <h3>Responsive partner service</h3>
              <p>
                Our trained team supports partners with timely coordination, promotional backup, and practical assistance for smooth day-to-day business needs.
              </p>
            </div>
          )}
          {activeTab === "trust" && (
            <div className="about-focus-panel active" data-panel="trust">
              <h3>Built on lasting trust</h3>
              <p>
                Since 2007, Pharmakon Life Sciences has earned confidence through ethical practices, reliable products, and long-term commitment to healthcare partners.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
