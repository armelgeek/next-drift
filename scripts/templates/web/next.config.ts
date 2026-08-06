import { createNextConfig } from '@repo/next-config';
import path from 'path';

export default createNextConfig({
  transpilePackages: [],
  turbopack: {
    root: path.join(__dirname, '../../'),
  },
});
