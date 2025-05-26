
export default {
  plugins: [
    require('postcss-nesting'), // 🔥 Add this before Tailwind
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}