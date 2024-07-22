/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      height: {
        'mobile-header': '4.25rem',
        'desktop-header': '5.625rem',
      },
      spacing: {
        'mobile-vertical': '0.75rem',
        'mobile-horizontal': '1rem',
        'desktop-vertical': '1.25rem',
        'desktop-horizontal': '2.25rem',
        'desktop-margin-horizontal': '1rem',
      },
    },
  },
  plugins: [],
};

