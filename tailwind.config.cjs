/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#7e7e7e",
          "200": "#111",
          "500": "rgba(0, 0, 0, 0.6)",
          "600": "rgba(0, 0, 0, 0.9)",
          "700": "rgba(0, 0, 0, 0.35)",
          "800": "rgba(0, 0, 0, 0.75)",
          "900": "rgba(255, 255, 255, 0)",
          "1000": "rgba(0, 0, 0, 0.87)",
        },
        whitesmoke: "#ebebf0",
        royalblue: "#0066ee",
        dimgray: "#6c6c70",
        gainsboro: { "100": "#dadce0", "200": "#d8d8dc" },
        dodgerblue: "#0a66c2",
        darkslategray: "#3c4043",
        sienna: "#8f5849",
        lightgray: "#cdcfd2",
      },
      fontFamily: { inter: "Inter", roboto: "Roboto" },
      borderRadius: { "25xl": "44px", "113xl": "132px", xl: "20px" },
    },
    fontSize: {
      "2xs": "11px",
      xl: "20px",
      "29xl": "48px",
      base: "16px",
      "11xl": "30px",
      "17xl": "36px",
      "49xl": "68px",
      "21xl": "40px",
      smi: "13px",
      sm: "14px",
      mini: "15px",
      xs: "12px",
    },
    screens: {
      lg: { max: "1200px" },
      md: { max: "960px" },
      sm: { max: "420px" },
    },
  },
  corePlugins: { preflight: false },
};
