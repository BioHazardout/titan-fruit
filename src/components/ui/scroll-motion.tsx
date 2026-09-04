"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = Array.from(document.querySelectorAll("main > section"));
    const observed = sections.slice(1);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-scroll-visible", "");
          observer.unobserve(entry.target);
        }
      }),
      { rootMargin: "0px 0px -12%", threshold: 0.12 },
    );

    let revealFrame = requestAnimationFrame(() => {
      observed.forEach((section) => {
        section.removeAttribute("data-scroll-visible");
        section.setAttribute("data-scroll-reveal", "");
      });
      revealFrame = requestAnimationFrame(() => observed.forEach((section) => observer.observe(section)));
    });

    return () => {
      cancelAnimationFrame(revealFrame);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
