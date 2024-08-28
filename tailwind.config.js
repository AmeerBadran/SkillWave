/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('./assets/images/login-bg.png')",
        'inner-banner': "url('./assets/images/inner-banner.jpg')",
        'home-bg': "url('./assets/images/homeBG.jpg')",
        'banner': "url('./assets/images/banner.png')",
        'not-found-bg-404': "url('./assets/images/bgNotFound404.png')",
      },
      colors: {
        'base-color': '#7b1ffe',
        'second-color': '#1CBEEF',
        'third-color': '#071135',
      },
    },
    screens: {
      'mobile': '320px',
      'xmobile': '450px',
      '2xmobile': '520px',
      'md': '640px',
      '2md': '820px',
      'slg': '950px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1320px',
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('button-group', '&.button-group:hover .button-child');
    },
  ],
}
