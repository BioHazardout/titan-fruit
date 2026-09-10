"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, type IconName } from "@/components/ui/icons";
import { images } from "@/data/images";

type Props = {
  locale?: "en" | "es";
};

const maquilaContent = {
  es: {
    hero: {
      eyebrow: "SERVICIO",
      title: "MAQUILA",
      description: "Infraestructura y experiencia para potenciar tus exportaciones.",
      indicators: [
        { icon: "building" as IconName, title: "Planta propia certificada" },
        { icon: "expand" as IconName, title: "Capacidad flexible" },
        { icon: "shield" as IconName, title: "Calidad y trazabilidad" },
      ],
    },
    solutions: {
      title: "Soluciones de maquila adaptadas a ti",
      description:
        "Ponemos a tu disposición nuestra planta de packing con certificación SENASA, infraestructura moderna y un equipo experto para asegurar procesos eficientes, seguros y de calidad.",
      photos: [
        { src: images.maquilaSolution1, alt: "Línea de selección de fruta en planta de maquila" },
        { src: images.maquilaSolution2, alt: "Instalaciones y almacenamiento en planta de maquila" },
        { src: images.maquilaSolution3, alt: "Cinta de transporte y calibración de pitahaya" },
        { src: images.maquilaSolution4, alt: "Equipo de empaque y acondicionamiento para exportación" },
      ],
    },
    profiles: {
      eyebrow: "¿PARA QUIÉN ES NUESTRO SERVICIO?",
      title: "Tres perfiles, una solución flexible",
      cards: [
        {
          number: "01",
          badgeIcon: "user" as IconName,
          title: "Emprendedores agroexportadores",
          description: "Volúmenes flexibles para hacer realidad tus proyectos.",
          bullets: [
            "Asesoría técnica y acompañamiento continuo.",
            "Lotes mínimos adaptados a tu etapa de crecimiento.",
            "Cumplimiento riguroso de protocolos de exportación.",
          ],
          image: images.maquilaCard1,
          cta: "MÁS INFORMACIÓN",
          href: "/es/contacto",
        },
        {
          number: "02",
          badgeIcon: "truck" as IconName,
          title: "Comerciantes de frutas",
          description: "Procesos confiables y eficientes para tu negocio.",
          bullets: [
            "Trazabilidad completa por lote desde la recepción.",
            "Optimización de tiempos para entregas puntuales.",
            "Control estricto de calidad, calibre y madurez.",
          ],
          image: images.maquilaCard2,
          cta: "MÁS INFORMACIÓN",
          href: "/es/contacto",
        },
        {
          number: "03",
          badgeIcon: "chart" as IconName,
          title: "Agroexportadores con packing propio",
          description: "Espacio adicional para escalar tus exportaciones.",
          bullets: [
            "Capacidad operativa adicional en picos de campaña.",
            "Certificación SENASA y respaldo técnico especializado.",
            "Flexibilidad en líneas de empaque y diversos formatos.",
          ],
          image: images.maquilaCard3,
          cta: "MÁS INFORMACIÓN",
          href: "/es/contacto",
        },
      ],
    },
    trustBanner: {
      title: "Respaldo que genera confianza",
      items: [
        { icon: "building" as IconName, label: "Planta propia", sublabel: "+ 2,000 m²" },
        { icon: "certificate" as IconName, label: "Autorización", sublabel: "SENASA" },
        { icon: "shield" as IconName, label: "Estándares", sublabel: "de calidad" },
        { icon: "users" as IconName, label: "Equipo técnico", sublabel: "especializado" },
      ],
    },
  },
  en: {
    hero: {
      eyebrow: "SERVICE",
      title: "MAQUILA SERVICES",
      description: "Infrastructure and experience to boost your exports.",
      indicators: [
        { icon: "building" as IconName, title: "Certified own plant" },
        { icon: "expand" as IconName, title: "Flexible capacity" },
        { icon: "shield" as IconName, title: "Quality and traceability" },
      ],
    },
    solutions: {
      title: "Maquila solutions tailored to you",
      description:
        "We offer you our SENASA-certified packing plant, modern infrastructure, and an expert team to ensure efficient, safe, and quality processes.",
      photos: [
        { src: images.maquilaSolution1, alt: "Fruit selection conveyor at packing facility" },
        { src: images.maquilaSolution2, alt: "Warehouse and staging facility operations" },
        { src: images.maquilaSolution3, alt: "Dragon fruit conveyor and sorting line" },
        { src: images.maquilaSolution4, alt: "Professional packing and preparation team" },
      ],
    },
    profiles: {
      eyebrow: "WHO IS OUR SERVICE FOR?",
      title: "Three profiles, one flexible solution",
      cards: [
        {
          number: "01",
          badgeIcon: "user" as IconName,
          title: "Agro-export entrepreneurs",
          description: "Flexible volumes to turn your projects into reality.",
          bullets: [
            "Technical advice and continuous operational guidance.",
            "Minimum batches tailored to your growth stage.",
            "Strict compliance with export standards and protocols.",
          ],
          image: images.maquilaCard1,
          cta: "MORE INFORMATION",
          href: "/en/contact",
        },
        {
          number: "02",
          badgeIcon: "truck" as IconName,
          title: "Fruit merchants",
          description: "Reliable and efficient processes for your business.",
          bullets: [
            "Full batch traceability from initial fruit reception.",
            "Time optimization for timely market deliveries.",
            "Strict control of quality, sizing, and ripeness.",
          ],
          image: images.maquilaCard2,
          cta: "MORE INFORMATION",
          href: "/en/contact",
        },
        {
          number: "03",
          badgeIcon: "chart" as IconName,
          title: "Agro-exporters with own packing",
          description: "Additional capacity to scale your exports.",
          bullets: [
            "Supplemental operational capacity during campaign peaks.",
            "SENASA authorization and specialized technical backing.",
            "Flexibility across diverse packaging lines and formats.",
          ],
          image: images.maquilaCard3,
          cta: "MORE INFORMATION",
          href: "/en/contact",
        },
      ],
    },
    trustBanner: {
      title: "Support that builds trust",
      items: [
        { icon: "building" as IconName, label: "Own plant", sublabel: "+ 2,000 m²" },
        { icon: "certificate" as IconName, label: "Authorization", sublabel: "SENASA" },
        { icon: "shield" as IconName, label: "Quality", sublabel: "standards" },
        { icon: "users" as IconName, label: "Technical team", sublabel: "specialized" },
      ],
    },
  },
};

