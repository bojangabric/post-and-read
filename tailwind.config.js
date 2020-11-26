const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: ['./components/**/*.js', './pages/**/*.{js,mdx}', './layouts/**/*.js', './next.config.js']
  },
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        gray: colors.coolGray
      },
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
      },
      transformOrigin: {
        0: '0%'
      },
      zIndex: {
        '-1': '-1',
        '-2': '-2'
      }
    }
  },
  variants: {
    extend: {
      translate: ['group-hover']
    }
  },
  plugins: [require('@tailwindcss/custom-forms')]
};
