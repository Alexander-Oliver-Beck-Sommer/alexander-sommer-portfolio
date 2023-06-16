/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      // Mobile
      md: "744px",
      // Tablet
      lg: "1440px",
      // Desktop
    },
    colors: {
      white: "#FFFFFF",
      white_alt: "#F7F7F7",
      black: "#202020",
      red: "#F94144",
      purple: "#7C41F9",
      green: "#3ED04D",
      blue: "#4175F9",
      yellow: "#F9C74F",
    },
    fontFamily: {
      title: ["Yantramanav"],
      body: ["Roboto"],
    },
  },
  plugins: [],
};
