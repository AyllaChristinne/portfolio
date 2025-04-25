/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  defaultTheme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif', 'Arial'],
        
      },
    },
  },
}