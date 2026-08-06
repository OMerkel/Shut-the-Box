//
// Copyright (c) 2014, 2026 Oliver Merkel
// All rights reserved.
//
// @author Oliver Merkel, <Merkel(dot)Oliver(at)web(dot)de>
//

import { LOCALE_BUNDLE_DE } from "./locale_bundle_de.js";
import { LOCALE_BUNDLE_EN } from "./locale_bundle_en.js";
import { LOCALE_BUNDLE_ES } from "./locale_bundle_es.js";
import { LOCALE_BUNDLE_FR } from "./locale_bundle_fr.js";
import { LOCALE_BUNDLE_IT } from "./locale_bundle_it.js";

export const LOCALE_STORAGE_KEY = "stb-locale";

export const LOCALE = Object.freeze({
    EN: "en",
    DE: "de",
    IT: "it",
    FR: "fr",
    ES: "es",
});

export const ABOUT_CONTENT_HTML = `
      <div id='accordion'>
        <h3>Legal</h3>
        <div>
          <figure class='diagram' style='float: right;'>
            <img src='img/oliver-sliabh_liag.jpg' alt='Oliver Merkel at Slieve League' />
            <figcaption>Oliver Merkel, Slieve League (Gaeilge: Sliabh Liag) at the One Man's Path, Contae Dh&uacute;n na nGall, &Eacute;ire, <a rel='license'
              href='http://creativecommons.org/licenses/by-nc-nd/4.0/'
              target='_blank'>cc-by-nc-nd 4.0</a>.</figcaption>
          </figure>
          <br />
          <p>Copyright (c) 2014, 2026<br />
            <b>@author</b> <em>Oliver Merkel</em>, Merkel(dot) Oliver(at) web(dot) de.<br />
            All rights reserved.<br />
            Logos, brands, and trademarks belong to their respective owners.</p>
          <p>All source code, including code parts written in HTML, JavaScript, and CSS, is under the MIT License.</p>
          <h4>The MIT License (MIT)</h4>
          <p>Copyright (c) 2014, 2026 Oliver Merkel, Merkel(dot) Oliver(at) web(dot)de</p>

          <p>Permission is hereby granted, free of charge, to any person obtaining a copy of
          this software and associated documentation files (the &quot;Software&quot;), to deal in
          the Software without restriction, including without limitation the rights to
          use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
          the Software, and to permit persons to whom the Software is furnished to do so,
          subject to the following conditions:</p>

          <p>The above copyright notice and this permission notice shall be included in all
          copies or substantial portions of the Software.</p>

          <p>THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
          FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
          COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
          IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
          CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>

          <p>If not otherwise stated all graphics (independent of its format) are licensed under
            <br /><a rel='license' href='http://creativecommons.org/licenses/by-nc-sa/4.0'
            target='_blank'><img alt='Creative Commons License' style='border-width:0'
            src='img/icons/cc_by_nc_sa.png' /></a><br />Images are licensed under a
            <a rel='license' href='http://creativecommons.org/licenses/by-nc-sa/4.0'
            target='_blank'>Creative Commons Attribution-NonCommercial-ShareAlike 4.0
            International License</a>.
          </p>
        </div>
        <h3>Shut the Box Principles and Concepts</h3>
        <div>
          <p>The basic ruleset of Shut the Box is in the public domain
            due to its age and unknown authorship. It is claimed to be
            a traditional Irish pub game. Nevertheless, please note that
            certain variants are covered by legal rights concerning trademarks,
            game designs and possibly authorship on an exact ruleset for
            commercial versions.</p>
        </div>
        <h3>Runtime Dependencies</h3>
        <div>
          <p>This <b>Shut the Box</b> implementation now uses browser-native
            HTML, CSS, and JavaScript for all runtime behavior. No third-party
            JavaScript UI libraries are required to play the game.</p>
        </div>
      </div>`;

const LOCALE_BUNDLES = Object.freeze({
    [LOCALE.EN]: LOCALE_BUNDLE_EN,
    [LOCALE.DE]: LOCALE_BUNDLE_DE,
    [LOCALE.IT]: LOCALE_BUNDLE_IT,
    [LOCALE.FR]: LOCALE_BUNDLE_FR,
    [LOCALE.ES]: LOCALE_BUNDLE_ES,
});

export function isLocale(value) {
    return (
        value === LOCALE.EN ||
        value === LOCALE.DE ||
        value === LOCALE.IT ||
        value === LOCALE.FR ||
        value === LOCALE.ES
    );
}

export function normalizeLocale(value, fallback = LOCALE.EN) {
    if (isLocale(value)) {
        return value;
    }

    if (typeof value === "string") {
        const normalizedValue = value.toLowerCase();
        if (normalizedValue.startsWith("de")) {
            return LOCALE.DE;
        }
        if (normalizedValue.startsWith("it")) {
            return LOCALE.IT;
        }
        if (normalizedValue.startsWith("fr")) {
            return LOCALE.FR;
        }
        if (normalizedValue.startsWith("es")) {
            return LOCALE.ES;
        }
        if (normalizedValue.startsWith("en")) {
            return LOCALE.EN;
        }
    }

    return fallback;
}

export function getLocaleBundle(locale) {
    const normalizedLocale = normalizeLocale(locale, LOCALE.EN);
    return LOCALE_BUNDLES[normalizedLocale] || LOCALE_BUNDLES[LOCALE.EN];
}
