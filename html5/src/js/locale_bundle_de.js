export const LOCALE_BUNDLE_DE = Object.freeze({
    documentTitle: "Shut the Box",
    tabBoard: "Spiel",
    tabRules: "Regeln...",
    tabOptions: "Optionen...",
    tabAbout: "Info...",
    newGame: "Neu",
    die1Alt: "WÃ¼rfel 1",
    die2Alt: "WÃ¼rfel 2",
    singleToggleAlt: "EinzelwÃ¼rfel umschalten",
    languageHeading: "Sprache",
    languageDescription:
        "WÃ¤hlen Sie Ihre bevorzugte Sprache fÃ¼r die BedienoberflÃ¤che.",
    languageEnglish: "English",
    languageGerman: "Deutsch",
    languageItalian: "Italiano",
    languageFrench: "FranÃ§ais",
    languageSpanish: "EspaÃ±ol",
    soundHeading: "Ton",
    soundDescription: "WÃ¤hlen Sie die LautstÃ¤rke fÃ¼r den WÃ¼rfelklang.",
    soundLegend: "WÃ¼rfelklang",
    soundOff: "Aus",
    soundSoft: "Leise",
    soundNormal: "Normal",
    soundLoud: "Laut",
    rulesContentHtml: `
      <p><b>Shut the Box</b> ist ein beliebtes traditionelles Spiel in irischen/englischen Pubs.
        Es wird in unterschiedlichen Varianten gespielt. Es gibt keine Organisation, die
        einen Standard fÃ¼r die Spielregeln anstrebt. Wenn daher <em>Shut the Box</em> mit anderen
        gemeinsam gespielt wird, ist es oft nÃ¶tig, sich auf ein Regelwerk zu einigen bzw. diesem
        gemeinsam zuzustimmen. Im Zweifel gilt die Empfehlung, lokale Hausregeln zu erfragen
        und diese anzuwenden.</p>
      <p>Die <b>Shut the Box</b>-Applikation soll hinsichtlich Bedienung bewusst wenig
        einschrÃ¤nkend sein. Sie werden nicht wirklich zur Anwendung bestimmter Regeln gezwungen.
        Jederzeit kÃ¶nnen Sie alle durchgefÃ¼hrten Aktionen rÃ¼ckgÃ¤ngig machen, wie etwa eine gerade
        zuvor geschlossene Klappe doch wieder zu Ã¶ffnen und sich dann zu anderen Aktionen zu
        entscheiden. Falls es gewollt oder nÃ¶tig ist, kÃ¶nnen Sie entweder einen einzelnen WÃ¼rfel
        oder doch zwei WÃ¼rfel nehmen, erneut wÃ¼rfeln, ins MenÃ¼ wechseln, um etwa eine der
        mÃ¶glichen Regelvarianten wÃ¤hrend des Spiels nachzuschlagen.</p>
      <div id='accordion-rules'>
        <h3>Spielmaterial</h3>
        <div>
          <p>Die <em>Box</em> besteht aus <em>Klappen</em>, die zu Spielbeginn alle geÃ¶ffnet sind.
            Klappen zeigen ihren eigenen Wert durch auf ihnen abgebildete Nummern. Die Box gilt als
            geschlossen, sobald alle Klappen geschlossen wurden. Dieses <em>Shut the Box</em>-Spiel
            zeigt Klappen mit den Werten von eins bis neun.</p>
          <p>Die meisten <em>Shut the Box</em>-Varianten werden mit <em>zwei sechsseitigen
            WÃ¼rfeln</em> gespielt.</p>
        </div>
        <h3>Spielziel</h3>
        <div>
          <ul>
            <li>Spielziel ist es, mÃ¶glichst wenig Strafpunkte zu erhalten. Der Spieler
              mit der niedrigsten Anzahl an Strafpunkten gewinnt.</li>
            <li>Jeder Spieler wÃ¼rfelt und punktet die WÃ¼rfelergebnisse ununterbrochen
              weiter, bis&#8230;</li>
            <ul>
              <li>entweder die Gesamtsumme der WÃ¼rfel nicht mehr zum SchlieÃŸen weiterer noch
                offener Klappen genutzt werden kann (Danach spielt der nÃ¤chste Spieler, indem
                alle Klappen wieder geÃ¶ffnet werden)</li>
              <li>oder alle Klappen geschlossen wurden. Der Spieler, der die Box schlieÃŸt,
              also alle Klappen schlieÃŸt, gewinnt augenblicklich das laufende Spiel,
                selbst wenn andere Spieler noch nicht am Zug waren.</li>
            </ul>
          </ul>
        </div>
        <h3>Strafpunkte</h3>
        <div>
          <p>Die Strafpunkte ergeben sich aus der Summe aller Nummernwerte verbleibender noch
            offener Klappen. Solange es kein Spieler schafft, die Box komplett zu schlieÃŸen,
            zeigen die verbleibenden offenen Klappen diese Strafpunkte an.</p>
        </div>
        <h3>Empfohlene Regelvariante</h3>
        <div>
          <ul>
            <li>Der Spieler wÃ¼rfelt und zÃ¤hlt die WÃ¼rfelwerte zusammen.</li>
            <li>Jegliche Kombination verbleibender offener Klappen kann daraufhin
              geschlossen werden. Dabei mÃ¼ssen deren zusammengezÃ¤hlte Werte diesem
              GesamtwÃ¼rfelwert exakt entsprechen.</li>
            <li>Sobald die Klappen mit Werten 7, 8 und 9 geschlossen sind, kann der
              Spieler sich bei jedem WÃ¼rfelwurf dazu entscheiden, entweder einen
              einzelnen WÃ¼rfel oder doch wieder beide WÃ¼rfel zu werfen.</li>
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
          <h4>StÃ¤rker eingeschrÃ¤nkter EinzelwÃ¼rfel</h4>
          <ul>
            <li>Der Spieler darf bei jedem Wurf entscheiden, einen einzelnen
              WÃ¼rfel oder beide WÃ¼rfel zu nutzen, falls die verbleibende
              Gesamtsumme aller Werte noch offener Klappen noch 6 oder
              weniger betrÃ¤gt.</li>
          </ul>
          <h4>Nur zwei WÃ¼rfel</h4>
          <ul>
            <li>Der Spieler kann nur mit zwei WÃ¼rfeln werfen.</li>
            <li>Dies bedeutet auch, dass der Spielzug endet, falls nur noch
              die Klappe mit dem Wert #1 verbleibt (solange keine andere
              verwendete Regel im Widerspruch steht), da mit zwei WÃ¼rfeln
              grundsÃ¤tzlich mehr als eine Eins erwÃ¼rfelt wird.</li>
          </ul>
          <h4>Genau passend</h4>
          <ul>
            <li>Der Spieler wÃ¼rfelt und bildet die Gesamtsumme des Wurfs.</li>
            <li>Es dÃ¼rfen nur genau die Klappen geschlossen werden, die dem
              Wert der Gesamtsumme oder der exakten Werte der einzelnen WÃ¼rfel
              entsprechen. Der Spieler darf nicht irgendwelche anderen
              Klappenkombinationen wÃ¤hlen, auch wenn diese in Summe gleichen.</li>
            <li>Der Spieler kann nur dann weitermachen, wenn alle WÃ¼rfel
              gewertet, bzw. verwendet wurden.</li>
          </ul>
          <h4>Werten eines WÃ¼rfels ist ausreichend</h4>
          <ul>
            <li>Der Spieler wÃ¼rfelt und bildet die Gesamtsumme des Wurfs.</li>
            <li>Es dÃ¼rfen nur genau die Klappen geschlossen werden, die dem
              Wert der Gesamtsumme oder der exakten Werte der einzelnen WÃ¼rfel
              entsprechen. Der Spieler darf nicht irgendwelche anderen
              Klappenkombinationen wÃ¤hlen, auch wenn diese in Summe gleichen.</li>
            <li>Der Spieler kann weitermachen, solange mindestens ein WÃ¼rfel
              gewertet, bzw. verwendet wurde.</li>
            <li>Es kann vereinbart werden, ob eine Verwertung des zweiten WÃ¼rfels
              optional oder notwendig ist, falls dieser genutzt werden kÃ¶nnte,
              also noch passt. Optional bedeutet, dass es dem Spieler freigestellt
              ist, ob ein noch passender WÃ¼rfel gewertet wird oder aus
              strategischen GrÃ¼nden verfÃ¤llt und weitergewÃ¼rfelt wird.</li>
          </ul>
          <h4>Thai Stil</h4>
          <ul>
            <li>Der Spieler muss genau und kann auch nur eine einzelne
              Klappe pro Wurf schlieÃŸen.</li>
            <li>Der Spieler wÃ¼rfelt und bildet die Gesamtsumme des Wurfs.</li>
            <li>Es dÃ¼rfen nur genau die Klappen geschlossen werden, die dem
              Wert der Gesamtsumme oder der exakten Werte der einzelnen WÃ¼rfel
              entsprechen. Der Spieler darf nicht irgendwelche anderen
              Klappenkombinationen wÃ¤hlen, auch wenn diese in Summe gleichen.</li>
          </ul>
          <h4>Feste Rundenzahl</h4>
          <ul>
            <li>Es wird Ã¼ber eine vorgegebene vereinbarte Anzahl von
              Spielrunden gespielt.</li>
            <li>Ãœber die Strafpunkte pro Spieler wird jeweils die Summe
              gebildet.</li>
          </ul>
          <h4>Limit fÃ¼r Strafpunkte</h4>
          <ul>
            <li>Es wird Ã¼ber mehrere Spielrunden weiter gespielt.</li>
            <li>Ãœber die Strafpunkte pro Spieler wird jeweils die Summe
              gebildet.</li>
            <li>Solange die Gesamtsumme der Strafpunkte eines Spielers
              ein zuvor festgelegtes maximales Limit nicht Ã¼berschreitet,
              darf der Spieler weiter mitspielen. Bei Ãœberschreiten
              scheidet der Spieler aus, z.B. bei einem Limit von 45
              Strafpunkten.</li>
            <li>Der letzte verbleibende Spieler gewinnt.</li>
          </ul>
          <h4>Klappenwerte als Ziffern fÃ¼r Strafpunkte</h4>
          <ul>
            <li>Die verbleibenden Klappenwerte werden wie Ziffern fÃ¼r
              die Strafpunkte gelesen (geordnet von der niedrigsten zur hÃ¶chsten
              Ziffer). <em>Beispiel: Falls die Klappen #2, #5 und #7
              verbleiben, betragen die Strafpunkte 257.</em></li>
          </ul>
        </div>
      </div>`,
});
