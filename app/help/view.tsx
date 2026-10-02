"use client";

import { Ban, ExternalLink, Phone, Wallet } from "lucide-react";
import { PageBanner } from "../components/PageBanner";
import { emergencyLines, mfsLines, policeNever, recoveryLinks } from "../components/bd-context";
import { useSite } from "../components/SiteProvider";

export default function HelpView() {
  const { t } = useSite();
  return (
    <>
      <PageBanner
        eyebrow={["সহায়তা", "HELP"]}
        title={["হেল্পলাইন ও জরুরি সহায়তা", "Helplines and urgent help"]}
        lede={["সাইবার অপরাধের শিকার হলে কোথায়, কাকে, কীভাবে জানাবেন — এক পাতায়।", "Who to call, and where to go, if you are a victim of cybercrime — on one page."]}
        crumbs={[{ label: ["সহায়তা", "Help"] }]}
      />

      <section className="section page-wrap">
        <div className="section-head"><p className="eyebrow">{t("জরুরি নম্বর", "EMERGENCY NUMBERS")}</p><h2>{t("সরকারি হেল্পলাইন", "Government helplines")}</h2></div>
        <div className="helpline-grid">
          {emergencyLines.map((line) => (
            <a key={line.tel} href={`tel:${line.tel}`} className={line.urgent ? "helpline-card urgent" : "helpline-card"}>
              <span className="helpline-number"><Phone size={18} />{t(line.number, line.tel.length > 5 ? line.tel.replace(/^(\d{5})/, "$1-") : line.tel)}</span>
              <strong>{t(line.name.bn, line.name.en)}</strong>
              <span>{t(line.note.bn, line.note.en)}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section-tint">
        <div className="section page-wrap help-split">
          <div>
            <div className="section-head"><p className="eyebrow">{t("আর্থিক প্রতারণা", "FINANCIAL FRAUD")}</p><h2>{t("টাকা হারালে প্রথমে এখানে কল করুন", "Lost money? Call here first")}</h2><p>{t("লেনদেনের পর যত দ্রুত জানাবেন, টাকা আটকানোর সম্ভাবনা তত বেশি। ব্যাংকের ক্ষেত্রে কার্ডের পেছনের বা অ্যাপের যাচাইকৃত নম্বর ব্যবহার করুন।", "The faster you call after the transaction, the better the chance of freezing it. For banks, use the verified number on your card or in your app.")}</p></div>
            <ul className="mfs-list">
              {mfsLines.map((line) => <li key={line.tel}><Wallet size={18} /><strong>{t(line.name.bn, line.name.en)}</strong><a href={`tel:${line.tel}`}>{t(line.number, line.tel)}</a></li>)}
            </ul>
          </div>
          <div className="never-card">
            <h2><Ban size={20} />{t("পুলিশ কখনো যা করে না", "The police will never")}</h2>
            <ul>{policeNever.map((item) => <li key={item.en}>{t(item.bn, item.en)}</li>)}</ul>
            <p>{t("এমন কল বা বার্তা পেলে তা প্রতারণা। ফোন কেটে নিকটস্থ থানায় সরাসরি যাচাই করুন।", "Any such call or message is a scam. Hang up and verify in person at your nearest police station.")}</p>
          </div>
        </div>
      </section>

      <section className="section page-wrap">
        <div className="section-head"><p className="eyebrow">{t("অ্যাকাউন্ট ও কনটেন্ট", "ACCOUNTS & CONTENT")}</p><h2>{t("দরকারি অনলাইন সহায়তা", "Useful online help")}</h2></div>
        <div className="recovery-grid">
          {recoveryLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="recovery-card">
              <strong>{t(link.label.bn, link.label.en)}</strong>
              <span>{t(link.note.bn, link.note.en)}</span>
              <ExternalLink size={16} />
            </a>
          ))}
        </div>
        <p className="source-note">{t("নম্বর ও লিংক সংশ্লিষ্ট প্রতিষ্ঠানের প্রকাশিত তথ্য অনুযায়ী। সন্দেহ থাকলে প্রতিষ্ঠানের অফিশিয়াল ওয়েবসাইট থেকে যাচাই করুন।", "Numbers and links are as published by each organisation. If in doubt, verify on the organisation's official website.")}</p>
      </section>
    </>
  );
}
