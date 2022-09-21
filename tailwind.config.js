/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      blur: {
        xs: '0.5px',
      },
      colors: {
        bground: '#fffffe',
        button: '#ffd803',
        headline: '#272343',
        btntext: '#272343',
        paraghraph: '#272343',
        darkBground: '#16161a',
        darkHeadline: '#fffffe',
        darkParaghraph: '#94a1b2',
        darkButton: '#7f5af0'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
