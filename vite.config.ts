import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// const manifestForPlugin = {
// 	// registerType: "prompt",
// 	// includeAssests: ["favicon.ico", "apple-touc-icon.png", "masked-icon.svg"],
// 	// manifest: {
// 	// 	name: "React-vite-app",
// 	// 	short_name: "react-vite-app",
// 	// 	description: "I am a simple vite app",
// 	// 	icons: [
// 	// 		{
// 	// 			src: "/android-chrome-192x192.png",
// 	// 			sizes: "192x192",
// 	// 			type: "image/png",
// 	// 			purpose: "favicon",
// 	// 		},
// 	// 		{
// 	// 			src: "/android-chrome-512x512.png",
// 	// 			sizes: "512x512",
// 	// 			type: "image/png",
// 	// 			purpose: "favicon",
// 	// 		},
// 	// 		{
// 	// 			src: "/apple-touch-icon.png",
// 	// 			sizes: "180x180",
// 	// 			type: "image/png",
// 	// 			purpose: "apple touch icon",
// 	// 		},
// 	// 		{
// 	// 			src: "/maskable_icon.png",
// 	// 			sizes: "512x512",
// 	// 			type: "image/png",
// 	// 			purpose: "any maskable",
// 	// 		},
// 	// 	],
// 	// 	theme_color: "#181818",
// 	// 	background_color: "#e0cc3b",
// 	// 	display: "standalone",
// 	// 	scope: "/",
// 	// 	start_url: "/",
// 	// 	orientation: "portrait",
// 	// },
// };
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: "autoUpdate",
			includeAssets: [
				"apple-touch-icon.png",
				"android-chrome-512x512.png",
				"android-chrome-192x192.png",
				"favicon-32x32.png",
			],
			devOptions: {
				enabled: true,
			},
			manifest: {
				name: "first-pwa-test",
				short_name: "first-pwa-test",
				description: "hello world",
				icons: [
					{
						src: "/apple-touch-icon.png",
						sizes: "180x180",
						type: "image/png",
						purpose: "maskable",
					},
					{
						src: "/android-chrome-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "maskable",
					},
					{
						src: "/android-chrome-192x192.png",
						sizes: "192x192",
						type: "image/png",
						purpose: "any",
					},
					{
						src: "/favicon-32x32.png",
						sizes: "32x32",
						type: "image/png",
						purpose: "maskable",
					},
				],
				// icons: [
				// 	{
				// 		src: "/android-chrome-192x192.png",
				// 		sizes: "192x192",
				// 		type: "image/png",
				// 		purpose: "favicon",
				// 	},
				// 	{
				// 		src: "/android-chrome-512x512.png",
				// 		sizes: "512x512",
				// 		type: "image/png",
				// 		purpose: "favicon",
				// 	},
				// 	{
				// 		src: "/apple-touch-icon.png",
				// 		sizes: "180x180",
				// 		type: "image/png",
				// 		purpose: "apple touch icon",
				// 	},
				// 	{
				// 		src: "/maskable_icon.png",
				// 		sizes: "512x512",
				// 		type: "image/png",
				// 		purpose: "any maskable",
				// 	},
				// ],
				// theme_color: "#181818",
				// background_color: "#e0cc3b",
				// display: "standalone",
				// scope: "/",
				// start_url: "/",
				// orientation: "portrait",
			},
		}),
	],
});
