import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#43CED6',
          foreground: '#ffffff',
        },
        foreground: '#22222A',
        background: '#ffffff',
        border: '#e5e7eb',
        muted: {
          DEFAULT: '#f3f4f6',
          foreground: '#6b7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
