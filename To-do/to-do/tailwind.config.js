/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        titleFont: ['Poppins', 'sans-serif'],
        bodyFont: ['Zen Kaku Gothic Antique', 'Roboto', 'sans-serif'],
      },
      colors: {
        bgMain: '#2D4356',
        bgNav: '#A76F6F',
        bgHead: '#435B66',
      },
      boxShadow: {
        navbarShadow: '10px 10px 35px -12px rgba(2,12,27,0.7)',
      },
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        mdxl: '900',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
