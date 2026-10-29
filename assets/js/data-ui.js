/* ============================================================
   Cyber Awareness Hub - Exito
   data-ui.js — Trilingual UI strings (English / සිංහල / தமிழ்)
   Edit this file to change any interface text.
   Placeholder syntax: {n} {t} {c} (see i18n.js fmt())
   ============================================================ */

const UI = {

    en: {
        /* Shared */
        skip: "Skip to main content",
        nav_home: "Home",
        nav_learn: "Learn",
        nav_quiz: "Quiz",
        nav_faq: "FAQ",
        menu_open: "Open menu",
        menu_close: "Close menu",
        theme_to_light: "Switch to light theme",
        theme_to_dark: "Switch to dark theme",
        lang_aria: "Change language",
        logo_alt: "ISACA Student Group — ICBT Campus logo",

        /* Ticker (evergreen awareness items — no fabricated news) */
        t1_label: "SCAM ALERT:",
        t1_text: "Phishing messages often pretend to be your university, bank, or a job recruiter. Verify before you click.",
        t2_label: "CYBER HYGIENE:",
        t2_text: "Turn on Multi-Factor Authentication (MFA) — it can block over 99% of account takeover attacks.",
        t3_label: "STAY UPDATED:",
        t3_text: "Browser and app updates fix security holes. Turn on automatic updates today.",

        /* Hero */
        hero_badge: "ISACA Student Group • ICBT Campus",
        hero_title: "Cyber Awareness Hub",
        hero_stay: "Stay", hero_alert: "Alert.", hero_safe: "Safe.", hero_secure: "Secure.",
        hero_desc: "Learn how to spot scams, build strong passwords, and protect your personal data — in simple English, Sinhala, and Tamil. Free for every student.",
        hero_cta1: "Start Learning",
        hero_cta2: "Take the Quiz",
        hero_hint: "Drag the globe to explore",

        /* Stats strip (all values are real counts from this site) */
        s1_l: "Core topics",
        s2_l: "FAQ answers",
        s3_l: "Quiz questions",
        s4_l: "Languages",

        /* Topics grid */
        topics_title: "What do you want to learn today?",
        topics_sub: "Pick a topic and learn how to stay safe — with real examples you can recognize instantly.",
        topics_cta: "Learn more",

        /* Search */
        search_label: "Search cyber safety topics",
        search_placeholder: "Ask a question... e.g. 'what is phishing' or 'MFA'",
        search_btn: "Search",
        search_no_result: "No exact match found for",
        search_try: "Try one of these popular topics:",
        search_clear: "Clear",

        /* Quiz teaser */
        teaser_tag: "Interactive",
        teaser_title: "Test yourself in 3 minutes",
        teaser_p: "Can you spot a scam message? Take the quick quiz and find out — no sign-up needed.",
        teaser_cta: "Start the quiz",

        /* CTA band */
        cta_title: "Ready to test your scam radar?",
        cta_p: "Take the 3-minute quiz, or browse all 30 essential questions.",
        cta_btn1: "Take the quiz",
        cta_btn2: "Browse the FAQ",

        /* Footer */
        foot1_h: "About this project",
        foot1_p: "Cyber Awareness Hub is an educational project by the ISACA Student Group of ICBT Campus. Our goal is to help every student recognize scams and stay safe online — in English, Sinhala, and Tamil.",
        foot2_h: "Explore",
        foot3_h: "Connect",
        foot3_p: "Follow our community for events, workshops, and awareness campaigns.",
        foot_bottom: "ISACA Student Group — ICBT Campus. Built for education, not profit. Think before you click.",
        foot_note: "This site is for educational awareness only and does not replace official security guidance from your institution.",
        fb_aria: "ISG ICBT on Facebook",
        ig_aria: "ISG ICBT on Instagram",
        li_aria: "ISACA on LinkedIn",

        /* Learn page */
        learn_title: "Threat Library",
        learn_sub: "Understand the most common tricks scammers use — and the simple habits that stop them.",
        learn_sidebar_h: "Topics",
        signs_h: "Warning signs",
        steps_h: "What to do",
        scen_h: "Quick check: Scam or Safe?",
        scen_yes: "Looks like a scam",
        scen_no: "Seems safe",
        scen_correct: "Correct!",
        scen_wrong: "Not quite —",
        scen_retry: "Try another check",
        back_top: "Back to top",
        habits_h: "Everyday defensive habits",
        habits_intro: "Three small habits that block most everyday attacks:",

        /* FAQ page */
        faq_title: "30 Essential Cyber Awareness Questions",
        faq_subtitle: "Quick answers to the most important cyber security questions every student should know.",
        f_all: "All",
        f_passwords: "Passwords & MFA",
        f_phishing: "Phishing & Email",
        f_social: "Social Engineering",
        f_scams: "Scams & Fraud",
        f_malware: "Malware & Ransomware",
        f_privacy: "Privacy",
        f_network: "Wi-Fi & Devices",
        faq_count: "Showing {n} of {t} questions",
        faq_none: "No questions match your search or filter.",

        /* Quiz page */
        quiz_title: "Cyber Safety Quiz",
        quiz_sub: "10 random questions. No timer, no pressure — learn as you go.",
        q_pick: "Choose a topic",
        q_mixed: "Mixed — all topics",
        q_start: "Start the quiz",
        q_best: "Your best score",
        q_progress: "Question {n} of {t}",
        q_correct: "Correct!",
        q_wrong: "Not quite.",
        q_why: "Why",
        q_next: "Next question",
        q_finish: "See my score",
        q_result_title: "Quiz complete!",
        q_score: "You answered {c} of {t} correctly.",
        q_msg4: "Excellent — you have strong scam radar!",
        q_msg3: "Good job! Review the misses to get even sharper.",
        q_msg2: "Nice start — the Threat Library can help you level up.",
        q_msg1: "Every expert started here. Try again — reading one topic first helps a lot.",
        q_review: "Review your answers",
        q_retry: "Try again",
        q_change: "Change topic",
        q_your: "Your answer:",
        q_right: "Correct answer:",
        q_home: "Back to Home",

        /* 404 */
        p404_title: "Page not found",
        p404_p: "The page you are looking for is not here — but your protection still is.",
        p404_btn: "Back to Home"
    },

    si: {
        /* Shared */
        skip: "ප්‍රධාන අන්තර්ගතයට යන්න",
        nav_home: "මුල් පිටුව",
        nav_learn: "ඉගෙනගන්න",
        nav_quiz: "Quiz",
        nav_faq: "FAQ",
        menu_open: "Menu විවෘත කරන්න",
        menu_close: "Menu වසන්න",
        theme_to_light: "Light theme එකට මාරු වන්න",
        theme_to_dark: "Dark theme එකට මාරු වන්න",
        lang_aria: "භාෂාව වෙනස් කරන්න",
        logo_alt: "ISACA Student Group — ICBT Campus ලාංඡනය",

        /* Ticker */
        t1_label: "SCAM අනතුරු ඇඟවීම:",
        t1_text: "Phishing messages බොහෝවිට ඔබේ විශ්වවිද්‍යාලය, bank එක හෝ job recruiter කෙනෙක් ලෙස පෙනී සිටියි. Click කිරීමට පෙර verify කරන්න.",
        t2_label: "සයිබර් සනීපාරක්ෂාව:",
        t2_text: "Multi-Factor Authentication (MFA) සක්‍රීය කරන්න — එය account takeover ප්‍රහාරවලින් 99%කට වඩා නවත්වන්න පුළුවන්.",
        t3_label: "යාවත්කාලීන වන්න:",
        t3_text: "Browser සහ app updates security holes නිවැරදි කරයි. අදම automatic updates සක්‍රීය කරන්න.",

        /* Hero */
        hero_badge: "ISACA Student Group • ICBT Campus",
        hero_title: "සයිබර් දැනුවත්භාවය මධ්‍යස්ථානය",
        hero_stay: "සැමවිටම", hero_alert: "සුපරීක්ෂාකාරී වන්න.", hero_safe: "ආරක්ෂිතව සිටින්න.", hero_secure: "සුරක්ෂිතව සිටින්න.",
        hero_desc: "Scams හඳුනාගන්නේ කෙසේද, ප්‍රබල මුරපද සාදන්නේ කෙසේද, පෞද්ගලික දත්ත ආරක්ෂා කරගන්නේ කෙසේද ඉගෙනගන්න — සරල සිංහල, දෙමළ සහ ඉංග්‍රීසියෙන්. සෑම ශිෂ්‍යයෙකුටම නොමිලේ.",
        hero_cta1: "ඉගෙනගන්න පටන් ගන්න",
        hero_cta2: "Quiz එක කරන්න",
        hero_hint: "Globe එක ඇදලා බලන්න",

        /* Stats */
        s1_l: "ප්‍රධාන මාතෘකා",
        s2_l: "FAQ පිළිතුරු",
        s3_l: "Quiz ප්‍රශ්න",
        s4_l: "භාෂා",

        /* Topics */
        topics_title: "අද මොන මාතෘකාව ඉගෙනගන්නද?",
        topics_sub: "මාතෘකාවක් තෝරලා ආරක්ෂිතව සිටින හැටි ඉගෙනගන්න — ක්ෂණිකව හඳුනාගත හැකි සැබෑ උදාහරණ සමග.",
        topics_cta: "තව දැනගන්න",

        /* Search */
        search_label: "සයිබර් ආරක්ෂාව සොයන්න",
        search_placeholder: "ප්‍රශ්නයක් අහන්න... උදා: 'phishing කියන්නේ මොකක්ද' හෝ 'MFA'",
        search_btn: "සොයන්න",
        search_no_result: "සඳහා නිශ්චිත ප්‍රතිඵලයක් හමු නොවීය",
        search_try: "මෙම ජනප්‍රිය මාතෘකා වලින් එකක් උත්සාහ කරන්න:",
        search_clear: "මකන්න",

        /* Quiz teaser */
        teaser_tag: "Interactive",
        teaser_title: "මිනිත්තු 3කින් ඔබ විභාග කරගන්න",
        teaser_p: "Scam message එකක් හඳුනාගන්න පුළුවන්ද? කෙටි quiz එක කරලා බලන්න — sign up වෙන්න ඕන නැහැ.",
        teaser_cta: "Quiz එක පටන් ගන්න",

        /* CTA band */
        cta_title: "ඔබේ scam radar එක පරීක්ෂා කරන්න සූදානම්ද?",
        cta_p: "මිනිත්තු 3ක quiz එකක් කරන්න, නැත්නම් වැදගත් ප්‍රශ්න 30 බලන්න.",
        cta_btn1: "Quiz එක කරන්න",
        cta_btn2: "FAQ බලන්න",

        /* Footer */
        foot1_h: "මෙම ව්‍යාපෘතිය ගැන",
        foot1_p: "Cyber Awareness Hub කියන්නේ ICBT Campus එකේ ISACA Student Group විසින් සැකසූ අධ්‍යාපනික ව්‍යාපෘතියකි. අපේ අරමුණ: සෑම ශිෂ්‍යයෙකුටම scams හඳුනාගෙන online ආරක්ෂිතව සිටින හැටි ඉගැන්වීම — ඉංග්‍රීසි, සිංහල සහ දෙමළෙන්.",
        foot2_h: "පිටු බ්‍රවුස් කරන්න",
        foot3_h: "අප සමග සම්බන්ධ වන්න",
        foot3_p: "Events, workshops සහ awareness campaigns සඳහා අපගේ community එක follow කරන්න.",
        foot_bottom: "ISACA Student Group — ICBT Campus. අධ්‍යාපනය සඳහා, ලාභය සඳහා නොවේ. Click කිරීමට පෙර සිතන්න.",
        foot_note: "මෙම අඩවිය අධ්‍යාපනික දැනුවත්කිරීමක් පමණකි; ඔබේ ආයතනයේ නිල ආරක්ෂක මඟපෙන්වීම ප්‍රතිස්ථාපනය කරන්නේ නැත.",
        fb_aria: "Facebook එකේ ISG ICBT",
        ig_aria: "Instagram එකේ ISG ICBT",
        li_aria: "LinkedIn එකේ ISACA",

        /* Learn page */
        learn_title: "තර්ජන දැනුම් සංග්‍රහය",
        learn_sub: "Scammers ලා බහුලව පාවිච්චි කරන උපක්‍රම තේරුම් ගන්න — ඒවා නවත්වන සරල පුරුදු ද ඉගෙනගන්න.",
        learn_sidebar_h: "මාතෘකා",
        signs_h: "අනතුරු ඇඟවීමේ සලකුණු",
        steps_h: "කළ යුතු දේ",
        scen_h: "ක්ෂණික පරීක්ෂාව: Scam ද, ආරක්ෂිතද?",
        scen_yes: "Scam එකක් වගේ",
        scen_no: "ආරක්ෂිතයි වගේ",
        scen_correct: "නිවැරදියි!",
        scen_wrong: "එහෙම නෙවෙයි —",
        scen_retry: "තව පරීක්ෂාවක් කරන්න",
        back_top: "උඩට යන්න",
        habits_h: "දෛනික ආරක්ෂක පුරුදු",
        habits_intro: "සාමාන්‍ය ප්‍රහාරවලින් වැඩි ගණනක් නවත්වන කුඩා පුරුදු 3ක්:",

        /* FAQ page */
        faq_title: "අත්‍යවශ්‍ය සයිබර් දැනුවත්භාව ප්‍රශ්න 30",
        faq_subtitle: "සෑම ශිෂ්‍යයෙකුම දැනගත යුතුම සයිබර් ආරක්ෂණ ප්‍රශ්නවලට ඉක්මන් පිළිතුරු.",
        f_all: "සියල්ල",
        f_passwords: "මුරපද සහ MFA",
        f_phishing: "Phishing සහ Email",
        f_social: "සමාජ ඉංජිනේරු",
        f_scams: "Scams සහ වංචා",
        f_malware: "Malware සහ Ransomware",
        f_privacy: "පෞද්ගලිකත්වය",
        f_network: "Wi-Fi සහ උපාංග",
        faq_count: "ප්‍රශ්න {t} න් {n} ක් පෙන්වමින්",
        faq_none: "ඔබේ සොයන්න හෝ පෙරහන සමග ගැලපෙන ප්‍රශ්න නැත.",

        /* Quiz page */
        quiz_title: "සයිබර් ආරක්ෂාව Quiz",
        quiz_sub: "අහඹු ප්‍රශ්න 10ක්. Timer නැහැ, පීඩනයක් නැහැ — පිළිතුරු දෙන ගමන් ඉගෙනගන්න.",
        q_pick: "මාතෘකාවක් තෝරන්න",
        q_mixed: "Mixed — ඔක්කොම මාතෘකා",
        q_start: "Quiz එක පටන් ගන්න",
        q_best: "ඔබේ හොඳම ලකුණ",
        q_progress: "{t} න් ප්‍රශ්නය {n}",
        q_correct: "නිවැරදියි!",
        q_wrong: "එහෙම නෙවෙයි.",
        q_why: "හේතුව",
        q_next: "ඊළඟ ප්‍රශ්නය",
        q_finish: "ලකුණ බලන්න",
        q_result_title: "Quiz එක අවසන්!",
        q_score: "ඔබ {t} න් {c} ක් නිවැරදිව පිළිතුරු දුන්නා.",
        q_msg4: "විශිෂ්ටයි — ඔබේ scam radar එක ශක්තිමත්!",
        q_msg3: "හොඳ වැඩක්! මඟහැරුණු ඒවා review කරලා තව තියුණු වන්න.",
        q_msg2: "හොඳ ආරම්භයක් — Threat Library එක ඔබට උදව් වේවි.",
        q_msg1: "හැම expert කෙනෙක්ම මෙතනින් පටන් ගත්තා. ආයේ උත්සාහ කරන්න — කලින් මාතෘකාවක් කියවීම උදව් වේවි.",
        q_review: "ඔබේ පිළිතුරු review කරන්න",
        q_retry: "ආයෙත් කරන්න",
        q_change: "මාතෘකාව මාරු කරන්න",
        q_your: "ඔබේ පිළිතුර:",
        q_right: "නිවැරදි පිළිතුර:",
        q_home: "මුල් පිටුවට",

        /* 404 */
        p404_title: "පිටුව හමු නොවීය",
        p404_p: "ඔබ සොයන පිටුව මෙහි නැත — නමුත් ඔබේ ආරක්ෂාව තවම ක්‍රියාත්මකයි.",
        p404_btn: "මුල් පිටුවට යන්න"
    },

    ta: {
        /* Shared */
        skip: "முதன்மை உள்ளடக்கத்திற்குச் செல்லவும்",
        nav_home: "முகப்பு",
        nav_learn: "கற்றுக்கொள்ள",
        nav_quiz: "Quiz",
        nav_faq: "FAQ",
        menu_open: "Menu திறக்க",
        menu_close: "Menu மூடவும்",
        theme_to_light: "Light theme மாறவும்",
        theme_to_dark: "Dark theme மாறவும்",
        lang_aria: "மொழியை மாற்றவும்",
        logo_alt: "ISACA Student Group — ICBT Campus சின்னம்",

        /* Ticker */
        t1_label: "SCAM எச்சரிக்கை:",
        t1_text: "ஃபிஷிங் செய்திகள் பெரும்பாலும் உங்கள் பல்கலைக்கழகம், வங்கி அல்லது வேலை அரங்கேற்பாளராக நடிக்கின்றன. கிளிக் செய்வதற்கு முன் சரிபார்க்கவும்.",
        t2_label: "சைபர் சுகாதாரம்:",
        t2_text: "பல காரணி அங்கீகாரத்தை (MFA) இயக்குங்கள் — இது 99% க்கும் மேற்பட்ட கணக்கு கைப்பற்றும் தாக்குதல்களைத் தடுக்கும்.",
        t3_label: "புதுப்பியுங்கள்:",
        t3_text: "உலாவி மற்றும் app புதுப்பிப்புகள் பாதுகாப்பு ஓட்டைகளை சரிசெய்கின்றன. இன்றே தானியங்கி புதுப்பிப்புகளை இயக்கவும்.",

        /* Hero */
        hero_badge: "ISACA Student Group • ICBT Campus",
        hero_title: "சைபர் விழிப்புணர்வு மையம்",
        hero_stay: "எப்போதும்", hero_alert: "எச்சரிக்கையாக இருங்கள்.", hero_safe: "பாதுகாப்பாக இருங்கள்.", hero_secure: "பாதுகாப்புடன் இருங்கள்.",
        hero_desc: "மோசடிகளை கண்டறியவும், வலுவான கடவுச்சொற்களை உருவாக்கவும், உங்கள் தனிப்பட்ட தரவைப் பாதுகாக்கவும் கற்றுக்கொள்ளுங்கள் — எளிய தமிழ், சிங்களம் மற்றும் ஆங்கிலத்தில். ஒவ்வொரு மாணவருக்கும் இலவசம்.",
        hero_cta1: "கற்றுக்கொள்ள தொடங்கு",
        hero_cta2: "Quiz எடுங்கள்",
        hero_hint: "கோளத்தை இழுத்து ஆராயுங்கள்",

        /* Stats */
        s1_l: "முக்கிய தலைப்புகள்",
        s2_l: "FAQ பதில்கள்",
        s3_l: "Quiz கேள்விகள்",
        s4_l: "மொழிகள்",

        /* Topics */
        topics_title: "இன்று என்ன கற்க விரும்புகிறீர்கள்?",
        topics_sub: "ஒரு தலைப்பைத் தேர்ந்து பாதுகாப்பாக இருக்கக் கற்றுக்கொள்ளுங்கள் — உடனடியாக அடையாளம் காணக்கூடிய உண்மையான எடுத்துக்காட்டுகளுடன்.",
        topics_cta: "மேலும் அறிக",

        /* Search */
        search_label: "சைபர் பாதுகாப்பு தேடல்",
        search_placeholder: "ஒரு கேள்வியைக் கேளுங்கள்... எ.கா 'ஃபிஷிங் என்றால் என்ன' அல்லது 'MFA'",
        search_btn: "தேடு",
        search_no_result: "க்கு சரியான பொருத்தம் எதுவும் கிடைக்கவில்லை",
        search_try: "இந்த பிரபலமான தலைப்புகளில் ஒன்றை முயற்சிக்கவும்:",
        search_clear: "அழி",

        /* Quiz teaser */
        teaser_tag: "Interactive",
        teaser_title: "நிமிடங்களில் உங்களை சோதியுங்கள்",
        teaser_p: "மோசடி செய்தியை கண்டறிய முடியுமா? சிறிய quiz எடுத்து பாருங்கள் — sign up தேவையில்லை.",
        teaser_cta: "Quiz தொடங்கு",

        /* CTA band */
        cta_title: "உங்கள் scam radar ஐ சோதிக்க தயாரா?",
        cta_p: "நிமிடங்களில் quiz எடுங்கள், அல்லது 30 முக்கிய கேள்விகளையும் பாருங்கள்.",
        cta_btn1: "Quiz எடுங்கள்",
        cta_btn2: "FAQ பார்க்க",

        /* Footer */
        foot1_h: "இந்த திட்டத்தைப் பற்றி",
        foot1_p: "Cyber Awareness Hub என்பது ICBT Campus-இன் ISACA Student Group உருவாக்கிய கல்வி திட்டம். நோக்கம்: ஒவ்வொரு மாணவரும் மோசடிகளை கண்டறிந்து ஆன்லைனில் பாதுகாப்பாக இருக்க கற்றுக்கொடுப்பது — ஆங்கிலம், சிங்களம் மற்றும் தமிழில்.",
        foot2_h: "பக்கங்களை பார்க்க",
        foot3_h: "எங்களுடன் இணையவும்",
        foot3_p: "நிகழ்வுகள், workshop-கள் மற்றும் விழிப்புணர்வு பிரச்சாரங்களுக்கு எங்கள் community-ஐ பின்தொடரவும்.",
        foot_bottom: "ISACA Student Group — ICBT Campus. கல்விக்காக, லாபத்திற்கு அல்ல. கிளிக் செய்வதற்கு முன் சிந்தியுங்கள்.",
        foot_note: "இந்த தளம் கல்வி விழிப்புணர்வுக்காக மட்டுமே; உங்கள் நிறுவனத்தின் அதிகாரப்பூர்வ பாதுகாப்பு வழிகாட்டலை மாற்றாது.",
        fb_aria: "Facebook-இல் ISG ICBT",
        ig_aria: "Instagram-இல் ISG ICBT",
        li_aria: "LinkedIn-இல் ISACA",

        /* Learn page */
        learn_title: "அச்சுறுத்தல் நூலகம்",
        learn_sub: "மோசடியாளர்கள் அதிகம் பயன்படுத்தும் தந்திரங்களை புரிந்துகொள்ளுங்கள் — அவற்றை தடுக்கும் எளிய பழக்கங்களையும் கற்றுக்கொள்ளுங்கள்.",
        learn_sidebar_h: "தலைப்புகள்",
        signs_h: "எச்சரிக்கை அறிகுறிகள்",
        steps_h: "என்ன செய்ய வேண்டும்",
        scen_h: "விரைவு சோதனை: Scam-ஆ, பாதுகாப்பானதா?",
        scen_yes: "Scam போல இருக்கிறது",
        scen_no: "பாதுகாப்பாக இருக்கிறது",
        scen_correct: "சரியானது!",
        scen_wrong: "அப்படி இல்லை —",
        scen_retry: "மற்றொரு சோதனை முயற்சிக்கவும்",
        back_top: "மேலே செல்ல",
        habits_h: "தினசரி பாதுகாப்பு பழக்கங்கள்",
        habits_intro: "சாதாரண தாக்குதல்களில் பெரும்பாலானவற்றை தடுக்கும் 3 சிறிய பழக்கங்கள்:",

        /* FAQ page */
        faq_title: "30 அத்தியாவசிய சைபர் விழிப்புணர்வு கேள்விகள்",
        faq_subtitle: "ஒவ்வொரு மாணவரும் அறிந்திருக்க வேண்டிய முக்கிய சைபர் பாதுகாப்பு கேள்விகளுக்கான விரைவான பதில்கள்.",
        f_all: "அனைத்தும்",
        f_passwords: "கடவுச்சொல் & MFA",
        f_phishing: "ஃபிஷிங் & மின்னஞ்சல்",
        f_social: "சமூக பொறியியல்",
        f_scams: "மோசடி & வஞ்சம்",
        f_malware: "Malware & Ransomware",
        f_privacy: "தனியுரிமை",
        f_network: "Wi-Fi & சாதனங்கள்",
        faq_count: "{t} கேள்விகளில் {n} காட்டப்படுகிறது",
        faq_none: "உங்கள் தேடல் அல்லது filter-உடன் பொருந்தும் கேள்விகள் இல்லை.",

        /* Quiz page */
        quiz_title: "சைபர் பாதுகாப்பு Quiz",
        quiz_sub: "சீரற்ற 10 கேள்விகள். Timer இல்லை, அழுத்தம் இல்லை — பதிலளிக்கும் போது கற்றுக்கொள்ளுங்கள்.",
        q_pick: "ஒரு தலைப்பை தேர்வு செய்யவும்",
        q_mixed: "Mixed — அனைத்து தலைப்புகள்",
        q_start: "Quiz தொடங்கவும்",
        q_best: "உங்கள் சிறந்த மதிப்பெண்",
        q_progress: "{t} இல் கேள்வி {n}",
        q_correct: "சரியானது!",
        q_wrong: "அப்படி இல்லை.",
        q_why: "ஏன்",
        q_next: "அடுத்த கேள்வி",
        q_finish: "மதிப்பெண் பார்க்க",
        q_result_title: "Quiz முடிந்தது!",
        q_score: "நீங்கள் {t} இல் {c} சரியாக பதிலளித்தீர்கள்.",
        q_msg4: "சிறப்பு — உங்கள் scam radar வலுவாக உள்ளது!",
        q_msg3: "நல்ல வேலை! தவறியவற்றை மீள்பார்த்து மேலும் கூர்மையாகுங்கள்.",
        q_msg2: "நல்ல தொடக்கம் — Threat Library உதவும்.",
        q_msg1: "ஒவ்வொரு expert-உம் இங்கிருந்து தான் தொடங்கினார். மீண்டும் முயற்சிக்கவும் — முதலில் ஒரு தலைப்பை படிப்பது உதவும்.",
        q_review: "உங்கள் பதில்களை மீள்பார்க்கவும்",
        q_retry: "மீண்டும் முயற்சி",
        q_change: "தலைப்பை மாற்றவும்",
        q_your: "உங்கள் பதில்:",
        q_right: "சரியான பதில்:",
        q_home: "முகப்புக்கு",

        /* 404 */
        p404_title: "பக்கம் கிடைக்கவில்லை",
        p404_p: "நீங்கள் தேடும் பக்கம் இங்கே இல்லை — ஆனால் உங்கள் பாதுகாப்பு இன்னும் இருக்கிறது.",
        p404_btn: "முகப்புக்கு"
    }
};
