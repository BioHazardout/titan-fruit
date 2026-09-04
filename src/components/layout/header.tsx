"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/icons";
import { localizedPath, pageForPath, type Locale, type PageKey } from "@/lib/routes";

type NavItem = { label: string; page?: PageKey; children?: Array<{ label: string; page: PageKey }> };

const nav: NavItem[] = [
  { label: "HOME", page: "home" },
  { label: "FRESH PRODUCTS", page: "freshFruit" },
  { label: "IQF FROZEN PRODUCTS", page: "iqfFrozen" },
  { label: "MAQUILA SERVICES", page: "maquila" },
  { label: "OUR FACILITY", page: "facility" },
  { label: "TITAN FRUIT", children: [{ label: "ABOUT US", page: "about" }, { label: "QUALITY & CERTIFICATIONS", page: "quality" }] },
];
const spanishLabels: Record<string, string> = { HOME: "INICIO", "FRESH PRODUCTS": "FRUTA FRESCA", "IQF FROZEN PRODUCTS": "FRUTAS IQF CONGELADAS", "MAQUILA SERVICES": "SERVICIOS DE MAQUILA", "OUR FACILITY": "NUESTRA PLANTA", "TITAN FRUIT": "TITAN FRUIT", "ABOUT US": "NOSOTROS", "QUALITY & CERTIFICATIONS": "CALIDAD Y CERTIFICACIONES" };

function Brand({ locale = "en" }: { locale?: Locale }) {
  return <Link href={locale === "es" ? "/es" : "/en"} className="flex shrink-0 items-center" aria-label="Titan Fruit home"><img src="/images/company/titanfruit-logo-color2.svg" alt="Titan Fruit" className="h-7 w-auto lg:h-9 xl:h-10" /></Link>;
}

function LocaleSwitch({ path }: { path: string }) {
  const page = pageForPath(path);
  const locales: Locale[] = ["en", "es"];
  return <div className="flex shrink-0 items-center gap-1 text-[10px] font-bold tracking-[.1em]">{locales.map((locale) => {
    const href = localizedPath(locale, page);
    const active = path.startsWith(`/${locale}`);
    return href
      ? <Link key={locale} href={href} aria-current={active ? "page" : undefined} className={`rounded px-1.5 py-1 transition-colors hover:bg-lime hover:text-forest ${active ? "bg-white/15 text-lime" : "text-white/65"}`}>{locale.toUpperCase()}</Link>
      : null;
  })}</div>;
}

