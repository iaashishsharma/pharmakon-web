(function () {
    var careAreas = {
        "broad.html": "general",
        "dental-care.html": "dental",
        "derma.html": "dermatology",
        "gynaecology.html": "gynaecology",
        "neuro.html": "neuro",
        "oncology.html": "oncology",
        "ortho.html": "orthopaedic",
        "paedtric.html": "paediatric"
    };
    var pageName = window.location.pathname.split("/").pop().toLowerCase();
    var careArea = careAreas[pageName];
    var apiBase = window.PHARMAKON_API_URL || "http://localhost:5000";

    if (!careArea) return;

    document.addEventListener("DOMContentLoaded", function () {
        var grid = document.getElementById("dentalProductGrid");
        var count = document.getElementById("dentalVisibleCount");
        var emptyState = document.getElementById("dentalEmptyState");
        if (!grid) return;

        var products = [];
        var filter = "all";
        var view = "grid";
        var page = 1;
        var initialRange = count && count.textContent.match(/Showing\s+1\s*[-–]\s*(\d+)/i);
        var pageSize = initialRange ? Number(initialRange[1]) : 16;
        var filterSelect = document.querySelector("select[id$='CategoryFilter']");
        var filterButtons = Array.prototype.slice.call(document.querySelectorAll(".dental-filter-tabs button[data-filter]"));
        var viewButtons = Array.prototype.slice.call(document.querySelectorAll(".dental-view-toggle button[data-view]"));
        var pagers = Array.prototype.slice.call(document.querySelectorAll("[id$='PaginationTop'], [id$='PaginationBottom']"));
        var lightbox = document.getElementById("dentalZoomLightbox");
        var zoomImage = document.getElementById("dentalZoomImage");
        var zoomCaption = document.getElementById("dentalZoomCaption");

        function text(element, value) {
            element.textContent = value || "Not specified";
        }

        function visibleProducts() {
            return products.filter(function (product) {
                return filter === "all" || product.productCategory === filter;
            });
        }

        function createProductCard(product) {
            var column = document.createElement("div");
            column.className = view === "list" ? "col-12 dental-list-item" : "col-xl-3 col-lg-4 col-md-6";
            column.setAttribute("data-category", product.productCategory);

            var card = document.createElement("div");
            card.className = "gt-shop-card-items bg-style dental-product-card";
            var imageWrap = document.createElement("div");
            imageWrap.className = "gt-shop-image dental-product-image";
            imageWrap.setAttribute("role", "button");
            imageWrap.setAttribute("tabindex", "0");
            imageWrap.dataset.src = product.image || "assets/img/products/no-image.png";
            imageWrap.dataset.name = product.name;

            var badge = document.createElement("span");
            badge.className = "dental-type-badge";
            text(badge, product.type || "Product");
            var image = document.createElement("img");
            image.src = imageWrap.dataset.src;
            image.alt = product.name;
            image.loading = "lazy";
            image.decoding = "async";
            var zoomButton = document.createElement("button");
            zoomButton.className = "dental-zoom-btn";
            zoomButton.type = "button";
            zoomButton.setAttribute("aria-label", "Zoom image");
            zoomButton.innerHTML = '<i class="fa-solid fa-magnifying-glass-plus"></i>';
            imageWrap.append(badge, image, zoomButton);

            var body = document.createElement("div");
            body.className = "gt-shop-content dental-product-body";
            var titleWrap = document.createElement("div");
            titleWrap.className = "dental-product-title-wrap";
            var title = document.createElement("h3");
            text(title, product.name);
            titleWrap.appendChild(title);

            var composition = document.createElement("div");
            composition.className = "dental-info-block composition-block";
            composition.innerHTML = '<div class="dental-info-label"><i class="fa-solid fa-flask"></i><span>Composition</span></div>';
            var compositionText = document.createElement("p");
            text(compositionText, product.composition);
            composition.appendChild(compositionText);

            var packing = document.createElement("div");
            packing.className = "dental-info-block packing-block";
            packing.innerHTML = '<div class="dental-info-label"><i class="fa-solid fa-box-open"></i><span>Packing</span></div>';
            var packingText = document.createElement("p");
            text(packingText, product.packing);
            packing.appendChild(packingText);
            body.append(titleWrap, composition, packing);
            card.append(imageWrap, body);
            column.appendChild(card);
            return column;
        }

        function drawPager(target, totalPages) {
            target.innerHTML = "";
            target.style.display = totalPages > 1 ? "flex" : "none";
            if (totalPages <= 1) return;

            function addButton(label, targetPage, disabled, active) {
                var button = document.createElement("button");
                button.type = "button";
                button.textContent = label;
                button.disabled = disabled;
                if (active) button.classList.add("active");
                button.addEventListener("click", function () {
                    page = targetPage;
                    render();
                    grid.scrollIntoView({ behavior: "smooth", block: "start" });
                });
                target.appendChild(button);
            }

            addButton("Previous", page - 1, page === 1, false);
            for (var index = 1; index <= totalPages; index += 1) {
                addButton(String(index), index, false, index === page);
            }
            addButton("Next", page + 1, page === totalPages, false);
        }

        function render() {
            var items = visibleProducts();
            var totalPages = Math.max(1, Math.ceil(items.length / pageSize));
            page = Math.min(page, totalPages);
            var start = (page - 1) * pageSize;
            var pageItems = items.slice(start, start + pageSize);
            grid.replaceChildren.apply(grid, pageItems.map(createProductCard));
            if (count) {
                var countLabel = count.parentNode;
                countLabel.textContent = "";
                countLabel.appendChild(document.createTextNode("Showing "));
                count.textContent = items.length ? (start + 1) + "-" + Math.min(start + pageSize, items.length) : "0";
                countLabel.appendChild(count);
                countLabel.appendChild(document.createTextNode(" of " + items.length + " products | Page " + page + " of " + totalPages));
            }
            if (emptyState) emptyState.classList.toggle("show", items.length === 0);
            grid.classList.toggle("dental-list-view", view === "list");
            pagers.forEach(function (pager) { drawPager(pager, totalPages); });
            grid.querySelectorAll(".dental-product-image").forEach(function (imageWrap) {
                function openZoom(event) {
                    if (event.type === "keydown" && event.key !== "Enter" && event.key !== " ") return;
                    if (event.type === "keydown") event.preventDefault();
                    if (!lightbox || !zoomImage) return;
                    zoomImage.src = imageWrap.dataset.src;
                    zoomImage.alt = imageWrap.dataset.name;
                    if (zoomCaption) zoomCaption.textContent = imageWrap.dataset.name;
                    lightbox.classList.add("active");
                    lightbox.setAttribute("aria-hidden", "false");
                    document.body.style.overflow = "hidden";
                }
                imageWrap.addEventListener("click", openZoom);
                imageWrap.addEventListener("keydown", openZoom);
            });
        }

        if (filterSelect) {
            filter = filterSelect.value || "all";
            filterSelect.addEventListener("change", function () { filter = filterSelect.value; page = 1; render(); });
        }
        filterButtons.forEach(function (button) {
            if (button.classList.contains("active")) filter = button.dataset.filter || "all";
            button.addEventListener("click", function () { filter = button.dataset.filter || "all"; page = 1; render(); });
        });
        viewButtons.forEach(function (button) {
            if (button.classList.contains("active")) view = button.dataset.view || "grid";
            button.addEventListener("click", function () { view = button.dataset.view || "grid"; render(); });
        });
        if (lightbox) {
            lightbox.addEventListener("click", function (event) {
                if (event.target === lightbox || event.target.closest(".dental-zoom-close")) {
                    lightbox.classList.remove("active");
                    lightbox.setAttribute("aria-hidden", "true");
                    document.body.style.overflow = "";
                }
            });
            document.addEventListener("keydown", function (event) {
                if (event.key === "Escape") {
                    lightbox.classList.remove("active");
                    lightbox.setAttribute("aria-hidden", "true");
                    document.body.style.overflow = "";
                }
            });
        }

        fetch(apiBase + "/api/products?category=" + encodeURIComponent(careArea), { cache: "no-store" })
            .then(function (response) { if (!response.ok) throw new Error("Catalogue API unavailable"); return response.json(); })
            .then(function (records) {
                if (!Array.isArray(records)) return;
                products = records.map(function (product) {
                    return {
                        name: product.name || "",
                        type: product.type || "Product",
                        productCategory: product.productCategory || String(product.type || "product").toLowerCase().replace(/\s+/g, "-"),
                        image: product.image || "assets/img/products/no-image.png",
                        composition: product.composition || "",
                        packing: product.packing || ""
                    };
                });
                render();
            })
            .catch(function (error) { console.warn("Showing existing page catalogue:", error.message); });
    });
})();
