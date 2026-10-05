"use client";

import { Check, RotateCcw, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { useSite } from "./SiteProvider";

const questions = [
  { bn: "ফেসবুক ও হোয়াটসঅ্যাপে টু-ফ্যাক্টর (দ্বি-ধাপ) যাচাই চালু আছে?", en: "Is two-step verification on for Facebook and WhatsApp?", fixBn: "সেটিংস → পাসওয়ার্ড ও নিরাপত্তা থেকে দ্বি-ধাপ যাচাই চালু করুন।", fixEn: "Turn it on under Settings → Password and security." },
  { bn: "বিকাশ/নগদ/রকেটের PIN কখনো কাউকে বলেননি?", en: "Have you never shared your bKash/Nagad/Rocket PIN?", fixBn: "এখনই PIN বদলান। কোনো এজেন্ট বা কর্মকর্তা PIN চায় না।", fixEn: "Change your PIN now. No agent or official ever needs it." },
  { bn: "প্রতিটি গুরুত্বপূর্ণ অ্যাকাউন্টে আলাদা পাসওয়ার্ড ব্যবহার করেন?", en: "Do you use a different password for each important account?", fixBn: "ইমেইল ও ব্যাংকিংয়ের জন্য আলাদা, শক্তিশালী পাসওয়ার্ড বা পাসওয়ার্ড ম্যানেজার ব্যবহার করুন।", fixEn: "Use unique, strong passwords — or a password manager — for email and banking." },
  { bn: "ফোন ও অ্যাপ নিয়মিত আপডেট করেন?", en: "Do you keep your phone and apps updated?", fixBn: "স্বয়ংক্রিয় আপডেট চালু করুন; আপডেট নিরাপত্তা ত্রুটি বন্ধ করে।", fixEn: "Turn on automatic updates; they close security holes." },
  { bn: "প্লে স্টোর/অ্যাপ স্টোরের বাইরে থেকে APK ইনস্টল করেন না?", en: "Do you avoid installing APKs from outside the official app stores?", fixBn: "অচেনা লিংকের APK-তে ম্যালওয়্যার থাকে; শুধু অফিশিয়াল স্টোর ব্যবহার করুন।", fixEn: "APKs from links often carry malware; use official stores only." },
  { bn: "*১৬০০১# ডায়াল করে আপনার এনআইডিতে নিবন্ধিত সিম যাচাই করেছেন?", en: "Have you checked the SIMs registered to your NID by dialling *16001#?", fixBn: "*১৬০০১# ডায়াল করুন; অচেনা সিম থাকলে অপারেটরকে জানান।", fixEn: "Dial *16001#; report any SIM you don't recognise to your operator." },
  { bn: "পাবলিক ওয়াই-ফাইতে ব্যাংকিং বা লগইন এড়িয়ে চলেন?", en: "Do you avoid banking or logging in on public Wi-Fi?", fixBn: "পাবলিক ওয়াই-ফাইতে মোবাইল ডেটা ব্যবহার করুন।", fixEn: "Switch to mobile data for anything sensitive." },
];

export function HygieneCheck() {
  const { t } = useSite();
  const [answers, setAnswers] = useState<(boolean | null)[]>(() => questions.map(() => null));
  const answered = answers.filter((value) => value !== null).length;
  const score = answers.filter(Boolean).length;
  const done = answered === questions.length;
  const percent = Math.round((score / questions.length) * 100);
  const level = percent >= 85 ? "strong" : percent >= 55 ? "fair" : "weak";

  const set = (index: number, value: boolean) => setAnswers((current) => current.map((item, i) => (i === index ? value : item)));

  return (
    <div className="hygiene">
      <ol className="hygiene-list">
        {questions.map((q, index) => (
          <li key={q.en} className={answers[index] === false ? "is-no" : answers[index] ? "is-yes" : undefined}>
            <span className="hygiene-q">{t(q.bn, q.en)}</span>
            <span className="hygiene-toggle" role="group" aria-label={t(q.bn, q.en)}>
              <button type="button" aria-pressed={answers[index] === true} onClick={() => set(index, true)}><Check size={15} />{t("হ্যাঁ", "Yes")}</button>
              <button type="button" aria-pressed={answers[index] === false} onClick={() => set(index, false)}><X size={15} />{t("না", "No")}</button>
            </span>
            {answers[index] === false && <span className="hygiene-fix">{t(q.fixBn, q.fixEn)}</span>}
          </li>
        ))}
      </ol>

      <aside className={`hygiene-score level-${done ? level : "pending"}`} aria-live="polite">
        <div className="gauge" style={{ "--p": done ? percent : (answered / questions.length) * 100 } as React.CSSProperties}>
          <span>{done ? `${t(toBn(percent), String(percent))}%` : `${t(toBn(answered), String(answered))}/${t(toBn(questions.length), String(questions.length))}`}</span>
        </div>
        <strong>
          {!done ? t("সবগুলো প্রশ্নের উত্তর দিন", "Answer every question")
            : level === "strong" ? t("আপনার সুরক্ষা শক্তিশালী", "Your protection is strong")
            : level === "fair" ? t("মোটামুটি — কিছু উন্নতি দরকার", "Fair — a few gaps to close")
            : t("ঝুঁকিপূর্ণ — এখনই ব্যবস্থা নিন", "At risk — act now")}
        </strong>
        <p>{t("উত্তর এই ডিভাইসেই থাকে, কোথাও পাঠানো হয় না।", "Answers stay on this device and are never sent.")}</p>
        {answered > 0 && <button type="button" className="button button-text" onClick={() => setAnswers(questions.map(() => null))}><RotateCcw size={15} />{t("আবার করুন", "Start over")}</button>}
        <ShieldCheck className="hygiene-mark" size={120} aria-hidden="true" />
      </aside>
    </div>
  );
}

function toBn(value: number) {
  return String(value).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);
}
