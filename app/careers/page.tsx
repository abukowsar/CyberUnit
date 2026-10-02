import type { Metadata } from "next";
import CareersView from "./view";

export const metadata: Metadata = { title: "নিয়োগ" };

export default function CareersPage() {
  return <CareersView />;
}
