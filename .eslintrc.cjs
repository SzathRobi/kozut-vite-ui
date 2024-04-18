module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'prettier',
    'simple-import-sort',
    'notice',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'no-console': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  overrides: [
    {
      files: ['**/__mocks__/*.js'],
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: ['*.test.{ts,tsx}'],
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
