/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EBF4',
          100: '#C1D0E6',
          200: '#9BB3D7',
          300: '#7596C8',
          400: '#5A7EBC',
          500: '#3F67B0',
          600: '#33548D',
          700: '#26406A',
          800: '#1A2D47',
          900: '#0A2463',
        },
        secondary: {
          50: '#E7F6FA',
          100: '#C3E9F3',
          200: '#9DDBEB',
          300: '#77CDE3',
          400: '#5EC2DD',
          500: '#44B7D7',
          600: '#3996AF',
          700: '#2D7487',
          800: '#21535F',
          900: '#147D9D',
        },
        accent: {
          50: '#FFEDE7',
          100: '#FFD3C3',
          200: '#FFB69F',
          300: '#FF997B',
          400: '#FF8662',
          500: '#FF784F',
          600: '#CC603F',
          700: '#99482F',
          800: '#66301F',
          900: '#33180F',
        },
        success: {
          500: '#10B981',
          600: '#059669',
        },
        warning: {
          500: '#F59E0B',
          600: '#D97706',
        },
        error: {
          500: '#EF4444',
          600: '#DC2626',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: [
          'SF Pro Display',
          'Segoe UI',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};