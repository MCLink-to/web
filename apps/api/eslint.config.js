import { config } from '@mclink/eslint-config/index.js';

export default [
  ...config,
  {
    ignores: ['dist/*']
  }
];
