"use client";

import { ArrowLeft, Calendar, MapPin, Printer } from "lucide-react";
import Link from "next/link";
import { PageBanner } from "../../components/PageBanner";
import { launchArticle, specialists } from "../../components/content";
import { useSite } from "../../components/SiteProvider";

const bodyBn = [
  "সাইবার অপরাধ দমন, ডিজিটাল নিরাপত্তার জোরদারকরণ এবং প্রযুক্তিভিত্তিক তদন্ত সক্ষমতা বৃদ্ধিতে বাংলাদেশ পুলিশের অধীনে আনুষ্ঠানিকভাবে যাত্রা শুরু করেছে বিশেষায়িত ও স্বতন্ত্র ‘সাইবার পুলিশ ইউনিট’।",
  "স্বরাষ্ট্রমন্ত্রী সালাহউদ্দিন আহমদ আজ বিকালে রাজধানীর পুলিশ সদর দপ্তরের ‘হল অব ইন্টেগ্রিটি’তে বাংলাদেশ পুলিশের বিশেষায়িত ও স্বতন্ত্র ‘সাইবার পুলিশ ইউনিট’-এর আনুষ্ঠানিক উদ্বোধন করেন।",
  "পরে এ উপলক্ষ্যে পুলিশ সদর দপ্তরের ‘হল অব প্রাইড’-এ আয়োজিত প্রেস ব্রিফিংয়ে মন্ত্রী জানান, পরিবর্তনশীল অপরাধের ধরণ এবং কৃত্রিম বুদ্ধিমত্তা (AI)-র যুগে চিরাচরিত সনাতন পদ্ধতি থেকে বেরিয়ে এসে আধুনিক প্রযুক্তি ও মেধানির্ভর ফোর্সে রূপান্তরের লক্ষ্যেই এই ইউনিটের সূচনা করা হয়েছে।",
  "পুলিশের নতুন এই স্বতন্ত্র ইউনিটের সাংগঠনিক কাঠামো ও পদায়ন বিষয়ে স্বরাষ্ট্রমন্ত্রী বলেন, নতুন গঠিত সাইবার পুলিশ ইউনিটটি একজন অতিরিক্ত আইজিপি'র নেতৃত্বে পরিচালিত হবে। প্রাথমিকভাবে অতিরিক্ত আইজিপি মো. ইকবাল হোসেনকে এ ইউনিটের দায়িত্ব প্রদান করে আনুষ্ঠানিকভাবে এর কার্যক্রম শুরু করা হয়েছে। তিনি বলেন, বিভাগীয় পর্যায়ে ডিআইজি ও অতিরিক্ত ডিআইজি এবং জেলা পর্যায়ে পুলিশ সুপার (এসপি) বা দায়িত্বপ্রাপ্ত জ্যেষ্ঠ কর্মকর্তারা দায়িত্ব পালন করবেন। পাশাপাশি থানা পর্যায়ে ওসি'র নেতৃত্বে সাইবার কেন্দ্রিক সেবা প্রদান ও তদন্তের জন্য পৃথক সাব-ইনস্পেক্টর (এসআই), সহকারী সাব-ইনস্পেক্টর (এএসআই) ও কনস্টেবল পদায়ন করা হবে। অনুমোদিত অর্গানোগ্রাম অনুযায়ী এই ইউনিটের মোট জনবল নির্ধারণ করা হয়েছে ৪,৫৯২ জন। বিদ্যমান পুলিশ ফোর্সের মধ্য থেকে অভিজ্ঞ ও প্রশিক্ষিত সদস্যদের পদায়নের পাশাপাশি নতুন নিয়োগ প্রক্রিয়ার মাধ্যমে এই জনবল পূর্ণাঙ্গ রূপ পাবে।",
  "ইউনিটটিতে উচ্চতর প্রশিক্ষণ ও চুক্তিভিত্তিক বিশেষজ্ঞ নিয়োগ প্রসঙ্গে মন্ত্রী জানান, প্রথাগত পুলিশিং কাঠামোর বাইরে গিয়ে আন্তর্জাতিক মানের কারিগরি দক্ষতা নিশ্চিত করতে এই ইউনিটে আউটসোর্সিং ও চুক্তিভিত্তিক (কন্ট্রাকচুয়াল) বিশেষজ্ঞ নিয়োগের বিশেষ ব্যবস্থা রাখা হয়েছে। তিনি বলেন, সিস্টেম অ্যানালিস্ট, ফাইন্যান্সিয়াল ডেটা অ্যানালিস্ট, সাইবার সিকিউরিটি এক্সপার্ট, নেটওয়ার্ক অ্যাডমিনিস্ট্রেটর, ডার্ক ওয়েব অ্যানালিস্ট, ক্রিপ্টো অ্যানালিস্ট, ম্যালওয়্যার অ্যানালিস্ট, সোশ্যাল মিডিয়া অ্যানালিস্ট, ইমার্জেন্সি রেসপন্স কনসালটেন্ট এবং ডিজাস্টার রিকভারি এক্সপার্ট সহ বিভিন্ন বিশেষায়িত পদে চুক্তিভিত্তিক উচ্চ দক্ষতাসম্পন্ন বিশেষজ্ঞ নিয়োগ দেওয়া হবে এবং তাদের জন্য আলাদা আকর্ষণীয় বেতন কাঠামোর ব্যবস্থা থাকবে। একইসঙ্গে রেগুলার পুলিশ ফোর্সের আইটি-প্রশিক্ষণপ্রাপ্ত সদস্যদের অগ্রাধিকার ভিত্তিতে এখানে নিয়োজিত করা হবে। তিনি আরও বলেন, এই ইউনিট মনিটরিং ও পরিচালনায় নিয়োজিত সিনিয়র কর্মকর্তাদের জন্য দেশে ও বিদেশে উচ্চতর বিশেষায়িত প্রশিক্ষণের ব্যবস্থা ইতিমধ্যে গ্রহণ করা হয়েছে এবং কর্মকর্তা-বিশেষজ্ঞদের কাজের অবদানের ভিত্তিতে বিশেষ প্রণোদনাও প্রদান করা হবে।",
  "সাইবার পুলিশ ইউনিটের আধুনিক ল্যাব ও অবকাঠামো নির্মাণ বিষয়ে মন্ত্রী বলেন, বর্তমান সময়ে মানি লন্ডারিং, সোশ্যাল মিডিয়াভিত্তিক অপরাধ, গুজব, ফিন্যান্সিয়াল ক্রাইম, মাদক ও উগ্রবাদের প্রেক্ষাপটে কেমিক্যাল ল্যাবের পাশাপাশি ডিজিটাল ও ফরেনসিক ল্যাবের প্রয়োজনীয়তা সর্বাত্মক হয়ে উঠেছে। এই বাস্তবতা বিবেচনায় নিয়ে সাইবার পুলিশ ইউনিটের অধীনে সর্বাধুনিক প্রযুক্তি ও সাইবার যন্ত্রপাতি সমৃদ্ধ ডিজিটাল ফরেনসিক ল্যাবরেটরি স্থাপন করা হচ্ছে।",
  "স্বরাষ্ট্রমন্ত্রী বলেন, পূর্বে বিভিন্ন ইউনিটে অসংগঠিতভাবে পরিচালিত সাইবার তদন্তের সমন্বয়হীনতা দূর করে এখন থেকে একক আমব্রেলা বা সুসংগঠিত কাঠামোর অধীনে এই ইউনিটের সমস্ত কার্যক্রম পরিচালিত হবে। তিনি এই বিশেষায়িত ইউনিটের উদ্বোধনের মাধ্যমে বাংলাদেশে সাইবার স্পেসের অপব্যবহার ও সকল প্রকার সাইবার অপরাধ সফলভাবে দমন ও প্রতিরোধ করা সম্ভব হবে মর্মে আশাবাদ ব্যক্ত করেন।",
  "প্রেস ব্রিফিংয়ে স্বরাষ্ট্র মন্ত্রণালয়ের সিনিয়র সচিব মনজুর মোর্শেদ চৌধুরী, আইজিপি মো. আলী হোসেন ফকির প্রমুখ উপস্থিত ছিলেন।",
];

