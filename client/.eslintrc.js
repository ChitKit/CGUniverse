module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'no-unused-vars': 1,
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'default-param-last': 0,
    camelcase: 0,
    'no-multiple-empty-lines': 0,
    'no-extra-boolean-cast': 0,
    'no-nested-ternary': 0,
  },
};
