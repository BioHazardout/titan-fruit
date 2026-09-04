import type { Metadata } from "next";
import "./globals.css";
import { ScrollMotion } from "@/components/ui/scroll-motion";
import { siteName, siteUrl, socialImage } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Titan Fruit | Peruvian origin. Global opportunities.", template: "%s | Titan Fruit" },
  description: "Integrated Peruvian partner for fresh fruit, IQF frozen solutions and processing services.",
  applicationName: siteName,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/images/company/icono_titanfruit.svg", type: "image/svg+xml" }],
    shortcut: ["/images/company/icono_titanfruit.svg"],
    apple: [{ url: "/images/company/icono_titanfruit.svg", type: "image/svg+xml" }],
  },
  keywords: ["Peruvian fruit exporter", "fresh fruit Peru", "IQF frozen fruit", "dragon fruit Peru", "avocado Peru", "SENASA authorized facility", "fruit processing Peru"],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "Food and agriculture",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName,
    locale: "en_US",
    alternateLocale: "es_PE",
    title: "Titan Fruit | Peruvian origin. Global opportunities.",
    description: "Fresh, IQF frozen and processed fruit solutions from Peru.",
    url: "/en",
    images: [{ url: socialImage, width: 1200, height: 630, alt: "Titan Fruit - Peruvian fruit for global markets" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Titan Fruit | Peruvian origin. Global opportunities.",
    description: "Fresh, IQF frozen and processed fruit solutions from Peru.",
    images: [socialImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><ScrollMotion />{children}</body></html>;
}
