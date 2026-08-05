import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const hmiSource = readFileSync(new URL("../js/hmi.js", import.meta.url), "utf8");
const helperSource = readFileSync(new URL("../js/hmi-helpers.js", import.meta.url), "utf8");
const localeSource = readFileSync(
	new URL("../js/locale-dictionary.js", import.meta.url),
	"utf8",
);
const packageJson = JSON.parse(
	readFileSync(new URL("../../package.json", import.meta.url), "utf8"),
);

describe("architecture and runtime constraints", () => {
	// Requirements: NFR-01
	it("keeps pure helper logic separate from UI orchestration", () => {
		expect(hmiSource).toMatch(/from "\.\/hmi-helpers\.js"/);
		expect(hmiSource).toMatch(/\bdocument\b/);
		expect(helperSource).not.toMatch(/\bdocument\b/);
		expect(helperSource).not.toMatch(/\bwindow\b/);
		expect(helperSource).not.toMatch(/\bnavigator\b/);
		expect(helperSource).not.toMatch(/\blocalStorage\b/);
	});

	// Requirements: NFR-09
	it("avoids jQuery and jQuery UI references in runtime modules", () => {
		const runtimeSources = `${hmiSource}\n${helperSource}\n${localeSource}`.toLowerCase();
		expect(runtimeSources).not.toContain("jquery");
		expect(runtimeSources).not.toMatch(/\$\s*\(/);
	});

	// Requirements: NFR-05
	it("keeps runtime deployment static-host friendly", () => {
		expect(packageJson.dependencies ?? {}).toEqual({});
		expect(hmiSource).not.toMatch(/\bfetch\s*\(/);
		expect(hmiSource).not.toMatch(/\bXMLHttpRequest\b/);
		expect(hmiSource).not.toMatch(/\bWebSocket\b/);
	});
});