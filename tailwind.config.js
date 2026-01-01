/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0657f9',
        secondary: '#4F46E5',
        background: {
          light: '#f5f6f8',
          dark: '#0f1623'
        },
        text: {
          main: '#111318',
          sub: '#5f6e8c'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif']
      },
      borderRadius: {
        'DEFAULT': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '2.5rem'
      }
    },
  },
  plugins: [
    forms,
    containerQueries,
  ],
}
