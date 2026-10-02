import type { Metadata } from "next";
import ArticleView from "./view";

export const metadata: Metadata = {
  title: "যাত্রা শুরু করল সাইবার পুলিশ ইউনিট",
  description: "স্বরাষ্ট্রমন্ত্রী সালাহউদ্দিন আহমদ পুলিশ সদর দপ্তরে বাংলাদেশ পুলিশের বিশেষায়িত ও স্বতন্ত্র সাইবার পুলিশ ইউনিটের আনুষ্ঠানিক উদ্বোধন করেন।",
};

export default function ArticlePage() {
  return <ArticleView />;
}
