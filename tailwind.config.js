/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#264d73',
        'blue-dark': '#1c3044',
        'blue-light': '#79a6d2',
        'red-primary': '#e60000',
        'red-dark': '#',
        'red-light': '#',
        'grey': '#e6e6e6',
        'whitesmoke': '#F5F5F5',
      },
      boxShadow: {
        'full': ' 0 0 10px'
      }
    },
  },
  plugins: [],
}