import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		include: ["src/test/**/*.test.js"],
		coverage: {
			provider: "v8",
			reporter: ["text", "html"],
			include: ["src/js/hmi-helpers.js", "src/js/locale-dictionary.js"],
			thresholds: {
				statements: 95,
				branches: 95,
				functions: 95,
				lines: 95,
			},
		},
	},
});
