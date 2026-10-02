import type { Metadata } from "next";
import AboutView from "./view";

export const metadata: Metadata = { title: "আমাদের সম্পর্কে" };

export default function AboutPage() {
  return <AboutView />;
}
