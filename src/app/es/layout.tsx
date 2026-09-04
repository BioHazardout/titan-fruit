import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SpanishTranslator } from "@/components/layout/spanish-translator";
import { siteName, socialImage } from "@/lib/site";

export const metadata: Metadata = {
  title: { default: "Titan Fruit | Origen peruano. Oportunidades globales.", template: "%s | Titan Fruit" },
  description: "Socio peruano integral para fruta fresca, soluciones congeladas IQF y servicios de procesamiento.",
  alternates: { languages: { en: "/en", es: "/es", "x-default": "/en" } },
  openGraph: { type: "website", siteName, locale: "es_PE", alternateLocale: "en_US", url: "/es", title: "Titan Fruit | Origen peruano. Oportunidades globales.", description: "Fruta fresca, soluciones congeladas IQF y servicios de procesamiento desde Perú.", images: [{ url: socialImage, width: 1200, height: 630, alt: "Titan Fruit - Fruta peruana para mercados globales" }] },
  twitter: { card: "summary_large_image", images: [socialImage] },
};

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <><Header path="/es" /><SpanishTranslator />{children}<Footer locale="es" /></>;
}
