/* ============================================================
   Cyber Awareness Hub - Exito
   learn.js — Threat Library page: topic sections, sticky
   sidebar, "Scam or Safe?" checks and defensive habits.
   Rendering rule: all content goes through textContent —
   no innerHTML with data-derived strings (XSS-safe).
   ============================================================ */

(function () {
    "use strict";

    function localized(obj) {
        var lang = window.getLang();
        if (obj && typeof obj === "object") return obj[lang] || obj.en || "";
        return obj || "";
    }

    /* -------------------------------------------------------
       sidebar chips (mini table of contents)
       ------------------------------------------------------- */
    function renderSidebar() {
        var nav = document.getElementById("learn-sidebar");
        if (!nav) return;
        nav.textContent = "";

        var h = document.createElement("p");
        h.className = "sidebar-heading";
        h.textContent = window.t("learn_sidebar_h");
        nav.appendChild(h);

        TOPICS.forEach(function (topic) {
            var link = document.createElement("a");
            link.href = "#topic-" + topic.id;
            link.className = "sidebar-chip";

            var ic = document.createElement("i");
            ic.className = "fa-solid " + topic.icon;
            ic.setAttribute("aria-hidden", "true");
            ic.style.setProperty("color", topic.color);

            var span = document.createElement("span");
            span.textContent = localized(topic.t);

            link.appendChild(ic);
            link.appendChild(span);
            nav.appendChild(link);
        });

        /* smooth-scroll enhancement, respects reduced motion */
        nav.addEventListener("click", function (e) {
            var a = e.target.closest("a[href^='#topic-']");
            if (!a) return;
            var target = document.getElementById(a.getAttribute("href").slice(1));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({
                behavior: (window.CAH && window.CAH.reduced) ? "auto" : "smooth",
                block: "start"
            });
            history.replaceState(null, "", a.getAttribute("href"));
        });
    }

    /* -------------------------------------------------------
       topic sections
       ------------------------------------------------------- */
    function listBlock(titleKey) {
        var h = document.createElement("h4");
        h.className = "list-heading";
        h.textContent = window.t(titleKey);
        return h;
    }

    function buildList(items) {
        var ul = document.createElement("ul");
        items.forEach(function (item) {
            var li = document.createElement("li");
            li.textContent = localized(item);
            ul.appendChild(li);
        });
        return ul;
    }

    function topicSection(topic, index) {
        var lang = window.getLang();
        var section = document.createElement("section");
        section.className = "topic-section reveal";
        section.id = "topic-" + topic.id;
        section.style.setProperty("--tint", topic.color);

        /* header */
        var head = document.createElement("div");
        head.className = "topic-head";
        var icon = document.createElement("div");
        icon.className = "topic-icon";
        var ic = document.createElement("i");
        ic.className = "fa-solid " + topic.icon;
        ic.setAttribute("aria-hidden", "true");
        icon.appendChild(ic);
        var title = document.createElement("h2");
        title.textContent = localized(topic.t);
        head.appendChild(icon);
        head.appendChild(title);
        section.appendChild(head);

        /* intro */
        var intro = document.createElement("p");
        intro.className = "topic-intro";
        intro.textContent = localized(topic.intro);
        section.appendChild(intro);

        /* two-column grid: signs / steps */
        var grid = document.createElement("div");
        grid.className = "two-col";
        var signs = document.createElement("div");
        signs.className = "info-box signs";
        signs.appendChild(listBlock("signs_h"));
        signs.appendChild(buildList(topic.signs));
        var steps = document.createElement("div");
        steps.className = "info-box steps";
        steps.appendChild(listBlock("steps_h"));
        steps.appendChild(buildList(topic.steps));
        grid.appendChild(signs);
        grid.appendChild(steps);
        section.appendChild(grid);

        /* scenario: "Scam or Safe?" */
        var scen = topic.scen;
        var box = document.createElement("div");
        box.className = "scenario";
        box.setAttribute("data-topic", topic.id);

        var sh = document.createElement("h4");
        sh.className = "list-heading";
        sh.textContent = window.t("scen_h");
        box.appendChild(sh);

        var msg = document.createElement("p");
        msg.className = "scenario-msg";
        msg.textContent = localized(scen.text);
        box.appendChild(msg);

        var btns = document.createElement("div");
        btns.className = "scenario-actions";
        [["scam", "scen_yes"], ["safe", "scen_no"]].forEach(function (pair) {
            var b = document.createElement("button");
            b.type = "button";
            b.className = "btn btn-ghost btn-sm";
            b.setAttribute("data-answer", pair[0]);
            b.textContent = window.t(pair[1]);
            btns.appendChild(b);
        });
        box.appendChild(btns);

        var feedback = document.createElement("p");
        feedback.className = "scenario-feedback";
        feedback.hidden = true;
        box.appendChild(feedback);

        section.appendChild(box);
        return section;
    }

    function renderSections() {
        var wrap = document.getElementById("learn-sections");
        if (!wrap) return;
        wrap.textContent = "";
        TOPICS.forEach(function (topic, i) {
            wrap.appendChild(topicSection(topic, i));
        });
    }

    /* -------------------------------------------------------
       habits band
       ------------------------------------------------------- */
    function renderHabits() {
        var grid = document.getElementById("habits-grid");
        if (!grid) return;
        grid.textContent = "";
        HABITS.forEach(function (habit) {
            var card = document.createElement("article");
            card.className = "habit-card";
            var icon = document.createElement("div");
            icon.className = "topic-icon";
            var ic = document.createElement("i");
            ic.className = "fa-solid " + habit.icon;
            ic.setAttribute("aria-hidden", "true");
            icon.appendChild(ic);
            var t = document.createElement("h3");
            t.textContent = localized(habit.t);
            var p = document.createElement("p");
            p.textContent = localized(habit.d);
            card.appendChild(icon);
            card.appendChild(t);
            card.appendChild(p);
            grid.appendChild(card);
        });
    }

    /* -------------------------------------------------------
       scenario answers — one delegated listener for all checks
       ------------------------------------------------------- */
    function initScenarios() {
        var wrap = document.getElementById("learn-sections");
        if (!wrap) return;

        wrap.addEventListener("click", function (e) {
            var btn = e.target.closest(".scenario [data-answer]");
            if (!btn) return;

            var box = btn.closest(".scenario");
            var topic = TOPICS.find(function (t) { return t.id === box.getAttribute("data-topic"); });
            if (!topic) return;

            var told = btn.getAttribute("data-answer") === "scam";
            var correct = told === Boolean(topic.scen.isScam);
            var feedback = box.querySelector(".scenario-feedback");

            feedback.textContent =
                (correct ? window.t("scen_correct") : window.t("scen_wrong") + " ") +
                localized(topic.scen.explain);
            feedback.classList.toggle("correct", correct);
            feedback.classList.toggle("incorrect", !correct);
            feedback.hidden = false;
        });
    }

    /* -------------------------------------------------------
       boot + language switch
       ------------------------------------------------------- */
    function init() {
        renderSidebar();
        renderSections();
        renderHabits();
        initScenarios();

        /* everything is text-driven → rebuild on language change,
           then re-apply shared translations for static headings */
        window.onLang(function () {
            renderSidebar();
            renderSections();
            renderHabits();
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
