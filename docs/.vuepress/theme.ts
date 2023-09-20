import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
	hostname: "https://docs.nwafu.com.cn",

	iconAssets: "fontawesome-with-brands",

	logo: "/favicon.ico",

	repo: "orzmiku/nwafu-mc-studio-docs",

	docsDir: "docs",

	// navbar
	navbar,

	// sidebar
	sidebar,

	footer: "默认页脚",

	displayFooter: true,

	encrypt: {
		config: {
			"/demo/encrypt.html": ["1234"],
		},
	},

	// page meta
	metaLocales: {
		editLink: "在 GitHub 上编辑此页",
	},

	plugins: {
		mdEnhance: {
			imgLazyload: true,
			imgSize: true,
			katex: true,
			mermaid: true,
			sub: true,
			sup: true,
			tabs: true,
			vPre: true,
		},

		// uncomment these if you want a pwa
		// pwa: {
		//   favicon: "/favicon.ico",
		//   cacheHTML: true,
		//   cachePic: true,
		//   appendBase: true,
		//   apple: {
		//     icon: "/assets/icon/apple-icon-152.png",
		//     statusBarColor: "black",
		//   },
		//   msTile: {
		//     image: "/assets/icon/ms-icon-144.png",
		//     color: "#ffffff",
		//   },
		//   manifest: {
		//     icons: [
		//       {
		//         src: "/assets/icon/chrome-mask-512.png",
		//         sizes: "512x512",
		//         purpose: "maskable",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-mask-192.png",
		//         sizes: "192x192",
		//         purpose: "maskable",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-512.png",
		//         sizes: "512x512",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-192.png",
		//         sizes: "192x192",
		//         type: "image/png",
		//       },
		//     ],
		//     shortcuts: [
		//       {
		//         name: "Demo",
		//         short_name: "Demo",
		//         url: "/demo/",
		//         icons: [
		//           {
		//             src: "/assets/icon/guide-maskable.png",
		//             sizes: "192x192",
		//             purpose: "maskable",
		//             type: "image/png",
		//           },
		//         ],
		//       },
		//     ],
		//   },
		// },
	},
});
