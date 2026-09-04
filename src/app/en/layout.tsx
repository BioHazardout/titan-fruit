import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
export default function EnglishLayout({ children }: { children: React.ReactNode }) { return <><Header path="/en"/>{children}<Footer/></>; }
