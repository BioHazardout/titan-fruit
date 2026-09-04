import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon, type IconName } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { images } from "@/data/images";

const frozenProducts = [
  { name: "IQF Frozen Avocado", slug: "hass-avocado", image: images.avocado, description: "Creamy texture and natural flavor, perfect for guacamole, dips, smoothies and foodservice.", applications: ["Guacamole & dips", "Smoothies", "Foodservice", "Food manufacturing"] },
  { name: "IQF Frozen Dragon Fruit (American Beauty)", slug: "dragon-fruit", image: images.fresh, description: "Vibrant color and exotic flavor, ideal for smoothies, beverages, desserts and more.", applications: ["Smoothies & juices", "Beverages", "Desserts", "Bakery"] },
  { name: "IQF Frozen Blueberries", slug: "blueberries", image: images.blueberries, description: "Bursting with flavor and antioxidants, perfect for a wide range of food applications.", applications: ["Bakery", "Smoothies", "Yogurt & dairy", "Food manufacturing"] },
  { name: "IQF Frozen Strawberries", slug: "strawberries", image: images.strawberries, description: "Sweet, juicy and convenient. Perfect for desserts, smoothies, bakery and more.", applications: ["Bakery", "Smoothies", "Desserts", "Ice cream & dairy"] },
] as const;

const reasons: { icon: IconName; title: string; text: string }[] = [
  { icon: "snow", title: "IQF Technology", text: "Individually quick frozen to preserve natural quality, color, flavor and nutrients." },
  { icon: "shield", title: "Premium Quality", text: "Strict quality control from raw fruit selection to final packaging." },
  { icon: "factory", title: "Food Safety", text: "SENASA-authorized facility with international food safety standards." },
  { icon: "package", title: "Flexible Packaging", text: "Custom packing options to meet your market and brand needs." },
  { icon: "globe", title: "Global Supply", text: "Reliable supply for the USA, Europe and other international markets." },
];

const benefits: { icon: IconName; title: string; text: string }[] = [
  { icon: "certificate", title: "SENASA Authorized", text: "Primary processing of agricultural products of plant origin." },
  { icon: "shield", title: "Traceability", text: "From origin to final destination." },
  { icon: "leaf", title: "Sustainability", text: "Committed to responsible agriculture and the environment." },
  { icon: "globe", title: "Experience", text: "Years of experience in fruit processing and export." },
];

