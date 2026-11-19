/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mep: {
          dark: '#38AF9B',
          bg: '#E5EFEA',
          title: '#D269D2',
          cardTitle: '#12724C',
          body: '#545352',
          modalHeader: '#b1d3c6',
          cardBg: '#93BCB5',
        }
      }
    },
  },
  plugins: [],
}
