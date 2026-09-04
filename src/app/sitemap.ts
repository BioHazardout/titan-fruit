import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const pages = [
  { en: "/en", es: "/es", priority: 1 },
  { en: "/en/fresh-fruit", es: "/es/fruta-fresca", priority: 0.9 },
  { en: "/en/iqf-frozen", es: "/es/iqf-congelados", priority: 0.9 },
  { en: "/en/maquila-services", es: "/es/servicios-maquila", priority: 0.8 },
  { en: "/en/our-facility", es: "/es/nuestra-planta", priority: 0.8 },
  { en: "/en/about-us", es: "/es/nosotros", priority: 0.8 },
  { en: "/en/quality-certifications", es: "/es/calidad-certificaciones", priority: 0.8 },
  { en: "/en/contact", es: "/es/contacto", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.flatMap(({ en, es, priority }) => [en, es].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
    alternates: { languages: { en: `${siteUrl}${en}`, es: `${siteUrl}${es}`, "x-default": `${siteUrl}${en}` } },
  })));
}
