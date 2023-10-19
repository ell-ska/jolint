import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      neutral: {
        100: '#FFFFFF',
        200: '#F1F5F9',
        300: '#E2E8F0',
        400: '#CBD5E1',
        600: '#94A3B8',
        700: '#94A3B8',
        800: '#475569',
        900: '#0F172A',
      },
      blue: {
        dull: '#2C3386',
        bright: '#0015CE',
        light: '#91BBE7',
      },
      green: '#7ACD6D',
      orange: '#F4770A',
      red: '#D3383B',
    },
    fontFamily: {
      body: 'var(--kumbh-sans)',
      heading: 'var(--space-grotesk)',
    },
  },
  plugins: [],
}
export default config
