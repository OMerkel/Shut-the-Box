import { expect, test } from "@playwright/test";

test.describe("Shut the Box app", () => {
	// Requirements: FR-01
	test("renders the single-entry tab shell", async ({ page }) => {
		await page.goto("/index.html");

		await expect(page.locator("#tabs")).toBeVisible();
		await expect(page.locator("#tab-title-board")).toHaveText("Board");
		await expect(page.locator("#tab-title-rules")).toHaveText("Rules...");
		await expect(page.locator("#tab-title-options")).toHaveText("Options...");
		await expect(page.locator("#tab-title-about")).toHaveText("About...");
	});

	// Requirements: FR-05, FR-06, FR-13, NFR-06, NFR-08
	test("loads in english by default and can switch to german, italian, french, and spanish", async ({ page }) => {
		await page.goto("/index.html");

		await expect(page).toHaveTitle("Shut the Box");
		await expect(page.locator("#tab-title-board")).toHaveText("Board");
		await expect(page.locator("#new")).toHaveText("New");
		await expect(page.locator("#die1")).toHaveAttribute("alt", "Die 1");

		await page.locator("#tab-title-options").click();
		await page.locator('input[name="app-language"][value="de"]').check();

		await expect(page.locator("#tab-title-board")).toHaveText("Spiel");
		await expect(page.locator("#tab-title-options")).toHaveText("Optionen...");
		await expect(page.locator("#new")).toHaveText("Neu");
		await expect(page.locator("#die1")).toHaveAttribute("alt", "Würfel 1");

		await page.locator('input[name="app-language"][value="it"]').check();

		await expect(page.locator("#tab-title-board")).toHaveText("Gioco");
		await expect(page.locator("#tab-title-options")).toHaveText("Opzioni...");
		await expect(page.locator("#new")).toHaveText("Nuovo");
		await expect(page.locator("#die1")).toHaveAttribute("alt", "Dado 1");

		await page.locator('input[name="app-language"][value="fr"]').check();

		await expect(page.locator("#tab-title-board")).toHaveText("Jeu");
		await expect(page.locator("#tab-title-options")).toHaveText("Options...");
		await expect(page.locator("#new")).toHaveText("Nouveau");
		await expect(page.locator("#die1")).toHaveAttribute("alt", "Dé 1");

		await page.locator('input[name="app-language"][value="es"]').check();

		await expect(page.locator("#tab-title-board")).toHaveText("Juego");
		await expect(page.locator("#tab-title-options")).toHaveText("Opciones...");
		await expect(page.locator("#new")).toHaveText("Nuevo");
		await expect(page.locator("#die1")).toHaveAttribute("alt", "Dado 1");
	});

	// Requirements: FR-07, FR-09, NFR-06
	test("persists selected language and sound level across reload", async ({ page }) => {
		await page.goto("/index.html");
		await page.locator("#tab-title-options").click();

		await page.locator('input[name="app-language"][value="de"]').check();
		await page.locator('input[name="sound-intensity"][value="soft"]').check();

		await page.reload();

		await expect(page.locator("#tab-title-board")).toHaveText("Spiel");
		await expect(page.locator('input[name="app-language"][value="de"]')).toBeChecked();
		await expect(page.locator('input[name="sound-intensity"][value="soft"]')).toBeChecked();
	});

	// Requirements: FR-14, NFR-07
	test("supports keyboard navigation for tabs and accordions", async ({ page }) => {
		await page.goto("/index.html");

		await page.locator("#tab-title-board").focus();
		await page.keyboard.press("ArrowRight");

		await expect(page.locator("#tab-title-rules")).toHaveAttribute(
			"aria-selected",
			"true",
		);
		await expect(page.locator("#tabs-rules")).toBeVisible();

		const firstRuleSection = page.locator("#accordion-rules > h3").first();
		const secondRuleSection = page.locator("#accordion-rules > h3").nth(1);

		await expect(firstRuleSection).toHaveAttribute("role", "button");
		await expect(firstRuleSection).toHaveAttribute("tabindex", "0");
		await expect(firstRuleSection).toHaveAttribute("aria-expanded", "true");

		await secondRuleSection.focus();
		await page.keyboard.press("Enter");

		await expect(secondRuleSection).toHaveAttribute("aria-expanded", "true");
		await expect(firstRuleSection).toHaveAttribute("aria-expanded", "false");
	});

	// Requirements: FR-02, FR-03, FR-04
	test("supports basic gameplay interactions", async ({ page }) => {
		await page.goto("/index.html");
		await page.locator("#die1").click();

		await expect(page.locator("#die1")).toHaveAttribute("src", /img\/1w6-[1-6]\.png$/);
		await expect(page.locator("#die2")).toHaveAttribute("src", /img\/1w6-[1-6]\.png$/);

		await page.locator('label[for="myswitch1"]').click();
		await expect(page.locator("#myswitch1")).toBeChecked();
		await page.locator("#new").click();
		await expect(page.locator("#myswitch1")).not.toBeChecked();
	});
});
