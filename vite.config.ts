import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import adapter from "@sveltejs/adapter-static";

// const base = '/svelte-flowbite-boilerplate'
const base = '/svelte-flowbite-boilerplate'

export default defineConfig({
	resolve: {
		alias: {
			'$lib': path.resolve(import.meta.dirname, './src/lib')
		}
	},
	plugins: [
		tailwindcss(),
		sveltekit({

		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: false
		}),
		paths: {
			base
		}
	})]
});
