import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
export default config
