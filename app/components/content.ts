import {
  Banknote,
  Bitcoin,
  Bug,
  Building2,
  ChartLine,
  Cpu,
  DatabaseBackup,
  Globe,
  Landmark,
  LifeBuoy,
  MapPin,
  Megaphone,
  MessageSquareWarning,
  Pill,
  Scale,
  ScanSearch,
  Server,
  Share2,
  ShieldCheck,
  ShieldHalf,
  type LucideIcon,
} from "lucide-react";

/**
 * While true, the site shows a slim notice that complaint filing and tracking
 * are demonstrations. Set to false only once a real intake backend is connected.
 */
export const IS_PROTOTYPE = false;

export type Bilingual = { bn: string; en: string };

export const unit = {
  name: { bn: "সাইবার পুলিশ ইউনিট", en: "Cyber Police Unit" },
  parent: { bn: "বাংলাদেশ পুলিশ", en: "Bangladesh Police" },
  launched: { bn: "১ অক্টোবর ২০২৬", en: "1 October 2026" },
  personnel: { bn: "৪,৫৯২", en: "4,592" },
  chief: {
    name: { bn: "মোঃ ইকবাল হোসেন", en: "Md. Iqbal Hossain" },
    rank: { bn: "অতিরিক্ত আইজিপি", en: "Additional IGP" },
    role: { bn: "ইউনিট প্রধান", en: "Head of Unit" },
    photo: "/images/unit-chief.png",
    email: "addligau_i@police.gov.bd",
    office: { bn: "০২-৪৭১২১৭২১", en: "02-47121721", tel: "+8802 47121721" },
    mobile: { bn: "০১৩২০০০০০০৮", en: "01320000008", tel: "+8801320000008" },
  },
  address: { bn: "পুলিশ সদর দপ্তর, ঢাকা", en: "Police Headquarters, Dhaka" },
};

export const navItems: { href: string; bn: string; en: string }[] = [
  { href: "/", bn: "প্রচ্ছদ", en: "Home" },
  { href: "/about", bn: "পরিচিতি", en: "About" },
  { href: "/awareness", bn: "সচেতনতা", en: "Awareness" },
  { href: "/legal", bn: "আইন ও প্রক্রিয়া", en: "Law & process" },
  { href: "/help", bn: "হেল্পলাইন", en: "Helplines" },
  { href: "/news", bn: "সংবাদ", en: "News" },
  { href: "/careers", bn: "নিয়োগ", en: "Careers" },
  { href: "/report", bn: "অভিযোগ দাখিল", en: "File a complaint" },
];

export const mandate: { icon: LucideIcon; bn: string; en: string }[] = [
  { icon: Banknote, bn: "মানি লন্ডারিং", en: "Money laundering" },
  { icon: Share2, bn: "সোশ্যাল মিডিয়াভিত্তিক অপরাধ", en: "Social-media crime" },
  { icon: Megaphone, bn: "গুজব ও অপপ্রচার", en: "Rumours & disinformation" },
  { icon: Landmark, bn: "আর্থিক অপরাধ", en: "Financial crime" },
  { icon: Pill, bn: "অনলাইনে মাদক কারবার", en: "Online drug trafficking" },
  { icon: ShieldHalf, bn: "অনলাইন উগ্রবাদ", en: "Online extremism" },
];

export const specialists: { icon: LucideIcon; bn: string; en: string; detailBn: string; detailEn: string }[] = [
  { icon: Cpu, bn: "সিস্টেম অ্যানালিস্ট", en: "System Analyst", detailBn: "তদন্ত ব্যবস্থাপনা ও তথ্যব্যবস্থার নকশা", detailEn: "Investigation and information-system design" },
  { icon: ChartLine, bn: "ফাইন্যান্সিয়াল ডেটা অ্যানালিস্ট", en: "Financial Data Analyst", detailBn: "ব্যাংক ও MFS লেনদেনের ধারা বিশ্লেষণ", detailEn: "Bank and MFS transaction-pattern analysis" },
  { icon: ShieldCheck, bn: "সাইবার সিকিউরিটি এক্সপার্ট", en: "Cyber Security Expert", detailBn: "অনুপ্রবেশ, হ্যাকিং ও নিরাপত্তা ঘটনার তদন্ত", detailEn: "Intrusion, hacking and security-incident investigation" },
  { icon: Server, bn: "নেটওয়ার্ক অ্যাডমিনিস্ট্রেটর", en: "Network Administrator", detailBn: "আইপি, ডোমেইন ও নেটওয়ার্ক ট্রাফিক বিশ্লেষণ", detailEn: "IP, domain and network-traffic analysis" },
  { icon: Globe, bn: "ডার্ক ওয়েব অ্যানালিস্ট", en: "Dark Web Analyst", detailBn: "চুরি হওয়া তথ্য ও অবৈধ অনলাইন বাজার পর্যবেক্ষণ", detailEn: "Monitoring stolen data and illicit marketplaces" },
  { icon: Bitcoin, bn: "ক্রিপ্টো অ্যানালিস্ট", en: "Crypto Analyst", detailBn: "ব্লকচেইন লেনদেন অনুসরণ ও ক্রিপ্টো প্রতারণা", detailEn: "Blockchain tracing and crypto fraud" },
  { icon: Bug, bn: "ম্যালওয়্যার অ্যানালিস্ট", en: "Malware Analyst", detailBn: "ক্ষতিকর অ্যাপ, র‍্যানসমওয়্যার ও স্পাইওয়্যার বিশ্লেষণ", detailEn: "Malicious apps, ransomware and spyware" },
  { icon: MessageSquareWarning, bn: "সোশ্যাল মিডিয়া অ্যানালিস্ট", en: "Social Media Analyst", detailBn: "ভুয়া অ্যাকাউন্ট, হয়রানি ও গুজব শনাক্তকরণ", detailEn: "Fake accounts, harassment and rumour detection" },
  { icon: LifeBuoy, bn: "ইমার্জেন্সি রেসপন্স কনসালটেন্ট", en: "Emergency Response Consultant", detailBn: "বড় সাইবার ঘটনায় দ্রুত সাড়া ও সমন্বয়", detailEn: "Rapid response to major cyber incidents" },
  { icon: DatabaseBackup, bn: "ডিজাস্টার রিকভারি এক্সপার্ট", en: "Disaster Recovery Expert", detailBn: "আক্রান্ত ব্যবস্থার পুনরুদ্ধার ও ধারাবাহিকতা", detailEn: "Recovery and continuity of affected systems" },
];

