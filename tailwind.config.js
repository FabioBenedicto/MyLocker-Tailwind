/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/Screens/**/*.tsx', './src/components/*.tsx'],
  theme: {
    extend: {},
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      gray: '#666666',
      blue: '#0085FF'
    },
    fontFamily: {
      'roboto-regular': 'Roboto_400Regular',
      'roboto-medium': 'Roboto_500Medium',
      'roboto-bold': 'Roboto_700Bold'
    },
    fontSize: {
      sm: 16,
      md: 20,
      teste: 25,
      lg: 30
    }
  },
  plugins: []
}
