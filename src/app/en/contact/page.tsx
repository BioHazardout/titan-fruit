import type { Metadata } from "next";
import { Icon } from "@/components/ui/icons";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Titan Fruit",
  description: "Contact Titan Fruit for fresh, frozen and processed fruit solutions.",
  alternates: { canonical: "/en/contact" },
};

const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7803.211827956084!2d-76.99203810642086!3d-12.070613200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7ce4457120d%3A0xaa6d28764a6cb822!2sIndustrias%20Titan!5e0!3m2!1ses-419!2spe!4v1788471598564!5m2!1ses-419!2spe";

const contactDetails = [
  { icon: "pin" as const, label: "Location", value: "Av. Mariscal Nieto N° 320, Los Sauces – Ate, Lima, Peru" },
  { icon: "mail" as const, label: "Email", value: "ventas@titanfruitperu.com", href: "mailto:ventas@titanfruitperu.com" },
  { icon: "phone" as const, label: "Phone", value: "+51 912 509 384", href: "tel:+51912509384" },
];

export default function ContactPage() {
  return <main>
    <section className="bg-cream py-16 sm:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-leaf">Contact Titan Fruit</p>
          <h1 className="display mt-5 text-5xl font-bold text-forest sm:text-6xl">Let&apos;s start a conversation.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-ink/65">Tell us what you need and our team will help you find the right fresh, frozen or processing solution.</p>
          <div className="mx-auto mt-7 h-0.5 w-16 bg-lime" />
        </div>

        <div className="mt-12 grid overflow-hidden rounded-4xl border border-forest/10 bg-white shadow-card lg:grid-cols-[.9fr_1.1fr]">
          <div className="p-7 sm:p-10 lg:p-12">
            <p className="eyebrow text-leaf">Titan Fruit Peru</p>
            <h2 className="display mt-4 text-3xl font-bold text-forest sm:text-4xl">We are here to help.</h2>
            <p className="mt-4 text-base leading-7 text-ink/65">Leave your details and we will get back to you shortly.</p>
            <div className="mt-8 space-y-6">
              {contactDetails.map((detail) => {
                const content = <><span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-forest text-lime"><Icon name={detail.icon} className="h-6 w-6" /></span><span><span className="block text-sm font-bold uppercase tracking-[.06em] text-forest">{detail.label}</span><span className="mt-1 block text-sm leading-6 text-ink/65">{detail.value}</span></span></>;
                return detail.href ? <a key={detail.label} href={detail.href} className="flex items-start gap-4 transition-colors hover:text-leaf">{content}</a> : <div key={detail.label} className="flex items-start gap-4">{content}</div>;
              })}
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden bg-[#dfe8e1] lg:min-h-[490px]">
            <iframe title="Titan Fruit location on Google Maps" src={mapSrc} className="absolute inset-0 h-full w-full border-0" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </div>
        </div>
      </div>
    </section>

    <section id="contact-form" className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-leaf">Send us a message</p>
          <h2 className="display mt-4 text-4xl font-bold text-forest sm:text-5xl">How can we help?</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-ink/65">Share a few details about your project. A Titan Fruit specialist will reply to you soon.</p>
        </div>

        <ContactForm />
      </div>
    </section>

    <section className="bg-forest py-14 text-white sm:py-16"><div className="container flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><p className="eyebrow text-lime">Peruvian origin. Global reach.</p><h2 className="mt-3 text-2xl font-bold sm:text-3xl">Ready to grow together?</h2></div><a href="#contact-form" className="group inline-flex items-center gap-3 rounded-full bg-lime px-6 py-4 text-xs font-bold uppercase tracking-[.1em] text-forest">Get in touch <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a></div></section>
  </main>;
}
