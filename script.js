// ============================================================
// Cyber Awareness Hub - Extensive FAQ Knowledge Base
// 100+ Cyber Security Questions | ISACA Student Group ICBT Campus
// ============================================================

const faqData = [

    // ============================================================
    // SECTION 1: PASSWORD SECURITY (Q1-Q10)
    // ============================================================
    
    { id: 1, icon: "fa-lock", color: "#00f2fe", keywords: ["password security","secure password","password safety","passphrase","password strength","strong password"],
      question: "What is the safest way to create passwords?",
      answer: "A secure password is long (12+ characters), unique per account, and mixes letters, numbers, and symbols. Use a password manager and avoid personal info like birthdays.",
      synonyms: ["passwords", "security", "safe", "strong", "complex"] },

    { id: 2, icon: "fa-key", color: "#00f2fe", keywords: ["password manager","password vault","bitwarden","lastpass","password reuse"],
      question: "Why should I use a password manager?",
      answer: "A password manager generates and stores strong, unique passwords for every account so you never reuse one. If one site is breached, only that single password is exposed.",
      synonyms: ["manager", "store", "generate", "vault", "unique"] },

    { id: 3, icon: "fa-shield", color: "#00f2fe", keywords: ["password reuse","same password","multiple accounts","password recycling"],
      question: "Why is reusing passwords dangerous?",
      answer: "If you use the same password across multiple sites, one breach compromises all your accounts. Attackers use stolen credentials to try logging into other services.",
      synonyms: ["reuse", "multiple", "danger", "breach", "compromise"] },

    { id: 4, icon: "fa-clock", color: "#00f2fe", keywords: ["change password","password rotation","update password"],
      question: "How often should I change my passwords?",
      answer: "Change passwords immediately if a service is breached; otherwise focus on password strength and uniqueness. Regular changes without reason may lead to weaker passwords.",
      synonyms: ["rotation", "update", "change", "breach"] },

    { id: 5, icon: "fa-eye-slash", color: "#00f2fe", keywords: ["password sharing","share password","give password"],
      question: "Is it safe to share passwords with others?",
      answer: "No. Never share your passwords with anyone, even colleagues or friends. Use password manager sharing features or temporary access methods instead.",
      synonyms: ["share", "give", "others", "team", "colleague"] },

    { id: 6, icon: "fa-file", color: "#00f2fe", keywords: ["password storage","store password","save password","password notes"],
      question: "Where should I store my passwords?",
      answer: "Store passwords only in encrypted password managers. Never save them in plain text files, spreadsheets, or sticky notes.",
      synonyms: ["storage", "save", "notes", "document", "encrypted"] },

    { id: 7, icon: "fa-mobile", color: "#00f2fe", keywords: ["mobile password","phone password","app password"],
      question: "How do I manage passwords on mobile devices?",
      answer: "Use a mobile password manager app with biometric authentication. Enable auto-fill and use strong device-level security.",
      synonyms: ["phone", "mobile", "app", "biometric"] },

    { id: 8, icon: "fa-person", color: "#00f2fe", keywords: ["personal information password","birthday password","name password"],
      question: "What personal information should I avoid in passwords?",
      answer: "Avoid using birthdays, names, pet names, addresses, phone numbers, or any publicly available information. Attackers can easily guess these.",
      synonyms: ["birthday", "name", "personal", "guess", "information"] },

    { id: 9, icon: "fa-plus-circle", color: "#00f2fe", keywords: ["password complexity","special characters","uppercase lowercase","numbers in password"],
      question: "What makes a password complex?",
      answer: "Complex passwords include uppercase letters, lowercase letters, numbers, and special symbols. Longer passwords with varied characters are harder to crack.",
      synonyms: ["complex", "characters", "symbols", "uppercase", "lowercase"] },

    { id: 10, icon: "fa-user-lock", color: "#00f2fe", keywords: ["default password","factory password","change default"],
      question: "Why should I change default passwords?",
      answer: "Default passwords are publicly known and are often the first thing attackers try. Change them immediately on all devices and accounts.",
      synonyms: ["default", "factory", "change", "first"] },

    // ============================================================
    // SECTION 2: PHISHING & EMAIL SECURITY (Q11-Q20)
    // ============================================================

    { id: 11, icon: "fa-fish", color: "#ef4444", keywords: ["phishing","phish","suspicious email","fake email","email scam"],
      question: "What is phishing and how do I stay safe?",
      answer: "Phishing is a scam where attackers send fraudulent emails pretending to be trusted sources. Never click suspicious links and verify the sender's identity.",
      synonyms: ["scam", "fraud", "fake", "deceptive", "trick"] },

    { id: 12, icon: "fa-envelope", color: "#ef4444", keywords: ["email spoofing","fake sender","spoofed email","forged email"],
      question: "What is email spoofing?",
      answer: "Email spoofing fakes the 'From' address to appear as someone you trust. Check the full email header if something feels suspicious.",
      synonyms: ["fake", "forged", "sender", "address", "trust"] },

    { id: 13, icon: "fa-user-ninja", color: "#ef4444", keywords: ["spear phishing","targeted phishing","specific person"],
      question: "What is spear phishing?",
      answer: "Spear phishing is a targeted attack using personal details to appear convincing. Attackers research their victims before sending customized emails.",
      synonyms: ["targeted", "personalized", "specific", "custom"] },

    { id: 14, icon: "fa-building", color: "#ef4444", keywords: ["whaling","ceo fraud","executive phishing","business email compromise"],
      question: "What is whaling or CEO fraud?",
      answer: "Whaling targets high-profile executives like CEOs. Attackers impersonate leadership to authorize fraudulent wire transfers or sensitive data requests.",
      synonyms: ["ceo", "executive", "business", "compromise", "fraud"] },

    { id: 15, icon: "fa-link", color: "#ef4444", keywords: ["suspicious link","fake link","url manipulation","link safety"],
      question: "How do I check if a link is safe?",
      answer: "Hover over links to preview the actual URL. Look for misspellings, unusual domains, and shortened URLs. Use URL checkers for verification.",
      synonyms: ["url", "hover", "preview", "domain", "check"] },

    { id: 16, icon: "fa-file-pdf", color: "#ef4444", keywords: ["suspicious attachment","email attachment","malware in attachment"],
      question: "What should I do with suspicious email attachments?",
      answer: "Never open attachments from unknown senders. Verify with the sender through a separate communication channel before opening any file.",
      synonyms: ["attachment", "file", "open", "verify"] },

    { id: 17, icon: "fa-phone", color: "#ef4444", keywords: ["vishing","voice phishing","phone scam"],
      question: "What is vishing?",
      answer: "Vishing is phishing conducted over phone calls. Attackers impersonate legitimate organizations to extract personal information over the phone.",
      synonyms: ["voice", "phone", "call", "scam", "impersonate"] },

    { id: 18, icon: "fa-sms", color: "#ef4444", keywords: ["smishing","sms phishing","text scam"],
      question: "What is smishing?",
      answer: "Smishing uses SMS messages to trick victims into clicking malicious links or sharing personal information. Never click links in unsolicited texts.",
      synonyms: ["sms", "text", "phone", "message", "scam"] },

    { id: 19, icon: "fa-shield", color: "#ef4444", keywords: ["phishing protection","anti-phishing","email security tools"],
      question: "How can I protect against phishing?",
      answer: "Use email filtering, enable MFA, check sender addresses, and educate yourself. When in doubt, verify through official channels.",
      synonyms: ["protection", "security", "filter", "mfa", "verify"] },

    { id: 20, icon: "fa-flag", color: "#ef4444", keywords: ["report phishing","report scam","phishing reporting"],
      question: "How do I report a phishing attempt?",
      answer: "Report phishing to your organization's security team, forward suspicious emails to anti-phishing organizations, and mark as spam in your email client.",
      synonyms: ["report", "security", "forward", "spam"] },

    // ============================================================
    // SECTION 3: SOCIAL ENGINEERING (Q21-Q30)
    // ============================================================

    { id: 21, icon: "fa-masks-theater", color: "#f97316", keywords: ["social engineering","manipulation","psychological","human hacking"],
      question: "What is social engineering?",
      answer: "Social engineering manipulates people psychologically to reveal confidential information. Attackers exploit trust rather than technical vulnerabilities.",
      synonyms: ["manipulation", "psychological", "trick", "deceive", "human"] },

    { id: 22, icon: "fa-person", color: "#f97316", keywords: ["pretexting","fake story","impersonation"],
      question: "What is pretexting?",
      answer: "Pretexting involves creating a fabricated scenario to steal information. Attackers pose as authority figures to gain trust and extract sensitive data.",
      synonyms: ["story", "scenario", "impersonate", "trust"] },

    { id: 23, icon: "fa-hand", color: "#f97316", keywords: ["baiting","digital bait","free download trap"],
      question: "What is baiting?",
      answer: "Baiting offers something enticing to trap victims. Examples include free software downloads containing malware or USB drives left in parking lots.",
      synonyms: ["bait", "trap", "free", "download", "usb"] },

    { id: 24, icon: "fa-user-tie", color: "#f97316", keywords: ["tailgating","physical security","unauthorized access"],
      question: "What is tailgating?",
      answer: "Tailgating is when an unauthorized person follows an authorized person into a restricted area. Always hold doors and verify identity of others.",
      synonyms: ["physical", "access", "building", "security"] },

    { id: 25, icon: "fa-shield-alt", color: "#f97316", keywords: ["social engineering prevention","avoid manipulation"],
      question: "How do I prevent social engineering attacks?",
      answer: "Be skeptical of unsolicited requests, verify identities through official channels, and never share sensitive information without proper verification.",
      synonyms: ["prevention", "skeptical", "verify", "avoid"] },

    // ============================================================
    // SECTION 4: MFA & ACCOUNT SECURITY (Q26-Q35)
    // ============================================================

    { id: 26, icon: "fa-shield-halved", color: "#4facfe", keywords: ["mfa","multi factor","two factor","2fa","authenticator"],
      question: "What is MFA and why does it matter?",
      answer: "MFA adds a second layer of proof beyond your password, like a code from an app. It cuts account takeover risk by roughly 99%.",
      synonyms: ["two factor", "2-step", "verification", "authenticator"] },

    { id: 27, icon: "fa-key", color: "#4facfe", keywords: ["otp","one time password","verification code","sms code"],
      question: "What is OTP and how does it work?",
      answer: "OTP (One Time Password) is a code that works for only one login session. It's generated by authenticator apps or sent via SMS for verification.",
      synonyms: ["code", "sms", "app", "verification"] },

    { id: 28, icon: "fa-apple", color: "#4facfe", keywords: ["authenticator app","google authenticator","microsoft authenticator"],
      question: "What are authenticator apps?",
      answer: "Authenticator apps generate time-based codes for MFA. Popular options include Google Authenticator, Microsoft Authenticator, and Authy.",
      synonyms: ["google", "microsoft", "authy", "code"] },

    { id: 29, icon: "fa-badge", color: "#4facfe", keywords: ["security questions","backup codes","recovery codes"],
      question: "What are backup codes and security questions?",
      answer: "Backup codes are one-time codes for account recovery when you lose access to your authenticator. Security questions serve as another verification method.",
      synonyms: ["recovery", "backup", "questions", "access"] },

    { id: 30, icon: "fa-wallet", color: "#4facfe", keywords: ["biometric login","fingerprint","face id","facial recognition"],
      question: "What is biometric authentication?",
      answer: "Biometric authentication uses unique physical characteristics like fingerprints, facial recognition, or retina scans to verify identity.",
      synonyms: ["fingerprint", "face", "iris", "scan"] },

    { id: 31, icon: "fa-devices", color: "#4facfe", keywords: ["device management","registered devices","trusted devices"],
      question: "What is device management for security?",
      answer: "Device management allows you to see all devices logged into your account and remotely revoke access to suspicious or lost devices.",
      synonyms: ["devices", "trusted", "revoke", "sessions"] },

    { id: 32, icon: "fa-sync", color: "#4facfe", keywords: ["session timeout","auto logout","inactive session"],
      question: "What is session timeout?",
      answer: "Session timeout automatically logs you out after a period of inactivity. This prevents unauthorized access if you forget to log out.",
      synonyms: ["logout", "timeout", "inactive", "auto"] },

    { id: 33, icon: "fa-qrcode", color: "#4facfe", keywords: ["qr code login","scan to login","passwordless login"],
      question: "What is passwordless authentication?",
      answer: "Passwordless authentication allows login using magic links, biometrics, or QR codes without entering a password. It's more secure than traditional passwords.",
      synonyms: ["passwordless", "qr", "magic", "link"] },

    { id: 34, icon: "fa-fingerprint", color: "#4facfe", keywords: ["fido","webauthn","passkeys","hardware token"],
      question: "What are FIDO and Passkeys?",
      answer: "FIDO and Passkeys are modern authentication standards using cryptography and biometrics. They replace passwords with more secure, phishing-resistant methods.",
      synonyms: ["fido", "passkey", "hardware", "token"] },

    { id: 35, icon: "fa-undo", color: "#4facfe", keywords: ["account recovery","reset password","forgot password"],
      question: "How do I recover a compromised account?",
      answer: "Use account recovery options, change passwords, enable MFA, log out all devices, and check for unauthorized activity. Contact support if needed.",
      synonyms: ["recover", "reset", "forgot", "support"] },

    // ============================================================
    // SECTION 5: MALWARE & RANSOMWARE (Q36-Q45)
    // ============================================================

    { id: 36, icon: "fa-virus", color: "#dc2626", keywords: ["malware","virus","trojan","spyware","worm"],
      question: "What is malware?",
      answer: "Malware is malicious software designed to damage, disrupt, or gain unauthorized access. Includes viruses, worms, trojans, and spyware.",
      synonyms: ["virus", "trojan", "spyware", "worm"] },

    { id: 37, icon: "fa-skull", color: "#dc2626", keywords: ["ransomware","encrypt","decrypt","pay ransom"],
      question: "What is ransomware?",
      answer: "Ransomware encrypts your files and demands payment to unlock them. Keep regular backups and never open unknown attachments.",
      synonyms: ["cryptolocker", "encrypt", "decrypt", "bitcoin"] },

    { id: 38, icon: "fa-eye", color: "#dc2626", keywords: ["spyware","surveillance","tracking","monitoring"],
      question: "What is spyware?",
      answer: "Spyware secretly monitors your activities and collects personal information without consent. It can track keystrokes, browsing, and more.",
      synonyms: ["monitor", "track", "steal", "surveillance"] },

    { id: 39, icon: "fa-door-open", color: "#dc2626", keywords: ["trojan","trojan horse","backdoor","hidden threat"],
      question: "What is a trojan horse?",
      answer: "A trojan disguises itself as legitimate software but contains malicious code. It creates backdoors for attackers to access your system.",
      synonyms: ["trojan", "disguise", "backdoor", "hidden"] },

    { id: 40, icon: "fa-worm", color: "#dc2626", keywords: ["worm","self-replicating","network worm"],
      question: "What is a computer worm?",
      answer: "A worm is self-replicating malware that spreads across networks without user action. It can consume bandwidth and install additional malware.",
      synonyms: ["self-replicating", "network", "spread"] },

    { id: 41, icon: "fa-root", color: "#dc2626", keywords: ["rootkit","deep access","system hide","persistence"],
      question: "What is a rootkit?",
      answer: "A rootkit hides malicious processes from the operating system, providing deep system access. It's difficult to detect and requires specialized removal.",
      synonyms: ["hide", "system", "deep", "persistence"] },

    { id: 42, icon: "fa-bug", color: "#dc2626", keywords: ["zero day","zero-day","unknown vulnerability"],
      question: "What is a zero-day vulnerability?",
      answer: "A zero-day vulnerability is an unknown security flaw that attackers discover before developers can patch it. It's highly dangerous.",
      synonyms: ["unknown", "unpatched", "vulnerability", "exploit"] },

    { id: 43, icon: "fa-shield-virus", color: "#dc2626", keywords: ["antivirus","anti-malware","virus protection"],
      question: "Do I still need antivirus software?",
      answer: "Yes. Antivirus software detects and removes known malware and adds a layer of protection alongside safe browsing habits.",
      synonyms: ["protection", "windows defender", "scan", "detect"] },

    { id: 44, icon: "fa-download", color: "#dc2626", keywords: ["malware sources","infected downloads","malicious websites"],
      question: "Where does malware commonly come from?",
      answer: "Malware commonly comes from email attachments, fake downloads, malicious websites, infected USB drives, and software from untrusted sources.",
      synonyms: ["download", "website", "email", "usb", "source"] },

    { id: 45, icon: "fa-clean", color: "#dc2626", keywords: ["malware removal","virus removal","clean system"],
      question: "How do I remove malware from my system?",
      answer: "Use reliable antivirus software to scan and remove malware. Boot into safe mode if necessary. If severe, reinstall the operating system.",
      synonyms: ["clean", "remove", "scan", "reset"] },

    // ============================================================
    // SECTION 6: NETWORK SECURITY (Q46-Q55)
    // ============================================================

    { id: 46, icon: "fa-network-wired", color: "#64748b", keywords: ["firewall","network security","block","filter"],
      question: "What is a firewall and why do I need one?",
      answer: "A firewall monitors and filters network traffic to block unauthorized access. It prevents attackers from directly connecting to your computer.",
      synonyms: ["block", "filter", "traffic", "protection"] },

    { id: 47, icon: "fa-wifi", color: "#64748b", keywords: ["public wifi","hotspot","open network","wifi security"],
      question: "What are the risks of public Wi-Fi?",
      answer: "Public Wi-Fi is often unencrypted, letting attackers intercept your data. Use a VPN and avoid banking on public networks.",
      synonyms: ["hotspot", "open", "intercept", "vpn"] },

    { id: 48, icon: "fa-shield", color: "#64748b", keywords: ["vpn","virtual private network","encrypted connection"],
      question: "Why should I use a VPN?",
      answer: "A VPN encrypts your internet traffic, hiding your data especially on public Wi-Fi. It prevents eavesdropping and maintains privacy.",
      synonyms: ["encrypt", "privacy", "anonymous", "secure"] },

    { id: 49, icon: "fa-router", color: "#64748b", keywords: ["router security","wifi password","network encryption"],
      question: "How do I secure my home Wi-Fi?",
      answer: "Change default router passwords, enable WPA3 encryption, hide SSID, use MAC filtering, and keep router firmware updated.",
      synonyms: ["router", "password", "encryption", "firmware"] },

    { id: 50, icon: "fa-port", color: "#64748b", keywords: ["open ports","port scanning","firewall rules"],
      question: "What are open ports and why are they dangerous?",
      answer: "Open ports are entry points for network communication. Unnecessary open ports can be exploited by attackers. Close unused ports and use a firewall.",
      synonyms: ["ports", "entry", "exploit", "close"] },

    { id: 51, icon: "fa-divide", color: "#64748b", keywords: ["network segmentation","vlan","isolate","subnet"],
      question: "What is network segmentation?",
      answer: "Network segmentation divides your network into segments to limit breach impact. Separate guest, IoT, and business networks for better security.",
      synonyms: ["segment", "isolate", "divide", "vlan"] },

    { id: 52, icon: "fa-dns", color: "#64748b", keywords: ["dns security","dns hijacking","domain name system"],
      question: "What is DNS security and why is it important?",
      answer: "DNS security prevents attackers from redirecting your internet traffic to malicious sites. Use secure DNS servers and enable DNS over HTTPS.",
      synonyms: ["dns", "domain", "hijacking", "redirect"] },

    { id: 53, icon: "fa-proxy", color: "#64748b", keywords: ["proxy server","proxy","anonymous browsing"],
      question: "What is a proxy server?",
      answer: "A proxy server acts as an intermediary between your device and the internet. It can hide your IP and provide additional security layers.",
      synonyms: ["proxy", "intermediary", "anonymous", "ip"] },

    { id: 54, icon: "fa-server", color: "#64748b", keywords: ["ddos","distributed denial of service","attack"],
      question: "What is a DDoS attack?",
      answer: "DDoS overwhelms a service with traffic, making it unavailable. Attackers use compromised devices to flood servers with requests.",
      synonyms: ["ddos", "flood", "overload", "denial"] },

    { id: 55, icon: "fa-ip", color: "#64748b", keywords: ["ip address","hide ip","location privacy"],
      question: "Why should I hide my IP address?",
      answer: "Hiding your IP address protects your location and identity online. Use VPNs or proxies to prevent tracking and targeted attacks.",
      synonyms: ["ip", "location", "privacy", "tracking"] },

    // ============================================================
    // SECTION 7: ENCRYPTION & DATA PROTECTION (Q56-Q65)
    // ============================================================

    { id: 56, icon: "fa-user-secret", color: "#7c3aed", keywords: ["encryption","encrypted","cipher","decrypt"],
      question: "What is encryption?",
      answer: "Encryption converts readable data into coded format accessible only with the correct key. It protects data during storage and transmission.",
      synonyms: ["cipher", "decode", "scramble", "secure"] },

    { id: 57, icon: "fa-end", color: "#7c3aed", keywords: ["end-to-end encryption","e2ee","secure messaging"],
      question: "What is end-to-end encryption?",
      answer: "End-to-end encryption ensures only sender and receiver can read messages. Not even the service provider can access the content.",
      synonyms: ["e2ee", "whatsapp", "signal", "private"] },

    { id: 58, icon: "fa-key", color: "#7c3aed", keywords: ["public key","private key","asymmetric encryption"],
      question: "What is public key encryption?",
      answer: "Public key encryption uses two keys: a public key for encryption and a private key for decryption. It enables secure communication without sharing secrets.",
      synonyms: ["public", "private", "asymmetric", "cryptography"] },

    { id: 59, icon: "fa-lock", color: "#7c3aed", keywords: ["https","ssl","tls","padlock","secure website"],
      question: "What does HTTPS mean and why does it matter?",
      answer: "HTTPS encrypts data between your browser and the website. Look for the padlock icon to ensure secure communication.",
      synonyms: ["ssl", "tls", "padlock", "secure"] },

    { id: 60, icon: "fa-cloud", color: "#7c3aed", keywords: ["cloud encryption","cloud security","aws","azure"],
      question: "What is cloud encryption?",
      answer: "Cloud encryption protects data stored in cloud services. Data is encrypted before storage and remains secure even if the provider is breached.",
      synonyms: ["cloud", "storage", "encrypt", "secure"] },

    { id: 61, icon: "fa-file-alt", color: "#7c3aed", keywords: ["file encryption","encrypt files","folder encryption"],
      question: "How do I encrypt files on my computer?",
      answer: "Use built-in tools like BitLocker for Windows, FileVault for Mac, or third-party software like VeraCrypt for file and folder encryption.",
      synonyms: ["file", "folder", "bitlocker", "filevault"] },

    { id: 62, icon: "fa-envelope", color: "#7c3aed", keywords: ["encrypted email","pgp","secure email"],
      question: "What is encrypted email?",
      answer: "Encrypted email uses protocols like PGP to secure messages. Only recipients with the correct key can read the email content.",
      synonyms: ["pgp", "secure", "message", "privacy"] },

    { id: 63, icon: "fa-database", color: "#7c3aed", keywords: ["data at rest","data in transit","data protection"],
      question: "What is data at rest vs data in transit?",
      answer: "Data at rest is stored data (hard drives, cloud). Data in transit is being transmitted. Both need encryption for complete protection.",
      synonyms: ["storage", "transmission", "encrypt", "protect"] },

    { id: 64, icon: "fa-trash", color: "#7c3aed", keywords: ["secure deletion","data destruction","wipe","erase"],
      question: "How do I securely delete files?",
      answer: "Use secure deletion tools that overwrite data multiple times. Simple deletion can be recovered using file recovery tools.",
      synonyms: ["wipe", "erase", "destroy", "recover"] },

    { id: 65, icon: "fa-shield", color: "#7c3aed", keywords: ["data breach","leaked data","compromised data"],
      question: "What should I do after a data breach?",
      answer: "Change passwords immediately, enable MFA, monitor accounts for suspicious activity, and check haveibeenpwned.com.",
      synonyms: ["breach", "leak", "compromised", "exposed"] },

    // ============================================================
    // SECTION 8: BACKUPS & RECOVERY (Q66-Q70)
    // ============================================================

    { id: 66, icon: "fa-clock-rotate-left", color: "#0d9488", keywords: ["backup","data recovery","restore"],
      question: "Why are backups important?",
      answer: "Backups let you recover files after loss, corruption, or ransomware. Follow the 3-2-1 rule: 3 copies, 2 media types, 1 offsite.",
      synonyms: ["restore", "recovery", "copy", "cloud"] },

    { id: 67, icon: "fa-cloud", color: "#0d9488", keywords: ["cloud backup","offsite backup","online backup"],
      question: "What is cloud backup?",
      answer: "Cloud backup stores your data on remote servers accessed via internet. It provides offsite protection against local disasters and theft.",
      synonyms: ["cloud", "offsite", "online", "remote"] },

    { id: 68, icon: "fa-external", color: "#0d9488", keywords: ["external backup","usb backup","hard drive backup"],
      question: "What is local backup?",
      answer: "Local backup stores data on external hard drives, USB drives, or NAS devices. It provides fast recovery but needs physical security.",
      synonyms: ["external", "usb", "hard drive", "local"] },

    { id: 69, icon: "fa-sync", color: "#0d9488", keywords: ["automatic backup","scheduled backup","daily backup"],
      question: "How often should I backup my data?",
      answer: "Backup daily for frequently changing data. Use automatic tools for regular scheduled backups to avoid forgetting.",
      synonyms: ["automatic", "schedule", "daily", "regular"] },

    { id: 70, icon: "fa-check-double", color: "#0d9488", keywords: ["restore test","backup verification","backup testing"],
      question: "How do I test if my backup works?",
      answer: "Perform regular restore tests to verify backup integrity. Don't wait until data loss to discover backup failures.",
      synonyms: ["test", "verify", "restore", "integrity"] },

    // ============================================================
    // SECTION 9: IDENTITY & PRIVACY (Q71-Q80)
    // ============================================================

    { id: 71, icon: "fa-id-badge", color: "#ec4899", keywords: ["identity theft","id theft","stolen identity","fraud"],
      question: "What is identity theft?",
      answer: "Identity theft occurs when someone uses your personal data without permission to commit fraud. Never share your NIC or OTPs with anyone.",
      synonyms: ["id theft", "stolen", "fraud", "personal"] },

    { id: 72, icon: "fa-credit-card", color: "#ec4899", keywords: ["credit card fraud","card skimming","payment fraud"],
      question: "How do I prevent credit card fraud?",
      answer: "Use secure payment gateways, monitor statements regularly, set up transaction alerts, and avoid saving card details on websites.",
      synonyms: ["card", "payment", "skimming", "fraud"] },

    { id: 73, icon: "fa-shoe-prints", color: "#ec4899", keywords: ["digital footprint","online footprint","data trail"],
      question: "What is a digital footprint?",
      answer: "Your digital footprint is the trail of data you leave online through browsing, posts, and interactions. Manage it to protect your privacy.",
      synonyms: ["trail", "online", "presence", "data"] },

    { id: 74, icon: "fa-user-circle", color: "#ec4899", keywords: ["online privacy","privacy settings","data privacy"],
      question: "How do I protect my online privacy?",
      answer: "Review privacy settings, limit information sharing, use privacy-focused browsers, and be selective about what you post publicly.",
      synonyms: ["privacy", "settings", "share", "control"] },

    { id: 75, icon: "fa-cookie", color: "#ec4899", keywords: ["cookies","tracking","browser privacy"],
      question: "What are cookies and how do they affect privacy?",
      answer: "Cookies track your browsing activity. Use privacy settings to control cookies, clear them regularly, and use Do Not Track features.",
      synonyms: ["tracking", "browser", "clear", "privacy"] },

    { id: 76, icon: "fa-people", color: "#ec4899", keywords: ["social media privacy","facebook privacy","instagram security"],
      question: "How do I secure my social media accounts?",
      answer: "Use MFA, review privacy settings, be cautious about unknown requests, and set profiles to 'friends only' or restricted.",
      synonyms: ["facebook", "instagram", "privacy", "settings"] },

    { id: 77, icon: "fa-person-walking", color: "#ec4899", keywords: ["oversharing","posting personal info","online sharing"],
      question: "What is oversharing and why is it dangerous?",
      answer: "Oversharing is revealing too much personal information online. Attackers use it for social engineering and identity theft.",
      synonyms: ["share", "personal", "danger", "information"] },

    { id: 78, icon: "fa-location-dot", color: "#ec4899", keywords: ["location tracking","gps privacy","location sharing"],
      question: "Why should I limit location sharing?",
      answer: "Location sharing reveals your physical whereabouts, enabling stalking, theft, and targeted attacks. Disable location services when not needed.",
      synonyms: ["location", "gps", "tracking", "privacy"] },

    { id: 79, icon: "fa-face-smile", color: "#ec4899", keywords: ["facial recognition","face privacy","biometric privacy"],
      question: "What are facial recognition privacy concerns?",
      answer: "Facial recognition can be used for surveillance without consent. Consider opting out when possible and check privacy settings.",
      synonyms: ["face", "biometric", "surveillance", "consent"] },

    { id: 80, icon: "fa-shield-halved", color: "#ec4899", keywords: ["privacy laws","gdpr","ccpa","data protection laws"],
      question: "What are data privacy laws?",
      answer: "Data privacy laws like GDPR and CCPA protect your personal information. They give you rights to access, correct, and delete your data.",
      synonyms: ["gdpr", "ccpa", "regulation", "protection"] },

    // ============================================================
    // SECTION 10: DEVICE & MOBILE SECURITY (Q81-Q90)
    // ============================================================

    { id: 81, icon: "fa-laptop-mobile", color: "#0891b2", keywords: ["device security","lock screen","screen lock"],
      question: "How do I secure my devices?",
      answer: "Use strong PIN/biometric lock, enable auto-lock, and enable remote wipe features to protect against theft and unauthorized access.",
      synonyms: ["pin", "biometric", "lock", "remote wipe"] },

    { id: 82, icon: "fa-mobile-screen", color: "#0891b2", keywords: ["smartphone security","android security","ios security"],
      question: "How do I secure my smartphone?",
      answer: "Only install apps from official stores, review app permissions, keep OS updated, and enable auto-lock and remote tracking features.",
      synonyms: ["phone", "android", "ios", "permissions"] },

    { id: 83, icon: "fa-desktop", color: "#0891b2", keywords: ["computer security","pc security","laptop security"],
      question: "How do I secure my computer?",
      answer: "Use strong passwords, enable firewall, install antivirus, keep software updated, and encrypt sensitive files. Back up data regularly.",
      synonyms: ["pc", "laptop", "windows", "security"] },

    { id: 84, icon: "fa-tablet", color: "#0891b2", keywords: ["tablet security","ipad security","android tablet"],
      question: "How do I secure my tablet?",
      answer: "Use screen locks, install apps only from official stores, avoid public Wi-Fi for sensitive activities, and enable remote wipe features.",
      synonyms: ["ipad", "android", "tablet", "lock"] },

    { id: 85, icon: "fa-clock", color: "#0891b2", keywords: ["auto lock","timeout","screen timeout"],
      question: "Why is auto-lock important?",
      answer: "Auto-lock prevents unauthorized access when you step away. Set a short timeout to minimize the window of opportunity for attackers.",
      synonyms: ["timeout", "lock", "inactivity", "security"] },

    { id: 86, icon: "fa-bolt", color: "#0891b2", keywords: ["remote wipe","find my device","device tracking"],
      question: "What is remote wipe and why is it useful?",
      answer: "Remote wipe lets you erase device data remotely if stolen. It protects sensitive information from falling into wrong hands.",
      synonyms: ["erase", "remote", "tracking", "theft"] },

    { id: 87, icon: "fa-battery", color: "#0891b2", keywords: ["device updates","security patches","firmware update"],
      question: "Why are device updates important?",
      answer: "Device updates patch security vulnerabilities and fix bugs. Delaying updates leaves devices exposed to known exploits.",
      synonyms: ["update", "patch", "firmware", "security"] },

    { id: 88, icon: "fa-download", color: "#0891b2", keywords: ["app safety","safe apps","app verification"],
      question: "How do I verify if an app is safe?",
      answer: "Check reviews, developer reputation, permissions requested, and download from official stores only. Avoid apps with excessive permissions.",
      synonyms: ["app", "verify", "safe", "permissions"] },

    { id: 89, icon: "fa-gift", color: "#0891b2", keywords: ["gift card scam","app scam","fake app"],
      question: "What are fake app scams?",
      answer: "Fake apps mimic legitimate apps to steal information or display ads. Download only from official app stores and check developer details.",
      synonyms: ["fake", "scam", "imposter", "deceptive"] },

    { id: 90, icon: "fa-bluetooth", color: "#0891b2", keywords: ["bluetooth security","bluetooth attacks","blueborne"],
      question: "What are Bluetooth security risks?",
      answer: "Bluetooth can be exploited for unauthorized access or data theft. Disable Bluetooth when not in use and avoid pairing with unknown devices.",
      synonyms: ["bluetooth", "pair", "attack", "disable"] },

    // ============================================================
    // SECTION 11: CYBER AWARENESS & EDUCATION (Q91-Q100)
    // ============================================================

    { id: 91, icon: "fa-graduation-cap", color: "#0d9488", keywords: ["cyber awareness","security awareness","student safety"],
      question: "What is cyber awareness and why does it matter?",
      answer: "Cyber awareness means understanding digital threats and practicing safe habits. It's your first line of defense against most attacks.",
      synonyms: ["awareness", "education", "safety", "defense"] },

    { id: 92, icon: "fa-book", color: "#0d9488", keywords: ["cyber education","security training","learning"],
      question: "How can I learn more about cyber security?",
      answer: "Take online courses, attend workshops, read security blogs, and follow organizations like ISACA and ISC2 for professional development.",
      synonyms: ["learn", "course", "training", "education"] },

    { id: 93, icon: "fa-flag", color: "#0d9488", keywords: ["cyber security trends","latest threats","current attacks"],
      question: "What are current cyber security trends?",
      answer: "AI-powered attacks, ransomware-as-a-service, supply chain attacks, and zero-day exploits are major trends. Stay informed through security news.",
      synonyms: ["trends", "latest", "news", "threats"] },

    { id: 94, icon: "fa-building", color: "#0d9488", keywords: ["workplace security","corporate security","office safety"],
      question: "What are workplace cyber security practices?",
      answer: "Lock screens when away, use company-approved devices, report suspicious emails to IT, and follow security policies.",
      synonyms: ["office", "corporate", "work", "it"] },

    { id: 95, icon: "fa-house", color: "#0d9488", keywords: ["home security","family safety","child safety online"],
      question: "How do I protect my family online?",
      answer: "Use parental controls, teach children about online safety, monitor their activity, and keep devices in common areas.",
      synonyms: ["family", "children", "parent", "online"] },

    { id: 96, icon: "fa-money-bill", color: "#0d9488", keywords: ["online banking","financial security","bank fraud"],
      question: "How do I stay safe with online banking?",
      answer: "Use official apps only, never share OTPs, enable transaction alerts, and monitor accounts regularly for suspicious activity.",
      synonyms: ["bank", "otp", "transaction", "fraud"] },

    { id: 97, icon: "fa-cart-shopping", color: "#0d9488", keywords: ["online shopping","ecommerce security","payment safety"],
      question: "How do I shop safely online?",
      answer: "Use trusted websites, look for HTTPS, avoid saving card details, use secure payment methods like PayPal, and check reviews.",
      synonyms: ["shop", "payment", "trusted", "secure"] },

    { id: 98, icon: "fa-gavel", color: "#0d9488", keywords: ["cyber crime reporting","report cyber crime","police"],
      question: "How do I report cyber crime?",
      answer: "Report cyber crimes to local authorities and cyber crime units. Keep evidence like screenshots and suspicious emails.",
      synonyms: ["report", "police", "crime", "authorities"] },

    { id: 99, icon: "fa-handshake", color: "#0d9488", keywords: ["security community","isaca","cyber professionals"],
      question: "What are security communities and why join them?",
      answer: "Security communities like ISACA provide networking, learning, and certification opportunities. Join to stay updated and build your career.",
      synonyms: ["community", "isaca", "networking", "learn"] },

    { id: 100, icon: "fa-stars", color: "#0d9488", keywords: ["cyber security career","security jobs","career path"],
      question: "How do I start a career in cyber security?",
      answer: "Start with certifications like CompTIA Security+, ISACA CISA, or CISSP. Gain practical experience through labs, internships, and volunteer work.",
      synonyms: ["career", "jobs", "certification", "experience"] }
];

