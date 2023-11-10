/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {

      fontSize: {
        "9xl": '404px'
      },

      fontFamily:{
        '404': ['Roboto Mono'],
        'table': ['Roboto']
      },

      colors: {
        mainColor: '#2563EB',
        darkMainColor: '#1E3A8A',
      },
      
      width: {
        '15': '15%',
        '80': '80%',
        '80vw': "80vw"
      },
      margin:{
        '75px': '75px',
        '100px': '100px',
      },
      height: {
        '80vh': "80vh",
        '70vh': '70vh'
      }
    },
  },
  plugins: [],
}

