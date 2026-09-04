import Image from "next/image";
import { ExportGlobe } from "@/components/about/export-globe";
import { images } from "@/data/images";
import { Icon, type IconName } from "@/components/ui/icons";

const highlights: Array<{ icon: IconName; value: string; label: string }> = [
  { icon: "certificate", value: "TOP 3", label: "Fresh dragon fruit exporters in Peru, 2023–2024" },
  { icon: "globe", value: "+15", label: "Countries we export to" },
  { icon: "package", value: "Own packer", label: "Technology and quality protocols" },
  { icon: "users", value: "+500", label: "Trained and supported local growers" },
];

const products = [
  { title: "Fresh dragon fruit", image: images.dragonFruit },
  { title: "IQF dragon fruit", image: images.frozen },
  { title: "IQF avocado", image: images.avocado },
  { title: "IQF blueberries", image: images.blueberries },
  { title: "IQF strawberries", image: images.strawberries },
];

const infrastructure = [
  { title: "Selection and packing line", image: images.maquila },
  { title: "Next-generation cold storage", image: images.frozen },
  { title: "Storage and dispatch", image: images.facility },
];

const benefits: Array<{ icon: IconName; title: string; text: string }> = [
  { icon: "shield", title: "Guaranteed quality", text: "Certified processes and controls at every step." },
  { icon: "package", title: "Reliable supply", text: "Consistent supply throughout the year." },
  { icon: "leaf", title: "Sustainable production", text: "Responsible practices with local growers." },
  { icon: "factory", title: "Infrastructure", text: "Modern facilities and specialized technology." },
  { icon: "globe", title: "Export expertise", text: "Knowledge of international requirements." },
  { icon: "users", title: "Personal support", text: "Solutions adapted to every customer." },
];

