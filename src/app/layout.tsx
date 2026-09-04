import type { Metadata } from "next";
import "./globals.css";
import { ScrollMotion } from "@/components/ui/scroll-motion";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://titanfruit.pe"),
  title: { default: "Titan Fruit | Peruvian origin. Global opportunities.", template: "%s | Titan Fruit" },
  description: "Integrated Peruvian partner for fresh fruit, IQF frozen solutions and processing services.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><ScrollMotion />{children}</body></html>;
}
