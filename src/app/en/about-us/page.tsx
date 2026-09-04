import type { Metadata } from "next";
import { AboutPage as AboutLandingPage } from "@/components/pages/about-page";
export const metadata: Metadata = { title:"About Us", description:"Titan Fruit is a Peruvian agro-export company supplying fresh and frozen fruit worldwide.", alternates:{ canonical:"/en/about-us" } };
export default function AboutPage() { return <AboutLandingPage />; }
