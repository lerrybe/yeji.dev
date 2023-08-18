/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 0 16px #ffb400',
        '4xl': '0 0 20px #ffb400',
        keyword: '0 0 12px #ffc600',
      },
      colors: {
        'normal-black': '#222222',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
        upAndDown: {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 0.6s ease-in-out 2',
        upAndDown: 'upAndDown 1s infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
