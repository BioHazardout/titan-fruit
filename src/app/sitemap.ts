import type { MetadataRoute } from "next";
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://titanfruit.pe";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/en", "/en/fresh-fruit"].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "/en" ? 1 : 0.8 }));
}
