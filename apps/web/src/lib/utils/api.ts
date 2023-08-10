import { Client } from '@cosy-co/api-client';

// eslint-disable-next-line import/no-unresolved
import { env } from '$env/dynamic/public';

const api = new Client({
  apiUrl: env.PUBLIC_API_URL,
});

export default api;
