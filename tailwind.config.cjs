/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			clipPath: {
				square: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
			},
			fontFamily: {
				'sans': ['Poppins', 'sans-serif']
			},
			colors: {
				'night': '#0B0205',
				'ebony-clay': '#2C1B47',
				'dark-lavender': '#724C9D',
				'languid-lavender': '#DCCAE9',
				'trendy-pink': '#9356A0'
			}
		},
	},
	plugins: [
		require('tailwind-clip-path')
	],
}
