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
    // SECTION 3: SOCIAL ENGINEERING (Q21-Q25)
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
        question: t[qKey] || faqData[index].question,
        answer: t[aKey] || faqData[index].answer
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
        qa_show_more: "Show More Questions",
        qa_show_less: "Show Less Questions",
        
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
        qa_show_more: "තවත් ප්‍රශ්න බලන්න",
        qa_show_less: "අඩු ප්‍රශ්න බලන්න",
        
        // Footer
        footer_mission_title: "මෙහෙවර පරාමිතීන්",
        footer_mission_desc: "ඩිජිටල් ආරක්ෂාව නොසැලෙන, සාමූහික උත්සාහයකි. මුල් අවධියේ තර්ජන හඳුනාගැනීම සහ ක්‍රියාශීලී අධ්‍යාපන framework updates හරහා සිසුන් අතර ඩිජිටල් ආරක්ෂාව ඉහළ නැංවීම අපගේ අරමුණයි.",
        footer_sponsor_title: "අනුග්‍රාහක ආයතනය",
        footer_tagline: "මනස් සවිබල ගැන්වීම. ඩිජිටල් ප්‍රතිරෝධය ශක්තිමත් කිරීම.",
        footer_touch_title: "ඩිජිටල් සම්බන්ධතා",
        footer_touch_desc: "තාක්ෂණික meetups, updates සහ ඉදිරි hackathons සඳහා අපගේ engineering ප්‍රජාව සමඟ සම්බන්ධ වන්න.",
        footer_bottom_text: "අභිප්‍රාය තහවුරු කරගන්න. Click කිරීමට පෙර සිතන්න. ICBT Student Group විසින් ආරක්ෂිතව නිර්මාණය කරන ලදී."
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
        qa_show_more: "மேலும் கேள்விகளை காட்டு",
        qa_show_less: "குறைவான கேள்விகளை காட்டு",
        
        // Footer
        footer_mission_title: "பணி அளவுருக்கள்",
        footer_mission_desc: "டிஜிட்டல் பாதுகாப்பு என்பது உறுதியான, கூட்டு முயற்சியாகும். ஆரம்பகால அச்சுறுத்தல் கண்டறிதல் மற்றும் செயலூக்கமான கற்றல் கட்டமைப்பு புதுப்பிப்புகள் மூலம் மாணவர் சூழல்களில் டிஜிட்டல் பாதுகாப்பை உயர்த்துவதை நாங்கள் நோக்கமாகக் கொண்டுள்ளோம்.",
        footer_sponsor_title: "ஆதரவு அமைப்பு",
        footer_tagline: "மனதை வலுப்படுத்துதல். டிஜிட்டல் பின்னடைவை வலுப்படுத்துதல்.",
        footer_touch_title: "டிஜிட்டல் தொடு புள்ளிகள்",
        footer_touch_desc: "தொழில்நுட்ப சந்திப்புகள், புதுப்பிப்புகள் மற்றும் வரவிருக்கும் கட்டமைப்பு ஹேக்கதான்களுக்கு எங்கள் பொறியியல் சமூகத்துடன் இணைக்கவும்.",
        footer_bottom_text: "நோக்கத்தை சரிபார்க்கவும். கிளிக் செய்வதற்கு முன் சிந்திக்கவும். ICBT மாணவர் குழுவால் பாதுகாப்பாக பொறியியல் செய்யப்பட்டது."
    }
};

// Generate translations for all 100+ questions (use English as fallback)
for (let i = 1; i <= faqData.length; i++) {
    if (!translations.en[`qa${i}_q`]) {
        translations.en[`qa${i}_q`] = faqData[i-1]?.question || `Question ${i}`;
        translations.en[`qa${i}_a`] = faqData[i-1]?.answer || `Answer ${i}`;
    }
    // For SI and TA, use English as fallback if not translated
    if (!translations.si[`qa${i}_q`]) {
        translations.si[`qa${i}_q`] = translations.en[`qa${i}_q`];
        translations.si[`qa${i}_a`] = translations.en[`qa${i}_a`];
    }
    if (!translations.ta[`qa${i}_q`]) {
        translations.ta[`qa${i}_q`] = translations.en[`qa${i}_q`];
        translations.ta[`qa${i}_a`] = translations.en[`qa${i}_a`];
    }
}

// ============================================================
// LANGUAGE SWITCHING - UPDATED TO TRANSLATE ENTIRE PAGE
// ============================================================

let currentLang = 'en';
let qaCurrentPage = 1;
const qaPerPage = 20;
let totalQAPages = 0;

function applyLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Update language button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Translate ALL elements with data-i18n attribute (full page)
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

    // Update search placeholder specifically
    const searchInput = document.getElementById('search-input');
    if (searchInput && t.search_placeholder) {
        searchInput.placeholder = t.search_placeholder;
    }

    // Update quiz result if visible
    const quizResult = document.getElementById('quiz-result');
    if (quizResult && quizResult.style.display === 'block') {
        quizResult.innerHTML = t.quiz_result || "Analysis Complete: Critical threat identified!";
    }

    // Rebuild QA grid with current language (with pagination)
    buildQAGrid();

    // Re-run search if there's a query
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
// QA ACCORDION BUILD - WITH PAGINATION (20 per page)
// ============================================================

function buildQAGrid() {
    const grid = document.getElementById('qa-grid');
    const t = translations[currentLang] || translations.en;
    
    const totalQuestions = faqData.length;
    totalQAPages = Math.ceil(totalQuestions / qaPerPage);
    
    // Ensure current page is valid
    if (qaCurrentPage > totalQAPages) qaCurrentPage = totalQAPages;
    if (qaCurrentPage < 1) qaCurrentPage = 1;
    
    const startIndex = (qaCurrentPage - 1) * qaPerPage;
    const endIndex = Math.min(startIndex + qaPerPage, totalQuestions);
    
    let html = '';
    for (let i = startIndex; i < endIndex; i++) {
        const index = i + 1;
        const qKey = `qa${index}_q`;
        const aKey = `qa${index}_a`;
        const question = t[qKey] || faqData[i]?.question || `Question ${index}`;
        const answer = t[aKey] || faqData[i]?.answer || `Answer ${index}`;
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
    
    // Add pagination controls
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
    // Scroll to QA section
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