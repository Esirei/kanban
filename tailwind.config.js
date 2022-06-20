const defaultTheme = require('tailwindcss/defaultTheme');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

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
    ({ addBase, theme, matchUtilities }) => {
      addBase({
        '*': {
          '--scrollbar-thumb-color': theme('scrollbar.thumb-color', 'lightgray'),
          '--scrollbar-track-color': theme('scrollbar.track-color', 'transparent'),
          '--scrollbar-border-color': theme('scrollbar.border-color', '#FFF'),

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
            backgroundColor: theme('scrollbar.thumb-color-hover', 'gray'),
          },
        },

        '::-webkit-scrollbar-track': {
          background: 'var(--scrollbar-track-color)',
        },
      });

      const colors = flattenColorPalette(theme('colors'));

      matchUtilities(
        { 'scrollbar-thumb': value => ({ '--scrollbar-thumb-color': value }) },
        { values: colors, type: 'color' },
      );

      matchUtilities(
        {
          'scrollbar-thumb-hover': value => ({
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: value,
            },
          }),
        },
        { values: colors, type: 'color' },
      );

      matchUtilities(
        { 'scrollbar-border': value => ({ '--scrollbar-border-color': value }) },
        { values: colors, type: 'color' },
      );

      matchUtilities(
        { 'scrollbar-track': value => ({ '--scrollbar-track-color': value }) },
        { values: colors, type: 'color' },
      );
    },
  ],
};
