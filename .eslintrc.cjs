module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'eslint-config-prettier',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'stylelint.config.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'react-hooks', 'prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all' }],
    '@typescript-eslint/return-await': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-return-await': 'off',
    'prettier/prettier': [
      'warn',
      {
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        useTabs: false,
        bracketSpacing: true,
        bracketSameLine: false,
        endOfLine: 'auto',
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true,
        arrowParens: 'avoid',
        quoteProps: 'as-needed',
        insertPragma: false
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
