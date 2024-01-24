module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'stylex'],
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',

    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',

    'plugin:@next/next/recommended'
  ],
  rules: {
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'prettier/prettier': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'no-shadow': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'no-restricted-syntax': ['error', 'ForInStatement', 'WithStatement'],
    'react/jsx-no-bind': 0,
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'class-methods-use-this': 0,
    'no-param-reassign': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    "stylex/valid-styles": "error"
  }
};
