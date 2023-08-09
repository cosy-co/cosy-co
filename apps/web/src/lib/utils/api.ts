import { Client } from '@cosy-co/api-client';

import { PUBLIC_API_URL } from '$env/static/public';

const api = new Client({
  apiUrl: PUBLIC_API_URL,
});

export default api;
