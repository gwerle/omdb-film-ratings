module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    mocha: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "semi": [2, "always"]
  }
}
