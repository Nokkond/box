module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    "prefer-destructuring": ["error", {"object": true, "array": false}],
    "enforceForRenamedProperties": "off",
    "import/prefer-default-export": "off",
    "object-shorthand": 0,
    'max-len': ["error", { "code": 150000 }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
