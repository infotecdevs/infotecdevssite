/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        gradient: "linear-gradient(to right, #8B5CF6, #6366F1)",
      }),
      colors: {
        primary: "#260949",
        secondary: "#8545D9",
        tertiary: "#1252EF",
      },
    },
  },
  plugins: [],
};
