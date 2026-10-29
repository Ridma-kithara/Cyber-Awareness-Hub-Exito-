/* ============================================================
   Cyber Awareness Hub - Exito
   home.js — homepage: animated network globe (canvas 2D),
   topic grid, and the preserved question search engine.
   Requirement notes:
   - No third-party 3D library; a fibonacci-sphere projection
     drawn on canvas gives the 3D look at a fraction of the cost.
   - Animation pauses when the tab is hidden or the canvas is
     scrolled out of view, and degrades gracefully with
     prefers-reduced-motion.
   ============================================================ */

(function () {
    "use strict";

    var REDUCED = window.CAH && window.CAH.reduced;

    /* -------------------------------------------------------
       0) small helper — localized field accessor (kept from the
          original engine so scores behave identically)
       ------------------------------------------------------- */
    function getLocalized(field, lang) {
        var l = lang || window.getLang();
        if (field && typeof field === "object") return field[l] || field.en || "";
        return field || "";
    }

    /* -------------------------------------------------------
       1) TOPIC GRID — rendered from the data layer
       ------------------------------------------------------- */
    function renderTopics() {
        var grid = document.getElementById("topics-grid");
        if (!grid) return;
        grid.textContent = "";

        TOPICS.forEach(function (topic) {
            var card = document.createElement("article");
            card.className = "topic-card reveal";
            card.setAttribute("data-tilt", "");
            card.style.setProperty("--tint", topic.color);

            var icon = document.createElement("div");
            icon.className = "topic-icon";
            var i = document.createElement("i");
            i.className = "fa-solid " + topic.icon;
            i.setAttribute("aria-hidden", "true");
            icon.appendChild(i);

            var h3 = document.createElement("h3");
            h3.textContent = topic.t[window.getLang()] || topic.t.en;

            var p = document.createElement("p");
            p.textContent = topic.short[window.getLang()] || topic.short.en;

            var link = document.createElement("a");
            link.className = "topic-link";
            link.href = "learn.html#" + topic.id;
            link.textContent = window.t("topics_cta");
            var arr = document.createElement("i");
            arr.className = "fa-solid fa-arrow-right";
            arr.setAttribute("aria-hidden", "true");
            link.appendChild(arr);

            card.appendChild(icon);
            card.appendChild(h3);
            card.appendChild(p);
            card.appendChild(link);
            grid.appendChild(card);
        });
    }

    /* -------------------------------------------------------
       2) SEARCH ENGINE — scoring logic preserved from the
          original script.js, but rendered XSS-safely: every
          dynamic string goes through textContent, colours go
          through CSS custom properties, never innerHTML.
       ------------------------------------------------------- */
    function wordsOverlap(query, text) {
        var qWords = query.split(/\s+/).filter(function (w) { return w.length > 2; });
        var tWords = text.toLowerCase();
        var score = 0;
        qWords.forEach(function (w) {
            if (tWords.includes(w)) score += 2;
        });
        return score;
    }

    function scoreItem(query, item) {
        var lang = window.getLang();
        var score = 0;
        var q = query.toLowerCase();

        var keywords = getLocalized(item.keywords, lang);
        if (Array.isArray(keywords)) {
            keywords.forEach(function (k) {
                if (q === k.toLowerCase()) score += 10;
                else if (q.includes(k.toLowerCase()) || k.toLowerCase().includes(q)) score += 6;
            });
        }

        var category = getLocalized(item.category, lang);
        if (category.toLowerCase().includes(q)) score += 5;

        score += wordsOverlap(q, getLocalized(item.question, lang));
        score += wordsOverlap(q, getLocalized(item.answer, lang)) * 0.3;

        return score;
    }

    function resultCard(item) {
        var lang = window.getLang();
        var card = document.createElement("article");
        card.className = "search-result-card";

        var head = document.createElement("div");
        head.className = "result-header";

        var badge = document.createElement("div");
        badge.className = "result-icon-badge";
        badge.style.setProperty("--tint", item.color);
        var ic = document.createElement("i");
        ic.className = "fa-solid " + item.icon;
        ic.setAttribute("aria-hidden", "true");
        badge.appendChild(ic);

        var meta = document.createElement("div");
        var cat = document.createElement("span");
        cat.className = "card-title-tags";
        cat.textContent = getLocalized(item.category, lang);
        var q = document.createElement("h4");
        q.textContent = getLocalized(item.question, lang);
        meta.appendChild(cat);
        meta.appendChild(q);

        head.appendChild(badge);
        head.appendChild(meta);

        var ans = document.createElement("p");
        ans.textContent = getLocalized(item.answer, lang);

        card.appendChild(head);
        card.appendChild(ans);
        return card;
    }

    function runSearch() {
        var input = document.getElementById("search-input");
        var results = document.getElementById("search-results");
        if (!input || !results) return;

        var query = input.value.trim().toLowerCase();
        results.textContent = "";

        if (!query) return;

        var lang = window.getLang();
        var scored = SEARCH_TOPICS
            .map(function (item) { return { item: item, score: scoreItem(query, item) }; })
            .filter(function (x) { return x.score > 0; })
            .sort(function (a, b) { return b.score - a.score; });

        if (scored.length === 0) {
            var none = document.createElement("div");
            none.className = "search-no-result";

            var warn = document.createElement("i");
            warn.className = "fa-solid fa-circle-exclamation";
            warn.setAttribute("aria-hidden", "true");
            none.appendChild(warn);

            var line = document.createElement("p");
            line.textContent = window.t("search_no_result") + " \u201C" + input.value + "\u201D. " + window.t("search_try");
            none.appendChild(line);

            var chips = document.createElement("div");
            chips.className = "suggestion-chips";
            SEARCH_TOPICS.slice(0, 4).forEach(function (s) {
                var chip = document.createElement("button");
                chip.type = "button";
                chip.className = "suggestion-chip";
                chip.setAttribute("data-search-q", getLocalized(s.question, lang));
                chip.textContent = getLocalized(s.question, lang);
                chips.appendChild(chip);
            });
            none.appendChild(chips);
            results.appendChild(none);
            return;
        }

        scored.slice(0, 5).forEach(function (x) {
            results.appendChild(resultCard(x.item));
        });
    }

    function initSearch() {
        var input = document.getElementById("search-input");
        var btn = document.getElementById("search-btn");
        var results = document.getElementById("search-results");
        if (!input || !results) return;

        var timer = null;
        input.addEventListener("input", function () {
            clearTimeout(timer);
            timer = setTimeout(runSearch, 220); /* debounced */
        });

        if (btn) btn.addEventListener("click", runSearch);

        /* event delegation — chips carry their question in data-search-q */
        results.addEventListener("click", function (e) {
            var chip = e.target.closest("[data-search-q]");
            if (!chip) return;
            input.value = chip.getAttribute("data-search-q");
            runSearch();
            input.focus();
        });
    }

    /* -------------------------------------------------------
       3) GLOBE — fibonacci sphere of nodes drawn on a 2D
          canvas: rotation, perspective, depth fade, drag with
          inertia. Pure local computation, no network, no libs.
       ------------------------------------------------------- */
    function initGlobe() {
        var canvas = document.getElementById("globe-canvas");
        if (!canvas) return;
        var ctx = canvas.getContext("2d");
        if (!ctx) { canvas.style.display = "none"; return; }

        var GOLDEN = Math.PI * (3 - Math.sqrt(5));
        var mobile = window.innerWidth < 760;
        var COUNT = mobile ? 90 : 140;

        /* base positions on a unit sphere */
        var base = [];
        for (var n = 0; n < COUNT; n++) {
            var y = 1 - (n / (COUNT - 1)) * 2;
            var r = Math.sqrt(1 - y * y);
            var th = GOLDEN * n;
            base.push({ x: Math.cos(th) * r, y: y, z: Math.sin(th) * r });
        }

        /* nearby-node links give the "network" impression */
        var links = [];
        for (var a = 0; a < base.length; a++) {
            for (var b = a + 1; b < base.length; b++) {
                var dx = base[a].x - base[b].x, dy = base[a].y - base[b].y, dz = base[a].z - base[b].z;
                if (dx * dx + dy * dy + dz * dz < 0.12) links.push([a, b]);
            }
        }

        var rotY = 0, rotX = -0.28, velY = 0.0016, velX = 0;
        var dragging = false, lastX = 0, lastY = 0;
        var rafId = null, inView = true, running = false;
        var w = 0, h = 0, dpr = 1;

        function palette() {
            var light = document.documentElement.getAttribute("data-theme") === "light";
            return light
                ? { node: "8,145,178", nodeHot: "3,105,161", edge: "14,116,144" }
                : { node: "34,211,238", nodeHot: "79,172,254", edge: "34,211,238" };
        }

        function resize() {
            var rect = canvas.getBoundingClientRect();
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            w = Math.max(rect.width, 10); h = Math.max(rect.height, 10);
            canvas.width = Math.round(w * dpr);
            canvas.height = Math.round(h * dpr);
            if (REDUCED) draw(); /* repaint static frame */
        }

        function draw() {
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.clearRect(0, 0, w, h);

            var cx = w / 2, cy = h / 2;
            var R = Math.min(w, h) * 0.36;
            var FOV = 2.4;
            var pal = palette();
            var cosY = Math.cos(rotY), sinY = Math.sin(rotY);
            var cosX = Math.cos(rotX), sinX = Math.sin(rotX);

            var pts = base.map(function (p) {
                var x1 = p.x * cosY + p.z * sinY;      /* rotate around Y */
                var z1 = -p.x * sinY + p.z * cosY;
                var y2 = p.y * cosX - z1 * sinX;       /* then around X */
                var z2 = p.y * sinX + z1 * cosX;
                var s = FOV / (FOV - z2);              /* perspective */
                return { sx: cx + x1 * R * s, sy: cy + y2 * R * s, z: z2, s: s };
            });

            /* links between back-side nodes first (painted under) */
            ctx.lineWidth = 1;
            links.forEach(function (pair) {
                var p1 = pts[pair[0]], p2 = pts[pair[1]];
                var depth = (p1.z + p2.z) / 2;
                if (depth > 0.55) return;             /* skip far links */
                var alpha = (1 - Math.abs(depth)) * 0.16;
                ctx.strokeStyle = "rgba(" + pal.edge + "," + Math.max(alpha, 0.02).toFixed(3) + ")";
                ctx.beginPath();
                ctx.moveTo(p1.sx, p1.sy);
                ctx.lineTo(p2.sx, p2.sy);
                ctx.stroke();
            });

            /* nodes: far → near so close dots overlap correctly */
            var order = pts.slice().sort(function (p, q) { return q.z - p.z; });
            order.forEach(function (p) {
                var t = (p.z + 1) / 2;                /* 0 far … 1 near */
                var size = 1.1 + t * 2.1;
                var alpha = 0.25 + t * 0.75;
                var col = t > 0.82 ? pal.nodeHot : pal.node;
                ctx.fillStyle = "rgba(" + col + "," + alpha.toFixed(3) + ")";
                ctx.beginPath();
                ctx.arc(p.sx, p.sy, size, 0, Math.PI * 2);
                ctx.fill();
            });
        }

        function loop() {
            rafId = null;
            if (!running) return;
            if (!dragging) {
                rotY += velY;
                rotX += velX;
                velY += (0.0016 - velY) * 0.02;       /* inertia settles to baseline */
                velX *= 0.94;
            }
            draw();
            rafId = requestAnimationFrame(loop);
        }
        function play() {
            if (running || REDUCED) return;
            running = true;
            if (rafId === null) rafId = requestAnimationFrame(loop);
        }
        function stop() {
            running = false;
            if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
        }

        /* drag with pointer events (works for touch + mouse) */
        canvas.addEventListener("pointerdown", function (e) {
            dragging = true;
            lastX = e.clientX; lastY = e.clientY;
            canvas.setPointerCapture(e.pointerId);
            velY = 0; velX = 0;
        });
        canvas.addEventListener("pointermove", function (e) {
            if (!dragging) return;
            rotY += (e.clientX - lastX) * 0.005;
            rotX += (e.clientY - lastY) * 0.003;
            rotX = Math.max(-1.1, Math.min(1.1, rotX));
            velY = (e.clientX - lastX) * 0.0025;
            velX = (e.clientY - lastY) * 0.0015;
            lastX = e.clientX; lastY = e.clientY;
            if (REDUCED) draw();
        });
        canvas.addEventListener("pointerup", function () { dragging = false; });
        canvas.addEventListener("pointercancel", function () { dragging = false; });

        /* battery-friendly: only animate while visible */
        document.addEventListener("visibilitychange", function () {
            if (document.hidden) stop(); else if (inView) play();
        });
        if ("IntersectionObserver" in window) {
            new IntersectionObserver(function (entries) {
                entries.forEach(function (en) {
                    inView = en.isIntersecting;
                    if (inView && !document.hidden) play();
                    if (!inView) stop();
                });
            }, { threshold: 0.05 }).observe(canvas);
        }

        /* repaint when the theme flips so colours stay readable */
        var themeObs = new MutationObserver(function () { draw(); });
        themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

        window.addEventListener("resize", resize, { passive: true });
        resize();
        draw();
        play();
    }

    /* -------------------------------------------------------
       boot + language switch
       ------------------------------------------------------- */
    function init() {
        renderTopics();
        initSearch();
        initGlobe();

        /* re-render text-driven parts when the language changes */
        window.onLang(renderTopics);
        window.onLang(runSearch); /* re-scores with current query */
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
