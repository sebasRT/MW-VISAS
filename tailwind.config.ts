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
        'primary': {
          '50': '#f4f7fb',
          '100': '#e7eff7',
          '200': '#cadced',
          '300': '#9bbfde',
          '400': '#669dca',
          '500': '#4281b5',
          '600': '#316798',
          '700': '#264d73',
          '800': '#254767',
          '900': '#233d57',
          '950': '#182739',
        },
        'red': {
          '50': '#fff0f0',
          '100': '#ffdddd',
          '200': '#ffc1c1',
          '300': '#ff9595',
          '400': '#ff5959',
          '500': '#ff2626',
          '600': '#fc0606',
          '700': '#e60000',
          '800': '#af0505',
          '900': '#900c0c',
          '950': '#500000',
        },
        'grey': '#e6e6e6',
        'whitesmoke': '#F5F5F5',
      },
      boxShadow: {
        'full': ' 0 0 10px'
      },
      backgroundImage:{
        'wallStreet': 'url("https://res.cloudinary.com/deyofhj4o/image/upload/v1705708756/mw-visas/y6ho3q1yctyz96uvuqwx.jpg")'
      }
      // keyframes:{
      //   slide: {
      //     0%
      //   }
      // }
    },
  },
  plugins: [],
}
export default config
