/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        secondary: '#FF7F57',
        accent: '#00D4FF',
        dark: '#001B44',
      },
    },
  },
  plugins: [],
};