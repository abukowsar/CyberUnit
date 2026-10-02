import {
  BadgeAlert,
  Banknote,
  Briefcase,
  Dice5,
  HandCoins,
  Megaphone,
  ShieldHalf,
  ShoppingBag,
  Smartphone,
  UserRoundX,
  type LucideIcon,
} from "lucide-react";
import type { Bilingual } from "./content";

/* Bangladesh-specific reference content. Verify numbers and laws before go-live. */

export type Helpline = { number: string; tel: string; name: Bilingual; note: Bilingual; urgent?: boolean };

export const emergencyLines: Helpline[] = [
  { number: "৯৯৯", tel: "999", name: { bn: "জাতীয় জরুরি সেবা", en: "National Emergency Service" }, note: { bn: "জীবন বা নিরাপত্তার ঝুঁকিতে — ২৪ ঘণ্টা, টোল-ফ্রি", en: "Risk to life or safety — 24/7, toll-free" }, urgent: true },
  { number: "১০৯", tel: "109", name: { bn: "নারী ও শিশু নির্যাতন প্রতিরোধ হেল্পলাইন", en: "Violence Against Women & Children helpline" }, note: { bn: "অনলাইন হয়রানি, ব্ল্যাকমেইলসহ নির্যাতনের শিকার নারী ও শিশুর জন্য", en: "For women and children facing abuse, including online" } },
  { number: "০১৩২০-০০০৮৮৮", tel: "01320000888", name: { bn: "পুলিশ সাইবার সাপোর্ট ফর উইমেন (PCSW)", en: "Police Cyber Support for Women (PCSW)" }, note: { bn: "নারী পুলিশ সদস্যদের মাধ্যমে নারীদের সাইবার সহায়তা", en: "Cyber support for women, staffed by women officers" } },
  { number: "৩৩৩", tel: "333", name: { bn: "জাতীয় তথ্য বাতায়ন কল সেন্টার", en: "National information call centre" }, note: { bn: "সরকারি সেবা ও তথ্য", en: "Government services and information" } },
  { number: "১০০", tel: "100", name: { bn: "বিটিআরসি কল সেন্টার", en: "BTRC call centre" }, note: { bn: "সিম, মোবাইল অপারেটর ও টেলিযোগাযোগ-সংক্রান্ত অভিযোগ", en: "SIM, mobile operator and telecom complaints" } },
];

export const mfsLines: Helpline[] = [
  { number: "১৬২৪৭", tel: "16247", name: { bn: "বিকাশ", en: "bKash" }, note: { bn: "", en: "" } },
  { number: "১৬১৬৭", tel: "16167", name: { bn: "নগদ", en: "Nagad" }, note: { bn: "", en: "" } },
  { number: "১৬২১৬", tel: "16216", name: { bn: "রকেট", en: "Rocket" }, note: { bn: "", en: "" } },
  { number: "১৬২৬৮", tel: "16268", name: { bn: "উপায়", en: "Upay" }, note: { bn: "", en: "" } },
];

export const recoveryLinks: { href: string; label: Bilingual; note: Bilingual }[] = [
  { href: "https://www.facebook.com/hacked", label: { bn: "ফেসবুক অ্যাকাউন্ট উদ্ধার", en: "Recover a Facebook account" }, note: { bn: "facebook.com/hacked", en: "facebook.com/hacked" } },
  { href: "https://g.co/recover", label: { bn: "গুগল / জিমেইল উদ্ধার", en: "Recover Google / Gmail" }, note: { bn: "g.co/recover", en: "g.co/recover" } },
  { href: "https://stopncii.org", label: { bn: "ব্যক্তিগত ছবি অনলাইন থেকে সরানো", en: "Remove intimate images online" }, note: { bn: "StopNCII.org — ছবি আপলোড না করেই ব্লক করুন", en: "StopNCII.org — block without uploading the image" } },
  { href: "https://www.cirt.gov.bd", label: { bn: "প্রতিষ্ঠানের সাইবার ঘটনা", en: "Organisational cyber incidents" }, note: { bn: "বিজিডি ই-গভ সার্ট (BGD e-GOV CIRT)", en: "BGD e-GOV CIRT" } },
];

export type Scam = { icon: LucideIcon; title: Bilingual; how: Bilingual; signs: Bilingual; action: Bilingual };

