/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/index.html",
    "./pages/details.html",
    "./script.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif']
      },
      colors:{
        'dm-db': 'hsl(209, 23%, 22%)',
        'dm-vdb': 'hsl(207, 26%, 17%)',
        'lm-vdb': 'hsl(200, 15%, 8%)',
        'lm-dg': 'hsl(0, 0%, 52%)',
        'lm-vlg': "hsl(0, 0%, 98%)",
        'white': 'hsl(0, 0%, 100%)'
      },
      boxShadow:{
        'custom': `3px 4px 5px 0px rgba(156,151,151,0.15), -3px -4px 5px 0px rgba(156,151,151,0.15)`
      }
    },
  },
  plugins: [],
}
