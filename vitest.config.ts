import {mergeConfig} from "vite";
import {defineConfig} from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            environment: "jsdom",
            globals: true,
            setupFiles: ["./setup.ts"],
            css: true,
            // Some components read Date/Intl formatting; keep deterministic snapshots.
            testTimeout: 10_000,
        },
    }),
);
