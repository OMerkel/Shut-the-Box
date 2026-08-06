import { describe, expect, it } from "vitest";
import {
    getLocaleBundle,
    isLocale,
    LOCALE,
    LOCALE_STORAGE_KEY,
    normalizeLocale,
} from "../js/locale_dictionary.js";

function collectStringValues(value, strings = []) {
    if (typeof value === "string") {
        strings.push(value);
        return strings;
    }

    if (value && typeof value === "object") {
        for (const nestedValue of Object.values(value)) {
            collectStringValues(nestedValue, strings);
        }
    }

    return strings;
}

describe("locale dictionary basics", () => {
    // Requirements: FR-05, FR-06, NFR-06
    it("exposes storage key and locale constants", () => {
        expect(LOCALE_STORAGE_KEY).toBe("stb-locale");
        expect(LOCALE.EN).toBe("en");
        expect(LOCALE.DE).toBe("de");
        expect(LOCALE.IT).toBe("it");
        expect(LOCALE.FR).toBe("fr");
        expect(LOCALE.ES).toBe("es");
    });

    // Requirements: FR-05, NFR-06
    it("validates locales", () => {
        expect(isLocale("en")).toBe(true);
        expect(isLocale("de")).toBe(true);
        expect(isLocale("it")).toBe(true);
        expect(isLocale("fr")).toBe(true);
        expect(isLocale("es")).toBe(true);
        expect(isLocale("pt")).toBe(false);
        expect(isLocale(undefined)).toBe(false);
    });

    // Requirements: FR-08, NFR-06
    it("normalizes browser locale variants and falls back to english", () => {
        expect(normalizeLocale("en-US")).toBe(LOCALE.EN);
        expect(normalizeLocale("de-DE")).toBe(LOCALE.DE);
        expect(normalizeLocale("it-IT")).toBe(LOCALE.IT);
        expect(normalizeLocale("fr-FR")).toBe(LOCALE.FR);
        expect(normalizeLocale("es-ES")).toBe(LOCALE.ES);
        expect(normalizeLocale("DE")).toBe(LOCALE.DE);
        expect(normalizeLocale("IT")).toBe(LOCALE.IT);
        expect(normalizeLocale("FR")).toBe(LOCALE.FR);
        expect(normalizeLocale("ES")).toBe(LOCALE.ES);
        expect(normalizeLocale("pt-BR")).toBe(LOCALE.EN);
        expect(normalizeLocale(undefined)).toBe(LOCALE.EN);
    });

    // Requirements: FR-06, NFR-06
    it("returns localized bundles with expected translated labels", () => {
        const enBundle = getLocaleBundle("en");
        const deBundle = getLocaleBundle("de");
        const itBundle = getLocaleBundle("it");
        const frBundle = getLocaleBundle("fr");
        const esBundle = getLocaleBundle("es");

        expect(enBundle.tabBoard).toBe("Board");
        expect(deBundle.tabBoard).toBe("Spiel");
        expect(itBundle.tabBoard).toBe("Gioco");
        expect(frBundle.tabBoard).toBe("Jeu");
        expect(esBundle.tabBoard).toBe("Juego");
        expect(getLocaleBundle("unsupported").tabBoard).toBe("Board");
    });

    // Requirements: FR-06, NFR-06
    it("uses correct German umlauts and ß in locale texts", () => {
        const deBundle = getLocaleBundle("de");

        expect(deBundle.die1Alt).toContain("Würfel");
        expect(deBundle.singleToggleAlt).toContain("Einzelwürfel");
        expect(deBundle.soundLegend).toBe("Würfelklang");
        expect(deBundle.soundDescription).toContain("Lautstärke");
        expect(deBundle.languageDescription).toContain("Wählen");
        expect(deBundle.languageDescription).toContain("für");
        expect(deBundle.languageDescription).toContain("Bedienoberfläche");

        expect(deBundle.rulesContentHtml).toContain("möglichst");
        expect(deBundle.rulesContentHtml).toContain("nächste");
        expect(deBundle.rulesContentHtml).toContain("schließt");
        expect(deBundle.rulesContentHtml).toContain("Über die Strafpunkte");
        expect(deBundle.rulesContentHtml).toContain("für Strafpunkte");

        expect(deBundle.die1Alt).not.toContain("Wuerfel");
        expect(deBundle.singleToggleAlt).not.toContain("Einzelwuerfel");
        expect(deBundle.rulesContentHtml).not.toContain("schliesst");
        expect(deBundle.rulesContentHtml).not.toContain("ueber");
    });

    // Requirements: FR-06, NFR-06
    it("contains no mojibake artifacts in localized bundles", () => {
        const mojibakePattern = /Ã|Â|�/;
        const locales = [LOCALE.EN, LOCALE.DE, LOCALE.IT, LOCALE.FR, LOCALE.ES];

        for (const locale of locales) {
            const bundle = getLocaleBundle(locale);
            const strings = collectStringValues(bundle);
            const mojibakeValue = strings.find((entry) => mojibakePattern.test(entry));
            expect(
                mojibakeValue,
                `Locale ${locale} contains mojibake text: ${mojibakeValue}`,
            ).toBeUndefined();
        }
    });
});
