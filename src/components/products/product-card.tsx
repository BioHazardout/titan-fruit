"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import type { Product } from "@/data/products";
import { Icon } from "@/components/ui/icons";

export function ProductCard({ product }: { product: Product }) {
  const pathname = usePathname();
  const isSpanish = pathname?.startsWith("/es");
  const displayName = isSpanish ? (product.nameEs ?? product.name) : product.name;

  return (
    <div className="image-zoom group block overflow-hidden rounded-3xl border border-forest/10 bg-white select-none shadow-[0_4px_16px_rgba(16,61,53,0.04)]">
      <div className="relative aspect-[4/4.35] overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={displayName}
          fill
          sizes="(max-width: 640px) 78vw, (max-width: 1024px) 33vw, 230px"
          className="object-cover"
        />
      </div>
      <div className="flex items-center justify-between p-4">
        <div>
          <p className="mb-2 h-0.5 w-7 bg-lime transition-all group-hover:w-11" />
          <h3 className="text-sm font-bold uppercase tracking-[.06em] text-forest">
            {displayName}
          </h3>
        </div>
        <Icon
          name="arrow"
          className="h-4 w-4 text-leaf transition-transform group-hover:translate-x-1"
        />
      </div>
    </div>
  );
}
