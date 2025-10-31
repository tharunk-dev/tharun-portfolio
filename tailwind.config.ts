
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0b0b0f",
          soft: "#0f1117",
          ring: "#1f2230",
        },
        text: {
          muted: "#b0b8c5",
          DEFAULT: "#e6e9ef",
        },
        brand: {
          DEFAULT: "#6ee7ff",
          soft: "#2dd4bf"
        }
      },
      boxShadow: {
        soft: "0 2px 30px rgba(0,0,0,0.25)",
      },
      borderRadius: {
        xl2: "1rem",
      }
    },
  },
  plugins: [],
} satisfies Config;
