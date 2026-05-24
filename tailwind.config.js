/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '8.5': '2.125rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '25': '6.25rem',
      },
      fontFamily: {
        sans: ['Satoshi', 'Cabinet Grotesk', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'serif']
      },
      colors: {
        ink: '#0C1117',
        blue: '#0A2540',
        'blue-m': '#0E3A62',
        sky: '#1A6BFF',
        'sky-l': '#4D8FFF',
        'sky-pale': '#EBF2FF',
        lime: '#C8F135',
        'lime-d': '#A8D020',
        mint: '#00C98A',
        'mint-d': '#00A872',
        'mint-l': 'rgba(0,201,138,.10)',
        amber: '#F0A500',
        'amber-l': '#FAEEDA',
        off: '#F7F8FC',
        warm: '#EEF1F8',
        cream: '#F7F5EF',
        muted: '#5C6478',
        border: 'rgba(12,17,23,0.08)',
        red: '#DC2626',
        purple: '#7C3AED',
        orange: '#EA6C1E'
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        up: 'up 0.9s ease both',
        blink: 'blink 2s infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        up: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.2 }
        }
      }
    }
  },
  plugins: []
}
