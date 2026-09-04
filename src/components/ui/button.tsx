import Link from "next/link";
import { Icon } from "./icons";
export function Button({ href, children, tone = "lime", className = "" }: { href: string; children: React.ReactNode; tone?: "lime" | "outline" | "dark"; className?: string }) {
  const styles = { lime:"bg-lime text-forest hover:bg-white", outline:"border border-current text-current hover:bg-forest hover:text-white", dark:"bg-forest text-white hover:bg-leaf" }[tone];
  return <Link href={href} className={`group inline-flex items-center gap-3 rounded-full px-5 py-3 text-xs font-bold tracking-[.1em] transition-colors ${styles} ${className}`}>{children}<Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1"/></Link>;
}
