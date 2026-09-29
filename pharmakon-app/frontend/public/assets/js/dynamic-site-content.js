(function () {
    var apiBase = window.PHARMAKON_API_URL || "http://localhost:5000";
    var socialIcons = {
        facebook: ["fa-facebook-f", "fa-facebook"],
        instagram: ["fa-instagram"],
        linkedin: ["fa-linkedin-in", "fa-linkedin"],
        twitter: ["fa-twitter", "fa-x-twitter"]
    };

    function replaceLegacyDetails(settings) {
        document.querySelectorAll('a[href^="mailto:"]').forEach(function (link) {
            link.href = "mailto:" + settings.email;
            if (link.textContent.indexOf("@") !== -1) link.textContent = settings.email;
        });
        document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
            link.href = "tel:" + settings.phone.replace(/[^\d+]/g, "");
            link.textContent = settings.phone;
        });

        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        var textNodes = [];
        while (walker.nextNode()) textNodes.push(walker.currentNode);
        textNodes.forEach(function (node) {
            var value = node.nodeValue;
            value = value.replace(/163G,\s*SEC 3,\s*Hsiidc,\s*Karnal(?:,\s*India)?\.?/gi, settings.address);
            value = value.replace(/PARUL HEALTHCARE PVT LTD|PARUL HEALTH CARE PVT\. LTD\.?/gi, settings.companyName);
            value = value.replace(/06AAJCP3441L1Z8/gi, settings.gst);
            value = value.replace(/\+91-?88169-?27222|88169-?27222/gi, settings.phone);
            if (value !== node.nodeValue) node.nodeValue = value;
        });
    }

    function applySocialLinks(settings) {
        Object.keys(socialIcons).forEach(function (network) {
            var selectors = socialIcons[network].map(function (icon) { return "i." + icon; }).join(",");
            document.querySelectorAll(selectors).forEach(function (icon) {
                var link = icon.closest("a");
                if (!link) return;
                var url = settings[network];
                if (url) {
                    link.href = url;
                    link.target = "_blank";
                    link.rel = "noopener noreferrer";
                    link.hidden = false;
                } else if (link.getAttribute("href") === "#") {
                    link.hidden = true;
                }
            });
        });
    }

    function addBlogNavigationLink() {
        document.querySelectorAll("#mobile-menu > ul, .mobile-menu > ul").forEach(function (list) {
            if (list.querySelector('a[href="news-grid.html"]')) return;
            var item = document.createElement("li");
            item.className = "pharmakon-news-nav-item";
            var link = document.createElement("a");
            link.href = "news-grid.html";
            link.textContent = "News & Updates";
            item.appendChild(link);
            list.appendChild(item);
        });
    }

    function brandNewsPage(settings) {
        if (!window.location.pathname.toLowerCase().endsWith("/news-grid.html")) return;
        document.title = "News & Updates - PHARMAKON LIFESCIENCES";
        var description = document.querySelector('meta[name="description"]');
        if (description) description.content = "News, company updates and articles from Pharmakon Lifesciences.";

        document.querySelectorAll(".offcanvas__logo img, .header-logo-2 img").forEach(function (image) {
            image.src = "assets/img/logo/logo.png";
            image.alt = "Pharmakon Lifesciences";
        });
        document.querySelectorAll(".header-logo img").forEach(function (image) {
            image.src = "assets/img/logo/logo2.png";
            image.alt = "Pharmakon Lifesciences";
        });
        document.querySelectorAll(".gt-footer-logo img").forEach(function (image) {
            image.src = "assets/img/logo/logo1.png";
            image.alt = "Pharmakon Lifesciences";
        });
        var preloaderLetters = document.querySelector("#preloader .txt-loading");
        if (preloaderLetters) {
            preloaderLetters.replaceChildren();
            "PHARMAKON".split("").forEach(function (letter) {
                var span = document.createElement("span");
                span.className = "letters-loading";
                span.dataset.textPreloader = letter;
                span.textContent = letter;
                preloaderLetters.appendChild(span);
            });
        }

        var navigation = [
            ["Home", "index.html"],
            ["About Us", "about.html"],
            ["Products", "broad.html"],
            ["Contract Manufacturing", "contractmanufacturing.html"],
            ["PCD Franchise", "pcd-franchise.html"],
            ["News & Updates", "news-grid.html"],
            ["Contact Us", "contact.html"]
        ];
        var rewrittenLists = new Set();
        document.querySelectorAll("#mobile-menu, .mobile-menu").forEach(function (menu) {
            var list = menu.matches("ul") ? menu : menu.querySelector("ul");
            if (!list || rewrittenLists.has(list)) return;
            rewrittenLists.add(list);
            list.replaceChildren();
            navigation.forEach(function (entry) {
                var item = document.createElement("li");
                var link = document.createElement("a");
                link.href = entry[1];
                link.textContent = entry[0];
                item.appendChild(link);
                list.appendChild(item);
            });
        });

        var offcanvasAddress = document.querySelector(".offcanvas__contact-text a[target='_blank']");
        if (offcanvasAddress) offcanvasAddress.textContent = settings.address;
        var footerDescription = document.querySelector(".gt-footer-content > p");
        if (footerDescription) footerDescription.textContent = settings.heroDescription;
        var footerContact = document.querySelector(".gt-contact-list");
        if (footerContact && footerContact.children[1]) {
            Array.prototype.forEach.call(footerContact.children[1].childNodes, function (node) {
                if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim()) node.nodeValue = " " + settings.address;
            });
        }
        var blogContactList = document.querySelector(".gt-contact-content");
        if (blogContactList && window.location.pathname.toLowerCase().endsWith("/news-grid.html")) {
            var addressItem = blogContactList.querySelector("li");
            if (addressItem) {
                Array.prototype.forEach.call(addressItem.childNodes, function (node) {
                    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim()) node.nodeValue = " " + settings.address;
                });
            }
        }
        var copyright = document.querySelector(".footer-bottom p");
        if (copyright) copyright.textContent = "© " + new Date().getFullYear() + " " + settings.companyName + ". All Rights Reserved.";
        var footerLists = document.querySelectorAll("footer .gt-list-area");
        var footerLinks = [
            [["About Us", "about.html"], ["Our Products", "broad.html"], ["Vision & Mission", "vision-mission.html"], ["Contact Us", "contact.html"]],
            [["PCD Franchise", "pcd-franchise.html"], ["Contract Manufacturing", "contractmanufacturing.html"], ["News & Updates", "news-grid.html"]]
        ];
        footerLists.forEach(function (list, index) {
            var entries = footerLinks[index];
            if (!entries) return;
            list.replaceChildren();
            entries.forEach(function (entry) {
                var item = document.createElement("li");
                var link = document.createElement("a");
                link.href = entry[1];
                link.textContent = entry[0];
                item.appendChild(link);
                list.appendChild(item);
            });
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        addBlogNavigationLink();
        fetch(apiBase + "/api/settings", { cache: "no-store" })
            .then(function (response) {
                if (!response.ok) throw new Error("Site settings unavailable");
                return response.json();
            })
            .then(function (settings) {
                document.querySelectorAll("[data-site-content]").forEach(function (element) {
                    var value = settings[element.dataset.siteContent];
                    if (typeof value === "string" && value.trim()) element.textContent = value;
                });
                replaceLegacyDetails(settings);
                brandNewsPage(settings);
                applySocialLinks(settings);
            })
            .catch(function (error) { console.warn("Showing saved page content:", error.message); });
    });
})();
