const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  presets: [require('@vercel/examples-ui/tailwind')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@vercel/examples-ui/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'basis': ['"Basis Grotesque Pro"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
}
