import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "4rem",
          xl: "8rem",
          "2xl": "15.7813rem",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        background: {
          DEFAULT: "#000000",
          dark: "#0F172A",
          primary: "#0045A5",
          secondary: "#0942A5",
          tertiary: "#301091",
          quaternary: "#3C33A7",
        },
        sub: {
          1: "#019CDB",
          2: "#5f1AA0",
          3: "#FFF6B2D",
        },
        text: {
          1: "#FFF6B2D",
        },
      },
      radius: {
        DEFAULT: "0.625rem",
        "sm-0": "0.375rem",
        "sm-1": "0.5rem",
      },
      spacing: {
        "5sp": "1.5rem",
        "8sp": "3rem",
        "9sp": "3.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
