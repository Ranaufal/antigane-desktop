/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors:{
      'primary' : '#00211e',
      'secondary' : '#001413',
      'accent' : '#009c8d',
      'accent-50' : '#009c8d78',

      'transparent' : 'transparent',
      'dark' : '#000',
      'white' : '#fff',
      'red' : '#FFA07A',
      'blue' : '#0000FF',
      'grey' : '#808080'
    },
  },
  plugins: [],
}
