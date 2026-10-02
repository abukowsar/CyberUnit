"use client";

import { ArrowRight, Ban, Calendar, FileText, FlaskConical, Phone, ScanSearch, Search, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import { commonScams, emergencyLines, policeNever } from "./components/bd-context";
import { launchArticle, mandate, specialists, structure, unit } from "./components/content";
import { useSite } from "./components/SiteProvider";

export default function Home() {
  const { t } = useSite();

  const services = [
    { href: "/report", icon: FileText, title: t("অভিযোগ দাখিল", "File a complaint"), text: t("সাইবার অপরাধের শিকার হলে অনলাইনে জানান", "Report a cybercrime online") },
    { href: "/report#track", icon: Search, title: t("অভিযোগের অবস্থা", "Track a complaint"), text: t("রেফারেন্স নম্বর দিয়ে অগ্রগতি দেখুন", "Check progress with your reference") },
    { href: "/awareness", icon: ScanSearch, title: t("বার্তা যাচাই", "Check a message"), text: t("সন্দেহজনক এসএমএস বা লিংক পরীক্ষা করুন", "Screen a suspicious SMS or link") },
    { href: "tel:999", icon: Phone, title: t("জরুরি ৯৯৯", "Emergency 999"), text: t("তাৎক্ষণিক বিপদে এখনই কল করুন", "Call now if you are in danger"), urgent: true },
  ];

  return (
    <>
      <section className="hero">
        <div className="page-wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light"><span className="eyebrow-dot" />{t("বাংলাদেশ পুলিশ · বিশেষায়িত ইউনিট", "BANGLADESH POLICE · SPECIALISED UNIT")}</p>
            <h1>{t("নিরাপদ সাইবার স্পেস, সুরক্ষিত নাগরিক", "A safer cyberspace for every citizen")}</h1>
            <p className="hero-lede">{t("সাইবার অপরাধ দমন, ডিজিটাল নিরাপত্তা জোরদারকরণ এবং প্রযুক্তিভিত্তিক তদন্ত সক্ষমতা বৃদ্ধিতে এক ছাতার নিচে বাংলাদেশ পুলিশের সাইবার কার্যক্রম।", "Bangladesh Police's cyber operations under one umbrella — countering cybercrime, strengthening digital security and building technology-led investigation.")}</p>
            <div className="hero-actions">
              <Link className="button button-bright" href="/report">{t("অভিযোগ দাখিল করুন", "File a complaint")}<ArrowRight size={18} /></Link>
              <Link className="button button-ghost" href="/about">{t("ইউনিট সম্পর্কে জানুন", "About the unit")}</Link>
            </div>
          </div>
          <aside className="launch-card">
            <span className="launch-tag"><Calendar size={14} />{t("যাত্রা শুরু", "Operational since")} {t(unit.launched.bn, unit.launched.en)}</span>
            <p className="launch-figure">{t(unit.personnel.bn, unit.personnel.en)}</p>
            <p className="launch-caption">{t("অনুমোদিত অর্গানোগ্রাম অনুযায়ী মোট জনবল", "Total personnel under the approved organogram")}</p>
            <div className="launch-chief">
              <span className="chief-mark"><ShieldCheck size={20} /></span>
              <div><small>{t(unit.chief.role.bn, unit.chief.role.en)}</small><strong>{t(unit.chief.rank.bn, unit.chief.rank.en)} {t(unit.chief.name.bn, unit.chief.name.en)}</strong></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="page-wrap services" aria-label={t("নাগরিক সেবা", "Citizen services")}>
        {services.map(({ href, icon: Icon, title, text, urgent }) => {
          const body = <><span className="service-icon"><Icon size={22} /></span><span className="service-copy"><strong>{title}</strong><span>{text}</span></span><ArrowRight className="service-arrow" size={18} /></>;
          return href.startsWith("tel:")
            ? <a key={href} href={href} className={urgent ? "service-tile urgent" : "service-tile"}>{body}</a>
            : <Link key={href} href={href} className="service-tile">{body}</Link>;
        })}
      </section>

      <section className="section page-wrap">
        <div className="section-head">
          <p className="eyebrow">{t("আমাদের কার্যপরিধি", "OUR MANDATE")}</p>
          <h2>{t("যেসব অপরাধ দমনে আমরা কাজ করি", "Crimes we work to prevent")}</h2>
          <p>{t("পরিবর্তনশীল অপরাধের ধরণ ও কৃত্রিম বুদ্ধিমত্তার যুগে আধুনিক প্রযুক্তি ও মেধানির্ভর পুলিশিং।", "Modern, skills-driven policing for changing crime patterns in the age of AI.")}</p>
        </div>
        <div className="mandate-grid">
          {mandate.map(({ icon: Icon, bn, en }) => <div key={en} className="mandate-item"><Icon size={22} /><span>{t(bn, en)}</span></div>)}
        </div>
      </section>

      <section className="stats-band">
        <div className="page-wrap stats-grid">
          <div><strong>{t("৪,৫৯২", "4,592")}</strong><span>{t("অনুমোদিত জনবল", "Approved personnel")}</span></div>
          <div><strong>{t("৪", "4")}</strong><span>{t("স্তরের সাংগঠনিক কাঠামো", "Tiers of command")}</span></div>
          <div><strong>{t("১০", "10")}</strong><span>{t("বিশেষায়িত বিশেষজ্ঞ পদ", "Specialist expert roles")}</span></div>
          <div><strong><FlaskConical size={30} /></strong><span>{t("ডিজিটাল ফরেনসিক ল্যাব স্থাপিত হচ্ছে", "Digital forensics lab being established")}</span></div>
        </div>
      </section>

      <section className="section page-wrap help-split">
        <div>
          <div className="section-head section-head-row">
            <div><p className="eyebrow">{t("বাংলাদেশে প্রচলিত", "COMMON IN BANGLADESH")}</p><h2>{t("যেসব প্রতারণা সবচেয়ে বেশি ঘটে", "The scams we see most")}</h2></div>
          </div>
          <div className="scam-chips">
            {commonScams.slice(0, 8).map(({ icon: Icon, title }) => <Link key={title.en} href="/awareness#scams" className="specialist-chip"><Icon size={18} /><span>{t(title.bn, title.en)}</span></Link>)}
          </div>
          <Link className="text-link" href="/awareness#scams">{t("চেনার উপায় ও করণীয় দেখুন", "How to spot them and what to do")}<ArrowRight size={17} /></Link>
        </div>
        <div className="never-card">
          <h2><Ban size={20} />{t("পুলিশ কখনো যা করে না", "The police will never")}</h2>
          <ul>{policeNever.map((item) => <li key={item.en}>{t(item.bn, item.en)}</li>)}</ul>
          <p>{t("এমন কল বা বার্তা পেলে তা প্রতারণা।", "Any such call or message is a scam.")}</p>
        </div>
      </section>

      <section className="helpline-strip" aria-label={t("হেল্পলাইন", "Helplines")}>
        <div className="page-wrap helpline-strip-inner">
          {emergencyLines.slice(0, 3).map((line) => (
            <a key={line.tel} href={`tel:${line.tel}`}><Phone size={16} /><strong>{t(line.number, line.tel)}</strong><span>{t(line.name.bn, line.name.en)}</span></a>
          ))}
          <Link href="/help" className="helpline-more">{t("সব হেল্পলাইন", "All helplines")}<ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="section page-wrap feature-split">
        <article className="news-feature">
          <p className="eyebrow">{t("প্রেস বিজ্ঞপ্তি", "PRESS RELEASE")} · {t(launchArticle.date.bn, launchArticle.date.en)}</p>
          <h2>{t(launchArticle.title.bn, launchArticle.title.en)}</h2>
          <p>{t(launchArticle.summary.bn, launchArticle.summary.en)}</p>
          <Link className="text-link" href={`/news/${launchArticle.slug}`}>{t("সম্পূর্ণ বিজ্ঞপ্তি পড়ুন", "Read the full release")}<ArrowRight size={17} /></Link>
        </article>
        <blockquote className="statement">
          <p>{t("পূর্বে বিভিন্ন ইউনিটে অসংগঠিতভাবে পরিচালিত সাইবার তদন্তের সমন্বয়হীনতা দূর করে এখন থেকে একক আমব্রেলা কাঠামোর অধীনে সমস্ত কার্যক্রম পরিচালিত হবে।", "Cyber investigations once scattered across units will now run under a single, coordinated umbrella.")}</p>
          <footer>{t("স্বরাষ্ট্রমন্ত্রী, উদ্বোধনী প্রেস ব্রিফিং", "Home Minister, inaugural press briefing")}</footer>
        </blockquote>
      </section>

      <section className="section-tint">
        <div className="section page-wrap">
          <div className="section-head section-head-row">
            <div><p className="eyebrow">{t("সাংগঠনিক কাঠামো", "ORGANISATION")}</p><h2>{t("সদর দপ্তর থেকে থানা পর্যন্ত", "From headquarters to every police station")}</h2></div>
            <Link className="text-link" href="/about">{t("বিস্তারিত কাঠামো", "Full structure")}<ArrowRight size={17} /></Link>
          </div>
          <ol className="tier-row">
            {structure.map(({ icon: Icon, level, lead }, index) => (
              <li key={level.en}><span className="tier-index">{t(["০১", "০২", "০৩", "০৪"][index], `0${index + 1}`)}</span><Icon size={22} /><strong>{t(level.bn, level.en)}</strong><span>{t(lead.bn, lead.en)}</span></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section page-wrap">
        <div className="section-head section-head-row">
          <div><p className="eyebrow">{t("বিশেষজ্ঞ সক্ষমতা", "SPECIALIST CAPABILITY")}</p><h2>{t("আন্তর্জাতিক মানের কারিগরি দক্ষতা", "International-standard technical expertise")}</h2></div>
          <Link className="text-link" href="/careers">{t("নিয়োগ তথ্য", "Career information")}<ArrowRight size={17} /></Link>
        </div>
        <div className="specialist-grid">
          {specialists.slice(0, 8).map(({ icon: Icon, bn, en }) => <div key={en} className="specialist-chip"><Icon size={18} /><span>{t(bn, en)}</span></div>)}
          <Link href="/careers" className="specialist-chip more"><Users size={18} /><span>{t("আরও ২টি পদ", "2 more roles")}</span></Link>
        </div>
      </section>

      <section className="cta-band">
        <div className="page-wrap cta-inner">
          <div><h2>{t("প্রতারণার শিকার হয়েছেন?", "Been a victim of fraud?")}</h2><p>{t("প্রথম কয়েক ঘণ্টাই গুরুত্বপূর্ণ। ব্যাংক/MFS-কে জানান, প্রমাণ সংরক্ষণ করুন এবং অভিযোগ দাখিল করুন।", "The first hours matter. Alert your bank or MFS provider, preserve evidence and file a complaint.")}</p></div>
          <div className="cta-actions"><Link className="button button-bright" href="/awareness#first-steps">{t("করণীয় দেখুন", "See what to do")}</Link><a className="button button-ghost" href="tel:999"><Phone size={17} />999</a></div>
        </div>
      </section>
    </>
  );
}
