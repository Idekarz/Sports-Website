/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium purple color palette with high contrast
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#A78BFA', // Light Purple
          500: '#8b5cf6',
          600: '#7C3AED', // Neon Purple
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4C1D95', // Deep Purple
          950: '#2e1065',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#C084FC', // Accent Glow
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0F0F1A', // Dark Background
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Poppins', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-md': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'premium': '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.15)',
        'premium-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 20px rgba(124, 58, 237, 0.4)', // Neon Purple Glow
        'glow-lg': '0 0 40px rgba(124, 58, 237, 0.5)',
        'purple-glow': '0 0 25px rgba(192, 132, 252, 0.4)', // Accent Glow
      },
    },
  },
  plugins: [],
}