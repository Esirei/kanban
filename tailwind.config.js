const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
    './lang/**/*.{json,php}',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    ({ addBase, theme }) => {
      addBase({
        ':root': {
          '--scrollbar-thumb-color': theme('scrollbar.thumb-color', 'lightgray'),
          '--scrollbar-track-color': theme('scrollbar.track-color', 'transparent'),
          '--scrollbar-border-color': theme('scrollbar.border-color', '#FFF'),
          '--scrollbar-thumb-color-hover': theme('scrollbar.thumb-color-hover', 'gray'),
        },

        '*': {
          scrollbarWidth: theme('scrollbar.moz-width', 'thin'),
          scrollbarColor: 'var(--scrollbar-thumb-color) var(--scrollbar-track-color)',
        },

        '::-webkit-scrollbar': {
          width: theme('scrollbar.width', '12px'),
          height: theme('scrollbar.height', '12px'),
        },

        '::-webkit-scrollbar-thumb': {
          backgroundColor: 'var(--scrollbar-thumb-color)',
          borderRadius: theme('scrollbar.radius', '12px'),
          border: '3px solid var(--scrollbar-border-color)',
          '&:hover': {
            backgroundColor: 'var(--scrollbar-thumb-color-hover)',
          },
        },

        '::-webkit-scrollbar-track': {
          background: 'var(--scrollbar-track-color)',
        },
      });
    },
  ],
};
