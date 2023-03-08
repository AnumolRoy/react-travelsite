/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "sea":"url('./assets/img3.png')",
        "img4":"url('./assets/img4.png')",
        "img5":"url('./assets/img5.png')",
        "img6":"url('./assets/img6.png')",
        "img7":"url('./assets/img7.png')",
        "img1":"url('./assets/img1.png')",
        "img8":"url('./assets/img8.png')",
        "img12":"url('./assets/img12.jpg')",
        "banner1":"url('./assets/banner1.jpg')",
        "banner2":"url('./assets/banner2.jpg')",
        "img24":"url('./assets/img24.png')",


      }
    },
  },
  plugins: [],
}