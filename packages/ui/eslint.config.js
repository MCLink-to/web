import { config } from '@mclink/eslint-config/index.js';

export default [
  ...config,
  {
    ignores: ['.svelte-kit/**', 'dist/**']
  }
];