export const structure: { icon: LucideIcon; level: Bilingual; lead: Bilingual; detail: Bilingual }[] = [
  {
    icon: Landmark,
    level: { bn: "কেন্দ্রীয় সদর দপ্তর", en: "Central headquarters" },
    lead: { bn: "অতিরিক্ত আইজিপি", en: "Additional IGP" },
    detail: { bn: "সমগ্র ইউনিটের নেতৃত্ব, নীতি ও সমন্বয়", en: "Command, policy and coordination for the whole unit" },
  },
  {
    icon: Building2,
    level: { bn: "বিভাগীয় পর্যায়", en: "Divisional level" },
    lead: { bn: "ডিআইজি ও অতিরিক্ত ডিআইজি", en: "DIG and Additional DIG" },
    detail: { bn: "বিভাগজুড়ে তদন্ত তদারকি", en: "Oversight of investigations across each division" },
  },
  {
    icon: MapPin,
    level: { bn: "জেলা পর্যায়", en: "District level" },
    lead: { bn: "পুলিশ সুপার (এসপি) বা দায়িত্বপ্রাপ্ত জ্যেষ্ঠ কর্মকর্তা", en: "Superintendent of Police or designated senior officer" },
    detail: { bn: "জেলার সাইবার মামলা পরিচালনা", en: "Management of cyber cases in the district" },
  },
  {
    icon: Scale,
    level: { bn: "থানা পর্যায়", en: "Police-station level" },
    lead: { bn: "ওসি-র নেতৃত্বে এসআই, এএসআই ও কনস্টেবল", en: "SI, ASI and constables led by the OC" },
    detail: { bn: "নাগরিকের কাছাকাছি সাইবার সেবা ও তদন্ত", en: "Cyber services and investigation close to citizens" },
  },
];

export const complaintCategories = [
  { id: "FIN", icon: Banknote, bn: "আর্থিক প্রতারণা", en: "Financial fraud" },
  { id: "HCK", icon: ShieldCheck, bn: "অ্যাকাউন্ট হ্যাক", en: "Account compromise" },
  { id: "BLK", icon: ShieldHalf, bn: "ব্ল্যাকমেইল / হয়রানি", en: "Blackmail / harassment" },
  { id: "MIS", icon: Megaphone, bn: "গুজব / ভুয়া তথ্য", en: "Rumours / misinformation" },
  { id: "CRY", icon: Bitcoin, bn: "ক্রিপ্টো প্রতারণা", en: "Crypto fraud" },
  { id: "DAT", icon: ScanSearch, bn: "ম্যালওয়্যার / ডেটা চুরি", en: "Malware / data theft" },
  { id: "SHP", icon: Globe, bn: "ভুয়া অনলাইন শপ", en: "Fake online shop" },
  { id: "LON", icon: Landmark, bn: "লোন অ্যাপ হয়রানি", en: "Loan-app harassment" },
  { id: "IMP", icon: Scale, bn: "পুলিশ/কর্মকর্তা পরিচয়ে প্রতারণা", en: "Impersonating police/officials" },
  { id: "SIM", icon: Server, bn: "সিম জালিয়াতি", en: "SIM fraud" },
];

export const launchArticle = {
  slug: "cyber-police-unit-launch",
  date: { bn: "১ অক্টোবর ২০২৬", en: "1 October 2026" },
  place: { bn: "ঢাকা", en: "Dhaka" },
  title: {
    bn: "বাংলাদেশ পুলিশের ইতিহাসে নতুন অধ্যায়: যাত্রা শুরু করল বিশেষায়িত ও স্বতন্ত্র ‘সাইবার পুলিশ ইউনিট’",
    en: "A new chapter for Bangladesh Police: the specialised, independent Cyber Police Unit begins operations",
  },
  summary: {
    bn: "স্বরাষ্ট্রমন্ত্রী সালাহউদ্দিন আহমদ পুলিশ সদর দপ্তরের ‘হল অব ইন্টেগ্রিটি’তে ইউনিটের আনুষ্ঠানিক উদ্বোধন করেন।",
    en: "Home Minister Salahuddin Ahmed formally inaugurated the unit at the Hall of Integrity, Police Headquarters.",
  },
};
