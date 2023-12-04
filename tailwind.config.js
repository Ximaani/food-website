/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "green": "#39DB4A",
        "red": "#ff6868",
        "secondary": "#555",
        "primaryBG": "#fcfcfc",
        "gradients": "linear-gradient(rgb(0 0 0/60%),rgb(0 0 0/60%))"
      },
      screens:{
        'sm' : '540px',
        'md' : '768px',
        'lg' : '1024px',
        'xl' : '1280px',
        '2xl' : '1536px',
      }

      // fontFamily:{
      //   "primary" : ['Inter', 'sans-serif']
      // }
    },
  },
  plugins: [require("daisyui")],
}

