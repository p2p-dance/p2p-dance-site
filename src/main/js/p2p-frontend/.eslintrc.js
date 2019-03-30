module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["xo/esnext", "xo-nextjs/space"],
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
  rules: {},
}
