import type { SVGProps } from "react";

export type IconName = "arrow" | "chevron" | "leaf" | "globe" | "snow" | "factory" | "shield" | "certificate" | "spark" | "package" | "truck" | "search" | "user" | "users" | "calendar" | "mail" | "pin" | "phone" | "menu" | "close";

export function Icon({ name, className = "", ...props }: { name: IconName; className?: string } & SVGProps<SVGSVGElement>) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const shapes: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M3 12h17"/><path d="m14 5 7 7-7 7"/></>,
    chevron: <path d="m6 9 6 6 6-6"/>,
    leaf: <><path d="M20.5 3.5C12 3.5 4 7 4 15.5c0 2.8 2.2 5 5 5C17.5 20.5 20.5 12 20.5 3.5Z"/><path d="M3 21c3.3-5.1 7.4-8.3 13-11"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.7 5.6 3.7 9S14.5 18.4 12 21c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3"/></>,
    snow: <><path d="M12 2v20M4.1 6.5l15.8 11M19.9 6.5 4.1 17.5M8.5 2.8 12 6.2l3.5-3.4M8.5 21.2 12 17.8l3.5 3.4M2.8 8.5l4.8.2-1.3-4.6M21.2 15.5l-4.8-.2 1.3 4.6M21.2 8.5l-4.8.2 1.3-4.6M2.8 15.5l4.8-.2 1.3 4.6"/></>,
    factory: <><path d="M3 21h18V9l-6 3V8l-6 3V5L3 8v13Z"/><path d="M7 21v-5h3v5M16 16h1M16 12h1"/></>,
    shield: <><path d="M12 3 20 6v5c0 5.1-3.4 8.4-8 10-4.6-1.6-8-4.9-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
    certificate: <><circle cx="12" cy="10" r="6.5"/><path d="m9 16-1 5 4-2 4 2-1-5M9.5 10.5l1.6 1.6 3.4-3.4"/></>,
    spark: <><path d="M12 2c.8 5.8 3.8 8.8 9 9-5.2.2-8.2 3.2-9 9-.8-5.8-3.8-8.8-9-9 5.2-.2 8.2-3.2 9-9Z"/></>,
    package: <><path d="m3 7 9-4 9 4-9 4-9-4Z"/><path d="M3 7v10l9 4 9-4V7M12 11v10"/></>,
    truck: <><path d="M3 6h11v10H3z"/><path d="M14 10h4l3 3v3h-7M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4M18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></>,
    user: <><circle cx="12" cy="8" r="3.5"/><path d="M4.5 21c.7-4.2 3.2-6.5 7.5-6.5s6.8 2.3 7.5 6.5"/></>,
    users: <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 21c.6-3.7 2.6-5.5 6-5.5s5.4 1.8 6 5.5M14 15.5c3.5-.2 5.8 1.6 6.5 5.5"/></>,
    calendar: <><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/><path d="M8 14h.01M12 14h.01M16 14h.01"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    phone: <><path d="M6.5 3.5 9 3l2 4-2 1.5a13 13 0 0 0 6.5 6.5L17 13l4 2-.5 2.5c-.3 1.5-1.7 2.5-3.2 2.2C10 18.5 5.5 14 4.3 6.7 4 5.2 5 3.8 6.5 3.5Z"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m5 5 14 14M19 5 5 19"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...common} {...props}>{shapes[name]}</svg>;
}