export const commonScams: Scam[] = [
  {
    icon: Banknote,
    title: { bn: "মোবাইল ব্যাংকিং (MFS) প্রতারণা", en: "Mobile financial service (MFS) fraud" },
    how: { bn: "‘ভুল করে টাকা পাঠিয়েছি’, ‘এজেন্ট বলছি’, ‘অ্যাকাউন্ট বন্ধ হবে’ বা ক্যাশব্যাক অফারের কথা বলে PIN/OTP আদায় করা হয়।", en: "Fraudsters claim a ‘wrong transfer’, pose as an agent, threaten account closure or offer cashback to obtain your PIN/OTP." },
    signs: { bn: "ফোনে PIN, OTP বা ভেরিফিকেশন কোড চাওয়া; ভুয়া ‘টাকা এসেছে’ এসএমএস।", en: "Requests for a PIN, OTP or code; fake ‘money received’ SMS." },
    action: { bn: "সঙ্গে সঙ্গে MFS হেল্পলাইনে কল করে অ্যাকাউন্ট আটকান; লেনদেন আইডি সংরক্ষণ করুন।", en: "Call the MFS helpline at once to block the account; keep the transaction ID." },
  },
  {
    icon: Smartphone,
    title: { bn: "ফেসবুক / হোয়াটসঅ্যাপ হ্যাকিং", en: "Facebook / WhatsApp takeover" },
    how: { bn: "‘কপিরাইট লঙ্ঘন’, ‘পেজ ভেরিফাই’, ‘ভোট দিন’ লিংক বা পরিচিতজনের নামে কোড চেয়ে অ্যাকাউন্ট দখল; পরে বন্ধুদের কাছে টাকা চাওয়া।", en: "‘Copyright violation’, ‘verify your page’ or ‘vote for me’ links, or a friend asking for a code — then money is requested from your contacts." },
    signs: { bn: "মেটা/ফেসবুকের নামে বাইরের লিংক; হোয়াটসঅ্যাপের ৬ অঙ্কের কোড চাওয়া।", en: "Links outside facebook.com claiming to be Meta; requests for a 6-digit WhatsApp code." },
    action: { bn: "facebook.com/hacked থেকে উদ্ধার করুন, দ্বি-ধাপ যাচাই চালু করুন, বন্ধুদের সতর্ক করুন।", en: "Recover via facebook.com/hacked, enable two-step verification and warn your contacts." },
  },
  {
    icon: ShieldHalf,
    title: { bn: "ব্যক্তিগত ছবি দিয়ে ব্ল্যাকমেইল (সেক্সটর্শন)", en: "Sextortion and image-based blackmail" },
    how: { bn: "সম্পর্ক বা ভিডিও কলের সুযোগে ছবি/ভিডিও সংগ্রহ, অথবা এআই দিয়ে ভুয়া (ডিপফেক) ছবি বানিয়ে টাকা বা আরও ছবি দাবি।", en: "Images are obtained via relationships or video calls, or faked with AI (deepfakes), then used to demand money or more images." },
    signs: { bn: "অল্প পরিচয়ে ঘনিষ্ঠতা; ভিডিও কলে অপ্রত্যাশিত আচরণ; ‘ভাইরাল করে দেব’ হুমকি।", en: "Fast intimacy with a stranger; odd video-call behaviour; ‘I will make it viral’ threats." },
    action: { bn: "টাকা দেবেন না, যোগাযোগ বন্ধ করুন কিন্তু প্রমাণ মুছবেন না। নারীরা PCSW বা ১০৯-এ যোগাযোগ করুন।", en: "Do not pay; stop contact but keep evidence. Women can contact PCSW or 109." },
  },
  {
    icon: ShoppingBag,
    title: { bn: "ভুয়া অনলাইন শপ / এফ-কমার্স", en: "Fake online shops / F-commerce" },
    how: { bn: "ফেসবুক পেজে অবিশ্বাস্য কম দামে পণ্য, অগ্রিম মূল্য নিয়ে পেজ বন্ধ বা ব্লক।", en: "Facebook pages offer goods at unbelievable prices, take advance payment, then disappear or block you." },
    signs: { bn: "শুধু অগ্রিম পেমেন্ট; ক্যাশ-অন-ডেলিভারি নেই; নতুন পেজ, ভুয়া রিভিউ।", en: "Advance payment only; no cash on delivery; new page, fake reviews." },
    action: { bn: "পেজের লিংক, চ্যাট ও পেমেন্টের প্রমাণসহ অভিযোগ করুন; ভোক্তা অধিকার সংরক্ষণ অধিদপ্তরেও জানাতে পারেন।", en: "Report with the page link, chats and payment proof; you may also inform the Directorate of National Consumer Rights Protection." },
  },
  {
    icon: HandCoins,
    title: { bn: "লোন অ্যাপ হয়রানি", en: "Predatory loan apps" },
    how: { bn: "দ্রুত ঋণের অ্যাপ ফোনের কন্টাক্ট ও ছবি নিয়ে নেয়, পরে অতিরিক্ত টাকা দাবি করে পরিচিতদের কাছে অপমানজনক বার্তা পাঠায়।", en: "Instant-loan apps harvest contacts and photos, then demand excessive repayment and shame you to your contacts." },
    signs: { bn: "অনুমোদনহীন অ্যাপ; কন্টাক্ট ও গ্যালারির অনুমতি চাওয়া; অস্বাভাবিক সুদ।", en: "Unlicensed apps; asks for contacts and gallery access; abnormal interest." },
    action: { bn: "অ্যাপের অনুমতি বাতিল করুন, হুমকির স্ক্রিনশট রাখুন, অভিযোগ করুন।", en: "Revoke app permissions, screenshot threats and file a complaint." },
  },
  {
    icon: Briefcase,
    title: { bn: "ভুয়া চাকরি ও বিদেশে ভিসা", en: "Fake jobs and overseas visas" },
    how: { bn: "ঘরে বসে আয়, অনলাইন টাস্ক বা বিদেশে চাকরির নামে রেজিস্ট্রেশন ফি, জামানত বা ভিসা খরচ আদায়।", en: "Work-from-home, online tasks or overseas jobs used to collect registration fees, deposits or visa costs." },
    signs: { bn: "চাকরির আগেই টাকা চাওয়া; ‘দৈনিক নিশ্চিত আয়’; টেলিগ্রাম টাস্ক।", en: "Payment before employment; ‘guaranteed daily income’; Telegram tasks." },
    action: { bn: "বিদেশে চাকরির ক্ষেত্রে বিএমইটি-নিবন্ধিত রিক্রুটিং এজেন্সি যাচাই করুন; টাকা দেবেন না।", en: "For overseas jobs, verify the agency is registered with BMET; do not pay." },
  },
  {
    icon: UserRoundX,
    title: { bn: "পুলিশ / সরকারি কর্মকর্তা পরিচয়ে প্রতারণা", en: "Impersonating police or officials" },
    how: { bn: "‘থানা থেকে বলছি’, ‘আপনার নামে মামলা হয়েছে’ বা ভিডিও কলে ‘অনলাইন গ্রেফতার’-এর ভয় দেখিয়ে টাকা দাবি।", en: "‘Calling from the police station’, ‘a case is filed against you’ or a video-call ‘digital arrest’ used to demand money." },
    signs: { bn: "মামলা মেটাতে বিকাশ/নগদে টাকা চাওয়া; ভিডিও কলে ইউনিফর্ম দেখিয়ে চাপ।", en: "Demands to settle a case via bKash/Nagad; pressure on video call with uniforms." },
    action: { bn: "ফোন কেটে দিন। নিকটস্থ থানায় সরাসরি যাচাই করুন। পুলিশ কখনো ফোনে টাকা নেয় না।", en: "Hang up and verify in person at a police station. Police never take money by phone." },
  },
  {
    icon: Dice5,
    title: { bn: "অনলাইন জুয়া, ক্রিপ্টো ও এমএলএম", en: "Online gambling, crypto and MLM" },
    how: { bn: "দ্বিগুণ লাভ, বেটিং অ্যাপ, ক্রিপ্টো বিনিয়োগ বা রেফারেলভিত্তিক স্কিমে টাকা নিয়ে উধাও।", en: "Double-your-money offers, betting apps, crypto ‘investments’ or referral schemes that vanish with the funds." },
    signs: { bn: "নিশ্চিত লাভের প্রতিশ্রুতি; USDT-তে লেনদেন; নতুন সদস্য আনার চাপ।", en: "Guaranteed returns; USDT payments; pressure to recruit members." },
    action: { bn: "আরও টাকা দেবেন না; ওয়ালেট ঠিকানা ও লেনদেন হ্যাশ সংরক্ষণ করে অভিযোগ করুন।", en: "Do not send more; keep wallet addresses and transaction hashes and report." },
  },
  {
    icon: Megaphone,
    title: { bn: "গুজব, অপপ্রচার ও ডিপফেক", en: "Rumours, propaganda and deepfakes" },
    how: { bn: "সাম্প্রদায়িক বা রাজনৈতিক উসকানিমূলক ভুয়া ছবি, ভিডিও বা এআই-তৈরি কনটেন্ট দ্রুত ছড়ানো হয়।", en: "Fake or AI-generated images and videos are spread to inflame communal or political tension." },
    signs: { bn: "উৎসহীন ‘ব্রেকিং’ খবর; আবেগ উসকে দেওয়া; ‘সবাইকে শেয়ার করুন’।", en: "Unsourced ‘breaking’ news; emotional triggers; ‘share with everyone’." },
    action: { bn: "শেয়ার করার আগে নির্ভরযোগ্য সংবাদমাধ্যমে যাচাই করুন; উসকানিমূলক কনটেন্টের লিংক রিপোর্ট করুন।", en: "Verify with reliable media before sharing; report links to inciting content." },
  },
  {
    icon: BadgeAlert,
    title: { bn: "সিম জালিয়াতি ও ওটিপি চুরি", en: "SIM fraud and OTP theft" },
    how: { bn: "আপনার এনআইডি দিয়ে সিম তোলা বা সিম রিপ্লেস করে ওটিপি নিয়ে ব্যাংক ও সোশ্যাল মিডিয়া অ্যাকাউন্টে প্রবেশ।", en: "A SIM is registered or replaced using your NID, then OTPs are used to access bank and social accounts." },
    signs: { bn: "হঠাৎ মোবাইল নেটওয়ার্ক চলে যাওয়া; অচেনা সিম আপনার নামে।", en: "Sudden loss of mobile signal; unknown SIMs in your name." },
    action: { bn: "*১৬০০১# ডায়াল করে আপনার এনআইডিতে নিবন্ধিত সিম দেখুন; অপারেটর ও বিটিআরসি-কে জানান।", en: "Dial *16001# to see SIMs registered to your NID; inform your operator and BTRC." },
  },
];

