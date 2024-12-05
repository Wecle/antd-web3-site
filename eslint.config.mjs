import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: {
    parserOptions: {
      project: true,
    },
  },
  rules: {
    'ts/array-type': 'off',
    'ts/consistent-type-definitions': 'off',

    'ts/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    'ts/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    'no-console': 'warn',
    'node/prefer-global/process': 'off',
  },
})
