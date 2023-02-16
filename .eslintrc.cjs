module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['simple-import-sort', 'import', 'jest', '@typescript-eslint', 'react'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        semi: false,
        singleQuote: true,
        jsxSingleQuote: true,
        arrowParens: 'avoid',
      },
    ],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
  },
}
