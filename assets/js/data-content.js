/* ============================================================
   Cyber Awareness Hub - Exito
   data-content.js — Educational content (topics, FAQ, search, quiz)
   All strings exist in en / si / ta. Static data only — no logic.
   ============================================================ */

/* ------------------------------------------------------------
   TOPIC LIBRARY (learn.html)
   Each topic: id, icon, color, then trilingual fields.
   signs/steps are arrays of localized strings.
   scen: { text, isScam, explain } — one quick interactive check.
   ------------------------------------------------------------ */
const TOPICS = [

    {
        id: "phishing", icon: "fa-envelope-open-text", color: "#f87171",
        t: { en: "Phishing & Email Scams", si: "Phishing සහ Email Scams", ta: "ஃபிஷிங் & Email மோசடிகள்" },
        short: { en: "Spot fake emails, SMS and WhatsApp messages before you click.", si: "Click කිරීමට පෙර ව්‍යාජ emails, SMS සහ WhatsApp messages හඳුනාගන්න.", ta: "கிளிக் செய்வதற்கு முன் போலி emails, SMS மற்றும் WhatsApp செய்திகளை கண்டறியுங்கள்." },
        intro: { en: "Phishing is when scammers pretend to be someone you trust — your bank, your university, or a delivery company — to trick you into clicking a bad link, sharing a password, or opening an infected file. It is the most common way accounts get stolen.", si: "Phishing කියන්නේ scammers ලා ඔබ විශ්වාස කරන කෙනෙක් ලෙස — ඔබේ bank එක, විශ්වවිද්‍යාලය හෝ delivery company එකක් — පෙනී සිට, bad link එකක් click කරන්න, password එකක් share කරන්න හෝ දූෂිත file එකක් open කරන්න ඔබව රවට්ටන එකයි. Accounts ගන්න එන බහුලම විදිහ මේකයි.", ta: "ஃபிஷிங் என்பது மோசடியாளர்கள் உங்கள் நம்பிக்கைக்குரியவராக — வங்கி, பல்கலைக்கழகம் அல்லது டெலிவரி நிறுவனமாக — நடித்து, தீய link ஒன்றை கிளிக் செய்யவோ, password பகிரவோ, தொற்றுள்ள கோப்பை திறக்கவோ உங்களை ஏமாத்துவது. கணக்குகள் திருடப்படும் மிகப் பொதுவான வழி இதுவே." },
        signs: [
            { en: "Urgency and threats: 'Act now or your account will be closed.'", si: "හදිසි බව සහ තර්ජන: 'දැන්ම කරන්න, නැත්නම් account එක close වෙනවා.'", ta: "அவசரம் மற்றும் மிரட்டல்கள்: 'இப்போதே செய்யவும், இல்லையெனில் கணக்கு மூடப்படும்.'" },
            { en: "The sender address looks almost right — but not exactly right.", si: "Sender address එක ගොඩක් සමානයි — ඒත් හරියටම නෙවෙයි.", ta: "அனுப்புநர் address கிட்டத்தட்ட சரியாக — ஆனால் சரியாக இல்லாமல் இருக்கும்." },
            { en: "Links that lead to a different website than the text shows.", si: "Text එකේ පෙන්නන තැනට වඩා වෙනස් website එකකට යන links.", ta: "Text-இல் காட்டுவதை விட வேறு website-க்கு செல்லும் இணைப்புகள்." },
            { en: "Unexpected attachments, especially .exe, .zip or .apk files.", si: "අනපේක්ෂිත attachments — විශේෂයෙන් .exe, .zip හෝ .apk files.", ta: "எதிர்பாராத இணைப்புகள் — குறிப்பாக .exe, .zip அல்லது .apk கோப்புகள்." },
            { en: "Requests for passwords, OTPs, card numbers or NIC details.", si: "Passwords, OTPs, card numbers හෝ NIC විස්තර ඉල්ලීම්.", ta: "Passwords, OTP, card எண்கள் அல்லது NIC விவரங்கள் கோருதல்." }
        ],
        steps: [
            { en: "Stop and slow down — urgency is a trap, not an emergency.", si: "නවත්වලා හෙමින් හිතන්න — හදිසි බව කියන්නේ උගුල්ලක්, emergency එකක් නෙවෙයි.", ta: "நிறுத்தி நிதாண்டம் யோசியுங்கள் — அவசரம் என்பது ஒரு trap, உண்மையான அவசரம் அல்ல." },
            { en: "Hover over links to preview the real address before clicking.", si: "Click කිරීමට පෙර link එකට hover කරලා සැබෑ ලිපිනය බලන්න.", ta: "கிளிக் செய்வதற்கு முன் link மேல் hover செய்து உண்மையான address பார்க்கவும்." },
            { en: "Open the official app or website yourself instead of using the message.", si: "Message එකෙන් නෙවෙයි — ඔබම official app එක හෝ website එක open කරන්න.", ta: "செய்தியை பயன்படுத்தாமல், official app அல்லது website ஐ நீங்களே திறக்கவும்." },
            { en: "Never share OTPs or passwords — no real service will ask for them.", si: "OTPs හෝ passwords කවදාවත් share කරන්න එපා — සැබෑ service එකක් ඒවා අහන්නේ නැහැ.", ta: "OTP அல்லது password ஒருபோதும் பகிர வேண்டாம் — உண்மையான சேவை கேட்காது." },
            { en: "Report and delete: mark the message as phishing, then block the sender.", si: "Report කරලා delete කරන්න: message එක phishing ලෙස mark කරලා sender block කරන්න.", ta: "Report செய்து delete செய்யவும்: செய்தியை phishing ஆக mark செய்து sender-ஐ block செய்யவும்." }
        ],
        scen: {
            text: { en: "Email — From: ICBT Portal <support@icbt-student-portal.xyz> — “URGENT: Your student account expires today. Confirm your password here: icbt-portal-login.xyz/reset”", si: "Email — From: ICBT Portal <support@icbt-student-portal.xyz> — “ඇබෑර්ථයි: ඔබේ student account එක අද අවසන් වෙනවා. ඔබේ password එක මෙතනින් confirm කරන්න: icbt-portal-login.xyz/reset”", ta: "Email — From: ICBT Portal <support@icbt-student-portal.xyz> — “அவசரம்: உங்கள் student கணக்கு இன்று முடிவடைகிறது. உங்கள் password ஐ இங்கே confirm செய்யவும்: icbt-portal-login.xyz/reset”" },
            isScam: true,
            explain: { en: "Scam. The domain is not the official one, it pressures you with an urgent deadline, and it asks for your password — real portals never do that. Type the official address yourself instead.", si: "Scam එකක්. Domain එක නිල එක නෙවෙයි, හදිසි deadline එකකින් පීඩනය දෙනවා, password එක ඉල්ලනවා — සැබෑ portals කවදාවත් කරන්නේ නැහැ. නිල ලිපිනය ඔබම type කරන්න.", ta: "Scam. Domain அதிகாரப்பூர்வமானதல்ல, அவசர deadline-ஆல் அழுத்தம் கொடுக்கிறது, password கேட்கிறது — உண்மையான portals இப்படி செய்யாது. அதிகாரப்பூர்வ address ஐ நீங்களே type செய்யவும்." }
        }
    },

    {
        id: "social", icon: "fa-user-ninja", color: "#c084fc",
        t: { en: "Social Engineering", si: "සමාජ ඉංජිනේරු ශිල්පය", ta: "சமூக பொறியியல்" },
        short: { en: "How scammers use calls, chats and fake authority to manipulate you.", si: "Scammers ලා calls, chats සහ ව්‍යාජ බලය භාවිතයෙන් ඔබව කොහොමද පෙළඹවන්නේ.", ta: "மோசடியாளர்கள் அழைப்புகள், chats மற்றும் போலி அதிகாரத்தால் உங்களை கையாளும் விதம்." },
        intro: { en: "Social engineering attacks the person, not the computer. Scammers build fake trust by posing as IT support, a bank officer, a lecturer or even a friend in trouble — then use pressure and fear to make you act fast without checking.", si: "Social engineering කියන්නේ computer එකට වඩා මිනිසාට එරෙහිව ක්‍රියාත්මක වීමයි. Scammers ලා IT support, bank officer කෙනෙක්, lecturer කෙනෙක් හෝ අවුලේ වෙලා දුක් විඳින මිතුරෙක් ලෙස පෙනී සිට ව්‍යාජ විශ්වාසයක් ගොඩනගලා — පස්සේ පීඩනය සහ බය මගින් check නොකර ඉක්මනට ක්‍රියා කරන්න ඔබව පොළඹවනවා.", ta: "சமூக பொறியியல் என்பது கணினியை அல்ல, மனிதனை தாக்குவது. மோசடியாளர்கள் IT support, வங்கி அதிகாரி, விரிவுரையாளர் அல்லது சிக்கலில் இருக்கும் நண்பராக நடித்து போலி நம்பிக்கையை உருவாக்கி — பின் அழுத்தம் மற்றும் பயத்தால் சரிபார்க்காமல் விரைவாக செயல்பட உங்களை தூண்டுகிறார்கள்." },
        signs: [
            { en: "Pressure to act immediately, without time to think.", si: "හිතන්න වෙලාවක් නැතිව ක්ෂණිකම ක්‍රියා කරන්න පීඩනය.", ta: "யோசிக்க நேரம் இல்லாமல் உடனடியாக செயல்பட அழுத்தம்." },
            { en: "Asks for codes, passwords or remote access to your device.", si: "Codes, passwords හෝ ඔබේ device එකට remote access ඉල්ලනවා.", ta: "Codes, passwords அல்லது உங்கள் சாதனத்திற்கு remote access கோருகிறது." },
            { en: "Flattery or fear used to push your emotions.", si: "ඔබේ හැඟීම් පෙළඹවීමට හිතකර වචන හෝ බය භාවිතා කරනවා.", ta: "உங்கள் உணர்ச்சிகளை தூண்ட புகழ்ச்சி அல்லது பயம்." },
            { en: "Refuses verification: 'Don't call anyone — just trust me.'", si: "Verify කිරීම ප්‍රතික්ෂේප කරනවා: 'කවුරුවත් call කරන්න එපා — මට විශ්වාස කරන්න.'", ta: "சரிபார்ப்பை மறுக்கிறது: 'யாரையும் call செய்யாதீங்க — என்னை நம்புங்கள்.'" },
            { en: "Contact arrives out of nowhere with a big problem to solve.", si: "කිසිම සබඳතාවක් නැතිව, විශාල ප්‍රශ්නයක් විසඳන්න contact එකක් එනවා.", ta: "எங்கிருந்தோ திடீரென ஒரு பெரிய பிரச்சினையுடன் தொடர்பு வருகிறது." }
        ],
        steps: [
            { en: "Hang up and call back on the official number yourself.", si: "Call එක cut කරලා ඔබම නිල අංකයට ආයෙ call කරන්න.", ta: "அழைப்பை துண்டித்து, அதிகாரப்பூர்வ எண்ணுக்கு நீங்களே call செய்யவும்." },
            { en: "Never share OTPs or login codes — with anyone.", si: "OTPs හෝ login codes කවදාවත් — කාටවත් — share කරන්න එපා.", ta: "OTP அல்லது login codes யாருடனும் ஒருபோதும் பகிர வேண்டாம்." },
            { en: "Never install remote-access apps for strangers.", si: "නොහඳුනන අයට remote-access apps install කරලා දෙන්න එපා.", ta: "தெரியாதவர்களுக்கு remote-access apps ஒருபோதும் install செய்ய வேண்டாம்." },
            { en: "Talk to a family member or friend before sending money.", si: "මුදල් යවන්න කලින් පවුලේ කෙනෙක්ට හෝ මිතුරෙක්ට කතා කරන්න.", ta: "பணம் அனுப்புவதற்கு முன் குடும்பத்தினர் அல்லது நண்பரிடம் பேசுங்கள்." },
            { en: "Report impersonation to the real institution's support team.", si: "පුද්ගල ව්‍යාජකරණ වාර්තා කරන්න ඒ ආයතනයේම support team එකට.", ta: "போலி அடையாளத்தை அந்த நிறுவனத்தின் support team-இடம் report செய்யவும்." }
        ],
        scen: {
            text: { en: "WhatsApp — Unknown number: “Hello, this is the university IT department. We found a problem in your account. Send me the 6-digit code you just received so I can fix it.”", si: "WhatsApp — නොහඳුනන අංකයකින්: “ආයුබෝවන්, මම university IT department එකෙන්. ඔබේ account එකේ ප්‍රශ්නයක් හමු වුණා. මට fix කරන්න පුළුවන් වෙන්න ඔබට දැන් ආපු 6-digit code එක යවන්න.”", ta: "WhatsApp — தெரியாத எண்: “வணக்கம், இது பல்கலைக்கழக IT department. உங்கள் கணக்கில் பிரச்சினை கண்டுபிடித்தோம். சரி செய்ய உங்களுக்கு இப்போது வந்த 6-digit code ஐ எனக்கு அனுப்புங்கள்.”" },
            isScam: true,
            explain: { en: "Scam. That 6-digit code is your MFA key — sharing it hands over your account. Real university staff never need your codes; they work from their side.", si: "Scam එකක්. ඒ 6-digit code එක ඔබේ MFA key එක — share කළොත් account එක අතට යනවා. සැබෑ university staff ලාට ඔබේ codes ඕන වෙන්නේ නැහැ; එයාලා වැඩ කරන්නේ තමන් පැත්තෙන්.", ta: "Scam. அந்த 6-digit code தான் உங்கள் MFA key — பகிர்ந்தால் கணக்கு கை மாறும். உண்மையான staff உங்கள் codes தேவைப்படாது; அவர்கள் தங்கள் பக்கத்திலிருந்து வேலை செய்வார்கள்." }
        }
    },

    {
        id: "passwords", icon: "fa-key", color: "#22d3ee",
        t: { en: "Password Security & MFA", si: "මුරපද ආරක්ෂාව සහ MFA", ta: "கடவுச்சொல் பாதுகாப்பு & MFA" },
        short: { en: "Strong passphrases plus MFA — the 2-minute habit that protects everything.", si: "ප්‍රබල passphrases සහ MFA — හැම දෙයක් ආරක්ෂා කරන මිනිත්තු 2ක පුරුද්ද.", ta: "வலுவான passphrases மற்றும் MFA — அனைத்தையும் பாதுகாக்கும் 2 நிமிட பழக்கம்." },
        intro: { en: "Your passwords guard your email, social media, bank and student accounts. Weak or reused passwords let one leak open many doors. Long passphrases plus MFA stop most attacks — even after a password leaks.", si: "ඔබේ passwords ආරක්ෂා කරන්නේ ඔබේ email, social media, bank සහ student accounts. දුර්වල හෝ ආයෙ ආයෙ පාවිච්චි කරපු passwords නිසා leak එකක් දොර ගොඩක් විවෘත කරනවා. දිග passphrase එකක් + MFA එකතු වෙලා වැඩි ප්‍රහාර නවත්වනවා — password එකක් leak වුණත්.", ta: "உங்கள் passwords பாதுகாக்கின்றன email, social media, வங்கி மற்றும் student கணக்குகளை. பலவீனமான அல்லது மீண்டும் பயன்படுத்தப்படும் passwords ஒரு leak-ஆல் பல கதவுகளை திறக்கும். நீளமான passphrases + MFA பெரும்பாலான தாக்குதல்களை தடுக்கும் — password leak ஆனாலும்." },
        signs: [
            { en: "Passwords built from your name, birthday or phone number.", si: "ඔබේ නම, උපන් දිනය හෝ phone number එකෙන් හදපු passwords.", ta: "உங்கள் பெயர், பிறந்த நாள் அல்லது phone எண்ணால் செய்யப்பட்ட passwords." },
            { en: "The same password used everywhere.", si: "ඔක්කොම තැන් වල එකම password එක.", ta: "எல்லா இடத்திலும் ஒரே password." },
            { en: "Passwords saved in plain notes or chats.", si: "Passwords plain notes වල හෝ chats වල save කිරීම.", ta: "Passwords plain notes அல்லது chats-இல் சேமித்தல்." },
            { en: "MFA skipped because it 'takes time'.", si: "MFA 'වෙලා යනවා' කියලා මඟහරින එක.", ta: "MFA 'நேரம் ஆகும்' என்று தவிர்த்தல்." },
            { en: "Sharing passwords with friends or classmates.", si: "මිතුරන්ට හෝ පන්ති යුවළට passwords share කිරීම.", ta: "நண்பர்கள் அல்லது class நண்பர்களுடன் passwords பகிர்தல்." }
        ],
        steps: [
            { en: "Build passphrases: 3–4 random words plus a number and symbol (e.g. 'Blue-Mango-Train-92!').", si: "Passphrases හදන්න: අහඹු වචන 3–4ක් + අංකයක් සහ සංකේතයක් (උදා: 'Blue-Mango-Train-92!').", ta: "Passphrases உருவாக்கவும்: சீரற்ற வார்த்தைகள் 3–4 + எண் மற்றும் சின்னம் (எ.கா: 'Blue-Mango-Train-92!')." },
            { en: "Give every important account its own unique password.", si: "වැදගත් හැම account එකකටම තමන්ගේම unique password එකක් දෙන්න.", ta: "ஒவ்வொரு முக்கிய கணக்குக்கும் தனித்துவமான password கொடுங்கள்." },
            { en: "Let a password manager remember them for you.", si: "ඒවා මතක තියාගන්න password manager එකක් පාවිච්චි කරන්න.", ta: "அவற்றை நினைவில் கொள்ள password manager பயன்படுத்துங்கள்." },
            { en: "Turn on MFA with an authenticator app — stronger than SMS.", si: "MFA සක්‍රීය කරන්න authenticator app එකකින් — SMS වලට වඩා ප්‍රබලයි.", ta: "Authenticator app மூலம் MFA இயக்கவும் — SMS-ஐ விட வலுவானது." },
            { en: "Changed a password that may have leaked? Do it within minutes, not weeks.", si: "Leak වෙන්න පුළුවන් password එකක්? සති ගණන් නෙවෙයි — මිනිත්තු ගණනකින් වෙනස් කරන්න.", ta: "Leak ஆக வாய்ப்புள்ள password? வாரங்கள் அல்ல — நிமிடங்களில் மாற்றவும்." }
        ],
        scen: {
            text: { en: "Your friend says: “I use Ridma2015 for everything — easy to remember!”", si: "ඔබේ යාළුවා කියනවා: “මම ඔක්කොම තැන් වලට Ridma2015 use කරනවා — මතක තියාගන්න ලේසි!”", ta: "உங்கள் நண்பர் சொல்கிறார்: “நான் எல்லா இடத்திலும் Ridma2015 பயன்படுத்துவேன் — நினைவில் வைக்க எளிது!”" },
            isScam: true,
            explain: { en: "Risky. A name plus a year is one of the first combinations attackers try, and reusing it means one leak opens every account. A random passphrase is just as easy to type.", si: "අවදානම්. නමක් + අවුරුද්දක් කියන්නේ attackers ලා මුලින්ම try කරන combination වලින් එකක්; ඒ වගේම reuse කිරීම නිසා leak එකක් ඔබේ ඔක්කොම accounts විවෘත කරනවා. අහඹු passphrase එකක් type කරන්නත් ඒ තරම්ම ලේසියි.", ta: "ஆபத்தானது. பெயர் + வருடம் — attackers முதலில் முயற்சிக்கும் சேர்க்கைகளில் ஒன்று; reuse செய்தால் ஒரு leak எல்லா கணக்குகளையும் திறக்கும். சீரற்ற passphrase தட்டச்சு செய்ய அதே அளவு எளிது." }
        }
    },

    {
        id: "malware", icon: "fa-virus", color: "#fb7185",
        t: { en: "Malware & Ransomware", si: "Malware සහ Ransomware", ta: "Malware & Ransomware" },
        short: { en: "Viruses, fake 'cleaners' and locked files — and how to avoid the traps.", si: "Viruses, ව්‍යාජ 'cleaners' සහ lock වූ files — උගුල් වළක්වගන්නේ කොහොමද.", ta: "வைரஸ், போலி 'cleaners' மற்றும் lock ஆன கோப்புகள் — traps தவிர்க்கும் விதம்." },
        intro: { en: "Malware is any software built to damage, spy or take unauthorized access. Ransomware is the scariest type: it locks (encrypts) your files and demands payment. Infections usually start with a single tap — a cracked app, a fake warning, or an attachment you opened.", si: "Malware කියන්නේ හානි කරන්න, spy කරන්න හෝ unauthorized access ගන්න හදපු ඕනම software එකක්. Ransomware කියන්නේ ඒ වලින් බියකරම විදිහ: ඔබේ files lock (encrypt) කරලා මුදල් demand කරනවා. ආසාදන පටන් ගන්නේ ගොඩක් වෙලාවට එක tap එකකින් — cracked app එකක්, ව්‍යාජ warning එකක් හෝ ඔබ open කරපු attachment එකකින්.", ta: "Malware என்பது சேதம் விளைவிக்கவோ, உளவு பார்க்கவோ, அனுமதிக்காத அணுகல் பெறவோ உருவாக்கப்பட்ட எந்த software-உம். Ransomware மிகவும் பயங்கரமான வகை: உங்கள் கோப்புகளை lock (encrypt) செய்து பணம் கோரும். தொற்று பெரும்பாலும் ஒரு tap-இல் தொடங்கும் — cracked app, போலி எச்சரிக்கை அல்லது நீங்கள் திறந்த இணைப்பு." },
        signs: [
            { en: "Pop-ups shouting 'Your device is infected!'", si: "'ඔබේ device එක infected වෙලා!' කියලා කෑගසන pop-ups.", ta: "'உங்கள் சாதனம் பாதிக்கப்பட்டது!' என கத்தும் pop-ups." },
            { en: "Cracked or pirated apps and games.", si: "Cracked හෝ pirated apps සහ games.", ta: "Cracked அல்லது pirated apps மற்றும் games." },
            { en: "Files with double endings like invoice.pdf.exe.", si: "invoice.pdf.exe වගේ double endings තියෙන files.", ta: "invoice.pdf.exe போன்ற double endings உள்ள கோப்புகள்." },
            { en: "A device that suddenly turns slow, hot or drains battery.", si: "හදිසියෙන් slow, රත් වෙන හෝ battery කාන device එකක්.", ta: "திடீரென மந்தமாகும், வெப்பமடையும் அல்லது battery உறிஞ்சும் சாதனம்." },
            { en: "Browser redirects and toolbars you never chose.", si: "ඔබ කවදාවත් තෝරාගත් නැති browser redirects සහ toolbars.", ta: "நீங்கள் தேர்வு செய்யாத browser redirects மற்றும் toolbars." }
        ],
        steps: [
            { en: "Install apps only from official stores — and read their permissions.", si: "Apps install කරන්නේ official stores වලින් විතරක් — permissions වලටත් බලන්න.", ta: "Apps அதிகாரப்பூர்வ stores-இலிருந்து மட்டும் install செய்யவும் — permissions படிக்கவும்." },
            { en: "Keep your operating system and apps on automatic updates.", si: "Operating system එක සහ apps automatic updates මත තියාගන්න.", ta: "Operating system மற்றும் apps தானியங்கி updates-இல் வையுங்கள்." },
            { en: "Never enable 'install unknown apps' for browsers or messengers.", si: "Browsers වලට හෝ messengers වලට 'install unknown apps' කවදාවත් enable කරන්න එපා.", ta: "Browsers அல்லது messengers-க்கு 'install unknown apps' ஒருபோதும் இயக்க வேண்டாம்." },
            { en: "Keep offline backups of files you cannot lose.", si: "අහිමි කරගන්න බැරි files වල offline backups තියාගන්න.", ta: "இழக்க முடியாத கோப்புகளின் offline backups வைத்திருங்கள்." },
            { en: "Hit by ransomware? Don't pay. Restore from backup, report, get help.", si: "Ransomware වැළඳුණාද? Pay කරන්න එපා. Backup එකෙන් restore කරලා, report කරලා, උදව් ගන්න.", ta: "Ransomware பாதிப்பா? பணம் கொடுக்க வேண்டாம். Backup-இலிருந்து restore செய்து, report செய்யவும், உதவி பெறவும்." }
        ],
        scen: {
            text: { en: "Pop-up on your phone: “⚠ 3 viruses found! Clean your phone NOW with TurboCleanerPro.apk — free download.”", si: "ඔබේ phone එකේ pop-up එකක්: “⚠ viruses 3ක් හමු වුණා! ඔබේ phone එක දැන්ම clean කරන්න TurboCleanerPro.apk — free download.”", ta: "உங்கள் phone-இல் pop-up: “⚠ வைரஸ் 3 கண்டுபிடித்தது! உங்கள் phone ஐ இப்போதே clean செய்யுங்கள் TurboCleanerPro.apk — free download.”" },
            isScam: true,
            explain: { en: "Scam. Real security alerts come from the antivirus already installed on your device — not from random pop-ups. This fake 'cleaner' is the actual malware.", si: "Scam එකක්. සැබෑ security alerts එන්නේ ඔබේ device එකේ දැනටමත් install වෙලා තියෙන antivirus එකෙන් — අහඹු pop-ups වලින් නෙවෙයි. මේ ව්‍යාජ 'cleaner' එක තමයි ඇත්ත malware එක.", ta: "Scam. உண்மையான security alerts உங்கள் சாதனத்தில் ஏற்கனவே install ஆன antivirus-இலிருந்து வரும் — சீரற்ற pop-ups-இலிருந்து அல்ல. இந்த போலி 'cleaner' தான் உண்மையான malware." }
        }
    },

    {
        id: "privacy", icon: "fa-fingerprint", color: "#a78bfa",
        t: { en: "Online Privacy & Digital Footprint", si: "Online පෞද්ගලිකත්වය සහ Digital Footprint", ta: "ஆன்லைன் தனியுரிமை & டிஜிட்டல் தடம்" },
        short: { en: "Control what the internet knows about you — and what you leave behind.", si: "Internet එක ඔබ ගැන දන්නේ මොනවද, ඔබ පිටුපස ඉතිරු කරන්නේ මොනවද පාලනය කරන්න.", ta: "இணையம் உங்களை பற்றி அறிவதையும், நீங்கள் விட்டுச் செல்வதையும் கட்டுப்படுத்துங்கள்." },
        intro: { en: "Everything you post, search and share builds a digital footprint. Scammers and identity thieves combine small public details — your birthday, a photo of your NIC, your school, your pet's name — into attacks that feel personal.", si: "ඔබ post කරන, search කරන සහ share කරන හැම දෙයක්ම digital footprint එකක් හදනවා. Scammers සහ identity thieves කුඩා public විස්තර — ඔබේ උපන් දිනය, NIC ඡායාරූපයක්, පාසල, පැටවාගේ නම — එකට ගෙන පෞද්ගලික බවක් දැනෙන ප්‍රහාර හදනවා.", ta: "நீங்கள் post, search மற்றும் share செய்யும் ஒவ்வொன்றும் டிஜிட்டல் தடத்தை உருவாக்கும். மோசடியாளர்கள் மற்றும் அடையாள திருடர்கள் சிறிய பொது விவரங்களை — பிறந்த நாள், NIC படம், பள்ளி, செல்லப்பிராணி பெயர் — சேர்த்து தனிப்பட்டதாக உணரும் தாக்குதல்களை உருவாக்குகிறார்கள்." },
        signs: [
            { en: "Oversharing travel plans, schedules or ID documents.", si: "Travel plans, schedules හෝ ID documents වැඩිය ප්‍රසිද්ධ කිරීම.", ta: "பயண திட்டங்கள், schedules அல்லது ID ஆவணங்களை அதிகம் பங்கிடுதல்." },
            { en: "Using personal facts (pet, birthday, street) as security answers.", si: "Security answers වලට පෞද්ගලික කරුණු (පැටවා, උපන් දිනය, ගල) යෙදීම.", ta: "பாதுகாப்பு பதில்களுக்கு தனிப்பட்ட உண்மைகளை (செல்லப்பிராணி, பிறந்த நாள், தெரு) பயன்படுத்துதல்." },
            { en: "Apps holding more permissions than their job needs.", si: "ඒවාගේ වැඩකට අවශ්‍යට වඩා permissions දුන් apps.", ta: "அவற்றின் வேலைக்கு தேவையானதை விட அதிக permissions வைத்துள்ள apps." },
            { en: "Old public accounts you forgot you own.", si: "ඔබට අයිති බව අමතක වූ පරණ public accounts.", ta: "உங்களுடையவை என மறந்த பழைய public கணக்குகள்." },
            { en: "Quizzes that ask lots of personal questions.", si: "පෞද්ගලික ප්‍රශ්න ගොඩක් අහන quizzes.", ta: "அதிக தனிப்பட்ட கேள்விகள் கேட்கும் quizzes." }
        ],
        steps: [
            { en: "Set personal profiles to friends-only — and review them monthly.", si: "පෞද්ගලික profiles friends-only කරන්න — මාසෙකට වරක් review කරන්න.", ta: "தனிப்பட்ட profiles friends-only ஆக அமைத்து — மாதந்தோறும் மீள்பார்க்கவும்." },
            { en: "Delete old posts you wouldn't show a stranger in person.", si: "නොහඳුනන කෙනෙක්ට මුහුණට පෙන්වන්න බැරි පරණ posts delete කරන්න.", ta: "தெரியாதவரிடம் நேரில் காட்ட முடியாத பழைய posts நீக்கவும்." },
            { en: "Use a different email for your most important accounts.", si: "වැදගත්ම accounts වලට වෙනම email එකක් පාවිච්චි කරන්න.", ta: "மிக முக்கிய கணக்குகளுக்கு வேறு email பயன்படுத்துங்கள்." },
            { en: "Check app permissions and remove what isn't needed.", si: "App permissions බලලා අවශ්‍ය නැති ඒවා අයින් කරන්න.", ta: "App permissions பார்த்து தேவையற்றவற்றை நீக்கவும்." },
            { en: "Check haveibeenpwned.com to see if your email appeared in a breach.", si: "ඔබේ email එක breach එකකද කියලා බලන්න haveibeenpwned.com.", ta: "உங்கள் email breach-இல் தோன்றியதா என haveibeenpwned.com-இல் சரிபார்க்கவும்." }
        ],
        scen: {
            text: { en: "Facebook quiz: “Answer these 12 fun questions — your first pet, your mother's maiden name, the street you grew up on — and find your celebrity twin!”", si: "Facebook quiz එකක්: “මේ විනෝද ප්‍රශ්න 12ට පිළිතුරු දෙන්න — ඔබේ මුල්ම පැටවාගේ නම, අම්මගේ බැප්ටිස්ම නම, ඔබ හැදුණු ගල — ඉතින් ඔබේ celebrity twin හමු වෙන්න!”", ta: "Facebook quiz: “இந்த 12 சுவாரஸ்யமான கேள்விகளுக்கு பதிலளியுங்கள் — உங்கள் முதல் செல்லப்பிராணி, உங்கள் தாயின் பெயர், வளர்ந்த தெரு — உங்கள் celebrity twin ஐ கண்டுபிடியுங்கள்!”" },
            isScam: true,
            explain: { en: "Risky. Those 'fun' questions are exactly the answers used for security questions and password hints. This is data harvesting dressed as a game.", si: "අවදානම්. ඒ 'විනෝද' ප්‍රශ්න කියන්නේ security questions වලට සහ password hints වලට පාවිච්චි වෙන පිළිතුරු. මේක ක්‍රීඩාවක් ලෙස හැංගිලා තියෙන data harvesting එකක්.", ta: "ஆபத்தானது. அந்த 'சுவாரஸ்ய' கேள்விகள் security questions மற்றும் password hints-க்கு பயன்படும் பதில்கள் தான். இது விளையாட்டாக மறைக்கப்பட்ட data harvesting." }
        }
    },

    {
        id: "links", icon: "fa-link", color: "#fbbf24",
        t: { en: "Fake Links & Lookalike Sites", si: "ව්‍යාජ Links සහ Lookalike Sites", ta: "போலி இணைப்புகள் & ஒத்த தளங்கள்" },
        short: { en: "Lookalike domains and short links — the small details that give scams away.", si: "Lookalike domains සහ short links — scams හෙළිකරන කුඩා විස්තර.", ta: "ஒத்த domains மற்றும் சிறு இணைப்புகள் — மோசடிகளை வெளிப்படுத்தும் சிறு விவரங்கள்." },
        intro: { en: "Fake websites copy real ones almost perfectly. The address bar is often the only difference: extra letters, swapped characters, or a strange ending like .xyz. Checking it takes two seconds and blocks most link-based scams.", si: "ව්‍යාජ websites සැබෑ ඒවා ගොඩක් හරියටම copy කරනවා. වෙනස බොහෝවිට තියෙන්නේ address bar එකේ: අමුතු අකුරු, මාරු වූ අනුකුරු හෝ .xyz වගේ විදිහක්. ඒක බැලීමට තත්පර 2යි — ඒත් link scams ගොඩක් නවත්වනවා.", ta: "போலி websites உண்மையானவற்றை கிட்டத்தட்ட முழுமையாக copy செய்யும். வித்தியாசம் பெரும்பாலும் address bar-இல் தான்: கூடுதல் எழுத்துக்கள், மாற்றப்பட்ட எழுத்துக்கள் அல்லது .xyz போன்ற விசித்திரமான முடிவு. அதை பார்க்க இரண்டு வினாடிகள் — ஆனால் link மோசடிகளை தடுக்கும்." },
        signs: [
            { en: "Swapped characters: faceb00k, paypa1, g00gle.", si: "මාරු වූ අනුකුරු: faceb00k, paypa1, g00gle.", ta: "மாற்றப்பட்ட எழுத்துக்கள்: faceb00k, paypa1, g00gle." },
            { en: "Strange endings (.xyz, .top, .club) on 'official' sites.", si: "'නිල' sites වල අමුතු endings (.xyz, .top, .club).", ta: "'அதிகாரப்பூர்வ' தளங்களில் விசித்திரமான endings (.xyz, .top, .club)." },
            { en: "Long URLs hiding the real domain behind slashes.", si: "ඇත්ත domain එක slashes පිටුපස සැඟවූ දිග URLs.", ta: "உண்மையான domain-ஐ slashes-க்கு பின்னால் மறைக்கும் நீண்ட URLs." },
            { en: "Short links that hide where they really go.", si: "ඇත්තට යන තැන සැඟවූ short links.", ta: "உண்மையாக செல்லும் இடத்தை மறைக்கும் சிறு இணைப்புகள்." },
            { en: "Trusting the padlock icon alone — HTTPS only means encrypted.", si: "Padlock icon එක විතරක් විශ්වාස කිරීම — HTTPS කියන්නේ encrypt වීම විතරයි.", ta: "Padlock icon மட்டும் நம்புதல் — HTTPS என்பது encrypt என்பதை மட்டுமே குறிக்கும்." }
        ],
        steps: [
            { en: "Read the domain from right to left — the true site sits just before the first single '/'.", si: "Domain එක දකුණෙන් වමට කියවන්න — ඇත්ත site එක තියෙන්නේ පළමු '/' එකට කලින්.", ta: "Domain-ஐ வலமிருந்து இடமாக படியுங்கள் — உண்மையான தளம் முதல் '/'-க்கு முன் இருக்கும்." },
            { en: "Type critical addresses yourself, or use bookmarks.", si: "වැදගත් addresses ඔබම type කරන්න, නැත්නම් bookmarks පාවිච්චි කරන්න.", ta: "முக்கிய addresses நீங்களே type செய்யவும், அல்லது bookmarks பயன்படுத்தவும்." },
            { en: "Never scan QR codes from strangers or posters you can't verify.", si: "නොහඳුනන අයගෙන් හෝ verify කරන්න බැරි posters වල QR codes කවදාවත් scan කරන්න එපා.", ta: "தெரியாதவர்களின் அல்லது சரிபார்க்க முடியாத posters-இன் QR codes ஒருபோதும் scan செய்ய வேண்டாம்." },
            { en: "Treat 'you have won' links as fake until proven real.", si: "'ඔබ දිනුවා' links ඇත්ත බව ඔප්පු වෙනකම් ව්‍යාජ ලෙස සලකන්න.", ta: "'நீங்கள் வென்றீர்கள்' இணைப்புகளை உண்மை என நிரூபிக்கப்படும் வரை போலியாக நடத்துங்கள்." }
        ],
        scen: {
            text: { en: "SMS: “Your parcel is held at the post office. Pay the Rs. 250 release fee at: https://slpost-release.online/pay”", si: "SMS එකක්: “ඔබේ parcel එක post office එකේ තියෙනවා. Rs. 250 release fee එක ගෙවන්න මෙතනින්: https://slpost-release.online/pay”", ta: "SMS: “உங்கள் parcel தபால் அலுவலகத்தில் வைக்கப்பட்டுள்ளது. Rs. 250 release fee ஐ இங்கே செலுத்தவும்: https://slpost-release.online/pay”" },
            isScam: true,
            explain: { en: "Scam. It borrows the postal service's name but sits on a strange domain and asks for a small payment — a classic parcel-fee phishing trip.", si: "Scam එකක්. ඒක postal service එකේ නම පාවිච්චි කරනවා, ඒත් අමුතු domain එකක තියෙනවා, කුඩා ගෙවීමක් ඉල්ලනවා — classic parcel-fee phishing එකක්.", ta: "Scam. தபால் சேவையின் பெயரை பயன்படுத்துகிறது, ஆனால் விசித்திரமான domain-இல் இருக்கிறது, சிறு பணம் கேட்கிறது — கிளாசிக் parcel-fee ஃபிஷிங்." }
        }
    },

    {
        id: "jobs", icon: "fa-briefcase", color: "#34d399",
        t: { en: "Job & Money Scams", si: "Job සහ මූල්‍ය Scams", ta: "வேலை & பணம் மோசடிகள்" },
        short: { en: "Fake job offers, advance-fee traps and 'easy money' — the scams this hub was built around.", si: "ව්‍යාජ job offers, advance-fee උගුලු සහ 'ලේසි මුදල්' — මේ hub එක හදපු ප්‍රධාන scams.", ta: "போலி வேலை வாய்ப்புகள், advance-fee traps மற்றும் 'எளிதான பணம்' — இந்த மையம் உருவான மோசடிகள்." },
        intro: { en: "Scammers advertise attractive jobs, internships or easy 'work from home' income. Once you respond, they ask for money — registration fees, training kits, security deposits — or collect your NIC and bank details for identity fraud. Remember the golden rule: real employers pay you; they never charge you.", si: "Scammers ලා ආකර්ෂණීය jobs, internships හෝ ලේසි 'work from home' ආදායම් advertise කරනවා. ඔබ respond කළාම මුදල් ඉල්ලනවා — registration fees, training kits, security deposits — නැත්නම් identity fraud සඳහා ඔබේ NIC සහ bank විස්තර එකතු කරනවා. රන් නීතිය මතක තියාගන්න: සැබෑ employers ලා ඔබට ගෙවනවා; ඔබෙන් අරගන්නේ නැහැ.", ta: "மோசடியாளர்கள் கவர்ச்சிகரமான வேலைகள், internships அல்லது எளிதான 'work from home' வருமானத்தை விளம்பரப்படுத்துகிறார்கள். நீங்கள் பதிலளித்தவுடன் பணம் கேட்பார்கள் — registration fees, training kits, security deposits — அல்லது identity மோசடிக்கு உங்கள் NIC மற்றும் வங்கி விவரங்களை சேகரிப்பார்கள். பொன்மொழி: உண்மையான நிறுவனங்கள் உங்களுக்கு பணம் கொடுக்கும்; உங்களிடம் வசூலிக்காது." },
        signs: [
            { en: "Money requested for training, kits, registration or deposits.", si: "Training, kits, registration හෝ deposits සඳහා මුදල් ඉල්ලීම.", ta: "Training, kits, registration அல்லது deposits-க்கு பணம் கோருதல்." },
            { en: "Contact only through Gmail, Yahoo or WhatsApp accounts.", si: "සම්බන්ධතාවය තියෙන්නේ Gmail, Yahoo හෝ WhatsApp accounts වලින් විතරයි.", ta: "தொடர்பு Gmail, Yahoo அல்லது WhatsApp கணக்குகள் மூலமாக மட்டும்." },
            { en: "Big pay for simple tasks that sound too easy.", si: "ඉතා ලේසි කියලා දෙන simple වැඩ වලට විශාල ගෙවීම්.", ta: "மிக எளிதான வேலைகளுக்கு பெரிய ஊதியம்." },
            { en: "NIC, passport or bank details collected before any real interview.", si: "සැබෑ interview එකකට කලින් NIC, passport හෝ bank විස්තර එකතු කිරීම.", ta: "உண்மையான interview-க்கு முன்பே NIC, passport அல்லது வங்கி விவரங்கள் சேகரித்தல்." },
            { en: "Pressure to 'confirm your position' within hours.", si: "පැය ගණනකින් 'ඔබේ position එක confirm කරන්න' කියන පීඩනය.", ta: "சில மணி நேரத்தில் 'உங்கள் இடத்தை confirm செய்யுங்கள்' என்ற அழுத்தம்." }
        ],
        steps: [
            { en: "Apply through official career pages or verified recruiters only.", si: "Apply කරන්නේ official career pages හරහා හෝ verified recruiters හරහා විතරක්.", ta: "அதிகாரப்பூர்வ career pages அல்லது verified recruiters மூலம் மட்டுமே apply செய்யவும்." },
            { en: "Check the company in official business registers.", si: "Company එක නිල business registers වල check කරන්න.", ta: "நிறுவனத்தை அதிகாரப்பூர்வ business registers-இல் சரிபார்க்கவும்." },
            { en: "Never pay any recruitment or verification fee.", si: "Recruitment හෝ verification fee එකක් කවදාවත් ගෙවන්න එපා.", ta: "Recruitment அல்லது verification fee ஒருபோதும் செலுத்த வேண்டாம்." },
            { en: "Share documents only after identity is verified, via official portals.", si: "Documents share කරන්නේ අනන්‍යතාව verify වීමෙන් පස්සේ, official portals හරහා විතරයි.", ta: "ஆவணங்களை அடையாளம் உறுதிப்படுத்தப்பட்ட பின், official portals மூலம் மட்டும் பகிரவும்." },
            { en: "Scammed? Report to the police and your bank immediately — speed matters.", si: "Scam වුණාද? ක්ෂණිකම පොලිසියට සහ ඔබේ bank එකට report කරන්න — වේගය වැදගත්.", ta: "மோசடி ஆனதா? உடனடியாக போலீசிற்கும் வங்கிக்கும் report செய்யவும் — வேகம் முக்கியம்." }
        ],
        scen: {
            text: { en: "Email — From: hr.recruitments2024@gmail.com — “Congratulations! You are selected. Pay a refundable Rs. 2,000 verification deposit today to confirm your position.”", si: "Email — From: hr.recruitments2024@gmail.com — “ජය ග්‍රැහී! ඔබ select වෙලා. ඔබේ position එක confirm කරන්න අදම refundable Rs. 2,000 verification deposit එකක් ගෙවන්න.”", ta: "Email — From: hr.recruitments2024@gmail.com — “வாழ்த்துக்கள்! நீங்கள் தேர்ந்தெடுக்கப்பட்டீர்கள். உங்கள் இடத்தை confirm செய்ய இன்றே திரும்பப் பெறக்கூடிய Rs. 2,000 verification deposit செலுத்தவும்.”" },
            isScam: true,
            explain: { en: "Scam. Real companies don't recruit through personal Gmail accounts, and no legitimate employer charges deposits. A 'refundable fee' is the signature of the advance-fee scam.", si: "Scam එකක්. සැබෑ companies ලා recruit කරන්නේ පෞද්ගලික Gmail accounts වලින් නෙවෙයි, ඒ වගේම නීත්‍යානුකූල employer කෙනෙක් deposits අරන් නැහැ. 'Refundable fee' එක advance-fee scam වල අත්සන.", ta: "Scam. உண்மையான நிறுவனங்கள் தனிப்பட்ட Gmail மூலம் recruit செய்யாது, சட்டபூர்வ நிறுவனம் deposit வசூலிக்காது. 'Refundable fee' என்பது advance-fee மோசடியின் அடையாளம்." }
        }
    },

    {
        id: "safe", icon: "fa-shield-halved", color: "#38bdf8",
        t: { en: "Safe Wi-Fi, Devices & Updates", si: "ආරක්ෂිත Wi-Fi, උපාංග සහ Updates", ta: "பாதுகாப்பான Wi-Fi, சாதனங்கள் & புதுப்பிப்புகள்" },
        short: { en: "Everyday basics: updates, backups, screen locks and public Wi-Fi sense.", si: "දෛනික මූලික දේවල්: updates, backups, screen locks සහ public Wi-Fi දැනුවත්භාවය.", ta: "தினசரி அடிப்படைகள்: புதுப்பிப்புகள், backups, screen locks மற்றும் public Wi-Fi புத்திசாலித்தனம்." },
        intro: { en: "Most everyday attacks don't need hackers — they need one weak basic: an old app, an open Wi-Fi network, or a phone without a screen lock. Fixing these basics blocks the majority of opportunistic attacks, in minutes and for free.", si: "සාමාන්‍ය ප්‍රහාරවලට hackers අවශ්‍ය නැහැ — අවශ්‍ය වෙන්නේ දුර්වල මූලික දෙයක්: පරණ app එකක්, open Wi-Fi network එකක්, හෝ screen lock නැති phone එකක්. මේ මූලික දේවල් හදපුවාම අවස්ථාවාදී ප්‍රහාර වැඩි ගණනක් නවතිනවා — මිනිත්තු කිහිපයකින්, නොමිලේ.", ta: "சாதாரண தாக்குதல்களுக்கு hackers தேவையில்லை — ஒரு பலவீனமான அடிப்படை போதும்: பழைய app, open Wi-Fi network, அல்லது screen lock இல்லாத phone. இந்த அடிப்படைகளை சரிசெய்தால் வாய்ப்புவாத தாக்குதல்கள் பெரும்பாலானவை தடுக்கப்படும் — சில நிமிடங்களில், இலவசமாக." },
        signs: [
            { en: "Devices without a screen lock, or unlocked with an easy pattern.", si: "Screen lock නැති devices, නැත්නම් ලේසි pattern එකකින් unlock වෙන ඒවා.", ta: "Screen lock இல்லாத சாதனங்கள், அல்லது எளிதான pattern-ஆல் திறக்கப்படுபவை." },
            { en: "Automatic updates turned off to 'save data'.", si: "'Data save කරන්න' automatic updates off කිරීම.", ta: "'Data சேமிக்க' automatic updates off செய்தல்." },
            { en: "Banking or shopping on open public Wi-Fi.", si: "Open public Wi-Fi එකේ banking හෝ shopping කිරීම.", ta: "Open public Wi-Fi-இல் banking அல்லது shopping செய்தல்." },
            { en: "Using USB cables or charging ports you don't own.", si: "ඔබේ නෙවෙයි USB cables හෝ charging ports පාවිච්චි කිරීම.", ta: "உங்களுடையதல்லாத USB cables அல்லது charging ports பயன்படுத்துதல்." },
            { en: "Staying logged into accounts on shared computers.", si: "Shared computers වල accounts වලින් log out නොවී සිටීම.", ta: "Shared computers-இல் கணக்குகளில் இருந்து log out ஆகாமல் இருத்தல்." }
        ],
        steps: [
            { en: "Turn on automatic updates for your OS, browser and apps.", si: "OS, browser සහ apps වලට automatic updates සක්‍රීය කරන්න.", ta: "OS, browser மற்றும் apps-க்கு automatic updates இயக்கவும்." },
            { en: "Use a strong screen lock — a long PIN or biometrics.", si: "ප්‍රබල screen lock එකක් තියාගන්න — දිග PIN එකක් හෝ biometrics.", ta: "வலுவான screen lock பயன்படுத்துங்கள் — நீண்ட PIN அல்லது biometrics." },
            { en: "On public Wi-Fi, use mobile data or a VPN for anything sensitive.", si: "Public Wi-Fi එකේ sensitive වැඩ වලට mobile data හෝ VPN එකක් පාවිච්චි කරන්න.", ta: "Public Wi-Fi-இல் sensitive வேலைகளுக்கு mobile data அல்லது VPN பயன்படுத்துங்கள்." },
            { en: "Charge with your own cable and adapter, not public USB ports.", si: "Charge කරන්නේ ඔබේම cable එකෙන් සහ adapter එකෙන් — public USB ports වලින් නෙවෙයි.", ta: "உங்கள் சொந்த cable மற்றும் adapter-ஆல் charge செய்யுங்கள் — public USB ports அல்ல." },
            { en: "Always log out on shared devices — and never tick 'remember me' there.", si: "Shared devices වලින් හැමවිටම log out වන්න — 'remember me' tick කරන්නත් එපා.", ta: "Shared devices-இல் எப்போதும் log out செய்யுங்கள் — 'remember me' தட்டாதீர்கள்." }
        ],
        scen: {
            text: { en: "You join a café's free Wi-Fi. A page pops up: “To continue, log in with your email and password to verify.” The café staff say they never ask for that.", si: "ඔබ café එකේ free Wi-Fi එකට සම්බන්ධ වුණා. Page එකක් එනවා: “Continue කරන්න ඔබේ email සහ password එකෙන් log in වෙන්න.” Café staff කියනවා ඒවා ඉල්ලන්නේ නැති බව.", ta: "நீங்கள் cafe-இன் இலவச Wi-Fi-இல் இணைந்தீர்கள். ஒரு பக்கம் வருகிறது: “தொடர உங்கள் email மற்றும் password-ஆல் log in செய்யுங்கள்.” Cafe staff அப்படி கேட்காது என சொல்கிறார்கள்." },
            isScam: true,
            explain: { en: "Scam. Real Wi-Fi sign-in pages only show terms or a simple access code — never your email password. This is an 'evil twin' network built to steal logins. Disconnect immediately.", si: "Scam එකක්. සැබෑ Wi-Fi sign-in pages පෙන්වන්නේ terms හෝ සරල access code එකක් — email password කවදාවත් නෙවෙයි. මේක logins සොරකම් කරන්න හදපු 'evil twin' network එකක්. ක්ෂණිකම disconnect වන්න.", ta: "Scam. உண்மையான Wi-Fi sign-in பக்கங்கள் terms அல்லது சாதாரண access code மட்டுமே காட்டும் — email password ஒருபோதும் இல்லை. இது logins திருடும் 'evil twin' network. உடனே disconnect செய்யுங்கள்." }
        }
    }
];

