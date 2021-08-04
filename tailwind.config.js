module.exports = {
  purge: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}", // srcディレクトリにあるjs,jsx,ts,tsxを監視して軽量化してくれる
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
