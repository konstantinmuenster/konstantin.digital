/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#FFFFFF',
      violet: '#CEAFFA',
      mint: '#A3E8D3',
      sun: '#F9DF78',
      twitter: '#1D9BF0',
      black: {
        DEFAULT: '#121212',
        50: '#fafaf9',
        100: '#f5f5f4',
        200: '#f0eeee',
        300: '#d6d3d1',
        400: '#a8a29e',
        500: '#78716c',
        600: '#57534e',
        700: '#44403c',
        800: '#292524',
        900: '#1c1917',
        950: '#0c0a09',
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
      animation: {
        'scrolling-container': 'scrolling-container 30000ms linear infinite',
      },
      keyframes: {
        'scrolling-container': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      typography: ({ theme }) => ({
        violet: {
          css: {
            '--tw-prose-counters': theme('colors.violet'),
            '--tw-prose-bullets': theme('colors.violet'),
            '--tw-prose-quote-borders': theme('colors.violet'),
            '--tw-prose-invert-links': theme('colors.violet'),
            '--tw-prose-invert-counters': theme('colors.violet'),
            '--tw-prose-invert-bullets': theme('colors.violet'),
            '--tw-prose-invert-quote-borders': theme('colors.violet'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
