/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: '#fff',
          foreground: '#000',
          primary: '#09AACD'
        }
      },
      dark: {
        colors: {
          background: '#000',
          foreground: '#fff',
          primary: '#09AACD'
        }
      }
    }
  })],
}
