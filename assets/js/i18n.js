/* ============================================================
   Cyber Awareness Hub - Exito
   i18n.js — Language system (English / සිංහල / தமிழ்)

   Static HTML ships in English; every translated string lives in
   data-ui.js. applyTranslations() only touches textContent /
   placeholder / aria-label (never innerHTML with user-adjacent
   data), which keeps the layer XSS-safe under a strict CSP.
   ============================================================ */

(function () {
    "use strict";

    var LANGS = ["en", "si", "ta"];
    var LS_KEY = "cah.lang";

    /* --- stored / system language --------------------------- */
    function stored() {
        try { return localStorage.getItem(LS_KEY); } catch (e) { return null; }
    }
    function valid(l) { return LANGS.indexOf(l) !== -1; }

    var current = valid(stored()) ? stored() : "en";

    function getLang() { return current; }

    /* --- formatter for {n} {t} {c} placeholders ------------- */
    function fmt(str, params) {
        if (!params) return str || "";
        return String(str || "").replace(/\{(n|t|c)\}/g, function (m, key) {
            return Object.prototype.hasOwnProperty.call(params, key) ? String(params[key]) : m;
        });
    }

    /* --- lookup: current lang, falling back to English ------ */
    function t(key, params) {
        var pack = UI[current] || UI.en;
        var s = pack[key];
        if (typeof s !== "string") s = UI.en[key] || key;
        return fmt(s, params);
    }

    /* --- apply UI strings to all [data-i18n-*] nodes -------- */
    function applyTranslations() {
        var root = document.documentElement;
        root.setAttribute("lang", current);
        root.setAttribute("data-lang", current);

        var i;
        var text = document.querySelectorAll("[data-i18n]");
        for (i = 0; i < text.length; i++) {
            text[i].textContent = t(text[i].getAttribute("data-i18n"));
        }

        var ph = document.querySelectorAll("[data-i18n-placeholder]");
        for (i = 0; i < ph.length; i++) {
            ph[i].setAttribute("placeholder", t(ph[i].getAttribute("data-i18n-placeholder")));
        }

        var aria = document.querySelectorAll("[data-i18n-aria]");
        for (i = 0; i < aria.length; i++) {
            aria[i].setAttribute("aria-label", t(aria[i].getAttribute("data-i18n-aria")));
        }

        var btns = document.querySelectorAll("[data-lang-btn]");
        for (i = 0; i < btns.length; i++) {
            var b = btns[i];
            var active = b.getAttribute("data-lang-btn") === current;
            b.classList.toggle("active", active);
            b.setAttribute("aria-pressed", active ? "true" : "false");
        }
    }

    /* --- language switch ------------------------------------ */
    function setLanguage(lang) {
        if (!valid(lang) || lang === current) return;
        current = lang;
        try { localStorage.setItem(LS_KEY, lang); } catch (e) { /* storage may be blocked */ }
        applyTranslations();
        document.dispatchEvent(new CustomEvent("cah:lang"));
    }

    function onLang(fn) { document.addEventListener("cah:lang", fn); }

    /* --- wiring --------------------------------------------- */
    function init() {
        applyTranslations();

        var btns = document.querySelectorAll("[data-lang-btn]");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                setLanguage(this.getAttribute("data-lang-btn"));
            });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    /* expose for page scripts */
    window.getLang = getLang;
    window.setLanguage = setLanguage;
    window.applyTranslations = applyTranslations;
    window.t = t;
    window.fmt = fmt;
    window.onLang = onLang;
})();
