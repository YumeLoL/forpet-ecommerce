const defaultTheme = require('tailwindcss/defaultTheme')
const withMT = require('@material-tailwind/react/utils/withMT')

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#00B1B9',
          darker: '#007483',
        },
        secondary: '#000000',
        neutral: {
          100: '#f7fafc',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
})
