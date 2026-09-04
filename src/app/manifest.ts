import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Titan Fruit",
    short_name: "Titan Fruit",
    description: "Fresh fruit, IQF frozen solutions and processing services from Peru.",
    start_url: "/en",
    display: "standalone",
    background_color: "#021e10",
    theme_color: "#021e10",
    icons: [{ src: "/images/company/icono_titanfruit.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
