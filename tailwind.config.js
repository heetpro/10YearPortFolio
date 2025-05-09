/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: 'var(--main)',
        pink: 'var(--pink)'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  // Add custom CSS to hide scrollbars completely
  experimental: {
    optimizeUniversalDefaults: true,
  },
  layer: {
    utilities: {
      '.scrollbar-hide': {
        /* IE and Edge */
        '-ms-overflow-style': 'none',
        /* Firefox */
        'scrollbar-width': 'none',
        /* Safari and Chrome */
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }
    }
  }
}; 