/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#028cd1', // Your primary color
        'primary-h':'#38bdf8',
        black: '#0f172a',   // Your black color
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-linear": "linear-gradient(180deg, #f8fafc, rgba(242, 202, 252, .11) 34.69%, rgba(250, 198, 252, .11) 44.06%, rgba(175, 183, 255, .11) 54.48%, rgba(142, 220, 200, .07) 64.9%, #f8fafc 97.95%)",
      },
    },
  },
  plugins: [],
  darkMode:'class'
};
