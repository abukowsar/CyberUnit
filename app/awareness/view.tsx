"use client";

import { ArrowRight, Check, KeyRound, LockKeyhole, MonitorSmartphone, Phone, ScanSearch, ShieldAlert, ShieldCheck, Users } from "lucide-react";
import { useState } from "react";
import { PageBanner } from "../components/PageBanner";
import { commonScams } from "../components/bd-context";
import { useSite } from "../components/SiteProvider";

const examples = [
  { bn: "বিকাশ PIN", en: "bKash PIN", text: "আপনার বিকাশ অ্যাকাউন্ট ২৪ ঘণ্টার মধ্যে বন্ধ হবে। এখনই PIN দিয়ে ভেরিফাই করুন: http://bkash-verify.xyz/login" },
  { bn: "ভুল টাকা", en: "Wrong transfer", text: "ভুল করে আপনার নম্বরে টাকা পাঠিয়েছি। দয়া করে এখনই ফেরত দিন।" },
  { bn: "চাকরির অফার", en: "Job offer", text: "ঘরে বসে দৈনিক ৩,০০০ টাকা আয় করুন! রেজিস্ট্রেশন ফি মাত্র ৫০০ টাকা।" },
  { bn: "ক্রিপ্টো লাভ", en: "Crypto returns", text: "Guaranteed profit, double your USDT investment in 7 days. Install AnyDesk." },
];

const scanPatterns: { key: string; weight: number; bn: string; en: string; pattern: RegExp }[] = [
  { key: "secret", weight: 35, bn: "PIN, OTP বা পাসওয়ার্ড চাওয়া হচ্ছে", en: "Requests a PIN, OTP or password", pattern: /\b(?:otp|pin|password|verification code)\b|পিন|ওটিপি|পাসওয়ার্ড|গোপন কোড/i },
  { key: "authority", weight: 25, bn: "মামলা বা গ্রেফতারের ভয় দেখানো", en: "Threatens arrest or a case", pattern: /মামলা|গ্রেফতার|warrant|arrest|police case|পুলিশ কেস/i },
  { key: "urgency", weight: 15, bn: "তাড়াহুড়ো করানোর চাপ", en: "Pressures you to act quickly", pattern: /urgent|immediately|within 24 hours|এখনই|জরুরি|২৪ ঘণ্টা|বন্ধ হয়ে যাবে/i },
  { key: "fee", weight: 25, bn: "আগে টাকা বা ফি চাওয়া হচ্ছে", en: "Requests an upfront fee", pattern: /registration fee|processing fee|রেজিস্ট্রেশন ফি|ফি মাত্র|জামানত/i },
  { key: "remote", weight: 30, bn: "রিমোট অ্যাক্সেস অ্যাপ ইনস্টল করতে বলা", en: "Asks you to install a remote-access app", pattern: /anydesk|teamviewer|quick ?support|rustdesk/i },
  { key: "wrongsend", weight: 25, bn: "‘ভুল করে টাকা পাঠিয়েছি’ — প্রচলিত MFS প্রতারণা", en: "‘Sent money by mistake’ — a common MFS scam", pattern: /ভুল করে|ভুলে টাকা|wrongly sent|by mistake/i },
  { key: "prize", weight: 25, bn: "লটারি, পুরস্কার বা ক্যাশব্যাকের লোভ", en: "Lottery, prize or cashback bait", pattern: /লটারি|পুরস্কার|ক্যাশব্যাক|বিজয়ী|lottery|prize|cashback|you have won/i },
  { key: "account", weight: 20, bn: "পেজ/অ্যাকাউন্ট বন্ধ বা কপিরাইট লঙ্ঘনের ভয়", en: "Threat of page/account suspension or copyright strike", pattern: /copyright|page will be (?:disabled|deleted)|আইডি নষ্ট|পেজ বন্ধ|অ্যাকাউন্ট বন্ধ/i },
  { key: "job", weight: 20, bn: "ঘরে বসে আয় বা বিদেশে চাকরির প্রলোভন", en: "Work-from-home or overseas-job bait", pattern: /ঘরে বসে|দৈনিক .{0,10}আয়|বিদেশে চাকরি|ভিসা|work from home|daily income|telegram task/i },
  { key: "crypto", weight: 25, bn: "নিশ্চিত বা দ্বিগুণ লাভের প্রতিশ্রুতি", en: "Promises guaranteed or doubled returns", pattern: /crypto|bitcoin|usdt|guaranteed profit|double your|নিশ্চিত লাভ|দ্বিগুণ/i },
];

