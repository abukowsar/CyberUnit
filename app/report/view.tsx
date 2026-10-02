"use client";

import { ArrowRight, Check, ChevronLeft, ChevronRight, ClipboardList, Copy, LockKeyhole, Phone, Search, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PageBanner } from "../components/PageBanner";
import { evidenceChecklist } from "../components/bd-context";
import { IS_PROTOTYPE, complaintCategories } from "../components/content";
import { useSite } from "../components/SiteProvider";

type DemoReport = { id: string; category: string; createdAt: number };

const STORAGE_KEY = "cpu_demo_reports";

function loadReports(): DemoReport[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? (JSON.parse(saved) as DemoReport[]) : [];
  } catch {
    return [];
  }
}

function saveReports(reports: DemoReport[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
  } catch {
    /* storage unavailable */
  }
}

export default function ReportView() {
  const { t, en } = useSite();
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState("");
  const [report, setReport] = useState<DemoReport | null>(null);
  const [saved, setSaved] = useState<DemoReport[]>([]);
  const [trackingId, setTrackingId] = useState("");
  const [trackingResult, setTrackingResult] = useState<DemoReport | "missing" | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => setSaved(loadReports()), []);

  const steps = en ? ["Incident type", "Details", "Review"] : ["ঘটনার ধরন", "বিবরণ", "যাচাই"];
  const categoryLabel = (id: string) => {
    const match = complaintCategories.find((item) => item.id === id);
    return match ? t(match.bn, match.en) : id;
  };

  const submit = () => {
    if (!category) return;
    const next = { id: `${IS_PROTOTYPE ? "DEMO" : "CPU"}-${category}-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`, category, createdAt: Date.now() };
    const all = [next, ...saved].slice(0, 8);
    setSaved(all);
    saveReports(all);
    setReport(next);
    setTrackingId(next.id);
    setStep(3);
  };

  const reset = () => {
    setStep(0);
    setCategory("");
    setDetails("");
    setReport(null);
  };

  const track = (id = trackingId) => setTrackingResult(saved.find((item) => item.id === id.trim().toUpperCase()) ?? "missing");

  return (
    <>
      <PageBanner
        eyebrow={["নাগরিক সেবা", "CITIZEN SERVICE"]}
        title={["সাইবার অপরাধের অভিযোগ দাখিল", "Report a cybercrime"]}
        lede={["তিনটি সহজ ধাপে অভিযোগ জমা দিন এবং রেফারেন্স নম্বর দিয়ে অগ্রগতি জানুন।", "Submit a complaint in three simple steps and follow its progress with a reference number."]}
        crumbs={[{ label: ["অভিযোগ দাখিল", "File a complaint"] }]}
      />

      <section className="section page-wrap report-layout">
        <div>
          {IS_PROTOTYPE && (
            <div className="callout callout-warn">
              <TriangleAlert size={20} />
              <div>
                <strong>{t("প্রদর্শনমূলক ফর্ম", "Demonstration form")}</strong>
                <p>{t("এই ফর্ম এখনো কোনো সার্ভারের সঙ্গে যুক্ত নয়; জমা দেওয়া তথ্য পুলিশের কাছে পৌঁছায় না। বাস্তব নাম, ফোন নম্বর বা লেনদেনের তথ্য দেবেন না। প্রকৃত অভিযোগের জন্য নিকটস্থ থানায় যান।", "This form is not connected to any server and nothing reaches the police. Do not enter real names, phone numbers or transaction details. For a real complaint, visit your nearest police station.")}</p>
              </div>
            </div>
          )}

          <div className="form-card">
            {step === 3 && report ? (
              <div className="form-success">
                <span className="success-icon"><Check size={26} /></span>
                <h2>{IS_PROTOTYPE ? t("নমুনা অভিযোগ তৈরি হয়েছে", "Sample complaint created") : t("অভিযোগ গৃহীত হয়েছে", "Complaint received")}</h2>
                <p>{t("আপনার রেফারেন্স নম্বর সংরক্ষণ করুন।", "Keep your reference number.")}</p>
                <div className="reference-id">{report.id}</div>
                <div className="form-actions centered">
                  <button className="button button-outline" type="button" onClick={() => { void navigator.clipboard?.writeText(report.id); setCopied(true); window.setTimeout(() => setCopied(false), 2000); }}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? t("কপি হয়েছে", "Copied") : t("নম্বর কপি", "Copy number")}</button>
                  <button className="button button-text" type="button" onClick={reset}>{t("নতুন অভিযোগ", "New complaint")}</button>
                </div>
              </div>
            ) : (
              <>
                <ol className="stepper" aria-label={t(`ধাপ ${step + 1} / ৩`, `Step ${step + 1} of 3`)}>
                  {steps.map((label, index) => <li key={label} className={index < step ? "done" : index === step ? "current" : undefined}><span>{index < step ? <Check size={14} /> : index + 1}</span>{label}</li>)}
                </ol>

                {step === 0 && (
                  <fieldset className="form-step">
                    <legend>{t("কোন ধরনের ঘটনা ঘটেছে?", "What kind of incident happened?")}</legend>
                    <div className="category-grid">
                      {complaintCategories.map(({ id, icon: Icon, bn, en: english }) => (
                        <button key={id} type="button" className={category === id ? "category-option selected" : "category-option"} onClick={() => setCategory(id)} aria-pressed={category === id}>
                          <Icon size={20} /><span>{t(bn, english)}</span>{category === id && <Check size={16} className="category-check" />}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                )}

                {step === 1 && (
                  <div className="form-step">
                    <label className="field-label" htmlFor="details">{t("ঘটনার সংক্ষিপ্ত বিবরণ", "Brief description of the incident")}</label>
                    <textarea id="details" value={details} onChange={(event) => setDetails(event.target.value)} rows={6} placeholder={t("কখন, কীভাবে ঘটেছে এবং কোন প্ল্যাটফর্মে — সংক্ষেপে লিখুন।", "When, how and on which platform it happened — in brief.")} />
                    <p className="field-hint">{IS_PROTOTYPE ? t("প্রদর্শনের জন্য শুধু কাল্পনিক বিবরণ লিখুন।", "Use fictional details only for this demonstration.") : t("স্ক্রিনশট ও লেনদেন নম্বর সংরক্ষণ করে রাখুন।", "Keep screenshots and transaction IDs safe.")}</p>
                  </div>
                )}

                {step === 2 && (
                  <div className="form-step">
                    <h2 className="form-title">{t("জমা দেওয়ার আগে যাচাই করুন", "Review before submitting")}</h2>
                    <dl className="review-list">
                      <div><dt>{t("ঘটনার ধরন", "Incident type")}</dt><dd>{categoryLabel(category)}</dd></div>
                      <div><dt>{t("বিবরণ", "Description")}</dt><dd>{details}</dd></div>
                    </dl>
                  </div>
                )}

                <div className="form-actions">
                  <button className="button button-text" type="button" disabled={step === 0} onClick={() => setStep((value) => value - 1)}><ChevronLeft size={17} />{t("পেছনে", "Back")}</button>
                  {step < 2
                    ? <button className="button button-solid" type="button" disabled={step === 0 ? !category : !details.trim()} onClick={() => setStep((value) => value + 1)}>{t("পরবর্তী", "Continue")}<ChevronRight size={17} /></button>
                    : <button className="button button-solid" type="button" onClick={submit}>{t("জমা দিন", "Submit")}<ArrowRight size={17} /></button>}
                </div>
              </>
            )}
          </div>
        </div>

        <aside className="report-aside">
          <div className="aside-block" id="track">
            <h2><Search size={18} />{t("অভিযোগের অবস্থা", "Track a complaint")}</h2>
            <form className="track-form" onSubmit={(event) => { event.preventDefault(); track(); }}>
              <label className="visually-hidden" htmlFor="tracking-input">{t("রেফারেন্স নম্বর", "Reference number")}</label>
              <input id="tracking-input" value={trackingId} onChange={(event) => setTrackingId(event.target.value)} placeholder={`${IS_PROTOTYPE ? "DEMO" : "CPU"}-FIN-2026-000000`} />
              <button type="submit" className="button button-solid">{t("দেখুন", "Check")}</button>
            </form>
            {trackingResult === "missing" && <p className="track-result">{t("এই নম্বরে কোনো অভিযোগ পাওয়া যায়নি।", "No complaint found with that number.")}</p>}
            {trackingResult && trackingResult !== "missing" && (
              <div className="track-result found">
                <strong>{categoryLabel(trackingResult.category)}</strong>
                <span>{t("অবস্থা: গৃহীত · যাচাই অপেক্ষমাণ", "Status: received · awaiting review")}</span>
                {IS_PROTOTYPE && <small>{t("প্রদর্শনমূলক অবস্থা, বাস্তব তদন্ত নয়।", "Demonstration status, not a real case.")}</small>}
              </div>
            )}
            {saved.length > 0 && (
              <div className="recent-ids">
                <span>{t("এই ডিভাইসে সাম্প্রতিক", "Recent on this device")}</span>
                {saved.slice(0, 3).map((item) => <button key={item.id} type="button" onClick={() => { setTrackingId(item.id); track(item.id); }}>{item.id}</button>)}
              </div>
            )}
          </div>
          <div className="aside-block">
            <h2><ClipboardList size={18} />{t("যা প্রস্তুত রাখবেন", "Have these ready")}</h2>
            <ul className="check-list compact">{evidenceChecklist.map((item) => <li key={item.en}><Check size={15} />{t(item.bn, item.en)}</li>)}</ul>
            <Link className="text-link" href="/legal">{t("অভিযোগ প্রক্রিয়া জানুন", "How the process works")}</Link>
          </div>
          <div className="aside-block aside-urgent">
            <h2><Phone size={18} />{t("তাৎক্ষণিক বিপদে", "In immediate danger?")}</h2>
            <p>{t("জীবন বা নিরাপত্তার ঝুঁকি থাকলে অনলাইন অভিযোগের অপেক্ষা না করে ৯৯৯-এ কল করুন।", "If life or safety is at risk, do not wait — call 999.")}</p>
            <a className="button button-danger" href="tel:999"><Phone size={16} />{t("৯৯৯-এ কল করুন", "Call 999")}</a>
          </div>
          <p className="privacy-line"><LockKeyhole size={14} />{IS_PROTOTYPE ? t("শুধু ধরন ও রেফারেন্স নম্বর এই ব্রাউজারে থাকে; বিবরণ সংরক্ষণ হয় না।", "Only the type and reference stay in this browser; details are not stored.") : t("আপনার তথ্য গোপনীয়ভাবে সংরক্ষণ করা হয়।", "Your information is handled confidentially.")}</p>
        </aside>
      </section>
    </>
  );
}