// ============================================================
// ENHANCED SEARCH FUNCTIONALITY
// ============================================================

function advancedMatch(query, item) {
    let score = 0;
    const q = query.toLowerCase().trim();
    const words = q.split(/\s+/).filter(w => w.length > 2);
    
    const searchableText = (item.question + " " + item.answer + " " + item.keywords.join(" ") + " " + (item.synonyms || []).join(" ")).toLowerCase();
    
    if (searchableText.includes(q)) {
        score += 25;
    }
    
    words.forEach(word => {
        item.keywords.forEach(k => {
            if (k.toLowerCase().includes(word) || word.includes(k.toLowerCase())) {
                score += 12;
            }
        });
        
        if (item.synonyms) {
            item.synonyms.forEach(s => {
                if (s.toLowerCase().includes(word) || word.includes(s.toLowerCase())) {
                    score += 8;
                }
            });
        }
        
        if (item.question.toLowerCase().includes(word)) {
            score += 6;
        }
        
        if (item.answer.toLowerCase().includes(word)) {
            score += 3;
        }
    });
    
    const cyberTerms = ["cyber", "security", "online", "internet", "digital", "computer", "network", "data", "privacy", "safety", "protection", "threat", "attack", "safe", "secure", "hack", "virus", "malware"];
    cyberTerms.forEach(term => {
        if (q.includes(term) || words.some(w => w.includes(term) || term.includes(w))) {
            if (item.keywords.some(k => k.toLowerCase().includes(term)) || 
                (item.synonyms && item.synonyms.some(s => s.toLowerCase().includes(term)))) {
                score += 5;
            }
        }
    });
    
    return score;
}

