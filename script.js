/* ============================================================
   LANGUAGE SYSTEM (English / Sinhala / Tamil)
   ============================================================ */
const siteTranslations = {
    en: {
        // Ticker
        t1_label: "CRITICAL ALERT:",
        t1_text: "Active phishing campaign targeting local university student portals detected.",
        t2_label: "CYBER HYGIENE:",
        t2_text: "Multi-Factor Authentication (MFA) reduces account takeover risk by 99%. Enable it now.",
        t3_label: "PATCH UPDATE:",
        t3_text: "Zero-day exploit reported in chromium browsers. Verify your version is up-to-date.",

        hero_title: "Cyber Awareness Hub",
        hero_stay: "Stay", hero_alert: "Alert.", hero_safe: "Safe.", hero_secure: "Secure.",
        hero_desc: "Develop advanced zero-trust detection strategies and strengthen your professional posture. Your awareness remains the absolute final firewall against engineered digital vectors.",
        search_placeholder: "Ask a question... e.g. 'what is phishing' or 'MFA'",
        search_btn: "Search",
        search_no_result: "No exact match found for",
        search_try: "Try one of these popular topics:",
        faq_title: "30 Essential Cyber Awareness Questions",
        faq_subtitle: "Quick answers to the most important cyber security questions every student should know.",
        previous: "Previous",
        next: "Next",

        tag_strategic: "Strategic Vector",
        card1_title: "The Digital Imperative",
        card1_p1: "Modern cyber threats evolve beyond traditional firewalls. Dynamic awareness stands as the initial line of defense to shield your corporate identity, intellectual property, and financial assets.",
        card1_p2: "With artificial intelligence amplifying malicious social engineering, evaluating and verifying unexpected communication is a mandatory tech skill.",

        tag_simulation: "Simulation",
        quiz_title: "Instant Threat Assessment",
        quiz_question: "An external address contacts you with an urgent notification containing an attachment titled \"Semester_Exam_Leak.pdf.exe\". What is your immediate triage response?",
        quiz_btn: "Execute Analysis",
        quiz_result: "Critical threat identified! The trailing <code>.exe</code> suffix marks this file as an executable binary payload, not a standard document. Executing this would compromise the system endpoint. Correct action: Report vector to Security and delete immediately.",

        tag_hygiene: "Operational Hygiene",
        checklist_title: "Standard Defensive Habits",
        check1_h: "MFA Identity Verification", check1_p: "Enforce cryptographically secure mobile authenticator tokens over vulnerable SMS verification.",
        check2_h: "Patch Lifecycle Management", check2_p: "Enable automatic vendor updates to close exploitable windows against zero-day vulnerabilities.",
        check3_h: "Public Network Encryption", check3_p: "Mandate a secure, encrypted corporate VPN gateway prior to parsing sensitive assets on untrusted Wi-Fi.",

        tips_title: "Critical Threat Mitigations & Scenarios",

        tip1_h: "Advanced Phishing Isolation",
        tip1_quote: "\"Ignore suspicious emails, messages, or links. Delete them. Don't engage.\"",
        tip1_strong: "Defensive Strategies:",
        tip1_li1: "Interacting with 'Unsubscribe' hooks embedded inside targeted phishing loops validates delivery vectors directly to attackers.",
        tip1_li2: "Perform cryptographic header verification and SPF/DKIM validation if corporate origin is ambiguous.",
        tip1_li3: "Route threat indicators to security operations centers using platform reporting plugins immediately.",

        tip2_h: "Enforcing PII Integrity Boundaries",
        tip2_quote: "\"Never share any personal information or bank details for job offers you have not applied for.\"",
        tip2_strong: "Identity Protection Blueprint:",
        tip2_li1: "Restrain the upload of national identity metrics (NIC, Passports, or transcripts) into external, unverified form fields.",
        tip2_li2: "Legitimate administrators and institutions maintain standard communication channels; they never solicit high-privilege OTPs over arbitrary calls.",
        tip2_li3: "Minimize your open intelligence profile by filtering personal metadata exposures across secondary social footprints.",

        tip3_h: "Neutralizing Typo-Squatting Vectors",
        tip3_quote: "\"Fake job offers often have spelling errors and grammatical mistakes. Stay alert!\"",
        tip3_strong: "Visual Validation Metrics:",
        tip3_li1: "Inspect address syntax deeply for lookalike indicators (such as substituting characters or extensions like `.net`/`.xyz` for corporate domains).",
        tip3_li2: "Audit full payload extensions carefully to detect double-extension masquerades like `invoice.pdf.exe`.",
        tip3_li3: "High-velocity threat syntax demanding instantaneous operational responses usually indicates social engineering.",

        tip4_h: "Detecting Financial Advance-Fee Scams",
        tip4_quote: "\"Legitimate companies never ask for money. If it sounds too good to be true, it probably is.\"",
        tip4_strong: "Financial Security Safeguards:",
        tip4_li1: "Legitimate talent onboarding systems do not request onboarding deposits, software buy-backs, or security compliance tracking fees.",
        tip4_li2: "Exercise strong skepticism toward task-automation workflows offering heavy returns for small manual actions.",
        tip4_li3: "Query official corporate business registers independently before transmitting capital to any third-party gateway.",

        tip5_h: "Assessing Outbound Domain Authority",
        tip5_quote: "\"Genuine offers are sent from company-registered email addresses. Always verify before you trust.\"",
        tip5_strong: "Enterprise Validation Protocol:",
        tip5_li1: "Established organizations do not conduct formal B2C or B2B outreach through consumer spaces like `@gmail.com` or `@yahoo.com`.",
        tip5_li2: "Audit the outbound recruiter's official professional history via authenticated enterprise spaces like LinkedIn.",
        tip5_li3: "Confirm communication validity through an out-of-band contact channel established directly from the target company's primary corporate landing space.",

        foot1_h: "Mission Parameters",
        foot1_p: "Digital security is an unyielding, collective effort. We aim to elevate digital security across student ecosystems through early threat detection and proactive learning framework updates.",
        foot2_h: "Sponsoring Entity", foot2_p: "Empowering Minds. Fortifying Digital Resilience.",
        foot3_h: "Digital Touchpoints", foot3_p: "Connect with our engineering community for technical meetups, updates, and upcoming structural hackathons.",
        foot_bottom: "Validate Intent. Think Before You Click. Engineered Safely by ICBT Student Group. © 2026"
    },

    si: {
        // Ticker
        t1_label: "විශේෂ අනතුරු ඇඟවීම:",
        t1_text: "ප්‍රාදේශීය විශ්වවිද්‍යාල ශිෂ්‍ය portals target කරගත් phishing campaign එකක් active ව හඳුනාගෙන ඇත.",
        t2_label: "සයිබර් සනීපාරක්ෂාව:",
        t2_text: "Multi-Factor Authentication (MFA) මගින් account takeover risk එක 99%කින් අඩු කරයි. දැන්ම enable කරන්න.",
        t3_label: "PATCH UPDATE:",
        t3_text: "Chromium browsers වල zero-day exploit එකක් වාර්තා වී ඇත. ඔබේ version එක updated දැයි verify කරන්න.",

        hero_title: "සයිබර් දැනුවත්භාවය මධ්‍යස්ථානය",
        hero_stay: "සැමවිටම", hero_alert: "සුපරීක්ෂාකාරී වෙන්න.", hero_safe: "ආරක්ෂිතව සිටින්න.", hero_secure: "සුරක්ෂිතව සිටින්න.",
        hero_desc: "දියුණු zero-trust හඳුනාගැනීමේ උපාය මාර්ග වර්ධනය කර ඔබේ වෘත්තීය ආරක්ෂාව ශක්තිමත් කරගන්න. ඔබේ දැනුවත්භාවයයි ඩිජිටල් තර්ජනවලට එරෙහි අවසාන ආරක්ෂක බැම්ම වන්නේ.",
        search_placeholder: "ප්‍රශ්නයක් අහන්න... උදා: 'phishing කියන්නේ මොකක්ද' හෝ 'MFA'",
        search_btn: "සොයන්න",
        search_no_result: "සඳහා නිශ්චිත ප්‍රතිඵලයක් හමු නොවීය",
        search_try: "මෙම ජනප්‍රිය මාතෘකා වලින් එකක් උත්සාහ කරන්න:",
        faq_title: "අත්‍යවශ්‍ය සයිබර් දැනුවත්භාවී ප්‍රශ්න 30ක්",
        faq_subtitle: "සෑම ශිෂ්‍යයෙකුම දැනගත යුතු වැදගත්ම සයිබර් ආරක්ෂණ ප්‍රශ්නවලට ඉක්මන් පිළිතුරු.",
        previous: "පෙර",
        next: "ඊළඟ",

        tag_strategic: "උපාය මාර්ග දිශානතිය",
        card1_title: "ඩිජිටල් අනිවාර්යතාවය",
        card1_p1: "නවීන සයිබර් තර්ජන සාම්ප්‍රදායික firewalls ඉක්මවා පවතී. ඔබේ corporate identity, intellectual property, සහ financial assets ආරක්ෂා කිරීමට dynamic awareness ප්‍රථම ආරක්ෂක මාර්ගය වේ.",
        card1_p2: "AI මගින් malicious social engineering වර්ධනය කරමින් තිබෙන නිසා, අනපේක්ෂිත communications verify කිරීම අනිවාර්ය තාක්ෂණික දක්ෂතාවයකි.",

        tag_simulation: "Simulation",
        quiz_title: "ක්ෂණික තර්ජන තක්සේරුව",
        quiz_question: "\"Semester_Exam_Leak.pdf.exe\" නමින් attachment එකක් සහිත urgent notification එකක් external address එකකින් එයි. ඔබේ ක්ෂණික response එක කුමක්ද?",
        quiz_btn: "විශ්ලේෂණය ක්‍රියාත්මක කරන්න",
        quiz_result: "විවේචනාත්මක තර්ජනයක් හඳුනාගෙන ඇත! <code>.exe</code> suffix එක මෙම ගොනුව බව පෙන්නුම් කරයි, එය සම්මත ලේඛනයක් නොව executable binary payload එකකි. මෙය ක්‍රියාත්මක කිරීමෙන් system endpoint එක අවදානමට ලක්වේ. නිවැරදි ක්‍රියාව: Security වෙත වාර්තා කර වහාම මකා දමන්න.",

        tag_hygiene: "මෙහෙයුම් සනීපාරක්ෂාව",
        checklist_title: "සම්මත ආරක්ෂක පුරුදු",
        check1_h: "MFA අනන්‍යතා සත්‍යාපනය", check1_p: "අවදානම් සහිත SMS verification වෙනුවට cryptographically secure mobile authenticator tokens අනිවාර්ය කරන්න.",
        check2_h: "Patch Lifecycle කළමනාකරණය", check2_p: "zero-day vulnerabilities වලට එරෙහිව exploitable windows වසා දැමීමට automatic vendor updates enable කරන්න.",
        check3_h: "Public Network Encryption", check3_p: "අවිශ්වාසී Wi-Fi වල sensitive assets access කිරීමට කලින් encrypted corporate VPN gateway එකක් අනිවාර්ය කරන්න.",

        tips_title: "වැදගත් තර්ජන අවම කිරීම් සහ අවස්ථා",

        tip1_h: "දියුණු Phishing හුදකලාව",
        tip1_quote: "\"සැක සහිත emails, messages, හෝ links නොසලකා හරින්න. delete කරන්න. engage වෙන්න එපා.\"",
        tip1_strong: "ආරක්ෂක උපාය මාර්ග:",
        tip1_li1: "Targeted phishing loops තුළ embedded 'Unsubscribe' hooks සමග interact වීම attackers ලාට delivery vectors validate කරයි.",
        tip1_li2: "Corporate origin එක ambiguous නම් cryptographic header verification සහ SPF/DKIM validation සිදු කරන්න.",
        tip1_li3: "Platform reporting plugins භාවිතා කර threat indicators වහාම security operations centers වෙත යොමු කරන්න.",

        tip2_h: "PII අඛණ්ඩතා සීමා බලාත්මක කිරීම",
        tip2_quote: "\"ඔබ apply නොකළ job offers සඳහා personal information හෝ bank details කවදාවත් share කරන්න එපා.\"",
        tip2_strong: "අනන්‍යතා ආරක්ෂණ සැලැස්ම:",
        tip2_li1: "National identity metrics (NIC, Passports, transcripts) unverified external form fields වලට upload කිරීම වළක්වන්න.",
        tip2_li2: "නීත්‍යානුකූල administrators සහ institutions standard communication channels පවත්වයි; ඔවුන් කවදාවත් OTPs arbitrary calls හරහා ඉල්ලන්නේ නෑ.",
        tip2_li3: "Secondary social footprints හරහා personal metadata exposures filter කර ඔබේ open intelligence profile අවම කරන්න.",

        tip3_h: "Typo-Squatting Vectors උදාසීන කිරීම",
        tip3_quote: "\"Fake job offers බොහෝවිට spelling errors සහ grammatical mistakes සහිතයි. සුපරීක්ෂාකාරී වෙන්න!\"",
        tip3_strong: "දෘශ්‍ය සත්‍යාපන මිනුම්:",
        tip3_li1: "Lookalike indicators සඳහා address syntax ගැඹුරින් පරීක්ෂා කරන්න (corporate domains සඳහා `.net`/`.xyz` වගේ characters/extensions substitute කිරීම වගේ).",
        tip3_li2: "`invoice.pdf.exe` වගේ double-extension masquerades හඳුනාගැනීමට payload extensions careful ව audit කරන්න.",
        tip3_li3: "instantaneous response ඉල්ලන high-velocity threat syntax සාමාන්‍යයෙන් social engineering පෙන්නුම් කරයි.",

        tip4_h: "මූල්‍ය Advance-Fee Scams හඳුනාගැනීම",
        tip4_quote: "\"නීත්‍යානුකූල companies කවදාවත් money ඉල්ලන්නේ නෑ. එය too good to be true නම්, එය එහෙම නොවීමට ඉඩ ඇත.\"",
        tip4_strong: "මූල්‍ය ආරක්ෂණ පියවර:",
        tip4_li1: "නීත්‍යානුකූල talent onboarding systems onboarding deposits, software buy-backs, හෝ compliance tracking fees ඉල්ලන්නේ නෑ.",
        tip4_li2: "කුඩා manual actions සඳහා heavy returns offer කරන task-automation workflows වලට ශක්තිමත් skepticism තියාගන්න.",
        tip4_li3: "Capital කිසිම third-party gateway එකකට transmit කිරීමට කලින් official corporate business registers independently query කරන්න.",

        tip5_h: "Outbound Domain Authority තක්සේරුව",
        tip5_quote: "\"සැබෑ offers company-registered email addresses වලින් එවනු ලැබේ. විශ්වාස කිරීමට කලින් හැමවිටම verify කරන්න.\"",
        tip5_strong: "Enterprise සත්‍යාපන ප්‍රොටෝකෝලය:",
        tip5_li1: "ස්ථාපිත organizations `@gmail.com` හෝ `@yahoo.com` වගේ consumer spaces හරහා formal B2C/B2B outreach කරන්නේ නෑ.",
        tip5_li2: "LinkedIn වගේ authenticated enterprise spaces හරහා recruiter's official professional history audit කරන්න.",
        tip5_li3: "Target company's primary corporate landing space එකෙන්ම established out-of-band channel එකකින් communication validity confirm කරන්න.",

        foot1_h: "මෙහෙයුම් පරාමිතීන්",
        foot1_p: "Digital security කියන්නේ නොනවතින, සාමූහික උත්සාහයකි. Early threat detection සහ proactive learning framework updates හරහා student ecosystems පුරාම digital security elevate කිරීම අපගේ අරමුණයි.",
        foot2_h: "අනුග්‍රාහක ආයතනය", foot2_p: "මනස් සවිබල ගැන්වීම. ඩිජිටල් ප්‍රත්‍යාස්ථතාව ශක්තිමත් කිරීම.",
        foot3_h: "ඩිජිටල් සම්බන්ධතා", foot3_p: "Technical meetups, updates, සහ ඉදිරි structural hackathons සඳහා අපගේ engineering community සමග සම්බන්ධ වන්න.",
        foot_bottom: "අභිප්‍රාය සත්‍යාපනය කරන්න. Click කිරීමට කලින් සිතන්න. ICBT Student Group විසින් ආරක්ෂිතව නිර්මාණය කරන ලදී. © 2026"
    },

    ta: {
        // Ticker
        t1_label: "முக்கிய எச்சரிக்கை:",
        t1_text: "உள்ளூர் பல்கலைக்கழக மாணவர் போர்ட்டல்களை இலக்காகக் கொண்ட ஃபிஷிங் பிரச்சாரம் கண்டறியப்பட்டது.",
        t2_label: "சைபர் சுகாதாரம்:",
        t2_text: "பல காரணி அங்கீகாரம் (MFA) கணக்கு கடத்தல் அபாயத்தை 99% குறைக்கிறது. இப்போதே இயக்குங்கள்.",
        t3_label: "PATCH புதுப்பிப்பு:",
        t3_text: "Chromium உலாவிகளில் zero-day exploit அறிக்கையிடப்பட்டது. உங்கள் பதிப்பு புதுப்பித்ததா எனச் சரிபார்க்கவும்.",

        hero_title: "சைபர் விழிப்புணர்வு மையம்",
        hero_stay: "எப்போதும்", hero_alert: "எச்சரிக்கையாக இருங்கள்.", hero_safe: "பாதுகாப்பாக இருங்கள்.", hero_secure: "பாதுகாப்புடன் இருங்கள்.",
        hero_desc: "மேம்பட்ட பூஜ்ஜிய-நம்பிக்கை கண்டறியும் உத்திகளை உருவாக்கி உங்கள் தொழில்முறை பாதுகாப்பை வலுப்படுத்துங்கள். உங்கள் விழிப்புணர்வே டிஜிட்டல் அச்சுறுத்தல்களுக்கு எதிரான இறுதி பாதுகாப்பு சுவராகும்.",
        search_placeholder: "ஒரு கேள்வியைக் கேளுங்கள்... எ.கா 'ஃபிஷிங் என்றால் என்ன' அல்லது 'MFA'",
        search_btn: "தேடு",
        search_no_result: "க்கு சரியான பொருத்தம் எதுவும் கிடைக்கவில்லை",
        search_try: "இந்த பிரபலமான தலைப்புகளில் ஒன்றை முயற்சிக்கவும்:",
        faq_title: "30 அத்தியாவசிய சைபர் விழிப்புணர்வு கேள்விகள்",
        faq_subtitle: "ஒவ்வொரு மாணவரும் அறிந்திருக்க வேண்டிய முக்கிய சைபர் பாதுகாப்பு கேள்விகளுக்கான விரைவான பதில்கள்.",
        previous: "முந்தைய",
        next: "அடுத்த",

        tag_strategic: "மூலோபாய திசை",
        card1_title: "டிஜிட்டல் கட்டாயம்",
        card1_p1: "நவீன சைபர் அச்சுறுத்தல்கள் பாரம்பரிய firewalls-ஐ தாண்டி உருவாகின்றன. உங்கள் நிறுவன அடையாளம், அறிவுசார் சொத்து, நிதி சொத்துக்களைப் பாதுகாக்க டைனமிக் விழிப்புணர்வு முதல் பாதுகாப்பு வரிசையாக உள்ளது.",
        card1_p2: "AI தீங்கிழைக்கும் சமூக பொறியியலை பெருக்கும் நிலையில், எதிர்பாராத தகவல்தொடர்பை சரிபார்ப்பது கட்டாய தொழில்நுட்ப திறமையாகும்.",

        tag_simulation: "உருவகப்படுத்துதல்",
        quiz_title: "உடனடி அச்சுறுத்தல் மதிப்பீடு",
        quiz_question: "\"Semester_Exam_Leak.pdf.exe\" எனப் பெயரிடப்பட்ட இணைப்புடன் அவசர அறிவிப்பு ஒரு வெளிப்புற முகவரியிலிருந்து வருகிறது. உங்கள் உடனடி பதில் என்ன?",
        quiz_btn: "பகுப்பாய்வை இயக்கு",
        quiz_result: "முக்கியமான அச்சுறுத்தல் அடையாளம் காணப்பட்டது! <code>.exe</code> suffix இந்த கோப்பு ஒரு நிலையான ஆவணம் அல்ல, executable binary payload என்பதைக் காட்டுகிறது. இதை இயக்கினால் system endpoint பாதிக்கப்படும். சரியான செயல்: பாதுகாப்பு குழுவிற்கு புகாரளித்து உடனடியாக நீக்கவும்.",

        tag_hygiene: "செயல்பாட்டு சுகாதாரம்",
        checklist_title: "நிலையான பாதுகாப்பு பழக்கங்கள்",
        check1_h: "MFA அடையாள சரிபார்ப்பு", check1_p: "பாதிக்கப்படக்கூடிய SMS சரிபார்ப்புக்கு பதிலாக பாதுகாப்பான mobile authenticator டோக்கன்களை கட்டாயப்படுத்தவும்.",
        check2_h: "Patch வாழ்க்கைச் சுழற்சி மேலாண்மை", check2_p: "zero-day பாதிப்புகளுக்கு எதிராக தானியங்கி vendor புதுப்பிப்புகளை இயக்கவும்.",
        check3_h: "பொது நெட்வொர்க் மறைகுறியாக்கம்", check3_p: "நம்பகமற்ற Wi-Fi-இல் முக்கிய தரவை அணுகும் முன் encrypted corporate VPN gateway-ஐ கட்டாயப்படுத்தவும்.",

        tips_title: "முக்கிய அச்சுறுத்தல் தணிப்புகள் மற்றும் சூழ்நிலைகள்",

        tip1_h: "மேம்பட்ட ஃபிஷிங் தனிமைப்படுத்தல்",
        tip1_quote: "\"சந்தேகத்திற்குரிய மின்னஞ்சல்கள், செய்திகள், இணைப்புகளை புறக்கணிக்கவும். நீக்கவும். ஈடுபட வேண்டாம்.\"",
        tip1_strong: "பாதுகாப்பு உத்திகள்:",
        tip1_li1: "இலக்கு வைக்கப்பட்ட ஃபிஷிங் சுழற்சிகளுக்குள் உள்ள 'சந்தா நீக்கு' இணைப்புகளுடன் தொடர்பு கொள்வது தாக்குபவர்களுக்கு நேரடியாக delivery vectors-ஐ உறுதிப்படுத்துகிறது.",
        tip1_li2: "நிறுவன மூலம் தெளிவற்றதாக இருந்தால் cryptographic header verification மற்றும் SPF/DKIM validation செய்யவும்.",
        tip1_li3: "platform reporting plugins பயன்படுத்தி அச்சுறுத்தல் குறிகாட்டிகளை உடனடியாக பாதுகாப்பு நடவடிக்கை மையங்களுக்கு அனுப்பவும்.",

        tip2_h: "PII ஒருமைப்பாடு எல்லைகளை அமல்படுத்துதல்",
        tip2_quote: "\"நீங்கள் விண்ணப்பிக்காத வேலை வாய்ப்புகளுக்கு தனிப்பட்ட தகவல் அல்லது வங்கி விவரங்களை ஒருபோதும் பகிர வேண்டாம்.\"",
        tip2_strong: "அடையாள பாதுகாப்பு திட்டம்:",
        tip2_li1: "தேசிய அடையாள அளவீடுகளை (NIC, பாஸ்போர்ட், transcripts) சரிபார்க்கப்படாத வெளிப்புற படிவங்களில் பதிவேற்றுவதைத் தவிர்க்கவும்.",
        tip2_li2: "சட்டபூர்வமான நிர்வாகிகள் மற்றும் நிறுவனங்கள் நிலையான தகவல்தொடர்பு வழிகளை பராமரிக்கின்றன; அவை ஒருபோதும் தன்னிச்சையான அழைப்புகள் மூலம் OTP-ஐ கேட்காது.",
        tip2_li3: "இரண்டாம்நிலை சமூக தடங்களில் தனிப்பட்ட மெட்டாடேட்டா வெளிப்பாடுகளை வடிகட்டி உங்கள் திறந்த நுண்ணறிவு சுயவிவரத்தை குறைக்கவும்.",

        tip3_h: "Typo-Squatting வெக்டர்களை நடுநிலையாக்குதல்",
        tip3_quote: "\"போலி வேலை வாய்ப்புகளில் பெரும்பாலும் எழுத்துப்பிழைகள் மற்றும் இலக்கண தவறுகள் இருக்கும். எச்சரிக்கையாக இருங்கள்!\"",
        tip3_strong: "காட்சி சரிபார்ப்பு அளவீடுகள்:",
        tip3_li1: "நிறுவன டொமைன்களுக்கு `.net`/`.xyz` போன்ற எழுத்துக்கள்/extensions மாற்றீடு போன்ற ஒத்த குறிகாட்டிகளுக்கு முகவரி தொடரியலை ஆழமாக ஆய்வு செய்யவும்.",
        tip3_li2: "`invoice.pdf.exe` போன்ற இரட்டை-extension மறைப்புகளை கண்டறிய முழு payload extensions-ஐ கவனமாக தணிக்கை செய்யவும்.",
        tip3_li3: "உடனடி பதில்களைக் கோரும் அதிவேக அச்சுறுத்தல் தொடரியல் பொதுவாக சமூக பொறியியலைக் குறிக்கிறது.",

        tip4_h: "நிதி முன்பணக் கட்டண மோசடிகளைக் கண்டறிதல்",
        tip4_quote: "\"சட்டபூர்வமான நிறுவனங்கள் ஒருபோதும் பணம் கேட்காது. அது நம்பமுடியாத அளவுக்கு நன்றாக இருந்தால், அது அப்படி இல்லாமல் இருக்கலாம்.\"",
        tip4_strong: "நிதி பாதுகாப்பு நடவடிக்கைகள்:",
        tip4_li1: "சட்டபூர்வமான ஆளணி சேர்க்கை அமைப்புகள் ஆன்போர்டிங் வைப்புத்தொகை, மென்பொருள் திரும்ப வாங்குதல், அல்லது இணக்கக் கண்காணிப்பு கட்டணங்களைக் கோராது.",
        tip4_li2: "சிறிய கைமுறை நடவடிக்கைகளுக்கு அதிக வருமானம் வழங்கும் பணி-தானியங்குமயமாக்கல் வேலைப்பாய்வுகளுக்கு வலுவான சந்தேகத்தை பயிற்சி செய்யவும்.",
        tip4_li3: "எந்த மூன்றாம் தரப்பு நுழைவாயிலுக்கும் மூலதனத்தை அனுப்பும் முன் அதிகாரப்பூர்வ நிறுவன வணிக பதிவேடுகளை சுயாதீனமாக விசாரிக்கவும்.",

        tip5_h: "வெளிச்செல்லும் டொமைன் அதிகாரத்தை மதிப்பீடு செய்தல்",
        tip5_quote: "\"உண்மையான சலுகைகள் நிறுவனத்தால் பதிவு செய்யப்பட்ட மின்னஞ்சல் முகவரிகளிலிருந்து அனுப்பப்படும். நம்புவதற்கு முன் எப்போதும் சரிபார்க்கவும்.\"",
        tip5_strong: "நிறுவன சரிபார்ப்பு நெறிமுறை:",
        tip5_li1: "நிறுவப்பட்ட நிறுவனங்கள் `@gmail.com` அல்லது `@yahoo.com` போன்ற நுகர்வோர் இடங்கள் மூலம் முறையான B2C/B2B தொடர்பு கொள்வதில்லை.",
        tip5_li2: "LinkedIn போன்ற அங்கீகரிக்கப்பட்ட நிறுவன இடங்கள் மூலம் ஆட்சேர்ப்பாளரின் அதிகாரப்பூர்வ தொழில்முறை வரலாற்றை தணிக்கை செய்யவும்.",
        tip5_li3: "இலக்கு நிறுவனத்தின் முதன்மை நிறுவன தளத்திலிருந்து நேரடியாக நிறுவப்பட்ட out-of-band தொடர்பு வழி மூலம் தகவல்தொடர்பு செல்லுபடியை உறுதிப்படுத்தவும்.",

        foot1_h: "பணி அளவுருக்கள்",
        foot1_p: "டிஜிட்டல் பாதுகாப்பு ஒரு விடாமுயற்சி, கூட்டு முயற்சி. ஆரம்ப அச்சுறுத்தல் கண்டறிதல் மற்றும் செயலூக்கமான கற்றல் கட்டமைப்பு புதுப்பிப்புகள் மூலம் மாணவர் சூழல்களில் டிஜிட்டல் பாதுகாப்பை உயர்த்துவதே எங்கள் நோக்கம்.",
        foot2_h: "ஆதரவு நிறுவனம்", foot2_p: "மனங்களை மேம்படுத்துதல். டிஜிட்டல் நெகிழ்திறனை வலுப்படுத்துதல்.",
        foot3_h: "டிஜிட்டல் தொடர்பு புள்ளிகள்", foot3_p: "தொழில்நுட்ப சந்திப்புகள், புதுப்பிப்புகள் மற்றும் வரவிருக்கும் hackathons-க்காக எங்கள் பொறியியல் சமூகத்துடன் இணைந்திருங்கள்.",
        foot_bottom: "நோக்கத்தை உறுதிப்படுத்தவும். கிளிக் செய்வதற்கு முன் சிந்தியுங்கள். ICBT Student Group ஆல் பாதுகாப்பாக வடிவமைக்கப்பட்டது. © 2026"
    }
};

