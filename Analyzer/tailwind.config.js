/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
    primary: "#3B82F6",
  primaryHover: "#2563EB",

  
   lightBg: "#DBEAFE",
  lightText: "#172554",

  status:"#34D399",
  warning:"#FBBF24",
  purple:"#D946EF",
  borders:"#263B59",

  darkBg: "#0B1B34",
  darkNav: "#102A4C",
  loginDarkbg:"#163A5F",
  darkText: "#DBEAFE",
  mainBg:"#07111F",
  indigo:"#818CF8",
}
    },
  },
  plugins: [],
}

