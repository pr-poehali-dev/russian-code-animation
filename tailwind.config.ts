import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0d1117",
        foreground: "#c9d1d9",
        primary: {
          DEFAULT: "#58a6ff",
          foreground: "#0d1117",
        },
        secondary: {
          DEFAULT: "#161b22",
          foreground: "#c9d1d9",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#161b22",
          foreground: "#7d8590",
        },
        accent: {
          DEFAULT: "#58a6ff",
          foreground: "#0d1117",
        },
        popover: {
          DEFAULT: "#161b22",
          foreground: "#c9d1d9",
        },
        card: {
          DEFAULT: "#161b22",
          foreground: "#c9d1d9",
        },
        terminal: "#161b22",
        command: "#7ee787",
        system: "#c9d1d9",
        highlight: "#d29922",
        button: "#7B68EE",
      },
      fontFamily: {
        mono: ["IBM Plex Mono", "Fira Code", "monospace"],
        code: ["Fira Code", "IBM Plex Mono", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
