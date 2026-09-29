(function () {
    var apiBase = window.PHARMAKON_API_URL || "http://localhost:5000";

    function formatDate(value) {
        if (!value) return "";
        var date = new Date(value);
        if (Number.isNaN(date.getTime())) return "";
        return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric" }).format(date);
    }

    function makeArticleCard(post, index) {
        var column = document.createElement("div");
        column.className = "col-xl-4 col-lg-6 col-md-6 wow fadeInUp";
        column.setAttribute("data-wow-delay", [".2s", ".3s", ".4s"][index % 3]);

        var card = document.createElement("article");
        card.className = "gt-news-card-items gt-bg-color mt-0 pharmakon-blog-card";

        var imageWrap = document.createElement("div");
        imageWrap.className = "gt-news-image";
        var image = document.createElement("img");
        image.src = post.image || "assets/img/home-3/news/news-1.jpg";
        image.alt = post.title;
        image.loading = "lazy";
        image.decoding = "async";
        imageWrap.appendChild(image);

        var content = document.createElement("div");
        content.className = "gt-news-content";
        var category = document.createElement("span");
        category.className = "pharmakon-blog-category";
        category.textContent = post.category || "News";
        var title = document.createElement("h3");
        title.textContent = post.title;
        var metadata = document.createElement("ul");
        metadata.className = "gt-date-list";
        var dateItem = document.createElement("li");
        dateItem.innerHTML = '<i class="fa-solid fa-calendar-days"></i> ';
        dateItem.appendChild(document.createTextNode(formatDate(post.publishedAt)));
        var authorItem = document.createElement("li");
        authorItem.innerHTML = '<i class="fa-solid fa-user"></i> ';
        authorItem.appendChild(document.createTextNode(post.author || "Pharmakon Lifesciences"));
        metadata.append(dateItem, authorItem);

        var excerpt = document.createElement("p");
        excerpt.textContent = post.excerpt;
        var fullContent = document.createElement("p");
        fullContent.className = "pharmakon-blog-full-content";
        fullContent.hidden = true;
        fullContent.textContent = post.content;

        var readMore = document.createElement("button");
        readMore.className = "gt-link-btn pharmakon-blog-read-more";
        readMore.type = "button";
        readMore.setAttribute("aria-expanded", "false");
        readMore.innerHTML = 'Read More <i class="fa-solid fa-chevrons-right"></i>';
        readMore.addEventListener("click", function () {
            var expanded = readMore.getAttribute("aria-expanded") === "true";
            fullContent.hidden = expanded;
            readMore.setAttribute("aria-expanded", String(!expanded));
            readMore.innerHTML = expanded
                ? 'Read More <i class="fa-solid fa-chevrons-right"></i>'
                : 'Show Less <i class="fa-solid fa-chevrons-up"></i>';
        });

        content.append(category, title, metadata, excerpt, fullContent, readMore);
        card.append(imageWrap, content);
        column.appendChild(card);
        return column;
    }

    document.addEventListener("DOMContentLoaded", function () {
        var grid = document.getElementById("pharmakonBlogGrid");
        if (!grid) return;

        fetch(apiBase + "/api/blogs", { cache: "no-store" })
            .then(function (response) {
                if (!response.ok) throw new Error("Published blog posts are unavailable.");
                return response.json();
            })
            .then(function (posts) {
                grid.replaceChildren();
                var pager = document.querySelector(".page-nav-wrap");
                if (pager) pager.hidden = true;
                if (!Array.isArray(posts) || !posts.length) {
                    var empty = document.createElement("p");
                    empty.className = "pharmakon-blog-empty";
                    empty.textContent = "No news or articles have been published yet.";
                    grid.appendChild(empty);
                    return;
                }
                posts.forEach(function (post, index) { grid.appendChild(makeArticleCard(post, index)); });
            })
            .catch(function (error) {
                console.warn("Blog page is waiting for published articles:", error.message);
                grid.replaceChildren();
                var empty = document.createElement("p");
                empty.className = "pharmakon-blog-empty";
                empty.textContent = "News and articles are temporarily unavailable.";
                grid.appendChild(empty);
            });
    });
})();
