import { defaultTheme, defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
	lang: "zh-CN",
	title: "西农MC工作室",
	description: "西农MC工作室文档",
	head: [["link", { rel: "icon", href: "/images/favicon.png" }]],
	plugins: [
		searchProPlugin({
			autoSuggestions: true,
			queryHistoryCount: 5,
		}),
	],
	theme: defaultTheme({
		home: "/",
		docsDir: "docs",
		logo: "/images/favicon.png",
		repo: "OrzMiku/nwafu-mc-studio-docs",
		repoLabel: "仓库",
		notFound: ["哦吼，页面走丢啦！", "我们何去何从？", "114514 PAGE NOT FOUND"],
		backToHome: "回到首页",
		navbar: [
			{
				text: "指南",
				link: "/guide/welcome.html",
			},
			{
				text: "素材库",
				link: "/materials/",
			},
			{
				text: "教程",
				children: [
					{
						text: "我的世界游玩指南",
						link: "/tutorial/minecraft_game_guide/",
						activeMatch: "^/tutorial/minecraft_game_guide/",
					},
				],
			},
			{
				text: "链接",
				children: [
					{
						text: "䙶大皮肤站",
						link: "https://skin.nwafu.com.cn",
					},
					{
						text: "我的世界官网",
						link: "https://www.minecraft.net/zh-hans",
					},
					{
						text: "中国Minecraft高校联盟",
						link: "https://www.mualliance.cn/",
					},
					{
						text: "MCBBS中文论坛",
						link: "https://www.mcbbs.net/",
					},
					{
						text: "MC(MOD)百科",
						link: "https://www.mcmod.cn/",
					},
					{
						text: "MC中文维基",
						link: "https://minecraft.fandom.com/zh/wiki/Minecraft_Wiki",
					},
				],
			},
		],
		sidebar: {
			"/tutorial/minecraft_game_guide": [
				{
					text: "我的世界游玩指南",
					link: "/tutorial/minecraft_game_guide/",
				},
				{
					text: "我的世界 Java 版下载教程",
					link: "/tutorial/minecraft_game_guide/download_game_java_edition.html",
				},
			],
		},
	}),
});