function getTranslatedQA(index) {
    const t = translations[currentLang] || translations.en;
    const qKey = `qa${index+1}_q`;
    const aKey = `qa${index+1}_a`;
    return {
        question: t[qKey] || translations.en[qKey] || faqData[index].question,
        answer: t[aKey] || translations.en[aKey] || faqData[index].answer
    };
}

function runSearch(prefill) {
    const input = document.getElementById('search-input');
    if (prefill) input.value = prefill;
    const query = input.value.trim().toLowerCase();
    const resultsDiv = document.getElementById('search-results');
    if (!query) { resultsDiv.innerHTML = ""; return; }

    const scored = faqData
        .map(item => ({ 
            item, 
            score: advancedMatch(query, item)
        }))
        .filter(x => x.score > 0)
        .sort((a, b) => b.score - a.score);

    const t = translations[currentLang] || translations.en;

    if (scored.length === 0) {
        const randomSuggestions = faqData.slice(0, 6);
        const noResultText = t.search_no_result || `No exact match found for "${input.value}". Try one of these popular topics:`;
        
        const chipsHtml = randomSuggestions.map((s, idx) => {
            const translated = getTranslatedQA(idx);
            return `<span class="suggestion-chip" onclick="runSearch('${translated.question.replace(/'/g, "")}')">${translated.question}</span>`;
        }).join("");
        
        resultsDiv.innerHTML = `
            <div class="search-no-result">
                <i class="fa-solid fa-circle-exclamation"></i> ${noResultText}
                <div class="suggestion-chips">
                    ${chipsHtml}
                </div>
            </div>`;
        return;
    }

    const maxResults = 8;
    const showAll = scored.length <= maxResults;
    const totalResults = scored.length;
    
    let resultsHtml = `<div style="margin-bottom:12px; font-size:14px; color:var(--text-muted);">${t.search_results_count || 'Found'} <strong style="color:var(--accent-primary);">${totalResults}</strong> ${t.search_results_for || 'results for'} "${input.value}"</div>`;
    
    scored.slice(0, maxResults).forEach(({ item, score }) => {
        const index = faqData.indexOf(item);
        const translated = getTranslatedQA(index);
        
        const relevanceLevel = score > 25 ? 'Very High' : score > 18 ? 'High' : score > 10 ? 'Medium' : 'Low';
        const relevanceColor = score > 25 ? '#22c55e' : score > 18 ? '#22c55e' : score > 10 ? '#f59e0b' : '#ef4444';
        
        resultsHtml += `
            <div class="search-result-card">
                <div class="result-header">
                    <div class="result-icon-badge" style="background:${item.color}22; color:${item.color};">
                        <i class="fa-solid ${item.icon}"></i>
                    </div>
                    <h4 style="margin:0; font-size:15px;">${translated.question}</h4>
                    <span style="margin-left:auto; font-size:10px; color:${relevanceColor}; background:${relevanceColor}22; padding:2px 10px; border-radius:12px; white-space:nowrap;">${relevanceLevel}</span>
                </div>
                <p style="font-size:14px; line-height:1.6;">${translated.answer}</p>
            </div>
        `;
    });
    
    if (!showAll && scored.length > maxResults) {
        resultsHtml += `
            <div style="text-align:center; margin-top:20px;">
                <button onclick="showAllResults()" style="background:rgba(0,242,254,0.1); color:var(--accent-primary); border:1px solid rgba(0,242,254,0.3); padding:12px 30px; border-radius:10px; cursor:pointer; font-weight:600; font-size:14px; transition:all 0.3s;" 
                        onmouseover="this.style.background='rgba(0,242,254,0.2)'" onmouseout="this.style.background='rgba(0,242,254,0.1)'">
                    <i class="fa-solid fa-chevron-down"></i> ${t.show_more || 'Show'} ${scored.length - maxResults} ${t.more_results || 'more results'}
                </button>
            </div>
        `;
        window._allSearchResults = scored;
    }
    
    resultsDiv.innerHTML = resultsHtml;
}

function showAllResults() {
    if (!window._allSearchResults) return;
    
    const resultsDiv = document.getElementById('search-results');
    const input = document.getElementById('search-input');
    const t = translations[currentLang] || translations.en;
    const totalResults = window._allSearchResults.length;
    
    let allHtml = `<div style="margin-bottom:12px; font-size:14px; color:var(--text-muted);">${t.search_results_count || 'Found'} <strong style="color:var(--accent-primary);">${totalResults}</strong> ${t.search_results_for || 'results for'} "${input.value}"</div>`;
    
    window._allSearchResults.forEach(({ item, score }) => {
        const index = faqData.indexOf(item);
        const translated = getTranslatedQA(index);
        
        const relevanceLevel = score > 25 ? 'Very High' : score > 18 ? 'High' : score > 10 ? 'Medium' : 'Low';
        const relevanceColor = score > 25 ? '#22c55e' : score > 18 ? '#22c55e' : score > 10 ? '#f59e0b' : '#ef4444';
        
        allHtml += `
            <div class="search-result-card">
                <div class="result-header">
                    <div class="result-icon-badge" style="background:${item.color}22; color:${item.color};">
                        <i class="fa-solid ${item.icon}"></i>
                    </div>
                    <h4 style="margin:0; font-size:15px;">${translated.question}</h4>
                    <span style="margin-left:auto; font-size:10px; color:${relevanceColor}; background:${relevanceColor}22; padding:2px 10px; border-radius:12px; white-space:nowrap;">${relevanceLevel}</span>
                </div>
                <p style="font-size:14px; line-height:1.6;">${translated.answer}</p>
            </div>
        `;
    });
    
    allHtml += `
        <div style="text-align:center; margin-top:20px;">
            <button onclick="window._allSearchResults=null; runSearch()" style="background:rgba(239,68,68,0.1); color:#ef4444; border:1px solid rgba(239,68,68,0.3); padding:12px 30px; border-radius:10px; cursor:pointer; font-weight:600; font-size:14px; transition:all 0.3s;">
                <i class="fa-solid fa-chevron-up"></i> ${t.show_fewer || 'Show fewer results'}
            </button>
        </div>
    `;
    
    resultsDiv.innerHTML = allHtml;
}

// ============================================================
// TRANSLATIONS (EN / SI / TA) - FULL PAGE TRANSLATIONS
// ============================================================

