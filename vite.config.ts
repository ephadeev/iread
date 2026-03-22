import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "node:path";

export default defineConfig({
	define: {
		global: "globalThis",
	},
	build: {
		outDir: "dist",
	},
	resolve: {
		alias: {
			"@/src": path.resolve(__dirname, "src"),
			"@/entities": path.resolve(__dirname, "src", "entities"),
			"@/app": path.resolve(__dirname, "src", "app"),
			"@/shared": path.resolve(__dirname, "src", "shared"),
			"@/features": path.resolve(__dirname, "src", "features"),
			"@/widgets": path.resolve(__dirname, "src", "widgets"),
			"@/pages": path.resolve(__dirname, "src", "pages"),
			"@/dist": path.resolve(__dirname, "dist"),
		},
	},
	plugins: [react(), tsconfigPaths()],
});
