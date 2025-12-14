import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 커스텀 컬러 팔레트
      colors: {
        primary: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5', // Primary: Indigo-600
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
        secondary: {
          400: '#FBBF24', // Secondary: Amber-400
          500: '#F59E0B',
        },
        background: '#F9FAFB', // Gray-50
      },
      // Pretendard 폰트
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
      // 커스텀 애니메이션
      animation: {
        'bounce-slow': 'bounce 1.5s infinite',
        'pulse-slow': 'pulse 2s infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