/* ============================================================
   TICKER RENDER FUNCTION
   ============================================================ */
function renderTicker(lang) {
    const tickerContainer = document.getElementById('ticker-content');
    if (!tickerContainer) return;

    const t = siteTranslations[lang] || siteTranslations.en;

    tickerContainer.innerHTML = `
        <span><i class="fa-solid fa-circle-exclamation" style="color: var(--alert-red);"></i> <strong>${t.t1_label}</strong> ${t.t1_text}</span>
        <span><i class="fa-solid fa-shield" style="color: var(--success-green);"></i> <strong>${t.t2_label}</strong> ${t.t2_text}</span>
        <span><i class="fa-solid fa-bug" style="color: var(--accent-secondary);"></i> <strong>${t.t3_label}</strong> ${t.t3_text}</span>
    `;
}

/* ============================================================
   LANGUAGE SYSTEM
   ============================================================ */
function setLanguage(lang) {
    document.body.setAttribute('data-lang', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
    });

    // Translate all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (siteTranslations[lang][key]) el.textContent = siteTranslations[lang][key];
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (siteTranslations[lang][key]) el.placeholder = siteTranslations[lang][key];
    });

    // Render ticker
    renderTicker(lang);

    // Re-render FAQ
    renderFAQ(lang);

    // Clear search results
    const resultsDiv = document.getElementById('search-results');
    if (resultsDiv) resultsDiv.innerHTML = "";
}

