import { navbar } from "vuepress-theme-hope";

export default navbar([
	"/",
	{
		text: "指南",
		icon: "lightbulb",
		prefix: "/guide/",
		link: "/guide/",
	},
	{
		text: "教程",
		icon: "book",
		prefix: "/tutorial/",
		link: "/tutorial/",
	},
	{
		text: "计划",
		icon: "book",
		prefix: "/todos/",
		link: "/todos/",
	},
	{
		text: "链接",
		icon: "link",
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
]);
