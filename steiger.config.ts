// Config file for the Steiger CLI, Linter for FSD (Feature-Sliced Development) projects
// https://github.com/feature-sliced/steiger
import fsd from '@feature-sliced/steiger-plugin';
import { defineConfig } from 'steiger';

export default defineConfig([
  ...fsd.configs.recommended,
  {
    files: ['./src/**'],
    rules: {
      'fsd/insignificant-slice': 'off',
    },
  },
]);
