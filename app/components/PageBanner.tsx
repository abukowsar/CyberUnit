"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useSite } from "./SiteProvider";

type Props = {
  eyebrow: [string, string];
  title: [string, string];
  lede?: [string, string];
  crumbs?: { href?: string; label: [string, string] }[];
};

export function PageBanner({ eyebrow, title, lede, crumbs = [] }: Props) {
  const { t } = useSite();
  const trail = [{ href: "/", label: ["প্রচ্ছদ", "Home"] as [string, string] }, ...crumbs];
  return (
    <section className="page-banner">
      <div className="page-wrap">
        <nav className="breadcrumb" aria-label={t("অবস্থান", "Breadcrumb")}>
          {trail.map((crumb, index) => (
            <span key={index}>
              {index > 0 && <ChevronRight size={13} aria-hidden="true" />}
              {crumb.href ? <Link href={crumb.href}>{t(...crumb.label)}</Link> : <span aria-current="page">{t(...crumb.label)}</span>}
            </span>
          ))}
        </nav>
        <p className="eyebrow eyebrow-light">{t(...eyebrow)}</p>
        <h1>{t(...title)}</h1>
        {lede && <p className="banner-lede">{t(...lede)}</p>}
      </div>
    </section>
  );
}
