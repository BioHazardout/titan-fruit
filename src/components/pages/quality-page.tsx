import Image from "next/image";
import { Icon, type IconName } from "@/components/ui/icons";
import { images } from "@/data/images";

const pillars: Array<{ icon: IconName; title: string; text: string; image: string }> = [
  { icon: "certificate", title: "SENASA authorized", text: "Authorized facility for primary processing.", image: images.europe },
  { icon: "package", title: "Traceability", text: "Traceability by lot from origin to destination.", image: images.fresh },
  { icon: "search", title: "Quality control", text: "Quality inspection throughout the process.", image: images.dragonFruit },
  { icon: "snow", title: "Cold chain", text: "Precise temperature handling and preservation.", image: images.frozen },
];

const commitments: Array<{ icon: IconName; title: string; text: string }> = [
  { icon: "shield", title: "Food safety", text: "Safe and responsible processes." },
  { icon: "certificate", title: "Regulatory compliance", text: "Aligned with national and international standards." },
  { icon: "users", title: "Specialized team", text: "Trained, committed professionals." },
  { icon: "leaf", title: "Continuous improvement", text: "We optimize every stage to deliver better." },
];

const details: Array<{ icon: IconName; label: string; value: string }> = [
  { icon: "certificate", label: "Authorization number", value: "001054-MIDAGRI-SENASA-LIMA CALLAO" },
  { icon: "factory", label: "Authorization", value: "Primary processing of agricultural foods of plant origin" },
  { icon: "globe", label: "Quality system", value: "Traceable controls from origin to dispatch" },
  { icon: "calendar", label: "Document", value: "Official SENASA authorization certificate" },
];

export function QualityPage() {
  return <main>
    <section className="relative isolate h-[calc(100svh-60px)] min-h-[590px] overflow-hidden bg-forest text-white lg:h-[calc(100svh-80px)] lg:min-h-0">
      <Image src={images.fresh} alt="Titan Fruit quality and processing" priority fill sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#021e10]/95 via-[#021e10]/78 to-[#021e10]/18" />
      <div className="container relative flex h-full items-center py-12"><div className="max-w-2xl"><Icon name="certificate" className="h-14 w-14 text-lime" /><p className="eyebrow mt-8 text-lime">Titan Fruit standards</p><h1 className="display mt-5 text-5xl font-bold uppercase sm:text-6xl lg:text-7xl">Quality &amp;<br /><span className="text-lime">certifications</span></h1><div className="mt-6 h-0.5 w-20 bg-lime" /><p className="mt-5 max-w-lg text-base leading-7 text-white/85">We ensure safe, traceable fruit of the highest quality, meeting the most demanding national and international standards.</p></div></div>
    </section>

    <section className="bg-[#f6f3ea] py-16 sm:py-24"><div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{pillars.map((pillar) => <article key={pillar.title} className="photo-hover overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-[0_10px_28px_rgba(16,61,53,.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(16,61,53,.14)]"><div className="relative aspect-[1.38] overflow-hidden"><Image src={pillar.image} alt={pillar.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" /></div><div className="p-6 text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-forest text-lime shadow-lg transition-transform duration-500 group-hover:scale-105"><Icon name={pillar.icon} className="h-7 w-7" /></span><h2 className="mt-5 text-lg font-bold uppercase tracking-[-.03em] text-leaf">{pillar.title}</h2><p className="mt-3 text-sm font-semibold leading-6 text-forest">{pillar.text}</p><div className="mx-auto mt-6 h-0.5 w-10 bg-leaf" /></div></article>)}</div></section>

    <section className="bg-[#021e10] py-10 text-white sm:py-12"><div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{commitments.map((commitment) => <article key={commitment.title} className="flex items-start gap-4 border-white/20 sm:border-l sm:pl-6 first:border-0 first:pl-0"><Icon name={commitment.icon} className="h-10 w-10 shrink-0 text-lime" /><div><h2 className="text-base font-bold uppercase leading-5">{commitment.title}</h2><p className="mt-2 text-sm leading-5 text-white/70">{commitment.text}</p></div></article>)}</div></section>

    <section className="bg-[#f6f3ea] py-16 sm:py-24"><div className="container grid items-start gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-14"><div><p className="eyebrow text-leaf">Official documentation</p><h2 className="display mt-4 text-4xl font-bold text-forest sm:text-5xl">SENASA health authorization</h2><p className="mt-5 max-w-xl text-base leading-7 text-ink/70">Our facility is authorized for the primary processing of agricultural foods of plant origin.</p><div className="mt-8 space-y-4">{details.map((detail) => <div key={detail.label} className="flex gap-3 border-b border-forest/10 pb-4"><Icon name={detail.icon} className="h-6 w-6 shrink-0 text-leaf" /><div><p className="text-xs font-bold uppercase tracking-[.07em] text-forest">{detail.label}</p><p className="mt-1 text-sm leading-5 text-ink/70">{detail.value}</p></div></div>)}</div><a href="/documents/senasa-authorization.pdf" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#2d6653] px-6 py-4 text-xs font-bold uppercase tracking-[.08em] text-white transition hover:bg-forest">View certificate <Icon name="arrow" className="h-4 w-4 text-lime" /></a><p className="mt-3 text-xs text-ink/60">Opens the official PDF in a new tab.</p></div><div className="overflow-hidden rounded-2xl border border-forest/15 bg-white shadow-[0_14px_32px_rgba(16,61,53,.1)]"><object data="/documents/senasa-authorization.pdf#view=FitH" type="application/pdf" className="h-[610px] w-full" aria-label="SENASA authorization document"><a href="/documents/senasa-authorization.pdf" target="_blank" rel="noreferrer" className="block p-8 text-leaf underline">View the SENASA authorization document.</a></object></div></div></section>

    <section className="bg-[#021009] text-white"><div className="grid overflow-hidden lg:grid-cols-[.34fr_.66fr]"><div className="relative min-h-[300px] lg:min-h-[360px]"><Image src="/images/company/about-overview.jpg" alt="Titan Fruit farmer and crop" fill sizes="(max-width: 1024px) 100vw, 34vw" className="origin-bottom-left scale-[2.8] object-cover object-left-bottom" /></div><div className="flex items-center px-7 py-14 sm:px-12 sm:py-16 lg:px-[max(4rem,calc((100vw-76rem)/2))] lg:py-20"><div className="max-w-2xl"><p className="eyebrow text-lime">Our promise</p><h2 className="display mt-4 text-4xl font-bold sm:text-5xl">Committed to quality and the future.</h2><p className="mt-5 text-base leading-7 text-white/80">Every day, we work to deliver fruit that meets the highest standards of quality and food safety, creating value for our customers, growers and the world.</p><p className="mt-5 flex items-center gap-2 text-sm font-semibold text-lime"><Icon name="leaf" className="h-5 w-5" />Quality that starts at origin.</p></div></div></div></section>
  </main>;
}
