"use client";
import { useState } from "react";
import type { Product } from "@/data/products";
import { ProductCard } from "./product-card";
import { Icon } from "@/components/ui/icons";
export function ProductCategory({ title, products, expandLabel }: { title: string; products: Product[]; expandLabel: string }) { const [expanded, setExpanded] = useState(false); const primary = products.slice(0, 5); const additional = products.slice(5); const items = expanded ? products : primary; return <section><h2 className="mb-7 text-xl font-bold uppercase tracking-[.1em] text-forest">{title}</h2><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{items.map((product) => <ProductCard key={product.id} product={product}/>)}</div>{additional.length > 0 && <button type="button" onClick={() => setExpanded(!expanded)} aria-expanded={expanded} className="group mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-[.1em] text-leaf"><span>{expanded ? "SHOW LESS" : expandLabel}</span><Icon name="arrow" className={`h-4 w-4 transition-transform ${expanded ? "-rotate-90" : "rotate-90"}`}/></button>}</section>; }