function analyzeMessage(text: string) {
  const flags = scanPatterns.filter((rule) => rule.pattern.test(text));
  const urls = [...text.matchAll(/https?:\/\/[^\s]+|www\.[^\s]+/gi)];
  const suspiciousLinks = urls.filter((match) => /\.(xyz|top|click|buzz|live|site|online|icu)(?:\/|$)/i.test(match[0]));
  const score = Math.min(100, flags.reduce((sum, flag) => sum + flag.weight, 0) + suspiciousLinks.length * 20);
  return { flags, suspiciousLinks, score };
}

const quizItems = [
  { sender: "অজানা নম্বর · Unknown", messageBn: "আপনার অ্যাকাউন্ট বন্ধ হবে। PIN দিয়ে এই লিংকে যাচাই করুন।", messageEn: "Your account will be blocked. Verify with your PIN at this link.", scam: true, whyBn: "PIN চাওয়া ও ভয় দেখিয়ে তাড়াহুড়ো করানো প্রতারণার লক্ষণ।", whyEn: "A PIN request and pressure to act quickly are scam signals." },
  { sender: "নিজের ব্যাংক অ্যাপ · Your bank app", messageBn: "নতুন ডিভাইস থেকে লগইন হয়েছে। সেটিংসে গিয়ে সেশন পরীক্ষা করুন।", messageEn: "A new device signed in. Review sessions in your account settings.", scam: false, whyBn: "বার্তাটি কোনো লিংক বা গোপন তথ্য চাইছে না; নিজে অ্যাপে যাচাই করুন।", whyEn: "It asks for no link or secret. Check directly in the app." },
  { sender: "‘থানা থেকে বলছি’ · ‘Calling from police’", messageBn: "মামলা মেটাতে এখনই বিকাশে টাকা পাঠান।", messageEn: "Send money by bKash now to settle a police case.", scam: true, whyBn: "পুলিশ কখনো ফোনে টাকা নিয়ে মামলা মেটায় না।", whyEn: "Police never settle a case by phone payment." },
];

