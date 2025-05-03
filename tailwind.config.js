/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], 
      },
      fontSize: {
        'xxs': '0.625rem', // Extra extra small (10px)
        'hero': ['4.5rem', { lineHeight: '1.2' }], // Custom hero font size
        'subtitle': ['1.25rem', { lineHeight: '1.5' }], // Custom subtitle
      },
    },
  },
  plugins: [],
};
