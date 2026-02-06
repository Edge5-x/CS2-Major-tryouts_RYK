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
        cs2: {
          orange: '#EB6B09',
          'orange-dark': '#D35E08',
          'orange-light': '#F4943E',
          dark: '#0C0C0C',
          'dark-lighter': '#141414',
          'dark-card': '#1A1A1A',
          'dark-elevated': '#222222',
          gray: '#8B8B8B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'slide-diagonal': 'slide-diagonal 0.6s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(235, 107, 9, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(235, 107, 9, 0.5)' },
        },
        'slide-diagonal': {
          '0%': { transform: 'translateX(-30px) translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0) translateY(0)', opacity: '1' },
        },
      },
      skew: {
        '25': '25deg',
      },
    },
  },
  plugins: [],
}
export default config
