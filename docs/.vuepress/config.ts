import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
	lang: "zh-CN",
	title: "西农MC工作室",
	description: "西农MC工作室文档",
	head: [["link", { rel: "icon", href: "/images/favicon.png" }]],
	theme: defaultTheme({
		home: "/",
		docsDir: "docs",
		logo: "/images/favicon.png",
		repo: "OrzMiku/nwafu-mc-studio-docs",
		repoLabel: "仓库",
		navbar: [
			{
				text: "指南",
				link: "/guide/welcome.html",
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
		notFound: ["哦吼，页面走丢啦！", "我们何去何从？", "114514 PAGE NOT FOUND"],
		backToHome: "回到首页",
	}),
});
