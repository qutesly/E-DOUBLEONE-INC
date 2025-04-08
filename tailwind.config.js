/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(2rem)'},
          '100%': { opacity: '1', transform: 'translateY(0)'},
          scaleLoop: {
            '0%, 100%': { transform: 'scale(0.1)' },
            '50%': { transform: 'scale(0.5)' },
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        scaleLoop: 'scaleLoop 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
