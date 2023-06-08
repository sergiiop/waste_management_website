/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#0f0',
				secondary: '#00f',
				white: '#fff',
			},
			fontFamily: {
				sans: ['Gotham SSm A, sans-serif']
			},
		},
	},
	plugins: [],
}
