/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        tablet: "1024px",
        medium: "1240px",
        desktop: "1920px",
      },
      fontFamily: {
        firago: ["FiraGO"],
      },
      fontSize: {
        smallText: [
          "12px",
          { lineHeight: "16px", fontWeight: 400, letterSpacing: "0.20px" },
        ],
        headerText: [
          "16px",
          { lineHeight: "20px", fontWeight: 400, letterSpacing: "-0.24px" },
        ],
        bodyText: [
          "16px",
          { lineHeight: "24px", fontWeight: 400, letterSpacing: "0.5px" },
        ],
        headLine1: [
          "24px",
          { lineHeight: "40px", fontWeight: 600, letterSpacing: "0.35px" },
        ],
        headLine2: [
          "16px",
          { lineHeight: "24px", fontWeight: 600, letterSpacing: "0.35px" },
        ],
        headLine3: [
          "13px",
          { lineHeight: "16px", fontWeight: 500, letterSpacing: "0.20px" },
        ],
        logoSmall: [
          "16px",
          { lineHeight: "34px", fontWeight: 600, letterSpacing: "0.36px" },
        ],
        logoMedium: [
          "24px",
          { lineHeight: "34px", fontWeight: 600, letterSpacing: "0.36px" },
        ],
        logoLarge: [
          "28px",
          { lineHeight: "34px", fontWeight: 600, letterSpacing: "0.36px" },
        ],
        sliderType: [
          "13px",
          { lineHeight: "18px", fontWeight: 400, letterSpacing: "-0.08px" },
        ],
      },
      colors: {
        primary: "#ff3b30",
        black: "#000000",
        white: "#ffffff",
        interface: {
          100: "#f9fafc",
          200: "#EDF0F7",
          300: "#E2E7F0",
          400: "#4A5468",
        },
      },
      boxShadow: {
        large: "0px 0px 40px rgba(0, 0, 0, 0.12)",
        small: "0px 0px 20px rgba(0, 0, 0, 0.1)",
      },
      maxWidth: {
        container: "1128px",
        containerLarge: "1312px",
      },
    },
  },
  plugins: [],
};
