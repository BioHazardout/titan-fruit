import type { Metadata } from "next";
import { IqfPage } from "@/components/pages/iqf-page";
export const metadata: Metadata = { title:"IQF Frozen Products", description:"IQF frozen fruit solutions for partners in the USA and Europe.", alternates:{ canonical:"/en/iqf-frozen" } };
export default function IqfFrozenPage() { return <IqfPage />; }
