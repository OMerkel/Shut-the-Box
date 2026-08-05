export const SOUND_LEVEL_STORAGE_KEY = "stb-sound-level";

export const SOUND_LEVEL = Object.freeze({
	OFF: "off",
	SOFT: "soft",
	NORMAL: "normal",
});

export function isSoundLevel(value) {
	return (
		value === SOUND_LEVEL.OFF ||
		value === SOUND_LEVEL.SOFT ||
		value === SOUND_LEVEL.NORMAL
	);
}

export function normalizeSoundLevel(value, fallback = SOUND_LEVEL.NORMAL) {
	if (isSoundLevel(value)) {
		return value;
	}
	return fallback;
}

export function getSoundGainMultiplier(soundLevel) {
	if (soundLevel === SOUND_LEVEL.OFF) {
		return 0;
	}
	if (soundLevel === SOUND_LEVEL.SOFT) {
		return 0.6;
	}
	return 1;
}

export function computeRattleEnvelope(progress) {
	return (1 - progress) ** 2.4;
}

export function computeRattleModulation(progress) {
	return 0.6 + 0.4 * Math.sin(progress * 52);
}

export function computeImpactTime(baseTime, randomValue) {
	return baseTime + 0.03 + randomValue * 0.26;
}

export function computeDieValue(randomValue) {
	if (!Number.isFinite(randomValue)) {
		return 1;
	}
	const clamped = Math.max(0, Math.min(0.999999, randomValue));
	return Math.floor(clamped * 6) + 1;
}