/* ============================================================
   30-QUESTION FAQ DATA (English / Sinhala / Tamil)
   ============================================================ */
const faq30 = [
{en:{q:"What is the safest way to create passwords?",a:"Use long, unique passwords (12+ characters) mixing letters, numbers, and symbols, and store them in a password manager. Example: 'Br3eze-Mango!92' instead of 'password123'. Never reuse the same password across sites."},
 si:{q:"මුරපද සෑදීමට වඩාත් ආරක්ෂිත ක්‍රමය කුමක්ද?",a:"අකුරු, අංක සහ සංකේත මිශ්‍ර කරගත් අක්ෂර 12කට වඩා වැඩි දිගු, අනන්‍ය මුරපද භාවිතා කරන්න, ඒවා password manager එකක ගබඩා කරන්න. උදා: 'password123' වෙනුවට 'Br3eze-Mango!92'. එකම මුරපදය වෙබ් අඩවි කිහිපයකට භාවිතා කරන්න එපා."},
 ta:{q:"கடவுச்சொற்களை உருவாக்குவதற்கான பாதுகாப்பான வழி என்ன?",a:"எழுத்துக்கள், எண்கள், சின்னங்களை கலந்து 12+ எழுத்துக்கள் கொண்ட நீண்ட, தனித்துவமான கடவுச்சொற்களைப் பயன்படுத்தி password manager-இல் சேமிக்கவும். எ.கா: 'password123' க்கு பதிலாக 'Br3eze-Mango!92'. ஒரே கடவுச்சொல்லை பல தளங்களில் மீண்டும் பயன்படுத்த வேண்டாம்."}},

{en:{q:"What is phishing?",a:"Phishing is a scam where attackers send fraudulent emails or messages pretending to be trusted sources to steal your data. Example: A fake bank email asking you to 'verify your account' via a link. Never click — report and delete."},
 si:{q:"Phishing කියන්නේ මොකක්ද?",a:"Phishing කියන්නේ attackers ලා විශ්වාසදායක ප්‍රභවයන් ලෙස පෙනී සිට වංචනික email/messages එවා ඔබේ දත්ත සොරකම් කිරීමයි. උදා: 'ඔබේ ගිණුම verify කරන්න' කියලා link එකක් සමග එන fake bank email එකක්. click කරන්න එපා — report කරලා delete කරන්න."},
 ta:{q:"ஃபிஷிங் என்றால் என்ன?",a:"ஃபிஷிங் என்பது தாக்குபவர்கள் நம்பகமான மூலங்களாக நடித்து மோசடி மின்னஞ்சல்/செய்திகள் அனுப்பி உங்கள் தரவைத் திருடும் மோசடி. எ.கா: உங்கள் கணக்கை 'சரிபார்க்க' கோரும் போலி வங்கி மின்னஞ்சல். கிளிக் செய்ய வேண்டாம் — புகாரளித்து நீக்கவும்."}},

{en:{q:"What is spear phishing?",a:"Spear phishing is a targeted phishing attack aimed at a specific person, using personal details to seem convincing. Example: An email pretending to be your lecturer, mentioning a real assignment, asking you to open an attached file."},
 si:{q:"Spear phishing කියන්නේ මොකක්ද?",a:"Spear phishing කියන්නේ නිශ්චිත පුද්ගලයෙකු target කරගෙන, පුද්ගලික තොරතුරු භාවිතා කරමින් විශ්වාසදායක බවක් පෙන්නන targeted phishing attack එකක්. උදා: ඔබේ lecturer ලෙස පෙනී, real assignment එකක් mention කරමින් attachment එකක් open කරන්න කියන email එකක්."},
 ta:{q:"ஸ்பியர் ஃபிஷிங் என்றால் என்ன?",a:"ஸ்பியர் ஃபிஷிங் என்பது ஒரு குறிப்பிட்ட நபரை இலக்காகக் கொண்டு, தனிப்பட்ட விவரங்களைப் பயன்படுத்தி நம்பகத்தன்மையுடன் தாக்கும் இலக்கு வைக்கப்பட்ட ஃபிஷிங். எ.கா: உங்கள் விரிவுரையாளர் என நடித்து, உண்மையான பணிப்பணியைக் குறிப்பிட்டு கோப்பைத் திறக்கச் சொல்லும் மின்னஞ்சல்."}},

{en:{q:"What is MFA?",a:"MFA (Multi-Factor Authentication) requires a second proof of identity beyond your password, like a code from an app. Example: Logging into email needs both your password and a 6-digit code from Google Authenticator."},
 si:{q:"MFA කියන්නේ මොකක්ද?",a:"MFA (Multi-Factor Authentication) කියන්නේ password එකට අමතරව app එකකින් එන code එකක් වගේ identity verify කරන දෙවන ක්‍රමයක් අවශ්‍ය කිරීමයි. උදා: email එකකට login වෙන්න password එකට අමතරව Google Authenticator එකෙන් 6-digit code එකකුත් ඕන."},
 ta:{q:"MFA என்றால் என்ன?",a:"MFA (பல காரணி அங்கீகாரம்) கடவுச்சொல்லுக்கு அப்பால் ஒரு செயலியிலிருந்து வரும் குறியீடு போன்ற இரண்டாவது அடையாள சான்றைக் கோருகிறது. எ.கா: மின்னஞ்சலில் நுழைய கடவுச்சொல்லுடன் Google Authenticator-இன் 6-இலக்க குறியீடும் தேவை."}},

{en:{q:"Why should you enable MFA?",a:"MFA reduces the risk of account takeover by around 99%, even if your password is stolen. Example: If a hacker gets your password via phishing, they still can't log in without the code on your phone."},
 si:{q:"MFA enable කරන්න ඕන ඇයි?",a:"ඔබේ password එක steal වුණත් MFA මගින් account takeover risk එක ~99%කින් අඩු කරනවා. උදා: hacker කෙනෙක් phishing එකෙන් ඔබේ password එක ගත්තත්, ඔබේ phone එකේ code එක නැතුව login වෙන්න බැහැ."},
 ta:{q:"MFA-ஐ ஏன் இயக்க வேண்டும்?",a:"உங்கள் கடவுச்சொல் திருடப்பட்டாலும் MFA கணக்கு கடத்தல் அபாயத்தை ~99% குறைக்கிறது. எ.கா: ஹேக்கர் ஃபிஷிங் மூலம் உங்கள் கடவுச்சொல்லைப் பெற்றாலும், உங்கள் தொலைபேசியில் உள்ள குறியீடு இல்லாமல் நுழைய முடியாது."}},

{en:{q:"What is ransomware?",a:"Ransomware encrypts your files and demands payment to unlock them. Example: WannaCry (2017) locked hospital computers worldwide, demanding Bitcoin. Prevention: regular backups and avoiding unknown attachments."},
 si:{q:"Ransomware කියන්නේ මොකක්ද?",a:"Ransomware ඔබේ files encrypt කරලා ඒවා unlock කරන්න money demand කරනවා. උදා: WannaCry (2017) hospital computers ලෝකයේ පුරාම lock කරලා Bitcoin demand කළා. Prevention: regular backups සහ unknown attachments avoid කිරීම."},
 ta:{q:"ransomware என்றால் என்ன?",a:"Ransomware உங்கள் கோப்புகளை மறைகுறியாக்கி அவற்றைத் திறக்க பணம் கோருகிறது. எ.கா: WannaCry (2017) உலகம் முழுவதும் மருத்துவமனை கணினிகளை பூட்டி Bitcoin கோரியது. தடுப்பு: வழக்கமான backup மற்றும் தெரியாத attachment-களைத் தவிர்த்தல்."}},

{en:{q:"What is malware?",a:"Malware is any malicious software designed to damage, disrupt, or gain unauthorized access to a system — including viruses, spyware, and ransomware. Example: A free 'PDF converter' app that secretly steals your data."},
 si:{q:"Malware කියන්නේ මොකක්ද?",a:"Malware කියන්නේ system එකකට හානි කරන්න, disrupt කරන්න, හෝ unauthorized access ගන්න design කරපු ඕනම malicious software එකක් — viruses, spyware, ransomware ඇතුළත්ව. උදා: රහසේ ඔබේ දත්ත steal කරන 'free PDF converter' app එකක්."},
 ta:{q:"malware என்றால் என்ன?",a:"Malware என்பது ஒரு அமைப்புக்கு சேதம் விளைவிக்க, சீர்குலைக்க அல்லது அங்கீகரிக்கப்படாத அணுகலைப் பெற வடிவமைக்கப்பட்ட தீங்கிழைக்கும் மென்பொருள் — வைரஸ், ஸ்பைவேர், ransomware உட்பட. எ.கா: ரகசியமாக உங்கள் தரவைத் திருடும் 'இலவச PDF converter' செயலி."}},

{en:{q:"What is a firewall?",a:"A firewall monitors and filters network traffic based on security rules, blocking unauthorized access. Example: It stops an attacker from directly connecting to your computer over the internet."},
 si:{q:"Firewall කියන්නේ මොකක්ද?",a:"Firewall security rules පදනම් කරගෙන network traffic monitor සහ filter කරලා unauthorized access block කරනවා. උදා: attacker කෙනෙක්ට internet එකෙන් ඔබේ computer එකට direct connect වෙන්න බැරි කරනවා."},
 ta:{q:"firewall என்றால் என்ன?",a:"Firewall பாதுகாப்பு விதிகளின் அடிப்படையில் நெட்வொர்க் போக்குவரத்தை கண்காணித்து வடிகட்டி அங்கீகரிக்கப்படாத அணுகலைத் தடுக்கிறது. எ.கா: இணையம் வழியாக உங்கள் கணினியுடன் நேரடியாக இணைப்பதைத் தாக்குபவரைத் தடுக்கிறது."}},

{en:{q:"What is social engineering?",a:"Social engineering manipulates people psychologically to give up confidential info, rather than hacking systems directly. Example: Someone calling and pretending to be 'IT support' asking for your password."},
 si:{q:"Social engineering කියන්නේ මොකක්ද?",a:"Social engineering කියන්නේ systems direct hack කරනවා වෙනුවට, ලේඛනගත තොරතුරු ලබාගැනීමට මිනිසුන් psychologically manipulate කිරීමයි. උදා: 'IT support' කෙනෙක් ලෙස පෙනී password එක අහන කෙනෙක්."},
 ta:{q:"சமூக பொறியியல் என்றால் என்ன?",a:"சமூக பொறியியல் என்பது கணினிகளை நேரடியாக ஹேக் செய்வதற்குப் பதிலாக, ரகசிய தகவலைப் பெற மக்களை உளவியல் ரீதியாக கையாளுவது. எ.கா: 'IT ஆதரவு' என்று நடித்து கடவுச்சொல்லைக் கேட்கும் ஒருவர்."}},

{en:{q:"Should you share OTPs?",a:"No — never share your OTP with anyone, even someone claiming to be from your bank. Example: A caller says 'read me the OTP to cancel a fraud transaction' — this is always a scam; banks never ask for OTPs."},
 si:{q:"OTP share කරන්න පුළුවන්ද?",a:"නෑ — bank එකෙන් කියලා කෙනෙක් කිව්වත් ඔබේ OTP කවුරුවත් සමග share කරන්න එපා. උදා: 'fraud transaction එකක් cancel කරන්න OTP එක කියන්න' කියන caller කෙනෙක් — මේක හැමවිටම scam එකක්; banks කවදාවත් OTP ඉල්ලන්නේ නෑ."},
 ta:{q:"OTP-ஐ பகிரலாமா?",a:"இல்லை — வங்கியிலிருந்து என்று சொன்னாலும் உங்கள் OTP-ஐ யாருடனும் ஒருபோதும் பகிர வேண்டாம். எ.கா: 'மோசடி பரிவர்த்தனையை ரத்து செய்ய OTP-ஐ சொல்லுங்கள்' என்று அழைப்பவர் — இது எப்போதும் மோசடி; வங்கிகள் OTP கேட்காது."}},

{en:{q:"What is HTTPS?",a:"HTTPS encrypts data between your browser and a website, shown by a padlock icon in the address bar. Example: Always check for HTTPS before entering passwords or card details on a site."},
 si:{q:"HTTPS කියන්නේ මොකක්ද?",a:"HTTPS ඔබේ browser එකට සහ website එකට අතර data encrypt කරනවා, address bar එකේ padlock icon එකකින් පෙන්නනවා. උදා: passwords හෝ card details enter කරන්න කලින් හැමවිටම HTTPS check කරන්න."},
 ta:{q:"HTTPS என்றால் என்ன?",a:"HTTPS உங்கள் உலாவிக்கும் இணையதளத்திற்கும் இடையே தரவை மறைகுறியாக்குகிறது, முகவரி பட்டியில் பூட்டு ஐகானாகக் காட்டப்படும். எ.கா: கடவுச்சொல் அல்லது கார்டு விவரங்களை உள்ளிடும் முன் HTTPS-ஐ சரிபார்க்கவும்."}},

{en:{q:"What is a VPN?",a:"A VPN encrypts your internet connection, hiding your data from others on the same network. Example: Using a VPN on public café Wi-Fi prevents others from intercepting your login details."},
 si:{q:"VPN කියන්නේ මොකක්ද?",a:"VPN ඔබේ internet connection එක encrypt කරලා, එකම network එකේ අනිත් අයගෙන් ඔබේ data hide කරනවා. උදා: public café Wi-Fi එකේ VPN එකක් use කිරීමෙන් අනිත් අයට ඔබේ login details intercept කරන්න බැරි වෙනවා."},
 ta:{q:"VPN என்றால் என்ன?",a:"VPN உங்கள் இணைய இணைப்பை மறைகுறியாக்கி, அதே நெட்வொர்க்கில் உள்ள மற்றவர்களிடமிருந்து உங்கள் தரவை மறைக்கிறது. எ.கா: பொது கஃபே Wi-Fi-இல் VPN பயன்படுத்துவது உங்கள் login விவரங்களை மற்றவர்கள் இடைமறிப்பதைத் தடுக்கும்."}},

{en:{q:"Why should you update software?",a:"Updates patch security vulnerabilities attackers actively exploit, including zero-days. Example: WannaCry ransomware spread through a Windows flaw that had a patch available weeks earlier. Enable auto-updates."},
 si:{q:"Software update කරන්න ඕන ඇයි?",a:"Updates මගින් attackers ලා actively exploit කරන security vulnerabilities, zero-days ඇතුළත්ව, patch කරනවා. උදා: WannaCry ransomware ව්‍යාප්ත වුණේ patch එකක් සති කිහිපයකට කලින්ම තිබුණු Windows flaw එකක් හරහායි. Auto-updates enable කරන්න."},
 ta:{q:"மென்பொருளை ஏன் புதுப்பிக்க வேண்டும்?",a:"புதுப்பிப்புகள் தாக்குபவர்கள் தீவிரமாக பயன்படுத்தும் பாதுகாப்பு பலவீனங்களை சரிசெய்கின்றன, zero-day உட்பட. எ.கா: WannaCry ransomware ஏற்கனவே patch கிடைத்திருந்த Windows குறைபாடு மூலம் பரவியது. auto-update-ஐ இயக்குங்கள்."}},

{en:{q:"What is a data breach?",a:"A data breach is when confidential data is accessed or leaked without authorization. Example: If a service you use is breached, check haveibeenpwned.com and change your password immediately."},
 si:{q:"Data breach කියන්නේ මොකක්ද?",a:"Data breach කියන්නේ confidential data unauthorized විදිහට access කරන හෝ leak වෙන අවස්ථාවක්. උදා: ඔබ use කරන service එකක් breach වුණොත්, haveibeenpwned.com check කරලා password එක වහාම වෙනස් කරන්න."},
 ta:{q:"தரவு மீறல் என்றால் என்ன?",a:"தரவு மீறல் என்பது ரகசிய தரவு அங்கீகாரமின்றி அணுகப்படுவது அல்லது கசிவது. எ.கா: நீங்கள் பயன்படுத்தும் சேவை மீறப்பட்டால், haveibeenpwned.com-ஐ சரிபார்த்து உடனடியாக கடவுச்சொல்லை மாற்றவும்."}},

{en:{q:"What is identity theft?",a:"Identity theft is when someone uses your personal data (NIC, bank info) to commit fraud in your name. Example: Someone opening a credit card using your stolen NIC number. Prevent by shredding documents and monitoring accounts."},
 si:{q:"Identity theft කියන්නේ මොකක්ද?",a:"Identity theft කියන්නේ කවුරුහරි ඔබේ personal data (NIC, bank info) ඔබේ නමින් fraud කරන්න use කිරීමයි. උදා: ඔබේ stolen NIC number එකෙන් credit card එකක් open කරන කෙනෙක්. Documents shred කරලා, accounts monitor කරන්න."},
 ta:{q:"அடையாள திருட்டு என்றால் என்ன?",a:"அடையாள திருட்டு என்பது ஒருவர் உங்கள் தனிப்பட்ட தரவை (NIC, வங்கி தகவல்) பயன்படுத்தி உங்கள் பெயரில் மோசடி செய்வது. எ.கா: உங்கள் திருடப்பட்ட NIC எண்ணைப் பயன்படுத்தி கிரெடிட் கார்டு திறப்பது. ஆவணங்களை சிதைத்து, கணக்குகளைக் கண்காணிக்கவும்."}},

{en:{q:"What is a safe place to download apps?",a:"Only download apps from official stores like Google Play or the Apple App Store, and check reviews and permissions first. Example: A flashlight app requesting contacts and camera access is a red flag."},
 si:{q:"Apps download කරන්න safe තැන කුමක්ද?",a:"Google Play හෝ Apple App Store වගේ official stores වලින් විතරක් apps download කරන්න, reviews සහ permissions කලින් check කරන්න. උදා: contacts සහ camera access ඉල්ලන flashlight app එකක් red flag එකක්."},
 ta:{q:"செயலிகளை பதிவிறக்கம் செய்ய பாதுகாப்பான இடம் எது?",a:"Google Play அல்லது Apple App Store போன்ற அதிகாரப்பூர்வ கடைகளிலிருந்து மட்டும் செயலிகளை பதிவிறக்கவும், விமர்சனங்கள் மற்றும் அனுமதிகளை முதலில் சரிபார்க்கவும். எ.கா: தொடர்புகள் மற்றும் கேமரா அணுகலைக் கோரும் flashlight செயலி ஒரு எச்சரிக்கை அடையாளம்."}},

{en:{q:"What is spam?",a:"Spam is unsolicited bulk messages, often advertising or scams, sent to many people at once. Example: Repeated 'You won a prize!' emails or SMS asking you to click a link to claim it."},
 si:{q:"Spam කියන්නේ මොකක්ද?",a:"Spam කියන්නේ, බොහෝවිට advertising හෝ scams, බොහෝ අයට එකවර යවන unsolicited bulk messages. උදා: 'ඔබ prize එකක් දිනුවා!' කියලා claim කරන්න link එකක් click කරන්න කියන repeated emails/SMS."},
 ta:{q:"ஸ்பேம் என்றால் என்ன?",a:"ஸ்பேம் என்பது பல பேருக்கு ஒரே நேரத்தில் அனுப்பப்படும் விரும்பப்படாத, பெரும்பாலும் விளம்பரம் அல்லது மோசடி செய்திகள். எ.கா: 'நீங்கள் ஒரு பரிசு வென்றீர்கள்!' என்ற திரும்பத் திரும்ப வரும் மின்னஞ்சல்/SMS."}},

{en:{q:"What should you do with suspicious links?",a:"Never click suspicious links — hover to preview the URL first, and verify the sender through another channel. Example: 'faceb00k-login.com' (with zeros) mimics 'facebook.com' to steal your login."},
 si:{q:"Suspicious links වලට කරන්න ඕන දේ මොකක්ද?",a:"Suspicious links click කරන්න එපා — first URL එක preview කරන්න hover කරන්න, sender එක වෙන channel එකකින් verify කරන්න. උදා: 'faceb00k-login.com' (zeros සමග) 'facebook.com' mimic කරලා login steal කරනවා."},
 ta:{q:"சந்தேகத்திற்குரிய இணைப்புகளுக்கு என்ன செய்ய வேண்டும்?",a:"சந்தேகத்திற்குரிய இணைப்புகளை கிளிக் செய்ய வேண்டாம் — முதலில் URL-ஐ preview செய்யவும், அனுப்புநரை வேறு வழியில் சரிபார்க்கவும். எ.கா: 'faceb00k-login.com' (பூஜ்யங்களுடன்) 'facebook.com'-ஐ போலி செய்து login-ஐ திருடும்."}},

{en:{q:"What is a backup?",a:"A backup is a copy of your data stored separately, so you can recover it if lost, deleted, or encrypted by ransomware. Example: Automatically backing up phone photos to a cloud drive weekly."},
 si:{q:"Backup කියන්නේ මොකක්ද?",a:"Backup කියන්නේ, lost වුණොත්, delete වුණොත් හෝ ransomware එකෙන් encrypt වුණොත් recover කරගන්න පුළුවන් වෙන්න වෙනම store කරපු ඔබේ data copy එකක්. උදා: phone photos weekly cloud drive එකකට automatically backup කිරීම."},
 ta:{q:"backup என்றால் என்ன?",a:"Backup என்பது தொலைந்தால், நீக்கப்பட்டால் அல்லது ransomware மூலம் மறைகுறியாக்கப்பட்டால் மீட்டெடுக்க தனியாக சேமிக்கப்படும் உங்கள் தரவின் நகல். எ.கா: மொபைல் புகைப்படங்களை வாரந்தோறும் cloud drive-க்கு தானாக backup செய்தல்."}},

{en:{q:"What is a digital footprint?",a:"Your digital footprint is the trail of data you leave online through posts, searches, and activity. Example: Old public posts or photos can be found by employers or scammers years later."},
 si:{q:"Digital footprint කියන්නේ මොකක්ද?",a:"ඔබේ digital footprint කියන්නේ posts, searches, සහ activity හරහා online ඔබ ඉතුරු කරන data trail එකයි. උදා: පරණ public posts හෝ photos, අවුරුදු ගණනාවකට පස්සේ employers හෝ scammers ලා ලෙසින් find කරන්න පුළුවන්."},
 ta:{q:"டிஜிட்டல் தடம் என்றால் என்ன?",a:"உங்கள் டிஜிட்டல் தடம் என்பது இடுகைகள், தேடல்கள் மற்றும் செயல்பாடு மூலம் நீங்கள் ஆன்லைனில் விட்டுச் செல்லும் தரவுத் தடம். எ.கா: பழைய பொது இடுகைகள் அல்லது புகைப்படங்களை பல ஆண்டுகளுக்குப் பிறகு முதலாளிகள் அல்லது மோசடி செய்பவர்கள் கண்டுபிடிக்கலாம்."}},

{en:{q:"What is antivirus?",a:"Antivirus software detects, blocks, and removes malicious programs from your device. Example: It can quarantine a malware file before it damages your system, but it should be paired with safe browsing habits."},
 si:{q:"Antivirus කියන්නේ මොකක්ද?",a:"Antivirus software එකෙන් ඔබේ device එකේ malicious programs detect කරලා, block කරලා, remove කරනවා. උදා: system එකට හානි කරන්න කලින් malware file එකක් quarantine කරන්න පුළුවන්, නමුත් safe browsing habits එක්කම use කරන්න ඕන."},
 ta:{q:"antivirus என்றால் என்ன?",a:"Antivirus மென்பொருள் உங்கள் சாதனத்திலிருந்து தீங்கிழைக்கும் நிரல்களைக் கண்டறிந்து, தடுத்து, அகற்றுகிறது. எ.கா: அமைப்புக்கு சேதம் விளைவிக்கும் முன் malware கோப்பைத் தனிமைப்படுத்தலாம், ஆனால் இது பாதுகாப்பான உலாவல் பழக்கத்துடன் இணைந்து இருக்க வேண்டும்."}},

{en:{q:"Should you use public Wi-Fi for banking?",a:"No — avoid banking or entering sensitive info on public Wi-Fi unless using a VPN. Example: Someone on the same café network could intercept your unencrypted banking session."},
 si:{q:"Banking සඳහා public Wi-Fi use කරන්න පුළුවන්ද?",a:"නෑ — VPN එකක් use කරන්නේ නැත්නම් public Wi-Fi එකේ banking හෝ sensitive info enter කරන එක avoid කරන්න. උදා: එකම café network එකේ කෙනෙක්ට ඔබේ unencrypted banking session එක intercept කරන්න පුළුවන්."},
 ta:{q:"வங்கி பரிவர்த்தனைகளுக்கு பொது Wi-Fi பயன்படுத்தலாமா?",a:"இல்லை — VPN பயன்படுத்தாத வரை பொது Wi-Fi-இல் வங்கி அல்லது முக்கிய தகவலை உள்ளிடுவதைத் தவிர்க்கவும். எ.கா: அதே கஃபே நெட்வொர்க்கில் உள்ள ஒருவர் உங்கள் மறைகுறியாக்கப்படாத வங்கி அமர்வை இடைமறிக்கலாம்."}},

{en:{q:"Why should you lock your device?",a:"Locking your device with a PIN, password, or biometric prevents anyone from accessing your data if it's lost or stolen. Example: An unlocked phone left on a desk lets anyone read your messages instantly."},
 si:{q:"Device එක lock කරන්න ඕන ඇයි?",a:"PIN, password හෝ biometric එකකින් device එක lock කිරීමෙන් lost වුණොත් හෝ steal වුණොත් කාටවත් ඔබේ data access කරන්න බැරි කරනවා. උදා: desk එකක තිබ්බ unlocked phone එකක messages ඕනම කෙනෙක්ට instantly read කරන්න පුළුවන්."},
 ta:{q:"உங்கள் சாதனத்தை ஏன் பூட்ட வேண்டும்?",a:"PIN, கடவுச்சொல் அல்லது பயோமெட்ரிக் மூலம் சாதனத்தைப் பூட்டுவது தொலைந்தால் அல்லது திருடப்பட்டால் யாரும் உங்கள் தரவை அணுகுவதைத் தடுக்கிறது. எ.கா: மேசையில் விடப்பட்ட திறந்த தொலைபேசி எவரும் உடனடியாக செய்திகளைப் படிக்க அனுமதிக்கும்."}},

{en:{q:"What is encryption?",a:"Encryption converts data into unreadable code that only authorized parties can decode with a key. Example: WhatsApp's end-to-end encryption means even WhatsApp can't read your messages."},
 si:{q:"Encryption කියන්නේ මොකක්ද?",a:"Encryption කියන්නේ authorized parties ලට විතරක් key එකකින් decode කරන්න පුළුවන් unreadable code එකක් බවට data convert කිරීමයි. උදා: WhatsApp එකේ end-to-end encryption කියන්නේ WhatsApp එකටත් ඔබේ messages read කරන්න බැරි වීමයි."},
 ta:{q:"encryption என்றால் என்ன?",a:"Encryption தரவை அங்கீகரிக்கப்பட்டவர்கள் மட்டுமே ஒரு key மூலம் புரிந்துகொள்ளக்கூடிய படிக்க முடியாத குறியீடாக மாற்றுகிறது. எ.கா: WhatsApp-இன் end-to-end encryption என்பது WhatsApp-ஆல் கூட உங்கள் செய்திகளைப் படிக்க முடியாது என்பதாகும்."}},

{en:{q:"What is cloud security?",a:"Cloud security protects data stored on cloud platforms like Google Drive or OneDrive through access controls and encryption. Example: A publicly shared Drive link can be seen by anyone — set it to 'restricted' instead."},
 si:{q:"Cloud security කියන්නේ මොකක්ද?",a:"Cloud security කියන්නේ access controls සහ encryption හරහා Google Drive හෝ OneDrive වගේ cloud platforms වල store කරපු data protect කිරීමයි. උදා: publicly share කරපු Drive link එකක් ඕනම කෙනෙක්ට බලාගන්න පුළුවන් — ඒක වෙනුවට 'restricted' කරන්න."},
 ta:{q:"cloud பாதுகாப்பு என்றால் என்ன?",a:"Cloud பாதுகாப்பு Google Drive அல்லது OneDrive போன்ற cloud தளங்களில் சேமிக்கப்பட்ட தரவை அணுகல் கட்டுப்பாடுகள் மற்றும் encryption மூலம் பாதுகாக்கிறது. எ.கா: பொதுவாகப் பகிரப்பட்ட Drive இணைப்பை யார் வேண்டுமானாலும் பார்க்கலாம் — அதற்குப் பதிலாக 'restricted' ஆக அமைக்கவும்."}},

{en:{q:"What is an insider threat?",a:"An insider threat comes from someone within an organization — an employee or contractor — who misuses their access to harm the organization. Example: An employee copying confidential client data before resigning."},
 si:{q:"Insider threat කියන්නේ මොකක්ද?",a:"Insider threat එකක් එන්නේ organization එකක් ඇතුළෙන් — employee කෙනෙක් හෝ contractor කෙනෙක් — ලෙසින්, ඔවුන්ගේ access misuse කරලා organization එකට හානි කරන එකෙන්. උදා: resign වෙන්න කලින් confidential client data copy කරන employee කෙනෙක්."},
 ta:{q:"insider அச்சுறுத்தல் என்றால் என்ன?",a:"Insider அச்சுறுத்தல் என்பது ஒரு நிறுவனத்திற்குள் உள்ள ஒருவர் — ஊழியர் அல்லது ஒப்பந்ததாரர் — தங்கள் அணுகலை தவறாகப் பயன்படுத்தி நிறுவனத்திற்கு தீங்கு விளைவிப்பது. எ.கா: ராஜினாமா செய்வதற்கு முன் ரகசிய வாடிக்கையாளர் தரவை நகலெடுக்கும் ஊழியர்."}},

{en:{q:"What is password reuse?",a:"Password reuse is using the same password across multiple accounts, which is risky — if one site is breached, all your accounts become vulnerable. Example: Using your email password for your bank account too."},
 si:{q:"Password reuse කියන්නේ මොකක්ද?",a:"Password reuse කියන්නේ එකම password එක accounts කිහිපයකට use කිරීමයි, ඒක risky — site එකක් breach වුණොත් ඔබේ accounts ඔක්කොම vulnerable වෙනවා. උදා: ඔබේ email password එකම bank account එකටත් use කිරීම."},
 ta:{q:"கடவுச்சொல் மறுபயன்பாடு என்றால் என்ன?",a:"கடவுச்சொல் மறுபயன்பாடு என்பது ஒரே கடவுச்சொல்லை பல கணக்குகளில் பயன்படுத்துவது, இது ஆபத்தானது — ஒரு தளம் மீறப்பட்டால், உங்கள் அனைத்து கணக்குகளும் பாதிக்கப்படும். எ.கா: உங்கள் மின்னஞ்சல் கடவுச்சொல்லையே வங்கிக் கணக்கிற்கும் பயன்படுத்துவது."}},

{en:{q:"What is the best response to a hacked account?",a:"Immediately change your password, enable MFA, log out of all sessions, and check for unauthorized activity. Example: If your email is hacked, also check if it was used to reset passwords on other linked accounts."},
 si:{q:"Hack වුණ account එකකට හොඳම response එක මොකක්ද?",a:"වහාම password එක change කරන්න, MFA enable කරන්න, sessions ඔක්කොම log out කරන්න, unauthorized activity check කරන්න. උදා: ඔබේ email එක hack වුණොත්, linked accounts වල passwords reset කරන්න ඒක use කරලාද කියලත් check කරන්න."},
 ta:{q:"ஹேக் செய்யப்பட்ட கணக்கிற்கு சிறந்த பதில் என்ன?",a:"உடனடியாக கடவுச்சொல்லை மாற்றவும், MFA-ஐ இயக்கவும், அனைத்து அமர்வுகளிலிருந்தும் வெளியேறவும், அங்கீகரிக்கப்படாத செயல்பாட்டைச் சரிபார்க்கவும். எ.கா: மின்னஞ்சல் ஹேக் செய்யப்பட்டால், மற்ற இணைக்கப்பட்ட கணக்குகளின் கடவுச்சொற்களை மீட்டமைக்க அது பயன்படுத்தப்பட்டதா எனச் சரிபார்க்கவும்."}},

{en:{q:"What is cyber hygiene?",a:"Cyber hygiene means regular habits that keep you secure online — updating software, using strong passwords, and being cautious with links. Example: Reviewing app permissions monthly is a simple cyber hygiene habit."},
 si:{q:"Cyber hygiene කියන්නේ මොකක්ද?",a:"Cyber hygiene කියන්නේ ඔබව online secure තියාගන්න regular habits — software update කිරීම, strong passwords use කිරීම, links වලට careful වීම. උදා: app permissions මාසෙකට වතාවක් review කිරීම simple cyber hygiene habit එකක්."},
 ta:{q:"cyber hygiene என்றால் என்ன?",a:"Cyber hygiene என்பது உங்களை ஆன்லைனில் பாதுகாப்பாக வைத்திருக்கும் வழக்கமான பழக்கங்கள் — மென்பொருளை புதுப்பித்தல், வலுவான கடவுச்சொற்களைப் பயன்படுத்துதல், இணைப்புகளில் கவனமாக இருத்தல். எ.கா: மாதந்தோறும் செயலி அனுமதிகளை மறுஆய்வு செய்வது எளிய cyber hygiene பழக்கம்."}},

{en:{q:"Why is cyber awareness important?",a:"Cyber awareness is the first line of defense — most breaches start with human error, not technical flaws. Example: A single employee clicking a phishing link can compromise an entire organization's network."},
 si:{q:"Cyber awareness වැදගත් වෙන්නේ ඇයි?",a:"Cyber awareness කියන්නේ defense එකේ first line එකයි — බොහෝ breaches පටන් ගන්නේ technical flaws වලින් නෙවෙයි, human error වලින්. උදා: employee කෙනෙක් phishing link එකක් click කිරීමෙන් organization එකේම network එකම compromise වෙන්න පුළුවන්."},
 ta:{q:"cyber விழிப்புணர்வு ஏன் முக்கியம்?",a:"Cyber விழிப்புணர்வு பாதுகாப்பின் முதல் வரிசை — பெரும்பாலான மீறல்கள் தொழில்நுட்பக் குறைபாடுகளால் அல்ல, மனித தவறுகளால் தொடங்குகின்றன. எ.கா: ஒரு ஊழியர் ஃபிஷிங் இணைப்பைக் கிளிக் செய்வது நிறுவனத்தின் முழு நெட்வொர்க்கையும் பாதிக்கலாம்."}}
];

