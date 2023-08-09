import { verifyEnvironment } from '@slekup/utils';

const newEnv = verifyEnvironment([
  'NODE_ENV',
  'DEBUG',

  'API_HTTP_PORT',
  'PUBLIC_API_URL',
  'PUBLIC_WEBSITE_URL',
  'DISCORD_WEBHOOK_URL',

  'MONGODB_URI',
]);

export default newEnv;
