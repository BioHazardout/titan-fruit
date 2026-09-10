import { notFound } from "next/navigation";
import EnglishHome from "@/app/en/page";
import FreshFruitPage from "@/app/en/fresh-fruit/page";
import IqfFrozenPage from "@/app/en/iqf-frozen/page";
import MaquilaPage from "@/app/en/maquila-services/page";
import FacilityRoutePage from "@/app/en/our-facility/page";
import AboutRoutePage from "@/app/en/about-us/page";
import QualityRoutePage from "@/app/en/quality-certifications/page";
import ContactRoutePage from "@/app/en/contact/page";

export default async function SpanishPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug: segments } = await params;
  const slug = segments?.join("/") ?? "";
  switch (slug) {
    case "": return <EnglishHome />;
    case "fruta-fresca": return <FreshFruitPage />;
    case "iqf-congelados": return <IqfFrozenPage />;
    case "servicios-maquila": return <MaquilaPage locale="es" />;
    case "nuestra-planta": return <FacilityRoutePage />;
    case "nosotros": return <AboutRoutePage />;
    case "calidad-certificaciones": return <QualityRoutePage />;
    case "contacto": return <ContactRoutePage />;
    default: notFound();
  }
}
