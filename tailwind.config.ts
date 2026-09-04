import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: "#021e10",
        leaf: "#2d6653",
        lime: "#d5ed5a",
        cream: "#f6f7f2",
        ink: "#17221f",
      },
      boxShadow: { card: "0 14px 36px rgba(16, 61, 53, 0.09)" },
      borderRadius: { "4xl": "2rem" },
    },
  },
  plugins: [],
} satisfies Config;
