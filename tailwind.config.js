/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      red: 'rgb(255,0,0)',
    blue:'rgb(0, 21, 255)',
    white:'rgb(255, 255, 255)',
    bodyBackground:'rgba(252, 239, 228, 1)',
    buttonBackground:'rgba(215, 83, 122, 1)',
    navText:'rgba(7, 60, 42, 1)',
    headerText:'rgba(39, 38, 38, 1)'
    },
    fontFamily:{
      font: 'Montserrat, sans-serif',
    },
    extend: {
      screens: {
        xs: '360px',
        sm:'576px',
        md: '768px',
        lg: '992px',
        xl: '1171px',
        
      },
      maxWidth:{
        // '1':'1171px'
      },

    },
    container: {
      center:true,
      padding:'20px',
      maxWidth:'1171px'
    },
  },
  plugins: [],
}

