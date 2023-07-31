import { verifyEnvironment } from '@slekup/utils';

const newEnv = verifyEnvironment([
  'NODE_ENV',
  'DEBUG',

  'API_HTTP_PORT',
  'API_URL',
  'WEBSITE_URL',
  'DISCORD_WEBHOOK_URL',

  'MONGODB_URI',
]);

export default newEnv;
