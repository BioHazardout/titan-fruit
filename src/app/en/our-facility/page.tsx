import type { Metadata } from "next";
import { FacilityPage as FacilityLandingPage } from "@/components/pages/facility-page";
export const metadata: Metadata = { title:"Our Facility", description:"Titan Fruit packing and processing facility in Lima, Peru.", alternates:{ canonical:"/en/our-facility" } };
export default function FacilityPage() { return <FacilityLandingPage />; }
