"use client";

import { Award, BookOpen, FlaskConical, GraduationCap, Mail, Network, Phone, ShieldCheck, Smartphone, Target, UserCheck } from "lucide-react";
import Image from "next/image";
import { PageBanner } from "../components/PageBanner";
import { structure, unit } from "../components/content";
import { useSite } from "../components/SiteProvider";

export default function AboutView() {
  const { t } = useSite();

  const pillars = [
    { icon: Network, title: t("একক আমব্রেলা কাঠামো", "A single umbrella"), text: t("বিভিন্ন ইউনিটে ছড়িয়ে থাকা সাইবার তদন্তের সমন্বয়হীনতা দূর করে সব কার্যক্রম এক সুসংগঠিত কাঠামোর অধীনে।", "Ending fragmented cyber investigations by bringing them into one coordinated structure.") },
    { icon: Target, title: t("প্রযুক্তি ও মেধানির্ভর ফোর্স", "A technology-led force"), text: t("চিরাচরিত পদ্ধতি থেকে বেরিয়ে আধুনিক প্রযুক্তি ও দক্ষতানির্ভর পুলিশিংয়ে রূপান্তর।", "Moving beyond traditional methods to modern, skills-driven policing.") },
    { icon: ShieldCheck, title: t("দমন ও প্রতিরোধ", "Prevention and enforcement"), text: t("সাইবার স্পেসের অপব্যবহার ও সকল প্রকার সাইবার অপরাধ দমন ও প্রতিরোধ।", "Preventing misuse of cyberspace and countering every form of cybercrime.") },
  ];

  const capacity = [
    { icon: UserCheck, title: t("চুক্তিভিত্তিক বিশেষজ্ঞ", "Contractual experts"), text: t("আউটসোর্সিং ও চুক্তিভিত্তিক উচ্চ দক্ষতাসম্পন্ন বিশেষজ্ঞ নিয়োগ, আলাদা আকর্ষণীয় বেতন কাঠামোসহ।", "Highly skilled experts recruited on contract, with a separate, competitive pay structure.") },
    { icon: BookOpen, title: t("আইটি-প্রশিক্ষিত পুলিশ সদস্য", "IT-trained officers"), text: t("রেগুলার পুলিশ ফোর্সের আইটি-প্রশিক্ষণপ্রাপ্ত সদস্যদের অগ্রাধিকার ভিত্তিতে পদায়ন।", "Priority posting for IT-trained members of the regular police force.") },
    { icon: GraduationCap, title: t("দেশে ও বিদেশে প্রশিক্ষণ", "Training at home and abroad"), text: t("সিনিয়র কর্মকর্তাদের জন্য উচ্চতর বিশেষায়িত প্রশিক্ষণের ব্যবস্থা গ্রহণ করা হয়েছে।", "Advanced specialist training has been arranged for senior officers.") },
    { icon: Award, title: t("কর্মভিত্তিক প্রণোদনা", "Performance incentives"), text: t("কর্মকর্তা ও বিশেষজ্ঞদের অবদানের ভিত্তিতে বিশেষ প্রণোদনা।", "Special incentives based on the contribution of officers and experts.") },
  ];

  return (
    <>
      <PageBanner
        eyebrow={["আমাদের সম্পর্কে", "ABOUT US"]}
        title={["বাংলাদেশ পুলিশের বিশেষায়িত ও স্বতন্ত্র সাইবার ইউনিট", "Bangladesh Police's specialised, independent cyber unit"]}
        lede={["১ অক্টোবর ২০২৬ তারিখে পুলিশ সদর দপ্তরে আনুষ্ঠানিকভাবে যাত্রা শুরু।", "Formally launched at Police Headquarters on 1 October 2026."]}
        crumbs={[{ label: ["আমাদের সম্পর্কে", "About"] }]}
      />

      <section className="section page-wrap">
        <div className="section-head"><p className="eyebrow">{t("লক্ষ্য", "PURPOSE")}</p><h2>{t("কেন এই ইউনিট", "Why this unit exists")}</h2></div>
        <div className="pillar-grid">
          {pillars.map(({ icon: Icon, title, text }) => <article key={title} className="pillar"><span className="pillar-icon"><Icon size={22} /></span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section page-wrap compare">
        <div className="compare-col before">
          <h3>{t("আগে", "Before")}</h3>
          <ul>
            <li>{t("সাইবার তদন্ত সিআইডি, মেট্রোপলিটন পুলিশসহ বিভিন্ন ইউনিটে আলাদাভাবে পরিচালিত হতো", "Cyber investigations ran separately across CID, metropolitan police and other units")}</li>
            <li>{t("নাগরিকরা বুঝতে পারতেন না কোথায় অভিযোগ করবেন", "Citizens were unsure where to report")}</li>
            <li>{t("জেলা ও থানা পর্যায়ে বিশেষায়িত জনবলের ঘাটতি", "Few specialist staff at district and station level")}</li>
            <li>{t("ডিজিটাল ফরেনসিক সক্ষমতা সীমিত", "Limited digital forensics capacity")}</li>
          </ul>
        </div>
        <div className="compare-col after">
          <h3>{t("এখন", "Now")}</h3>
          <ul>
            <li>{t("অতিরিক্ত আইজিপি-র অধীনে একক কমান্ড ও সমন্বিত তদন্ত", "Single command and coordinated investigation under an Additional IGP")}</li>
            <li>{t("প্রতিটি থানায় সাইবার সেবার জন্য পৃথক এসআই, এএসআই ও কনস্টেবল", "Dedicated SIs, ASIs and constables for cyber services at every station")}</li>
            <li>{t("বিভাগ ও জেলায় ডিআইজি ও এসপি পর্যায়ের তদারকি", "DIG- and SP-level oversight in every division and district")}</li>
            <li>{t("সর্বাধুনিক ডিজিটাল ফরেনসিক ল্যাব ও চুক্তিভিত্তিক বিশেষজ্ঞ", "A state-of-the-art forensics lab and contractual specialists")}</li>
          </ul>
        </div>
      </section>

      <section className="section-tint">
        <div className="section page-wrap leader-layout">
          <div className="leader-card">
            <Image className="leader-photo" src={unit.chief.photo} alt={t(unit.chief.name.bn, unit.chief.name.en)} width={283} height={311} priority />
            <div className="leader-body">
              <h2>{t(unit.chief.name.bn, unit.chief.name.en)}</h2>
              <p className="leader-rank">{t(unit.chief.rank.bn, unit.chief.rank.en)} ({t(unit.chief.role.bn, unit.chief.role.en)})</p>
              <dl className="leader-contact">
                <div><dt><Mail size={15} />{t("ইমেইল", "Email")}</dt><dd><a href={`mailto:${unit.chief.email}`}>{unit.chief.email}</a></dd></div>
                <div><dt><Phone size={15} />{t("ফোন (অফিস)", "Phone (office)")}</dt><dd><a href={`tel:${unit.chief.office.tel}`}>{t(unit.chief.office.bn, unit.chief.office.en)}</a></dd></div>
                <div><dt><Smartphone size={15} />{t("মোবাইল", "Mobile")}</dt><dd><a href={`tel:${unit.chief.mobile.tel}`}>{t(unit.chief.mobile.bn, unit.chief.mobile.en)}</a></dd></div>
              </dl>
            </div>
          </div>
          <div className="leader-text">
            <p className="eyebrow">{t("নেতৃত্ব", "LEADERSHIP")}</p>
            <h2>{t("একজন অতিরিক্ত আইজিপি-র নেতৃত্বে পরিচালিত", "Led by an Additional Inspector General")}</h2>
            <p>{t("সাইবার পুলিশ ইউনিট একজন অতিরিক্ত আইজিপি-র নেতৃত্বে পরিচালিত হয়। প্রাথমিকভাবে অতিরিক্ত আইজিপি মোঃ ইকবাল হোসেনকে এ ইউনিটের দায়িত্ব প্রদান করে আনুষ্ঠানিকভাবে কার্যক্রম শুরু করা হয়েছে।", "The Cyber Police Unit is led by an Additional IGP. Operations formally began with Additional IGP Md. Iqbal Hossain appointed to lead the unit.")}</p>
          </div>
        </div>
      </section>

      <section className="section page-wrap">
        <div className="section-head"><p className="eyebrow">{t("সাংগঠনিক কাঠামো", "ORGANOGRAM")}</p><h2>{t("চার স্তরের কাঠামো, মোট ৪,৫৯২ জনবল", "Four tiers, 4,592 personnel in total")}</h2><p>{t("বিদ্যমান পুলিশ ফোর্সের অভিজ্ঞ ও প্রশিক্ষিত সদস্যদের পদায়ন এবং নতুন নিয়োগের মাধ্যমে জনবল পূর্ণাঙ্গ রূপ পাবে।", "Staffing will be completed by posting experienced, trained officers from the existing force and through new recruitment.")}</p></div>
        <ol className="org-chart">
          {structure.map(({ icon: Icon, level, lead, detail }, index) => (
            <li key={level.en} style={{ "--depth": index } as React.CSSProperties}>
              <span className="org-icon"><Icon size={22} /></span>
              <div><small>{t(level.bn, level.en)}</small><strong>{t(lead.bn, lead.en)}</strong><span>{t(detail.bn, detail.en)}</span></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="lab-band">
        <div className="page-wrap lab-inner">
          <span className="lab-icon"><FlaskConical size={34} /></span>
          <div>
            <p className="eyebrow eyebrow-light">{t("অবকাঠামো · নির্মাণাধীন", "INFRASTRUCTURE · IN PROGRESS")}</p>
            <h2>{t("ডিজিটাল ফরেনসিক ল্যাবরেটরি", "Digital Forensics Laboratory")}</h2>
            <p>{t("মানি লন্ডারিং, সোশ্যাল মিডিয়াভিত্তিক অপরাধ, গুজব, আর্থিক অপরাধ, মাদক ও উগ্রবাদের প্রেক্ষাপটে কেমিক্যাল ল্যাবের পাশাপাশি সর্বাধুনিক প্রযুক্তি ও সাইবার যন্ত্রপাতি সমৃদ্ধ ডিজিটাল ফরেনসিক ল্যাবরেটরি স্থাপন করা হচ্ছে।", "Alongside chemical labs, a digital forensics laboratory equipped with state-of-the-art cyber tools is being established to address money laundering, social-media crime, rumours, financial crime, drugs and extremism.")}</p>
          </div>
        </div>
      </section>

      <section className="section page-wrap">
        <div className="section-head"><p className="eyebrow">{t("সক্ষমতা উন্নয়ন", "CAPACITY")}</p><h2>{t("দক্ষ জনবল, আধুনিক প্রশিক্ষণ", "Skilled people, modern training")}</h2></div>
        <div className="capacity-grid">
          {capacity.map(({ icon: Icon, title, text }) => <article key={title} className="capacity-item"><Icon size={22} /><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>
    </>
  );
}