/* ============================================================
   FAQ — PAGINATED (5 per page)
   ============================================================ */
let currentFAQPage = 0;
const FAQ_PER_PAGE = 5;

function renderFAQ(lang) {
    const container = document.getElementById('faq-list');
    if (!container) {
        console.error("FAQ container #faq-list not found in HTML.");
        return;
    }

    const currentLang = lang || document.body.getAttribute('data-lang') || 'en';
    const totalPages = Math.ceil(faq30.length / FAQ_PER_PAGE);

    if (currentFAQPage >= totalPages) currentFAQPage = totalPages - 1;
    if (currentFAQPage < 0) currentFAQPage = 0;

    const start = currentFAQPage * FAQ_PER_PAGE;
    const end = start + FAQ_PER_PAGE;
    const pageItems = faq30.slice(start, end);

    container.innerHTML = pageItems.map((item, i) => {
        const t = item[currentLang] || item.en;
        const globalIndex = start + i;
        return `
        <div class="faq-item" id="faq-${globalIndex}">
            <div class="faq-question" onclick="toggleFAQ(${globalIndex})">
                <span><span class="faq-num">${String(globalIndex + 1).padStart(2, '0')}.</span>${t.q}</span>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="faq-answer">${t.a}</div>
        </div>`;
    }).join("");

    const pageIndicator = document.getElementById('faq-page-indicator');
    const prevBtn = document.getElementById('faq-prev-btn');
    const nextBtn = document.getElementById('faq-next-btn');

    if (pageIndicator) pageIndicator.textContent = `Page ${currentFAQPage + 1} of ${totalPages}`;
    if (prevBtn) prevBtn.disabled = currentFAQPage === 0;
    if (nextBtn) nextBtn.disabled = currentFAQPage === totalPages - 1;
}

