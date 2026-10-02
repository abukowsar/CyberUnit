import type { Metadata } from "next";
import ReportView from "./view";

export const metadata: Metadata = { title: "অভিযোগ দাখিল" };

export default function ReportPage() {
  return <ReportView />;
}
