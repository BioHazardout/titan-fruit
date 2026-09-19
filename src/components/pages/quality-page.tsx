import Image from "next/image";
import { Icon, type IconName } from "@/components/ui/icons";
import { images } from "@/data/images";

const pillars: Array<{ icon: IconName; title: string; text: string; image: string }> = [
  { icon: "certificate", title: "SENASA authorized", text: "Authorized facility for primary processing.", image: images.ccalidad1 },
  { icon: "package", title: "Traceability", text: "Traceability by lot from origin to destination.", image: images.ccalidad2 },
  { icon: "search", title: "Quality control", text: "Quality inspection throughout the process.", image: images.ccalidad3 },
  { icon: "snow", title: "Cold chain", text: "Precise temperature handling and preservation.", image: images.ccalidad4 },
];

const commitments: Array<{ icon: IconName; title: string; text: string }> = [
  { icon: "shield", title: "Food safety", text: "Safe and responsible processes." },
  { icon: "certificate", title: "Regulatory compliance", text: "Aligned with national and international standards." },
  { icon: "users", title: "Specialized team", text: "Trained, committed professionals." },
  { icon: "leaf", title: "Continuous improvement", text: "We optimize every stage to deliver better." },
];

const details: Array<{ icon: IconName; label: string; value: string }> = [
  { icon: "certificate", label: "Authorization number", value: "001054 - MIDAGRI - SENASA - LIMA CALLAO" },
  { icon: "factory", label: "Authorization", value: "Primary processing of agricultural foods of plant origin" },
  { icon: "globe", label: "Quality system", value: "Traceable controls from origin to dispatch" },
  { icon: "calendar", label: "Document", value: "Official SENASA authorization certificate" },
];

export function QualityPage() {
  return <main>
    <section className="relative isolate h-[calc(100svh-60px)] min-h-[590px] overflow-hidden bg-forest text-white lg:h-[calc(100svh-80px)] lg:min-h-0">
      <Image src={images.qualityHero} alt="Titan Fruit quality and processing" priority fill sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#021e10]/95 via-[#021e10]/78 to-[#021e10]/18" />
      <div className="container relative flex h-full items-center py-12"><div className="max-w-2xl"><Icon name="certificate" className="h-14 w-14 text-lime" /><p className="eyebrow mt-8 text-lime">Titan Fruit standards</p><h1 className="display mt-5 text-5xl font-bold uppercase sm:text-6xl lg:text-7xl">Quality &amp;<br /><span className="text-lime">certifications</span></h1><div className="mt-6 h-0.5 w-20 bg-lime" /><p className="mt-5 max-w-lg text-base leading-7 text-white/85">We ensure safe, traceable fruit of the highest quality, meeting the most demanding national and international standards.</p></div></div>
    </section>

    <section className="bg-[#f6f3ea] py-16 sm:py-24"><div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{pillars.map((pillar) => <article key={pillar.title} className="photo-hover overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-[0_10px_28px_rgba(16,61,53,.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(16,61,53,.14)]"><div className="relative aspect-[1.38] overflow-hidden"><Image src={pillar.image} alt={pillar.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" /></div><div className="p-6 text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-forest text-lime shadow-lg transition-transform duration-500 group-hover:scale-105"><Icon name={pillar.icon} className="h-7 w-7" /></span><h2 className="mt-5 text-lg font-bold uppercase tracking-[-.03em] text-leaf">{pillar.title}</h2><p className="mt-3 text-sm font-semibold leading-6 text-forest">{pillar.text}</p><div className="mx-auto mt-6 h-0.5 w-10 bg-leaf" /></div></article>)}</div></section>

    <section className="bg-[#021e10] py-10 text-white sm:py-12"><div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{commitments.map((commitment) => <article key={commitment.title} className="flex items-start gap-4 border-white/20 sm:border-l sm:pl-6 first:border-0 first:pl-0"><Icon name={commitment.icon} className="h-10 w-10 shrink-0 text-lime" /><div><h2 className="text-base font-bold uppercase leading-5">{commitment.title}</h2><p className="mt-2 text-sm leading-5 text-white/70">{commitment.text}</p></div></article>)}</div></section>

    <section className="bg-[#f6f3ea] py-16 sm:py-24">
      <div className="container grid items-start gap-10 lg:grid-cols-[.44fr_.56fr] lg:gap-16">
        <div className="max-w-md">
          <p className="eyebrow text-leaf">Official documentation</p>
          <h2 className="display mt-4 text-4xl font-bold text-forest sm:text-5xl">SENASA health authorization</h2>
          <p className="mt-5 text-base leading-7 text-ink/70">Our facility is authorized for the primary processing of agricultural foods of plant origin.</p>
        </div>
        <div className="max-w-xl">
          <div className="divide-y divide-forest/10">
            {details.map((detail) => (
              <div key={detail.label} className="flex gap-4 py-5 first:pt-0 last:pb-6">
                <Icon name={detail.icon} className="h-6 w-6 shrink-0 text-leaf" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.07em] text-forest">{detail.label}</p>
                  <p className="mt-1 text-sm leading-5 text-ink/70">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-2">
            <a href="/documents/senasa-authorization.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-lg bg-[#2d6653] px-6 py-4 text-xs font-bold uppercase tracking-[.08em] text-white transition hover:bg-forest">
              View certificate <Icon name="arrow" className="h-4 w-4 text-lime" />
            </a>
            <p className="mt-3 text-xs text-ink/60">Opens the official PDF in a new tab.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-forest text-white"><div className="grid overflow-hidden lg:grid-cols-[.40fr_.60fr]"><div className="relative min-h-[220px] lg:min-h-[240px]"><Image src={images.nosotrosSection2} alt="Titan Fruit grower in dragon fruit field" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-center" /></div><div className="flex items-center px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12"><div className="max-w-2xl"><div className="flex items-center gap-3.5 sm:gap-4"><Icon name="leaf" className="h-8 w-8 shrink-0 text-[#76bd38] sm:h-9 sm:w-9" /><h2 className="text-xl font-bold text-white sm:text-2xl">Committed to quality and the future</h2></div><p className="mt-3 text-xs leading-5 text-white/85 sm:mt-4 sm:text-sm sm:leading-6">We work every day to deliver fruit that meets the highest standards of quality and food safety, creating value for our customers, growers and the world.</p></div></div></div></section>
  </main>;
}
