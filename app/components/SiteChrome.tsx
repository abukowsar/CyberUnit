"use client";

import { Languages, Megaphone, Menu, TriangleAlert, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Emblem } from "./Emblem";
import { IS_PROTOTYPE, launchArticle, navItems, unit } from "./content";
import { useSite } from "./SiteProvider";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const { en, t, toggleLanguage } = useSite();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <a className="skip-link" href="#main">{t("মূল বিষয়বস্তুতে যান", "Skip to content")}</a>
      <header className="site-header">
        <div className="page-wrap header-inner">
          <Link className="brand" href="/">
            <Emblem size={50} />
            <span className="brand-copy">
              <strong>{t(unit.name.bn, unit.name.en)}</strong>
              <small>{t(unit.parent.bn, unit.parent.en)}</small>
            </span>
          </Link>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-nav" aria-label={menuOpen ? t("মেনু বন্ধ", "Close menu") : t("মেনু খুলুন", "Open menu")}>{menuOpen ? <X /> : <Menu />}</button>
          <nav id="main-nav" className={menuOpen ? "main-nav nav-open" : "main-nav"} aria-label={t("প্রধান নেভিগেশন", "Main navigation")}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={isActive(pathname, item.href) ? "active" : undefined} aria-current={isActive(pathname, item.href) ? "page" : undefined}>
                {t(item.bn, item.en)}
              </Link>
            ))}
          </nav>
          <button type="button" className="lang-button" onClick={toggleLanguage} aria-label={t("Switch to English", "বাংলায় দেখুন")}><Languages size={16} />{en ? "বাংলা" : "English"}</button>
        </div>
      </header>

      <div className="notice-bar">
        <div className="page-wrap notice-inner">
          <span className="notice-label"><Megaphone size={15} />{t("সর্বশেষ", "Latest")}</span>
          <Link href={`/news/${launchArticle.slug}`}>{t(launchArticle.title.bn, launchArticle.title.en)}</Link>
        </div>
      </div>

      {IS_PROTOTYPE && (
        <div className="prototype-bar" role="note">
          <div className="page-wrap"><TriangleAlert size={14} />{t("ডিজাইন প্রোটোটাইপ: অনলাইন অভিযোগ ও ট্র্যাকিং প্রদর্শনমূলক, কোনো তথ্য পাঠানো হয় না। জরুরি প্রয়োজনে ৯৯৯ বা নিকটস্থ থানায় যোগাযোগ করুন।", "Design prototype: online complaints and tracking are demonstrations and send no data. In an emergency, call 999 or visit your nearest police station.")}</div>
        </div>
      )}
    </>
  );
}

export function SiteFooter() {
  const { t } = useSite();
  return (
    <footer className="site-footer">
      <div className="page-wrap footer-grid">
        <div className="footer-brand">
          <div className="footer-brand-row">
            <Emblem size={44} />
            <div><strong>{t(unit.name.bn, unit.name.en)}</strong><span>{t(unit.parent.bn, unit.parent.en)}</span></div>
          </div>
          <p>{t("সাইবার অপরাধ দমন, ডিজিটাল নিরাপত্তা জোরদারকরণ এবং প্রযুক্তিভিত্তিক তদন্ত সক্ষমতা বৃদ্ধিতে নিয়োজিত বাংলাদেশ পুলিশের বিশেষায়িত ও স্বতন্ত্র ইউনিট।", "The specialised, independent unit of Bangladesh Police dedicated to countering cybercrime, strengthening digital security and building technology-led investigative capacity.")}</p>
        </div>
        <div>
          <h2>{t("দ্রুত লিংক", "Quick links")}</h2>
          <ul>{navItems.slice(1).map((item) => <li key={item.href}><Link href={item.href}>{t(item.bn, item.en)}</Link></li>)}</ul>
        </div>
        <div>
          <h2>{t("যোগাযোগ", "Contact")}</h2>
          <ul>
            <li>{t(unit.address.bn, unit.address.en)}</li>
            <li><a href="tel:999">{t("জাতীয় জরুরি সেবা: ৯৯৯", "National emergency service: 999")}</a></li>
            <li><a href="tel:109">{t("নারী ও শিশু নির্যাতন প্রতিরোধ: ১০৯", "Violence against women & children: 109")}</a></li>
            <li><a href="tel:01320000888">{t("পিসিএসডব্লিউ (নারীদের সাইবার সহায়তা): ০১৩২০-০০০৮৮৮", "PCSW (cyber support for women): 01320-000888")}</a></li>
            <li>{t("নিকটস্থ থানার সাইবার ডেস্ক", "Cyber desk at your nearest police station")}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="page-wrap footer-bottom-inner">
          <span>© ২০২৬ {t(unit.name.bn, unit.name.en)}, {t(unit.parent.bn, unit.parent.en)}</span>
          {IS_PROTOTYPE && <span>{t("ডিজাইন প্রোটোটাইপ · ইউনিটের তথ্য ১ অক্টোবর ২০২৬-এর প্রেস বিজ্ঞপ্তির ভিত্তিতে", "Design prototype · unit details based on the 1 October 2026 press release")}</span>}
        </div>
      </div>
    </footer>
  );
}
