import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "4px",
          xs: "4px",
          sm: "6px",
          md: "8px",
          lg: "16px",
          xl: "32px",
          "2xl": "100px",
        },
        screens: {
          xs: "320px",
          sm: "480px", // 1920px의 25%
          md: "768px", // 1920px의 40%
          // "md-2": "1000px",
          lg: "1024px", // 1920px의 53.3%
          xl: "1440px", // 1920px의 75%
          "2xl": "1920px", // 1920px의 100%
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
