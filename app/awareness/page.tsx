import type { Metadata } from "next";
import AwarenessView from "./view";

export const metadata: Metadata = { title: "সাইবার সচেতনতা" };

export default function AwarenessPage() {
  return <AwarenessView />;
}
