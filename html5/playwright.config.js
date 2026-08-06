import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: "./src/e2e",
    timeout: 30_000,
    expect: {
        timeout: 5_000,
    },
    fullyParallel: true,
    retries: 0,
    workers: 1,
    reporter: "list",
    use: {
        baseURL: "http://127.0.0.1:4173",
        trace: "on-first-retry",
    },
    webServer: {
        command: "npx http-server src -p 4173 -c-1 --silent",
        url: "http://127.0.0.1:4173",
        reuseExistingServer: true,
        timeout: 60_000,
    },
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
        },
    ],
});
