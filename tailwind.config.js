/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#0ea5e9',
        'secondary': '#7c3aed',
        'dark': '#0f0f0f',
        'darker': '#050505',
        'light': '#f9fafb',
        'glass': 'rgba(15, 15, 15, 0.7)',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { 'text-shadow': '0 0 5px #0ea5e9, 0 0 10px #0ea5e9' },
          '100%': { 'text-shadow': '0 0 10px #7c3aed, 0 0 20px #7c3aed' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};