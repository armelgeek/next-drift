import { createNextConfig } from '@repo/next-config';
import path from 'path';

export default createNextConfig({
  transpilePackages: ['@repo/database', '@repo/auth'],
  turbopack: {
    root: path.join(__dirname, '../../'),
  },
});
