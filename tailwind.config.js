/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        primary: '#22577A',
        secondary: '#38A3A5', 
        tertiary: '#57CC99', 
        limez: '#80ED99', 
        lightg: '#C7F9CC'
      },
      fontFamily: {
        arsenica: ["arsenica-variable", 'sans-serif'], 
        moret: ['moret', 'serif'],
        eldwin: ['eldwin-script'],
      },  
    },
  },
  plugins: [],
}

