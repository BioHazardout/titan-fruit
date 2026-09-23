import type { Metadata } from "next";
import { MaintenanceScreen } from "@/components/maintenance/maintenance-screen";

export const metadata: Metadata = {
  title: "Titan Fruit | Mantenimiento Programado",
  description: "Sitio web en mantenimiento programado por actualización de plataforma.",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return <MaintenanceScreen />;
}
