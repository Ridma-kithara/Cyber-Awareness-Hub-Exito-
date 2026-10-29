/* ============================================================
   Cyber Awareness Hub - Exito
   faq.js — 30-question FAQ: filter chips, language-aware
   search, accessible accordion.
   - Categories are mapped per question (map below) and paired
     with the verbatim FAQ30 bank preserved from the original.
   - Accordion uses <button aria-expanded> + content grid
     animation (0fr → 1fr) — no alert hacks, keyboard friendly.
   ============================================================ */

(function () {
    "use strict";

    /* question index → filter chip id (0-based over FAQ30) */
    var FAQ_CATS = [
        "passwords", "phishing", "phishing", "passwords", "passwords",   /* 0-4  */
        "malware", "malware", "network", "social", "social",            /* 5-9  */
        "network", "network", "malware", "privacy", "scams",            /* 10-14 */
        "malware", "phishing", "phishing", "malware", "privacy",        /* 15-19 */
        "malware", "network", "network", "privacy", "network",          /* 20-24 */
        "social", "passwords", "passwords", "scams", "scams"            /* 25-29 */
    ];

    var FILTERS = ["all", "passwords", "phishing", "social", "scams", "malware", "privacy", "network"];
    var filterEl = null;

    /* -------------------------------------------------------
       localized accessor (mirrors the shared one)
       ------------------------------------------------------- */
    function localized(obj) {
        var lang = window.getLang();
        if (obj && typeof obj === "object") return obj[lang] || obj.en || "";
        return obj || "";
    }

    /* -------------------------------------------------------
       filter chips
       ------------------------------------------------------- */
    function renderChips() {
        var bar = document.getElementById("faq-filters");
        if (!bar) return;
        bar.textContent = "";
        FILTERS.forEach(function (f) {
            var b = document.createElement("button");
            b.type = "button";
            b.className = "chip" + (f === "all" && filterEl === null ? " active" : "");
            b.setAttribute("data-faq-filter", f);
            b.textContent = window.t(f === "all" ? "f_all" : "f_" + f);
            bar.appendChild(b);
        });
    }

    function currentFilter() { return filterEl === null ? "all" : filterEl; }

    /* -------------------------------------------------------
       search scoring — same shape as the homepage engine
       ------------------------------------------------------- */
    function matches(q, item, cat) {
        var query = q.toLowerCase().trim();
        if (currentFilter() !== "all" && cat !== currentFilter()) return false;
        if (!query) return true;
        var lang = window.getLang();
        var qa = item[lang] || item.en; /* each FAQ30 entry is {en:{q,a}, si:{q,a}, ta:{q,a}} */
        var text = (qa.q + " " + qa.a).toLowerCase();
        return text.includes(query);
    }

    function render() {
        var list = document.getElementById("faq-list");
        var count = document.getElementById("faq-count");
        if (!list) return;
        list.textContent = "";

        var q = (document.getElementById("faq-search").value || "").trim();
        var shown = 0;
        var lang = window.getLang();

        FAQ30.forEach(function (item, i) {
            if (!matches(q, item, FAQ_CATS[i])) return;
            shown += 1;

            var cat = FAQ_CATS[i];
            var qa = item[lang] ? item[lang] : item.en;

            var li = document.createElement("li");
            li.className = "faq-item";

            var btn = document.createElement("button");
            btn.type = "button";
            btn.className = "faq-question";
            btn.setAttribute("aria-expanded", "false");

            var tag = document.createElement("span");
            tag.className = "card-title-tags";
            tag.textContent = window.t("f_" + cat);

            var txt = document.createElement("span");
            txt.className = "faq-q-text";
            txt.textContent = qa.q;

            var icon = document.createElement("i");
            icon.className = "fa-solid fa-plus";
            icon.setAttribute("aria-hidden", "true");

            var right = document.createElement("span");
            right.className = "faq-q-side";
            right.appendChild(txt);
            right.appendChild(icon);

            btn.appendChild(tag);
            btn.appendChild(right);

            var body = document.createElement("div");
            body.className = "faq-answer";
            body.setAttribute("role", "region");
            var p = document.createElement("p");
            p.textContent = qa.a;
            body.appendChild(p);

            li.appendChild(btn);
            li.appendChild(body);
            list.appendChild(li);
        });

        count.textContent = window.fmt(window.t("faq_count"), { n: shown, t: FAQ30.length });

        var none = document.getElementById("faq-none");
        if (none) none.hidden = shown !== 0;
    }

    /* -------------------------------------------------------
       accordion — one open toggle per button; multiple entries
       may stay open (less annoyance, more scannable)
       ------------------------------------------------------- */
    function initAccordion() {
        var list = document.getElementById("faq-list");
        list.addEventListener("click", function (e) {
            var btn = e.target.closest(".faq-question");
            if (!btn) return;
            var open = btn.getAttribute("aria-expanded") === "true";
            btn.setAttribute("aria-expanded", open ? "false" : "true");
            btn.classList.toggle("open", !open);
        });
    }

    function initSearch() {
        var input = document.getElementById("faq-search");
        var timer = null;
        input.addEventListener("input", function () {
            clearTimeout(timer);
            timer = setTimeout(render, 200); /* debounced, i18n-aware */
        });
    }

    function initFilters() {
        var bar = document.getElementById("faq-filters");
        bar.addEventListener("click", function (e) {
            var chip = e.target.closest("[data-faq-filter]");
            if (!chip) return;
            filterEl = chip.getAttribute("data-faq-filter");
            Array.prototype.forEach.call(bar.children, function (c) {
                c.classList.toggle("active", c === chip);
            });
            render();
        });
    }

    /* -------------------------------------------------------
       boot + language switch
       ------------------------------------------------------- */
    function init() {
        renderChips();
        initFilters();
        initSearch();
        initAccordion();
        render();

        window.onLang(function () {
            renderChips();
            render();
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
