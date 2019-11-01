module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier-react"
    "plugin:jest/recommended"
  ],
  plugins: ["react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  }
};