const bodyEn = [
  "The specialised, independent Cyber Police Unit has formally begun operating under Bangladesh Police to counter cybercrime, strengthen digital security and build technology-led investigative capacity.",
  "Home Minister Salahuddin Ahmed formally inaugurated the unit this afternoon at the Hall of Integrity, Police Headquarters, Dhaka.",
  "At a press briefing afterwards in the Hall of Pride, the Minister said the unit was created to move beyond traditional methods and transform into a modern, technology- and skills-driven force in response to changing crime patterns and the age of artificial intelligence.",
  "On structure and staffing, the Minister said the unit will be led by an Additional IGP, and operations have formally begun with Additional IGP Md. Iqbal Hossain in charge. DIGs and Additional DIGs will serve at divisional level and Superintendents of Police or designated senior officers at district level. At each police station, dedicated Sub-Inspectors, Assistant Sub-Inspectors and constables will be posted under the Officer-in-Charge to provide cyber services and investigations. The approved organogram sets total personnel at 4,592, to be filled by posting experienced, trained officers from the existing force and through new recruitment.",
  "To secure international-standard technical expertise beyond traditional policing, the unit will recruit highly skilled specialists on contract and through outsourcing — including System Analysts, Financial Data Analysts, Cyber Security Experts, Network Administrators, Dark Web Analysts, Crypto Analysts, Malware Analysts, Social Media Analysts, Emergency Response Consultants and Disaster Recovery Experts — with a separate, competitive pay structure. IT-trained members of the regular police force will be posted on a priority basis. Advanced specialist training at home and abroad has already been arranged for senior officers, and special incentives will be given based on contribution.",
  "With money laundering, social-media crime, rumours, financial crime, drugs and extremism making digital and forensic labs essential alongside chemical labs, a digital forensics laboratory equipped with state-of-the-art technology and cyber equipment is being established under the unit.",
  "The Minister said all cyber investigations, previously conducted in an uncoordinated way across different units, will now run under a single, well-organised umbrella. He expressed hope that the unit will make it possible to successfully prevent misuse of cyberspace and all forms of cybercrime in Bangladesh.",
  "Senior Secretary of the Ministry of Home Affairs Manjur Morshed Chowdhury and IGP Md. Ali Hossain Fakir, among others, were present at the briefing.",
];

