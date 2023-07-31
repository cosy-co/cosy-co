import { Client } from '@cosy-co/api-client';

const api = new Client({
  apiUrl: 'http://localhost:5000/api',
});

export default api;
