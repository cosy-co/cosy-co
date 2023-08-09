import { Client } from '@cosy-co/api-client';

const api = new Client({
  apiUrl: process.env.API_URL,
});

export default api;
