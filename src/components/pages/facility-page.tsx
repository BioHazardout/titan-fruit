import Image from "next/image";
import { Icon, type IconName } from "@/components/ui/icons";
import { images } from "@/data/images";

const areas: { number: string; title: string; text: string; image: string }[] = [
  { number: "01", title: "Exterior", text: "Modern and secure facilities.", image: images.europe },
  { number: "02", title: "Reception", text: "Fruit reception and verification.", image: images.facility },
  { number: "03", title: "Selection", text: "Manual selection to ensure quality.", image: images.fresh },
  { number: "04", title: "Processing", text: "Efficient processes with the right equipment.", image: images.maquila },
  { number: "05", title: "Packing", text: "Careful packing to protect the fruit.", image: images.fresh },
  { number: "06", title: "Cold Storage", text: "Optimal preservation in controlled environments.", image: images.frozen },
  { number: "07", title: "Quality Control", text: "Analysis and controls at every stage of the process.", image: images.avocado },
  { number: "08", title: "Dispatch", text: "Preparation and dispatch for export.", image: images.usa },
];

const flow: { icon: IconName; title: string; image: string }[] = [
  { icon: "leaf", title: "Farm / Suppliers", image: images.fresh },
  { icon: "truck", title: "Reception", image: images.facility },
  { icon: "search", title: "Quality Control", image: images.avocado },
  { icon: "factory", title: "Primary Processing", image: images.maquila },
  { icon: "package", title: "Packing", image: images.fresh },
  { icon: "snow", title: "Cold Storage", image: images.frozen },
  { icon: "globe", title: "International Logistics", image: images.usa },
  { icon: "user", title: "Customer", image: images.europe },
];

const stats: { icon: IconName; value: string; text: string }[] = [
  { icon: "factory", value: "+2,000 m²", text: "Built-up area" },
  { icon: "certificate", value: "SENASA", text: "Authorized for primary processing" },
  { icon: "shield", value: "Quality", text: "Food quality and safety standards" },
  { icon: "users", value: "Our team", text: "Skilled professionals committed to quality" },
];

export function FacilityPage() {
  return <main>
    <section className="relative isolate h-[calc(100svh-60px)] min-h-[590px] overflow-hidden bg-forest text-white lg:min-h-0">
      <Image src={images.facility} priority fill sizes="100vw" alt="Titan Fruit facility operations" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#021e10]/95 via-[#021e10]/78 to-[#021e10]/20" />
      <div className="container relative flex h-full items-center py-12 sm:py-16"><div className="max-w-2xl">
        <p className="eyebrow text-lime">Our facilities</p>
        <h1 className="display mt-5 max-w-xl text-5xl font-bold uppercase sm:text-6xl lg:text-7xl">Infrastructure<br />that delivers<br /><span className="text-lime">quality</span></h1>
        <div className="mt-6 h-0.5 w-20 bg-lime" />
        <p className="mt-5 max-w-lg text-base leading-7 text-white/80">Our own packing and primary processing facility is designed to ensure efficiency, food safety and the highest quality standards in every step of the process.</p>
        <div className="mt-8 grid max-w-2xl gap-4 border-t border-white/20 pt-5 sm:grid-cols-3 sm:gap-7"><FacilityIndicator icon="factory" title="Own facility" /><FacilityIndicator icon="certificate" title="SENASA authorized" /><FacilityIndicator icon="shield" title="Quality control" /></div>
      </div></div>
    </section>

    <section className="bg-[#f6f3ea] py-16 sm:py-20"><div className="container"><div className="mx-auto max-w-2xl text-center"><h2 className="display text-4xl font-bold uppercase text-forest sm:text-5xl">Our facilities</h2><div className="mx-auto mt-5 h-0.5 w-10 bg-lime" /><p className="mx-auto mt-5 max-w-xl text-base leading-7 text-ink/65">Each area of our plant is designed to ensure the safety, traceability and quality of the fruit that reaches the world.</p></div><div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{areas.map((area) => <article key={area.number} className="photo-hover overflow-hidden rounded-2xl border border-forest/10 bg-[#fbfaf6] shadow-[0_8px_24px_rgba(16,61,53,.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(16,61,53,.13)]"><div className="relative aspect-[1.45] overflow-hidden"><Image src={area.image} alt={area.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" /></div><div className="flex gap-3 p-4"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#76bd38] text-xs font-bold text-white">{area.number}</span><div><h3 className="text-sm font-bold uppercase tracking-[.04em] text-forest">{area.title}</h3><p className="mt-1 text-xs leading-5 text-ink/65">{area.text}</p></div></div></article>)}</div></div></section>

    <section className="bg-white py-16 sm:py-20"><div className="container"><div className="mx-auto max-w-2xl text-center"><h2 className="display text-4xl font-bold uppercase text-forest sm:text-5xl">From origin to export</h2><div className="mx-auto mt-5 h-0.5 w-10 bg-lime" /><p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink/65">An integrated and controlled process that guarantees safe, high-quality fruit, ready for the most demanding markets.</p></div><div className="mt-10 overflow-x-auto pb-3 pt-3 scrollbar-none"><div className="grid min-w-[920px] grid-cols-8 gap-2 lg:min-w-[980px] lg:gap-0">{flow.map((step, index) => <div key={step.title} className="group relative text-center"><div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-leaf/45 bg-white text-leaf transition-all duration-300 group-hover:scale-105 group-hover:border-leaf group-hover:bg-leaf group-hover:text-lime group-hover:shadow-[0_8px_18px_rgba(45,102,83,.2)]"><Icon name={step.icon} className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" /></div><p className="mx-auto mt-3 min-h-8 max-w-[105px] text-[10px] font-bold uppercase leading-4 tracking-[.04em] text-forest lg:max-w-[125px]">{index + 1}. {step.title}</p><div className="photo-hover relative mx-auto mt-2 aspect-[1.35] w-[105px] overflow-hidden rounded-lg lg:w-[125px]"><Image src={step.image} alt={step.title} fill sizes="(min-width: 1024px) 125px, 105px" className="object-cover" /></div>{index < flow.length - 1 && <span className="absolute left-[calc(50%+32px)] top-6 w-[calc(100%-64px)] border-t border-dashed border-leaf/60" aria-hidden="true" />}</div>)}</div></div></div></section>

    <section className="bg-forest py-10 text-white sm:py-12"><div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{stats.map((stat) => <article key={stat.value} className="flex items-center gap-4 border-white/20 sm:border-l sm:pl-6 first:border-0 first:pl-0"><Icon name={stat.icon} className="h-10 w-10 shrink-0 text-lime" /><div><p className="text-xl font-bold uppercase tracking-[.03em] text-lime">{stat.value}</p><p className="mt-1 text-xs leading-5 text-white/75">{stat.text}</p></div></article>)}</div></section>
  </main>;
}

function FacilityIndicator({ icon, title }: { icon: IconName; title: string }) { return <div className="flex items-center gap-3"><Icon name={icon} className="h-7 w-7 shrink-0 text-lime" /><p className="text-xs font-bold uppercase tracking-[.08em]">{title}</p></div>; }
