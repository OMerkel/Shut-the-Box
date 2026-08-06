export const LOCALE_BUNDLE_DE = Object.freeze({
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
    languageDescription:
        "Wählen Sie Ihre bevorzugte Sprache für die Bedienoberfläche.",
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
});

