import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
        'manrope': ['"Manrope"', 'sans-serif'],
        'epilogue': ['"Epilogue"', 'sans-serif'],
        'serif': ['"Noto Serif"', 'serif'],
        'sans': ['"Noto Sans"', 'sans-serif'],
        'display': ['"Plus Jakarta Sans"', 'sans-serif'], // Default fallback
      },
      colors: {
        'surface-light': '#ffffff',
        'surface-dark': '#1a2622',
      }
    },
  },
  plugins: [
    forms,
    containerQueries,
  ],
}