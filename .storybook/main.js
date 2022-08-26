module.exports = {
	"stories": [
		"../stories/**/*.stories.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)",
		"../stories/**/**/*.stories.mdx",
		"../stories/**/**/*.stories.@(js|jsx|ts|tsx)"
	],
	"addons": [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions"
	],
	"framework": "@storybook/html",
	features: {
		storyStoreV7: true,
	},
	core: {
		builder: "webpack5",
	},
};
