import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";

export function CertificationSection({ image }: { image: string }) {
  return <section className="relative isolate overflow-hidden bg-[#021009] text-white">
    <Image src="/images/temporary/avocado.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
    <div className="absolute inset-0 bg-[#021009]/75" />
    <div className="container relative grid items-center gap-6 py-4 sm:py-5 lg:grid-cols-[.72fr_1.28fr] lg:gap-14">
      <div className="relative mx-auto w-full max-w-[300px] lg:mx-0"><div className="relative aspect-[.75/1] overflow-hidden rounded-2xl bg-white shadow-2xl"><Image src={image} alt="SENASA authorization document" fill sizes="300px" className="object-cover" /></div></div>
      <div className="max-w-xl"><p className="eyebrow text-lime">Your trust, our commitment</p><h2 className="display mt-4 text-4xl font-bold sm:text-5xl">SENASA Authorized Facility</h2><p className="mt-5 text-sm leading-6 text-white/75">We are authorized by SENASA for the primary processing of agricultural foods of plant origin.</p><div className="mt-5 flex items-start gap-3"><Icon name="certificate" className="h-8 w-8 shrink-0 text-lime" /><div><p className="text-[10px] font-bold uppercase tracking-[.12em] text-lime">Authorization No.</p><p className="mt-1 text-xs font-bold tracking-[.08em]">001054-MIDAGRI-SENASA-LIMA CALLAO</p></div></div><Button href="/documents/senasa-authorization.pdf" tone="lime" className="mt-7">VIEW AUTHORIZATION DOCUMENT</Button></div>
    </div>
  </section>;
}
