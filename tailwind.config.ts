import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			backgroundSize: {
				'100%': '100% 100%',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			gridTemplateRows: {
				layout: '1fr auto',
			},
			'.vertical-lr': {
				writingMode: 'vertical-lr',
			},
		},
		colors: {
			primary: '#f1f1f1',
			secondary: '#0f172a',
		},
	},
	plugins: [],
};
export default config;
