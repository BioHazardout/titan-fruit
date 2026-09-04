"use client";

import { type FormEvent } from "react";
import { Icon } from "@/components/ui/icons";

const recipient = "ventas@titanfruitperu.com";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const isSpanish = document.documentElement.lang === "es";
    const fields = isSpanish
      ? [["Nombre", form.get("name")], ["Empresa", form.get("company")], ["Correo electrónico", form.get("email")], ["Teléfono", form.get("phone")], ["Mensaje", form.get("message")]]
      : [["Name", form.get("name")], ["Company", form.get("company")], ["Email", form.get("email")], ["Phone", form.get("phone")], ["Message", form.get("message")]];
    const subject = isSpanish ? "Nueva consulta desde titan-fruit.vercel.app" : "New inquiry from titan-fruit.vercel.app";
    const body = fields.map(([label, value]) => `${label}: ${String(value || "-")}`).join("\n");
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-3xl rounded-3xl border border-forest/10 bg-cream p-6 shadow-card sm:p-10">
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-semibold text-forest">Name<input required name="name" type="text" autoComplete="name" placeholder="Your name" className="mt-2 w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-leaf focus:ring-2 focus:ring-lime/50" /></label>
      <label className="text-sm font-semibold text-forest">Company<input name="company" type="text" autoComplete="organization" placeholder="Your company" className="mt-2 w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-leaf focus:ring-2 focus:ring-lime/50" /></label>
      <label className="text-sm font-semibold text-forest">Email<input required name="email" type="email" autoComplete="email" placeholder="you@company.com" className="mt-2 w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-leaf focus:ring-2 focus:ring-lime/50" /></label>
      <label className="text-sm font-semibold text-forest">Phone<input name="phone" type="tel" autoComplete="tel" placeholder="+51 000 000 000" className="mt-2 w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-leaf focus:ring-2 focus:ring-lime/50" /></label>
    </div>
    <label className="mt-5 block text-sm font-semibold text-forest">Message<textarea required name="message" rows={6} placeholder="Tell us about your requirements..." className="mt-2 w-full resize-y rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-leaf focus:ring-2 focus:ring-lime/50" /></label>
    <button type="submit" className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-lime px-6 py-4 text-xs font-bold uppercase tracking-[.1em] text-forest transition-colors hover:bg-forest hover:text-white">Send message <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></button>
    <p className="mt-4 text-center text-xs text-ink/55">Your message will be addressed to ventas@titanfruitperu.com.</p>
  </form>;
}