export function MaquilaPage({ locale: propLocale }: Props) {
  const pathname = usePathname();
  const currentLocale: "en" | "es" = propLocale ?? (pathname?.startsWith("/es") ? "es" : "en");
  const data = maquilaContent[currentLocale];

  return (
    <main>
      {/* 1. HERO SECTION - full height & width with subtle entrance animation */}
      <section className="relative isolate h-[calc(100svh-60px)] min-h-[560px] overflow-hidden bg-forest text-white lg:h-[calc(100svh-80px)] lg:min-h-0">
        <Image
          src={images.maquilaHero}
          alt="Titan Fruit packing facility"
          priority
          fill
          sizes="100vw"
          className="object-cover object-right lg:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021e10]/95 via-[#021e10]/80 via-45% to-[#021e10]/20" />
        <div className="container relative flex h-full items-center py-12 sm:py-16">
          <div className="max-w-2xl reveal">
            <p className="eyebrow text-lime">{data.hero.eyebrow}</p>
            <h1 className="display mt-4 text-5xl font-bold uppercase sm:text-6xl lg:text-7xl">
              {data.hero.title}
            </h1>
            <div className="mt-5 h-0.5 w-16 bg-lime" />
            <p className="mt-5 max-w-lg text-base leading-7 text-white/85 sm:text-lg">
              {data.hero.description}
            </p>

            <div className="mt-8 grid max-w-xl grid-cols-1 gap-4 border-t border-white/20 pt-6 sm:grid-cols-3 sm:gap-6">
              {data.hero.indicators.map((ind, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Icon name={ind.icon} className="h-6 w-6 shrink-0 text-lime" />
                  <p className="text-xs font-semibold leading-snug tracking-wide text-white/90 uppercase">
                    {ind.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 1: Soluciones de maquila adaptadas a ti (2 columns: Text + 2x2 Photo Grid) */}
      <section className="bg-[#faf6ee] py-16 sm:py-24">
        <div className="container grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-16">
          {/* Left Column: Heading + Accent Line + Description */}
          <div className="max-w-xl">
            <h2 className="display text-3xl font-bold text-forest sm:text-4xl lg:text-5xl leading-[1.12]">
              {data.solutions.title}
            </h2>
            <div className="mt-5 h-1 w-14 rounded-full bg-[#76bd38]" />
            <p className="mt-6 text-base leading-relaxed text-ink/75 sm:text-lg">
              {data.solutions.description}
            </p>
          </div>

          {/* Right Column: 2x2 Grid of Packing House Photos */}
          <div className="grid grid-cols-2 gap-3.5 sm:gap-4.5">
            {data.solutions.photos.map((photo, index) => (
              <div
                key={index}
                className="photo-hover relative aspect-[1.5] overflow-hidden rounded-2xl border border-forest/10 bg-[#fbfaf6] shadow-[0_6px_20px_rgba(16,61,53,.07)]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION 2: ¿Para quién es nuestro servicio? (3 Profile Cards with subtle hover lift) */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-[#589c31]">
              {data.profiles.eyebrow}
            </p>
            <h2 className="display mt-3 text-3xl font-bold text-forest sm:text-4xl lg:text-5xl">
              {data.profiles.title}
            </h2>
          </div>

          {/* 3 Interactive Cards Grid */}
          <div className="mt-12 sm:mt-16 grid gap-6 md:grid-cols-3 lg:gap-8">
            {data.profiles.cards.map((card) => (
              <article
                key={card.number}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#ece7dc] bg-[#fcfaf6] p-0 shadow-[0_4px_18px_rgba(16,61,53,.05)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#2d6653]/35 hover:shadow-[0_20px_38px_rgba(16,61,53,.13)]"
              >
                <div>
                  {/* Photo at top */}
                  <div className="relative aspect-[1.62] w-full overflow-hidden bg-forest/5">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Circular badge overlapping photo */}
                  <div className="relative -mt-6 ml-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#76bd38] bg-[#022316] text-[#76bd38] shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Icon name={card.badgeIcon} className="h-6 w-6 text-[#76bd38]" />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 pt-3">
                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl font-bold tracking-tight text-[#76bd38]">
                        {card.number}
                      </span>
                      <h3 className="text-lg font-bold leading-tight text-forest">
                        {card.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-ink/75">
                      {card.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="mt-5 space-y-2.5">
                      {card.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs leading-5 text-ink/70">
                          <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#76bd38]/20 text-[10px] font-bold text-[#2d6653]">
                            ✓
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA button */}
                <div className="p-6 pt-0">
                  <Link
                    href={card.href}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#2d6653]/40 bg-transparent py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-forest transition-all duration-300 group-hover:border-[#021e10] group-hover:bg-[#021e10] group-hover:text-white"
                  >
                    <span>{card.cta}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM BANNER: Respaldo que genera confianza */}
      <section className="bg-forest py-8 text-white sm:py-10 border-t border-white/10">
        <div className="container flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="shrink-0 lg:max-w-xs">
            <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] text-white">
              {data.trustBanner.title}
            </h2>
            <div className="mt-2.5 h-1 w-10 rounded-full bg-[#76bd38]" />
          </div>

          <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-white/20">
            {data.trustBanner.items.map((item, idx) => (
              <article
                key={idx}
                className="flex flex-col items-center justify-center text-center px-4 sm:px-5 md:px-7 lg:px-9"
              >
                <Icon name={item.icon} className="h-8 w-8 text-[#76bd38] mb-2.5 shrink-0" />
                <p className="text-xs sm:text-sm font-semibold tracking-wide text-white">
                  {item.label}
                </p>
                <p className="mt-0.5 text-[11px] sm:text-xs text-white/75">
                  {item.sublabel}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
