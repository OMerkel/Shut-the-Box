import { describe, expect, it } from "vitest";
import {
    computeDieValue,
    computeImpactTime,
    computeRattleEnvelope,
    computeRattleModulation,
    getSoundGainMultiplier,
    isSoundLevel,
    normalizeSoundLevel,
    SOUND_LEVEL,
    SOUND_LEVEL_STORAGE_KEY,
} from "../js/hmi_helpers.js";

describe("hmi-helpers constants", () => {
    // Requirements: FR-09, NFR-02
    it("exposes stable sound level constants", () => {
        expect(SOUND_LEVEL.OFF).toBe("off");
        expect(SOUND_LEVEL.SOFT).toBe("soft");
        expect(SOUND_LEVEL.NORMAL).toBe("normal");
        expect(SOUND_LEVEL.LOUD).toBe("loud");
        expect(SOUND_LEVEL_STORAGE_KEY).toBe("stb-sound-level");
    });
});

describe("sound level validation and normalization", () => {
    // Requirements: FR-09, NFR-02
    it("detects valid sound levels", () => {
        expect(isSoundLevel("off")).toBe(true);
        expect(isSoundLevel("soft")).toBe(true);
        expect(isSoundLevel("normal")).toBe(true);
        expect(isSoundLevel("loud")).toBe(true);
    });

    // Requirements: FR-09, NFR-02
    it("rejects invalid sound levels", () => {
        expect(isSoundLevel("very-loud")).toBe(false);
        expect(isSoundLevel("")).toBe(false);
        expect(isSoundLevel(undefined)).toBe(false);
        expect(isSoundLevel(null)).toBe(false);
    });

    // Requirements: FR-09, NFR-02
    it("normalizes to fallback for invalid values", () => {
        expect(normalizeSoundLevel("off", SOUND_LEVEL.NORMAL)).toBe(
            SOUND_LEVEL.OFF,
        );
        expect(normalizeSoundLevel("unknown", SOUND_LEVEL.SOFT)).toBe(
            SOUND_LEVEL.SOFT,
        );
        expect(normalizeSoundLevel(undefined)).toBe(SOUND_LEVEL.NORMAL);
    });
});

describe("gain and timing helpers", () => {
    // Requirements: FR-09, FR-10, NFR-02
    it("maps sound levels to gain multipliers", () => {
        expect(getSoundGainMultiplier(SOUND_LEVEL.OFF)).toBe(0);
        expect(getSoundGainMultiplier(SOUND_LEVEL.SOFT)).toBe(0.6);
        expect(getSoundGainMultiplier(SOUND_LEVEL.NORMAL)).toBe(1);
        expect(getSoundGainMultiplier(SOUND_LEVEL.LOUD)).toBe(1.6);
        expect(getSoundGainMultiplier("invalid")).toBe(1);
    });

    // Requirements: FR-10, NFR-02
    it("computes deterministic rattle shaping values", () => {
        expect(computeRattleEnvelope(0)).toBeCloseTo(1, 8);
        expect(computeRattleEnvelope(1)).toBeCloseTo(0, 8);
        expect(computeRattleModulation(0)).toBeCloseTo(0.6, 8);
        expect(computeRattleModulation(0.5)).toBeGreaterThan(0.19);
        expect(computeRattleModulation(0.5)).toBeLessThan(1.01);
    });

    // Requirements: FR-10, NFR-02
    it("computes impact timing from base and random value", () => {
        expect(computeImpactTime(5, 0)).toBeCloseTo(5.03, 8);
        expect(computeImpactTime(5, 1)).toBeCloseTo(5.29, 8);
        expect(computeImpactTime(2.5, 0.25)).toBeCloseTo(2.595, 8);
    });
});

describe("dice value computation", () => {
    // Requirements: FR-02, NFR-02
    it("maps random values to inclusive [1, 6] die faces", () => {
        expect(computeDieValue(0)).toBe(1);
        expect(computeDieValue(0.16)).toBe(1);
        expect(computeDieValue(0.2)).toBe(2);
        expect(computeDieValue(0.5)).toBe(4);
        expect(computeDieValue(0.999999)).toBe(6);
    });

    // Requirements: FR-02, NFR-02
    it("clamps out-of-range values and handles non-finite inputs", () => {
        expect(computeDieValue(-10)).toBe(1);
        expect(computeDieValue(10)).toBe(6);
        expect(computeDieValue(Number.NaN)).toBe(1);
        expect(computeDieValue(Number.POSITIVE_INFINITY)).toBe(1);
        expect(computeDieValue(Number.NEGATIVE_INFINITY)).toBe(1);
    });
});
