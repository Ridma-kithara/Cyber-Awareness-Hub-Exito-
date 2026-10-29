/* ============================================================
   Cyber Awareness Hub - Exito
   ui.js — shared behaviours: theme, header/nav, ticker,
   scroll reveals, counters, card tilt. Dependency-free.

   Performance rules:
   - visible-driven work only (IntersectionObserver)
   - hover-driven tilt on fine pointers only
   - everything respects prefers-reduced-motion
   ============================================================ */

(function () {
    "use strict";

    var THEME_KEY = "cah.theme";
    var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.CAH = { reduced: REDUCED };

    /* -------------------------------------------------------
       1) THEME  (dark default, persisted, system fallback)
       ------------------------------------------------------- */
    function storedTheme() {
        try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
    }
    function getTheme() {
        var s = storedTheme();
        if (s === "light" || s === "dark") return s;
        return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }
    function applyTheme(name) {
        document.documentElement.setAttribute("data-theme", name);
        var meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute("content", name === "light" ? "#f2f6fc" : "#04070f");

        /* header logo swaps between light (for dark bg) and dark variants */
        var logos = document.querySelectorAll("[data-logo-light]");
        for (var i = 0; i < logos.length; i++) {
            logos[i].setAttribute("src", name === "light" ? logos[i].getAttribute("data-logo-light") : logos[i].getAttribute("data-logo-dark"));
        }

        var btn = document.getElementById("theme-toggle");
        if (btn) {
            /* label always describes the action the button will perform */
            var label = name === "light" ? t("theme_to_dark") : t("theme_to_light");
            btn.setAttribute("aria-label", label);
            btn.setAttribute("aria-pressed", name === "dark" ? "true" : "false");
        }
    }
    function setTheme(name) {
        try { localStorage.setItem(THEME_KEY, name); } catch (e) { /* storage may be blocked */ }
        applyTheme(name);
    }

    /* -------------------------------------------------------
       2) HEADER — scrolled state + mobile menu + current page
       ------------------------------------------------------- */
    function initHeader() {
        var header = document.querySelector(".site-header");
        var onScroll = function () {
            if (header) header.classList.toggle("scrolled", window.scrollY > 8);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        /* active link */
        var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
        var links = document.querySelectorAll(".site-nav a[href]");
        for (var i = 0; i < links.length; i++) {
            var href = links[i].getAttribute("href").toLowerCase();
            if (href.indexOf(page) === 0 || (page === "" && href.indexOf("index.html") === 0)) {
                links[i].setAttribute("aria-current", "page");
            }
        }

        /* mobile menu */
        var toggle = document.getElementById("nav-toggle");
        var nav = document.getElementById("primary-nav");
        if (toggle && nav) {
            var close = function () {
                nav.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            };
            var openState = function () { return toggle.getAttribute("aria-expanded") === "true"; };

            toggle.addEventListener("click", function () {
                var next = !openState();
                nav.classList.toggle("open", next);
                toggle.setAttribute("aria-expanded", next ? "true" : "false");
            });

            nav.addEventListener("click", function (e) {
                if (e.target.closest("a")) close();
            });

            document.addEventListener("click", function (e) {
                if (openState() && !e.target.closest(".site-header")) close();
            });

            document.addEventListener("keydown", function (e) {
                if (e.key === "Escape" && openState()) { close(); toggle.focus(); }
            });
        }
    }

    /* -------------------------------------------------------
       3) TICKER — seamless marquee built from UI strings.
          Second copy is aria-hidden; animation is pure CSS.
       ------------------------------------------------------- */
    function buildTicker() {
        var wrap = document.getElementById("ticker-content");
        if (!wrap) return;
        wrap.innerHTML = "";

        function copy(hidden) {
            var seq = document.createElement("div");
            seq.className = "ticker-seq";
            if (hidden) seq.setAttribute("aria-hidden", "true");

            var items = ["t1", "t2", "t3"];
            for (var i = 0; i < items.length; i++) {
                var item = document.createElement("span");
                item.className = "ticker-item";
                var tag = document.createElement("span");
                tag.className = "ticker-tag";
                tag.textContent = t(items[i] + "_label");
                var txt = document.createElement("span");
                txt.textContent = t(items[i] + "_text");
                item.appendChild(tag);
                item.appendChild(txt);
                seq.appendChild(item);
            }
            return seq;
        }

        wrap.appendChild(copy(false));
        wrap.appendChild(copy(true));
    }

    /* -------------------------------------------------------
       4) REVEAL ON SCROLL — stagger via --d custom property
       ------------------------------------------------------- */
    function initReveal() {
        var items = document.querySelectorAll(".reveal");
        if (!items.length) return;

        if (REDUCED || !("IntersectionObserver" in window)) {
            for (var i = 0; i < items.length; i++) items[i].classList.add("in");
        }

        /* stagger key: index within its parent so grids cascade */
        var seen = new Map();
        for (var j = 0; j < items.length; j++) {
            var p = items[j].parentElement;
            var n = seen.get(p) || 0;
            items[j].style.setProperty("--d", (n % 6) * 70 + "ms");
            seen.set(p, n + 1);
        }

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.isIntersecting) {
                    en.target.classList.add("in");
                    io.unobserve(en.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

        for (var k = 0; k < items.length; k++) io.observe(items[k]);
    }

    /* -------------------------------------------------------
       5) COUNTERS — animate once when visible
       ------------------------------------------------------- */
    function runCounter(el) {
        var target = parseInt(el.getAttribute("data-count"), 10) || 0;
        if (REDUCED || !("requestAnimationFrame" in window)) { el.textContent = String(target); return; }
        var start = null;
        var dur = 1100;
        function step(ts) {
            if (start === null) start = ts;
            var p = Math.min((ts - start) / dur, 1);
            var eased = 1 - Math.pow(1 - p, 3); /* easeOutCubic */
            el.textContent = String(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }
    function initCounters() {
        var els = document.querySelectorAll("[data-count]");
        if (!els.length) return;
        if (!("IntersectionObserver" in window)) {
            for (var i = 0; i < els.length; i++) els[i].textContent = els[i].getAttribute("data-count");
            return;
        }
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.isIntersecting) { runCounter(en.target); io.unobserve(en.target); }
            });
        }, { threshold: 0.6 });
        for (var j = 0; j < els.length; j++) io.observe(els[j]);
    }

    /* -------------------------------------------------------
       6) CARD TILT — pointer-fine devices only, very subtle
       ------------------------------------------------------- */
    function initTilt() {
        if (REDUCED || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
        var cards = document.querySelectorAll("[data-tilt]");
        for (var i = 0; i < cards.length; i++) {
            (function (card) {
                card.addEventListener("pointermove", function (e) {
                    var r = card.getBoundingClientRect();
                    var x = (e.clientX - r.left) / r.width - 0.5;
                    var y = (e.clientY - r.top) / r.height - 0.5;
                    card.style.setProperty("--rx", (-y * 5).toFixed(2) + "deg");
                    card.style.setProperty("--ry", (x * 6).toFixed(2) + "deg");
                });
                card.addEventListener("pointerleave", function () {
                    card.style.setProperty("--rx", "0deg");
                    card.style.setProperty("--ry", "0deg");
                });
            })(cards[i]);
        }
    }

    /* -------------------------------------------------------
       7) FOOTER YEAR
       ------------------------------------------------------- */
    function initYear() {
        var y = document.querySelector("[data-year]");
        if (y) y.textContent = String(new Date().getFullYear());
    }

    function init() {
        applyTheme(getTheme());

        var tt = document.getElementById("theme-toggle");
        if (tt) {
            tt.addEventListener("click", function () {
                setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
            });
        }

        initHeader();
        buildTicker();
        initReveal();
        initCounters();
        initTilt();
        initYear();

        /* rebuild ticker when language changes */
        if (window.onLang) window.onLang(buildTicker);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
