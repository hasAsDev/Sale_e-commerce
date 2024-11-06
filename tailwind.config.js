/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: {
        light: "#737373",
        dark: "#171717",
        active: "#404040",
        boundary: "#d4d4d4",
      },
      white: {
        blur: "#f5f5f580",
        gray: "#fafafa",
        Default: "#fff",
      },
    },
    fontSize: {
      tit: ["1rem", { lineHeight: "1.5rem" }],
      desc: ["0.875rem", { lineHeight: "1.25rem" }],
      head: ["1.875rem", { lineHeight: "2.25rem" }],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.75rem",
        sm: "2rem",
      },
    },
    extend: {
      screens: {
        desktop: "1280px",
        laptop: "1024px",
        tablet: "640px",
      },
      keyframes: {
        poplist: {
          "0%": { transform: "translateY(-1rem)", opacity: "50%" },
        },
      },
    },
  },
};
