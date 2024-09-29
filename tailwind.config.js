/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary100:'#1F3A5F',
        primary200:'#4d648d',
        primary300:'#acc2ef',
        accent100:'#3D5A80',
        accent200:'#cee8ff',
        text100:'#FFFFFF',
        text200:'#e0e0e0',
        bg100:'#0F1C2E' ,
        bg200:'#1f2b3e',
        bg300:'#374357', 
        instagram:'#9c1893',
        facebook:'#3b5998',
        linkedin:'#0073b1',
        twitter:'#33a1fd',
        codepen:'#52b788',
        golden:'#e9d8a6',
        light:'#f6f4d2',
        footer:'#6E8FE7',
        dwhite:'#faf9f9',
        navbg:' rgba(85, 91, 110, 0.727)'

      },
      height:{
          '60vh':'60vh',
      },
      width:{
        '45':'45%',
        '50':'50vw',
      },
      backgroundImage: {
        'hero-lg': "url('/image/bg.png')",
        'hero-sm-dark':"url('/image/herosmdark.png')",
        'hero-sm-light':"url('/image/herosmlight.png')",

        'info-pattern':"url('/image/background.png')",
        'mesh-pattern':"url('/image/Frame1.png')",
        'mesh2-pattern':"url('/image/Frame2.png')",
        'footer':"url('/image/footer.png')",
        
      },
      fontFamily:{
        'lato': ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
        'mont':['Montserrat', 'sans-serif'],
      } 
    },
  },
  plugins: [require("daisyui")],
}