export const policeNever: Bilingual[] = [
  { bn: "ফোনে বা মোবাইল ব্যাংকিংয়ে টাকা চায় না", en: "Ask for money by phone or mobile banking" },
  { bn: "PIN, OTP বা পাসওয়ার্ড চায় না", en: "Ask for a PIN, OTP or password" },
  { bn: "ভিডিও কলে ‘অনলাইন গ্রেফতার’ করে না", en: "Carry out an ‘arrest’ over video call" },
  { bn: "টাকার বিনিময়ে মামলা মীমাংসা করে না", en: "Settle a case in exchange for money" },
  { bn: "জিডি বা মামলা নিতে ফি নেয় না", en: "Charge a fee to record a GD or case" },
];

export const complaintSteps: { title: Bilingual; text: Bilingual }[] = [
  { title: { bn: "জরুরি হলে ৯৯৯", en: "Emergency: 999" }, text: { bn: "জীবন, নিরাপত্তা বা চলমান ব্ল্যাকমেইলের ক্ষেত্রে আগে ৯৯৯-এ কল করুন।", en: "For danger to life or safety, or active blackmail, call 999 first." } },
  { title: { bn: "থানায় জিডি বা এজাহার", en: "GD or FIR at the police station" }, text: { bn: "নিকটস্থ থানার সাইবার ডেস্কে সাধারণ ডায়েরি (জিডি) করুন; আমলযোগ্য অপরাধ হলে এজাহার দিয়ে মামলা হবে। জিডি নম্বরসহ কপি সংগ্রহ করুন।", en: "Record a General Diary (GD) at your station's cyber desk; for a cognisable offence an FIR opens a case. Collect a copy with the GD number." } },
  { title: { bn: "প্রাথমিক যাচাই ও তদন্ত", en: "Verification and investigation" }, text: { bn: "থানার এসআই/এএসআই তদন্ত শুরু করেন; প্রয়োজনে জেলা ও বিভাগীয় সাইবার ইউনিট যুক্ত হয়।", en: "A station SI/ASI begins the inquiry; district and divisional cyber teams join where needed." } },
  { title: { bn: "ডিজিটাল ফরেনসিক", en: "Digital forensics" }, text: { bn: "ডিভাইস, অ্যাকাউন্ট ও লেনদেনের প্রমাণ ফরেনসিক ল্যাবে পরীক্ষা করা হয়; প্ল্যাটফর্ম ও আর্থিক প্রতিষ্ঠান থেকে তথ্য সংগ্রহ।", en: "Devices, accounts and transactions are examined in the forensic lab; data is requested from platforms and financial institutions." } },
  { title: { bn: "অভিযোগপত্র ও বিচার", en: "Charge sheet and trial" }, text: { bn: "তদন্ত শেষে আদালতে অভিযোগপত্র দাখিল; সাইবার অপরাধের বিচার হয় সাইবার ট্রাইব্যুনালে।", en: "A charge sheet is submitted to court; cyber offences are tried at the Cyber Tribunal." } },
];

