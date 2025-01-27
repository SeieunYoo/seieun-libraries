import { resolve } from "node:path";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import onlyWarn from "eslint-plugin-only-warn";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginStorybook from "eslint-plugin-storybook";
import eslintPluginA11y from "eslint-plugin-jsx-a11y";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";

const project = resolve(process.cwd(), "tsconfig.json");

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
      onlyWarn,
      import: eslintPluginImport,
      storybook: eslintPluginStorybook,
      "jsx-a11y": eslintPluginA11y,
      prettier: eslintPluginPrettier,
      "simple-import-sort": eslintPluginSimpleImportSort,
    },
    rules: {
      eqeqeq: [
        "error",
        "always",
        {
          null: "ignore",
        },
      ],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: ["arrow-function", "function-declaration"],
        },
      ],
      "react/jsx-curly-brace-presence": [
        "error",
        {
          props: "never",
          children: "never",
        },
      ],
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          multiline: "last",
          shorthandFirst: true,
        },
      ],
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
          selector: "variable",
          leadingUnderscore: "allow",
        },
        {
          format: ["camelCase", "PascalCase"],
          selector: "function",
        },
        {
          format: ["PascalCase"],
          selector: "interface",
        },
        {
          format: ["PascalCase"],
          selector: "typeAlias",
        },
      ],
      "@typescript-eslint/no-empty-function": "warn",
      "import/no-duplicates": "error",
      "import/namespace": [
        "error",
        {
          allowComputed: true,
        },
      ],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "no-constant-condition": ["error", { checkLoops: false }],
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    settings: {
      "import/resolver": {
        typescript: { project },
      },
      react: {
        version: "detect",
      },
    },
  },

  {
    ignores: ["dist/**", "node_modules/**"],
  },
];