/* ------------------------------------------------------------
   EVERYDAY DEFENSIVE HABITS (learn.html closing section)
   ------------------------------------------------------------ */
const HABITS = [
    {
        icon: "fa-shield-halved",
        t: { en: "Turn on MFA everywhere that matters", si: "වැදගත් තැන් වල MFA සක්‍රීය කරන්න", ta: "முக்கியமான இடங்களில் MFA இயக்குங்கள்" },
        d: { en: "Add Multi-Factor Authentication to your email, bank and social accounts first. An authenticator app is stronger than SMS codes — but any MFA beats none.", si: "Email, bank සහ social accounts වලට මුලින්ම MFA එකතු කරන්න. Authenticator app එකක් SMS codes වලට වඩා ප්‍රබලයි — ඒත් ඕනම MFA එකක් නැති එකට වඩා හොඳයි.", ta: "Email, வங்கி மற்றும் social கணக்குகளில் முதலில் MFA சேர்க்கவும். Authenticator app SMS codes-ஐ விட வலுவானது — ஆனால் எந்த MFA-உம் இல்லாததை விட நல்லது." }
    },
    {
        icon: "fa-arrows-rotate",
        t: { en: "Let updates happen automatically", si: "Updates automatic කරන්න", ta: "புதுப்பிப்புகளை தானியங்கியாக்குங்கள்" },
        d: { en: "Every update closes holes that attackers already know how to use. Set your OS, browser and apps to update themselves — on Wi-Fi overnight is fine.", si: "හැම update එකක්ම attackers දන්නා holes close කරනවා. OS, browser සහ apps automatic update වෙන්න සකසන්න — රෑ Wi-Fi එකේ වුණත් කමක් නැහැ.", ta: "ஒவ்வொரு புதுப்பிப்பும் attackers அறிந்த holes-ஐ மூடுகிறது. OS, browser மற்றும் apps தாமாக புதுப்பிக்க அமையுங்கள் — இரவில் Wi-Fi-இல் நன்று." }
    },
    {
        icon: "fa-wifi",
        t: { en: "Be careful on public Wi-Fi", si: "Public Wi-Fi වල පරිස්සම් වන්න", ta: "Public Wi-Fi-இல் கவனமாக இருங்கள்" },
        d: { en: "Public networks can host strangers watching traffic. Avoid banking on them; use mobile data or a trusted VPN for anything private.", si: "Public networks වල traffic බලන අහඹු අය ඉන්න පුළුවන්. ඒවා මත banking කරන්න එපා; private වැඩ වලට mobile data හෝ විශ්වාසනීය VPN එකක් පාවිච්චි කරන්න.", ta: "Public networks-இல் traffic பார்க்கும் அந்நியர்கள் இருக்கலாம். அதில் banking தவிர்க்கவும்; private விஷயங்களுக்கு mobile data அல்லது நம்பகமான VPN பயன்படுத்துங்கள்." }
    }
];