const translations = {
    en: {
        // Ticker
        ticker1_label: "CRITICAL ALERT:",
        ticker1_text: "Active phishing campaign targeting local university student portals detected.",
        ticker2_label: "CYBER HYGIENE:",
        ticker2_text: "Multi-Factor Authentication (MFA) reduces account takeover risk by 99%. Enable it now.",
        ticker3_label: "PATCH UPDATE:",
        ticker3_text: "Zero-day exploit reported in chromium browsers. Verify your version is up-to-date.",
        
        // Hero
        hero_title: "Cyber Awareness Hub",
        hero_stay: "Stay", hero_alert: "Alert.", hero_safe: "Safe.", hero_secure: "Secure.",
        hero_desc: "Develop advanced zero-trust detection strategies and strengthen your professional posture. Your awareness remains the absolute final firewall against engineered digital vectors.",
        
        // Search
        search_placeholder: "Ask a question... e.g. 'cyber security' or 'phishing'",
        search_no_result: "No exact match found. Try one of these popular topics:",
        search_btn: "Search",
        search_results_count: "Found",
        search_results_for: "results for",
        show_more: "Show",
        more_results: "more results",
        show_fewer: "Show fewer results",
        
        // Cards
        card1_tag: "Strategic Vector",
        card1_title: "The Digital Imperative",
        card1_p1: "Modern cyber threats evolve beyond traditional firewalls. Dynamic awareness stands as the initial line of defense to shield your corporate identity, intellectual property, and financial assets.",
        card1_p2: "With artificial intelligence amplifying malicious social engineering, evaluating and verifying unexpected communication is a mandatory tech skill.",
        
        // Quiz
        quiz_tag: "Simulation",
        quiz_title: "Instant Threat Assessment",
        quiz_question: "An external address contacts you with an urgent notification containing an attachment titled \"Semester_Exam_Leak.pdf.exe\". What is your immediate triage response?",
        quiz_btn: "Execute Analysis",
        quiz_result: "<i class='fa-solid fa-circle-check'></i> <strong>Analysis Complete:</strong> Critical threat identified! The trailing <code>.exe</code> suffix marks this file as an executable binary payload, not a standard document. Executing this would compromise the system endpoint. Correct action: Report vector to Security and delete immediately.",
        
        // Checklist
        card3_tag: "Operational Hygiene",
        card3_title: "Standard Defensive Habits",
        check1_title: "MFA Identity Verification",
        check1_desc: "Enforce cryptographically secure mobile authenticator tokens over vulnerable SMS verification.",
        check2_title: "Patch Lifecycle Management",
        check2_desc: "Enable automatic vendor updates to close exploitable windows against zero-day vulnerabilities.",
        check3_title: "Public Network Encryption",
        check3_desc: "Mandate a secure, encrypted corporate VPN gateway prior to parsing sensitive assets on untrusted Wi-Fi.",
        
        // Tips
        tips_heading: "Critical Threat Mitigations & Scenarios",
        tip1_title: "Advanced Phishing Isolation",
        tip1_quote: "\"Ignore suspicious emails, messages, or links. Delete them. Don't engage.\"",
        tip1_label: "Defensive Strategies:",
        tip1_li1: "Interacting with 'Unsubscribe' hooks embedded inside targeted phishing loops validates delivery vectors directly to attackers.",
        tip1_li2: "Perform cryptographic header verification and SPF/DKIM validation if corporate origin is ambiguous.",
        tip1_li3: "Route threat indicators to security operations centers using platform reporting plugins immediately.",
        tip2_title: "Enforcing PII Integrity Boundaries",
        tip2_quote: "\"Never share any personal information or bank details for job offers you have not applied for.\"",
        tip2_label: "Identity Protection Blueprint:",
        tip2_li1: "Restrain the upload of national identity metrics (NIC, Passports, or transcripts) into external, unverified form fields.",
        tip2_li2: "Legitimate administrators and institutions maintain standard communication channels; they never solicit high-privilege OTPs over arbitrary calls.",
        tip2_li3: "Minimize your open intelligence profile by filtering personal metadata exposures across secondary social footprints.",
        tip3_title: "Neutralizing Typo-Squatting Vectors",
        tip3_quote: "\"Fake job offers often have spelling errors and grammatical mistakes. Stay alert!\"",
        tip3_label: "Visual Validation Metrics:",
        tip3_li1: "Inspect address syntax deeply for lookalike indicators (such as substituting characters or extensions like .net/.xyz for corporate domains).",
        tip3_li2: "Audit full payload extensions carefully to detect double-extension masquerades like invoice.pdf.exe.",
        tip3_li3: "High-velocity threat syntax demanding instantaneous operational responses usually indicates social engineering.",
        tip4_title: "Detecting Financial Advance-Fee Scams",
        tip4_quote: "\"Legitimate companies never ask for money. If it sounds too good to be true, it probably is.\"",
        tip4_label: "Financial Security Safeguards:",
        tip4_li1: "Legitimate talent onboarding systems do not request onboarding deposits, software buy-backs, or security compliance tracking fees.",
        tip4_li2: "Exercise strong skepticism toward task-automation workflows offering heavy returns for small manual actions.",
        tip4_li3: "Query official corporate business registers independently before transmitting capital to any third-party gateway.",
        tip5_title: "Assessing Outbound Domain Authority",
        tip5_quote: "\"Genuine offers are sent from company-registered email addresses. Always verify before you trust.\"",
        tip5_label: "Enterprise Validation Protocol:",
        tip5_li1: "Established organizations do not conduct formal outreach through consumer spaces like @gmail.com or @yahoo.com.",
        tip5_li2: "Audit the outbound recruiter's official professional history via authenticated enterprise spaces like LinkedIn.",
        tip5_li3: "Confirm communication validity through an out-of-band contact channel established directly from the company's official site.",
        
        // QA Section
        qa_heading: "Cyber Security Questions",
        qa_subheading: "Tap any question to reveal the answer",
        qa_previous: "Previous",
        qa_next: "Next",
        qa_page: "Page",
        qa_of: "of",
        qa_showing: "Showing",
        qa_questions: "questions",
        
        // Footer
        footer_mission_title: "Mission Parameters",
        footer_mission_desc: "Digital security is an unyielding, collective effort. We aim to elevate digital security across student ecosystems through early threat detection and proactive learning framework updates.",
        footer_sponsor_title: "Sponsoring Entity",
        footer_tagline: "Empowering Minds. Fortifying Digital Resilience.",
        footer_touch_title: "Digital Touchpoints",
        footer_touch_desc: "Connect with our engineering community for technical meetups, updates, and upcoming structural hackathons.",
        footer_bottom_text: "Validate Intent. Think Before You Click. Engineered Safely by ICBT Student Group."
    },
    si: {
        // Ticker
        ticker1_label: "බරපතල අනතුරු ඇඟවීම:",
        ticker1_text: "ප්‍රාදේශීය විශ්වවිද්‍යාල සිසුන්ගේ portal ඉලක්ක කරගත් phishing ව්‍යාපාරයක් හඳුනාගෙන ඇත.",
        ticker2_label: "සයිබර් සුරක්ෂිතතාවය:",
        ticker2_text: "Multi-Factor Authentication (MFA) මගින් ගිණුම් අත්පත් කරගැනීමේ අවදානම 99%කින් අඩු කරයි. දැන්ම සක්‍රීය කරන්න.",
        ticker3_label: "Patch යාවත්කාලීනය:",
        ticker3_text: "Chromium browsers වල zero-day exploit එකක් වාර්තා විය. ඔබේ version එක up-to-date දැයි තහවුරු කරගන්න.",
        
        // Hero
        hero_title: "සයිබර් දැනුවත්භාවය මධ්‍යස්ථානය",
        hero_stay: "සිටින්න", hero_alert: "සුපරීක්ෂාකාරීව.", hero_safe: "ආරක්ෂිතව.", hero_secure: "සුරක්ෂිතව.",
        hero_desc: "දියුණු zero-trust හඳුනාගැනීමේ උපාය මාර්ග වර්ධනය කරන්න සහ ඔබේ වෘත්තීය ස්ථාවරය ශක්තිමත් කරන්න. ඔබේ දැනුවත්භාවයම engineered digital ප්‍රහාරවලට එරෙහි අවසාන firewall එකයි.",
        
        // Search
        search_placeholder: "ප්‍රශ්නයක් අහන්න... උදා: 'සයිබර් ආරක්ෂාව' හෝ 'phishing'",
        search_no_result: "නිවැරදි ගැලපීමක් හමු නොවිණි. මෙම ජනප්‍රිය මාතෘකා වලින් එකක් උත්සාහ කරන්න:",
        search_btn: "සොයන්න",
        search_results_count: "හමු විය",
        search_results_for: "සඳහා ප්‍රතිඵල",
        show_more: "තවත්",
        more_results: "ප්‍රතිඵල බලන්න",
        show_fewer: "අඩු ප්‍රතිඵල බලන්න",
        
        // Cards
        card1_tag: "උපායමාර්ගික දිශාව",
        card1_title: "ඩිජිටල් අනිවාර්යතාවය",
        card1_p1: "නවීන සයිබර් තර්ජන සාම්ප්‍රදායික firewalls ඉක්මවා පරිණාමය වේ. ඔබේ ආයතනික අනන්‍යතාවය, බුද්ධිමය දේපළ සහ මූල්‍ය වත්කම් ආරක්ෂා කිරීමට ගතික දැනුවත්භාවය මුල් ආරක්ෂක රේඛාවයි.",
        card1_p2: "කෘත්‍රිම බුද්ධිය අනිෂ්ට social engineering වැඩි කරන විට, අනපේක්ෂිත සන්නිවේදනයන් තහවුරු කිරීම අනිවාර්ය තාක්ෂණික කුසලතාවකි.",
        
        // Quiz
        quiz_tag: "සිමියුලේෂන්",
        quiz_title: "ක්ෂණික තර්ජන තක්සේරුව",
        quiz_question: "බාහිර ලිපිනයක් ඔබ හා සම්බන්ධ වී \"Semester_Exam_Leak.pdf.exe\" නමින් attachment එකක් සහිත හදිසි දැනුම්දීමක් එවයි. ඔබේ වහාම ප්‍රතිචාරය කුමක්ද?",
        quiz_btn: "විශ්ලේෂණය ක්‍රියාත්මක කරන්න",
        quiz_result: "<i class='fa-solid fa-circle-check'></i> <strong>විශ්ලේෂණය සම්පූර්ණයි:</strong> බරපතල තර්ජනයක් හඳුනාගන්නා ලදී! අවසානයේ ඇති <code>.exe</code> extension එක මෙය සාමාන්‍ය document එකක් නොව executable binary payload එකක් බව පෙන්වයි. මෙය ක්‍රියාත්මක කිරීම system එක අනතුරට පත් කරයි. නිවැරදි ක්‍රියාව: Security team එකට වාර්තා කර වහාම delete කරන්න.",
        
        // Checklist
        card3_tag: "මෙහෙයුම් සුරක්ෂිතතාවය",
        card3_title: "සම්මත ආරක්ෂක පුරුදු",
        check1_title: "MFA අනන්‍යතා තහවුරු කිරීම",
        check1_desc: "දුර්වල SMS සත්‍යාපනයට වඩා cryptographically secure mobile authenticator tokens භාවිත කරන්න.",
        check2_title: "Patch කළමනාකරණය",
        check2_desc: "Zero-day දුර්වලතාවලට එරෙහිව exploitable windows වසා දැමීමට automatic vendor updates සක්‍රීය කරන්න.",
        check3_title: "Public Network Encryption",
        check3_desc: "විශ්වාසදායක නොවන Wi-Fi මත සංවේදී දත්ත භාවිත කිරීමට පෙර encrypted corporate VPN gateway එකක් අනිවාර්ය කරන්න.",
        
        // Tips
        tips_heading: "බරපතල තර්ජන අවම කිරීම් සහ අවස්ථා",
        tip1_title: "දියුණු Phishing හුදකලා කිරීම",
        tip1_quote: "\"සැක සහිත ඊමේල්, පණිවිඩ හෝ links නොසලකා හරින්න. ඒවා delete කරන්න. සම්බන්ධ නොවන්න.\"",
        tip1_label: "ආරක්ෂක උපාය මාර්ග:",
        tip1_li1: "Targeted phishing loops තුළ embedded 'Unsubscribe' links සමඟ interact වීම ප්‍රහාරකයින්ට delivery vectors තහවුරු කරයි.",
        tip1_li2: "ආයතනික මූලාශ්‍රය අවිනිශ්චිත නම් cryptographic header verification සහ SPF/DKIM validation සිදු කරන්න.",
        tip1_li3: "Threat indicators platform reporting plugins හරහා වහාම security operations centers වෙත යොමු කරන්න.",
        tip2_title: "PII අඛණ්ඩතා සීමා ශක්තිමත් කිරීම",
        tip2_quote: "\"ඔබ අයදුම් නොකළ රැකියා ඉදිරිපත් කිරීම් සඳහා පුද්ගලික තොරතුරු හෝ බැංකු විස්තර කිසි විටෙකත් බෙදාගන්න එපා.\"",
        tip2_label: "අනන්‍යතා ආරක්ෂණ සැලැස්ම:",
        tip2_li1: "ජාතික අනන්‍යතා විස්තර (NIC, Passport, transcripts) බාහිර, තහවුරු නොකළ form fields වෙත upload කිරීම වළක්වන්න.",
        tip2_li2: "නීත්‍යානුකූල ආයතන සම්මත සන්නිවේදන මාර්ග පවත්වයි; ඔවුන් කිසි විටෙකත් සාමාන්‍ය call එකකින් OTP ඉල්ලා නොසිටියි.",
        tip2_li3: "ද්විතීයික social footprints හරහා පුද්ගලික metadata exposure පෙරහන් කිරීමෙන් ඔබේ open intelligence profile අවම කරන්න.",
        tip3_title: "Typo-Squatting Vectors උදාසීන කිරීම",
        tip3_quote: "\"ව්‍යාජ රැකියා දැන්වීම්වල බොහෝවිට අකුරු වැරදි සහ ව්‍යාකරණ දෝෂ ඇත. සුපරීක්ෂාකාරී වන්න!\"",
        tip3_label: "දෘශ්‍ය තහවුරු කිරීමේ මිනුම්:",
        tip3_li1: "Lookalike ලක්ෂණ සඳහා address syntax ගැඹුරින් පරීක්ෂා කරන්න (අකුරු මාරු කිරීම හෝ .net/.xyz වැනි extensions).",
        tip3_li2: "invoice.pdf.exe වැනි double-extension වංචා හඳුනාගැනීමට payload extensions සම්පූර්ණයෙන් පරීක්ෂා කරන්න.",
        tip3_li3: "ක්ෂණික ප්‍රතිචාර ඉල්ලා සිටින high-velocity threat syntax සාමාන්‍යයෙන් social engineering පෙන්නුම් කරයි.",
        tip4_title: "මූල්‍ය Advance-Fee වංචා හඳුනාගැනීම",
        tip4_quote: "\"නීත්‍යානුකූල ආයතන කිසි විටෙකත් මුදල් ඉල්ලා නොසිටියි. ඉතාම හොඳ නම් එය සත්‍ය නොවිය හැක.\"",
        tip4_label: "මූල්‍ය ආරක්ෂක පියවර:",
        tip4_li1: "නීත්‍යානුකූල onboarding පද්ධති deposits, software buy-backs, හෝ compliance fees ඉල්ලා නොසිටියි.",
        tip4_li2: "කුඩා manual actions සඳහා විශාල ප්‍රතිලාභ ලබාදෙන task-automation workflows සම්බන්ධයෙන් සැක සහගත වන්න.",
        tip4_li3: "third-party gateway එකකට මුදල් යැවීමට පෙර නිල corporate business registers හරහා ස්වාධීනව සොයන්න.",
        tip5_title: "Outbound Domain Authority තක්සේරුව",
        tip5_quote: "\"සත්‍ය ඉදිරිපත් කිරීම් ආයතනික ලියාපදිංචි ඊමේල් ලිපිනවලින් එවනු ලැබේ. විශ්වාස කිරීමට පෙර සැම විටම තහවුරු කරගන්න.\"",
        tip5_label: "ආයතනික තහවුරු කිරීමේ ක්‍රියාවලිය:",
        tip5_li1: "ස්ථාපිත ආයතන @gmail.com හෝ @yahoo.com වැනි consumer ලිපිනවලින් නිල සන්නිවේදනය සිදු නොකරයි.",
        tip5_li2: "LinkedIn වැනි authenticated enterprise ස්ථානවල recruiter ගේ නිල වෘත්තීය ඉතිහාසය පරීක්ෂා කරන්න.",
        tip5_li3: "සමාගමේ නිල වෙබ් අඩවියෙන් සෘජුව ස්ථාපිත out-of-band සන්නිවේදන මාර්ගයක් හරහා සන්නිවේදනයේ වලංගුභාවය තහවුරු කරගන්න.",
        
        // QA Section
        qa_heading: "සයිබර් ආරක්ෂක ප්‍රශ්න",
        qa_subheading: "පිළිතුර බැලීමට ඕනෑම ප්‍රශ්නයක් click කරන්න",
        qa_previous: "කලින්",
        qa_next: "ඊළඟ",
        qa_page: "පිටුව",
        qa_of: "න්",
        qa_showing: "පෙන්වන්නේ",
        qa_questions: "ප්‍රශ්න",
        
        // ============================================================
        // SI QA TRANSLATIONS - ALL 100 QUESTIONS IN SINHALA
        // ============================================================
        qa1_q: "මුරපද සෑදීමට වඩාත්ම ආරක්ෂිත ක්‍රමය කුමක්ද?",
        qa1_a: "අකුරු, අංක, සංකේත මිශ්‍ර කරමින් අක්ෂර 12කට වඩා දිග අනන්‍ය මුරපද භාවිත කරන්න. Password Manager එකක් භාවිතා කර කිසිදු ගිණුමකට එකම මුරපදය නැවත භාවිත නොකරන්න.",
        qa2_q: "Password Manager එකක් භාවිත කළ යුත්තේ ඇයි?",
        qa2_a: "Password Manager එකක් සෑම ගිණුමකටම ශක්තිමත්, අනන්‍ය මුරපද ජනනය කර ගබඩා කරයි. එක් වෙබ් අඩවියක් අනතුරට පත් වුවහොත්, එක් මුරපදයක් පමණක් හෙළි වේ.",
        qa3_q: "මුරපද නැවත භාවිතා කිරීම භයානක වන්නේ ඇයි?",
        qa3_a: "ඔබ එකම මුරපදය බහු වෙබ් අඩවි හරහා භාවිතා කරන්නේ නම්, එක් උල්ලංඝනයක් ඔබගේ සියලු ගිණුම් අනතුරට පත් කරයි. ප්‍රහාරකයින් සොරකම් කළ අක්තපත් භාවිතා කර වෙනත් සේවාවන්ට පිවිසීමට උත්සාහ කරයි.",
        qa4_q: "මුරපද කොපමණ වාරයක් වෙනස් කළ යුතුද?",
        qa4_a: "සේවාවක් උල්ලංඝනය කර ඇත්නම් වහාම මුරපද වෙනස් කරන්න; එසේ නොමැතිනම් මුරපද ශක්තිය සහ අනන්‍යතාව කෙරෙහි අවධානය යොමු කරන්න. හේතුවක් නැතිව නිතර වෙනස් කිරීම දුර්වල මුරපදවලට හේතු විය හැක.",
        qa5_q: "අන් අය සමඟ මුරපද බෙදාගැනීම ආරක්ෂිතද?",
        qa5_a: "නැත. කිසිවෙකු සමඟ ඔබගේ මුරපද කිසි විටෙකත් බෙදා නොගන්න. Password Manager බෙදාගැනීමේ විශේෂාංග හෝ තාවකාලික ප්‍රවේශ ක්‍රම භාවිතා කරන්න.",
        qa6_q: "මුරපද ගබඩා කළ යුත්තේ කොතැනින්ද?",
        qa6_a: "ගුප්තකේතනය කළ password managers වල පමණක් මුරපද ගබඩා කරන්න. සරල පෙළ ගොනු, පැතුරුම්පත් හෝ සටහන් වල කිසි විටෙකත් ඒවා සුරකින්න එපා.",
        qa7_q: "ජංගම උපාංගවල මුරපද කළමනාකරණය කරන්නේ කෙසේද?",
        qa7_a: "ජෛවමිතික සත්‍යාපනය සහිත ජංගම password manager යෙදුමක් භාවිතා කරන්න. ස්වයං-පිරවුම සක්‍රීය කර ශක්තිමත් උපාංග මට්ටමේ ආරක්ෂාව භාවිතා කරන්න.",
        qa8_q: "මුරපද වලින් වළක්වා ගත යුතු පුද්ගලික තොරතුරු මොනවාද?",
        qa8_a: "උපන්දින, නම්, සුරතල් නම්, ලිපින, දුරකථන අංක හෝ ප්‍රසිද්ධියේ ඇති ඕනෑම තොරතුරක් භාවිතා කිරීමෙන් වළකින්න. ප්‍රහාරකයින්ට මේවා පහසුවෙන් අනුමාන කළ හැකිය.",
        qa9_q: "මුරපදයක් සංකීර්ණ කරන්නේ කුමක්ද?",
        qa9_a: "සංකීර්ණ මුරපදවලට විශාල අකුරු, කුඩා අකුරු, අංක සහ විශේෂ සංකේත ඇතුළත් වේ. විවිධ අක්ෂර සහිත දිගු මුරපද කැඩීමට අපහසුය.",
        qa10_q: "පෙරනිමි මුරපද වෙනස් කළ යුත්තේ ඇයි?",
        qa10_a: "පෙරනිමි මුරපද ප්‍රසිද්ධියේ දන්නා අතර බොහෝ විට ප්‍රහාරකයින් උත්සාහ කරන පළමු දෙයයි. සියලුම උපාංග සහ ගිණුම්වල ඒවා වහාම වෙනස් කරන්න.",
        qa11_q: "Phishing යනු කුමක්ද සහ එයින් ආරක්ෂා වන්නේ කෙසේද?",
        qa11_a: "Phishing යනු ප්‍රහාරකයින් විශ්වාසදායක ප්‍රභවයන් ලෙස ව්‍යාජ ඊමේල් යවන වංචාවකි. සැක සහිත සබැඳි කිසි විටෙක ක්ලික් නොකර යවන්නාගේ අනන්‍යතාවය තහවුරු කරගන්න.",
        qa12_q: "Email Spoofing යනු කුමක්ද?",
        qa12_a: "Email spoofing යනු 'From' ලිපිනය ව්‍යාජ ලෙස සකස් කිරීමයි. යමක් සැක සහිත නම් සම්පූර්ණ ඊමේල් හෙඩරය පරීක්ෂා කරන්න.",
        qa13_q: "Spear Phishing යනු කුමක්ද?",
        qa13_a: "Spear phishing යනු පුද්ගලික තොරතුරු භාවිතා කර නිශ්චිත පුද්ගලයෙකු ඉලක්ක කරගත් ප්‍රහාරයකි. ප්‍රහාරකයින් අභිරුචි ඊමේල් යැවීමට පෙර ඔවුන්ගේ ගොදුරු පර්යේෂණ කරයි.",
        qa14_q: "Whaling හෝ CEO Fraud යනු කුමක්ද?",
        qa14_a: "Whaling මගින් CEO වැනි ඉහළ පෙළේ විධායකයින් ඉලක්ක කරයි. ප්‍රහාරකයින් නායකත්වය ලෙස පෙනී සිට වංචනික මුදල් හුවමාරු හෝ සංවේදී දත්ත ඉල්ලීම් බලය පවරයි.",
        qa15_q: "සබැඳියක් ආරක්ෂිතදැයි පරීක්ෂා කරන්නේ කෙසේද?",
        qa15_a: "සැබෑ URL එක පෙරදසුන් කිරීමට සබැඳි මත සැරිසරන්න. අක්ෂර වින්‍යාස දෝෂ, අසාමාන්‍ය වසම් සහ කෙටි URL සොයන්න. සත්‍යාපනය සඳහා URL පරීක්ෂක භාවිතා කරන්න.",
        qa16_q: "සැක සහිත ඊමේල් ඇමුණුම් සමඟ කුමක් කළ යුතුද?",
        qa16_a: "නොදන්නා යවන්නන්ගෙන් ඇමුණුම් කිසි විටෙක විවෘත නොකරන්න. කිසිදු ගොනුවක් විවෘත කිරීමට පෙර වෙනම සන්නිවේදන නාලිකාවක් හරහා යවන්නා සමඟ තහවුරු කරන්න.",
        qa17_q: "Vishing යනු කුමක්ද?",
        qa17_a: "Vishing යනු දුරකථන ඇමතුම් හරහා සිදු කරන phishing වේ. ප්‍රහාරකයින් නීත්‍යානුකූල සංවිධාන ලෙස පෙනී සිට දුරකථනයෙන් පුද්ගලික තොරතුරු ලබා ගනී.",
        qa18_q: "Smishing යනු කුමක්ද?",
        qa18_a: "Smishing යනු කෙටි පණිවිඩ භාවිතා කර ගොදුරු කරුවන් ද්වේෂසහගත සබැඳි ක්ලික් කිරීමට හෝ පුද්ගලික තොරතුරු බෙදාගැනීමට රැවටීමයි. ඉල්ලා නොසිටි පෙළ වල සබැඳි කිසි විටෙක ක්ලික් නොකරන්න.",
        qa19_q: "Phishing වලින් ආරක්ෂා වන්නේ කෙසේද?",
        qa19_a: "ඊමේල් පෙරීම භාවිතා කරන්න, MFA සක්‍රීය කරන්න, යවන්නා ලිපින පරීක්ෂා කරන්න, සහ ඔබව දැනුවත් කරන්න. සැක ඇත්නම්, නිල නාලිකා හරහා තහවුරු කරන්න.",
        qa20_q: "Phishing උත්සාහයක් වාර්තා කරන්නේ කෙසේද?",
        qa20_a: "ඔබගේ ආයතනයේ ආරක්ෂක කණ්ඩායමට phishing වාර්තා කරන්න, සැක සහිත ඊමේල් ප්‍රති-Phishing සංවිධාන වෙත යොමු කරන්න, සහ ඔබගේ ඊමේල් සේවාලාභියා තුළ spam ලෙස සලකුණු කරන්න.",
        qa21_q: "Social Engineering යනු කුමක්ද?",
        qa21_a: "Social Engineering යනු රහස්‍ය තොරතුරු හෙළිදරව් කිරීමට මිනිසුන් මනෝවිද්‍යාත්මකව හසුරුවයි. ප්‍රහාරකයින් තාක්ෂණික දුර්වලතා වෙනුවට විශ්වාසය සූරාකයි.",
        qa22_q: "Pretexting යනු කුමක්ද?",
        qa22_a: "Pretexting යනු තොරතුරු සොරකම් කිරීමට සාදන ලද අවස්ථාවක් නිර්මාණය කිරීමයි. ප්‍රහාරකයින් බලධාරී පුද්ගලයන් ලෙස පෙනී සිට විශ්වාසය ලබා ගනී.",
        qa23_q: "Baiting යනු කුමක්ද?",
        qa23_a: "Baiting යනු ගොදුරු කරුවන් උගුලට හසු කර ගැනීමට ආකර්ෂණීය දෙයක් පිරිනමයි. උදාහරණ ලෙස malware සහිත නොමිලේ මෘදුකාංග බාගැනීම් හෝ වාහන නැවැත්වීමේ ස්ථානවල තබා ඇති USB ධාවක.",
        qa24_q: "Tailgating යනු කුමක්ද?",
        qa24_a: "Tailgating යනු අනවසර පුද්ගලයෙකු බලයලත් පුද්ගලයෙකු අනුගමනය කර සීමිත ප්‍රදේශයකට ඇතුළු වීමයි. සෑම විටම දොරවල් අල්ලාගෙන අනෙක් පුද්ගලයින්ගේ අනන්‍යතාවය තහවුරු කරන්න.",
        qa25_q: "Social Engineering ප්‍රහාර වළක්වා ගන්නේ කෙසේද?",
        qa25_a: "ඉල්ලා නොසිටි ඉල්ලීම් ගැන සැක සහිත වන්න, නිල නාලිකා හරහා අනන්‍යතා තහවුරු කරන්න, සහ නිසි සත්‍යාපනයකින් තොරව සංවේදී තොරතුරු කිසි විටෙකත් බෙදා නොගන්න.",
        qa26_q: "MFA යනු කුමක්ද සහ එය වැදගත් වන්නේ ඇයි?",
        qa26_a: "MFA ඔබගේ මුරපදයෙන් ඔබ්බට යෙදුමකින් ලැබෙන කේතයක් වැනි දෙවන සාධන ස්ථරයක් එක් කරයි. එය ගිණුම් අත්පත් කර ගැනීමේ අවදානම ආසන්න වශයෙන් 99% කින් අඩු කරයි.",
        qa27_q: "OTP යනු කුමක්ද සහ එය ක්‍රියා කරන්නේ කෙසේද?",
        qa27_a: "OTP (One Time Password) යනු එක් පිවිසුම් සැසියක් සඳහා පමණක් ක්‍රියා කරන කේතයකි. එය සත්‍යාපන යෙදුම් මගින් ජනනය කර හෝ සත්‍යාපනය සඳහා SMS හරහා යවනු ලැබේ.",
        qa28_q: "Sත්‍යාපන යෙදුම් යනු කුමක්ද?",
        qa28_a: "සත්‍යාපන යෙදුම් MFA සඳහා කාලය මත පදනම් වූ කේත ජනනය කරයි. ජනප්‍රිය විකල්ප ලෙස Google Authenticator, Microsoft Authenticator, සහ Authy ඇතුළත් වේ.",
        qa29_q: "Backup කේත සහ ආරක්ෂක ප්‍රශ්න යනු කුමක්ද?",
        qa29_a: "Backup කේත යනු ඔබගේ සත්‍යාපකයට ප්‍රවේශය අහිමි වන විට ගිණුම් ප්‍රතිසාධනය සඳහා එක් වරක් භාවිතා කළ හැකි කේත වේ. ආරක්ෂක ප්‍රශ්න තවත් සත්‍යාපන ක්‍රමයක් ලෙස සේවය කරයි.",
        qa30_q: "ජෛවමිතික සත්‍යාපනය යනු කුමක්ද?",
        qa30_a: "ජෛවමිතික සත්‍යාපනය අනන්‍යතාවය තහවුරු කිරීම සඳහා ඇඟිලි සලකුණු, මුහුණු හඳුනාගැනීම, හෝ දෘෂ්ටි පටල පරීක්ෂාව වැනි අද්විතීය භෞතික ලක්ෂණ භාවිතා කරයි.",
        
        // Continue for all 100 questions...
        // For Q31-Q100, using English as fallback (you can add Sinhala translations here)
        qa31_q: "උපාංග කළමනාකරණය යනු කුමක්ද?",
        qa31_a: "උපාංග කළමනාකරණය මඟින් ඔබගේ ගිණුමට පිවිස ඇති සියලුම උපාංග බැලීමට සහ සැක සහිත හෝ නැතිවූ උපාංග සඳහා ප්‍රවේශය දුරස්ථව අවලංගු කිරීමට ඉඩ සලසයි.",
        qa32_q: "සැසි කල් ඉකුත්වීම යනු කුමක්ද?",
        qa32_a: "සැසි කල් ඉකුත්වීම අක්‍රියතා කාලයකට පසු ඔබව ස්වයංක්‍රීයව ඉවත් කරයි. ඔබ පිටවීමට අමතක වුවහොත් අනවසර ප්‍රවේශය වළක්වයි.",
        qa33_q: "මුරපද රහිත සත්‍යාපනය යනු කුමක්ද?",
        qa33_a: "මුරපද රහිත සත්‍යාපනය මුරපදයක් ඇතුළත් නොකර මැජික් සබැඳි, ජෛවමිතික, හෝ QR කේත භාවිතයෙන් පිවිසීමට ඉඩ සලසයි.",
        qa34_q: "FIDO සහ Passkeys යනු කුමක්ද?",
        qa34_a: "FIDO සහ Passkeys යනු ගුප්තකේතනය සහ ජෛවමිතික භාවිතා කරන නවීන සත්‍යාපන ප්‍රමිති වේ. ඒවා මුරපද වඩාත් ආරක්ෂිත, phishing-ප්‍රතිරෝධී ක්‍රම සමඟ ප්‍රතිස්ථාපනය කරයි.",
        qa35_q: "අවදානමට ලක් වූ ගිණුමක් ප්‍රතිසාධනය කරන්නේ කෙසේද?",
        qa35_a: "ගිණුම් ප්‍රතිසාධන විකල්ප භාවිතා කරන්න, මුරපද වෙනස් කරන්න, MFA සක්‍රීය කරන්න, සියලුම උපාංගවලින් ඉවත් වන්න, සහ අනවසර ක්‍රියාකාරකම් පරීක්ෂා කරන්න. අවශ්‍ය නම් සහාය අමතන්න.",
        qa36_q: "Malware යනු කුමක්ද?",
        qa36_a: "Malware යනු හානි කිරීමට, බාධා කිරීමට, හෝ අනවසර ප්‍රවේශයක් ලබා ගැනීමට නිර්මාණය කර ඇති ද්වේෂසහගත මෘදුකාංගයකි. වෛරස්, පණුවන්, ට්‍රෝජන්, සහ spyware ඇතුළත් වේ.",
        qa37_q: "Ransomware යනු කුමක්ද?",
        qa37_a: "Ransomware ඔබගේ ගොනු ගුප්තකේතනය කර ඒවා විවෘත කිරීමට ගෙවීමක් ඉල්ලා සිටී. නිතිපතා උපස්ථ තබා ගන්න සහ නොදන්නා ඇමුණුම් කිසි විටෙක විවෘත නොකරන්න.",
        qa38_q: "Spyware යනු කුමක්ද?",
        qa38_a: "Spyware රහසිගතව ඔබගේ ක්‍රියාකාරකම් නිරීක්ෂණය කර කැමැත්තකින් තොරව පුද්ගලික තොරතුරු එකතු කරයි. එය යතුරු පහර, බ්‍රවුස් කිරීම, සහ තවත් දේ නිරීක්ෂණය කළ හැක.",
        qa39_q: "Trojan Horse යනු කුමක්ද?",
        qa39_a: "Trojan එකක් නීත්‍යානුකූල මෘදුකාංගයක් ලෙස පෙනී සිටින නමුත් ද්වේෂසහගත කේතයක් අඩංගු වේ. එය ප්‍රහාරකයින්ට ඔබගේ පද්ධතියට ප්‍රවේශ වීමට පසුපස දොරවල් නිර්මාණය කරයි.",
        qa40_q: "පරිගණක පණුවෙකු යනු කුමක්ද?",
        qa40_a: "පණුවෙකු යනු පරිශීලක ක්‍රියාවකින් තොරව ජාල හරහා පැතිරෙන ස්වයං-ප්‍රතිනිෂ්පාදනය කරන malware වේ. එය කලාප පළල පරිභෝජනය කර අතිරේක malware ස්ථාපනය කළ හැක.",
        qa41_q: "Rootkit යනු කුමක්ද?",
        qa41_a: "Rootkit යනු මෙහෙයුම් පද්ධතියෙන් ද්වේෂසහගත ක්‍රියාවලි සඟවා, ගැඹුරු පද්ධති ප්‍රවේශයක් සපයයි. එය හඳුනා ගැනීමට අපහසු වන අතර විශේෂිත ඉවත් කිරීමක් අවශ්‍ය වේ.",
        qa42_q: "Zero-day අවදානම යනු කුමක්ද?",
        qa42_a: "Zero-day අවදානමක් යනු සංවර්ධකයින්ට එය පැච් කිරීමට පෙර ප්‍රහාරකයින් සොයා ගන්නා නොදන්නා ආරක්ෂක දුර්වලතාවයකි. එය ඉතා භයානක ය.",
        qa43_q: "මට තවමත් ප්‍රති-වයිරස මෘදුකාංග අවශ්‍යද?",
        qa43_a: "ඔව්. ප්‍රති-වයිරස මෘදුකාංග දන්නා malware හඳුනාගෙන ඉවත් කරන අතර ආරක්ෂිත බ්‍රවුසින් පුරුදු සමඟ ආරක්ෂිත ස්ථරයක් එක් කරයි.",
        qa44_q: "Malware සාමාන්‍යයෙන් පැමිණෙන්නේ කොහෙන්ද?",
        qa44_a: "Malware සාමාන්‍යයෙන් ඊමේල් ඇමුණුම්, ව්‍යාජ බාගැනීම්, ද්වේෂසහගත වෙබ් අඩවි, ආසාදිත USB ධාවක, සහ විශ්වාස කළ නොහැකි මූලාශ්‍රවලින් ලැබෙන මෘදුකාංග වලින් පැමිණේ.",
        qa45_q: "මගේ පද්ධතියෙන් malware ඉවත් කරන්නේ කෙසේද?",
        qa45_a: "විශ්වසනීය ප්‍රති-වයිරස මෘදුකාංග භාවිතා කර malware සඳහා පරිලෝකනය කර ඉවත් කරන්න. අවශ්‍ය නම් ආරක්ෂිත ප්‍රකාරයට පිවිසෙන්න. දරුණු නම්, මෙහෙයුම් පද්ධතිය නැවත ස්ථාපනය කරන්න.",
        qa46_q: "Firewall යනු කුමක්ද සහ මට එය අවශ්‍ය වන්නේ ඇයි?",
        qa46_a: "Firewall යනු අනවසර ප්‍රවේශය අවහිර කිරීම සඳහා ජාල ගමනාගමනය නිරීක්ෂණය කර පෙරහන් කරයි. එය ප්‍රහාරකයින්ට ඔබගේ පරිගණකයට සෘජුව සම්බන්ධ වීම වළක්වයි.",
        qa47_q: "පොදු Wi-Fi හි අවදානම් මොනවාද?",
        qa47_a: "පොදු Wi-Fi බොහෝ විට ගුප්තකේතනය නොකළ බැවින් ප්‍රහාරකයින්ට ඔබගේ දත්ත අඩාළ කිරීමට ඉඩ සලසයි. VPN භාවිතා කර පොදු ජාලවල බැංකු ගනුදෙනු වලින් වළකින්න.",
        qa48_q: "මම VPN එකක් භාවිතා කළ යුත්තේ ඇයි?",
        qa48_a: "VPN එකක් ඔබගේ අන්තර්ජාල ගමනාගමනය ගුප්තකේතනය කරයි, විශේෂයෙන් පොදු Wi-Fi මත ඔබගේ දත්ත සඟවයි. එය රහසිගත සවන්දීම වළක්වන අතර පෞද්ගලිකත්වය පවත්වා ගනී.",
        qa49_q: "මම මගේ නිවසේ Wi-Fi ආරක්ෂා කරන්නේ කෙසේද?",
        qa49_a: "පෙරනිමි රවුටර මුරපද වෙනස් කරන්න, WPA3 ගුප්තකේතනය සක්‍රීය කරන්න, SSID සඟවන්න, MAC පෙරීම භාවිතා කරන්න, සහ රවුටර ස්ථිරාංග යාවත්කාලීනව තබා ගන්න.",
        qa50_q: "විවෘත කරන ලද වරායන් යනු කුමක්ද සහ ඒවා භයානක වන්නේ ඇයි?",
        qa50_a: "විවෘත වරායන් යනු ජාල සන්නිවේදනය සඳහා ඇතුල් වීමේ ස්ථාන වේ. අනවශ්‍ය විවෘත වරායන් ප්‍රහාරකයින් විසින් සූරාකෑමට ලක් විය හැක. භාවිතා නොකරන වරායන් වසා firewall එකක් භාවිතා කරන්න.",
        qa51_q: "ජාල කොටස් කිරීම යනු කුමක්ද?",
        qa51_a: "ජාල කොටස් කිරීම උල්ලංඝනය කිරීමේ බලපෑම සීමා කිරීම සඳහා ඔබගේ ජාලය කොටස් වලට බෙදයි. වඩා හොඳ ආරක්ෂාවක් සඳහා අමුත්තන්, IoT, සහ ව්‍යාපාරික ජාල වෙන් කරන්න.",
        qa52_q: "DNS ආරක්ෂාව යනු කුමක්ද සහ එය වැදගත් වන්නේ ඇයි?",
        qa52_a: "DNS ආරක්ෂාව ප්‍රහාරකයින්ට ඔබගේ අන්තර්ජාල ගමනාගමනය ද්වේෂසහගත වෙබ් අඩවි වෙත හරවා යැවීම වළක්වයි. ආරක්ෂිත DNS සේවාදායක භාවිතා කර DNS over HTTPS සක්‍රීය කරන්න.",
        qa53_q: "Proxy සේවාදායකයක් යනු කුමක්ද?",
        qa53_a: "Proxy සේවාදායකයක් ඔබගේ උපාංගය සහ අන්තර්ජාලය අතර අතරමැදියෙකු ලෙස ක්‍රියා කරයි. එය ඔබගේ IP සඟවා අමතර ආරක්ෂිත ස්ථර සැපයිය හැක.",
        qa54_q: "DDoS ප්‍රහාරයක් යනු කුමක්ද?",
        qa54_a: "DDoS යනු ගමනාගමනයෙන් සේවාවක් යටපත් කර එය ලබා ගත නොහැකි කරයි. ප්‍රහාරකයින් සේවාදායකයන්ට ඉල්ලීම් සමඟ ගංවතුර කිරීමට අවදානමට ලක් වූ උපාංග භාවිතා කරයි.",
        qa55_q: "මම මගේ IP ලිපිනය සඟවා ගත යුත්තේ ඇයි?",
        qa55_a: "ඔබගේ IP ලිපිනය සඟවා ගැනීම ඔබගේ ස්ථානය සහ අනන්‍යතාවය අන්තර්ජාලයේ ආරක්ෂා කරයි. නිරීක්ෂණය සහ ඉලක්කගත ප්‍රහාර වැළැක්වීම සඳහා VPN හෝ ප්‍රොක්සි භාවිතා කරන්න.",
        qa56_q: "ගුප්තකේතනය යනු කුමක්ද?",
        qa56_a: "ගුප්තකේතනය කියවිය හැකි දත්ත නිවැරදි යතුර සමඟ පමණක් ප්‍රවේශ විය හැකි කේතාංක ආකෘතියක් බවට පරිවර්තනය කරයි. එය ගබඩා කිරීමේදී සහ සම්ප්‍රේෂණයේදී දත්ත ආරක්ෂා කරයි.",
        qa57_q: "End-to-end ගුප්තකේතනය යනු කුමක්ද?",
        qa57_a: "End-to-end ගුප්තකේතනය යවන්නාට සහ ලබන්නාට පමණක් පණිවිඩ කියවිය හැකි බව සහතික කරයි. සේවා සපයන්නාට පවා අන්තර්ගතයට ප්‍රවේශ විය නොහැක.",
        qa58_q: "පොදු යතුරු ගුප්තකේතනය යනු කුමක්ද?",
        qa58_a: "පොදු යතුරු ගුප්තකේතනය යතුරු දෙකක් භාවිතා කරයි: ගුප්තකේතනය සඳහා පොදු යතුරක් සහ විකේතනය සඳහා පුද්ගලික යතුරක්. එය රහස් බෙදා නොගෙන ආරක්ෂිත සන්නිවේදනය සක්‍රීය කරයි.",
        qa59_q: "HTTPS යන්නෙන් අදහස් කරන්නේ කුමක්ද සහ එය වැදගත් වන්නේ ඇයි?",
        qa59_a: "HTTPS ඔබගේ බ්‍රවුසරය සහ වෙබ් අඩවිය අතර දත්ත ගුප්තකේතනය කරයි. ආරක්ෂිත සන්නිවේදනය සහතික කිරීම සඳහා පැඩ්ලොක් නිරූපකය සොයන්න.",
        qa60_q: "Cloud ගුප්තකේතනය යනු කුමක්ද?",
        qa60_a: "Cloud ගුප්තකේතනය cloud සේවාවන්හි ගබඩා කර ඇති දත්ත ආරක්ෂා කරයි. දත්ත ගබඩා කිරීමට පෙර ගුප්තකේතනය කර ඇති අතර සපයන්නා උල්ලංඝනය කළත් ආරක්ෂිතව පවතී.",
        qa61_q: "මම මගේ පරිගණකයේ ගොනු ගුප්තකේතනය කරන්නේ කෙසේද?",
        qa61_a: "Windows සඳහා BitLocker, Mac සඳහා FileVault, හෝ VeraCrypt වැනි තෙවන පාර්ශවීය මෘදුකාංග වැනි ගොඩනඟන ලද මෙවලම් භාවිතා කර ගොනු සහ ෆෝල්ඩර ගුප්තකේතනය කරන්න.",
        qa62_q: "ගුප්තකේතනය කළ ඊමේල් යනු කුමක්ද?",
        qa62_a: "ගුප්තකේතනය කළ ඊමේල් PGP වැනි ප්‍රොටෝකෝල භාවිතා කර පණිවිඩ ආරක්ෂා කරයි. නිවැරදි යතුර සහිත ලබන්නන්ට පමණක් ඊමේල් අන්තර්ගතය කියවිය හැක.",
        qa63_q: "Data at rest සහ data in transit අතර වෙනස කුමක්ද?",
        qa63_a: "Data at rest යනු ගබඩා කර ඇති දත්ත (හාර්ඩ් ඩ්‍රයිව්, cloud) වේ. Data in transit යනු සම්ප්‍රේෂණය වන දත්ත වේ. සම්පූර්ණ ආරක්ෂාව සඳහා දෙකටම ගුප්තකේතනය අවශ්‍ය වේ.",
        qa64_q: "මම ගොනු ආරක්ෂිතව මකා දමන්නේ කෙසේද?",
        qa64_a: "දත්ත කිහිප වතාවක් උඩින් ලියන ආරක්ෂිත මකාදැමීමේ මෙවලම් භාවිතා කරන්න. සරල මකාදැමීම ගොනු ප්‍රතිසාධන මෙවලම් භාවිතයෙන් ප්‍රතිසාධනය කළ හැක.",
        qa65_q: "දත්ත උල්ලංඝනයකින් පසු කුමක් කළ යුතුද?",
        qa65_a: "වහාම මුරපද වෙනස් කරන්න, MFA සක්‍රීය කරන්න, සැක සහිත ක්‍රියාකාරකම් සඳහා ගිණුම් නිරීක්ෂණය කරන්න, සහ haveibeenpwned.com පරීක්ෂා කරන්න.",
        qa66_q: "උපස්ථ වැදගත් වන්නේ ඇයි?",
        qa66_a: "උපස්ථ අහිමි වීම, හානි වීම, හෝ ransomware වලින් පසු ගොනු ප්‍රතිසාධනය කිරීමට ඔබට ඉඩ සලසයි. 3-2-1 නියමය අනුගමනය කරන්න: පිටපත් 3ක්, මාධ්‍ය වර්ග 2ක්, ස්ථානයෙන් පිටත 1ක්.",
        qa67_q: "Cloud උපස්ථය යනු කුමක්ද?",
        qa67_a: "Cloud උපස්ථය ඔබගේ දත්ත අන්තර්ජාලය හරහා ප්‍රවේශ වන දුරස්ථ සේවාදායක මත ගබඩා කරයි. එය ප්‍රාදේශීය විපත් සහ සොරකම් වලට එරෙහිව ස්ථානයෙන් පිටත ආරක්ෂාව සපයයි.",
        qa68_q: "ප්‍රාදේශීය උපස්ථය යනු කුමක්ද?",
        qa68_a: "ප්‍රාදේශීය උපස්ථය බාහිර හාර්ඩ් ඩ්‍රයිව්, USB ධාවක, හෝ NAS උපාංග මත දත්ත ගබඩා කරයි. එය වේගවත් ප්‍රතිසාධනයක් සපයන නමුත් භෞතික ආරක්ෂාව අවශ්‍ය වේ.",
        qa69_q: "මම කොපමණ වාරයක් මගේ දත්ත උපස්ථ කළ යුතුද?",
        qa69_a: "නිතර වෙනස් වන දත්ත සඳහා දිනපතා උපස්ථ කරන්න. අමතක නොවීම සඳහා නිතිපතා උපස්ථ සඳහා ස්වයංක්‍රීය මෙවලම් භාවිතා කරන්න.",
        qa70_q: "මගේ උපස්ථය ක්‍රියා කරන බව මම පරීක්ෂා කරන්නේ කෙසේද?",
        qa70_a: "උපස්ථ අඛණ්ඩතාව තහවුරු කිරීම සඳහා නිතිපතා ප්‍රතිසාධන පරීක්ෂණ සිදු කරන්න. උපස්ථ අසාර්ථකත්වය සොයා ගැනීමට දත්ත නැතිවන තුරු බලා නොසිටින්න.",
        qa71_q: "අනන්‍යතා සොරකම යනු කුමක්ද?",
        qa71_a: "අනන්‍යතා සොරකම යනු යමෙකු ඔබගේ පුද්ගලික දත්ත අවසරයකින් තොරව වංචා කිරීමට භාවිතා කරන විටය. ඔබගේ NIC හෝ OTP කිසිවෙකු සමඟ කිසි විටෙකත් බෙදා නොගන්න.",
        qa72_q: "ක්‍රෙඩිට් කාඩ් වංචාව වළක්වා ගන්නේ කෙසේද?",
        qa72_a: "ආරක්ෂිත ගෙවීම් ද්වාර භාවිතා කරන්න, නිතිපතා ගිණුම් ප්‍රකාශ නිරීක්ෂණය කරන්න, ගනුදෙනු ඇඟවීම් සකසන්න, සහ වෙබ් අඩවිවල කාඩ් විස්තර සුරැකීමෙන් වළකින්න.",
        qa73_q: "ඩිජිටල් පියසටහන යනු කුමක්ද?",
        qa73_a: "ඔබගේ ඩිජිටල් පියසටහන යනු බ්‍රවුස් කිරීම, සටහන්, සහ අන්තර්ක්‍රියා හරහා ඔබ අන්තර්ජාලයේ තබන දත්ත මාර්ගයයි. ඔබගේ පෞද්ගලිකත්වය ආරක්ෂා කිරීමට එය කළමනාකරණය කරන්න.",
        qa74_q: "මම මගේ අන්තර්ජාල පෞද්ගලිකත්වය ආරක්ෂා කරන්නේ කෙසේද?",
        qa74_a: "පෞද්ගලිකත්ව සැකසුම් සමාලෝචනය කරන්න, තොරතුරු බෙදාගැනීම සීමා කරන්න, පෞද්ගලිකත්වය කේන්ද්‍ර කරගත් බ්‍රවුසර භාවිතා කරන්න, සහ ප්‍රසිද්ධියේ පළ කරන දේ ගැන තෝරා බේරා ගන්න.",
        qa75_q: "කුකීස් යනු කුමක්ද සහ ඒවා පෞද්ගලිකත්වයට බලපාන්නේ කෙසේද?",
        qa75_a: "කුකීස් ඔබගේ බ්‍රවුසින් ක්‍රියාකාරකම් නිරීක්ෂණය කරයි. කුකීස් පාලනය කිරීමට පෞද්ගලිකත්ව සැකසුම් භාවිතා කරන්න, ඒවා නිතිපතා මකන්න, සහ Do Not Track විශේෂාංග භාවිතා කරන්න.",
        qa76_q: "මම මගේ සමාජ මාධ්‍ය ගිණුම් ආරක්ෂා කරන්නේ කෙසේද?",
        qa76_a: "MFA භාවිතා කරන්න, පෞද්ගලිකත්ව සැකසුම් සමාලෝචනය කරන්න, නොදන්නා ඉල්ලීම් ගැන පරෙස්සම් වන්න, සහ ගිණුම් 'මිතුරන්ට පමණයි' හෝ සීමා සහිත ලෙස සකසන්න.",
        qa77_q: "අධික ලෙස බෙදාගැනීම යනු කුමක්ද සහ එය භයානක වන්නේ ඇයි?",
        qa77_a: "අධික ලෙස බෙදාගැනීම යනු අන්තර්ජාලයේ පුද්ගලික තොරතුරු ඕනෑවට වඩා හෙළි කිරීමයි. ප්‍රහාරකයින් එය සමාජ ඉංජිනේරු විද්‍යාව සහ අනන්‍යතා සොරකම සඳහා භාවිතා කරයි.",
        qa78_q: "මම ස්ථාන බෙදාගැනීම සීමා කළ යුත්තේ ඇයි?",
        qa78_a: "ස්ථාන බෙදාගැනීම ඔබගේ භෞතික සිටින ස්ථානය හෙළි කරයි, හිරිහැර කිරීම, සොරකම, සහ ඉලක්කගත ප්‍රහාර සක්‍රීය කරයි. අවශ්‍ය නොවන විට ස්ථාන සේවා අක්‍රීය කරන්න.",
        qa79_q: "මුහුණු හඳුනාගැනීමේ පෞද්ගලිකත්ව ගැටළු මොනවාද?",
        qa79_a: "මුහුණු හඳුනාගැනීම කැමැත්තකින් තොරව අධීක්ෂණය සඳහා භාවිතා කළ හැක. හැකි විට ඉවත් වීම සලකා බලා පෞද්ගලිකත්ව සැකසුම් පරීක්ෂා කරන්න.",
        qa80_q: "දත්ත පෞද්ගලිකත්ව නීති යනු කුමක්ද?",
        qa80_a: "GDPR සහ CCPA වැනි දත්ත පෞද්ගලිකත්ව නීති ඔබගේ පුද්ගලික තොරතුරු ආරක්ෂා කරයි. ඒවා ඔබගේ දත්ත ප්‍රවේශ කිරීමට, නිවැරදි කිරීමට, සහ මැකීමට ඔබට අයිතිවාසිකම් ලබා දෙයි.",
        qa81_q: "මම මගේ උපාංග ආරක්ෂා කරන්නේ කෙසේද?",
        qa81_a: "ශක්තිමත් PIN/ජෛවමිතික අගුලක් භාවිතා කරන්න, ස්වයංක්‍රීය-අගුල සක්‍රීය කරන්න, සහ සොරකම් සහ අනවසර ප්‍රවේශයෙන් ආරක්ෂා වීමට දුරස්ථ මකාදැමීමේ විශේෂාංග සක්‍රීය කරන්න.",
        qa82_q: "මම මගේ ස්මාර්ට් ජංගම දුරකතනය ආරක්ෂා කරන්නේ කෙසේද?",
        qa82_a: "නිල ගබඩා වලින් පමණක් යෙදුම් ස්ථාපනය කරන්න, යෙදුම් අවසර සමාලෝචනය කරන්න, OS යාවත්කාලීනව තබා ගන්න, සහ ස්වයංක්‍රීය-අගුල සහ දුරස්ථ ලුහුබැඳීමේ විශේෂාංග සක්‍රීය කරන්න.",
        qa83_q: "මම මගේ පරිගණකය ආරක්ෂා කරන්නේ කෙසේද?",
        qa83_a: "ශක්තිමත් මුරපද භාවිතා කරන්න, firewall සක්‍රීය කරන්න, ප්‍රති-වයිරස ස්ථාපනය කරන්න, මෘදුකාංග යාවත්කාලීනව තබා ගන්න, සහ සංවේදී ගොනු ගුප්තකේතනය කරන්න. නිතිපතා දත්ත උපස්ථ කරන්න.",
        qa84_q: "මම මගේ ටැබ්ලටය ආරක්ෂා කරන්නේ කෙසේද?",
        qa84_a: "තිර අගුලු භාවිතා කරන්න, නිල ගබඩා වලින් පමණක් යෙදුම් ස්ථාපනය කරන්න, සංවේදී ක්‍රියාකාරකම් සඳහා පොදු Wi-Fi වලින් වළකින්න, සහ දුරස්ථ මකාදැමීමේ විශේෂාංග සක්‍රීය කරන්න.",
        qa85_q: "ස්වයංක්‍රීය-අගුල වැදගත් වන්නේ ඇයි?",
        qa85_a: "ස්වයංක්‍රීය-අගුල ඔබ ඈත් වන විට අනවසර ප්‍රවේශය වළක්වයි. ප්‍රහාරකයින් සඳහා අවස්ථා ජනේලය අවම කිරීමට කෙටි කාලයක් සකසන්න.",
        qa86_q: "දුරස්ථ මකාදැමීම යනු කුමක්ද සහ එය ප්‍රයෝජනවත් වන්නේ ඇයි?",
        qa86_a: "දුරස්ථ මකාදැමීම සොරකම් කළහොත් උපාංග දත්ත දුරස්ථව මැකීමට ඔබට ඉඩ සලසයි. එය වැරදි අතට පත්වීමෙන් සංවේදී තොරතුරු ආරක්ෂා කරයි.",
        qa87_q: "උපාංග යාවත්කාලීන වැදගත් වන්නේ ඇයි?",
        qa87_a: "උපාංග යාවත්කාලීන ආරක්ෂක දුර්වලතා පැච් කර දෝෂ නිවැරදි කරයි. යාවත්කාලීන ප්‍රමාද කිරීම උපාංග දන්නා ප්‍රයෝජන සඳහා අනාවරණය කරයි.",
        qa88_q: "යෙදුමක් ආරක්ෂිතදැයි මම තහවුරු කරන්නේ කෙසේද?",
        qa88_a: "සමාලෝචන, සංවර්ධක කීර්තිය, ඉල්ලා ඇති අවසර, සහ නිල ගබඩා වලින් පමණක් බාගැනීම් පරීක්ෂා කරන්න. අධික අවසර සහිත යෙදුම් වළක්වා ගන්න.",
        qa89_q: "ව්‍යාජ යෙදුම් වංචා යනු කුමක්ද?",
        qa89_a: "ව්‍යාජ යෙදුම් තොරතුරු සොරකම් කිරීමට හෝ දැන්වීම් පෙන්වීමට නීත්‍යානුකූල යෙදුම් අනුකරණය කරයි. නිල යෙදුම් ගබඩා වලින් පමණක් බාගත කර සංවර්ධක විස්තර පරීක්ෂා කරන්න.",
        qa90_q: "Bluetooth ආරක්ෂක අවදානම් මොනවාද?",
        qa90_a: "Bluetooth අනවසර ප්‍රවේශය හෝ දත්ත සොරකම සඳහා සූරාකෑමට ලක් විය හැක. භාවිතා නොකරන විට Bluetooth අක්‍රීය කර නොදන්නා උපාංග සමඟ යුගල කිරීමෙන් වළකින්න.",
        qa91_q: "Cyber Awareness යනු කුමක්ද සහ එය වැදගත් වන්නේ ඇයි?",
        qa91_a: "Cyber Awareness යනු ඩිජිටල් තර්ජන අවබෝධ කර ගැනීම සහ ආරක්ෂිත පුරුදු පුහුණු කිරීමයි. එය බොහෝ ප්‍රහාර වලට එරෙහිව ඔබගේ පළමු ආරක්ෂක වැටියයි.",
        qa92_q: "මට Cyber Security ගැන වැඩිදුර ඉගෙන ගත හැක්කේ කෙසේද?",
        qa92_a: "මාර්ගගත පාඨමාලා ගන්න, වැඩමුළු සඳහා සහභාගී වන්න, ආරක්ෂක බ්ලොග් කියවන්න, සහ වෘත්තීය සංවර්ධනය සඳහා ISACA සහ ISC2 වැනි සංවිධාන අනුගමනය කරන්න.",
        qa93_q: "වත්මන් Cyber Security ප්‍රවණතා මොනවාද?",
        qa93_a: "AI-බලයෙන් ක්‍රියාත්මක වන ප්‍රහාර, ransomware-as-a-service, සැපයුම් දාම ප්‍රහාර, සහ zero-day ප්‍රයෝජන ප්‍රධාන ප්‍රවණතා වේ. ආරක්ෂක ප්‍රවෘත්ති තුළින් දැනුවත්ව සිටින්න.",
        qa94_q: "වැඩබිම Cyber Security පුරුදු මොනවාද?",
        qa94_a: "ඈත් වන විට තිර අගුළු දමන්න, සමාගම් අනුමත උපාංග භාවිතා කරන්න, IT වෙත සැක සහිත ඊමේල් වාර්තා කරන්න, සහ ආරක්ෂක ප්‍රතිපත්ති අනුගමනය කරන්න.",
        qa95_q: "මම මගේ පවුල අන්තර්ජාලයේ ආරක්ෂා කරන්නේ කෙසේද?",
        qa95_a: "දෙමාපිය පාලන භාවිතා කරන්න, දරුවන්ට අන්තර්ජාල ආරක්ෂාව ගැන උගන්වන්න, ඔවුන්ගේ ක්‍රියාකාරකම් නිරීක්ෂණය කරන්න, සහ උපාංග පොදු ප්‍රදේශවල තබා ගන්න.",
        qa96_q: "මම අන්තර්ජාල බැංකුකරණය සමඟ ආරක්ෂිතව සිටින්නේ කෙසේද?",
        qa96_a: "නිල යෙදුම් පමණක් භාවිතා කරන්න, OTP කිසි විටෙකත් බෙදා නොගන්න, ගනුදෙනු ඇඟවීම් සක්‍රීය කරන්න, සහ සැක සහිත ක්‍රියාකාරකම් සඳහා ගිණුම් නිතිපතා නිරීක්ෂණය කරන්න.",
        qa97_q: "මම අන්තර්ජාලයෙන් ආරක්ෂිතව සාප්පු යන්නේ කෙසේද?",
        qa97_a: "විශ්වාසදායක වෙබ් අඩවි භාවිතා කරන්න, HTTPS සොයන්න, කාඩ් විස්තර සුරැකීමෙන් වළකින්න, PayPal වැනි ආරක්ෂිත ගෙවීම් ක්‍රම භාවිතා කරන්න, සහ සමාලෝචන පරීක්ෂා කරන්න.",
        qa98_q: "මම Cyber Crime වාර්තා කරන්නේ කෙසේද?",
        qa98_a: "ප්‍රාදේශීය බලධාරීන්ට සහ Cyber Crime ඒකකවලට Cyber Crime වාර්තා කරන්න. තිරපිටපත් සහ සැක සහිත ඊමේල් වැනි සාක්ෂි තබා ගන්න.",
        qa99_q: "ආරක්ෂක ප්‍රජාවන් යනු කුමක්ද සහ ඒවාට සම්බන්ධ වන්නේ ඇයි?",
        qa99_a: "ISACA වැනි ආරක්ෂක ප්‍රජාවන් ජාලගත කිරීම, ඉගෙනීම, සහ සහතික කිරීමේ අවස්ථා සපයයි. යාවත්කාලීනව සිටීමට සහ ඔබගේ වෘත්තිය ගොඩනැගීමට සම්බන්ධ වන්න.",
        qa100_q: "මම Cyber Security වෘත්තියක් ආරම්භ කරන්නේ කෙසේද?",
        qa100_a: "CompTIA Security+, ISACA CISA, හෝ CISSP වැනි සහතික සමඟ ආරම්භ කරන්න. රසායනාගාර, පුහුණුව, සහ ස්වේච්ඡා සේවය හරහා ප්‍රායෝගික අත්දැකීම් ලබා ගන්න."
    },
    ta: {
        // Ticker
        ticker1_label: "முக்கிய எச்சரிக்கை:",
        ticker1_text: "உள்ளூர் பல்கலைக்கழக மாணவர் போர்ட்டல்களை இலக்காகக் கொண்ட செயலில் உள்ள ஃபிஷிங் பிரச்சாரம் கண்டறியப்பட்டது.",
        ticker2_label: "சைபர் சுகாதாரம்:",
        ticker2_text: "பல காரணி அங்கீகாரம் (MFA) கணக்கு கையகப்படுத்தும் அபாயத்தை 99% குறைக்கிறது. இப்போதே இயக்கவும்.",
        ticker3_label: "புதுப்பிப்பு:",
        ticker3_text: "குரோமியம் உலாவிகளில் பூஜ்ஜிய-நாள் பயன்படுத்தல் புகாரளிக்கப்பட்டுள்ளது. உங்கள் பதிப்பு புதுப்பித்த நிலையில் உள்ளதா என சரிபார்க்கவும்.",
        
        // Hero
        hero_title: "சைபர் விழிப்புணர்வு மையம்",
        hero_stay: "இருங்கள்", hero_alert: "விழிப்புடன்.", hero_safe: "பாதுகாப்பாக.", hero_secure: "பத்திரமாக.",
        hero_desc: "மேம்பட்ட பூஜ்ஜிய-நம்பிக்கை கண்டறிதல் உத்திகளை உருவாக்கி உங்கள் தொழில்முறை நிலையை வலுப்படுத்துங்கள். பொறியியல் டிஜிட்டல் திசையன்களுக்கு எதிரான முழுமையான இறுதி ஃபயர்வால் உங்கள் விழிப்புணர்வே ஆகும்.",
        
        // Search
        search_placeholder: "ஒரு கேள்வியைக் கேளுங்கள்... எ.கா. 'சைபர் பாதுகாப்பு' அல்லது 'phishing'",
        search_no_result: "சரியான பொருத்தம் எதுவும் கிடைக்கவில்லை. இந்த பிரபலமான தலைப்புகளில் ஒன்றை முயற்சிக்கவும்:",
        search_btn: "தேடு",
        search_results_count: "கிடைத்தது",
        search_results_for: "க்கான முடிவுகள்",
        show_more: "மேலும்",
        more_results: "முடிவுகளை காட்டு",
        show_fewer: "குறைவான முடிவுகளை காட்டு",
        
        // Cards
        card1_tag: "மூலோபாய திசையன்",
        card1_title: "டிஜிட்டல் கட்டாயம்",
        card1_p1: "நவீன சைபர் அச்சுறுத்தல்கள் பாரம்பரிய ஃபயர்வால்களுக்கு அப்பால் உருவாகின்றன. உங்கள் நிறுவன அடையாளம், அறிவுசார் சொத்து மற்றும் நிதி சொத்துக்களைப் பாதுகாக்க ஆற்றல்மிக்க விழிப்புணர்வு முதல் பாதுகாப்பு வரிசையாகும்.",
        card1_p2: "செயற்கை நுண்ணறிவு தீங்கிழைக்கும் சமூக பொறியியலை பெருக்குவதால், எதிர்பாராத தகவல்தொடர்புகளை மதிப்பீடு செய்து சரிபார்ப்பது கட்டாய தொழில்நுட்ப திறமையாகும்.",
        
        // Quiz
        quiz_tag: "உருவகப்படுத்துதல்",
        quiz_title: "உடனடி அச்சுறுத்தல் மதிப்பீடு",
        quiz_question: "\"Semester_Exam_Leak.pdf.exe\" என்ற இணைப்புடன் அவசர அறிவிப்பை வெளிப்புற முகவரி உங்களுக்கு அனுப்புகிறது. உங்கள் உடனடி பதில் நடவடிக்கை என்ன?",
        quiz_btn: "பகுப்பாய்வை இயக்கு",
        quiz_result: "<i class='fa-solid fa-circle-check'></i> <strong>பகுப்பாய்வு முடிந்தது:</strong> முக்கியமான அச்சுறுத்தல் அடையாளம் காணப்பட்டது! இறுதியில் உள்ள <code>.exe</code> நீட்டிப்பு இது ஒரு இயக்கக்கூடிய பைனரி பேலோட் என்பதைக் குறிக்கிறது, வழக்கமான ஆவணம் அல்ல. இதை இயக்குவது கணினியை சமரசம் செய்யும். சரியான நடவடிக்கை: பாதுகாப்பு குழுவிற்கு புகாரளித்து உடனடியாக நீக்கவும்.",
        
        // Checklist
        card3_tag: "செயல்பாட்டு சுகாதாரம்",
        card3_title: "நிலையான பாதுகாப்பு பழக்கங்கள்",
        check1_title: "MFA அடையாள சரிபார்ப்பு",
        check1_desc: "பாதுகாப்பற்ற SMS சரிபார்ப்பை விட கிரிப்டோகிராஃபிக் பாதுகாப்பான மொபைல் அங்கீகார டோக்கன்களை கட்டாயப்படுத்துங்கள்.",
        check2_title: "இணைப்பு மேலாண்மை",
        check2_desc: "பூஜ்ஜிய-நாள் பாதிப்புகளுக்கு எதிராக பயன்படுத்தக்கூடிய சாளரங்களை மூட தானியங்கி விற்பனையாளர் புதுப்பிப்புகளை இயக்கவும்.",
        check3_title: "பொது நெட்வொர்க் குறியாக்கம்",
        check3_desc: "நம்பத்தகாத Wi-Fi இல் உணர்வுள்ள சொத்துக்களை அணுகுவதற்கு முன் பாதுகாப்பான, குறியாக்க நிறுவன VPN நுழைவாயிலை கட்டாயமாக்குங்கள்.",
        
        // Tips
        tips_heading: "முக்கியமான அச்சுறுத்தல் தணிப்புகள் மற்றும் காட்சிகள்",
        tip1_title: "மேம்பட்ட ஃபிஷிங் தனிமைப்படுத்தல்",
        tip1_quote: "\"சந்தேகத்திற்கிடமான மின்னஞ்சல்கள், செய்திகள் அல்லது இணைப்புகளை புறக்கணிக்கவும். அவற்றை நீக்கவும். ஈடுபட வேண்டாம்.\"",
        tip1_label: "பாதுகாப்பு உத்திகள்:",
        tip1_li1: "இலக்கு ஃபிஷிங் சுழற்சிகளில் உட்பொதிக்கப்பட்ட 'குழுவிலகு' கொக்கிகளுடன் தொடர்புகொள்வது விநியோக திசையன்களை நேரடியாக தாக்குபவர்களுக்கு உறுதிப்படுத்துகிறது.",
        tip1_li2: "நிறுவன தோற்றம் தெளிவற்றதாக இருந்தால் கிரிப்டோகிராஃபிக் தலைப்பு சரிபார்ப்பு மற்றும் SPF/DKIM சரிபார்ப்பு செய்யவும்.",
        tip1_li3: "மேடை அறிக்கையிடல் செருகுநிரல்களைப் பயன்படுத்தி அச்சுறுத்தல் குறிகாட்டிகளை பாதுகாப்பு செயல்பாட்டு மையங்களுக்கு உடனடியாக அனுப்பவும்.",
        tip2_title: "PII ஒருமைப்பாடு எல்லைகளை அமல்படுத்துதல்",
        tip2_quote: "\"நீங்கள் விண்ணப்பிக்காத வேலை வாய்ப்புகளுக்கு தனிப்பட்ட தகவல்கள் அல்லது வங்கி விவரங்களை ஒருபோதும் பகிர வேண்டாம்.\"",
        tip2_label: "அடையாள பாதுகாப்பு திட்டம்:",
        tip2_li1: "தேசிய அடையாள அளவீடுகளை (NIC, கடவுச்சீட்டுகள், அல்லது தரநிலைகள்) வெளிப்புற, சரிபார்க்கப்படாத புலப் படிவங்களில் பதிவேற்றுவதைத் தடுக்கவும்.",
        tip2_li2: "சட்டபூர்வ நிர்வாகிகள் மற்றும் நிறுவனங்கள் நிலையான தகவல்தொடர்பு சேனல்களை பராமரிக்கின்ற; அவை ஒருபோதும் தன்னிச்சையான அழைப்புகளில் உயர்-சலுகை OTP களைக் கோருவதில்லை.",
        tip2_li3: "இரண்டாம் நிலை சமூக கால்தடங்களில் தனிப்பட்ட மெட்டாடேட்டா வெளிப்பாடுகளை வடிகட்டுவதன் மூலம் உங்கள் திறந்த நுண்ணறிவு சுயவிவரத்தை குறைக்கவும்.",
        tip3_title: "தவறான-எழுத்து திசையன்களை நடுநிலையாக்குதல்",
        tip3_quote: "\"போலி வேலை வாய்ப்புகளில் பெரும்பாலும் எழுத்துப்பிழை மற்றும் இலக்கண பிழைகள் இருக்கும். விழிப்புடன் இருங்கள்!\"",
        tip3_label: "காட்சி சரிபார்ப்பு அளவீடுகள்:",
        tip3_li1: "போலி தோற்ற குறிகாட்டிகளுக்கு (எழுத்துக்களை மாற்றுதல் அல்லது .net/.xyz போன்ற நீட்டிப்புகள் போன்றவை) முகவரி தொடரியலை ஆழமாக ஆய்வு செய்யவும்.",
        tip3_li2: "invoice.pdf.exe போன்ற இரட்டை-நீட்டிப்பு மாறுவேடங்களைக் கண்டறிய பேலோட் நீட்டிப்புகளை முழுமையாக தணிக்கை செய்யவும்.",
        tip3_li3: "உடனடி செயல்பாட்டு பதில்களைக் கோரும் உயர்-வேக அச்சுறுத்தல் தொடரியல் பொதுவாக சமூக பொறியியலைக் குறிக்கிறது.",
        tip4_title: "நிதி முன்கூட்டிய-கட்டண மோசடிகளைக் கண்டறிதல்",
        tip4_quote: "\"சட்டபூர்வ நிறுவனங்கள் ஒருபோதும் பணம் கேட்காது. இது உண்மையாக இருக்க மிகவும் நன்றாக இருந்தால், அது அப்படித்தான் இருக்கும்.\"",
        tip4_label: "நிதி பாதுகாப்பு பாதுகாப்புகள்:",
        tip4_li1: "சட்டபூர்வ பணியமர்த்தல் அமைப்புகள் வைப்புத்தொகை, மென்பொருள் திரும்ப வாங்குதல், அல்லது இணக்க கண்காணிப்பு கட்டணங்களை கோருவதில்லை.",
        tip4_li2: "சிறிய கைமுறை செயல்களுக்கு அதிக வருமானத்தை வழங்கும் பணி-தானியங்கு பணிப்பாய்வுகளில் வலுவான சந்தேகத்தை கடைப்பிடிக்கவும்.",
        tip4_li3: "எந்தவொரு மூன்றாம் தரப்பு நுழைவாயிலுக்கும் பணத்தை அனுப்புவதற்கு முன் சுயாதீனமாக அதிகாரப்பூர்வ நிறுவன வணிக பதிவேடுகளை விசாரிக்கவும்.",
        tip5_title: "வெளிச்செல்லும் டொமைன் அதிகாரத்தை மதிப்பீடு செய்தல்",
        tip5_quote: "\"உண்மையான சலுகைகள் நிறுவன பதிவு மின்னஞ்சல் முகவரிகளிலிருந்து அனுப்பப்படுகின்றன. நம்புவதற்கு முன் எப்போதும் சரிபார்க்கவும்.\"",
        tip5_label: "நிறுவன சரிபார்ப்பு நெறிமுறை:",
        tip5_li1: "நிறுவப்பட்ட நிறுவனங்கள் @gmail.com அல்லது @yahoo.com போன்ற நுகர்வோர் இடங்கள் மூலம் முறையான தொடர்புகளை மேற்கொள்ளாது.",
        tip5_li2: "LinkedIn போன்ற அங்கீகரிக்கப்பட்ட நிறுவன இடங்கள் மூலம் வெளிச்செல்லும் ஆட்சேர்ப்பாளரின் அதிகாரப்பூர்வ தொழில்முறை வரலாற்றை தணிக்கை செய்யவும்.",
        tip5_li3: "நிறுவனத்தின் அதிகாரப்பூர்வ தளத்திலிருந்து நேரடியாக நிறுவப்பட்ட புற-இசைக்குழு தொடர்பு சேனல் மூலம் தொடர்பு செல்லுபடியை உறுதிப்படுத்தவும்.",
        
        // QA Section
        qa_heading: "சைபர் பாதுகாப்பு கேள்விகள்",
        qa_subheading: "பதிலைக் காட்ட எந்த கேள்வியையும் தட்டவும்",
        qa_previous: "முந்தைய",
        qa_next: "அடுத்த",
        qa_page: "பக்கம்",
        qa_of: "ன்",
        qa_showing: "காட்டுகிறது",
        qa_questions: "கேள்விகள்",
        
        // ============================================================
        // TA QA TRANSLATIONS - ALL 100 QUESTIONS IN TAMIL
        // ============================================================
        qa1_q: "கடவுச்சொற்களை உருவாக்க பாதுகாப்பான வழி எது?",
        qa1_a: "எழுத்துக்கள், எண்கள் மற்றும் குறியீடுகளை கலந்து 12+ எழுத்துக்கள் கொண்ட நீண்ட தனித்துவமான கடவுச்சொற்களைப் பயன்படுத்தவும். கடவுச்சொல் மேலாளரைப் பயன்படுத்தவும்.",
        qa2_q: "கடவுச்சொல் மேலாளரை ஏன் பயன்படுத்த வேண்டும்?",
        qa2_a: "கடவுச்சொல் மேலாளர் ஒவ்வொரு கணக்கிற்கும் வலுவான, தனித்துவமான கடவுச்சொற்களை உருவாக்கி சேமிக்கிறது. ஒரு தளம் மீறப்பட்டால், அந்த ஒரு கடவுச்சொல் மட்டுமே வெளிப்படும்.",
        qa3_q: "கடவுச்சொற்களை மீண்டும் பயன்படுத்துவது ஏன் ஆபத்தானது?",
        qa3_a: "நீங்கள் பல தளங்களில் ஒரே கடவுச்சொல்லைப் பயன்படுத்தினால், ஒரு மீறல் உங்கள் அனைத்து கணக்குகளையும் சமரசம் செய்கிறது. தாக்குபவர்கள் திருடப்பட்ட நற்சான்றிதழ்களை மற்ற சேவைகளில் உள்நுழைய முயற்சிக்கிறார்கள்.",
        qa4_q: "கடவுச்சொற்களை எவ்வளவு அடிக்கடி மாற்ற வேண்டும்?",
        qa4_a: "ஒரு சேவை மீறப்பட்டால் உடனடியாக கடவுச்சொற்களை மாற்றவும்; இல்லையெனில் கடவுச்சொல் வலிமை மற்றும் தனித்துவத்தில் கவனம் செலுத்தவும். காரணமின்றி அடிக்கடி மாற்றுவது பலவீனமான கடவுச்சொற்களுக்கு வழிவகுக்கும்.",
        qa5_q: "மற்றவர்களுடன் கடவுச்சொற்களைப் பகிர்வது பாதுகாப்பானதா?",
        qa5_a: "இல்லை. உங்கள் கடவுச்சொற்களை யாருடனும் பகிர வேண்டாம். கடவுச்சொல் மேலாளர் பகிர்வு அம்சங்கள் அல்லது தற்காலிக அணுகல் முறைகளைப் பயன்படுத்தவும்.",
        qa6_q: "கடவுச்சொற்களை எங்கே சேமிக்க வேண்டும்?",
        qa6_a: "குறியாக்கப்பட்ட கடவுச்சொல் மேலாளர்களில் மட்டுமே கடவுச்சொற்களை சேமிக்கவும். எளிய உரை கோப்புகள், விரிதாள்கள் அல்லது ஒட்டும் குறிப்புகளில் அவற்றைச் சேமிக்க வேண்டாம்.",
        qa7_q: "மொபைல் சாதனங்களில் கடவுச்சொற்களை எவ்வாறு நிர்வகிப்பது?",
        qa7_a: "உயிரியல் அங்கீகாரத்துடன் கூடிய மொபைல் கடவுச்சொல் மேலாளர் பயன்பாட்டைப் பயன்படுத்தவும். தானியங்கி நிரப்புதலை இயக்கி, வலுவான சாதன-நிலை பாதுகாப்பைப் பயன்படுத்தவும்.",
        qa8_q: "கடவுச்சொற்களில் தவிர்க்க வேண்டிய தனிப்பட்ட தகவல்கள் யாவை?",
        qa8_a: "பிறந்தநாள்கள், பெயர்கள், செல்லப்பிராணி பெயர்கள், முகவரிகள், தொலைபேசி எண்கள் அல்லது பொதுவில் கிடைக்கும் எந்த தகவல்களையும் பயன்படுத்துவதைத் தவிர்க்கவும். தாக்குபவர்கள் இவற்றை எளிதாக யூகிக்க முடியும்.",
        qa9_q: "ஒரு கடவுச்சொல்லை சிக்கலானதாக்குவது எது?",
        qa9_a: "சிக்கலான கடவுச்சொற்களில் பெரிய எழுத்துக்கள், சிறிய எழுத்துக்கள், எண்கள் மற்றும் சிறப்பு குறியீடுகள் அடங்கும். மாறுபட்ட எழுத்துக்களைக் கொண்ட நீண்ட கடவுச்சொற்கள் உடைப்பது கடினம்.",
        qa10_q: "இயல்புநிலை கடவுச்சொற்களை ஏன் மாற்ற வேண்டும்?",
        qa10_a: "இயல்புநிலை கடவுச்சொற்கள் பொதுவில் அறியப்பட்டவை மற்றும் தாக்குபவர்கள் முயற்சிக்கும் முதல் விஷயம். எல்லா சாதனங்களிலும் கணக்குகளிலும் அவற்றை உடனடியாக மாற்றவும்.",
        qa11_q: "ஃபிஷிங் என்றால் என்ன, அதிலிருந்து எவ்வாறு பாதுகாப்பது?",
        qa11_a: "ஃபிஷிங் என்பது தாக்குபவர்கள் நம்பகமான மூலங்கள் போல் நடித்து மோசடி மின்னஞ்சல்களை அனுப்பும் மோசடி. சந்தேகத்திற்கிடமான இணைப்புகளை கிளிக் செய்ய வேண்டாம் மற்றும் அனுப்புநரின் அடையாளத்தை சரிபார்க்கவும்.",
        qa12_q: "மின்னஞ்சல் ஸ்பூஃபிங் என்றால் என்ன?",
        qa12_a: "மின்னஞ்சல் ஸ்பூஃபிங் 'From' முகவரியை போலியாக அமைக்கிறது. ஏதேனும் சந்தேகம் இருந்தால் முழு மின்னஞ்சல் தலைப்பை சரிபார்க்கவும்.",
        qa13_q: "ஸ்பியர் ஃபிஷிங் என்றால் என்ன?",
        qa13_a: "ஸ்பியர் ஃபிஷிங் என்பது தனிப்பட்ட விவரங்களைப் பயன்படுத்தி ஒரு குறிப்பிட்ட நபரை இலக்காகக் கொண்ட தாக்குதல். தாக்குபவர்கள் தனிப்பயனாக்கப்பட்ட மின்னஞ்சல்களை அனுப்புவதற்கு முன் தங்கள் பாதிக்கப்பட்டவர்களை ஆராய்கின்றனர்.",
        qa14_q: "வேலிங் அல்லது CEO மோசடி என்றால் என்ன?",
        qa14_a: "வேலிங் CEO கள் போன்ற உயர் மட்ட நிர்வாகிகளை இலக்காகக் கொள்கிறது. தாக்குபவர்கள் தலைமையைப் போல் நடித்து மோசடியான கம்பி பரிமாற்றங்கள் அல்லது உணர்வுள்ள தரவு கோரிக்கைகளை அங்கீகரிக்கிறார்கள்.",
        qa15_q: "ஒரு இணைப்பு பாதுகாப்பானதா என்பதை எவ்வாறு சரிபார்ப்பது?",
        qa15_a: "உண்மையான URL ஐ முன்னோட்டமிட இணைப்புகளின் மேல் சுட்டிக்காட்டவும். எழுத்துப்பிழை, அசாதாரண டொமைன்கள் மற்றும் சுருக்கப்பட்ட URL களைப் பார்க்கவும். சரிபார்ப்புக்கு URL சரிபார்ப்பாளர்களைப் பயன்படுத்தவும்.",
        qa16_q: "சந்தேகத்திற்கிடமான மின்னஞ்சல் இணைப்புகளுடன் என்ன செய்ய வேண்டும்?",
        qa16_a: "அறியப்படாத அனுப்புநர்களிடமிருந்து இணைப்புகளை ஒருபோதும் திறக்க வேண்டாம். எந்த கோப்பையும் திறப்பதற்கு முன் தனி தகவல்தொடர்பு சேனல் மூலம் அனுப்புநருடன் சரிபார்க்கவும்.",
        qa17_q: "விஷிங் என்றால் என்ன?",
        qa17_a: "விஷிங் என்பது தொலைபேசி அழைப்புகள் மூலம் நடத்தப்படும் ஃபிஷிங் ஆகும். தாக்குபவர்கள் சட்டபூர்வ அமைப்புகளைப் போல் நடித்து தொலைபேசியில் தனிப்பட்ட தகவல்களைப் பெறுகிறார்கள்.",
        qa18_q: "ஸ்மிஷிங் என்றால் என்ன?",
        qa18_a: "ஸ்மிஷிங் பாதிக்கப்பட்டவர்களை தீங்கிழைக்கும் இணைப்புகளை கிளிக் செய்ய அல்லது தனிப்பட்ட தகவல்களைப் பகிர ஏமாற்ற SMS செய்திகளைப் பயன்படுத்துகிறது. கோரப்படாத உரைகளில் இணைப்புகளை கிளிக் செய்ய வேண்டாம்.",
        qa19_q: "ஃபிஷிங்கிலிருந்து எவ்வாறு பாதுகாப்பது?",
        qa19_a: "மின்னஞ்சல் வடிகட்டுதலைப் பயன்படுத்தவும், MFA ஐ இயக்கவும், அனுப்புநர் முகவரிகளைச் சரிபார்க்கவும், உங்களைப் பயிற்றுவிக்கவும். சந்தேகம் இருந்தால், அதிகாரப்பூர்வ சேனல்கள் மூலம் சரிபார்க்கவும்.",
        qa20_q: "ஃபிஷிங் முயற்சியை எவ்வாறு புகாரளிப்பது?",
        qa20_a: "உங்கள் நிறுவனத்தின் பாதுகாப்பு குழுவிற்கு ஃபிஷிங் புகாரளிக்கவும், சந்தேகத்திற்கிடமான மின்னஞ்சல்களை எதிர்-ஃபிஷிங் நிறுவனங்களுக்கு அனுப்பவும், உங்கள் மின்னஞ்சல் கிளையண்டில் ஸ்பேம் எனக் குறிக்கவும்.",
        qa21_q: "சமூக பொறியியல் என்றால் என்ன?",
        qa21_a: "சமூக பொறியியல் ரகசிய தகவல்களை வெளிப்படுத்த மக்களை உளவியல் ரீதியாக கையாளுகிறது. தாக்குபவர்கள் தொழில்நுட்ப பாதிப்புகளை விட நம்பிக்கையை சுரண்டுகிறார்கள்.",
        qa22_q: "ப்ரிடெக்ஸ்டிங் என்றால் என்ன?",
        qa22_a: "ப்ரிடெக்ஸ்டிங் தகவல்களைத் திருட ஒரு கட்டமைக்கப்பட்ட காட்சியை உருவாக்குவதை உள்ளடக்குகிறது. தாக்குபவர்கள் நம்பிக்கையைப் பெற அதிகார நபர்களாக பாசாங்கு செய்கிறார்கள்.",
        qa23_q: "பைட்டிங் என்றால் என்ன?",
        qa23_a: "பைட்டிங் பாதிக்கப்பட்டவர்களை பொறியில் சிக்க வைக்க கவர்ச்சிகரமான ஒன்றை வழங்குகிறது. எடுத்துக்காட்டுகளில் malware கொண்ட இலவச மென்பொருள் பதிவிறக்கங்கள் அல்லது வாகன நிறுத்துமிடங்களில் விடப்பட்ட USB டிரைவ்கள் அடங்கும்.",
        qa24_q: "டெயில்கேட்டிங் என்றால் என்ன?",
        qa24_a: "டெயில்கேட்டிங் என்பது அங்கீகரிக்கப்படாத நபர் அங்கீகரிக்கப்பட்ட நபரைப் பின்தொடர்ந்து கட்டுப்படுத்தப்பட்ட பகுதிக்குள் நுழைவது. எப்போதும் கதவுகளைப் பிடித்து மற்றவர்களின் அடையாளத்தை சரிபார்க்கவும்.",
        qa25_q: "சமூக பொறியியல் தாக்குதல்களை எவ்வாறு தடுப்பது?",
        qa25_a: "கோரப்படாத கோரிக்கைகளில் சந்தேகம் கொள்ளுங்கள், அதிகாரப்பூர்வ சேனல்கள் மூலம் அடையாளங்களைச் சரிபார்க்கவும், மேலும் சரியான சரிபார்ப்பு இல்லாமல் உணர்வுள்ள தகவல்களை ஒருபோதும் பகிர வேண்டாம்.",
        qa26_q: "MFA என்றால் என்ன, அது ஏன் முக்கியம்?",
        qa26_a: "MFA உங்கள் கடவுச்சொல்லுக்கு அப்பால் ஒரு பயன்பாட்டிலிருந்து வரும் குறியீடு போன்ற இரண்டாவது சரிபார்ப்பு அடுக்கைச் சேர்க்கிறது. இது கணக்கு கையகப்படுத்தும் அபாயத்தை தோராயமாக 99% குறைக்கிறது.",
        qa27_q: "OTP என்றால் என்ன, அது எவ்வாறு செயல்படுகிறது?",
        qa27_a: "OTP (ஒரு முறை கடவுச்சொல்) என்பது ஒரு உள்நுழைவு அமர்வுக்கு மட்டுமே செயல்படும் குறியீடு. இது அங்கீகார பயன்பாடுகளால் உருவாக்கப்படுகிறது அல்லது சரிபார்ப்புக்கு SMS மூலம் அனுப்பப்படுகிறது.",
        qa28_q: "அங்கீகார பயன்பாடுகள் என்றால் என்ன?",
        qa28_a: "அங்கீகார பயன்பாடுகள் MFA க்கான நேர அடிப்படையிலான குறியீடுகளை உருவாக்குகின்றன. பிரபலமான விருப்பங்களில் Google Authenticator, Microsoft Authenticator மற்றும் Authy ஆகியவை அடங்கும்.",
        qa29_q: "காப்பு குறியீடுகள் மற்றும் பாதுகாப்பு கேள்விகள் என்றால் என்ன?",
        qa29_a: "காப்பு குறியீடுகள் உங்கள் அங்கீகாரத்திற்கான அணுகலை இழக்கும்போது கணக்கு மீட்புக்கான ஒரு முறை குறியீடுகள். பாதுகாப்பு கேள்விகள் மற்றொரு சரிபார்ப்பு முறையாக செயல்படுகின்றன.",
        qa30_q: "உயிரியல் அங்கீகாரம் என்றால் என்ன?",
        qa30_a: "உயிரியல் அங்கீகாரம் அடையாளத்தை சரிபார்க்க கைரேகைகள், முக அங்கீகாரம் அல்லது விழித்திரை ஸ்கேன் போன்ற தனித்துவமான உடல் பண்புகளைப் பயன்படுத்துகிறது.",
        
        // Q31-Q100 - For brevity, using English as fallback in code
        // You can add Tamil translations here for all 100 questions
    }
};

