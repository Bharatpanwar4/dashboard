/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        componentBg:'#1F2029',
        icontext:'#7E7F83',
        iconBg:'#44464C',
        primaryColor:'#7595FE'
       

      }
    },
  },
  plugins: [],
}

