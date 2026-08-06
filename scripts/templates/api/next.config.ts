import { createNextConfig } from '@repo/next-config';

export default createNextConfig({
  transpilePackages: ['@repo/database', '@repo/auth'],
});
