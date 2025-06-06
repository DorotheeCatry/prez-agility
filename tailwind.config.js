/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e50914',
          light: '#f8323c',
          dark: '#b30710',
        },
        secondary: {
          DEFAULT: '#ffbe0b',
          light: '#ffd55a',
          dark: '#d9a203',
        },
        accent: {
          DEFAULT: '#1e3a8a',
          light: '#3b82f6',
          dark: '#1e3a8a',
        },
        surface: '#1e1e1e',
        background: '#121212',
        text: 'var(--color-text)',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};