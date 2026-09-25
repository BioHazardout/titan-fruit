import { redirect } from "next/navigation";

/**
 * The public domain opens at `/`. Keep the English experience as the
 * default while preserving the explicit `/en` and `/es` routes.
 */
export default function RootPage() {
  redirect("/en");
}
