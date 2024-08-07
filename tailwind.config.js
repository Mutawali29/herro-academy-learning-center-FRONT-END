/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Include all relevant extensions
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",   // Warna abu-abu sangat terang
        "gray-50": "#EFE6E6",   // Warna abu-abu terang
        "gray-100": "#DFCCCC",  // Warna abu-abu muda
        "gray-500": "#00005E",  // Warna biru tua atau navy
        "primary-100": "#E0F7FF", // Warna biru muda sangat terang
        "primary-300": "#A3E6FF", // Warna biru muda
        "primary-500": "#66D6FF", // Warna biru lebih gelap
        "secondary-400": "#ADD8E6", // Warna biru muda
        "secondary-500": "#87CEEB", // Warna biru langit atau sky blue
      },
    
      backgroundImage: (theme) => ({
        "gradient-blueblue": "linear-gradient(90deg, #66D6FF 0%, #87CEEB 100%)", // gradien dengan warna biru muda dan biru muda yang lebih gelap
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px", // Ensure these are strings
      md: "1060px",
    },
  },
  plugins: [],
};
