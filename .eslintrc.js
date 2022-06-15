module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  env: {
    node: true,
  },
  rules: {
    // Fixes false positives in vscode for types and interfaces. See answer from typescript-eslint: https://stackoverflow.com/a/63798664/3574212
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    // Fixed false-positives on TypeScript
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "prettier/prettier": "error",
  },
};
