// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "BNL Docs",
	tagline: "High quality stuff",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://docs.boris.foo",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	scripts: [
		{
			src: "https://analytics.boris.foo/script.js",
			"data-website-id": "9416d243-64b5-4bc4-a476-1cdfd44fffe0",
		},
	],

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/borisnliscool/docs.boris.foo/tree/main/",
					routeBasePath: "/",
				},
				blog: false,
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: "img/social-card.png",
			navbar: {
				title: "Documentation",
				logo: {
					alt: "BNL Development Logo",
					src: "img/logo-transparent.png",
				},
				items: [
					{
						href: "https://boris.foo/discord",
						label: "Discord",
						position: "right",
					},
					{
						href: "https://boris.foo/",
						label: "Website",
						position: "right",
					},
					{
						href: "https://github.com/borisnliscool/",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "light",
				links: [
					{
						title: "Community",
						items: [
							{
								href: "https://boris.foo/discord",
								label: "Discord",
							},
							{
								href: "https://github.com/borisnliscool/",
								label: "GitHub",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} BNL Docs, boris.foo`,
			},
			prism: {
				theme: require("prism-react-renderer/themes/vsdark"),
                additionalLanguages: ["lua"]
			},
			colorMode: {
				defaultMode: "dark",
				respectPrefersColorScheme: true,
			},
		}),
};

module.exports = config;