export function AboutPage() {
  return <main>
    <section className="relative isolate h-[calc(100svh-60px)] min-h-[560px] overflow-hidden bg-forest text-white lg:h-[calc(100svh-80px)] lg:min-h-0">
      <Image src={images.facility} alt="Titan Fruit packing and processing team" priority fill sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#021e10]/95 via-[#021e10]/76 to-[#021e10]/20" />
      <div className="container relative flex h-full items-center"><div className="max-w-2xl">
        <p className="eyebrow text-lime">About us</p>
        <h1 className="display mt-5 text-5xl font-bold uppercase sm:text-6xl lg:text-7xl">About us</h1>
        <div className="mt-6 h-0.5 w-20 bg-lime" />
        <p className="mt-5 max-w-lg text-base leading-7 text-white/85">Our experience today allows us to export more Peruvian fruits in fresh and frozen formats.</p>
      </div></div>
    </section>

    <section className="bg-[#f6f3ea] py-16 sm:py-24"><div className="container grid items-center gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
      <div className="max-w-xl"><p className="eyebrow text-leaf">Who we are</p><h2 className="display mt-4 text-4xl font-bold text-forest sm:text-5xl">We are Titan Fruit</h2><p className="mt-6 text-base leading-7 text-ink/70">A Peruvian agro-export company that pioneered dragon fruit exports—among Peru&apos;s first fresh dragon fruit exporters in 2023 and 2024—and today brings that experience to more fruits for the world: avocado, blueberry, strawberry and dragon fruit, fresh and frozen.</p><div className="mt-8 rounded-2xl border border-forest/10 bg-white/55 p-5"><p className="text-sm font-bold text-forest">From the field to your hands.</p><p className="mt-2 text-sm leading-6 text-ink/65">With our own crops and specialized packing operations, we maintain control over product quality from origin to final destination.</p></div></div>
      <div className="grid min-h-[420px] grid-cols-[1.18fr_.82fr] gap-4"><div className="photo-hover relative overflow-hidden rounded-3xl"><Image src={images.fresh} alt="Fresh Peruvian dragon fruit" fill sizes="(max-width: 1024px) 60vw, 38vw" className="object-cover" /></div><div className="grid gap-4"><div className="photo-hover relative min-h-[190px] overflow-hidden rounded-3xl"><Image src={images.facility} alt="Titan Fruit facility" fill sizes="(max-width: 1024px) 40vw, 25vw" className="object-cover" /></div><div className="photo-hover relative min-h-[190px] overflow-hidden rounded-3xl"><Image src={images.dragonFruit} alt="Fresh dragon fruit" fill sizes="(max-width: 1024px) 40vw, 25vw" className="object-cover" /></div></div></div>
    </div></section>

    <section className="bg-forest py-9 text-white sm:py-11"><div className="container grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{highlights.map((item) => <article key={item.value} className="flex items-start gap-4 border-white/20 sm:border-l sm:pl-6 first:border-0 first:pl-0"><Icon name={item.icon} className="h-9 w-9 shrink-0 text-lime" /><div><p className="text-xl font-bold uppercase tracking-[.03em] text-lime">{item.value}</p><p className="mt-1 text-xs leading-5 text-white/75">{item.label}</p></div></article>)}</div></section>

    <section className="bg-[#f6f3ea] py-16 sm:py-24"><div className="container">
      <div className="max-w-2xl"><p className="eyebrow text-leaf">What we do</p><h2 className="display mt-4 text-4xl font-bold text-forest sm:text-5xl">We grow, process and export fruit of the highest quality.</h2><div className="mt-6 flex max-w-2xl gap-3"><Icon name="globe" className="h-8 w-8 shrink-0 text-leaf" /><p className="text-sm leading-6 text-ink/70">Our experience in the field, infrastructure and quality processes allows us to offer fresh Peruvian fruit for the most demanding markets.</p></div></div>
      <div className="mt-12 grid gap-10 lg:grid-cols-2"><div><p className="eyebrow text-leaf">Our products</p><div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{products.map((product) => <article key={product.title} className="group"><div className="photo-hover relative aspect-square overflow-hidden rounded-xl"><Image src={product.image} alt={product.title} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 12vw" className="object-cover" /></div><p className="mt-2 text-[10px] font-bold uppercase leading-4 text-forest transition-colors group-hover:text-leaf">{product.title}</p></article>)}</div></div><div><p className="eyebrow text-leaf">Our infrastructure</p><div className="mt-4 grid grid-cols-3 gap-3">{infrastructure.map((item) => <article key={item.title} className="group"><div className="photo-hover relative aspect-square overflow-hidden rounded-xl"><Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 33vw, 18vw" className="object-cover" /></div><p className="mt-2 text-[10px] font-bold uppercase leading-4 text-forest transition-colors group-hover:text-leaf">{item.title}</p></article>)}</div></div></div>
    </div></section>

    <section className="bg-[#eef0e8] py-16 sm:py-24"><div className="container grid items-center gap-10 lg:grid-cols-[.72fr_1.28fr]">
      <div><p className="eyebrow text-leaf">Where we operate</p><h2 className="display mt-4 text-4xl font-bold text-forest sm:text-5xl">We bring the best of Peru to the world.</h2><p className="mt-5 max-w-md text-sm leading-6 text-ink/70">We export to demanding markets in the USA and Europe, as well as North America, Asia, the Middle East and Latin America, always meeting international standards.</p><ul className="mt-7 grid gap-3 text-sm font-semibold text-forest sm:grid-cols-2 lg:grid-cols-1">{["Europe", "United States", "North America", "Asia", "Middle East", "Latin America"].map((market) => <li key={market} className="flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full border border-leaf text-[11px] text-leaf">✓</span>{market}</li>)}</ul></div>
      <ExportGlobe />
    </div></section>

    <section className="bg-white py-16 sm:py-24"><div className="container"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow text-leaf">Why work with Titan Fruit?</p><h2 className="display mt-4 text-4xl font-bold text-forest sm:text-5xl">A trusted partner for your business.</h2></div><div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-6">{benefits.map((benefit) => <article key={benefit.title} className="text-center"><Icon name={benefit.icon} className="mx-auto h-9 w-9 text-leaf" /><h3 className="mt-4 text-xs font-bold uppercase tracking-[.06em] text-forest">{benefit.title}</h3><p className="mt-2 text-xs leading-5 text-ink/65">{benefit.text}</p></article>)}</div></div></section>

    <section className="bg-[#021e10] text-white"><div className="grid lg:grid-cols-[.34fr_.66fr]"><div className="relative min-h-[300px] overflow-hidden lg:min-h-[360px]"><Image src="/images/company/about-overview.jpg" alt="Titan Fruit grower in the field" fill sizes="(max-width: 1024px) 100vw, 34vw" className="origin-bottom-left scale-[2.8] object-cover object-left-bottom" /></div><div className="flex items-center px-7 py-14 sm:px-12 sm:py-16 lg:px-[max(4rem,calc((100vw-76rem)/2))] lg:py-20"><div className="max-w-2xl"><p className="eyebrow text-lime">Sustainability</p><h2 className="display mt-4 text-4xl font-bold sm:text-5xl">Strong roots, a bright future.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-white/80">We promote the development of responsible local growers by strengthening long-term partnerships, continuous training and support so that every fruit reaches the world with the highest quality.</p><p className="mt-5 flex items-center gap-2 text-sm text-lime"><Icon name="leaf" className="h-5 w-5" />We believe in a healthier future through better food.</p></div></div></div></section>
  </main>;
}
