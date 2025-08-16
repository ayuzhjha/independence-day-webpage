import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./hooks/**/*.{ts,tsx}",
		"./lib/**/*.{ts,tsx}",
		"./styles/**/*.{ts,tsx,css}",
	],
	// Tailwind v4 mostly works via CSS imports, but we can still define future options here
	future: {
		// Keep defaults
	},
	theme: {
		extend: {},
	},
	plugins: [],
};

export default config; 