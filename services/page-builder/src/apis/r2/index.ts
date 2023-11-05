import { S3Client } from '@aws-sdk/client-s3';

const CF_ACCOUNT_ID = process.env.NEXT_PUBLIC_CF_ACCOUNT_ID ?? '';
const CF_ACCESS_KEY_ID = process.env.NEXT_PUBLIC_CF_ACCESS_KEY_ID ?? '';
const CF_SECRET_ACCESS_KEY = process.env.NEXT_PUBLIC_CF_SECRET_ACCESS_KEY ?? '';

export const R2_BASE_URL = `https://${CF_ACCOUNT_ID}.r2.cloudflarestorage.com`;

export const r2Instance = new S3Client({
  region: 'auto',
  endpoint: R2_BASE_URL,
  credentials: {
    accessKeyId: CF_ACCESS_KEY_ID,
    secretAccessKey: CF_SECRET_ACCESS_KEY,
  },
})
