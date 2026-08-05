export const LOCALE_STORAGE_KEY = "stb-locale";

export const LOCALE = Object.freeze({
	EN: "en",
	DE: "de",
    IT: "it",
    FR: "fr",
    ES: "es",
});

const ABOUT_CONTENT_HTML = `
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
	[LOCALE.EN]: Object.freeze({
		documentTitle: "Shut the Box",
		tabBoard: "Board",
		tabRules: "Rules...",
		tabOptions: "Options...",
		tabAbout: "About...",
		newGame: "New",
		die1Alt: "Die 1",
		die2Alt: "Die 2",
		singleToggleAlt: "Toggle single die mode",
		languageHeading: "Language",
		languageDescription: "Choose your preferred language for the application interface.",
		languageEnglish: "English",
		languageGerman: "Deutsch",
        languageItalian: "Italiano",
        languageFrench: "Français",
        languageSpanish: "Español",
		soundHeading: "Sound",
		soundDescription: "Choose dice roll sound intensity.",
		soundLegend: "Dice Sound",
		soundOff: "Off",
		soundSoft: "Soft",
		soundNormal: "Normal",
    soundLoud: "Loud",
		rulesContentHtml: `
      <p><b>Shut the Box</b> is a famous traditional pub game.
        It is played in different variants and no organization is known
        to standardize rule variants for the game. Thus, if
        playing <em>Shut the Box</em> with others you should first try
        to agree and commit to the rules. If in doubt, I recommend
        applying the locally played rules.</p>
      <p>The <b>Shut the Box</b> application is intended to be less restrictive.
        No specific rules are strictly enforced. At any
        time you can undo an action, such as reopening a just-closed flap,
        and make a different choice. If needed, you can use a single die
        or two dice, roll again, switch to the menu, and look up rule
        variants during gameplay.</p>
      <div id='accordion-rules'>
        <h3>Gaming Material</h3>
        <div>
          <p>The <em>box</em> consists of a set of <em>flaps</em> being open at the
            beginning of the game. Flaps indicate their represented value by
            labels showing numbers. The box is shut as soon as all flaps
            are closed. This <em>Shut the Box</em> game uses flaps ranged from <em>value
            one to nine.</em></p>
          <p>Most <em>Shut the Box</em> variants are played with <em>two six-sided dice</em>.</p>
        </div>
        <h3>Objective</h3>
        <div>
          <ul>
            <li>Objective is to minimize the own penalty score. The
              player with the lowest penalty score wins.</li>
            <li>Each player keeps rolling dice and scoring these
              iteratively until&#8230;</li>
            <ul>
              <li>either the total value of dice cannot be used
                to close remaining open flaps. Then the next player
                continues with all flaps opened again.</li>
              <li>or finally all flaps are closed. The player shutting the
                box this way wins immediately.</li>
            </ul>
          </ul>
        </div>
        <h3>Penalty Score</h3>
        <div>
          <p>The penalty score is the total of all remaining open flaps'
            values summed up. As long as no player manages to shut the
            box completely the remaining open flaps indicate the
            players penalty score.</p>
        </div>
        <h3>Recommended Variant</h3>
        <div>
          <ul>
            <li>Player rolls the dice and adds up the shown total value.</li>
            <li>Any combination of remaining open flaps can now be closed.
              Their values summed up have to match the total value of the
              roll exactly.</li>
            <li>As soon as flaps 7, 8, and 9 are closed the player may
              decide on each roll to roll a single die or alternatively
              both dice.</li>
          </ul>
        </div>
        <h3>More Variants</h3>
        <div>
          <h4>Avoid High Sums</h4>
          <ul>
            <li>You may decide to use the amount of open flaps as a score
              rather than the total sum of their values.</li>
            <li>The lower number of open flaps wins.</li>
          </ul>
          <h4>More Restrictive Single Die</h4>
          <ul>
            <li>The player may decide on each roll to roll a single die
              or alternatively both dice only in case that the overall sum
              of values for remaining open flaps equals 6 or less.</li>
          </ul>
          <h4>Two Dice Only</h4>
          <ul>
            <li>Player must always use two dice.</li>
            <li>Thus a player has to end the turn in case there is only
              flap #1 remaining unless no other rule is applied.</li>
          </ul>
          <h4>Exact Match</h4>
          <ul>
            <li>Player rolls the dice and adds up the shown total value.</li>
            <li>Just open flaps with the exact value of a die or the flap
              matching the sum can now be closed. The player is not allowed
              to use any other combination of remaining open flaps even if the
              sum does match.</li>
            <li>Player may only continue if all dice rolled are scored.</li>
          </ul>
          <h4>Score Single Die is Enough</h4>
          <ul>
            <li>Player rolls the dice and adds up the shown total value.</li>
            <li>Just open flaps with the exact value of a die or the flap
              matching the sum can now be closed. The player is not allowed
              to use any other combination of remaining open flaps even if the
              sum does match.</li>
            <li>Player may continue as long as at least one die of a roll
              can be scored.</li>
            <li>On mutual agreement it might be mandatory or optional to
              score a second die if possible. Meaning although a second die
              could be scored, the player may decide freely not to score it
              if scoring a second die is optional.</li>
          </ul>
          <h4>Thai Style</h4>
          <ul>
            <li>Player must exactly and can only score a single flap per roll.</li>
            <li>Player rolls the dice and adds up the shown total value.</li>
            <li>Just open flaps with the exact value of a die or the flap
              matching the sum can now be closed. The player is not allowed
              to use any other combination of remaining open flaps even if the
              sum does match.</li>
          </ul>
          <h4>Multiple Fixed Rounds</h4>
          <ul>
            <li>The game continues for a defined amount of rounds to
              be played.</li>
            <li>Penalty scores are summed up per player.</li>
          </ul>
          <h4>Defined Maximum Penalty</h4>
          <ul>
            <li>The game continues in rounds to be played.</li>
            <li>Penalty scores are summed up per player.</li>
            <li>Player continues as long as his overall penalty
              does not exceed a previously agreed maximum penalty
              score, e.g. a maximum penalty score of 45.</li>
            <li>Last man standing wins.</li>
          </ul>
          <h4>Flap Numbers are Penalty Digits</h4>
          <ul>
            <li>Remaining flap numbers represent penalty digits ordered
              from low to high. <em>Sample: if flap #2, #5, and number #7
              remain open, then the penalty score is 257.</em></li>
          </ul>
        </div>
      </div>`,
		aboutContentHtml: ABOUT_CONTENT_HTML,
	}),
	[LOCALE.DE]: Object.freeze({
		documentTitle: "Shut the Box",
		tabBoard: "Spiel",
		tabRules: "Regeln...",
		tabOptions: "Optionen...",
		tabAbout: "Info...",
		newGame: "Neu",
		die1Alt: "Würfel 1",
		die2Alt: "Würfel 2",
		singleToggleAlt: "Einzelwürfel umschalten",
		languageHeading: "Sprache",
		languageDescription: "Wählen Sie Ihre bevorzugte Sprache für die Bedienoberfläche.",
		languageEnglish: "English",
		languageGerman: "Deutsch",
        languageItalian: "Italiano",
        languageFrench: "Français",
        languageSpanish: "Español",
		soundHeading: "Ton",
		soundDescription: "Wählen Sie die Lautstärke für den Würfelklang.",
		soundLegend: "Würfelklang",
		soundOff: "Aus",
		soundSoft: "Leise",
		soundNormal: "Normal",
    soundLoud: "Laut",
		rulesContentHtml: `
      <p><b>Shut the Box</b> ist ein beliebtes traditionelles Spiel in irischen/englischen Pubs.
        Es wird in unterschiedlichen Varianten gespielt. Es gibt keine Organisation, die
        einen Standard für die Spielregeln anstrebt. Wenn daher <em>Shut the Box</em> mit anderen
        gemeinsam gespielt wird, ist es oft nötig, sich auf ein Regelwerk zu einigen bzw. diesem
        gemeinsam zuzustimmen. Im Zweifel gilt die Empfehlung, lokale Hausregeln zu erfragen
        und diese anzuwenden.</p>
      <p>Die <b>Shut the Box</b>-Applikation soll hinsichtlich Bedienung bewusst wenig
        einschränkend sein. Sie werden nicht wirklich zur Anwendung bestimmter Regeln gezwungen.
        Jederzeit können Sie alle durchgeführten Aktionen rückgängig machen, wie etwa eine gerade
        zuvor geschlossene Klappe doch wieder zu öffnen und sich dann zu anderen Aktionen zu
        entscheiden. Falls es gewollt oder nötig ist, können Sie entweder einen einzelnen Würfel
        oder doch zwei Würfel nehmen, erneut würfeln, ins Menü wechseln, um etwa eine der
        möglichen Regelvarianten während des Spiels nachzuschlagen.</p>
      <div id='accordion-rules'>
        <h3>Spielmaterial</h3>
        <div>
          <p>Die <em>Box</em> besteht aus <em>Klappen</em>, die zu Spielbeginn alle geöffnet sind.
            Klappen zeigen ihren eigenen Wert durch auf ihnen abgebildete Nummern. Die Box gilt als
            geschlossen, sobald alle Klappen geschlossen wurden. Dieses <em>Shut the Box</em>-Spiel
            zeigt Klappen mit den Werten von eins bis neun.</p>
          <p>Die meisten <em>Shut the Box</em>-Varianten werden mit <em>zwei sechsseitigen
            Würfeln</em> gespielt.</p>
        </div>
        <h3>Spielziel</h3>
        <div>
          <ul>
            <li>Spielziel ist es, möglichst wenig Strafpunkte zu erhalten. Der Spieler
              mit der niedrigsten Anzahl an Strafpunkten gewinnt.</li>
            <li>Jeder Spieler würfelt und punktet die Würfelergebnisse ununterbrochen
              weiter, bis&#8230;</li>
            <ul>
              <li>entweder die Gesamtsumme der Würfel nicht mehr zum Schließen weiterer noch
                offener Klappen genutzt werden kann (Danach spielt der nächste Spieler, indem
                alle Klappen wieder geöffnet werden)</li>
              <li>oder alle Klappen geschlossen wurden. Der Spieler, der die Box schließt,
              also alle Klappen schließt, gewinnt augenblicklich das laufende Spiel,
                selbst wenn andere Spieler noch nicht am Zug waren.</li>
            </ul>
          </ul>
        </div>
        <h3>Strafpunkte</h3>
        <div>
          <p>Die Strafpunkte ergeben sich aus der Summe aller Nummernwerte verbleibender noch
            offener Klappen. Solange es kein Spieler schafft, die Box komplett zu schließen,
            zeigen die verbleibenden offenen Klappen diese Strafpunkte an.</p>
        </div>
        <h3>Empfohlene Regelvariante</h3>
        <div>
          <ul>
            <li>Der Spieler würfelt und zählt die Würfelwerte zusammen.</li>
            <li>Jegliche Kombination verbleibender offener Klappen kann daraufhin
              geschlossen werden. Dabei müssen deren zusammengezählte Werte diesem
              Gesamtwürfelwert exakt entsprechen.</li>
            <li>Sobald die Klappen mit Werten 7, 8 und 9 geschlossen sind, kann der
              Spieler sich bei jedem Würfelwurf dazu entscheiden, entweder einen
              einzelnen Würfel oder doch wieder beide Würfel zu werfen.</li>
          </ul>
        </div>
        <h3>Mehr Varianten</h3>
        <div>
          <h4>Vermeidung hoher Summen</h4>
          <ul>
            <li>Die Strafpunkte entsprechen hierbei der Anzahl noch offener Klappen statt
              der Summe ihrer Werte.</li>
            <li>Die kleinere Anzahl offener Klappen gewinnt.</li>
          </ul>
          <h4>Stärker eingeschränkter Einzelwürfel</h4>
          <ul>
            <li>Der Spieler darf bei jedem Wurf entscheiden, einen einzelnen
              Würfel oder beide Würfel zu nutzen, falls die verbleibende
              Gesamtsumme aller Werte noch offener Klappen noch 6 oder
              weniger beträgt.</li>
          </ul>
          <h4>Nur zwei Würfel</h4>
          <ul>
            <li>Der Spieler kann nur mit zwei Würfeln werfen.</li>
            <li>Dies bedeutet auch, dass der Spielzug endet, falls nur noch
              die Klappe mit dem Wert #1 verbleibt (solange keine andere
              verwendete Regel im Widerspruch steht), da mit zwei Würfeln
              grundsätzlich mehr als eine Eins erwürfelt wird.</li>
          </ul>
          <h4>Genau passend</h4>
          <ul>
            <li>Der Spieler würfelt und bildet die Gesamtsumme des Wurfs.</li>
            <li>Es dürfen nur genau die Klappen geschlossen werden, die dem
              Wert der Gesamtsumme oder der exakten Werte der einzelnen Würfel
              entsprechen. Der Spieler darf nicht irgendwelche anderen
              Klappenkombinationen wählen, auch wenn diese in Summe gleichen.</li>
            <li>Der Spieler kann nur dann weitermachen, wenn alle Würfel
              gewertet, bzw. verwendet wurden.</li>
          </ul>
          <h4>Werten eines Würfels ist ausreichend</h4>
          <ul>
            <li>Der Spieler würfelt und bildet die Gesamtsumme des Wurfs.</li>
            <li>Es dürfen nur genau die Klappen geschlossen werden, die dem
              Wert der Gesamtsumme oder der exakten Werte der einzelnen Würfel
              entsprechen. Der Spieler darf nicht irgendwelche anderen
              Klappenkombinationen wählen, auch wenn diese in Summe gleichen.</li>
            <li>Der Spieler kann weitermachen, solange mindestens ein Würfel
              gewertet, bzw. verwendet wurde.</li>
            <li>Es kann vereinbart werden, ob eine Verwertung des zweiten Würfels
              optional oder notwendig ist, falls dieser genutzt werden könnte,
              also noch passt. Optional bedeutet, dass es dem Spieler freigestellt
              ist, ob ein noch passender Würfel gewertet wird oder aus
              strategischen Gründen verfällt und weitergewürfelt wird.</li>
          </ul>
          <h4>Thai Stil</h4>
          <ul>
            <li>Der Spieler muss genau und kann auch nur eine einzelne
              Klappe pro Wurf schließen.</li>
            <li>Der Spieler würfelt und bildet die Gesamtsumme des Wurfs.</li>
            <li>Es dürfen nur genau die Klappen geschlossen werden, die dem
              Wert der Gesamtsumme oder der exakten Werte der einzelnen Würfel
              entsprechen. Der Spieler darf nicht irgendwelche anderen
              Klappenkombinationen wählen, auch wenn diese in Summe gleichen.</li>
          </ul>
          <h4>Feste Rundenzahl</h4>
          <ul>
            <li>Es wird über eine vorgegebene vereinbarte Anzahl von
              Spielrunden gespielt.</li>
            <li>Über die Strafpunkte pro Spieler wird jeweils die Summe
              gebildet.</li>
          </ul>
          <h4>Limit für Strafpunkte</h4>
          <ul>
            <li>Es wird über mehrere Spielrunden weiter gespielt.</li>
            <li>Über die Strafpunkte pro Spieler wird jeweils die Summe
              gebildet.</li>
            <li>Solange die Gesamtsumme der Strafpunkte eines Spielers
              ein zuvor festgelegtes maximales Limit nicht überschreitet,
              darf der Spieler weiter mitspielen. Bei Überschreiten
              scheidet der Spieler aus, z.B. bei einem Limit von 45
              Strafpunkten.</li>
            <li>Der letzte verbleibende Spieler gewinnt.</li>
          </ul>
          <h4>Klappenwerte als Ziffern für Strafpunkte</h4>
          <ul>
            <li>Die verbleibenden Klappenwerte werden wie Ziffern für
              die Strafpunkte gelesen (geordnet von der niedrigsten zur höchsten
              Ziffer). <em>Beispiel: Falls die Klappen #2, #5 und #7
              verbleiben, betragen die Strafpunkte 257.</em></li>
          </ul>
        </div>
      </div>`,
		aboutContentHtml: ABOUT_CONTENT_HTML,
	}),
	[LOCALE.IT]: Object.freeze({
		documentTitle: "Shut the Box",
		tabBoard: "Gioco",
		tabRules: "Regole...",
		tabOptions: "Opzioni...",
		tabAbout: "Info...",
		newGame: "Nuovo",
		die1Alt: "Dado 1",
		die2Alt: "Dado 2",
		singleToggleAlt: "Attiva/disattiva la modalità dado singolo",
		languageHeading: "Lingua",
		languageDescription: "Scegli la lingua preferita per l'interfaccia dell'applicazione.",
		languageEnglish: "English",
		languageGerman: "Deutsch",
		languageItalian: "Italiano",
        languageFrench: "Français",
        languageSpanish: "Español",
		soundHeading: "Audio",
		soundDescription: "Scegli l'intensità del suono dei dadi.",
		soundLegend: "Suono dei dadi",
		soundOff: "Disattivato",
		soundSoft: "Basso",
		soundNormal: "Normale",
    soundLoud: "Forte",
		rulesContentHtml: `
      <p><b>Shut the Box</b> è un celebre gioco tradizionale da pub.
        Viene giocato in diverse varianti e non è nota alcuna organizzazione
        che standardizzi in modo ufficiale le regole. Per questo, se
        giocate a <em>Shut the Box</em> con altri, è consigliabile
        concordare prima un regolamento comune. In caso di dubbi,
        si raccomanda di applicare le regole locali.</p>
      <p>L'applicazione <b>Shut the Box</b> è pensata per essere poco restrittiva.
        Nessuna regola specifica viene imposta rigidamente. In qualsiasi
        momento è possibile annullare un'azione, ad esempio riaprire
        una linguetta appena chiusa, e scegliere una mossa diversa.
        Se necessario, si può usare un solo dado oppure due dadi,
        rilanciare, passare al menu e consultare le varianti
        durante la partita.</p>
      <div id='accordion-rules'>
        <h3>Materiale di gioco</h3>
        <div>
          <p>La <em>box</em> è composta da una serie di <em>linguette</em> inizialmente aperte.
            Le linguette indicano il loro valore con numeri stampati.
            La box è chiusa quando tutte le linguette sono chiuse.
            Questa versione di <em>Shut the Box</em> usa linguette da uno a nove.</p>
          <p>La maggior parte delle varianti di <em>Shut the Box</em> si gioca con <em>due dadi a sei facce</em>.</p>
        </div>
        <h3>Obiettivo</h3>
        <div>
          <ul>
            <li>L'obiettivo è minimizzare il proprio punteggio di penalità.
              Vince il giocatore con il punteggio più basso.</li>
            <li>Ogni giocatore continua a lanciare e segnare finché&#8230;</li>
            <ul>
              <li>la somma dei dadi non può più essere usata
                per chiudere le linguette aperte rimanenti. In tal caso,
                il giocatore successivo ricomincia con tutte le linguette aperte.</li>
              <li>oppure tutte le linguette vengono chiuse. In questo caso,
                il giocatore che chiude la box vince immediatamente.</li>
            </ul>
          </ul>
        </div>
        <h3>Punteggio di penalità</h3>
        <div>
          <p>Il punteggio di penalità è la somma dei valori di tutte le linguette rimaste aperte.
            Finché nessun giocatore riesce a chiudere completamente la box,
            le linguette aperte indicano il punteggio di penalità.</p>
        </div>
        <h3>Variante consigliata</h3>
        <div>
          <ul>
            <li>Il giocatore lancia i dadi e ne somma i valori.</li>
            <li>Qualsiasi combinazione di linguette aperte può essere chiusa,
              ma la somma deve corrispondere esattamente al totale del lancio.</li>
            <li>Quando le linguette 7, 8 e 9 sono chiuse, il giocatore può
              scegliere a ogni turno se lanciare un dado o due.</li>
          </ul>
        </div>
        <h3>Altre varianti</h3>
        <div>
          <h4>Evitare somme alte</h4>
          <ul>
            <li>Si può usare come punteggio il numero di linguette aperte,
              invece della somma dei loro valori.</li>
            <li>Vince chi ha meno linguette aperte.</li>
          </ul>
          <h4>Un dado con restrizione maggiore</h4>
          <ul>
            <li>Il giocatore può scegliere un dado o due dadi solo se la somma
              delle linguette aperte è pari o inferiore a 6.</li>
          </ul>
          <h4>Solo due dadi</h4>
          <ul>
            <li>Il giocatore deve usare sempre due dadi.</li>
            <li>Quindi il turno termina se rimane aperta solo la linguetta #1,
              salvo l'applicazione di altre regole.</li>
          </ul>
        </div>
      </div>`,
		aboutContentHtml: ABOUT_CONTENT_HTML,
	}),
	[LOCALE.FR]: Object.freeze({
		documentTitle: "Shut the Box",
		tabBoard: "Jeu",
		tabRules: "Règles...",
		tabOptions: "Options...",
		tabAbout: "Infos...",
		newGame: "Nouveau",
		die1Alt: "Dé 1",
		die2Alt: "Dé 2",
		singleToggleAlt: "Basculer en mode un dé",
		languageHeading: "Langue",
		languageDescription: "Choisissez votre langue préférée pour l'interface de l'application.",
		languageEnglish: "English",
		languageGerman: "Deutsch",
		languageItalian: "Italiano",
		languageFrench: "Français",
        languageSpanish: "Español",
		soundHeading: "Son",
		soundDescription: "Choisissez l'intensité du son des dés.",
		soundLegend: "Son des dés",
		soundOff: "Désactivé",
		soundSoft: "Faible",
		soundNormal: "Normal",
    soundLoud: "Fort",
		rulesContentHtml: `
      <p><b>Shut the Box</b> est un célèbre jeu traditionnel de pub.
        Il existe plusieurs variantes et aucune organisation n'est connue
        pour en standardiser officiellement les règles. Par conséquent,
        si vous jouez à <em>Shut the Box</em> avec d'autres personnes,
        il est recommandé de convenir d'un règlement commun à l'avance.
        En cas de doute, appliquez les règles locales.</p>
      <p>L'application <b>Shut the Box</b> est conçue pour rester peu restrictive.
        Aucune règle spécifique n'est imposée de manière rigide. À tout moment,
        vous pouvez annuler une action, par exemple rouvrir un clapet
        que vous venez de fermer, puis choisir une autre option.
        Si nécessaire, vous pouvez utiliser un seul dé ou deux dés,
        relancer, revenir au menu et consulter les variantes
        pendant la partie.</p>
      <div id='accordion-rules'>
        <h3>Matériel de jeu</h3>
        <div>
          <p>La <em>boîte</em> se compose d'une série de <em>clapets</em> initialement ouverts.
            Les clapets indiquent leur valeur par des chiffres imprimés.
            La boîte est fermée lorsque tous les clapets sont fermés.
            Cette version de <em>Shut the Box</em> utilise des clapets de un à neuf.</p>
          <p>La plupart des variantes de <em>Shut the Box</em> se jouent avec <em>deux dés à six faces</em>.</p>
        </div>
        <h3>Objectif</h3>
        <div>
          <ul>
            <li>L'objectif est de minimiser son score de pénalité.
              Le joueur ayant le score le plus bas gagne.</li>
            <li>Chaque joueur continue à lancer et marquer jusqu'à ce que&#8230;</li>
            <ul>
              <li>la somme des dés ne puisse plus être utilisée
                pour fermer les clapets encore ouverts. Dans ce cas,
                le joueur suivant recommence avec tous les clapets ouverts.</li>
              <li>ou bien tous les clapets soient fermés. Dans ce cas,
                le joueur qui ferme la boîte gagne immédiatement.</li>
            </ul>
          </ul>
        </div>
        <h3>Score de pénalité</h3>
        <div>
          <p>Le score de pénalité est la somme des valeurs de tous les clapets restés ouverts.
            Tant qu'aucun joueur ne parvient à fermer complètement la boîte,
            les clapets ouverts indiquent le score de pénalité.</p>
        </div>
        <h3>Variante recommandée</h3>
        <div>
          <ul>
            <li>Le joueur lance les dés et additionne les valeurs obtenues.</li>
            <li>Toute combinaison de clapets ouverts peut être fermée,
              mais la somme doit correspondre exactement au total du lancer.</li>
            <li>Lorsque les clapets 7, 8 et 9 sont fermés, le joueur peut
              choisir à chaque tour de lancer un dé ou deux.</li>
          </ul>
        </div>
        <h3>Autres variantes</h3>
        <div>
          <h4>Éviter les sommes élevées</h4>
          <ul>
            <li>Le score peut être basé sur le nombre de clapets ouverts,
              plutôt que sur la somme de leurs valeurs.</li>
            <li>Le joueur avec le moins de clapets ouverts l'emporte.</li>
          </ul>
          <h4>Un dé avec contrainte renforcée</h4>
          <ul>
            <li>Le joueur peut choisir un dé ou deux dés uniquement si la somme
              des clapets ouverts est inférieure ou égale à 6.</li>
          </ul>
          <h4>Deux dés uniquement</h4>
          <ul>
            <li>Le joueur doit toujours utiliser deux dés.</li>
            <li>Le tour se termine donc s'il ne reste ouvert que le clapet #1,
              sauf application d'autres règles.</li>
          </ul>
        </div>
      </div>`,
		aboutContentHtml: ABOUT_CONTENT_HTML,
	}),
	[LOCALE.ES]: Object.freeze({
		documentTitle: "Shut the Box",
		tabBoard: "Juego",
		tabRules: "Reglas...",
		tabOptions: "Opciones...",
		tabAbout: "Información...",
		newGame: "Nuevo",
		die1Alt: "Dado 1",
		die2Alt: "Dado 2",
		singleToggleAlt: "Activar o desactivar el modo de un dado",
		languageHeading: "Idioma",
		languageDescription: "Elige tu idioma preferido para la interfaz de la aplicación.",
		languageEnglish: "English",
		languageGerman: "Deutsch",
		languageItalian: "Italiano",
		languageFrench: "Français",
		languageSpanish: "Español",
		soundHeading: "Sonido",
		soundDescription: "Elige la intensidad del sonido de los dados.",
		soundLegend: "Sonido de los dados",
		soundOff: "Desactivado",
		soundSoft: "Bajo",
		soundNormal: "Normal",
    soundLoud: "Fuerte",
		rulesContentHtml: `
      <p><b>Shut the Box</b> es un famoso juego tradicional de pub.
        Se juega en distintas variantes y no se conoce ninguna organización
        que estandarice oficialmente sus reglas. Por eso, si
        juegas a <em>Shut the Box</em> con otras personas, es recomendable
        acordar antes un reglamento común. En caso de duda,
        se recomienda aplicar las reglas locales.</p>
      <p>La aplicación <b>Shut the Box</b> está diseñada para ser poco restrictiva.
        No se impone de forma rígida ninguna regla específica. En cualquier
        momento puedes deshacer una acción, por ejemplo volver a abrir
        una pestaña que acabas de cerrar, y elegir una jugada distinta.
        Si hace falta, puedes usar un solo dado o dos dados,
        volver a lanzar, cambiar al menú y consultar variantes
        durante la partida.</p>
      <div id='accordion-rules'>
        <h3>Material de juego</h3>
        <div>
          <p>La <em>caja</em> está formada por una serie de <em>pestañas</em> inicialmente abiertas.
            Las pestañas indican su valor con números impresos.
            La caja se cierra cuando todas las pestañas están cerradas.
            Esta versión de <em>Shut the Box</em> usa pestañas del uno al nueve.</p>
          <p>La mayoría de las variantes de <em>Shut the Box</em> se juegan con <em>dos dados de seis caras</em>.</p>
        </div>
        <h3>Objetivo</h3>
        <div>
          <ul>
            <li>El objetivo es minimizar tu puntuación de penalización.
              Gana el jugador con la puntuación más baja.</li>
            <li>Cada jugador sigue lanzando y puntuando hasta que&#8230;</li>
            <ul>
              <li>la suma de los dados ya no pueda usarse
                para cerrar las pestañas abiertas restantes. En ese caso,
                el siguiente jugador empieza de nuevo con todas las pestañas abiertas.</li>
              <li>o bien se cierren todas las pestañas. En este caso,
                el jugador que cierra la caja gana de inmediato.</li>
            </ul>
          </ul>
        </div>
        <h3>Puntuación de penalización</h3>
        <div>
          <p>La puntuación de penalización es la suma de los valores de todas las pestañas que quedan abiertas.
            Mientras ningún jugador consiga cerrar completamente la caja,
            las pestañas abiertas indican la puntuación de penalización.</p>
        </div>
        <h3>Variante recomendada</h3>
        <div>
          <ul>
            <li>El jugador lanza los dados y suma los valores obtenidos.</li>
            <li>Se puede cerrar cualquier combinación de pestañas abiertas,
              pero la suma debe coincidir exactamente con el total de la tirada.</li>
            <li>Cuando las pestañas 7, 8 y 9 están cerradas, el jugador puede
              elegir en cada turno si lanza un dado o dos.</li>
          </ul>
        </div>
        <h3>Más variantes</h3>
        <div>
          <h4>Evitar sumas altas</h4>
          <ul>
            <li>Se puede usar como puntuación el número de pestañas abiertas,
              en lugar de la suma de sus valores.</li>
            <li>Gana quien tenga menos pestañas abiertas.</li>
          </ul>
          <h4>Un dado con restricción mayor</h4>
          <ul>
            <li>El jugador puede elegir un dado o dos dados solo si la suma
              de las pestañas abiertas es igual o inferior a 6.</li>
          </ul>
          <h4>Solo dos dados</h4>
          <ul>
            <li>El jugador debe usar siempre dos dados.</li>
            <li>Por tanto, el turno termina si solo queda abierta la pestaña #1,
              salvo que se apliquen otras reglas.</li>
          </ul>
        </div>
      </div>`,
		aboutContentHtml: ABOUT_CONTENT_HTML,
	}),
});

export function isLocale(value) {
	return value === LOCALE.EN || value === LOCALE.DE || value === LOCALE.IT || value === LOCALE.FR || value === LOCALE.ES;
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
