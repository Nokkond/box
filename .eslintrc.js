module.exports = {
  root: false,
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
    "arrow-body-style": ["error", "as-needed"],
    "prefer-destructuring": ["error", {"object": false, "array": false}],
    "enforceForRenamedProperties": "off",
    "import/prefer-default-export": "off",
    "object-shorthand": 0,
    'max-len': ["error", { "code": 150000 }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
