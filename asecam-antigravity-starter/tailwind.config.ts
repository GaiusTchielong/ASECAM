import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E7A34",
          dark: "#155A26",
        },
        "accent-red": "#CE1126",
        "accent-gold": "#FCD116",
        ink: {
          DEFAULT: "#1A1A1A",
          secondary: "#4B5563",
        },
        background: "#FFFFFF",
        surface: "#F7F8F6",
      },
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
