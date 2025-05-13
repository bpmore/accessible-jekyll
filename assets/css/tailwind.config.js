module.exports = {
  content: [
    './_layouts/**/*.html',
    './_posts/**/*.{md,html}',
    './*.{html,md}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          700: '#1d4ed8', /* High contrast blue */
          800: '#1e40af',
        },
        gray: {
          900: '#111827', /* Dark background */
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};