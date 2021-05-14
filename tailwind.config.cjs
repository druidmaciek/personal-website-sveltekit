const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
	mode: "jit",
	purge: {
		content: [
			"./src/**/*.{html,js,svelte,ts}",
		],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			],
		},
		safelist: [/^svelte-[\d\w]+$/],
	},
	theme: {
		fontFamily: {
			sans: ['strawford', ...defaultTheme.fontFamily.sans],
			bold: ['strawford', ...defaultTheme.fontFamily.serif],
		},
		extend: {
			fontFamily: {
				regular: ['strawford', ...defaultTheme.fontFamily.sans],
				bold: ['strawford', ...defaultTheme.fontFamily.serif],
			},
			colors: {
				primary: colors.cyan,
				gray: colors.coolGray,
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
	],
};
