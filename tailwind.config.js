/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'clear-bin': "url('./images/remove-bin.svg')",
        'minimize-button': "url('./images/minimize.svg')",
        'maximize-button': "url('./images/maximize.svg')",
        'pokemon-logo': "url('./images/poke-logo.png')",
        'like-transp': "url('./images/like-transp.svg')",
        'like-red': "url('./images/like-red.svg')",
        'clear-button': "url('./images/clear-button.svg')",
        'compare-unchecked': "url('./images/unchecked-icon.svg')",
        'compare-checked': "url('./images/checked-icon.svg')",
      },
    },
  },
  plugins: [],
};
