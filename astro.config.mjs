// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Valtiare',
			social: {
				github: 'https://github.com/mattglbrt/valtiare',
			},
			sidebar: [
				{
					label: 'Cosmology',
					autogenerate: { directory: 'cosmology' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
