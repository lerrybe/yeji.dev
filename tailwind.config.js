/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: { '3xl': '0 0 16px #ffb400', '4xl': '0 0 20px #ffb400' },
      colors: {
        'normal-black': '#222222',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
