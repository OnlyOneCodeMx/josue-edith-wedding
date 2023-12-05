/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        courgette: ['Courgette', 'cursive', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        heartBeat: {
          '0%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1.4)' },
          '30%': { transform: 'scale(1)' },
          '45%': { transform: 'scale(1.4)' },
          '75%': { transform: 'scale(1)' },
        },
      },
      animation: {
        heartBeat: 'heartBeat 2s ease-in-out infinite',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
