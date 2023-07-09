/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      violet: '#CEAFFA',
      mint: '#A3E8D3',
      sun: '#F9DF78',
      black: {
        DEFAULT: '#000000',
        100: '#0D0D0D',
      },
      white: {
        DEFAULT: '#FFFFFF',
        100: '#FFFDFA',
        200: '#F8F5F1',
      },
    },
    fontFamily: {
      accent: ['var(--font-uxum)'],
      sans: ['var(--font-inter)'],
    },
    extend: {
      maxWidth: {
        container: '75rem',
      },
    },
  },
  plugins: [],
};
