"use client";

import { Check, ClipboardList, ExternalLink, Gavel, Scale } from "lucide-react";
import { PageBanner } from "../components/PageBanner";
import { citizenRights, complaintSteps, evidenceChecklist, faqs, laws } from "../components/bd-context";
import { useSite } from "../components/SiteProvider";

const bnDigits = ["১", "২", "৩", "৪", "৫"];

export default function LegalView() {
  const { t } = useSite();
  return (
    <>
      <PageBanner
        eyebrow={["আইন ও প্রক্রিয়া", "LAW & PROCESS"]}
        title={["অভিযোগ থেকে বিচার পর্যন্ত", "From complaint to court"]}
        lede={["বাংলাদেশে সাইবার অপরাধের অভিযোগ কীভাবে করবেন, কী কী লাগবে, কোন আইন প্রযোজ্য এবং আপনার অধিকার কী।", "How to report a cybercrime in Bangladesh, what you need, which laws apply and what your rights are."]}
        crumbs={[{ label: ["আইন ও প্রক্রিয়া", "Law & process"] }]}
      />

      <section className="section page-wrap">
        <div className="section-head"><p className="eyebrow">{t("প্রক্রিয়া", "PROCESS")}</p><h2>{t("অভিযোগের পর কী হয়", "What happens after you report")}</h2></div>
        <ol className="timeline">
          {complaintSteps.map((step, index) => (
            <li key={step.title.en}>
              <span className="timeline-dot">{t(bnDigits[index], String(index + 1))}</span>
              <div><h3>{t(step.title.bn, step.title.en)}</h3><p>{t(step.text.bn, step.text.en)}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-tint">
        <div className="section page-wrap help-split">
          <div className="list-card">
            <h2><ClipboardList size={20} />{t("অভিযোগের সময় যা সঙ্গে রাখবেন", "Bring these when you report")}</h2>
            <ul className="check-list">{evidenceChecklist.map((item) => <li key={item.en}><Check size={16} />{t(item.bn, item.en)}</li>)}</ul>
          </div>
          <div className="list-card">
            <h2><Scale size={20} />{t("নাগরিক হিসেবে আপনার অধিকার", "Your rights as a citizen")}</h2>
            <ul className="check-list">{citizenRights.map((item) => <li key={item.en}><Check size={16} />{t(item.bn, item.en)}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section page-wrap">
        <div className="section-head"><p className="eyebrow">{t("প্রযোজ্য আইন", "APPLICABLE LAW")}</p><h2>{t("সাইবার অপরাধ-সংক্রান্ত প্রধান আইন", "Key laws on cybercrime")}</h2></div>
        <div className="law-list">
          {laws.map((law) => (
            <article key={law.name.en} className="law-item"><Gavel size={20} /><div><h3>{t(law.name.bn, law.name.en)}</h3><p>{t(law.scope.bn, law.scope.en)}</p></div></article>
          ))}
        </div>
        <p className="source-note">
          {t("এখানে সংক্ষিপ্ত সারাংশ দেওয়া হয়েছে, এটি আইনি পরামর্শ নয়। আইনের পূর্ণ ও হালনাগাদ পাঠ দেখুন ", "This is a brief summary, not legal advice. For the full, current text see ")}
          <a href="http://bdlaws.minlaw.gov.bd" target="_blank" rel="noopener noreferrer">bdlaws.minlaw.gov.bd <ExternalLink size={13} /></a>
        </p>
      </section>

      <section className="section-tint">
        <div className="section page-wrap">
          <div className="section-head"><p className="eyebrow">{t("প্রশ্নোত্তর", "FAQ")}</p><h2>{t("সচরাচর জিজ্ঞাসা", "Frequently asked questions")}</h2></div>
          <div className="faq-list">
            {faqs.map((faq) => <details key={faq.q.en}><summary>{t(faq.q.bn, faq.q.en)}</summary><p>{t(faq.a.bn, faq.a.en)}</p></details>)}
          </div>
        </div>
      </section>
    </>
  );
}
