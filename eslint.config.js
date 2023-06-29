import ii from '@importantimport/eslint-config'

export default [
  ...ii,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
      },
    },
  },
  {
    ignores: ['**/README.md/*.ts'],
  },
]
