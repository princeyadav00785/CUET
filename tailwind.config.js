/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        midnightblue: "#0d0756",
        deepskyblue: "#00d1ff",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0.1)",
        },
        tomato: {
          "100": "#ff5c4f",
          "200": "#ea4335",
        },
        gray: {
          "100": "rgba(0, 0, 0, 0.75)",
          "200": "rgba(0, 0, 0, 0.6)",
          "300": "rgba(0, 0, 0, 0.5)",
        },
        blueviolet: {
          "100": "#5648fc",
          "200": "rgba(86, 72, 252, 0.75)",
          "300": "rgba(86, 72, 252, 0.8)",
          "400": "rgba(86, 72, 252, 0.65)",
        },
        black: "#000",
        thistle: "rgba(204, 198, 248, 0.2)",
        mediumslateblue: {
          "100": "#7d6eff",
          "200": "rgba(125, 110, 255, 0.09)",
        },
        salmon: "#ff7468",
        firebrick: "#cc4236",
        mediumblue: "#1404da",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "lg-3": "18.3px",
        "3xs-2": "9.2px",
        base: "16px",
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      sm: "14px",
      "lg-3": "18.3px",
      "3xl": "22px",
      lg: "18px",
      smi: "13px",
      "5xl": "24px",
      lgi: "19px",
      "lgi-2": "19.2px",
      "xs-2": "11.2px",
      "13xl": "32px",
      "7xl": "26px",
      "17xl": "36px",
      "10xl": "29px",
      xl: "20px",
      "21xl": "40px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

  plugins: [],
};
