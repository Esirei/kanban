module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
  },

  plugins: ['import'],

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended', // Prettier should be last
  ],

  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './resources/js'],
          ['~', './resources/js'],
          ['~images', './resources/images'],
        ],
        extensions: ['.vue'],
      },
    },
  },

  rules: {
    'import/extensions': [2, { vue: 'always' }],
    'tailwindcss/classnames-order': 0,
    'tailwindcss/no-custom-classname': 0,
    'vue/multi-word-component-names': 0,
    'vue/require-default-prop': 0,
    'vue/require-prop-types': 0,
  },

  globals: {
    route: false, // ignore ziggy's route not defined error
  },

  overrides: [
    {
      files: ['*.{ts,tsx}'],

      parser: '@typescript-eslint/parser',

      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },

      plugins: ['@typescript-eslint'],

      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      rules: {
        'no-unused-vars': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
      },
    },
  ],
};