export function Header({ path: providedPath }: { path?: string }) {
  const pathname = usePathname();
  const path = pathname || providedPath || "/en";
  const locale: Locale = path.startsWith("/es") ? "es" : "en";
  const currentPage = pageForPath(path);
  const isTitanPage = currentPage === "about" || currentPage === "quality";
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mobileTitanOpen, setMobileTitanOpen] = useState(isTitanPage);

  const openMenu = () => {
    setMobileTitanOpen(isTitanPage);
    setMounted(true);
    requestAnimationFrame(() => setVisible(true));
  };
  const closeMenu = () => {
    setVisible(false);
    setMobileTitanOpen(false);
    window.setTimeout(() => setMounted(false), 340);
  };

  useEffect(() => {
    if (!mounted) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && closeMenu();
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [mounted]);

  const linkClass = (page: PageKey) => `whitespace-nowrap text-[9px] font-semibold uppercase tracking-[.055em] transition-colors xl:text-[10px] ${page === currentPage ? "text-lime" : "text-white/75 hover:text-lime"}`;
  const mobileLinkClass = (page: PageKey) => `border-b border-white/10 py-5 text-base font-semibold transition-[color,opacity,transform] duration-300 ${visible ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"} ${page === currentPage ? "text-lime" : "text-white hover:text-lime"}`;

  return <header className="sticky top-0 z-50 isolate overflow-visible bg-[#021e10]/95 text-white lg:backdrop-blur">
    <div className="container flex h-[60px] items-center justify-between gap-3 lg:h-[80px]">
      <Brand locale={locale} />

      <nav className="hidden min-w-0 flex-1 items-center justify-center gap-3 lg:flex xl:gap-4" aria-label="Primary navigation">
        {nav.map((item) => item.children ? <div key={item.label} className="group relative">
          <button type="button" aria-haspopup="true" className={`inline-flex items-center gap-1 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[.055em] transition-colors xl:text-[10px] ${isTitanPage ? "text-lime" : "text-white/75 hover:text-lime"}`}>
            {locale === "es" ? spanishLabels[item.label] : item.label}<Icon name="chevron" className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
          </button>
          <div className="pointer-events-none invisible absolute left-1/2 top-full z-[70] w-64 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#021e10] p-2 shadow-[0_18px_40px_rgba(0,0,0,.25)]">
              {item.children.map((child) => <Link key={child.page} href={localizedPath(locale, child.page)!} className={`block rounded-lg px-3 py-3 text-[10px] font-semibold uppercase tracking-[.06em] transition-colors hover:bg-lime hover:text-forest ${child.page === currentPage ? "bg-white/10 text-lime" : "text-white/75"}`}>{locale === "es" ? spanishLabels[child.label] : child.label}</Link>)}
            </div>
          </div>
        </div> : <Link key={item.label} href={localizedPath(locale, item.page!)!} className={linkClass(item.page!)}>{locale === "es" ? spanishLabels[item.label] : item.label}</Link>)}
      </nav>

      <div className="hidden items-center gap-3 lg:flex"><Link href={localizedPath(locale, "contact")!} className="whitespace-nowrap rounded-full bg-lime px-4 py-3 text-[9px] font-bold tracking-[.07em] text-forest transition-colors hover:bg-lime xl:px-5 xl:text-[10px]">{locale === "es" ? "CONTACTO" : "CONTACT"}</Link><LocaleSwitch path={path} /></div>
      <button onClick={openMenu} className="grid h-10 w-10 place-items-center rounded-full border border-white/25 transition-colors hover:border-lime hover:bg-lime hover:text-forest lg:hidden" aria-controls="mobile-menu" aria-expanded={mounted} aria-label="Open navigation"><Icon name="menu" className="h-5 w-5" /></button>
    </div>

    {mounted && <div className={`fixed inset-0 z-[60] bg-black/70 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${visible ? "opacity-100" : "opacity-0"}`} onClick={closeMenu} aria-hidden={!visible}>
      <aside id="mobile-menu" onClick={(event) => event.stopPropagation()} className={`mobile-drawer relative z-10 ml-auto flex h-[100dvh] w-[min(88vw,420px)] flex-col overflow-y-auto px-6 py-5 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] ${visible ? "translate-x-0" : "translate-x-full"}`} aria-label="Mobile navigation">
        <div className="flex items-center justify-between border-b border-white/10 pb-5"><Brand locale={locale} /><button onClick={closeMenu} className="grid h-10 w-10 place-items-center rounded-full border border-white/25 transition-colors hover:border-lime hover:bg-lime hover:text-forest" aria-label="Close navigation"><Icon name="close" className="h-5 w-5" /></button></div>
        <nav className="mt-4 grid" aria-label="Mobile navigation links">
          {nav.map((item, index) => item.children ? <div key={item.label} className="border-b border-white/10">
            <button type="button" aria-haspopup="true" aria-expanded={mobileTitanOpen} onClick={() => setMobileTitanOpen((open) => !open)} className={`flex w-full items-center justify-between py-5 text-left text-base font-semibold transition-[color,opacity,transform] duration-300 ${visible ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"} ${isTitanPage ? "text-lime" : "text-white hover:text-lime"}`} style={{ transitionDelay: visible ? `${70 + index * 35}ms` : "0ms" }}>
              {locale === "es" ? spanishLabels[item.label] : item.label}<Icon name="chevron" className={`h-4 w-4 transition-transform duration-300 ${mobileTitanOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${mobileTitanOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="pb-2 pl-3">
                {item.children.map((child) => <Link onClick={closeMenu} key={child.page} href={localizedPath(locale, child.page)!} className={`block border-l border-white/15 px-4 py-3 text-sm font-semibold uppercase transition-colors hover:text-lime ${child.page === currentPage ? "text-lime" : "text-white/80"}`}>{locale === "es" ? spanishLabels[child.label] : child.label}</Link>)}
              </div>
            </div>
          </div> : <Link onClick={closeMenu} key={item.label} href={localizedPath(locale, item.page!)!} className={mobileLinkClass(item.page!)} style={{ transitionDelay: visible ? `${70 + index * 35}ms` : "0ms" }}>{locale === "es" ? spanishLabels[item.label] : item.label}</Link>)}
        </nav>
        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5"><Link onClick={closeMenu} href={localizedPath(locale, "contact")!} className="rounded-full bg-lime px-5 py-3 text-[10px] font-bold tracking-[.1em] text-forest transition-colors hover:bg-lime">{locale === "es" ? "CONTACTO" : "CONTACT"}</Link><LocaleSwitch path={path} /></div>
      </aside>
    </div>}
  </header>;
}
