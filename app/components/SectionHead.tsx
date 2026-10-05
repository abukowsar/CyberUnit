"use client";

import { useSite } from "./SiteProvider";

type Props = {
  eyebrow: [string, string];
  title: [string, string];
  lede?: [string, string];
  action?: React.ReactNode;
  light?: boolean;
};

/* Bengali pages show the English label alongside, as on bilingual government sites. */
export function SectionHead({ eyebrow, title, lede, action, light }: Props) {
  const { en, t } = useSite();
  return (
    <div className={action ? "section-head section-head-row" : "section-head"}>
      <div>
        <p className={light ? "eyebrow eyebrow-light" : "eyebrow"}>
          <span className="eyebrow-rule" aria-hidden="true" />
          {en ? eyebrow[1].toUpperCase() : <>{eyebrow[0]}<span className="eyebrow-en">{eyebrow[1].toUpperCase()}</span></>}
        </p>
        <h2>{t(...title)}</h2>
        {lede && <p>{t(...lede)}</p>}
      </div>
      {action}
    </div>
  );
}
