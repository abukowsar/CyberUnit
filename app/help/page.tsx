import type { Metadata } from "next";
import HelpView from "./view";

export const metadata: Metadata = { title: "হেল্পলাইন ও সহায়তা" };

export default function HelpPage() {
  return <HelpView />;
}
