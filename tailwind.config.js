/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			animation: {
				tilt: "tilt 3s infinite linear",
			},
			keyframes: {
				tilt: {
					"0%, 50%, 100%": {
						transform: "rotate(0deg)",
					},
					"25%": {
						transform: "rotate(5deg)",
					},
					"75%": {
						transform: "rotate(-5deg)",
					},
				},
			},
		},
	},
	plugins: [],
};
