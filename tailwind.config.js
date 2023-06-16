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
    fontSize: {
      14: "0.875rem",
      32: "2rem",
    },
    configViewer: {
      fonts: [
        "https://fonts.googleapis.com/css2?family=Yantramanav:wght@100;300;400;500;700;900&display=swap",
        "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap", // <- only 500 will be used
      ],
    },
  },
  plugins: [],
};
