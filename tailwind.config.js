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
        'primary-dark': '#0546d9',
        secondary: '#4F46E5',
        background: {
          light: '#f5f6f8',
          dark: '#0f1623'
        },
        surface: {
          light: '#ffffff',
          dark: '#1a1f2e'
        },
        border: {
          light: '#e5e7eb',
          dark: '#374151'
        },
        text: {
          main: '#111318',
          'main-light': '#111318',
          sub: '#5f6e8c',
          'sub-light': '#6b7280'
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
