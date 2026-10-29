/* ============================================================
   Cyber Awareness Hub - Exito
   quiz.js — 10-question quiz flow: topic picker, instant
   feedback, animated score ring, answer review, best score.
   Everything renders via textContent / CSS variables only.
   ============================================================ */

(function () {
    "use strict";

    var BEST_KEY = "cah.best";          /* { catId: {c, t} } */
    var CATS = ["phishing", "passwords", "social", "malware", "privacy"];

    var state = { deck: [], idx: 0, correct: 0, cat: null, answered: false, review: [] };

    /* small helpers ------------------------------------------------ */
    function topicBy(id) {
        return TOPICS.find(function (t) { return t.id === id; });
    }
    function localized(obj) {
        var lang = window.getLang();
        if (obj && typeof obj === "object") return obj[lang] || obj.en || "";
        return obj || "";
    }
    function shuffle(arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
        }
        return arr;
    }

    function loadBest() {
        try {
            var raw = JSON.parse(localStorage.getItem(BEST_KEY) || "{}");
            return raw && typeof raw === "object" ? raw : {};
        } catch (e) { return {}; }
    }
    function saveBest(cat, c, t) {
        var all = loadBest();
        var prev = all[cat];
        if (!prev || c > prev.c) {
            all[cat] = { c: c, t: t };
            try { localStorage.setItem(BEST_KEY, JSON.stringify(all)); } catch (e) { /* storage may be blocked */ }
        }
    }

    /* views -------------------------------------------------------- */
    function show(name) {
        ["quiz-select", "quiz-run", "quiz-result"].forEach(function (id) {
            var el = document.getElementById(id);
            if (el) el.hidden = id !== name;
        });
    }

    /* -------------------------------------------------------
       topic picker
       ------------------------------------------------------- */
    function renderCats() {        var grid = document.getElementById("quiz-cats");
        if (!grid) return;
        grid.textContent = "";

        /* the five real topic categories */
        CATS.forEach(function (cat) {
            var topic = topicBy(cat);
            var card = document.createElement("button");
            card.type = "button";
            card.className = "quiz-cat-card";
            card.style.setProperty("--tint", topic.color);
            card.setAttribute("data-cat", cat);

            var icon = document.createElement("div");
            icon.className = "topic-icon";
            var ic = document.createElement("i");
            ic.className = "fa-solid " + topic.icon;
            ic.setAttribute("aria-hidden", "true");
            icon.appendChild(ic);

            var t = document.createElement("h3");
            t.textContent = localized(topic.t);
            var n = document.createElement("p");
            n.textContent = QUIZ.filter(function (q) { return q.cat === cat; }).length + " " + window.t("s3_l");

            card.appendChild(icon);
            card.appendChild(t);
            card.appendChild(n);
            grid.appendChild(card);
        });

        /* mixed card — draws from every topic */
        var mixed = document.createElement("button");
        mixed.type = "button";
        mixed.className = "quiz-cat-card mixed";
        mixed.setAttribute("data-cat", "mixed");
        mixed.style.setProperty("--tint", "#a78bfa");

        var mIcon = document.createElement("div");
        mIcon.className = "topic-icon";
        var mIc = document.createElement("i");
        mIc.className = "fa-solid fa-shuffle";
        mIc.setAttribute("aria-hidden", "true");
        mIcon.appendChild(mIc);
        var mT = document.createElement("h3");
        mT.textContent = window.t("q_mixed");
        var mN = document.createElement("p");
        mN.textContent = QUIZ.length + " " + window.t("s3_l");
        mixed.appendChild(mIcon);
        mixed.appendChild(mT);
        mixed.appendChild(mN);
        grid.appendChild(mixed);
    }

    function bestStrip() {
        var strip = document.getElementById("best-strip");
        if (!strip) return;
        strip.textContent = "";

        var best = loadBest();
        var cats = CATS.concat(["mixed"]);
        var any = false;

        cats.forEach(function (cat) {
            var rec = best[cat];
            if (!rec) return;
            any = true;
            var chip = document.createElement("span");
            chip.className = "best-chip";
            var label = document.createElement("span");
            label.textContent = (cat === "mixed") ? window.t("q_mixed") : localized(topicBy(cat).t);
            var value = document.createElement("strong");
            value.textContent = rec.c + "/" + rec.t;
            chip.appendChild(label);
            chip.appendChild(value);
            strip.appendChild(chip);
        });

        if (!any) {
            var none = document.createElement("span");
            none.className = "best-chip";
            none.textContent = window.t("q_best") + ": —";
            strip.appendChild(none);
        }
    }

    function pickCat(e) {
        var card = e.target.closest("[data-cat]");
        if (!card) return;
        startQuiz(card.getAttribute("data-cat"));
    }

    /* -------------------------------------------------------
       quiz run
       ------------------------------------------------------- */
    function startQuiz(cat) {
        var pool = (cat === "mixed") ? QUIZ.slice() : QUIZ.filter(function (q) { return q.cat === cat; });
        state = { deck: shuffle(pool).slice(0, 10), idx: 0, correct: 0, cat: cat, answered: false, review: [] };
        show("quiz-run");
        renderQuestion();
    }

    function renderQuestion() {
        var q = state.deck[state.idx];
        var progress = document.getElementById("q-progress");
        var text = document.getElementById("q-text");
        var opts = document.getElementById("q-opts");
        var feedback = document.getElementById("q-feedback");
        var next = document.getElementById("btn-next");
        if (!text || !opts) return;

        progress.textContent = window.fmt(window.t("q_progress"), { n: state.idx + 1, t: state.deck.length });
        text.textContent = localized(q.q);
        opts.textContent = "";
        feedback.hidden = true;
        feedback.classList.remove("correct", "incorrect", "pop");

        var list = q.opts[window.getLang()] || q.opts.en;
        list.forEach(function (opt, i) {
            var b = document.createElement("button");
            b.type = "button";
            b.className = "quiz-opt";
            b.setAttribute("data-idx", String(i));
            b.textContent = opt;
            opts.appendChild(b);
        });

        var isLast = state.idx === state.deck.length - 1;
        next.textContent = isLast ? window.t("q_finish") : window.t("q_next");
        next.hidden = true;
    }

    function answer(e) {
        var btn = e.target.closest(".quiz-opt");
        if (!btn || state.answered) return;
        var pick = parseInt(btn.getAttribute("data-idx"), 10);
        state.answered = true;
        state.pick = pick;
        /* score the answer exactly once (guarded by state.answered) */
        if (pick === state.deck[state.idx].ans) state.correct += 1;
        state.review.push({ q: state.deck[state.idx], pick: pick });
        applyAnswerUI(pick);
    }

    /* applies the "answered" presentation for the current question,
       without touching score state — reused on language switch */
    function applyAnswerUI(pick) {
        var q = state.deck[state.idx];
        var opts = document.getElementById("q-opts");

        Array.prototype.forEach.call(opts.children, function (child, i) {
            child.disabled = true;
            if (i === q.ans) child.classList.add("is-right");
            else if (i === pick) child.classList.add("is-wrong");
        });

        var feedback = document.getElementById("q-feedback");
        var verdict = document.getElementById("q-verdict");
        var why = document.getElementById("q-why");
        var isLast = state.idx === state.deck.length - 1;
        var next = document.getElementById("btn-next");

        var ok = pick === q.ans;

        verdict.textContent = ok ? window.t("q_correct") : window.t("q_wrong");
        why.textContent = window.t("q_why") + ": " + localized(q.why);
        feedback.hidden = false;
        feedback.classList.toggle("correct", ok);
        feedback.classList.toggle("incorrect", !ok);
        feedback.classList.add("pop");

        next.hidden = false;
        next.textContent = isLast ? window.t("q_finish") : window.t("q_next");
    }

    function nextQuestion() {
        state.answered = false;
        if (state.idx < state.deck.length - 1) {
            state.idx += 1;
            renderQuestion();
            return;
        }
        /* last question → save + show results */
        saveBest(state.cat, state.correct, state.deck.length);
        renderResult();
    }

    /* -------------------------------------------------------
       results
       ------------------------------------------------------- */
    function ringUpdate(pct) {
        var ring = document.getElementById("q-ring");
        var label = document.getElementById("ring-label");
        if (!ring) return;
        var C = 339.292; /* 2π × r (r = 54) */
        ring.style.strokeDashoffset = String(C * (1 - pct));
        if (label) label.textContent = Math.round(pct * 100) + "%";
    }

    function msgTier(c, t) {
        var ratio = c / t;
        if (ratio >= 0.8) return window.t("q_msg4");
        if (ratio >= 0.6) return window.t("q_msg3");
        if (ratio >= 0.4) return window.t("q_msg2");
        return window.t("q_msg1");
    }

    function renderResult() {
        var total = state.deck.length;
        var scoreLine = document.getElementById("score-line");
        var msg = document.getElementById("score-msg");
        var review = document.getElementById("q-review-list");

        scoreLine.textContent = window.fmt(window.t("q_score"), { c: state.correct, t: total });
        msg.textContent = msgTier(state.correct, total);
        ringUpdate(state.correct / total);

        review.textContent = "";
        state.review.forEach(function (rec, i) {
            var item = document.createElement("li");
            var ok = rec.pick === rec.q.ans;
            item.classList.add("review-item", ok ? "ok" : "bad");

            var num = document.createElement("span");
            num.className = "review-num";
            num.textContent = String(i + 1);

            var body = document.createElement("div");
            var q = document.createElement("p");
            q.className = "review-q";
            q.textContent = localized(rec.q.q);

            var your = document.createElement("p");
            your.className = "review-line";
            your.textContent = window.t("q_your") + " " + ((rec.q.opts[window.getLang()] || rec.q.opts.en)[rec.pick]);

            body.appendChild(q);
            body.appendChild(your);

            if (!ok) {
                var right = document.createElement("p");
                right.className = "review-line right";
                right.textContent = window.t("q_right") + " " + ((rec.q.opts[window.getLang()] || rec.q.opts.en)[rec.q.ans]);
                body.appendChild(right);
            }

            item.appendChild(num);
            item.appendChild(body);
            review.appendChild(item);
        });

        bestStrip();
        show("quiz-result");
    }

    /* -------------------------------------------------------
       wiring + language handling
       ------------------------------------------------------- */
    function init() {
        renderCats();
        bestStrip();

        var grid = document.getElementById("quiz-cats");
        if (grid) grid.addEventListener("click", pickCat);

        var opts = document.getElementById("q-opts");
        if (opts) opts.addEventListener("click", answer);

        var next = document.getElementById("btn-next");
        if (next) next.addEventListener("click", nextQuestion);

        var retry = document.getElementById("btn-retry");
        if (retry) retry.addEventListener("click", function () { startQuiz(state.cat); });

        var change = document.getElementById("btn-change");
        if (change) change.addEventListener("click", function () { show("quiz-select"); bestStrip(); });

        /* re-render everything text-based when language changes */
        window.onLang(function () {
            if (document.getElementById("quiz-select").hidden === false) {
                renderCats();
                bestStrip();
            } else if (document.getElementById("quiz-result").hidden === false) {
                renderResult();
            } else {
                /* mid-question: rebuild and re-apply the answered state if any */
                renderQuestion();
                if (state.answered) applyAnswerUI(state.pick);
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
