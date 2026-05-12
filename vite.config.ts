import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {imageToWebpPlugin} from "vite-plugin-image-to-webp";
import * as path from "node:path";


// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		imageToWebpPlugin({
			imageFormats: ["jpg", "jpeg", "png"],
			webpQuality: {},
			destinationFolder: "dist"
		})
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src")
		}
	}
});
