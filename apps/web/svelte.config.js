import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // outDir: 'build',
    adapter: adapter({
      out: 'build',
      precompress: false,
      envPrefix: '',
      polyfill: true,
    }),
  },
};

export default config;
