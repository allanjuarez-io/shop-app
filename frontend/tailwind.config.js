/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        fill: 'repeat(auto-fill, minmax(256px, 384px))',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
