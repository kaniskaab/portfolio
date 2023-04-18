/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      // fontFamily:
      // {
      //   Dongle:['Dongle', sans-serif],
      //   Nova:['Nova Oval', cursive]
      // }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

