import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        surface: "#1A1A1A",
        foreground: "#F2F2F2",
        muted: "#A0A0A0",
        purple: {
          DEFAULT: "#761BEF",
          hover: "#8F3FF5",
          active: "#6216C7",
          soft: "#4E129F",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      borderColor: {
        subtle: "rgba(255,255,255,0.1)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
