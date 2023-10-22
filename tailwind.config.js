/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./page.html", "../build/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}

