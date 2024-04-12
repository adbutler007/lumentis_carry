import globals from "globals";
import pluginJs from "@eslint/js";
import parser from '@typescript-eslint/parser';
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import eslintPlugin from '@typescript-eslint/eslint-plugin';

export default {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  // Additional configuration...
};