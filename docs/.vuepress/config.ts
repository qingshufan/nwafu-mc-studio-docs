import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import theme from "./theme.js";

export default defineUserConfig({
	base: "/",

	lang: "zh-CN",
	title: "西农MC工作室",
	description: "西农MC工作室文档",

	theme,

	plugins: [
		docsearchPlugin({
			appId: "VQH8FYTQ0W",
			apiKey: "7e9c791ef7016c1d766fe3b190ce1bb0",
			indexName: "nwafu-com",
		}),
	],
	// Enable it with pwa
	// shouldPrefetch: false,
});
