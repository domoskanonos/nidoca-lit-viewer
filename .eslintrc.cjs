module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    srcType: "module",
  },
  plugins: ["@typescript-eslint", "eslint-plugin-tsdoc"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "@typescript-eslint/no-inferrable-types": "off",
    "tsdoc/syntax": "error",
  },
};
