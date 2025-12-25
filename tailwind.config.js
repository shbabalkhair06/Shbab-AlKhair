/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7FB069',
          dark: '#2D5016',
          light: '#A8D98A',
        },
        secondary: {
          DEFAULT: '#4ECDC4',
          dark: '#2A8A84',
        },
        accent: {
          DEFAULT: '#FFD700',
          dark: '#FFA500',
        },
      },
      fontFamily: {
        arabic: ['Cairo', 'Arial', 'sans-serif'],
        english: ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

