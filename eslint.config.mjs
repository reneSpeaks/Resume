import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import astro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";


export default defineConfig([
  {
    files: ["**/*.js", "**/*.ts"],
    plugins: {
      "@typescript-eslint": ts,
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      ...ts.configs["eslint-recommended"].overrides[0].rules,
      ...ts.configs["recommended"].rules,
    },
  },
  {
    files: ["**/*.astro"],
    plugins: {
      astro: astro,
    },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
      },
    },
    rules: {
      ...astro.configs.recommended.rules,
    },
  },
]);