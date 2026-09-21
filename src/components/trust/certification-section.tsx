import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";

export function CertificationSection({ image }: { image: string }) {
  return <section className="relative isolate overflow-hidden bg-[#021009] text-white">
    <Image src="/images/temporary/avocado.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
    <div className="absolute inset-0 bg-[#021009]/75" />
    <div className="container relative py-12 sm:py-16">
      <div className="mx-auto grid max-w-4xl items-center gap-8 sm:gap-10 lg:grid-cols-[340px_1fr] lg:gap-14">
        <div className="relative mx-auto w-full max-w-[340px]"><div className="relative aspect-[600/424] overflow-hidden rounded-2xl border border-white/15 bg-white/[0.05] p-4 shadow-2xl backdrop-blur-sm"><Image src={image} alt="SENASA Peru" fill sizes="(max-width: 1024px) 340px, 340px" className="object-contain" /></div></div>
        <div className="max-w-xl"><p className="eyebrow text-lime">Your trust, our commitment</p><h2 className="display mt-4 text-4xl font-bold sm:text-5xl">Authorized Packing Facility</h2><p className="mt-5 text-sm leading-6 text-white/75">We are authorized by SENASA for the primary processing of agricultural foods of plant origin.</p><div className="mt-5 flex items-start gap-3"><Icon name="certificate" className="h-8 w-8 shrink-0 text-lime" /><div><p className="text-[10px] font-bold uppercase tracking-[.12em] text-lime">Authorization No.</p><p className="mt-1 text-xs font-bold tracking-[.08em]">001054 - MIDAGRI - SENASA - LIMA CALLAO</p></div></div><Button href="/documents/senasa-authorization.pdf" tone="lime" className="mt-7">VIEW AUTHORIZATION DOCUMENT</Button></div>
      </div>
    </div>
  </section>;
}
