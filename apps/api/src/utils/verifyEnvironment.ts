import { verifyEnvironment } from '@slekup/utils';

const newEnv = verifyEnvironment([
  'NODE_ENV',
  'DEBUG',

  'API_HTTP_PORT',
  'API_URL',
  'WEBSITE_URL',

  'MONGODB_URI',
]);

export default newEnv;
