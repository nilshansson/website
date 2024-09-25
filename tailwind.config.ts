import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customWhite: "#EEEEEE",
      },
      fontFamily: {
        archivo: ["var(--font-archivo)", "sans-serif"],
      },
    },
    keyframes: {
      stroke: {
        "0%": { width: "0%" },
        "100%": { width: "100%" },
      },
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      reveal: {
        "0%": { left: "0", width: "100%" }, // Start fully covering the image from the left
        "100%": { left: "100%", width: "0%" }, // End by moving the overlay to the right
      },
    },
    animation: {
      stroke: "stroke 0.5s ease-out forwards",
      reveal: "reveal 3s ease-out forwards",
      "reveal-hover": "reveal 3s ease-out forwards", // For hover effect
      fadeIn: "fadeIn 2s ease-out forwards",
    },
  },
  plugins: [],
};
export default config;
