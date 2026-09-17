/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F0',      // Background
        pink: '#F48FB1',       // Primary accent
        chocolate: '#3B2525',  // Text / dark
        strawberry: '#E85D75', // CTA / price
        gold: '#D9A441',       // Best seller / bundle highlight
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 24px -8px rgba(59, 37, 37, 0.15)',
        softHover: '0 14px 32px -10px rgba(232, 93, 117, 0.35)',
      },
    },
  },
  plugins: [],
};
