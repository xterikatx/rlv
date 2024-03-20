module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  "ignorePatterns": [
    "**/*/*.js",
    "*.js",
    "*.svg",
    "*.json",
    "*.png",
    "**/node_modules/**",
    "package.json",
    "package-lock.json",
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "import",
    "react",
    "react-native",
    "prettier",
    "react-hooks",
    "@typescript-eslint",
    "promise",
    "unused-imports",
  ],
  "rules": {
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    "max-len": ["error", 150],
    "@typescript-eslint/ban-ts-comment": 2,
    "@typescript-eslint/no-explicit-any": 1,
    "react-native/no-unused-styles": 2,
    "react-native/no-inline-styles": 1,
    "@typescript-eslint/no-empty-interface": 1,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 0,
    "prefer-destructuring": 2,
    "no-nested-ternary": 2,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "import/no-unused-modules": "error",
  },
}
