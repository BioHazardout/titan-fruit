export type Locale = "en" | "es";
export type PageKey = "home" | "freshFruit" | "iqfFrozen" | "maquila" | "facility" | "about" | "quality" | "contact";
export const routes: Record<Locale, Partial<Record<PageKey, string>>> = {
  en: { home: "/en", freshFruit: "/en/fresh-fruit", iqfFrozen: "/en/iqf-frozen", maquila: "/en/maquila-services", facility: "/en/our-facility", about: "/en/about-us", quality: "/en/quality-certifications", contact: "/en/contact" },
  es: { home: "/es", freshFruit: "/es/fruta-fresca", iqfFrozen: "/es/iqf-congelados", maquila: "/es/servicios-maquila", facility: "/es/nuestra-planta", about: "/es/nosotros", quality: "/es/calidad-certificaciones", contact: "/es/contacto" },
};
export const pageForPath = (pathname: string): PageKey => {
  if (pathname.includes("fresh-fruit") || pathname.includes("fruta-fresca")) return "freshFruit";
  if (pathname.includes("iqf-frozen") || pathname.includes("iqf-congelados")) return "iqfFrozen";
  if (pathname.includes("maquila")) return "maquila";
  if (pathname.includes("facility") || pathname.includes("planta")) return "facility";
  if (pathname.includes("about-us") || pathname.includes("nosotros")) return "about";
  if (pathname.includes("quality-certifications") || pathname.includes("calidad-certificaciones")) return "quality";
  if (pathname.includes("contact") || pathname.includes("contacto")) return "contact";
  return "home";
};
export const localizedPath = (locale: Locale, page: PageKey) => routes[locale][page];
