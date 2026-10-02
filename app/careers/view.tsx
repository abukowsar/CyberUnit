"use client";

import { Award, BadgeAlert, Briefcase, GraduationCap, HandCoins, UserCheck } from "lucide-react";
import { PageBanner } from "../components/PageBanner";
import { specialists } from "../components/content";
import { useSite } from "../components/SiteProvider";

export default function CareersView() {
  const { t } = useSite();

  const benefits = [
    { icon: HandCoins, title: t("আকর্ষণীয় বেতন কাঠামো", "Competitive pay"), text: t("চুক্তিভিত্তিক বিশেষজ্ঞদের জন্য আলাদা বেতন কাঠামো।", "A separate pay structure for contractual experts.") },
    { icon: Award, title: t("কর্মভিত্তিক প্রণোদনা", "Incentives"), text: t("কাজের অবদানের ভিত্তিতে বিশেষ প্রণোদনা।", "Special incentives based on contribution.") },
    { icon: GraduationCap, title: t("উচ্চতর প্রশিক্ষণ", "Advanced training"), text: t("দেশে ও বিদেশে বিশেষায়িত প্রশিক্ষণের সুযোগ।", "Specialist training at home and abroad.") },
    { icon: UserCheck, title: t("পুলিশ সদস্যদের অগ্রাধিকার", "Priority for officers"), text: t("আইটি-প্রশিক্ষিত রেগুলার পুলিশ সদস্যদের অগ্রাধিকার ভিত্তিতে পদায়ন।", "IT-trained regular officers are posted on priority.") },
  ];

  return (
    <>
      <PageBanner
        eyebrow={["নিয়োগ", "CAREERS"]}
        title={["দেশের সাইবার সুরক্ষায় যোগ দিন", "Help protect the nation's cyberspace"]}
        lede={["প্রথাগত পুলিশিং কাঠামোর বাইরে আন্তর্জাতিক মানের কারিগরি দক্ষতা নিশ্চিত করতে চুক্তিভিত্তিক বিশেষজ্ঞ নিয়োগ দেওয়া হবে।", "Contractual specialists will be recruited to bring international-standard technical skills beyond traditional policing."]}
        crumbs={[{ label: ["নিয়োগ", "Careers"] }]}
      />

      <section className="section page-wrap">
        <div className="callout callout-warn">
          <BadgeAlert size={20} />
          <div>
            <strong>{t("নিয়োগ বিজ্ঞপ্তি এখনো প্রকাশিত হয়নি", "No recruitment circular has been published yet")}</strong>
            <p>{t("আনুষ্ঠানিক বিজ্ঞপ্তি প্রকাশিত হলে শুধু এই পাতায় ও বাংলাদেশ পুলিশের অফিশিয়াল চ্যানেলে জানানো হবে। নিয়োগের নামে কেউ টাকা চাইলে তা প্রতারণা।", "Official circulars will be announced only on this page and Bangladesh Police's official channels. Anyone asking for money in exchange for a job is a fraudster.")}</p>
          </div>
        </div>

        <div className="section-head"><p className="eyebrow">{t("বিশেষায়িত পদ", "SPECIALIST ROLES")}</p><h2>{t("চুক্তিভিত্তিক বিশেষজ্ঞ পদসমূহ", "Contractual specialist positions")}</h2></div>
        <div className="role-grid">
          {specialists.map(({ icon: Icon, bn, en, detailBn, detailEn }) => (
            <article key={en} className="role-card">
              <span className="role-icon"><Icon size={22} /></span>
              <h3>{t(bn, en)}</h3>
              <p>{t(detailBn, detailEn)}</p>
              <span className="role-type"><Briefcase size={14} />{t("চুক্তিভিত্তিক", "Contract")}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-tint">
        <div className="section page-wrap">
          <div className="section-head"><p className="eyebrow">{t("সুযোগ-সুবিধা", "WHAT WE OFFER")}</p><h2>{t("কেন সাইবার পুলিশ ইউনিট", "Why join the Cyber Police Unit")}</h2></div>
          <div className="capacity-grid">
            {benefits.map(({ icon: Icon, title, text }) => <article key={title} className="capacity-item"><Icon size={22} /><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>
    </>
  );
}
