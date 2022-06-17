/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#272626",
      secondary: "#00F0E9",
      tertiary: "#FF0050",
      body: "#7A7878",
      white: "#fff",
      pink: "#FFE7EE",
      "light-grey": "#EEEEEE",
      placeholder: "#A1A1A1",
      focus: "#FFAF2D",
      error: "#FD151B",
    },
    fontSize: {
      "4xl": "48px",
      "3xl": "30px",
      "2xl": "30px",
      xxl: "26px",
      xl: "20px",
      lg: "16px",
      md: "14px",
      xs: "13px",
    },
    screens: {
      tablet: "640px",

      laptop: "1024px",

      desktop: "1280px",
    },
    extend: {
      backgroundImage: {
        "landing-section": "url('/src/assets/images/landing-section.png')",
      },
    },
  },
  plugins: [],
};
