/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {

    screens: {
      xs: { 'min': '320px', 'max': '576px' },
      sm: { 'min': '576px', 'max': '768px' },
      md: { 'min': '768px', 'max': '992px' },
      lg: { 'min': '992px', 'max': '1200px' },
      xl: {'min':'1200px'},
    },
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        red: 'rgb(255,0,0)',
        blue: 'rgb(0, 21, 255)',
        white: 'rgb(255, 255, 255)',
        bodyBackground: 'rgba(252, 239, 228, 1)',
        buttonBackground: 'rgba(215, 83, 122, 1)',
        navText: 'rgba(7, 60, 42, 1)',
        headerText: 'rgba(39, 38, 38, 1)',
        buttonBackgroundHover:'rgb(239,67,118)',
        registerBackground:'rgba(255, 240, 228, 1)',
        registerColor:'rgba(253, 79, 121, 1)',
        element1BG: 'rgba(253, 79, 121, 1)',
        element2BG: 'rgba(74, 233, 80, 1)',
        element3BG: 'rgba(253, 152, 79, 1)',
        element4BG: 'rgba(241, 235, 76, 1)',
        discountColor: 'rgba(126, 160, 72, 1)',
        infoBoxColor: 'rgba(255, 248, 245, 1)',
        catalogBoxColor: 'rgba(255, 248, 245, 0.85)',
        mobileAboutUsBG: 'rgba(255, 248, 245, 1)'
      },
      fontFamily: {
        font: 'Montserrat, sans-serif ',
      },
      backgroundImage:{
        headerBg:"url('assets/img/image (3).png')",
        footerFrame:"url(assets/svg/Рамка.svg)",
        deliveryBack:"url(assets/svg/изображение_2021-03-19_141853-removebg 1.svg)",
      },
      boxShadow:{
        navbarShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
        AboutBoxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
      },
      gridAutoColumns:{
        offers:'2fr 1fr'
      }
    },

  },
  plugins: [],
}