export function IqfPage() {
  return <main>
    <section className="relative isolate h-[calc(100svh-60px)] min-h-[590px] overflow-hidden bg-[#071529] text-white lg:min-h-0">
      <Image src={images.fresh} priority fill sizes="100vw" alt="Dragon fruit prepared for IQF freezing" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071529]/95 via-[#071529]/78 to-[#071529]/20" />
      <div className="container relative flex h-full items-center py-10 sm:py-16"><div className="max-w-2xl">
        <p className="eyebrow text-[#69a8ff]">IQF frozen fruit solutions</p>
        <h1 className="display mt-5 text-5xl font-bold uppercase sm:text-6xl lg:text-7xl">IQF Frozen Fruit <span className="text-[#4d92ed]">from Peru</span></h1>
        <div className="mt-6 flex max-w-lg items-start gap-3 border-l-2 border-[#4d92ed] pl-4 text-base leading-7 text-white/85"><Icon name="snow" className="mt-1 h-5 w-5 shrink-0 text-[#69a8ff]" /><span>Individually quick frozen to lock in freshness, flavor, color and nutrients.</span></div>
        <p className="mt-6 max-w-lg text-sm leading-6 text-white/80">We are a leading IQF frozen fruit exporter and supplier from Peru, providing high-quality fruit solutions for the food industry, retail and foodservice in the USA, Europe and beyond.</p>
        <div className="mt-7"><Button href="#iqf-products" className="bg-[#4d92ed] text-white hover:bg-white hover:text-[#071529]">VIEW PRODUCTS</Button></div>
        <div className="mt-8 grid max-w-3xl gap-4 border-t border-white/20 pt-4 sm:grid-cols-4 sm:gap-5"><div className="flex items-center gap-2"><Icon name="snow" className="h-6 w-6 shrink-0 text-[#69a8ff]" /><div><p className="text-[9px] font-bold uppercase tracking-[.08em]">IQF technology</p><p className="mt-1 text-[10px] text-white/70">Individually quick frozen</p></div></div><div className="flex items-center gap-2"><Icon name="shield" className="h-6 w-6 shrink-0 text-[#69a8ff]" /><div><p className="text-[9px] font-bold uppercase tracking-[.08em]">Premium quality</p><p className="mt-1 text-[10px] text-white/70">Strict quality control</p></div></div><div className="flex items-center gap-2"><Icon name="package" className="h-6 w-6 shrink-0 text-[#69a8ff]" /><div><p className="text-[9px] font-bold uppercase tracking-[.08em]">Reliable supply</p><p className="mt-1 text-[10px] text-white/70">Year-round availability</p></div></div><div className="flex items-center gap-2"><Icon name="leaf" className="h-6 w-6 shrink-0 text-[#69a8ff]" /><div><p className="text-[9px] font-bold uppercase tracking-[.08em]">Food safety</p><p className="mt-1 text-[10px] text-white/70">SENASA-authorized facility</p></div></div></div>
      </div></div>
    </section>

    <section id="iqf-products" className="bg-white py-16 sm:py-20"><div className="container"><SectionHeading eyebrow="Our IQF frozen fruits" title="Premium Peruvian fruits, IQF to perfection." intro="Consistent quality, reliable supply and versatile formats for your business." /><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{frozenProducts.map((product) => <article key={product.name} className="photo-hover overflow-hidden rounded-2xl border border-[#1c4d8a]/15 bg-white shadow-[0_12px_30px_rgba(7,21,41,.08)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(7,21,41,.14)]"><div className="relative aspect-[1.45] overflow-hidden"><Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" /><span className="absolute left-3 top-3 rounded-full bg-[#2f78d6] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.08em] text-white">IQF</span></div><div className="p-4"><h3 className="min-h-12 text-lg font-bold uppercase leading-5 tracking-[-.03em] text-[#10233e]">{product.name}</h3><p className="mt-3 min-h-20 text-xs leading-5 text-ink/70">{product.description}</p><p className="mt-3 text-[10px] font-bold uppercase tracking-[.1em] text-[#2f78d6]">Applications</p><ul className="mt-2 space-y-1 text-[11px] text-ink/75">{product.applications.map((application) => <li key={application}>• {application}</li>)}</ul><Link href={`/en/fresh-fruit/${product.slug}`} className="mt-4 inline-flex items-center gap-2 rounded border border-[#2f78d6] px-4 py-2 text-[10px] font-bold uppercase tracking-[.08em] text-[#2f78d6] transition hover:bg-[#2f78d6] hover:text-white">View details <Icon name="arrow" className="h-4 w-4" /></Link></div></article>)}</div></div></section>

    <section className="bg-[#f2f6fd] py-14 sm:py-20"><div className="container"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow text-[#2f78d6]">Why choose Titan Fruit IQF?</p><h2 className="display mt-3 text-3xl font-bold uppercase text-[#10233e] sm:text-4xl">Built for quality and consistency.</h2></div><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">{reasons.map((reason) => <article key={reason.title} className="text-center"><Icon name={reason.icon} className="mx-auto h-10 w-10 text-[#2f78d6]" /><h3 className="mt-4 text-xs font-bold uppercase tracking-[.08em] text-[#10233e]">{reason.title}</h3><p className="mx-auto mt-2 max-w-[190px] text-xs leading-5 text-ink/65">{reason.text}</p></article>)}</div></div></section>

    <section className="bg-white py-16 sm:py-20"><div className="container"><SectionHeading eyebrow="Where we serve" title="Supplying high-quality IQF frozen fruit to the global food industry." /><div className="mt-9 grid gap-5 md:grid-cols-2"><MarketCard title="USA" text="Trusted IQF frozen fruit exporter to the USA, serving food manufacturers, distributors, foodservice and retail." image={images.usa} /><MarketCard title="Europe" text="Reliable IQF frozen fruit supplier for Europe, meeting the highest quality and food safety requirements." image={images.europe} /></div></div></section>

    <section className="bg-[#071529] py-10 text-white sm:py-12"><div className="container flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between"><div><p className="eyebrow text-[#4d92ed]">Looking for a specific product</p><h2 className="display mt-2 text-3xl font-bold uppercase sm:text-4xl">Or custom solution?</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/75">We offer a wide range of IQF frozen fruits and custom formats to fit your business needs.</p></div><div className="flex flex-wrap gap-3"><Button href="/en/contact" className="bg-[#4d92ed] text-[#071529] hover:bg-white hover:text-[#071529]">REQUEST IQF QUOTE</Button><Link href="/en/contact" className="inline-flex items-center gap-3 rounded border border-white/60 px-5 py-3 text-xs font-bold uppercase tracking-[.08em] text-white transition hover:bg-white hover:text-[#071529]">Download brochure</Link></div></div></section>

    <section className="bg-white py-10 sm:py-12"><div className="container grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{benefits.map((benefit) => <article key={benefit.title} className="flex gap-3"><Icon name={benefit.icon} className="h-8 w-8 shrink-0 text-[#2f78d6]" /><div><h3 className="text-xs font-bold uppercase tracking-[.1em] text-[#10233e]">{benefit.title}</h3><p className="mt-2 text-sm leading-5 text-ink/65">{benefit.text}</p></div></article>)}</div></section>
  </main>;
}

function MarketCard({ title, text, image }: { title: string; text: string; image: string }) { return <article className="relative min-h-[170px] overflow-hidden rounded-2xl border border-[#2f78d6]/10 bg-[#f5f8fd]"><Image src={image} alt={`${title} market`} fill sizes="50vw" className="object-cover object-right opacity-35" /><div className="absolute inset-0 bg-gradient-to-r from-[#f5f8fd] via-[#f5f8fd]/90 to-transparent" /><div className="relative max-w-md p-7 sm:p-8"><div className="flex items-center gap-3"><Icon name="globe" className="h-8 w-8 text-[#2f78d6]" /><h3 className="text-3xl font-bold uppercase text-[#10233e]">{title}</h3></div><p className="mt-3 max-w-xs text-xs leading-5 text-ink/75">{text}</p></div></article>; }
