/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'kodo-mono':["Kode Mono", 'monospace']
      }
    },
  },
  plugins: [],
}
