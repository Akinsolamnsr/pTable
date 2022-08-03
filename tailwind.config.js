/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '3.5/5': '61.7%',
        '30R':"32.75rem",
        '18R':"16.25rem",
        '45R':"49rem",
        'TL':"58.25rem",
        '47R':"60rem",
      },
      height: {
        '1H': '17rem',
      },
      margin: {
        '49':"12.75rem",
        '4T':"9.75rem",
              }
    },
    inset:{
      "4t":"17rem"
    },
    
  },
  plugins: [],
}
