import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { Icon } from "@/components/ui/icons";
export function ProductCard({ product }: { product: Product }) { return <Link href={`/en/fresh-fruit/${product.slug}`} className="image-zoom group block overflow-hidden rounded-3xl border border-forest/10 bg-white"><div className="relative aspect-[4/4.35] overflow-hidden"><Image src={product.image} alt={`Temporary product photography: ${product.name}`} fill sizes="(max-width: 640px) 78vw, (max-width: 1024px) 33vw, 230px" className="object-cover"/></div><div className="flex items-center justify-between p-4"><div><p className="mb-2 h-0.5 w-7 bg-lime transition-all group-hover:w-11"/><h3 className="text-sm font-bold uppercase tracking-[.06em]">{product.name}</h3></div><Icon name="arrow" className="h-4 w-4 text-leaf transition-transform group-hover:translate-x-1"/></div></Link>; }
