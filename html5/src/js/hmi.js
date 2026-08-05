//
// Copyright (c) 2014, 2026 Oliver Merkel
// All rights reserved.
//
// @author Oliver Merkel, <Merkel(dot)Oliver(at)web(dot)de>
//

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
} from "./hmi-helpers.js";
import {
	getLocaleBundle,
	LOCALE,
	LOCALE_STORAGE_KEY,
	normalizeLocale,
} from "./locale-dictionary.js";

(() => {
	const DICE_ROLL_DELAY_MS = 1000;
	const FLAP_COUNT = 9;

	const byId = (id) => document.getElementById(id);

	const state = {
		die1: null,
		die2: null,
		singleDieToggle: null,
		flaps: [],
		audioContext: null,
		soundLevel: SOUND_LEVEL.NORMAL,
		locale: LOCALE.EN,
	};

	function setText(id, value) {
		const element = byId(id);
		if (!element) {
			return;
		}
		element.textContent = value;
	}

	function setAlt(id, value) {
		const element = byId(id);
		if (!element) {
			return;
		}
		element.setAttribute("alt", value);
	}

	function applyLocale(locale, { rebindAccordions = false } = {}) {
		state.locale = normalizeLocale(locale, LOCALE.EN);
		window.localStorage.setItem(LOCALE_STORAGE_KEY, state.locale);

		const localeBundle = getLocaleBundle(state.locale);

		document.documentElement.lang = state.locale;
		document.title = localeBundle.documentTitle;

		setText("tab-title-board", localeBundle.tabBoard);
		setText("tab-title-rules", localeBundle.tabRules);
		setText("tab-title-options", localeBundle.tabOptions);
		setText("tab-title-about", localeBundle.tabAbout);

		setText("new", localeBundle.newGame);
		setAlt("die1", localeBundle.die1Alt);
		setAlt("die2", localeBundle.die2Alt);
		setAlt("single-toggle-icon", localeBundle.singleToggleAlt);

		setText("language-heading", localeBundle.languageHeading);
		setText("language-description", localeBundle.languageDescription);
		setText("language-label-en", localeBundle.languageEnglish);
		setText("language-label-de", localeBundle.languageGerman);
		setText("language-label-it", localeBundle.languageItalian);
		setText("language-label-fr", localeBundle.languageFrench);
		setText("language-label-es", localeBundle.languageSpanish);

		setText("sound-heading", localeBundle.soundHeading);
		setText("sound-description", localeBundle.soundDescription);
		setText("sound-legend", localeBundle.soundLegend);
		setText("sound-label-off", localeBundle.soundOff);
		setText("sound-label-soft", localeBundle.soundSoft);
		setText("sound-label-normal", localeBundle.soundNormal);

		const rulesContent = byId("tabs-rules-content");
		if (rulesContent) {
			rulesContent.innerHTML = localeBundle.rulesContentHtml;
		}

		const aboutContent = byId("tabs-about-content");
		if (aboutContent) {
			aboutContent.innerHTML = localeBundle.aboutContentHtml;
		}

		const localeInputs = Array.from(
			document.querySelectorAll('input[name="app-language"]'),
		);
		localeInputs.forEach((input) => {
			input.checked = input.value === state.locale;
		});

		if (rebindAccordions) {
			initAccordion("accordion-rules");
			initAccordion("accordion");
		}
	}

	function loadSavedLocale() {
		const savedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
		state.locale = normalizeLocale(savedLocale, LOCALE.EN);
	}

	function loadSavedSoundLevel() {
		const saved = window.localStorage.getItem(SOUND_LEVEL_STORAGE_KEY);
		state.soundLevel = normalizeSoundLevel(saved, state.soundLevel);
	}

	function getAudioContext() {
		if (state.audioContext) {
			return state.audioContext;
		}

		const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
		if (!AudioContextCtor) {
			return null;
		}

		state.audioContext = new AudioContextCtor();
		return state.audioContext;
	}

	function playDiceRollSound() {
		const soundGainMultiplier = getSoundGainMultiplier(state.soundLevel);
		if (soundGainMultiplier <= 0) {
			return;
		}

		const audioContext = getAudioContext();
		if (!audioContext) {
			return;
		}

		if (audioContext.state === "suspended") {
			audioContext.resume().catch(() => {
				// Ignore blocked autoplay states. The next user gesture may unlock audio.
			});
		}

		const now = audioContext.currentTime;
		const durationSeconds = 0.45;
		const sampleRate = audioContext.sampleRate;
		const frameCount = Math.floor(sampleRate * durationSeconds);

		const noiseBuffer = audioContext.createBuffer(1, frameCount, sampleRate);
		const data = noiseBuffer.getChannelData(0);

		// Base rolling texture: fast rattle at start that settles over time.
		for (let i = 0; i < frameCount; i += 1) {
			const progress = i / frameCount;
			const envelope = computeRattleEnvelope(progress);
			const modulation = computeRattleModulation(progress);
			data[i] = (Math.random() * 2 - 1) * envelope * modulation;
		}

		const source = audioContext.createBufferSource();
		source.buffer = noiseBuffer;

		const highpass = audioContext.createBiquadFilter();
		highpass.type = "highpass";
		highpass.frequency.setValueAtTime(250, now);

		const lowpass = audioContext.createBiquadFilter();
		lowpass.type = "lowpass";
		lowpass.frequency.setValueAtTime(3200, now);
		lowpass.frequency.exponentialRampToValueAtTime(1200, now + durationSeconds);

		const gain = audioContext.createGain();
		gain.gain.setValueAtTime(0.0001, now);
		gain.gain.exponentialRampToValueAtTime(
			0.2 * soundGainMultiplier,
			now + 0.015,
		);
		gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSeconds);

		source.connect(highpass);
		highpass.connect(lowpass);
		lowpass.connect(gain);
		gain.connect(audioContext.destination);

		source.start(now);
		source.stop(now + durationSeconds);

		// Add several short collisions for a more realistic dice chatter.
		const impactCount = 7;
		for (let i = 0; i < impactCount; i += 1) {
			const t = computeImpactTime(now, Math.random());

			const impact = audioContext.createOscillator();
			impact.type = "triangle";
			impact.frequency.setValueAtTime(900 + Math.random() * 900, t);
			impact.frequency.exponentialRampToValueAtTime(
				180 + Math.random() * 120,
				t + 0.02,
			);

			const impactGain = audioContext.createGain();
			impactGain.gain.setValueAtTime(0.0001, t);
			impactGain.gain.exponentialRampToValueAtTime(
				(0.035 + Math.random() * 0.02) * soundGainMultiplier,
				t + 0.002,
			);
			impactGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.024);

			impact.connect(impactGain);
			impactGain.connect(audioContext.destination);
			impact.start(t);
			impact.stop(t + 0.03);
		}

		// Final low click when dice settle.
		const settleTime = now + durationSeconds - 0.03;
		const settle = audioContext.createOscillator();
		settle.type = "sine";
		settle.frequency.setValueAtTime(180, settleTime);
		settle.frequency.exponentialRampToValueAtTime(95, settleTime + 0.05);

		const settleGain = audioContext.createGain();
		settleGain.gain.setValueAtTime(0.0001, settleTime);
		settleGain.gain.exponentialRampToValueAtTime(
			0.05 * soundGainMultiplier,
			settleTime + 0.004,
		);
		settleGain.gain.exponentialRampToValueAtTime(0.0001, settleTime + 0.07);

		settle.connect(settleGain);
		settleGain.connect(audioContext.destination);
		settle.start(settleTime);
		settle.stop(settleTime + 0.08);
	}

	function activateTab(tabItems, activeIndex) {
		tabItems.forEach((item, index) => {
			const isActive = index === activeIndex;
			item.link.setAttribute("aria-selected", String(isActive));
			item.link.tabIndex = isActive ? 0 : -1;
			item.link.parentElement.classList.toggle("active", isActive);
			item.panel.hidden = !isActive;
		});
	}

	function initTabs(containerId) {
		const container = byId(containerId);
		if (!container) {
			return;
		}

		const navList = container.querySelector(":scope > ul");
		if (!navList) {
			return;
		}

		const links = Array.from(navList.querySelectorAll('a[href^="#"]'));
		const tabItems = links
			.map((link) => {
				const panel = document.querySelector(link.getAttribute("href"));
				return panel ? { link, panel } : null;
			})
			.filter(Boolean);

		if (tabItems.length === 0) {
			return;
		}

		navList.setAttribute("role", "tablist");

		tabItems.forEach((item, index) => {
			item.link.setAttribute("role", "tab");
			item.link.setAttribute("aria-controls", item.panel.id);
			item.link.addEventListener("click", (event) => {
				event.preventDefault();
				activateTab(tabItems, index);
			});
			item.link.addEventListener("keydown", (event) => {
				if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
					return;
				}
				event.preventDefault();
				const offset = event.key === "ArrowRight" ? 1 : -1;
				const nextIndex = (index + offset + tabItems.length) % tabItems.length;
				activateTab(tabItems, nextIndex);
				tabItems[nextIndex].link.focus();
			});
			item.panel.setAttribute("role", "tabpanel");
			item.panel.setAttribute(
				"aria-labelledby",
				item.link.id || `tab-link-${index}`,
			);
			if (!item.link.id) {
				item.link.id = `tab-link-${index}`;
			}
		});

		activateTab(tabItems, 0);
	}

	function openAccordionSection(sections, openIndex) {
		sections.forEach((section, index) => {
			const isOpen = index === openIndex;
			section.title.setAttribute("aria-expanded", String(isOpen));
			section.panel.hidden = !isOpen;
			section.title.classList.toggle("active", isOpen);
		});
	}

	function initAccordion(containerId) {
		const container = byId(containerId);
		if (!container) {
			return;
		}

		const titles = Array.from(container.querySelectorAll(":scope > h3"));
		const sections = titles
			.map((title, index) => {
				const panel = title.nextElementSibling;
				if (!panel || panel.tagName.toLowerCase() !== "div") {
					return null;
				}
				if (!panel.id) {
					panel.id = `${containerId}-panel-${index + 1}`;
				}
				title.setAttribute("role", "button");
				title.setAttribute("tabindex", "0");
				title.setAttribute("aria-controls", panel.id);
				return { title, panel };
			})
			.filter(Boolean);

		if (sections.length === 0) {
			return;
		}

		sections.forEach((section, index) => {
			section.title.addEventListener("click", () => {
				openAccordionSection(sections, index);
			});
			section.title.addEventListener("keydown", (event) => {
				if (event.key !== "Enter" && event.key !== " ") {
					return;
				}
				event.preventDefault();
				openAccordionSection(sections, index);
			});
		});

		openAccordionSection(sections, 0);
	}

	function showResult() {
		state.die1.style.visibility = "visible";
		state.die2.style.visibility = state.singleDieToggle.checked
			? "hidden"
			: "visible";
	}

	function roll() {
		state.die1.style.visibility = "hidden";
		state.die2.style.visibility = "hidden";
		playDiceRollSound();

		const die1Value = computeDieValue(Math.random());
		const die2Value = computeDieValue(Math.random());

		state.die1.src = `img/1w6-${die1Value}.png`;
		state.die2.src = `img/1w6-${die2Value}.png`;

		window.setTimeout(showResult, DICE_ROLL_DELAY_MS);
	}

	function newGame() {
		state.flaps.forEach((flap) => {
			flap.checked = false;
		});
	}

	function resize() {
		const viewportHeight = window.innerHeight;
		const viewportWidth = window.innerWidth;

		const gamePage = byId("game-page");
		if (gamePage) {
			gamePage.style.minHeight = `${Math.max(0, viewportHeight - 64)}px`;
		}

		const size = Math.min(170, Math.min(viewportHeight, viewportWidth) * 0.35);
		state.die1.style.width = `${size}px`;
		state.die2.style.width = `${size}px`;
	}

	function initGameControls() {
		state.die1 = byId("die1");
		state.die2 = byId("die2");
		state.singleDieToggle = byId("single");
		state.flaps = Array.from({ length: FLAP_COUNT }, (_, index) =>
			byId(`myswitch${index + 1}`),
		);

		const newButton = byId("new");
		if (
			!state.die1 ||
			!state.die2 ||
			!state.singleDieToggle ||
			!newButton ||
			state.flaps.some((flap) => !flap)
		) {
			return;
		}

		newButton.addEventListener("click", newGame);
		state.singleDieToggle.addEventListener("click", roll);
		window.addEventListener("resize", resize);
		state.die1.addEventListener("click", roll);
		state.die2.addEventListener("click", roll);

		resize();
		showResult();
	}

	function initSoundOptions() {
		loadSavedSoundLevel();

		const soundLevelInputs = Array.from(
			document.querySelectorAll('input[name="sound-intensity"]'),
		);
		if (soundLevelInputs.length === 0) {
			return;
		}

		soundLevelInputs.forEach((input) => {
			input.checked = input.value === state.soundLevel;
			input.addEventListener("change", () => {
				if (!input.checked) {
					return;
				}

				if (!isSoundLevel(input.value)) {
					return;
				}

				state.soundLevel = input.value;
				window.localStorage.setItem(SOUND_LEVEL_STORAGE_KEY, state.soundLevel);
			});
		});
	}

	function initLanguageOptions() {
		loadSavedLocale();
		applyLocale(state.locale);

		const languageInputs = Array.from(
			document.querySelectorAll('input[name="app-language"]'),
		);
		if (languageInputs.length === 0) {
			return;
		}

		languageInputs.forEach((input) => {
			input.checked = input.value === state.locale;
			input.addEventListener("change", () => {
				if (!input.checked) {
					return;
				}

				applyLocale(input.value, { rebindAccordions: true });
			});
		});
	}

	function registerServiceWorker() {
		if (!("serviceWorker" in navigator)) {
			return;
		}

		navigator.serviceWorker
			.register("./sw.js", { type: "module" })
			.catch(() => {
				// Non-fatal: game still runs online when service worker registration fails.
			});
	}

	function init() {
		registerServiceWorker();
		initLanguageOptions();
		initTabs("tabs");
		initAccordion("accordion-rules");
		initAccordion("accordion");
		initSoundOptions();
		initGameControls();
	}

	document.addEventListener("DOMContentLoaded", init);
})();
