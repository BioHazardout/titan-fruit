import type { Metadata } from "next";
import { MaquilaPage as MaquilaLandingPage } from "@/components/pages/maquila-page";

export const metadata: Metadata = {
  title: "Maquila Services",
  description: "SENASA-certified packing, processing, and export solutions in Peru.",
  alternates: { canonical: "/en/maquila-services" },
};

export default function MaquilaPage({ locale = "en" }: { locale?: "en" | "es" } = {}) {
  return <MaquilaLandingPage locale={locale} />;
}
