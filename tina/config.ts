import { defineConfig } from 'tinacms';
import { schema } from './schema';
const branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || process.env.HEAD || '';

export default defineConfig({
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  schema,
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
});
