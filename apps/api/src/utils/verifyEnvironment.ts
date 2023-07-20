import dotenv from 'dotenv';

dotenv.config();

import { verifyEnvironment } from '@slekup/utils';

const newEnv = verifyEnvironment([
  'NODE_ENV',
  'DEBUG',
  'PORT',

  'API_URL_PROD',
  'API_URL_DEV',

  'STATIC_URL_PROD',
  'STATIC_URL_DEV',

  'WEBSITE_URL_DEV',
  'WEBSITE_URL_PROD',

  'MONGODB_URI_DEV',
  'MONGODB_URI_PROD',

  'CLOUDINARY_NAME',
  'CLOUDINARY_API_KEY',
  'CLOUDINARY_API_SECRET',

  'NOREPLY_HOST',
  'NOREPLY_PORT',
  'NOREPLY_EMAIL',
  'NOREPLY_PASS',

  'STRIPE_PUBLISHABLE_KEY',
  'STRIPE_SECRET_KEY',
  'WEBHOOK_SECRET',
]);

export default newEnv;
