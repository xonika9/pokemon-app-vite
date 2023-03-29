/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'clear-bin': "url('./src/assets/images/remove-bin.svg')",
        'minimize-button': "url('./src/assets/images/minimize.svg')",
        'maximize-button': "url('./src/assets/images/maximize.svg')",
        'pokemon-logo': "url('./src/assets/images/poke-logo.png')",
        'like-transp': "url('./src/assets/images/like-transp.svg')",
        'like-red': "url('./src/assets/images/like-red.svg')",
        'clear-button': "url('./src/assets/images/clear-button.svg')",
        'compare-unchecked': "url('./src/assets/images/unchecked-icon.svg')",
        'compare-checked': "url('./src/assets/images/checked-icon.svg')",
      },
    },
  },
  plugins: [],
};