export const evidenceChecklist: Bilingual[] = [
  { bn: "জাতীয় পরিচয়পত্র (এনআইডি) ও মোবাইল নম্বর", en: "National ID (NID) and mobile number" },
  { bn: "চ্যাট, পোস্ট ও প্রোফাইলের স্ক্রিনশট — তারিখ ও সময়সহ", en: "Screenshots of chats, posts and profiles — with date and time" },
  { bn: "প্রোফাইল/পেজ/পোস্টের লিংক (URL)", en: "Links (URLs) to profiles, pages or posts" },
  { bn: "লেনদেন আইডি (TrxID), প্রাপকের নম্বর ও পরিমাণ", en: "Transaction ID (TrxID), recipient number and amount" },
  { bn: "প্রতারকের ফোন নম্বর, ইমেইল বা ওয়ালেট ঠিকানা", en: "Fraudster's phone number, email or wallet address" },
  { bn: "আক্রান্ত ডিভাইস — রিসেট বা মুছবেন না", en: "The affected device — do not reset or wipe it" },
];

export const laws: { name: Bilingual; scope: Bilingual }[] = [
  { name: { bn: "সাইবার সুরক্ষা অধ্যাদেশ, ২০২৫", en: "Cyber Security Ordinance, 2025" }, scope: { bn: "কম্পিউটার সিস্টেমে অবৈধ প্রবেশ, হ্যাকিং, ডেটা চুরি, অনলাইন প্রতারণা ও সাইবার হয়রানিসহ সাইবার অপরাধের মূল আইন।", en: "Core law on illegal access, hacking, data theft, online fraud and cyber harassment." } },
  { name: { bn: "পর্নোগ্রাফি নিয়ন্ত্রণ আইন, ২০১২", en: "Pornography Control Act, 2012" }, scope: { bn: "সম্মতি ছাড়া ব্যক্তিগত ছবি/ভিডিও ধারণ, প্রকাশ ও তা দিয়ে ব্ল্যাকমেইল।", en: "Recording, sharing or blackmailing with intimate images without consent." } },
  { name: { bn: "মানিলন্ডারিং প্রতিরোধ আইন, ২০১২", en: "Money Laundering Prevention Act, 2012" }, scope: { bn: "অনলাইন ও ডিজিটাল মাধ্যমে অর্থপাচার।", en: "Money laundering through online and digital channels." } },
  { name: { bn: "বাংলাদেশ টেলিযোগাযোগ আইন, ২০০১", en: "Bangladesh Telecommunication Act, 2001" }, scope: { bn: "টেলিযোগাযোগ মাধ্যমে হুমকি, হয়রানি ও অপব্যবহার।", en: "Threats, harassment and misuse via telecommunications." } },
  { name: { bn: "দণ্ডবিধি, ১৮৬০", en: "Penal Code, 1860" }, scope: { bn: "প্রতারণা (ধারা ৪২০), চাঁদাবাজি (ধারা ৩৮৪) ইত্যাদি অনলাইনে সংঘটিত হলেও প্রযোজ্য।", en: "Cheating (s. 420), extortion (s. 384) and other offences, including when committed online." } },
];

