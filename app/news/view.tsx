"use client";

import { ArrowRight, Newspaper } from "lucide-react";
import Link from "next/link";
import { PageBanner } from "../components/PageBanner";
import { launchArticle } from "../components/content";
import { useSite } from "../components/SiteProvider";

export default function NewsView() {
  const { t } = useSite();
  return (
    <>
      <PageBanner eyebrow={["সংবাদ কক্ষ", "NEWSROOM"]} title={["সংবাদ ও বিজ্ঞপ্তি", "News and releases"]} crumbs={[{ label: ["সংবাদ", "News"] }]} />
      <section className="section page-wrap">
        <ul className="news-list">
          <li>
            <Link href={`/news/${launchArticle.slug}`} className="news-row">
              <span className="news-date"><Newspaper size={18} />{t(launchArticle.date.bn, launchArticle.date.en)}</span>
              <span className="news-body">
                <span className="news-kind">{t("প্রেস বিজ্ঞপ্তি", "Press release")}</span>
                <strong>{t(launchArticle.title.bn, launchArticle.title.en)}</strong>
                <span>{t(launchArticle.summary.bn, launchArticle.summary.en)}</span>
              </span>
              <ArrowRight size={20} className="news-arrow" />
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
