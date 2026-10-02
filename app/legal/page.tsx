import type { Metadata } from "next";
import LegalView from "./view";

export const metadata: Metadata = { title: "আইন ও প্রক্রিয়া" };

export default function LegalPage() {
  return <LegalView />;
}