/* ============================================================
   30-QUESTION FAQ BANK — preserved verbatim from the original
   Cyber Awareness Hub project (script.js).
   ------------------------------------------------------------ */
const FAQ30 = [
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

{en:{q:"Why should you enable MFA?",a:"Microsoft reports MFA cuts the risk of automated account takeover by over 99%, even if your password is stolen. Example: If a hacker gets your password via phishing, they still can't log in without the code on your phone."},
 si:{q:"MFA enable කරන්න ඕන ඇයි?",a:"Microsoft කියනවා MFA automated account takeover risk එක 99%කට වඩා අඩු කරනවා කියලා — ඔබේ password එක steal වුණත්. උදා: hacker කෙනෙක් phishing එකෙන් ඔබේ password එක ගත්තත්, ඔබේ phone එකේ code එක නැතුව login වෙන්න බැහැ."},
 ta:{q:"MFA-ஐ ஏன் இயக்க வேண்டும்?",a:"Microsoft அறிக்கையின்படி, கடவுச்சொல் திருடப்பட்டாலும் MFA automated கணக்கு கடத்தல் அபாயத்தை 99%-க்கும் மேல் குறைக்கிறது. எ.கா: ஹேக்கர் ஃபிஷிங் மூலம் உங்கள் கடவுச்சொல்லைப் பெற்றாலும், உங்கள் தொலைபேசியில் உள்ள குறியீடு இல்லாமல் நுழைய முடியாது."}},

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
   SEARCH KNOWLEDGE BASE — preserved verbatim from the original
   project (was `faqData`, 21 categories with trilingual
   keywords/questions/answers). Used by home-page search.
   ------------------------------------------------------------ */
const SEARCH_TOPICS = [
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
      answer: {en:"MFA (Multi-Factor Authentication) requires a second proof of identity beyond your password, like a code from an app. Example: Even if a hacker steals your password, they can't log in without the code on your phone. Microsoft reports this blocks over 99% of automated account-compromise attacks.", si:"MFA (Multi-Factor Authentication) කියන්නේ password එකට අමතරව app එකකින් එන code එකක් වගේ identity verify කරන දෙවන ක්‍රමයක් අවශ්‍ය කිරීමයි. උදා: email එකකට login වෙන්න password එකට අමතරව Google Authenticator එකෙන් 6-digit code එකකුත් ඕන. Microsoft කියනවා මේක automated account compromise ප්‍රහාර 99%කට වඩා නවත්වනවා කියලා.", ta:"MFA (பல காரணி அங்கீகாரம்) கடவுச்சொல்லுக்கு அப்பால் ஒரு செயலியிலிருந்து வரும் குறியீடு போன்ற இரண்டாவது அடையாள சான்றைக் கோருகிறது. எ.கா: மின்னஞ்சலில் நுழைய கடவுச்சொல்லுடன் Google Authenticator-இன் 6-இலக்க குறியீடும் தேவை. Microsoft அறிக்கையின்படி இது automated தாக்குதல்களில் 99%-க்கும் மேல் தடுக்கிறது."}},

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

/* ------------------------------------------------------------
   QUIZ BANK — 24 questions, 10 drawn at random per attempt.
   Fields: cat (topics id), q, opts [4], ans (index), why.
   Option order is identical across languages.
   ------------------------------------------------------------ */
const QUIZ = [

    {
        cat: "phishing",
        q: { en: "You get an SMS: 'Your bank account is blocked. Click this link to unlock it.' What do you do?", si: "ඔබට 'ඔබේ bank account එක block වෙලා' කියලා link එකක් සමග SMS එකක් ආවා. මොකක් කරන්නද?", ta: "உங்கள் வங்கி கணக்கு 'மூடப்பட்டது' என்று இணைப்புடன் SMS வந்தது. நீங்கள் என்ன செய்வீர்கள்?" },
        opts: {
            en: ["Click the link quickly to unblock it", "Reply to the SMS asking if it's real", "Don't click — open your bank's official app or call the number on your card", "Forward the link to friends to warn them"],
            si: ["ඉක්මනට link එක click කරලා unlock කරගන්න", "SMS එකට reply කරලා ඇත්තද කියලා අහන්න", "Click කරන්න එපා — ඔබේ bank එකේ official app එක open කරන්න හෝ card එකේ තියෙන අංකයට call කරන්න", "යාළුවන්ට warn කරන්න link එක forward කරන්න"],
            ta: ["விரைவாக இணைப்பை கிளிக் செய்து திறக்கவும்", "உண்மையா? என SMS-க்கு பதிலளிக்கவும்", "கிளிக் செய்யாதீர்கள் — வங்கியின் official app-ஐ திறக்கவும் அல்லது அட்டையில் உள்ள எண்ணுக்கு call செய்யவும்", "நண்பர்களுக்கு எச்சரிக்க link-ஐ forward செய்யவும்"]
        },
        ans: 2,
        why: { en: "Banks never send links to 'unlock' accounts. Opening the official app yourself — or calling the number on your card — is always the safe path.", si: "Banks ලා account 'unlock' කරන්න links යවන්නේ නැහැ. ඔබම official app එක open කිරීම හෝ card එකේ අංකයට call කිරීම හැමවිටම ආරක්ෂිත විදිහයි.", ta: "வங்கிகள் account 'unlock' இணைப்புகளை அனுப்புவதில்லை. official app-ஐ நீங்களே திறப்பதோ அட்டை எண்ணுக்கு call செய்வதோ எப்போதும் பாதுகாப்பான வழி." }
    },

    {
        cat: "phishing",
        q: { en: "Which sender address is most likely a scammer pretending to be your university?", si: "ඔබේ විශ්වවිද්‍යාලය ලෙස පෙනී සිටින scammer කෙනෙක් වීමට වැඩි ඉඩක් තියෙන email address එක කුමක්ද?", ta: "உங்கள் பல்கலைக்கழகம் என நடிக்கும் மோசடியாளருக்கு வாய்ப்பு அதிகமான email address எது?" },
        opts: {
            en: ["registrar@icbt.lk", "helpdesk@icbt-students-helpdesk.com", "admissions@icbt.lk", "library@icbt.lk"],
            si: ["registrar@icbt.lk", "helpdesk@icbt-students-helpdesk.com", "admissions@icbt.lk", "library@icbt.lk"],
            ta: ["registrar@icbt.lk", "helpdesk@icbt-students-helpdesk.com", "admissions@icbt.lk", "library@icbt.lk"]
        },
        ans: 1,
        why: { en: "A real address becomes fake the moment extra words appear. 'icbt-students-helpdesk.com' only looks official — compare the domain character by character.", si: "ඇත්ත address එකට අමතර වචන එකතු වුණ ගමන් ඒක ව්‍යාජයි. 'icbt-students-helpdesk.com' නිල එකක් වගේ පේනවා විතරයි — domain එක අකුරෙන් අකුරු සංසන්දනය කරන්න.", ta: "உண்மையான address-இல் கூடுதல் சொற்கள் சேர்ந்ததும் அது போலியாகிறது. 'icbt-students-helpdesk.com' அதிகாரப்பூர்வமாக மட்டுமே தோன்றும் — domain-ஐ எழுத்துக்கு எழுத்து ஒப்பிடுங்கள்." }
    },

    {
        cat: "phishing",
        q: { en: "What is the safest way to check whether a 'package delivery fee' message is real?", si: "'parcel delivery fee' එකක් ගැන ආපු message එකක් ඇත්තද කියලා බලන ආරක්ෂිතම විදිහ මොකක්ද?", ta: "'parcel delivery fee' செய்தி உண்மையா என பார்க்க பாதுகாப்பான வழி எது?" },
        opts: {
            en: ["Click the link in the message", "Pay the small fee — it's tiny anyway", "Open the courier's official app or website yourself, or call their official number", "Reply with your NIC number for verification"],
            si: ["Message එකේ තියෙන link එක click කරන්න", "කුඩා ගාස්තුවක් නිසා ගෙවන්න", "Courier එකේ official app එක හෝ website එක ඔබම open කරන්න, නැත්නම් නිල අංකයට call කරන්න", "NIC අංකය යවලා verify කරන්න"],
            ta: ["செய்தியில் உள்ள link-ஐ கிளிக் செய்யவும்", "சிறிய fee — anyway செலுத்தவும்", "Courier-இன் official app அல்லது website நீங்களே திறக்கவும், அல்லது அதிகாரப்பூர்வ எண்ணுக்கு call செய்யவும்", "NIC எண்ணை அனுப்பி verify செய்யவும்"]
        },
        ans: 2,
        why: { en: "Never use contacts or links from the suspicious message itself. Going to the official app or number tells you the truth in one minute.", si: "සැක සහිත message එකේ තියෙන links හෝ contacts කවදාවත් පාවිච්චි කරන්න එපා. නිල app එක හෝ නිල අංකය ඔබට මිනිත්තුවකින් ඇත්ත කියනවා.", ta: "சந்தேகத்திற்குரிய செய்தியின் links அல்லது contacts ஒருபோதும் பயன்படுத்த வேண்டாம். official app அல்லது எண் நிமிடத்தில் உண்மையை சொல்லும்." }
    },

    {
        cat: "phishing",
        q: { en: "A message says: 'You've won a free iPhone! Enter your card details for shipping.' This is...", si: "'Free iPhone එකක් දිනුවා! Shipping වලට card details දාන්න' කියන මේ message එක...", ta: "'இலவச iPhone வென்றீர்கள்! shipping-க்கு card விவரங்களை கொடுங்கள்' என்ற செய்தி..." },
        opts: {
            en: ["Real — free prizes are free", "A prize scam — never give card details to claim a prize", "A normal shipping charge", "Safe if the website shows HTTPS"],
            si: ["ඇත්ත — free prizes free තමයි", "Prize scam එකක් — prize එකක් claim කරන්න card details කවදාවත් දෙන්න එපා", "සාමාන්‍ය shipping ගාස්තුවක්", "Website එකේ HTTPS තියෙනවා නම් හරි"],
            ta: ["உண்மை — இலவச பரிசுகள் இலவசம்", "Prize மோசடி — prize claim செய்ய card விவரங்கள் ஒருபோதும் கொடுக்க வேண்டாம்", "சாதாரண shipping கட்டணம்", "Website-இல் HTTPS இருந்தால் பாதுகாப்பு"]
        },
        ans: 1,
        why: { en: "Real prizes don't need your card. Paying to receive a 'free' prize is the oldest trick there is — and HTTPS proves nothing about honesty.", si: "ඇත්ත prizes වලට ඔබේ card ඕන නැහැ. 'Free' prize එකක් ගන්න මුදල් ගෙවන එක පරණම වංචාවයි — HTTPS කියන්නේ අවංක බවට සාක්ෂියක් නෙවෙයි.", ta: "உண்மையான பரிசுகளுக்கு உங்கள் card தேவையில்லை. 'இலவச' பரிசுக்கு பணம் செலுத்துவது பழைய மோசடி — HTTPS நேர்மையின் அடையாளம் அல்ல." }
    },

    {
        cat: "phishing",
        q: { en: "What does hovering over a link (long-press on mobile) help you see?", si: "Link එකක් උඩ hover කිරීමෙන් (mobile එකේ long-press) පෙන්වන්නේ මොකක්ද?", ta: "இணைப்பின் மேல் hover (mobile-இல் long-press) செய்வது எதை காட்டும்?" },
        opts: {
            en: ["The file size of the attachment", "The real destination URL behind the link", "The sender's IP address", "How many people opened the email"],
            si: ["Attachment එකේ file size එක", "Link එක පිටුපස තියෙන ඇත්ත destination URL එක", "Sender ගේ IP address එක", "Email එක open කරපු ගණන"],
            ta: ["இணைப்பின் file size", "Link-க்கு பின்னால் உள்ள உண்மையான destination URL", "Sender-இன் IP address", "Email-ஐ திறந்தவர்களின் எண்ணிக்கை"]
        },
        ans: 1,
        why: { en: "The visible text says one thing; the true target hides underneath. Long-press or hover reveals the real address before you commit.", si: "පෙනෙන text එක එක දෙයක් කියනවා; ඇත්ත target එක පිටිපස සැඟවිලා තියෙනවා. Long-press/hover එකෙන් ඇත්ත ලිපිනය click කරන්න කලින් පෙන්නනවා.", ta: "காட்டப்படும் text ஒன்றை சொல்லும்; உண்மையான target பின்னால் மறைந்திருக்கும். கிளிக் செய்வதற்கு முன் உண்மையான address தெரிகிறது." }
    },

    {
        cat: "passwords",
        q: { en: "Which password is strongest?", si: "ප්‍රබලම password එක මොකක්ද?", ta: "மிக வலுவான password எது?" },
        opts: {
            en: ["Ridma2015", "password123", "Blue-Mango-Train-92!", "12345678"],
            si: ["Ridma2015", "password123", "Blue-Mango-Train-92!", "12345678"],
            ta: ["Ridma2015", "password123", "Blue-Mango-Train-92!", "12345678"]
        },
        ans: 2,
        why: { en: "Length plus randomness wins. Four random words with a number and symbol are hard to guess and easy to type — names and birthdays appear in every attack list.", si: "දිග සහ අහඹු බව තමයි ජයග්‍රහය. අහඹු වචන 4ක් + අංකයක් සහ සංකේතයක් guess කරන්න අමාරුයි, type කරන්න ලේසියි — නම් සහ උපන් දින හැම attack list එකකම තියෙනවා.", ta: "நீளமும் சீரற்ற தன்மையும் வெற்றி. சீரற்ற வார்த்தைகள் + எண் மற்றும் சின்னம் — பெயர்கள், பிறந்த நாட்கள் ஒவ்வொரு attack list-இலும் இருக்கும்." }
    },

    {
        cat: "passwords",
        q: { en: "Why shouldn't you reuse the same password on many sites?", si: "ඔක්කොම sites වලට එකම password එක පාවිච්චි නොකරන්නේ ඇයි?", ta: "எல்லா தளங்களிலும் ஒரே password பயன்படுத்தக்கூடாது ஏன்?" },
        opts: {
            en: ["It's hard to remember many passwords", "If one site leaks it, attackers try it on all your other accounts", "Websites ban reused passwords", "It slows down your phone"],
            si: ["ගොඩක් passwords මතක තියාගන්න අමාරු නිසා", "එක site එකකින් leak වුණොත් attackers ලා ඒක ඔබේ අනිත් ඔක්කොම accounts වලට try කරනවා", "Websites ලා reused passwords ban කරනවා", "Phone එක slow වෙනවා නිසා"],
            ta: ["பல passwords நினைவில் வைக்க கடினம்", "ஒரு site-இல் leak ஆனால், attackers உங்கள் மற்ற கணக்குகளில் முயற்சிப்பார்கள்", "Websites reused passwords தடை செய்யும்", "Phone மந்தமாகும்"]
        },
        ans: 1,
        why: { en: "Leaked passwords get tested automatically against email, social media and banking sites. One breach can unlock your whole digital life — it's called credential stuffing.", si: "Leak වූ passwords email, social media, banking sites වලට automatic test වෙනවා. එක breach එකක් ඔබේ ඔක්කොම දේවල් unlock කරන්න පුළුවන් — ඒකට credential stuffing කියනවා.", ta: "Leak ஆன passwords email, social media, banking தளங்களில் தானாக சோதிக்கப்படும். ஒரு breach உங்கள் எல்லாவற்றையும் திறக்கலாம் — credential stuffing." }
    },

    {
        cat: "passwords",
        q: { en: "What is MFA (Multi-Factor Authentication)?", si: "MFA (Multi-Factor Authentication) කියන්නේ මොකක්ද?", ta: "MFA (Multi-Factor Authentication) என்றால் என்ன?" },
        opts: {
            en: ["A password manager app", "An extra verification step — like a code or app prompt — in addition to your password", "A type of firewall", "An anti-spam email filter"],
            si: ["Password manager app එකක්", "Password එකට අමතරව code එකක් හෝ app prompt එකක් වගේ verification step එකක්", "Firewall එකක වර්ගයක්", "Anti-spam email filter එකක්"],
            ta: ["Password manager app", "Password-க்கு கூடுதலாக code அல்லது app prompt போன்ற verification படி", "Firewall வகை", "Anti-spam email filter"]
        },
        ans: 1,
        why: { en: "MFA means a stolen password alone isn't enough to enter your account. Microsoft reports MFA blocks over 99% of automated account-compromise attacks.", si: "MFA කියන්නේ stolen password එකක් විතරක් account එකට ඇතුළු වෙන්න ප්‍රමාණවත් නැහැ කියන එක. Microsoft කියනවා MFA automated account compromise ප්‍රහාරවලින් 99%කට වඩා නවත්වනවා කියලා.", ta: "MFA என்பது திருடப்பட்ட password மட்டும் போதாது என்பது. Microsoft அறிக்கையின்படி MFA 99%க்கும் மேற்பட்ட automated தாக்குதல்களை தடுக்கிறது." }
    },

    {
        cat: "passwords",
        q: { en: "Which MFA method is generally stronger?", si: "වැඩිම ආරක්ෂාව තියෙන MFA ක්‍රමය මොකක්ද?", ta: "மிக வலுவான MFA முறை எது?" },
        opts: {
            en: ["SMS codes", "An authenticator app or passkeys", "Calling your own phone", "Security questions only"],
            si: ["SMS codes", "Authenticator app එකක් හෝ passkeys", "ඔබේම phone එකට call කිරීම", "Security questions විතරයි"],
            ta: ["SMS codes", "Authenticator app அல்லது passkeys", "உங்கள் phone-க்கு call செய்தல்", "Security questions மட்டும்"]
        },
        ans: 1,
        why: { en: "App codes and passkeys can't be intercepted the way text messages can via SIM-swap attacks.", si: "App codes සහ passkeys intercept කරන්න බැරි — SIM-swap ප්‍රහාරවලට SMS copy කරගන්න පුළුවන්.", ta: "App codes மற்றும் passkeys தடுக்க முடியாதவை — SIM-swap தாக்குதல்கள் SMS-ஐ copy செய்யலாம்." }
    },

    {
        cat: "passwords",
        q: { en: "Where should passwords live?", si: "Passwords තියාගන්න නියම තැන මොකක්ද?", ta: "Passwords இருக்க வேண்டிய சரியான இடம் எது?" },
        opts: {
            en: ["In a chat message to yourself", "On a sticky note on your screen", "In a password manager", "On the back of your ID card"],
            si: ["ඔබටම යවපු chat message එකක්", "Screen එකේ ඇලවූ sticky note එකක්", "Password manager එකක්", "ID card එකේ පිටිපස"],
            ta: ["உங்களுக்கே அனுப்பிய chat message-இல்", "Screen-இல் ஒட்டிய sticky note-இல்", "Password manager-இல்", "ID card-இன் பின்புறத்தில்"]
        },
        ans: 2,
        why: { en: "A password manager encrypts your passwords behind one strong master password — safer than photos, notes or chats that sync to many places.", si: "Password manager එකක passwords encrypt වෙලා තියෙනවා එක master password එකක් පිටුපස — photos, notes හෝ chats වලට වඩා ආරක්ෂිතයි, ඒවා ගොඩක් තැන් වලට sync වෙනවා.", ta: "Password manager ஒரு master password-க்கு பின்னால் encrypt செய்கிறது — பல இடங்களுக்கு sync ஆகும் photos/notes/chats-ஐ விட பாதுகாப்பு." }
    },

    {
        cat: "social",
        q: { en: "A caller claiming to be 'IT support' asks to install a remote-access app to 'fix your laptop'. You should...", si: "'IT support' කියලා කියන කෙනෙක් call කරලා ඔබේ laptop එක 'fix කරන්න' remote-access app එකක් install කරන්න කියනවා...", ta: "'IT support' என்கிறவர் உங்கள் laptop 'சரிசெய்ய' remote-access app install செய்ய கேட்கிறார்..." },
        opts: {
            en: ["Install it — IT people do this all the time", "Hang up and contact IT through the official number or helpdesk yourself", "Give him your password too so it's faster", "Let him connect while you watch a movie"],
            si: ["Install කරන්න — IT අය හැමවිටම කරන දෙයක්", "Call එක cut කරලා ඔබම official number එකට හෝ helpdesk එකට contact කරන්න", "Password එකත් දෙන්න — fast වෙන්න", "ඔහුට remote access දීලා movie එකක් බලන්න"],
            ta: ["Install செய்யவும் — IT நிபுணர்கள் எப்போதும் செய்வது", "அழைப்பை துண்டித்து, official எண் அல்லது helpdesk மூலம் நீங்களே தொடர்பு கொள்ளவும்", "Password-உம் கொடுங்கள் — வேகமாக முடியும்", "Remote access கொடுத்து movie பாருங்கள்"]
        },
        ans: 1,
        why: { en: "Remote access means control of your device — files, accounts, everything. Real IT staff never need to watch your screen: end the call and verify through official channels.", si: "Remote access කියන්නේ ඔබේ device එක control කරන එක — files, accounts ඔක්කොම. සැබෑ IT staff ලාට ඔබේ screen බලන්න අවශ්‍ය නැහැ: call එක cut කරලා official channels වලින් verify කරන්න.", ta: "Remote access என்பது உங்கள் சாதனத்தை கட்டுப்படுத்துவது — files, accounts எல்லாம். உண்மையான IT ஊழியர்கள் உங்கள் screen பார்க்க தேவையில்லை: அழைப்பை துண்டித்து official வழியில் சரிபார்க்கவும்." }
    },

    {
        cat: "social",
        q: { en: "Someone messages you from a friend's account: 'I'm stuck abroad, send money urgently.' First thing to do?", si: "යාළුවෙක්ගේ account එකෙන්: 'මම abroad අලි වැටිලා, ක්ෂණිකම මුදල් යවන්න' — මුලින්ම කරන දේ?", ta: "நண்பரின் account-இலிருந்து: 'நான் வெளிநாட்டில் சிக்கியுள்ளேன், விரைவாக பணம் அனுப்பு' — முதலில் செய்வது?" },
        opts: {
            en: ["Send the money fast — a friend is in trouble", "Verify first — call the friend or ask a question only they would know", "Send half the amount to be safe", "Reply with a screenshot of your bank balance"],
            si: ["ඉක්මනට මුදල් යවන්න — යාළුවෝ අවුලේ", "මුලින්ම verify කරන්න — යාළුවාට call කරන්න හෝ එයාට විතරක් දන්න ප්‍රශ්නයක් අහන්න", "ආරක්ෂිත වෙන්න අඩක් යවන්න", "Bank balance එකේ screenshot එකක් යවන්න"],
            ta: ["விரைவாக பணம் அனுப்புங்கள் — நண்பர் சிக்கலில்", "முதலில் சரிபார்க்கவும் — நண்பருக்கு call செய்யவும் அல்லது அவருக்கு மட்டும் தெரியும் விஷயம் கேட்கவும்", "பாதுகாப்புக்கு பாதி பணம் அனுப்பவும்", "Bank balance screenshot அனுப்பவும்"]
        },
        ans: 1,
        why: { en: "Hacked accounts send urgent money requests to every contact. One phone call exposes the scam — real friends appreciate the check.", si: "Hacked accounts හැම contact කෙනෙක්ටම ක්ෂණික මුදල් requests යවනවා. එක call එකකින් scam එක හෙළිවෙනවා — ඇත්ත යාළුවෝ check එක තේරුම් ගන්නවා.", ta: "Hacked கணக்குகள் ஒவ்வொரு contact-க்கும் அவசர பண கோரிக்கை அனுப்பும். ஒரு call மோசடியை வெளிப்படுத்தும் — உண்மையான நண்பர் புரிந்துகொள்வார்." }
    },

    {
        cat: "social",
        q: { en: "Manufactured urgency ('Act in the next 10 minutes!') is used because...", si: "'මිනිත්තු 10ක් ඇතුළත කරන්න!' කියන හදිසි බව පාවිච්චි කරන්නේ ඇයි?", ta: "'10 நிமிடங்களில் செய்யுங்கள்!' என்ற அவசரம் ஏன் பயன்படுத்தப்படுகிறது?" },
        opts: {
            en: ["It saves your time", "Scammers want you to skip thinking and checking", "It proves the offer is genuine", "Websites require fast replies"],
            si: ["ඔබේ වෙලාව save කරන්න", "Scammers ලාට ඕන ඔබ හිතන්නෙත් check කරන්නෙත් නැතිව ඉක්මනට ක්‍රියා කරන එක", "Offer එක ඇත්ත බව පෙන්වන්න", "Websites ලා fast replies අහනවා"],
            ta: ["உங்கள் நேரத்தை மிச்சப்படுத்த", "மோசடியாளர்கள் நீங்கள் யோசிக்காமல், சரிபார்க்காமல் வேகமாக செயல்பட விரும்புகிறார்கள்", "Offer உண்மை என நிரூபிக்க", "Websites வேகமான பதில்களை கேட்கின்றன"]
        },
        ans: 1,
        why: { en: "Panic turns off the careful part of your brain. A message demanding action in minutes is asking you not to verify — that is the red flag itself.", si: "බය සහ හදිසි බව careful හිතෙන් එක off කරනවා. මිනිත්තු කිහිපයකින් action ඉල්ලන හැම message එකක්ම verify නොකරන්න කියන එක — ඒක තමයි red flag එක.", ta: "பயம் கவனமான சிந்தனையை off செய்யும். நிமிடங்களில் செயல் கோரும் செய்தி — சரிபார்க்க வேண்டாதென கேட்பதே red flag." }
    },

    {
        cat: "social",
        q: { en: "An 'official' says: 'Don't tell anyone — just follow my instructions.' What does that sound like?", si: "'කාටවත් කියන්න එපා — මගේ උපදෙස් පමණක් අනුව ක්‍රියා කරන්න' කියන එක මොන වගේද?", ta: "'யாரிடமும் சொல்லாதீர்கள் — என் வழிமுறைகளை மட்டும் பின்பற்றுங்கள்' என்பது எது?" },
        opts: {
            en: ["Normal official procedure", "A control tactic meant to isolate you", "A trustworthy government service", "A standard bank verification"],
            si: ["සාමාන්‍ය නිල ක්‍රියා පටිපාටියක්", "ඔබව තනි කරගන්න හදන ක්‍රමයක්", "විශ්වාස කරන්න පුළුවන් රජයේ සේවයක්", "සාමාන්‍ය bank verification එකක්"],
            ta: ["சாதாரண அதிகாரப்பூர்வ நடைமுறை", "உங்களை தனிமைப்படுத்தும் கட்டுப்பாட்டு தந்திரம்", "நம்பகமான அரசு சேவை", "சாதாரண bank சரிபார்ப்பு"]
        },
        ans: 1,
        why: { en: "Keeping you away from family, friends or bank staff is how fraudsters stay in control. Real officials have nothing against a second opinion.", si: "පවුලේ අයෙන්, මිතුරන්ගෙන් හෝ bank staff එකෙන් ඔබව ඈත් කරන එක fraudsters ලාගේ පාලන ක්‍රමයයි. නිල අයට ඔබේ දෙවන අදහසක් ගන්න එකට කිසිම අකමැත්තක් නැහැ.", ta: "குடும்பம், நண்பர்கள் அல்லது bank ஊழியர்களிடமிருந்து உங்களை விலக்குவது மோசடியாளர்களின் கட்டுப்பாட்டு முறை. உண்மையான அதிகாரிகள் இரண்டாவது கருத்தை தடுப்பதில்லை." }
    },

    {
        cat: "social",
        q: { en: "What should you NEVER give on a call you didn't start?", si: "ඔබ ආරම්භ නොකළ call එකක කවදාවත් දෙන්න එපා කියන දේ මොකක්ද?", ta: "நீங்கள் தொடங்காத அழைப்பில் ஒருபோதும் கொடுக்கக்கூடாதது எது?" },
        opts: {
            en: ["Your first name", "OTPs, passwords or card numbers", "The weather in your city", "Your favorite cricket team"],
            si: ["ඔබේ මුල් නම", "OTPs, passwords හෝ card numbers", "ඔබේ නගරයේ කාලගුණය", "ඔබේ favorite cricket team එක"],
            ta: ["உங்கள் முதல் பெயர்", "OTPs, passwords அல்லது card எண்கள்", "உங்கள் நகரின் வானிலை", "உங்கள் பிடித்த cricket team"]
        },
        ans: 1,
        why: { en: "No bank, courier or government office needs your OTP or PIN. Codes are yours alone — sharing one can hand over your account in seconds.", si: "Bank, courier හෝ රජයේ ආයතනයකට ඔබේ OTP හෝ PIN අවශ්‍ය වෙන්නේ නැහැ. Codes තියෙන්නේ ඔබට විතරයි — එකක් share කළොත් account එක තත්පර කිහිපයකින් අතට යනවා.", ta: "வங்கி, courier அல்லது அரசு அலுவலகத்திற்கு உங்கள் OTP/PIN தேவையில்லை. Codes உங்களுக்கு மட்டுமே — பகிர்ந்தால் கணக்கு வினாடிகளில் கைமாறும்." }
    },

    {
        cat: "malware",
        q: { en: "Your phone shows a pop-up: '3 viruses found! Download CleanerPro to fix.' You should...", si: "ඔබේ phone එකේ pop-up එකක්: 'viruses 3ක් හමු වුණා! fix කරන්න CleanerPro download කරන්න.' ඔබ කරන දේ...", ta: "உங்கள் phone-இல் pop-up: 'வைரஸ் 3 கண்டுபிடித்தது! சரிசெய்ய CleanerPro download செய்யுங்கள்.' நீங்கள்..." },
        opts: {
            en: ["Download it quickly before it spreads", "Ignore it — real alerts come from the security software already on your device, not pop-ups", "Restart your phone five times", "Turn off your antivirus first"],
            si: ["එක පැතිරෙන්න කලින් ඉක්මනට download කරන්න", "Ignore කරන්න — සැබෑ alerts එන්නේ ඔබේ device එකේ තියෙන security software එකෙන්, pop-ups වලින් නෙවෙයි", "Phone එක වරක් පාරක් restart කරන්න", "Antivirus එක මුලින්ම off කරන්න"],
            ta: ["பரவுவதற்கு முன் விரைவாக download செய்யவும்", "பொருட்படுத்தாதீர்கள் — உண்மையான எச்சரிக்கைகள் உங்கள் device-இல் உள்ள security software-இலிருந்து வரும், pop-ups அல்ல", "Phone-ஐ ஐந்து முறை restart செய்யவும்", "Antivirus-ஐ முதலில் off செய்யவும்"]
        },
        ans: 1,
        why: { en: "Websites can't scan your phone. A pop-up demanding a 'cleaner' download is the infection itself — close the tab and delete anything it added.", si: "Websites ලාට ඔබේ phone එක scan කරන්න බැහැ. 'Cleaner' එකක් download කරන්න කියන pop-up එක තමයි ආසාදනයම — tab එක close කරලා එයා දැම්ම දේවල් delete කරන්න.", ta: "Websites உங்கள் phone-ஐ scan செய்ய முடியாது. 'Cleaner' download கோரும் pop-up தான் தொற்று — tab-ஐ மூடவும், சேர்த்தவற்றை நீக்கவும்." }
    },

    {
        cat: "malware",
        q: { en: "What does ransomware do?", si: "Ransomware කරන්නේ මොකක්ද?", ta: "Ransomware செய்வது என்ன?" },
        opts: {
            en: ["Speeds up your device", "Locks your files and demands payment to unlock them", "Cleans your browser automatically", "Blocks spam emails"],
            si: ["Device එක fast කරනවා", "ඔබේ files lock කරලා unlock කරන්න මුදල් demand කරනවා", "Browser එක automatic clean කරනවා", "Spam emails block කරනවා"],
            ta: ["சாதனத்தை வேகமாக்கும்", "கோப்புகளை பூட்டி பணம் கோரும்", "Browser-ஐ தானாக சுத்தம் செய்யும்", "Spam emails தடுக்கும்"]
        },
        ans: 1,
        why: { en: "Ransomware encrypts your data and holds it hostage. Backups are the escape route — and paying gives no guarantee the files come back.", si: "Ransomware කියන්නේ ඔබේ data encrypt කරලා බැම්මට අල්ලගන්න එක. Backups තමයි escape route එක; මුදල් ගෙවුවත් files ආපහු එනවා කියලා guarantee නැහැ.", ta: "Ransomware உங்கள் தரவை பூட்டி பணம் கோரும். Backup தான் தப்பிக்கும் வழி; பணம் கொடுத்தாலும் திரும்ப வர உத்தரவாதம் இல்லை." }
    },

    {
        cat: "malware",
        q: { en: "Which app source is safest?", si: "වැඩිම ආරක්ෂාව තියෙන app source එක මොකක්ද?", ta: "பாதுகாப்பு அதிகமான app மூலம் எது?" },
        opts: {
            en: ["APK links shared in WhatsApp groups", "Official app stores (Play Store / App Store)", "'Modded premium' websites", "QR codes on street posters"],
            si: ["WhatsApp groups වල share වෙන APK links", "Official app stores (Play Store / App Store)", "'Modded premium' websites", "Street posters වල QR codes"],
            ta: ["WhatsApp groups-இல் பங்கிடப்படும் APK links", "Official app stores (Play Store / App Store)", "'Modded premium' websites", "Street posters-இன் QR codes"]
        },
        ans: 1,
        why: { en: "Official stores scan uploads and remove harmful apps, while sideloaded APKs skip every safety check — a common ransomware delivery route.", si: "Official stores uploads scan කරලා හානිකර apps ඉවත් කරනවා; sideload කරපු APKs සියලු safety checks skip කරනවා — ransomware deliver කරන බහුලම විදිහයි.", ta: "Official stores uploads-ஐ scan செய்து தீய apps நீக்கும்; sideload APKs எல்லா பாதுகாப்பு சோதனைகளையும் தாண்டும் — ransomware வரும் பொதுவான வழி." }
    },

    {
        cat: "malware",
        q: { en: "Why are automatic updates important?", si: "Automatic updates වැදගත් වෙන්නේ ඇයි?", ta: "தானியங்கி புதுப்பிப்புகள் முக்கியம் ஏன்?" },
        opts: {
            en: ["They change the wallpaper", "They fix security holes that attackers already know how to exploit", "They delete your old files", "They only improve battery life"],
            si: ["Wallpaper එක වෙනස් කරන නිසා", "Attackers ලාට දන්න security holes නිවැරදි කරන නිසා", "පරණ files delete කරන නිසා", "Battery life විතරක් වැඩි කරන නිසා"],
            ta: ["Wallpaper மாற்றும்", "Attackers அறிந்த security holes-ஐ சரி செய்யும்", "பழைய கோப்புகளை நீக்கும்", "Battery life மட்டும் மேம்படுத்தும்"]
        },
        ans: 1,
        why: { en: "Attackers build exploits for known holes within days. Updates close those doors — WannaCry spread only through machines missing one patch.", si: "Attackers ලා known holes වලට exploits දවස් කිහිපයකින් හදනවා. Updates ඒ දොරවල් close කරනවා — WannaCry වැපිරුණේ patch එකක් miss වූ machines ම හරහායි.", ta: "Attackers அறிந்த holes-க்கு சில நாட்களில் exploits உருவாக்குகிறார்கள். Updates அந்த கதவுகளை மூடும் — WannaCry ஒரு patch தவறிய மெஷின்கள் வழியாகவே பரவியது." }
    },

    {
        cat: "privacy",
        q: { en: "Which photo is safest to post publicly?", si: "Public විදිහට post කරන්න ආරක්ෂිතම ඡායාරූපය මොකක්ද?", ta: "பொதுவில் பதிவிட பாதுகாப்பான புகைப்படம் எது?" },
        opts: {
            en: ["Your NIC or passport", "Your airline boarding pass", "A sunset from your trip, with no tickets or documents visible", "Your new bank card with the number visible"],
            si: ["ඔබේ NIC හෝ passport එක", "ඔබේ airline boarding pass එක", "Tickets හෝ documents නැති trip එකක sunset ඡායාරූපයක්", "අංකය පේන new bank card එකක්"],
            ta: ["உங்கள் NIC அல்லது passport", "உங்கள் airline boarding pass", "Tickets அல்லது ஆவணங்கள் இல்லாத trip sunset புகைப்படம்", "எண் தெரியும் புதிய bank card"]
        },
        ans: 2,
        why: { en: "IDs, tickets and cards carry codes that reveal your full name, ID number, booking reference or card number. Sunset photos carry none.", si: "IDs, tickets, cards වල තියෙන codes වලින් ඔබේ full නම, ID අංකය, booking reference, card number කියෙනවා. Sunset ඡායාරූපයකින් කිසිම දෙයක් කියන්නේ නැහැ.", ta: "IDs, tickets, cards உள்ள codes உங்கள் முழு பெயர், ID எண், booking reference, card எண்ணை சொல்லும். Sunset புகைப்படம் எதுவும் சொல்லாது." }
    },

    {
        cat: "privacy",
        q: { en: "A 'fun quiz' asks for your mother's maiden name and first pet. This is...", si: "'Fun quiz' එකක් ඔබේ අම්මගේ බැප්ටිස්ම නම සහ මුල්ම පැටවාගේ නම අහනවා. මේක...", ta: "வேடிக்கை quiz உங்கள் தாயின் பெயர், முதல் செல்லப்பிராணி கேட்கிறது. இது..." },
        opts: {
            en: ["Harmless fun — everyone does it", "Data harvesting — it collects the same answers used for security questions", "A personality test", "A verified school project"],
            si: ["හානිකර නැහැ — හැමෝම කරනවා", "Data harvesting — security questions වලට පාවිච්චි වෙන පිළිතුරුම එකතු කරනවා", "Personality test එකක්", "Verify වූ පාසල් project එකක්"],
            ta: ["தீங்கற்ற வேடிக்கை — எல்லோரும் செய்கிறார்கள்", "Data harvesting — security questions-க்கு பயன்படும் பதில்களை சேகரிக்கிறது", "Personality test", "உறுதிப்படுத்தப்பட்ட பள்ளி project"]
        },
        ans: 1,
        why: { en: "That data powers account-recovery 'security questions'. Harvesting pet names and maiden names is a step toward account takeover.", si: "ඒ දත්ත account-recovery 'security questions' වලට පාවිච්චි වෙනවා. Pet names සහ maiden names එකතු කිරීම account takeover එකක පියවරක්.", ta: "அந்த data account-recovery 'security questions'-க்கு பயன்படும். செல்லப்பிராணி மற்றும் பெயர்கள் சேகரிப்பு account takeover படிநிலை." }
    },

    {
        cat: "privacy",
        q: { en: "What is a good social-media privacy habit?", si: "Social media වල හොඳ privacy habit එක මොකක්ද?", ta: "Social media-இல் நல்ல privacy பழக்கம் எது?" },
        opts: {
            en: ["Accept every friend request", "Set profiles to friends-only and review settings monthly", "Post your live location on every story", "Use your birthday as your PIN"],
            si: ["හැම friend request එකක්ම accept කරන්න", "Profiles friends-only කරලා මාසෙකට වරක් settings review කරන්න", "හැම story එකකම live location post කරන්න", "Birthday එක PIN එක ලෙස පාවිච්චි කරන්න"],
            ta: ["ஒவ்வொரு friend request-உம் accept செய்யவும்", "Profiles friends-only ஆக்கி மாதந்தோறும் settings மறுஆய்வு செய்யவும்", "ஒவ்வொரு story-இலும் live location post செய்யவும்", "Birthday-ஐ PIN ஆக பயன்படுத்தவும்"]
        },
        ans: 1,
        why: { en: "Friends-only mode keeps strangers from building your profile, and a monthly review catches changes made by app permissions or policy updates.", si: "Friends-only mode නොහඳුනන අයට ඔබේ profile එක ගොඩනගන්න ඉඩ නොදෙනවා. මාසික review කෙනෙක් app permissions සහ policy වෙනස්කම් මඟින් වෙන වෙනස්කම් catch කරනවා.", ta: "Friends-only mode அந்நியர்கள் உங்கள் profile உருவாக்க முடியாமல் தடுக்கும். மாத மறுஆய்வு app permission மற்றும் கொள்கை மாற்றங்களை கண்டறியும்." }
    },

    {
        cat: "privacy",
        q: { en: "What does the HTTPS padlock actually mean?", si: "HTTPS (padlock icon) එකෙන් ඇත්තටම කියන්නේ මොකක්ද?", ta: "HTTPS (padlock icon) உண்மையில் என்ன அர்த்தம்?" },
        opts: {
            en: ["The site is 100% safe and honest", "Data is encrypted between you and the site — but the site itself can still be fake", "The site has a government license", "The site cannot contain malware"],
            si: ["Site එක 100% ආරක්ෂිත සහ අවංක", "ඔබ සහ site එක අතර data encrypt වෙනවා — ඒත් site එකම ව්‍යාජ වෙන්න පුළුවන්", "Site එකට රජයේ license එකක් තියෙනවා", "Site එකේ malware තියෙන්න බැහැ"],
            ta: ["தளம் 100% பாதுகாப்பானது மற்றும் நேர்மையானது", "Data உங்களுக்கும் தளத்துக்கும் இடையே encrypt ஆகும் — ஆனால் தளமே போலியாக இருக்கலாம்", "தளத்திற்கு அரசு license உள்ளது", "தளத்தில் malware இருக்க முடியாது"]
        },
        ans: 1,
        why: { en: "The padlock only says nobody in between can read your traffic. Scam sites get free HTTPS certificates too — check who they are, not just the lock.", si: "Padlock එකෙන් කියන්නේ මැද කාටවත් traffic කියවන්න බැරි බව විතරයි. Scam sites ලාටත් HTTPS certificates නොමිලේ ලැබෙනවා — lock එක විතරක් නෙවෙයි, කවුද කියලත් බලන්න.", ta: "Padlock இடையில் யாரும் traffic படிக்க முடியாது என்பது மட்டுமே. மோசடி தளங்களுக்கும் HTTPS இலவசம் — பூட்டு மட்டுமல்ல, யார் என்றும் சரிபார்க்கவும்." }
    },

    {
        cat: "privacy",
        q: { en: "An email says: 'Your password appeared in a data breach.' Best first move?", si: "'ඔබේ password එක data breach එකක තියෙනවා' කියලා email එකක් ආවා. මුලින්ම කරන්න ඕන දේ?", ta: "'உங்கள் password data breach-இல் தோன்றியது' என email வந்தது. முதலில் செய்வது என்ன?" },
        opts: {
            en: ["Ignore it as spam", "Change that password immediately — and anywhere it was reused — then turn on MFA", "Reply to the email with the password to check", "Post about it on social media first"],
            si: ["Spam ලෙස ignore කරන්න", "ඒ password එක ක්ෂණිකම වෙනස් කරන්න — reuse කරපු තැන් වලත් — පස්සේ MFA සක්‍රීය කරන්න", "Password එක reply කරලා යවලා check කරන්න", "Social media එකේ post කරලා බලන්න"],
            ta: ["Spam என பொருட்படுத்தாமல் விட்டுவிடவும்", "அந்த password-ஐ உடனே மாற்றவும் — reuse செய்த இடங்களிலும் — பின் MFA இயக்கவும்", "Email-க்கு password அனுப்பி சரிபார்க்கவும்", "முதலில் social media-இல் post செய்யவும்"]
        },
        ans: 1,
        why: { en: "Checking a real breach never requires replying to anyone: change the password, enable MFA, and verify via haveibeenpwned.com or the official service.", si: "Real breach admit වුණාට කාටවත් reply කරන්න අවශ්‍ය නැහැ: password වෙනස් කරන්න, MFA සක්‍රීය කරන්න, ඒ වගේම haveibeenpwned.com හෝ official service එකෙන් verify කරන්න.", ta: "உண்மையை சரிபார்க்க யாருக்கும் பதிலளிக்க தேவையில்லை: password-ஐ மாற்றவும், MFA இயக்கவும், haveibeenpwned.com அல்லது official வழியில் verify செய்யவும்." }
    }
];
