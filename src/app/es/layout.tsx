import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <><Header path="/es" />{children}<Footer locale="es" /></>;
}
