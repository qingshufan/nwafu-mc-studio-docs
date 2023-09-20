import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
	base: "/",

	lang: "zh-CN",
	title: "西农MC工作室",
	description: "西农MC工作室文档",

	theme,

	plugins: [
		// docsearchPlugin({
		// 	appId: "VQH8FYTQ0W",
		// 	apiKey: "7e9c791ef7016c1d766fe3b190ce1bb0",
		// 	indexName: "nwafu-com",
		// }),
		searchProPlugin({
			indexContent: true,
			autoSuggestions: true,
			customFields: [],
		}),
	],
	// Enable it with pwa
	// shouldPrefetch: false,
});
