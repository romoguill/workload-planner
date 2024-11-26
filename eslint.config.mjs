import globals from "globals";
import pluginJs from "@eslint/js";
import nodePlugin from "eslint-plugin-node";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  { plugins: { node: nodePlugin } },
  {
    rules: {
      "no-console": "warn",
      "node/no-process-env": "error",
    },
  },
];