export const citizenRights: Bilingual[] = [
  { bn: "জিডি বা মামলা করতে কোনো ফি লাগে না", en: "Recording a GD or case is free of charge" },
  { bn: "জিডি নম্বরসহ রিসিভ কপি পাওয়ার অধিকার", en: "You are entitled to a receipt copy with the GD number" },
  { bn: "নারী ভুক্তভোগী নারী পুলিশ সদস্যের সহায়তা চাইতে পারেন", en: "Women may ask to be assisted by a woman officer" },
  { bn: "ভুক্তভোগীর পরিচয় ও ব্যক্তিগত ছবি গোপন রাখার অনুরোধ করা যায়", en: "You may ask that your identity and private images be kept confidential" },
  { bn: "থানা মামলা না নিলে পুলিশ সুপার বা আদালতে (নালিশি মামলা) যাওয়া যায়", en: "If a station refuses a case, you may approach the SP or file a complaint in court" },
];

export const faqs: { q: Bilingual; a: Bilingual }[] = [
  { q: { bn: "সাইবার অপরাধের জন্য কোন থানায় যাব?", en: "Which police station should I go to?" }, a: { bn: "যেকোনো নিকটস্থ থানায়। নতুন কাঠামোয় প্রতিটি থানায় ওসি-র নেতৃত্বে সাইবার সেবার জন্য পৃথক এসআই, এএসআই ও কনস্টেবল পদায়ন করা হচ্ছে।", en: "Any nearby station. Under the new structure, each station will have dedicated SIs, ASIs and constables for cyber services, led by the OC." } },
  { q: { bn: "জিডি আর মামলার পার্থক্য কী?", en: "What is the difference between a GD and a case?" }, a: { bn: "জিডি হলো থানায় ঘটনার লিখিত রেকর্ড — হুমকি, হারানো ফোন বা প্রাথমিক তথ্যের জন্য। আমলযোগ্য অপরাধে এজাহার (FIR) দায়েরের মাধ্যমে মামলা হয় এবং আনুষ্ঠানিক তদন্ত শুরু হয়।", en: "A GD is a written record of an incident — for threats, a lost phone or initial information. For a cognisable offence an FIR registers a case and formal investigation begins." } },
  { q: { bn: "টাকা ফেরত পাওয়া সম্ভব?", en: "Can I get my money back?" }, a: { bn: "যত দ্রুত জানাবেন, সম্ভাবনা তত বেশি। প্রথমেই MFS বা ব্যাংকের হেল্পলাইনে কল করে লেনদেন আটকানোর অনুরোধ করুন, তারপর থানায় জানান।", en: "The sooner you report, the better the chance. Call your MFS or bank helpline first to freeze the transaction, then inform the police." } },
  { q: { bn: "আমার ব্যক্তিগত ছবি ছড়িয়ে পড়লে কী করব?", en: "What if my private images are being shared?" }, a: { bn: "টাকা দেবেন না, প্রমাণ সংরক্ষণ করুন, প্ল্যাটফর্মে রিপোর্ট করুন এবং StopNCII.org ব্যবহার করুন। নারীরা PCSW (০১৩২০-০০০৮৮৮) বা ১০৯-এ যোগাযোগ করতে পারেন। আপনার পরিচয় গোপন রাখা হবে।", en: "Do not pay, keep evidence, report to the platform and use StopNCII.org. Women can contact PCSW (01320-000888) or 109. Your identity will be protected." } },
  { q: { bn: "সামাজিক মাধ্যমে মতপ্রকাশের জন্য কি মামলা হবে?", en: "Will I face a case for expressing opinions online?" }, a: { bn: "সাইবার পুলিশ ইউনিটের কাজ প্রতারণা, হ্যাকিং, হয়রানি, অর্থপাচার ও সহিংসতায় উসকানির মতো অপরাধ দমন। আইনসম্মত মতপ্রকাশ অপরাধ নয়।", en: "The unit targets crimes such as fraud, hacking, harassment, money laundering and incitement to violence. Lawful expression is not a crime." } },
];
