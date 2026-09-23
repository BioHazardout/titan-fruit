import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Toggle de modo mantenimiento:
 * - false: El sitio web opera 100% normal (estado activo).
 * - true: Se activa la pantalla de mantenimiento en todo el sitio al instante.
 * También se puede activar sin tocar código poniendo NEXT_PUBLIC_MAINTENANCE_MODE=true en Vercel.
 */
const MAINTENANCE_MODE = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

export function middleware(request: NextRequest) {
  if (!MAINTENANCE_MODE) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Permitir archivos estáticos, imágenes, iconos e internos de Next.js
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/manifest") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/maintenance" ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Reescribir todas las demás rutas a /maintenance
  return NextResponse.rewrite(new URL("/maintenance", request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
