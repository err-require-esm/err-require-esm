import ii from '@importantimport/eslint-config'

export default [
  ...ii,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: ['./packages/*/tsconfig.json', './packages/*/tsconfig.node.json'],
      },
    },
  },
  {
    ignores: ['**/README.md/*.ts'],
  },
]
