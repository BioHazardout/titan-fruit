import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SpanishTranslator } from "@/components/layout/spanish-translator";

export const metadata = { title: "Titan Fruit | Origen peruano. Oportunidades globales.", description: "Socio peruano integral para fruta fresca, soluciones congeladas IQF y servicios de procesamiento." };

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <><Header path="/es" /><SpanishTranslator />{children}<Footer locale="es" /></>;
}
