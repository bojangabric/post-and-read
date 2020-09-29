const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: ['./components/**/*.js', './pages/**/*.{js,mdx}', './layouts/**/*.js', './next.config.js']
  },
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 0.3s linear'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')]
};
