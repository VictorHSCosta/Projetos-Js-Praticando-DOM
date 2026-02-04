import stylistic from "@stylistic/eslint-plugin";

export default [
  {
    files: ["**/*.js"],
    plugins: {
      stylistic,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
      },
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-undef": "error",
      "stylistic/indent": ["error", 2, { SwitchCase: 1 }],
      "stylistic/quotes": ["error", "double", { avoidEscape: true }],
      "stylistic/semi": ["error", "always"],
      "stylistic/comma-spacing": ["error", { before: false, after: true }],
      "stylistic/object-curly-spacing": ["error", "always"],
      "stylistic/keyword-spacing": ["error", { before: true, after: true }],
      "stylistic/space-before-function-paren": [
        "error",
        {
          anonymous: "always",
          named: "never",
          asyncArrow: "always",
        },
      ],
      "stylistic/space-infix-ops": "error",
      "stylistic/no-multi-spaces": "error",
      "stylistic/eol-last": ["error", "always"],
    },
  },
  {
    files: ["vite.config.js"],
    languageOptions: {
      globals: {
        __dirname: "readonly",
      },
    },
  },
];
