/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text_primary: "#5465FF",
        bkg_white: "#F5F5F5",
        black_primary: "#3C3C3D" ,
        btn_delete: "#D85D5D",
        btn_del_hover: "#D93F3F"
      }
      

    },
  },
  plugins: [],
}

