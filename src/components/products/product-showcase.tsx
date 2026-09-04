"use client";
import { useEffect, useRef, useState } from "react";
import { products } from "@/data/products";
import { Icon } from "@/components/ui/icons";
import { ProductCard } from "./product-card";

export function ProductShowcase() {
  const track = useRef<HTMLDivElement>(null); const [atStart, setAtStart] = useState(true); const [atEnd, setAtEnd] = useState(false);
  const items = products.filter((product) => product.category === "fruit");
  const update = () => { const el = track.current; if (!el) return; setAtStart(el.scrollLeft < 8); setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8); };
  useEffect(() => { update(); const el = track.current; el?.addEventListener("scroll", update, { passive:true }); window.addEventListener("resize", update); return () => { el?.removeEventListener("scroll", update); window.removeEventListener("resize", update); }; }, []);
  const move = (direction: 1 | -1) => track.current?.scrollBy({ left: direction * Math.min(track.current.clientWidth * .72, 720), behavior:"smooth" });
  return <div className="relative"><div ref={track} onScroll={update} className="scrollbar-none flex snap-x gap-4 overflow-x-auto scroll-smooth pb-2 pr-4 sm:gap-5 lg:gap-6 lg:pr-0">{items.map((product) => <div key={product.id} className="w-[210px] shrink-0 snap-start lg:w-[calc((100%-7.5rem)/6)] lg:min-w-[170px]"><ProductCard product={product}/></div>)}</div><div className="pointer-events-none absolute inset-y-0 left-0 hidden items-center lg:flex"><button type="button" onClick={() => move(-1)} disabled={atStart} aria-label="Show previous products" className={`pointer-events-auto grid h-10 w-10 -translate-x-5 place-items-center rounded-full border bg-white text-forest shadow-card transition ${atStart ? "invisible" : "hover:bg-lime"}`}><Icon name="arrow" className="h-4 w-4 rotate-180"/></button></div><div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center lg:flex"><button type="button" onClick={() => move(1)} disabled={atEnd} aria-label="Show more products" className={`pointer-events-auto grid h-10 w-10 translate-x-5 place-items-center rounded-full border bg-white text-forest shadow-card transition ${atEnd ? "invisible" : "hover:bg-lime"}`}><Icon name="arrow" className="h-4 w-4"/></button></div></div>;
}
