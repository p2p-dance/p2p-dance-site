module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["xo-nextjs/space"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "jsx-quotes": [2, "prefer-double"],
  },
}
