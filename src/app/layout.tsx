import type { Metadata } from "next";
import "./globals.css";
import { siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Titan Fruit | Mantenimiento Programado",
  description: "Sitio web en mantenimiento programado por actualización de plataforma.",
  applicationName: siteName,
  icons: {
    icon: [{ url: "/images/company/icono_titanfruit.svg", type: "image/svg+xml" }],
    shortcut: ["/images/company/icono_titanfruit.svg"],
    apple: [{ url: "/images/company/icono_titanfruit.svg", type: "image/svg+xml" }],
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-[#021e10]">
        {children}
      </body>
    </html>
  );
}