// ============================================================
// GENERATE FALLBACK TRANSLATIONS FOR REMAINING QUESTIONS
// ============================================================

// For questions 31-100, if SI/TA translations don't exist, use English
for (let i = 31; i <= faqData.length; i++) {
    const qKey = `qa${i}_q`;
    const aKey = `qa${i}_a`;
    if (!translations.si[qKey]) {
        translations.si[qKey] = translations.en[qKey] || faqData[i-1]?.question || `Question ${i}`;
        translations.si[aKey] = translations.en[aKey] || faqData[i-1]?.answer || `Answer ${i}`;
    }
    if (!translations.ta[qKey]) {
        translations.ta[qKey] = translations.en[qKey] || faqData[i-1]?.question || `Question ${i}`;
        translations.ta[aKey] = translations.en[aKey] || faqData[i-1]?.answer || `Answer ${i}`;
    }
}

// ============================================================
// LANGUAGE SWITCHING
// ============================================================

let currentLang = 'en';
let qaCurrentPage = 1;
const qaPerPage = 20;
let totalQAPages = 0;

function applyLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) {
            if (el.tagName === 'INPUT' && el.type === 'text') {
                el.placeholder = t[key];
            } else {
                el.innerHTML = t[key];
            }
        }
    });

    const searchInput = document.getElementById('search-input');
    if (searchInput && t.search_placeholder) {
        searchInput.placeholder = t.search_placeholder;
    }

    const quizResult = document.getElementById('quiz-result');
    if (quizResult && quizResult.style.display === 'block') {
        quizResult.innerHTML = t.quiz_result || "Analysis Complete: Critical threat identified!";
    }

    buildQAGrid();

    const searchInputValue = document.getElementById('search-input')?.value;
    if (searchInputValue && searchInputValue.trim()) {
        runSearch();
    }
}

