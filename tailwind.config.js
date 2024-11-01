/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/client/asset/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
   'maroon-flush': {
    '50': '#FCF2F9', 
    '100': '#FAE3F1', 
    '200': '#F2BDDA', 
    '300': '#EB98C2', 
    '400': '#D95286', 
    '500': '#C9184A', 
    '600': '#B5143F', 
    '700': '#960E30', 
    '800': '#780822', 
    '900': '#5C0516', 
    '950': '#3B020C'
}
      },
    },
  },
  plugins: [],
};
