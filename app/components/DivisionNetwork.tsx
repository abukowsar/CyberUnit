"use client";

import { useSite } from "./SiteProvider";

/* The eight divisions, placed roughly by geography, all linked to Dhaka HQ. */
const divisions = [
  { id: "rangpur", bn: "রংপুর", en: "Rangpur", x: 118, y: 62 },
  { id: "mymensingh", bn: "ময়মনসিংহ", en: "Mymensingh", x: 232, y: 118 },
  { id: "sylhet", bn: "সিলেট", en: "Sylhet", x: 338, y: 122 },
  { id: "rajshahi", bn: "রাজশাহী", en: "Rajshahi", x: 72, y: 176 },
  { id: "khulna", bn: "খুলনা", en: "Khulna", x: 96, y: 318 },
  { id: "barishal", bn: "বরিশাল", en: "Barishal", x: 196, y: 352 },
  { id: "chattogram", bn: "চট্টগ্রাম", en: "Chattogram", x: 322, y: 330 },
];
const hq = { x: 214, y: 228 };

/* A few lateral links so it reads as a mesh, not only a star. */
const mesh: [string, string][] = [
  ["rangpur", "mymensingh"], ["mymensingh", "sylhet"], ["rangpur", "rajshahi"],
  ["rajshahi", "khulna"], ["khulna", "barishal"], ["barishal", "chattogram"], ["sylhet", "chattogram"],
];

export function DivisionNetwork() {
  const { t } = useSite();
  const byId = Object.fromEntries(divisions.map((d) => [d.id, d]));

  return (
    <figure className="division-network" aria-label={t("সদর দপ্তর থেকে আট বিভাগে সংযুক্ত সাইবার নেটওয়ার্ক", "Cyber network linking headquarters to all eight divisions")}>
      <svg viewBox="0 0 420 420" role="img">
        <defs>
          <radialGradient id="hq-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4fd1df" stopOpacity=".55" />
            <stop offset="100%" stopColor="#4fd1df" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className="dn-rings" fill="none" stroke="rgba(255,255,255,.08)">
          <circle cx={hq.x} cy={hq.y} r="70" />
          <circle cx={hq.x} cy={hq.y} r="130" />
          <circle cx={hq.x} cy={hq.y} r="190" />
        </g>

        <g className="dn-mesh" stroke="rgba(255,255,255,.14)" strokeWidth="1">
          {mesh.map(([a, b]) => <line key={a + b} x1={byId[a].x} y1={byId[a].y} x2={byId[b].x} y2={byId[b].y} />)}
        </g>

        <g className="dn-links">
          {divisions.map((d, index) => (
            <g key={d.id}>
              <line x1={hq.x} y1={hq.y} x2={d.x} y2={d.y} className="dn-link" />
              <line x1={hq.x} y1={hq.y} x2={d.x} y2={d.y} className="dn-pulse" style={{ animationDelay: `${index * 0.45}s` }} />
            </g>
          ))}
        </g>

        {divisions.map((d) => (
          <g key={d.id} className="dn-node">
            <circle cx={d.x} cy={d.y} r="11" className="dn-node-halo" />
            <circle cx={d.x} cy={d.y} r="5" className="dn-node-core" />
            <text x={d.x} y={d.y + (d.y > 300 ? 26 : -16)} textAnchor="middle">{t(d.bn, d.en)}</text>
          </g>
        ))}

        <circle cx={hq.x} cy={hq.y} r="54" fill="url(#hq-glow)" className="dn-hq-glow" />
        <circle cx={hq.x} cy={hq.y} r="15" className="dn-hq" />
        <circle cx={hq.x} cy={hq.y} r="6" fill="#0b2545" />
        <text x={hq.x + 22} y={hq.y + 5} className="dn-hq-label">{t("ঢাকা · সদর দপ্তর", "Dhaka · HQ")}</text>
      </svg>
      <figcaption>
        <span><i className="dot-hq" />{t("সদর দপ্তর", "Headquarters")}</span>
        <span><i className="dot-div" />{t("৮ বিভাগ · ৬৪ জেলা · প্রতিটি থানা", "8 divisions · 64 districts · every station")}</span>
      </figcaption>
    </figure>
  );
}