// ============================================================
// QUIZ FUNCTIONALITY
// ============================================================

function checkAnswer() {
    const resultDiv = document.getElementById('quiz-result');
    const t = translations[currentLang];
    const resultHTML = t.quiz_result || 
        "<i class='fa-solid fa-circle-check'></i> <strong>Analysis Complete:</strong> Critical threat identified! The trailing <code>.exe</code> suffix marks this file as an executable binary payload, not a standard document. Executing this would compromise the system endpoint. Correct action: Report vector to Security and delete immediately.";
    resultDiv.innerHTML = resultHTML;
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ============================================================
// QA ACCORDION BUILD - WITH PAGINATION & FULL TRANSLATIONS
// ============================================================

function buildQAGrid() {
    const grid = document.getElementById('qa-grid');
    const t = translations[currentLang] || translations.en;
    
    const totalQuestions = faqData.length;
    totalQAPages = Math.ceil(totalQuestions / qaPerPage);
    
    if (qaCurrentPage > totalQAPages) qaCurrentPage = totalQAPages;
    if (qaCurrentPage < 1) qaCurrentPage = 1;
    
    const startIndex = (qaCurrentPage - 1) * qaPerPage;
    const endIndex = Math.min(startIndex + qaPerPage, totalQuestions);
    
    let html = '';
    for (let i = startIndex; i < endIndex; i++) {
        const index = i + 1;
        const qKey = `qa${index}_q`;
        const aKey = `qa${index}_a`;
        
        // Get translated question and answer
        const question = t[qKey] || translations.en[qKey] || faqData[i]?.question || `Question ${index}`;
        const answer = t[aKey] || translations.en[aKey] || faqData[i]?.answer || `Answer ${index}`;
        const num = String(index).padStart(2, '0');

        html += `
            <div class="qa-item" id="qa-item-${index}">
                <div class="qa-question" onclick="toggleQA(${index})">
                    <span><span class="qa-num">${num}.</span> ${question}</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div class="qa-answer">${answer}</div>
            </div>
        `;
    }
    
    let paginationHtml = '';
    if (totalQuestions > qaPerPage) {
        paginationHtml = `
            <div style="display:flex; justify-content:center; align-items:center; gap:12px; margin-top:25px; flex-wrap:wrap;">
                <button onclick="qaGoToPage(${qaCurrentPage - 1})" ${qaCurrentPage <= 1 ? 'disabled style="opacity:0.4;cursor:not-allowed;"' : ''} 
                        style="background:rgba(0,242,254,0.1); color:var(--accent-primary); border:1px solid rgba(0,242,254,0.3); padding:8px 20px; border-radius:8px; cursor:pointer; font-weight:600; font-size:13px; transition:all 0.3s;">
                    <i class="fa-solid fa-chevron-left"></i> ${t.qa_previous || 'Previous'}
                </button>
                <span style="color:var(--text-muted); font-size:14px;">
                    ${t.qa_page || 'Page'} ${qaCurrentPage} ${t.qa_of || 'of'} ${totalQAPages}
                </span>
                <button onclick="qaGoToPage(${qaCurrentPage + 1})" ${qaCurrentPage >= totalQAPages ? 'disabled style="opacity:0.4;cursor:not-allowed;"' : ''} 
                        style="background:rgba(0,242,254,0.1); color:var(--accent-primary); border:1px solid rgba(0,242,254,0.3); padding:8px 20px; border-radius:8px; cursor:pointer; font-weight:600; font-size:13px; transition:all 0.3s;">
                    ${t.qa_next || 'Next'} <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
            <div style="text-align:center; margin-top:12px; font-size:12px; color:var(--text-muted);">
                ${t.qa_showing || 'Showing'} ${startIndex + 1}-${endIndex} ${t.qa_of || 'of'} ${totalQuestions} ${t.qa_questions || 'questions'}
            </div>
        `;
    }
    
    grid.innerHTML = html + paginationHtml;
}

function qaGoToPage(page) {
    const totalQuestions = faqData.length;
    totalQAPages = Math.ceil(totalQuestions / qaPerPage);
    if (page < 1 || page > totalQAPages) return;
    qaCurrentPage = page;
    buildQAGrid();
    document.querySelector('.qa-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleQA(index) {
    const item = document.getElementById(`qa-item-${index}`);
    if (!item) return;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.qa-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) {
        item.classList.add('open');
        setTimeout(() => {
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 50);
    }
}

// ============================================================
// AUTO-LOAD
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    applyLanguage('en');
});