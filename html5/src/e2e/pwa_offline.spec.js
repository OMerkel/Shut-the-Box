import { expect, test } from "@playwright/test";

test.describe("PWA offline behavior", () => {
    // Requirements: NFR-03
    test("remains playable when service worker or audio APIs are unavailable", async ({
        page,
    }) => {
        await page.route("**/sw.js", (route) => route.abort());
        await page.addInitScript(() => {
            Object.defineProperty(window, "AudioContext", {
                value: undefined,
                configurable: true,
                writable: true,
            });
            Object.defineProperty(window, "webkitAudioContext", {
                value: undefined,
                configurable: true,
                writable: true,
            });
        });

        await page.goto("/index.html");
        await page.locator("#die1").click();

        await expect(page).toHaveTitle("Shut the Box");
        await expect(page.locator("#die1")).toHaveAttribute(
            "src",
            /img\/1w6-[1-6]\.png$/,
        );
    });

    // Requirements: FR-11, FR-12, NFR-04
    test("serves cached app shell when offline", async ({ page }) => {
        await page.goto("/index.html");

        await page.evaluate(async () => {
            if (!("serviceWorker" in navigator)) {
                throw new Error(
                    "Service worker is not supported in this browser",
                );
            }
            await navigator.serviceWorker.ready;
        });

        await page.context().setOffline(true);

        await page.goto("/index.html", { waitUntil: "domcontentloaded" });
        await expect(page.locator("#tab-title-board")).toHaveText("Board");

        await page.goto("/non-existent-route", {
            waitUntil: "domcontentloaded",
        });
        await expect(page).toHaveTitle("Shut the Box");
        await expect(page.locator("#tab-title-board")).toHaveText("Board");

        await page.context().setOffline(false);
    });
});
