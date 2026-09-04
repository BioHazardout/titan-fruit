import type { Metadata } from "next";
import { QualityPage } from "@/components/pages/quality-page";

export const metadata: Metadata = {
  title: "Quality & Certifications",
  description: "Quality systems, food safety and certifications behind Titan Fruit supply.",
  alternates: { canonical: "/en/quality-certifications" },
};

export default function QualityCertificationsPage() {
  return <QualityPage />;
}
