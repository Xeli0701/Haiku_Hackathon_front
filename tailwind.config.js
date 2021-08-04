module.exports = {
  purge: [
    "./public/**/*.html",
    "./pages/*.{js,jsx,ts,tsx}", // srcディレクトリにあるjs,jsx,ts,tsxを監視して軽量化してくれる
    "./components/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
  },
  plugins: [],
}
