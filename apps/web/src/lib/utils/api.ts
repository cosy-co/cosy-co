import { Client } from '@cosy-co/api-client';

// eslint-disable-next-line import/no-unresolved
import { PUBLIC_API_URL } from '$env/static/public';

const api = new Client({
  apiUrl: PUBLIC_API_URL,
});

export default api;
