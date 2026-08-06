import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/design-system/**/*.{js,ts,jsx,tsx}',
  ],
};

export default config;