function changeFAQPage(direction) {
    const totalPages = Math.ceil(faq30.length / FAQ_PER_PAGE);
    const newPage = currentFAQPage + direction;

    if (newPage < 0 || newPage >= totalPages) return;

    currentFAQPage = newPage;
    const currentLang = document.body.getAttribute('data-lang') || 'en';
    renderFAQ(currentLang);

    const faqSection = document.querySelector('.faq-section');
    if (faqSection) faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleFAQ(index) {
    const item = document.getElementById(`faq-${index}`);
    if (item) item.classList.toggle('open');
}

/* ============================================================
   SEARCH BAR — Covers ALL 30 Cyber Security Categories
   ============================================================ */
const faqData = [
    { category: {en:"Password Security",si:"මුරපද ආරක්ෂාව",ta:"கடவுச்சொல் பாதுகாப்பு"}, icon: "fa-lock", color: "#00f2fe",
      keywords: {en:["password","strong password","passwords","create password","secure password"], si:["මුරපද","පාස්වර්ඩ්","ප්‍රබල මුරපද"], ta:["கடவுச்சொல்","கடவுச்சொற்கள்","வலுவான கடவுச்சொல்"]},
      question: {en:"What is the safest way to create a password?", si:"මුරපද සෑදීමට වඩාත් ආරක්ෂිත ක්‍රමය කුමක්ද?", ta:"கடவுச்சொல்லை உருவாக்குவதற்கான பாதுகாப்பான வழி என்ன?"},
      answer: {en:"Use a unique password of 12+ characters mixing letters, numbers, and symbols. Example: 'Tr@in$tation92!' instead of 'password123'. Never reuse passwords across sites, and use a password manager to store them.", si:"අකුරු, අංක සහ සංකේත මිශ්‍ර කරගත් අක්ෂර 12කට වඩා වැඩි දිගු, අනන්‍ය මුරපද භාවිතා කරන්න. උදා: 'password123' වෙනුවට 'Br3eze-Mango!92'. එකම මුරපදය වෙබ් අඩවි කිහිපයකට භාවිතා කරන්න එපා.", ta:"எழுத்துக்கள், எண்கள், சின்னங்களை கலந்து 12+ எழுத்துக்கள் கொண்ட நீண்ட, தனித்துவமான கடவுச்சொற்களைப் பயன்படுத்துங்கள். எ.கா: 'password123' க்கு பதிலாக 'Br3eze-Mango!92'. ஒரே கடவுச்சொல்லை பல தளங்களில் மீண்டும் பயன்படுத்த வேண்டாம்."}},

    { category: {en:"Phishing & Email Security",si:"Phishing සහ Email ආරක්ෂාව",ta:"ஃபிஷிங் மற்றும் மின்னஞ்சல் பாதுகாப்பு"}, icon: "fa-envelope-open-text", color: "#ef4444",
      keywords: {en:["phishing","phish","suspicious email","fake email","email security","spoofed email"], si:["phishing","වංචනික ඊමේල්","සැක සහිත ඊමේල්"], ta:["ஃபிஷிங்","மோசடி மின்னஞ்சல்","சந்தேகத்திற்குரிய மின்னஞ்சல்"]},
      question: {en:"What is phishing and how do I stay safe from it?", si:"Phishing කියන්නේ මොකක්ද සහ එයින් ආරක්ෂා වෙන්නේ කොහොමද?", ta:"ஃபிஷிங் என்றால் என்ன, அதிலிருந்து எப்படி பாதுகாப்பாக இருக்க வேண்டும்?"},
      answer: {en:"Phishing is a scam where attackers send fraudulent emails pretending to be trusted sources to steal your data. Example: A fake bank email asking you to 'verify your account'. Never click unexpected links — verify the sender and report it.", si:"Phishing කියන්නේ attackers ලා විශ්වාසදායක ප්‍රභවයන් ලෙස පෙනී සිට වංචනික email/messages එවා ඔබේ දත්ත සොරකම් කිරීමයි. උදා: 'ඔබේ ගිණුම verify කරන්න' කියලා link එකක් සමග එන fake bank email එකක්. click කරන්න එපා — report කරලා delete කරන්න.", ta:"ஃபிஷிங் என்பது தாக்குபவர்கள் நம்பகமான மூலங்களாக நடித்து மோசடி மின்னஞ்சல்/செய்திகள் அனுப்பி உங்கள் தரவைத் திருடும் மோசடி. எ.கா: உங்கள் கணக்கை 'சரிபார்க்க' கோரும் போலி வங்கி மின்னஞ்சல். கிளிக் செய்ய வேண்டாம் — புகாரளித்து நீக்கவும்."}},

    { category: {en:"Spear Phishing",si:"Spear Phishing",ta:"ஸ்பியர் ஃபிஷிங்"}, icon: "fa-user-ninja", color: "#dc2626",
      keywords: {en:["spear phishing","social engineering","targeted attack","manipulation","pretexting","impersonation"], si:["spear phishing","ඉලක්කගත ප්‍රහාර","සමාජ ඉංජිනේරු"], ta:["ஸ்பியர் ஃபிஷிங்","இலக்கு தாக்குதல்","சமூக பொறியியல்"]},
      question: {en:"What is spear phishing / social engineering?", si:"Spear phishing / social engineering කියන්නේ මොකක්ද?", ta:"ஸ்பியர் ஃபிஷிங் / சமூக பொறியியல் என்றால் என்ன?"},
      answer: {en:"Spear phishing targets a specific person using personal details to seem convincing, while social engineering manipulates people psychologically to reveal confidential info. Example: A caller pretending to be 'IT support' asking for your password.", si:"Spear phishing කියන්නේ නිශ්චිත පුද්ගලයෙකු target කරගෙන, පුද්ගලික තොරතුරු භාවිතා කරමින් විශ්වාසදායක බවක් පෙන්නන targeted phishing attack එකක්. උදා: ඔබේ lecturer ලෙස පෙනී, real assignment එකක් mention කරමින් attachment එකක් open කරන්න කියන email එකක්.", ta:"ஸ்பியர் ஃபிஷிங் என்பது ஒரு குறிப்பிட்ட நபரை இலக்காகக் கொண்டு, தனிப்பட்ட விவரங்களைப் பயன்படுத்தி நம்பகத்தன்மையுடன் தாக்கும் இலக்கு வைக்கப்பட்ட ஃபிஷிங். எ.கா: உங்கள் விரிவுரையாளர் என நடித்து, உண்மையான பணிப்பணியைக் குறிப்பிட்டு கோப்பைத் திறக்கச் சொல்லும் மின்னஞ்சல்."}},

    { category: {en:"MFA & Account Security",si:"MFA සහ ගිණුම් ආරක්ෂාව",ta:"MFA மற்றும் கணக்கு பாதுகாப்பு"}, icon: "fa-key", color: "#00f2fe",
      keywords: {en:["mfa","multi factor","two factor","2fa","authentication","account security","authenticator"], si:["mfa","සාධක දෙක","සත්‍යාපනය"], ta:["mfa","இரு காரணி","அங்கீகாரம்"]},
      question: {en:"What is MFA and why does it matter for account security?", si:"MFA කියන්නේ මොකක්ද සහ එය ගිණුම් ආරක්ෂාවට වැදගත් වන්නේ ඇයි?", ta:"MFA என்றால் என்ன, அது கணக்கு பாதுகாப்பிற்கு ஏன் முக்கியம்?"},
      answer: {en:"MFA (Multi-Factor Authentication) requires a second proof of identity beyond your password, like a code from an app. Example: Even if a hacker steals your password, they can't log in without the code on your phone. Reduces takeover risk by ~99%.", si:"MFA (Multi-Factor Authentication) කියන්නේ password එකට අමතරව app එකකින් එන code එකක් වගේ identity verify කරන දෙවන ක්‍රමයක් අවශ්‍ය කිරීමයි. උදා: email එකකට login වෙන්න password එකට අමතරව Google Authenticator එකෙන් 6-digit code එකකුත් ඕන.", ta:"MFA (பல காரணி அங்கீகாரம்) கடவுச்சொல்லுக்கு அப்பால் ஒரு செயலியிலிருந்து வரும் குறியீடு போன்ற இரண்டாவது அடையாள சான்றைக் கோருகிறது. எ.கா: மின்னஞ்சலில் நுழைய கடவுச்சொல்லுடன் Google Authenticator-இன் 6-இலக்க குறியீடும் தேவை."}},

    { category: {en:"Ransomware",si:"Ransomware",ta:"Ransomware"}, icon: "fa-virus", color: "#dc2626",
      keywords: {en:["ransomware","virus","malware","trojan","exe","attachment","double extension"], si:["ransomware","වයිරස","හානිකර මෘදුකාංග"], ta:["ransomware","வைரஸ்","தீம்பொருள்"]},
      question: {en:"What are malware and ransomware?", si:"Malware සහ ransomware කියන්නේ මොකක්ද?", ta:"Malware மற்றும் ransomware என்றால் என்ன?"},
      answer: {en:"Malware is malicious software designed to damage or gain unauthorized access to a system. Ransomware is a type that encrypts your files and demands payment. Example: WannaCry (2017) locked hospital computers worldwide demanding Bitcoin.", si:"Malware කියන්නේ system එකකට හානි කරන්න, disrupt කරන්න, හෝ unauthorized access ගන්න design කරපු ඕනම malicious software එකක් — viruses, spyware, ransomware ඇතුළත්ව. උදා: රහසේ ඔබේ දත්ත steal කරන 'free PDF converter' app එකක්.", ta:"Malware என்பது ஒரு அமைப்புக்கு சேதம் விளைவிக்க, சீர்குலைக்க அல்லது அங்கீகரிக்கப்படாத அணுகலைப் பெற வடிவமைக்கப்பட்ட தீங்கிழைக்கும் மென்பொருள் — வைரஸ், ஸ்பைவேர், ransomware உட்பட. எ.கா: ரகசியமாக உங்கள் தரவைத் திருடும் 'இலவச PDF converter' செயலி."}},

    { category: {en:"Firewall & Network Security",si:"Firewall සහ ජාල ආරක්ෂාව",ta:"Firewall மற்றும் நெட்வொர்க் பாதுகாப்பு"}, icon: "fa-network-wired", color: "#64748b",
      keywords: {en:["firewall","network security","block traffic"], si:["firewall","ජාල ආරක්ෂාව"], ta:["firewall","நெட்வொர்க் பாதுகாப்பு"]},
      question: {en:"What is a firewall and how does it protect a network?", si:"Firewall කියන්නේ මොකක්ද සහ එය ජාලයක් ආරක්ෂා කරන්නේ කෙසේද?", ta:"Firewall என்றால் என்ன, அது ஒரு நெட்வொர்க்கை எவ்வாறு பாதுகாக்கிறது?"},
      answer: {en:"A firewall monitors and filters network traffic based on security rules, blocking unauthorized access. Example: It stops an attacker from directly connecting to your computer over the internet.", si:"Firewall security rules පදනම් කරගෙන network traffic monitor සහ filter කරලා unauthorized access block කරනවා. උදා: attacker කෙනෙක්ට internet එකෙන් ඔබේ computer එකට direct connect වෙන්න බැරි කරනවා.", ta:"Firewall பாதுகாப்பு விதிகளின் அடிப்படையில் நெட்வொர்க் போக்குவரத்தை கண்காணித்து வடிகட்டி அங்கீகரிக்கப்படாத அணுகலைத் தடுக்கிறது. எ.கா: இணையம் வழியாக உங்கள் கணினியுடன் நேரடியாக இணைப்பதைத் தாக்குபவரைத் தடுக்கிறது."}},

    { category: {en:"HTTPS, VPN & Internet Security",si:"HTTPS, VPN සහ අන්තර්ජාල ආරක්ෂාව",ta:"HTTPS, VPN மற்றும் இணைய பாதுகாப்பு"}, icon: "fa-globe", color: "#4facfe",
      keywords: {en:["https","vpn","internet security","secure connection","padlock"], si:["https","vpn","අන්තර්ජාල ආරක්ෂාව"], ta:["https","vpn","இணைய பாதுகாப்பு"]},
      question: {en:"What are HTTPS and VPN, and why do they matter?", si:"HTTPS සහ VPN යනු මොනවාද සහ ඒවා වැදගත් වන්නේ ඇයි?", ta:"HTTPS மற்றும் VPN என்றால் என்ன, அவை ஏன் முக்கியம்?"},
      answer: {en:"HTTPS encrypts data between your browser and a website (shown by a padlock icon). A VPN encrypts your whole internet connection. Example: Use a VPN on public Wi-Fi so others on the network can't intercept your data.", si:"HTTPS ඔබේ browser එකට සහ website එකට අතර data encrypt කරනවා, address bar එකේ padlock icon එකකින් පෙන්නනවා. උදා: passwords හෝ card details enter කරන්න කලින් හැමවිටම HTTPS check කරන්න.", ta:"HTTPS உங்கள் உலாவிக்கும் இணையதளத்திற்கும் இடையே தரவை மறைகுறியாக்குகிறது, முகவரி பட்டியில் பூட்டு ஐகானாகக் காட்டப்படும். எ.கா: கடவுச்சொல் அல்லது கார்டு விவரங்களை உள்ளிடும் முன் HTTPS-ஐ சரிபார்க்கவும்."}},

    { category: {en:"Software Updates",si:"මෘදුකාංග යාවත්කාලීන",ta:"மென்பொருள் புதுப்பிப்புகள்"}, icon: "fa-rotate", color: "#22c55e",
      keywords: {en:["update","patch","software update","zero day","vulnerability"], si:["යාවත්කාලීන","පැච්","මෘදුකාංග"], ta:["புதுப்பிப்பு","பேட்ச்","மென்பொருள்"]},
      question: {en:"Why are software updates important?", si:"මෘදුකාංග යාවත්කාලීන වැදගත් වන්නේ ඇයි?", ta:"மென்பொருள் புதுப்பிப்புகள் ஏன் முக்கியம்?"},
      answer: {en:"Updates patch security vulnerabilities that attackers actively exploit, including zero-days. Example: WannaCry spread through a Windows flaw that had an available patch weeks earlier. Enable auto-updates to stay protected.", si:"Updates මගින් attackers ලා actively exploit කරන security vulnerabilities, zero-days ඇතුළත්ව, patch කරනවා. උදා: WannaCry ransomware ව්‍යාප්ත වුණේ patch එකක් සති කිහිපයකට කලින්ම තිබුණු Windows flaw එකක් හරහායි. Auto-updates enable කරන්න.", ta:"புதுப்பிப்புகள் தாக்குபவர்கள் தீவிரமாக பயன்படுத்தும் பாதுகாப்பு பலவீனங்களை சரிசெய்கின்றன, zero-day உட்பட. எ.கா: WannaCry ransomware ஏற்கனவே patch கிடைத்திருந்த Windows குறைபாடு மூலம் பரவியது. auto-update-ஐ இயக்குங்கள்."}},

    { category: {en:"Data Breaches",si:"දත්ත කඩ කිරීම්",ta:"தரவு மீறல்கள்"}, icon: "fa-database", color: "#7c3aed",
      keywords: {en:["data breach","leaked data","hacked database","privacy breach"], si:["දත්ත කඩ කිරීම","කාන්දු වූ දත්ත"], ta:["தரவு மீறல்","கசிந்த தரவு"]},
      question: {en:"What should I do after a data breach?", si:"දත්ත කඩ කිරීමකින් පසු මා කළ යුත්තේ කුමක්ද?", ta:"தரவு மீறலுக்குப் பிறகு நான் என்ன செய்ய வேண்டும்?"},
      answer: {en:"Change your password immediately, enable MFA, and monitor your accounts for suspicious activity. Example: If a service you use is breached, check haveibeenpwned.com to see if your email was exposed.", si:"වහාම password එක change කරන්න, MFA enable කරන්න, sessions ඔක්කොම log out කරන්න, unauthorized activity check කරන්න. උදා: ඔබේ email එක hack වුණොත්, linked accounts වල passwords reset කරන්න ඒක use කරලාද කියලත් check කරන්න.", ta:"உடனடியாக கடவுச்சொல்லை மாற்றவும், MFA-ஐ இயக்கவும், அனைத்து அமர்வுகளிலிருந்தும் வெளியேறவும், அங்கீகரிக்கப்படாத செயல்பாட்டைச் சரிபார்க்கவும். எ.கா: மின்னஞ்சல் ஹேக் செய்யப்பட்டால், மற்ற இணைக்கப்பட்ட கணக்குகளின் கடவுச்சொற்களை மீட்டமைக்க அது பயன்படுத்தப்பட்டதா எனச் சரிபார்க்கவும்."}},

    { category: {en:"Identity Theft",si:"අනන්‍යතා සොරකම",ta:"அடையாள திருட்டு"}, icon: "fa-mask", color: "#a855f7",
      keywords: {en:["identity theft","stolen identity","fraud","nic stolen"], si:["අනන්‍යතා සොරකම","වංචාව"], ta:["அடையாள திருட்டு","மோசடி"]},
      question: {en:"What is identity theft and how do I prevent it?", si:"අනන්‍යතා සොරකම කියන්නේ මොකක්ද සහ එය වළක්වා ගන්නේ කෙසේද?", ta:"அடையாள திருட்டு என்றால் என்ன, அதை எவ்வாறு தடுப்பது?"},
      answer: {en:"Identity theft happens when someone uses your personal data (NIC, bank info) to commit fraud in your name. Example: Someone opening a credit card using your stolen NIC number. Prevent it by shredding documents and monitoring accounts.", si:"Identity theft කියන්නේ කවුරුහරි ඔබේ personal data (NIC, bank info) ඔබේ නමින් fraud කරන්න use කිරීමයි. උදා: ඔබේ stolen NIC number එකෙන් credit card එකක් open කරන කෙනෙක්. Documents shred කරලා, accounts monitor කරන්න.", ta:"அடையாள திருட்டு என்பது ஒருவர் உங்கள் தனிப்பட்ட தரவை (NIC, வங்கி தகவல்) பயன்படுத்தி உங்கள் பெயரில் மோசடி செய்வது. எ.கா: உங்கள் திருடப்பட்ட NIC எண்ணைப் பயன்படுத்தி கிரெடிட் கார்டு திறப்பது. ஆவணங்களை சிதைத்து, கணக்குகளைக் கண்காணிக்கவும்."}},

    { category: {en:"Safe App Downloads",si:"ආරක්ෂිත App බාගැනීම්",ta:"பாதுகாப்பான செயலி பதிவிறக்கங்கள்"}, icon: "fa-mobile-screen", color: "#10b981",
      keywords: {en:["app download","safe apps","play store","app store","fake app"], si:["app බාගැනීම","ආරක්ෂිත apps"], ta:["செயலி பதிவிறக்கம்","பாதுகாப்பான செயலிகள்"]},
      question: {en:"How do I download apps safely?", si:"මම apps ආරක්ෂිතව බාගන්නේ කෙසේද?", ta:"நான் எப்படி பாதுகாப்பாக செயலிகளை பதிவிறக்குவது?"},
      answer: {en:"Only download apps from official stores like Google Play or the Apple App Store, and check reviews and permissions first. Example: A flashlight app requesting contacts and camera access is a red flag — deny unnecessary permissions.", si:"Google Play හෝ Apple App Store වගේ official stores වලින් විතරක් apps download කරන්න, reviews සහ permissions කලින් check කරන්න. උදා: contacts සහ camera access ඉල්ලන flashlight app එකක් red flag එකක්.", ta:"Google Play அல்லது Apple App Store போன்ற அதிகாரப்பூர்வ கடைகளிலிருந்து மட்டும் செயலிகளை பதிவிறக்கவும், விமர்சனங்கள் மற்றும் அனுமதிகளை முதலில் சரிபார்க்கவும். எ.கா: தொடர்புகள் மற்றும் கேமரா அணுகலைக் கோரும் flashlight செயலி ஒரு எச்சரிக்கை அடையாளம்."}},

    { category: {en:"Spam",si:"Spam",ta:"ஸ்பேம்"}, icon: "fa-message", color: "#f59e0b",
      keywords: {en:["spam","suspicious message","junk mail","unwanted email","bulk message"], si:["spam","සැක සහිත පණිවිඩ"], ta:["ஸ்பேம்","சந்தேகத்திற்குரிய செய்தி"]},
      question: {en:"What is spam and how do I handle suspicious messages?", si:"Spam කියන්නේ මොකක්ද සහ සැක සහිත පණිවිඩ හසුරුවන්නේ කෙසේද?", ta:"ஸ்பேம் என்றால் என்ன, சந்தேகத்திற்குரிய செய்திகளை எவ்வாறு கையாள்வது?"},
      answer: {en:"Spam is unsolicited bulk messages, often advertising or scams, sent to many people at once. Example: Repeated 'You won a prize!' emails asking you to click a link. Don't click, unsubscribe, or reply — mark as spam and delete.", si:"Spam කියන්නේ, බොහෝවිට advertising හෝ scams, බොහෝ අයට එකවර යවන unsolicited bulk messages. උදා: 'ඔබ prize එකක් දිනුවා!' කියලා claim කරන්න link එකක් click කරන්න කියන repeated emails/SMS.", ta:"ஸ்பேம் என்பது பல பேருக்கு ஒரே நேரத்தில் அனுப்பப்படும் விரும்பப்படாத, பெரும்பாலும் விளம்பரம் அல்லது மோசடி செய்திகள். எ.கா: 'நீங்கள் ஒரு பரிசு வென்றீர்கள்!' என்ற திரும்பத் திரும்ப வரும் மின்னஞ்சல்/SMS."}},

    { category: {en:"Backups",si:"උපස්ථ",ta:"காப்புப்பிரதிகள்"}, icon: "fa-clock-rotate-left", color: "#0891b2",
      keywords: {en:["backup","data recovery","restore files","lost data"], si:["backup","දත්ත ප්‍රතිසාධනය"], ta:["backup","தரவு மீட்பு"]},
      question: {en:"Why are backups important for data recovery?", si:"දත්ත ප්‍රතිසාධනය සඳහා උපස්ථ වැදගත් වන්නේ ඇයි?", ta:"தரவு மீட்புக்கு காப்புப்பிரதிகள் ஏன் முக்கியம்?"},
      answer: {en:"A backup is a copy of your data stored separately so you can recover it if lost, deleted, or encrypted by ransomware. Example: Automatically backing up phone photos to a cloud drive weekly protects you from permanent loss.", si:"Backup කියන්නේ, lost වුණොත්, delete වුණොත් හෝ ransomware එකෙන් encrypt වුණොත් recover කරගන්න පුළුවන් වෙන්න වෙනම store කරපු ඔබේ data copy එකක්. උදා: phone photos weekly cloud drive එකකට automatically backup කිරීම.", ta:"Backup என்பது தொலைந்தால், நீக்கப்பட்டால் அல்லது ransomware மூலம் மறைகுறியாக்கப்பட்டால் மீட்டெடுக்க தனியாக சேமிக்கப்படும் உங்கள் தரவின் நகல். எ.கா: மொபைல் புகைப்படங்களை வாரந்தோறும் cloud drive-க்கு தானாக backup செய்தல்."}},

    { category: {en:"Digital Footprint",si:"ඩිජිටල් පියසටහන",ta:"டிஜிட்டல் தடம்"}, icon: "fa-shoe-prints", color: "#14b8a6",
      keywords: {en:["digital footprint","online trail","internet history"], si:["ඩිජිටල් පියසටහන","අන්තර්ජාල ඉතිහාසය"], ta:["டிஜிட்டல் தடம்","இணைய வரலாறு"]},
      question: {en:"What is a digital footprint?", si:"ඩිජිටල් පියසටහන කියන්නේ මොකක්ද?", ta:"டிஜிட்டல் தடம் என்றால் என்ன?"},
      answer: {en:"Your digital footprint is the trail of data you leave online through posts, searches, and activity. Example: Old public posts or photos can be found by employers or scammers years later — review and clean up your online presence.", si:"ඔබේ digital footprint කියන්නේ posts, searches, සහ activity හරහා online ඔබ ඉතුරු කරන data trail එකයි. උදා: පරණ public posts හෝ photos, අවුරුදු ගණනාවකට පස්සේ employers හෝ scammers ලා ලෙසින් find කරන්න පුළුවන්.", ta:"உங்கள் டிஜிட்டல் தடம் என்பது இடுகைகள், தேடல்கள் மற்றும் செயல்பாடு மூலம் நீங்கள் ஆன்லைனில் விட்டுச் செல்லும் தரவுத் தடம். எ.கா: பழைய பொது இடுகைகள் அல்லது புகைப்படங்களை பல ஆண்டுகளுக்குப் பிறகு முதலாளிகள் அல்லது மோசடி செய்பவர்கள் கண்டுபிடிக்கலாம்."}},

    { category: {en:"Antivirus",si:"Antivirus",ta:"Antivirus"}, icon: "fa-shield-virus", color: "#059669",
      keywords: {en:["antivirus","anti-virus","virus protection","malware scanner"], si:["antivirus","වයිරස ආරක්ෂාව"], ta:["antivirus","வைரஸ் பாதுகாப்பு"]},
      question: {en:"What does antivirus software do?", si:"Antivirus software එකෙන් කරන්නේ මොකක්ද?", ta:"Antivirus மென்பொருள் என்ன செய்கிறது?"},
      answer: {en:"Antivirus software detects, blocks, and removes malicious programs from your device. Example: It can quarantine a malware file before it damages your system, but should be paired with safe browsing habits, not relied on alone.", si:"Antivirus software එකෙන් ඔබේ device එකේ malicious programs detect කරලා, block කරලා, remove කරනවා. උදා: system එකට හානි කරන්න කලින් malware file එකක් quarantine කරන්න පුළුවන්, නමුත් safe browsing habits එක්කම use කරන්න ඕන.", ta:"Antivirus மென்பொருள் உங்கள் சாதனத்திலிருந்து தீங்கிழைக்கும் நிரல்களைக் கண்டறிந்து, தடுத்து, அகற்றுகிறது. எ.கா: அமைப்புக்கு சேதம் விளைவிக்கும் முன் malware கோப்பைத் தனிமைப்படுத்தலாம், ஆனால் இது பாதுகாப்பான உலாவல் பழக்கத்துடன் இணைந்து இருக்க வேண்டும்."}},

    { category: {en:"Public Wi-Fi",si:"පොදු Wi-Fi",ta:"பொது Wi-Fi"}, icon: "fa-wifi", color: "#f59e0b",
      keywords: {en:["public wifi","wifi","hotspot","cafe wifi","open network"], si:["පොදු wifi","විවෘත ජාලය"], ta:["பொது wifi","திறந்த நெட்வொர்க்"]},
      question: {en:"How do I stay safe on public Wi-Fi?", si:"පොදු Wi-Fi වල ආරක්ෂිතව සිටින්නේ කෙසේද?", ta:"பொது Wi-Fi-இல் நான் எப்படி பாதுகாப்பாக இருக்க முடியும்?"},
      answer: {en:"Avoid logging into banking or sensitive accounts on public Wi-Fi unless using a VPN. Example: Someone on the same coffee shop Wi-Fi network could intercept your unencrypted login details without a VPN.", si:"නෑ — VPN එකක් use කරන්නේ නැත්නම් public Wi-Fi එකේ banking හෝ sensitive info enter කරන එක avoid කරන්න. උදා: එකම café network එකේ කෙනෙක්ට ඔබේ unencrypted banking session එක intercept කරන්න පුළුවන්.", ta:"இல்லை — VPN பயன்படுத்தாத வரை பொது Wi-Fi-இல் வங்கி அல்லது முக்கிய தகவலை உள்ளிடுவதைத் தவிர்க்கவும். எ.கா: அதே கஃபே நெட்வொர்க்கில் உள்ள ஒருவர் உங்கள் மறைகுறியாக்கப்படாத வங்கி அமர்வை இடைமறிக்கலாம்."}},

    { category: {en:"Device Security",si:"උපාංග ආරක්ෂාව",ta:"சாதன பாதுகாப்பு"}, icon: "fa-lock", color: "#3b82f6",
      keywords: {en:["device security","lock phone","lock computer","pin","biometric"], si:["උපාංග ආරක්ෂාව","අගුලු දැමීම"], ta:["சாதன பாதுகாப்பு","பூட்டுதல்"]},
      question: {en:"How do I secure my devices?", si:"මගේ උපාංග ආරක්ෂා කරන්නේ කෙසේද?", ta:"எனது சாதனங்களை எவ்வாறு பாதுகாப்பாக வைத்திருப்பது?"},
      answer: {en:"Lock your devices with a PIN, password, or biometric, and enable remote-wipe features. Example: An unlocked phone left on a desk lets anyone read your messages instantly — always lock your screen when stepping away.", si:"PIN, password හෝ biometric එකකින් device එක lock කිරීමෙන් lost වුණොත් හෝ steal වුණොත් කාටවත් ඔබේ data access කරන්න බැරි කරනවා. උදා: desk එකක තිබ්බ unlocked phone එකක messages ඕනම කෙනෙක්ට instantly read කරන්න පුළුවන්.", ta:"PIN, கடவுச்சொல் அல்லது பயோமெட்ரிக் மூலம் சாதனத்தைப் பூட்டுவது தொலைந்தால் அல்லது திருடப்பட்டால் யாரும் உங்கள் தரவை அணுகுவதைத் தடுக்கிறது. எ.கா: மேசையில் விடப்பட்ட திறந்த தொலைபேசி எவரும் உடனடியாக செய்திகளைப் படிக்க அனுமதிக்கும்."}},

    { category: {en:"Encryption",si:"ගුප්තකේතනය",ta:"மறைகுறியாக்கம்"}, icon: "fa-lock", color: "#6366f1",
      keywords: {en:["encryption","encrypted","end to end encryption","cipher"], si:["ගුප්තකේතනය","කේතනය"], ta:["மறைகுறியாக்கம்","குறியாக்கம்"]},
      question: {en:"What is encryption?", si:"Encryption කියන්නේ මොකක්ද?", ta:"Encryption என்றால் என்ன?"},
      answer: {en:"Encryption converts data into unreadable code that only authorized parties can decode with a key. Example: WhatsApp's end-to-end encryption means even WhatsApp itself can't read the content of your messages.", si:"Encryption කියන්නේ authorized parties ලට විතරක් key එකකින් decode කරන්න පුළුවන් unreadable code එකක් බවට data convert කිරීමයි. උදා: WhatsApp එකේ end-to-end encryption කියන්නේ WhatsApp එකටත් ඔබේ messages read කරන්න බැරි වීමයි.", ta:"Encryption தரவை அங்கீகரிக்கப்பட்டவர்கள் மட்டுமே ஒரு key மூலம் புரிந்துகொள்ளக்கூடிய படிக்க முடியாத குறியீடாக மாற்றுகிறது. எ.கா: WhatsApp-இன் end-to-end encryption என்பது WhatsApp-ஆல் கூட உங்கள் செய்திகளைப் படிக்க முடியாது என்பதாகும்."}},

    { category: {en:"Cloud Security",si:"Cloud ආරක්ෂාව",ta:"Cloud பாதுகாப்பு"}, icon: "fa-cloud", color: "#0ea5e9",
      keywords: {en:["cloud security","google drive","onedrive","cloud storage"], si:["cloud ආරක්ෂාව","cloud ගබඩාව"], ta:["cloud பாதுகாப்பு","cloud சேமிப்பு"]},
      question: {en:"How do I secure my cloud storage?", si:"මගේ cloud ගබඩාව ආරක්ෂා කරන්නේ කෙසේද?", ta:"எனது cloud சேமிப்பகத்தை எவ்வாறு பாதுகாப்பது?"},
      answer: {en:"Enable MFA on your cloud account and review shared file permissions regularly. Example: A publicly shared Google Drive link can be found by anyone with the URL — set sharing to 'restricted' instead.", si:"access controls සහ encryption හරහා Google Drive හෝ OneDrive වගේ cloud platforms වල store කරපු data protect කිරීමයි. උදා: publicly share කරපු Drive link එකක් ඕනම කෙනෙක්ට බලාගන්න පුළුවන් — ඒක වෙනුවට 'restricted' කරන්න.", ta:"Cloud பாதுகாப்பு Google Drive அல்லது OneDrive போன்ற cloud தளங்களில் சேமிக்கப்பட்ட தரவை அணுகல் கட்டுப்பாடுகள் மற்றும் encryption மூலம் பாதுகாக்கிறது. எ.கா: பொதுவாகப் பகிரப்பட்ட Drive இணைப்பை யார் வேண்டுமானாலும் பார்க்கலாம் — அதற்குப் பதிலாக 'restricted' ஆக அமைக்கவும்."}},

    { category: {en:"Insider Threats",si:"අභ්‍යන්තර තර්ජන",ta:"உள் அச்சுறுத்தல்கள்"}, icon: "fa-user-secret", color: "#7c3aed",
      keywords: {en:["insider threat","employee threat","internal threat"], si:["අභ්‍යන්තර තර්ජන","සේවක තර්ජන"], ta:["உள் அச்சுறுத்தல்","பணியாளர் அச்சுறுத்தல்"]},
      question: {en:"What is an insider threat?", si:"Insider threat කියන්නේ මොකක්ද?", ta:"உள் அச்சுறுத்தல் என்றால் என்ன?"},
      answer: {en:"An insider threat comes from someone within an organization — an employee or contractor — who misuses their access to cause harm. Example: An employee copying confidential client data before resigning to a competitor.", si:"Insider threat එකක් එන්නේ organization එකක් ඇතුළෙන් — employee කෙනෙක් හෝ contractor කෙනෙක් — ලෙසින්, ඔවුන්ගේ access misuse කරලා organization එකට හානි කරන එකෙන්. උදා: resign වෙන්න කලින් confidential client data copy කරන employee කෙනෙක්.", ta:"Insider அச்சுறுத்தல் என்பது ஒரு நிறுவனத்திற்குள் உள்ள ஒருவர் — ஊழியர் அல்லது ஒப்பந்ததாரர் — தங்கள் அணுகலை தவறாகப் பயன்படுத்தி நிறுவனத்திற்கு தீங்கு விளைவிப்பது. எ.கா: ராஜினாமா செய்வதற்கு முன் ரகசிய வாடிக்கையாளர் தரவை நகலெடுக்கும் ஊழியர்."}},

    { category: {en:"Password Reuse",si:"මුරපද නැවත භාවිතය",ta:"கடவுச்சொல் மறுபயன்பாடு"}, icon: "fa-repeat", color: "#f43f5e",
      keywords: {en:["password reuse","same password","reusing passwords"], si:["මුරපද නැවත භාවිතය","එකම මුරපදය"], ta:["கடவுச்சொல் மறுபயன்பாடு","அதே கடவுச்சொல்"]},
      question: {en:"What is password reuse?", si:"Password reuse කියන්නේ මොකක්ද?", ta:"கடவுச்சொல் மறுபயன்பாடு என்றால் என்ன?"},
      answer: {en:"Password reuse is using the same password across multiple accounts, which is risky — if one site is breached, all your accounts become vulnerable. Example: Using your email password for your bank account too.", si:"Password reuse කියන්නේ එකම password එක accounts කිහිපයකට use කිරීමයි, ඒක risky — site එකක් breach වුණොත් ඔබේ accounts ඔක්කොම vulnerable වෙනවා. උදා: ඔබේ email password එකම bank account එකටත් use කිරීම.", ta:"கடவுச்சொல் மறுபயன்பாடு என்பது ஒரே கடவுச்சொல்லை பல கணக்குகளில் பயன்படுத்துவது, இது ஆபத்தானது — ஒரு தளம் மீறப்பட்டால், உங்கள் அனைத்து கணக்குகளும் பாதிக்கப்படும். எ.கா: உங்கள் மின்னஞ்சல் கடவுச்சொல்லையே வங்கிக் கணக்கிற்கும் பயன்படுத்துவது."}},

    { category: {en:"Hacked Account",si:"හැක් වූ ගිණුම",ta:"ஹேக் செய்யப்பட்ட கணக்கு"}, icon: "fa-user-slash", color: "#dc2626",
      keywords: {en:["hacked account","account compromised","account breach","unauthorized access"], si:["හැක් වූ ගිණුම","ගිණුම අවදානමට"], ta:["ஹேக் செய்யப்பட்ட கணக்கு","கணக்கு மீறல்"]},
      question: {en:"What is the best response to a hacked account?", si:"හැක් වූ ගිණුමකට හොඳම ප්‍රතිචාරය කුමක්ද?", ta:"ஹேக் செய்யப்பட்ட கணக்கிற்கு சிறந்த பதில் என்ன?"},
      answer: {en:"Immediately change your password, enable MFA, log out of all sessions, and check for unauthorized activity. Example: If your email is hacked, also check if it was used to reset passwords on other linked accounts.", si:"වහාම password එක change කරන්න, MFA enable කරන්න, sessions ඔක්කොම log out කරන්න, unauthorized activity check කරන්න. උදා: ඔබේ email එක hack වුණොත්, linked accounts වල passwords reset කරන්න ඒක use කරලාද කියලත් check කරන්න.", ta:"உடனடியாக கடவுச்சொல்லை மாற்றவும், MFA-ஐ இயக்கவும், அனைத்து அமர்வுகளிலிருந்தும் வெளியேறவும், அங்கீகரிக்கப்படாத செயல்பாட்டைச் சரிபார்க்கவும். எ.கா: மின்னஞ்சல் ஹேக் செய்யப்பட்டால், மற்ற இணைக்கப்பட்ட கணக்குகளின் கடவுச்சொற்களை மீட்டமைக்க அது பயன்படுத்தப்பட்டதா எனச் சரிபார்க்கவும்."}},

    { category: {en:"Cyber Hygiene",si:"සයිබර් සනීපාරක්ෂාව",ta:"சைபர் சுகாதாரம்"}, icon: "fa-broom", color: "#22c55e",
      keywords: {en:["cyber hygiene","good habits","security habits"], si:["සයිබර් සනීපාරක්ෂාව","ආරක්ෂක පුරුදු"], ta:["சைபர் சுகாதாரம்","பாதுகாப்பு பழக்கங்கள்"]},
      question: {en:"What is cyber hygiene?", si:"Cyber hygiene කියන්නේ මොකක්ද?", ta:"cyber hygiene என்றால் என்ன?"},
      answer: {en:"Cyber hygiene means regular habits that keep you secure online — updating software, using strong passwords, and being cautious with links. Example: Reviewing app permissions monthly is a simple cyber hygiene habit.", si:"Cyber hygiene කියන්නේ ඔබව online secure තියාගන්න regular habits — software update කිරීම, strong passwords use කිරීම, links වලට careful වීම. උදා: app permissions මාසෙකට වතාවක් review කිරීම simple cyber hygiene habit එකක්.", ta:"Cyber hygiene என்பது உங்களை ஆன்லைனில் பாதுகாப்பாக வைத்திருக்கும் வழக்கமான பழக்கங்கள் — மென்பொருளை புதுப்பித்தல், வலுவான கடவுச்சொற்களைப் பயன்படுத்துதல், இணைப்புகளில் கவனமாக இருத்தல். எ.கா: மாதந்தோறும் செயலி அனுமதிகளை மறுஆய்வு செய்வது எளிய cyber hygiene பழக்கம்."}},

    { category: {en:"Cyber Awareness",si:"සයිබර් දැනුවත්භාවය",ta:"சைபர் விழிப்புணர்வு"}, icon: "fa-graduation-cap", color: "#8b5cf6",
      keywords: {en:["cyber awareness","general security","why is cyber security important","security awareness"], si:["සයිබර් දැනුවත්භාවය","ආරක්ෂක දැනුවත්භාවය"], ta:["சைபர் விழிப்புணர்வு","பாதுகாப்பு விழிப்புணர்வு"]},
      question: {en:"Why is cyber awareness important?", si:"සයිබර් දැනුවත්භාවය වැදගත් වන්නේ ඇයි?", ta:"cyber விழிப்புணர்வு ஏன் முக்கியம்?"},
      answer: {en:"Cyber awareness is the first line of defense — most breaches start with human error, not technical flaws. Example: A single employee clicking a phishing link can compromise an entire organization's network.", si:"Cyber awareness කියන්නේ defense එකේ first line එකයි — බොහෝ breaches පටන් ගන්නේ technical flaws වලින් නෙවෙයි, human error වලින්. උදා: employee කෙනෙක් phishing link එකක් click කිරීමෙන් organization එකේම network එකම compromise වෙන්න පුළුවන්.", ta:"Cyber விழிப்புணர்வு பாதுகாப்பின் முதல் வரிசை — பெரும்பாலான மீறல்கள் தொழில்நுட்பக் குறைபாடுகளால் அல்ல, மனித தவறுகளால் தொடங்குகின்றன. எ.கா: ஒரு ஊழியர் ஃபிஷிங் இணைப்பைக் கிளிக் செய்வது நிறுவனத்தின் முழு நெட்வொர்க்கையும் பாதிக்கலாம்."}}
];

function getLang() {
    return document.body.getAttribute('data-lang') || 'en';
}

function getLocalized(field, lang) {
    const l = lang || getLang();
    if (field && typeof field === 'object') {
        return field[l] || field.en || '';
    }
    return field || '';
}

function wordsOverlap(query, text) {
    const qWords = query.split(/\s+/).filter(w => w.length > 2);
    const tWords = text.toLowerCase();
    let score = 0;
    qWords.forEach(w => {
        if (tWords.includes(w)) score += 2;
    });
    return score;
}

function scoreItem(query, item) {
    const lang = getLang();
    let score = 0;
    const q = query.toLowerCase();

    const keywords = getLocalized(item.keywords, lang);
    if (Array.isArray(keywords)) {
        keywords.forEach(k => {
            if (q === k.toLowerCase()) score += 10;
            else if (q.includes(k.toLowerCase()) || k.toLowerCase().includes(q)) score += 6;
        });
    }

    const category = getLocalized(item.category, lang);
    if (category.toLowerCase().includes(q)) score += 5;

    const question = getLocalized(item.question, lang);
    const answer = getLocalized(item.answer, lang);

    score += wordsOverlap(q, question);
    score += wordsOverlap(q, answer) * 0.3;

    return score;
}

function runSearch(prefill) {
    const input = document.getElementById('search-input');
    if (prefill) input.value = prefill;

    const query = input.value.trim().toLowerCase();
    const resultsDiv = document.getElementById('search-results');

    if (!query) {
        resultsDiv.innerHTML = "";
        return;
    }

    const lang = getLang();
    const scored = faqData
        .map(item => ({ item, score: scoreItem(query, item) }))
        .filter(x => x.score > 0)
        .sort((a, b) => b.score - a.score);

    const t = siteTranslations[lang] || siteTranslations.en;

    if (scored.length === 0) {
        const randomSuggestions = faqData.slice(0, 4);
        resultsDiv.innerHTML = `
            <div class="search-no-result">
                <i class="fa-solid fa-circle-exclamation"></i> ${t.search_no_result} "${input.value}". ${t.search_try}
                <div class="suggestion-chips">
                    ${randomSuggestions.map(s => `<span class="suggestion-chip" onclick="runSearch('${getLocalized(s.question, lang).replace(/'/g, "")}')">${getLocalized(s.question, lang)}</span>`).join("")}
                </div>
            </div>`;
        return;
    }

    resultsDiv.innerHTML = scored.slice(0, 5).map(({ item }) => {
        const category = getLocalized(item.category, lang);
        const question = getLocalized(item.question, lang);
        const answer = getLocalized(item.answer, lang);
        return `
        <div class="search-result-card">
            <div class="result-header">
                <div class="result-icon-badge" style="background:${item.color}22; color:${item.color};">
                    <i class="fa-solid ${item.icon}"></i>
                </div>
                <div>
                    <span class="card-title-tags" style="margin-bottom:6px;">${category}</span>
                    <h4 style="margin:0;">${question}</h4>
                </div>
            </div>
            <p>${answer}</p>
        </div>`;
    }).join("");
}

/* ============================================================
   THREAT TRIAGE SIMULATION
   ============================================================ */
function checkAnswer() {
    const resultElement = document.getElementById('quiz-result');
    const lang = getLang();
    const t = siteTranslations[lang] || siteTranslations.en;
    resultElement.style.display = "block";
    resultElement.innerHTML = `<i class='fa-solid fa-circle-check'></i> <strong>${t.quiz_result}</strong>`;
}

/* ============================================================
   INITIALIZE ON PAGE LOAD
   ============================================================ */
function init() {
    // Set default language
    const defaultLang = 'en';
    document.body.setAttribute('data-lang', defaultLang);

    // Set active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === defaultLang);
    });

    // Render ticker
    renderTicker(defaultLang);

    // Translate all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (siteTranslations[defaultLang][key]) el.textContent = siteTranslations[defaultLang][key];
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (siteTranslations[defaultLang][key]) el.placeholder = siteTranslations[defaultLang][key];
    });

    // Load FAQ
    renderFAQ(defaultLang);

    // Language switcher events
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setLanguage(this.getAttribute('data-lang-btn'));
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}