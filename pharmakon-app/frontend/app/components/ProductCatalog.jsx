"use client";

import { useState, useEffect } from "react";
import { resolveProductImage } from "../data/imageResolver";

export default function ProductCatalog({
  initialProducts = [],
  careArea = "general",
  categoryOptions = [
    { value: "all", label: "All Products" },
    { value: "tablet", label: "Tablets" },
    { value: "capsule", label: "Capsules & Softgels" },
    { value: "supplement", label: "Syrups, Sachets & Supplements" },
    { value: "injection", label: "Injections" },
    { value: "topical", label: "Creams, Gels & Drops" },
    { value: "other", label: "Other Products" },
  ],
  baseImgPath = "/assets/img/products/broad/",
}) {
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);
  const [zoomItem, setZoomItem] = useState(null);

  const pageSize = 24;

  // Sync URL query params with search/filter state safely without triggering Suspense fallback
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const queryParam = params.get("search") || params.get("type") || params.get("category") || "";
      if (queryParam) {
        setSearchTerm(queryParam);
        const lowerParam = queryParam.toLowerCase().trim();
        const matchedOpt = categoryOptions.find(
          (opt) => opt.value !== "all" && lowerParam.includes(opt.value)
        );
        if (matchedOpt) {
          setFilter(matchedOpt.value);
        }
      }
    }
  }, []);

  useEffect(() => {
    // Try fetching dynamic products from backend API with short timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000);

    const apiBase =
      typeof window !== "undefined" && window.PHARMAKON_API_URL
        ? window.PHARMAKON_API_URL
        : "/api";

    fetch(`${apiBase}/products?category=${encodeURIComponent(careArea)}`, {
      cache: "no-store",
      signal: controller.signal,
    })
      .then((res) => {
        clearTimeout(timeoutId);
        if (!res.ok) throw new Error("API failed");
        return res.json();
      })
      .then((records) => {
        if (Array.isArray(records) && records.length > 0) {
          const mapped = records.map((p) => ({
            name: p.name || "",
            type: p.type || "Product",
            category:
              p.productCategory ||
              (p.category ? String(p.category).toLowerCase() : "other"),
            image: p.image || "/assets/img/products/no-image.png",
            composition: p.composition || "",
            packing: p.packing || "",
          }));
          setProducts(mapped);
        }
      })
      .catch(() => {
        clearTimeout(timeoutId);
        // Fallback to initial static array
      });

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [careArea]);

  // Robust multi-field filtering logic
  const filteredProducts = products.filter((p) => {
    const pName = (p.name || "").toLowerCase();
    const pType = (p.type || "").toLowerCase();
    const pCategory = (p.category || "").toLowerCase();
    const pComp = (p.composition || "").toLowerCase();

    // 1. Text Search Filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase().trim();
      const matchesSearch =
        pName.includes(term) ||
        pType.includes(term) ||
        pCategory.includes(term) ||
        pComp.includes(term);
      if (!matchesSearch) return false;
    }

    // 2. Dropdown Category Filter
    if (filter && filter !== "all") {
      const target = filter.toLowerCase().trim();
      const matchesFilter =
        pCategory.includes(target) ||
        pType.includes(target) ||
        pName.includes(target);
      if (!matchesFilter) return false;
    }

    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const startIdx = (currentPage - 1) * pageSize;
  const currentItems = filteredProducts.slice(startIdx, startIdx + pageSize);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    if (typeof window !== "undefined") {
      const gridEl = document.getElementById("dentalProductGrid");
      if (gridEl) gridEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClearFilters = () => {
    setFilter("all");
    setSearchTerm("");
    setPage(1);
  };

  const getImgSrc = (imgStr) => {
    return resolveProductImage(imgStr, baseImgPath);
  };

  return (
    <>
      <div className="gt-shop-notices-wrapper dental-toolbar">
        <div className="gt-shop-showing dental-toolbar-left">
          <div className="dental-view-toggle" role="group" aria-label="View mode">
            <button
              type="button"
              className={view === "grid" ? "active" : ""}
              onClick={() => setView("grid")}
              aria-label="Grid view"
            >
              <i className="fa-regular fa-grid-2"></i>
            </button>
            <button
              type="button"
              className={view === "list" ? "active" : ""}
              onClick={() => setView("list")}
              aria-label="List view"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <p className="dental-result-count">
            Showing {filteredProducts.length ? startIdx + 1 : 0}-
            {Math.min(startIdx + pageSize, filteredProducts.length)} of {filteredProducts.length} products | Page {currentPage} of {totalPages}
          </p>
        </div>

        <div className="dental-toolbar-right d-flex align-items-center gap-2 flex-wrap">
          {/* Search Box */}
          <div className="dental-search-box" style={{ position: "relative", minWidth: "200px" }}>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Search product, salt..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
              style={{ paddingRight: "30px", borderRadius: "20px", fontSize: "14px" }}
            />
            {searchTerm ? (
              <button
                type="button"
                className="btn btn-sm text-muted"
                style={{ position: "absolute", right: "5px", top: "50%", transform: "translateY(-50%)", border: "none", background: "none" }}
                onClick={() => setSearchTerm("")}
              >
                &times;
              </button>
            ) : (
              <i
                className="fa-solid fa-magnifying-glass text-muted"
                style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", fontSize: "12px" }}
              ></i>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="dental-filter-dropdown">
            <select
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setPage(1);
              }}
              aria-label="Filter products"
            >
              {categoryOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Active Filter Clear Button */}
          {(filter !== "all" || searchTerm) && (
            <button
              type="button"
              className="btn btn-outline-danger btn-sm text-nowrap ms-1"
              style={{ borderRadius: "20px", fontSize: "13px" }}
              onClick={handleClearFilters}
            >
              Clear Filter &times;
            </button>
          )}
        </div>
      </div>

      {/* Pagination Top */}
      {totalPages > 1 && (
        <nav className="gt-page-nav-wrap derma-pagination" aria-label="Product pages top">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pNum) => (
            <button
              key={pNum}
              type="button"
              className={pNum === currentPage ? "active" : ""}
              onClick={() => handlePageChange(pNum)}
            >
              {pNum}
            </button>
          ))}
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </nav>
      )}

      {/* Product Grid / List */}
      <div id="dentalProductGrid" className={`row g-4 ${view === "list" ? "dental-list-view" : ""}`}>
        {currentItems.length > 0 ? (
          currentItems.map((prod, idx) => (
            <div
              key={idx}
              className={view === "list" ? "col-12 dental-list-item" : "col-xl-3 col-lg-4 col-md-6"}
              data-category={prod.category}
            >
              <div className="gt-shop-card-items bg-style dental-product-card">
                <div
                  className="gt-shop-image dental-product-image"
                  role="button"
                  tabIndex={0}
                  onClick={() => setZoomItem(prod)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setZoomItem(prod);
                    }
                  }}
                >
                  <span className="dental-type-badge">{prod.type || "Product"}</span>
                  <img
                    src={getImgSrc(prod.image)}
                    alt={prod.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/img/products/no-image.png";
                    }}
                  />
                  <button type="button" className="dental-zoom-btn" aria-label="Zoom image">
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </button>
                </div>
                <div className="gt-shop-content dental-product-body">
                  <div className="dental-product-title-wrap">
                    <h3>{prod.name}</h3>
                  </div>
                  {prod.composition && (
                    <div className="dental-info-block composition-block">
                      <div className="dental-info-label">
                        <i className="fa-solid fa-flask"></i>
                        <span>Composition</span>
                      </div>
                      <p>{prod.composition}</p>
                    </div>
                  )}
                  {prod.packing && (
                    <div className="dental-info-block packing-block">
                      <div className="dental-info-label">
                        <i className="fa-solid fa-box-open"></i>
                        <span>Packing</span>
                      </div>
                      <p>{prod.packing}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="dental-empty-state show text-center py-5">
            <i className="fa-solid fa-box-open fa-3x text-muted mb-3 d-block"></i>
            <h5>No products match the selected filter.</h5>
            <p className="text-muted small">Try searching for another product term or click below to reset filters.</p>
            <button type="button" className="btn btn-sm btn-outline-primary mt-2" onClick={handleClearFilters}>
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Pagination Bottom */}
      {totalPages > 1 && (
        <nav className="gt-page-nav-wrap derma-pagination bottom" aria-label="Product pages bottom">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pNum) => (
            <button
              key={pNum}
              type="button"
              className={pNum === currentPage ? "active" : ""}
              onClick={() => handlePageChange(pNum)}
            >
              {pNum}
            </button>
          ))}
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </nav>
      )}

      {/* Image Lightbox Modal */}
      {zoomItem && (
        <div
          className="dental-zoom-lightbox active"
          onClick={() => setZoomItem(null)}
          aria-hidden="false"
        >
          <button
            type="button"
            className="dental-zoom-close"
            onClick={() => setZoomItem(null)}
            aria-label="Close zoom"
          >
            &times;
          </button>
          <div className="dental-zoom-stage" onClick={(e) => e.stopPropagation()}>
            <img src={getImgSrc(zoomItem.image)} alt={zoomItem.name} />
            <p>{zoomItem.name}</p>
          </div>
        </div>
      )}
    </>
  );
}