export default function AwarenessView() {
  const { t, en } = useSite();
  const [message, setMessage] = useState("");
  const [scan, setScan] = useState<ReturnType<typeof analyzeMessage> | null>(null);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState<boolean | null>(null);
  const [quizScore, setQuizScore] = useState(0);

  const firstSteps = [
    { title: t("ব্যাংক বা MFS-কে জানান", "Contact your bank or MFS provider"), text: t("অ্যাপ বা কার্ডে থাকা যাচাইকৃত হেল্পলাইনে লেনদেন আটকানোর অনুরোধ করুন।", "Use the verified helpline in your app or on your card and ask to stop the transaction.") },
    { title: t("প্রমাণ সংরক্ষণ করুন", "Preserve evidence"), text: t("স্ক্রিনশট, লেনদেন নম্বর, ফোন নম্বর, প্রোফাইল লিংক ও সময় লিখে রাখুন।", "Keep screenshots, transaction IDs, phone numbers, profile links and timestamps.") },
    { title: t("অ্যাকাউন্ট সুরক্ষিত করুন", "Secure your accounts"), text: t("বিশ্বস্ত ডিভাইস থেকে পাসওয়ার্ড বদলান ও দ্বি-ধাপ যাচাই চালু করুন।", "Change passwords from a trusted device and enable two-step verification.") },
    { title: t("অভিযোগ দাখিল করুন", "File a complaint"), text: t("নিকটস্থ থানার সাইবার ডেস্কে বা অনলাইনে অভিযোগ জানান।", "Report at your police station's cyber desk or online.") },
  ];

  const tips = [
    { icon: KeyRound, text: t("PIN, OTP বা পাসওয়ার্ড কাউকে বলবেন না — পুলিশ বা ব্যাংকও কখনো চায় না।", "Never share a PIN, OTP or password — police and banks never ask.") },
    { icon: MonitorSmartphone, text: t("অপরিচিত কারও কথায় AnyDesk বা অন্য রিমোট অ্যাপ ইনস্টল করবেন না।", "Never install AnyDesk or other remote apps at a stranger's request.") },
    { icon: Users, text: t("অনলাইনে ব্যক্তিগত ছবি বা তথ্য শেয়ারের আগে ভাবুন।", "Think before sharing personal photos or details online.") },
    { icon: ShieldCheck, text: t("গুজব শেয়ারের আগে নির্ভরযোগ্য সূত্রে যাচাই করুন।", "Verify with a reliable source before sharing news.") },
  ];

  const answer = (value: boolean) => {
    if (quizAnswer !== null) return;
    setQuizAnswer(value);
    if (value === quizItems[quizIndex].scam) setQuizScore((score) => score + 1);
  };

  return (
    <>
      <PageBanner
        eyebrow={["সাইবার সচেতনতা", "CYBER AWARENESS"]}
        title={["সন্দেহ হলে থামুন, যাচাই করুন", "Pause. Verify. Stay safe."]}
        lede={["প্রতারণার পরিচিত কৌশল চিনুন এবং ঘটনার পর প্রথম করণীয় জেনে নিন।", "Recognise common scam tactics and learn what to do first after an incident."]}
        crumbs={[{ label: ["সচেতনতা", "Awareness"] }]}
      />

      <section className="section page-wrap checker-layout">
        <div className="section-head">
          <p className="eyebrow">{t("বার্তা যাচাই", "MESSAGE CHECK")}</p>
          <h2>{t("সন্দেহজনক বার্তা পরীক্ষা করুন", "Check a suspicious message")}</h2>
          <p>{t("এসএমএস, হোয়াটসঅ্যাপ বা ইমেইলের লেখা পেস্ট করুন। বিশ্লেষণ আপনার ডিভাইসেই হয়, কোথাও পাঠানো হয় না।", "Paste the text of an SMS, WhatsApp message or email. Analysis happens on your device and nothing is sent anywhere.")}</p>
        </div>
        <div className="checker">
          <label className="field-label" htmlFor="message-input">{t("বার্তার লেখা বা লিংক", "Message text or link")}</label>
          <textarea id="message-input" rows={5} value={message} onChange={(event) => { setMessage(event.target.value); setScan(null); }} placeholder={t("এখানে বার্তাটি পেস্ট করুন…", "Paste the message here…")} />
          <div className="examples"><span>{t("নমুনা:", "Examples:")}</span>{examples.map((example) => <button key={example.en} type="button" onClick={() => { setMessage(example.text); setScan(null); }}>{en ? example.en : example.bn}</button>)}</div>
          <div className="form-actions">
            <span className="privacy-line"><LockKeyhole size={14} />{t("বার্তা সংরক্ষণ বা আপলোড হয় না", "Messages are never stored or uploaded")}</span>
            <button className="button button-solid" type="button" disabled={!message.trim()} onClick={() => setScan(analyzeMessage(message))}><ScanSearch size={17} />{t("যাচাই করুন", "Check")}</button>
          </div>
          {scan && (
            <div className="scan-result" aria-live="polite">
              <div className="scan-summary">
                <span className={scan.score >= 50 ? "score score-high" : scan.score >= 25 ? "score score-mid" : "score score-low"}>{scan.score}</span>
                <div>
                  <strong>{scan.score >= 50 ? t("একাধিক সতর্কতার লক্ষণ", "Several warning signs") : scan.score >= 25 ? t("সতর্ক থাকুন", "Use caution") : t("বড় কোনো লক্ষণ মেলেনি", "No major signals found")}</strong>
                  <span>{t("এটি স্বয়ংক্রিয় প্রাথমিক পরীক্ষা, চূড়ান্ত সিদ্ধান্ত নয়।", "This is an automated preliminary check, not a verdict.")}</span>
                </div>
              </div>
              {scan.flags.length || scan.suspiciousLinks.length
                ? <ul>{scan.flags.map((flag) => <li key={flag.key}><ShieldAlert size={15} />{en ? flag.en : flag.bn}</li>)}{scan.suspiciousLinks.length > 0 && <li><ShieldAlert size={15} />{t("সন্দেহজনক ডোমেইন এক্সটেনশন পাওয়া গেছে", "A suspicious domain extension was found")}</li>}</ul>
                : <p>{t("কোনো চেনা লক্ষণ মেলেনি। তবুও PIN, OTP বা পাসওয়ার্ড কারও সঙ্গে শেয়ার করবেন না।", "No known patterns matched. Still, never share a PIN, OTP or password.")}</p>}
            </div>
          )}
        </div>
      </section>

      <section className="section page-wrap" id="scams">
        <div className="section-head"><p className="eyebrow">{t("বাংলাদেশে প্রচলিত", "COMMON IN BANGLADESH")}</p><h2>{t("প্রচলিত সাইবার প্রতারণা ও করণীয়", "Common cyber scams and what to do")}</h2><p>{t("দেশে বেশি ঘটে এমন প্রতারণার ধরন, চেনার উপায় এবং আক্রান্ত হলে প্রথম পদক্ষেপ।", "Scams frequently seen in Bangladesh, how to spot them and the first thing to do.")}</p></div>
        <div className="scam-grid">
          {commonScams.map(({ icon: Icon, title, how, signs, action }) => (
            <details key={title.en} className="scam-card">
              <summary><span className="scam-icon"><Icon size={20} /></span><span>{t(title.bn, title.en)}</span></summary>
              <dl>
                <div><dt>{t("কীভাবে ঘটে", "How it works")}</dt><dd>{t(how.bn, how.en)}</dd></div>
                <div><dt>{t("সতর্কতার লক্ষণ", "Warning signs")}</dt><dd>{t(signs.bn, signs.en)}</dd></div>
                <div className="scam-action"><dt>{t("করণীয়", "What to do")}</dt><dd>{t(action.bn, action.en)}</dd></div>
              </dl>
            </details>
          ))}
        </div>
      </section>

      <section className="section-tint" id="first-steps">
        <div className="section page-wrap">
          <div className="section-head section-head-row">
            <div><p className="eyebrow">{t("জরুরি করণীয়", "IMMEDIATE STEPS")}</p><h2>{t("প্রতারণার শিকার হলে প্রথমে যা করবেন", "If you have been defrauded, start here")}</h2></div>
            <a className="button button-danger" href="tel:999"><Phone size={16} />{t("বিপদে ৯৯৯", "Danger: 999")}</a>
          </div>
          <ol className="steps-grid">
            {firstSteps.map((item, index) => <li key={item.title}><span className="step-number">{t(["১", "২", "৩", "৪"][index], String(index + 1))}</span><h3>{item.title}</h3><p>{item.text}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="section page-wrap quiz-layout">
        <div>
          <div className="section-head"><p className="eyebrow">{t("অনুশীলন", "PRACTICE")}</p><h2>{t("আসল বার্তা, নাকি প্রতারণা?", "Genuine message or scam?")}</h2></div>
          <ul className="tip-list">{tips.map(({ icon: Icon, text }) => <li key={text}><Icon size={19} /><span>{text}</span></li>)}</ul>
        </div>
        <div className="quiz-panel">
          {quizIndex >= quizItems.length ? (
            <div className="form-success">
              <span className="success-icon"><Check size={24} /></span>
              <h3>{t(`${quizItems.length}টির মধ্যে ${quizScore}টি সঠিক`, `${quizScore} of ${quizItems.length} correct`)}</h3>
              <button className="button button-outline" type="button" onClick={() => { setQuizIndex(0); setQuizAnswer(null); setQuizScore(0); }}>{t("আবার শুরু", "Start again")}</button>
            </div>
          ) : (
            <>
              <p className="quiz-count">{t(`বার্তা ${quizIndex + 1} / ${quizItems.length}`, `Message ${quizIndex + 1} of ${quizItems.length}`)}</p>
              <div className="message-preview"><small>{quizItems[quizIndex].sender}</small><p>{en ? quizItems[quizIndex].messageEn : quizItems[quizIndex].messageBn}</p></div>
              {quizAnswer === null ? (
                <div className="quiz-actions">
                  <button type="button" onClick={() => answer(false)}>{t("আসল", "Genuine")}</button>
                  <button type="button" onClick={() => answer(true)}>{t("প্রতারণা", "Scam")}</button>
                </div>
              ) : (
                <div className={quizAnswer === quizItems[quizIndex].scam ? "quiz-feedback correct" : "quiz-feedback incorrect"}>
                  <strong>{quizAnswer === quizItems[quizIndex].scam ? t("সঠিক উত্তর", "Correct") : t("সঠিক হয়নি", "Not quite")}</strong>
                  <p>{en ? quizItems[quizIndex].whyEn : quizItems[quizIndex].whyBn}</p>
                  <button className="button button-solid" type="button" onClick={() => { setQuizIndex((value) => value + 1); setQuizAnswer(null); }}>{t("পরবর্তী", "Next")}<ArrowRight size={16} /></button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
