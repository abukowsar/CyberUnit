import type { Metadata } from "next";
import NewsView from "./view";

export const metadata: Metadata = { title: "সংবাদ ও বিজ্ঞপ্তি" };

export default function NewsPage() {
  return <NewsView />;
}
