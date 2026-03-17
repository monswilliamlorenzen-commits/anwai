import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        panel: "#111111",
        muted: "#a8a8a8",
        border: "#2a2a2a",
      },
      fontFamily: {
        ari: ["var(--font-ari)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
