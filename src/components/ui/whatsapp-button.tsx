"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector("main > section:first-of-type") as HTMLElement | null;
      if (hero) {
        // Only show button once the hero is completely scrolled past
        const heroBottom = hero.getBoundingClientRect().bottom;
        setVisible(heroBottom <= 60);
      } else {
        setVisible(window.scrollY > 400);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  return (
    <aside
      aria-label="WhatsApp contact"
      className={`fixed bottom-5 right-5 z-50 transition-all duration-300 sm:bottom-6 sm:right-6 ${
        visible ? "scale-100 opacity-100 pointer-events-auto" : "scale-75 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="https://wa.me/51912509384"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp (+51 912 509 384)"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_24px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-110 active:scale-95 hover:shadow-[0_8px_30px_rgba(37,211,102,0.65)]"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-current transition-transform duration-300 group-hover:scale-105"
          aria-hidden="true"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.079-1.84-.424-1.543-.642-2.534-2.209-2.611-2.311-.077-.103-.626-.834-.626-1.59 0-.757.394-1.129.534-1.282.14-.153.306-.192.408-.192.102 0 .204.002.293.007.094.004.22-.036.344.262.13.312.443 1.08.482 1.159.039.08.065.172.013.276-.051.103-.077.168-.153.257-.077.089-.161.199-.23.267-.078.077-.159.16-.068.316.091.156.403.665.865 1.077.595.531 1.097.696 1.253.774.156.078.247.068.338-.036.091-.104.39-.455.494-.611.104-.156.208-.13.349-.078.14.052.888.419 1.04.495.152.076.253.113.29.176.037.063.037.365-.107.77zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.174L2 22l4.966-1.397A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
        </svg>
      </a>
    </aside>
  );
}