export default function ArticleView() {
  const { t, en } = useSite();
  const body = en ? bodyEn : bodyBn;
  return (
    <>
      <PageBanner
        eyebrow={["প্রেস বিজ্ঞপ্তি", "PRESS RELEASE"]}
        title={[launchArticle.title.bn, launchArticle.title.en]}
        crumbs={[{ href: "/news", label: ["সংবাদ", "News"] }, { label: ["প্রেস বিজ্ঞপ্তি", "Press release"] }]}
      />
      <section className="section page-wrap article-layout">
        <article className="article">
          <div className="article-meta">
            <span><Calendar size={15} />{t(launchArticle.date.bn, launchArticle.date.en)}</span>
            <span><MapPin size={15} />{t(launchArticle.place.bn, launchArticle.place.en)}</span>
            <button type="button" className="meta-button" onClick={() => window.print()}><Printer size={15} />{t("প্রিন্ট", "Print")}</button>
          </div>
          {en && <p className="translation-note">English translation. The Bengali release is the authoritative text.</p>}
          {body.map((paragraph, index) => <p key={index} className={index === 0 ? "article-lead" : undefined}>{paragraph}</p>)}
          <Link className="text-link" href="/news"><ArrowLeft size={17} />{t("সব সংবাদ", "All news")}</Link>
        </article>
        <aside className="article-aside">
          <div className="aside-block">
            <h2>{t("এক নজরে", "At a glance")}</h2>
            <dl>
              <div><dt>{t("উদ্বোধক", "Inaugurated by")}</dt><dd>{t("স্বরাষ্ট্রমন্ত্রী সালাহউদ্দিন আহমদ", "Home Minister Salahuddin Ahmed")}</dd></div>
              <div><dt>{t("ইউনিট প্রধান", "Head of unit")}</dt><dd>{t("অতিরিক্ত আইজিপি মো. ইকবাল হোসেন", "Additional IGP Md. Iqbal Hossain")}</dd></div>
              <div><dt>{t("মোট জনবল", "Personnel")}</dt><dd>{t("৪,৫৯২ জন", "4,592")}</dd></div>
              <div><dt>{t("ভেন্যু", "Venue")}</dt><dd>{t("হল অব ইন্টেগ্রিটি, পুলিশ সদর দপ্তর", "Hall of Integrity, Police HQ")}</dd></div>
            </dl>
          </div>
          <div className="aside-block">
            <h2>{t("বিশেষজ্ঞ পদসমূহ", "Specialist roles")}</h2>
            <ul className="aside-list">{specialists.map((item) => <li key={item.en}>{t(item.bn, item.en)}</li>)}</ul>
            <Link className="text-link" href="/careers">{t("নিয়োগ তথ্য", "Careers")}</Link>
          </div>
        </aside>
      </section>
    </>
  );
}
