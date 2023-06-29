/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#000000',
        primaryBg: '#FEAF00',
        secondary: '#6C6C6C',
        secondaryBg: '#292E36',
        third: '#FEAF00',
        stroke: '#F8D442',
        hover: '#FEAF00',
      },
    },
  },
  plugins: [],
}
