export const LOCALE_BUNDLE_IT = Object.freeze({
    documentTitle: "Shut the Box",
    tabBoard: "Gioco",
    tabRules: "Regole...",
    tabOptions: "Opzioni...",
    tabAbout: "Info...",
    newGame: "Nuovo",
    die1Alt: "Dado 1",
    die2Alt: "Dado 2",
    singleToggleAlt: "Attiva/disattiva la modalitÃ  dado singolo",
    languageHeading: "Lingua",
    languageDescription:
        "Scegli la lingua preferita per l'interfaccia dell'applicazione.",
    languageEnglish: "English",
    languageGerman: "Deutsch",
    languageItalian: "Italiano",
    languageFrench: "FranÃ§ais",
    languageSpanish: "EspaÃ±ol",
    soundHeading: "Audio",
    soundDescription: "Scegli l'intensitÃ  del suono dei dadi.",
    soundLegend: "Suono dei dadi",
    soundOff: "Disattivato",
    soundSoft: "Basso",
    soundNormal: "Normale",
    soundLoud: "Forte",
    rulesContentHtml: `
      <p><b>Shut the Box</b> Ã¨ un celebre gioco tradizionale da pub.
        Viene giocato in diverse varianti e non Ã¨ nota alcuna organizzazione
        che standardizzi in modo ufficiale le regole. Per questo, se
        giocate a <em>Shut the Box</em> con altri, Ã¨ consigliabile
        concordare prima un regolamento comune. In caso di dubbi,
        si raccomanda di applicare le regole locali.</p>
      <p>L'applicazione <b>Shut the Box</b> Ã¨ pensata per essere poco restrittiva.
        Nessuna regola specifica viene imposta rigidamente. In qualsiasi
        momento Ã¨ possibile annullare un'azione, ad esempio riaprire
        una linguetta appena chiusa, e scegliere una mossa diversa.
        Se necessario, si puÃ² usare un solo dado oppure due dadi,
        rilanciare, passare al menu e consultare le varianti
        durante la partita.</p>
      <div id='accordion-rules'>
        <h3>Materiale di gioco</h3>
        <div>
          <p>La <em>box</em> Ã¨ composta da una serie di <em>linguette</em> inizialmente aperte.
            Le linguette indicano il loro valore con numeri stampati.
            La box Ã¨ chiusa quando tutte le linguette sono chiuse.
            Questa versione di <em>Shut the Box</em> usa linguette da uno a nove.</p>
          <p>La maggior parte delle varianti di <em>Shut the Box</em> si gioca con <em>due dadi a sei facce</em>.</p>
        </div>
        <h3>Obiettivo</h3>
        <div>
          <ul>
            <li>L'obiettivo Ã¨ minimizzare il proprio punteggio di penalitÃ .
              Vince il giocatore con il punteggio piÃ¹ basso.</li>
            <li>Ogni giocatore continua a lanciare e segnare finchÃ©&#8230;</li>
            <ul>
              <li>la somma dei dadi non puÃ² piÃ¹ essere usata
                per chiudere le linguette aperte rimanenti. In tal caso,
                il giocatore successivo ricomincia con tutte le linguette aperte.</li>
              <li>oppure tutte le linguette vengono chiuse. In questo caso,
                il giocatore che chiude la box vince immediatamente.</li>
            </ul>
          </ul>
        </div>
        <h3>Punteggio di penalitÃ </h3>
        <div>
          <p>Il punteggio di penalitÃ  Ã¨ la somma dei valori di tutte le linguette rimaste aperte.
            FinchÃ© nessun giocatore riesce a chiudere completamente la box,
            le linguette aperte indicano il punteggio di penalitÃ .</p>
        </div>
        <h3>Variante consigliata</h3>
        <div>
          <ul>
            <li>Il giocatore lancia i dadi e ne somma i valori.</li>
            <li>Qualsiasi combinazione di linguette aperte puÃ² essere chiusa,
              ma la somma deve corrispondere esattamente al totale del lancio.</li>
            <li>Quando le linguette 7, 8 e 9 sono chiuse, il giocatore puÃ²
              scegliere a ogni turno se lanciare un dado o due.</li>
          </ul>
        </div>
        <h3>Altre varianti</h3>
        <div>
          <h4>Evitare somme alte</h4>
          <ul>
            <li>Si puÃ² usare come punteggio il numero di linguette aperte,
              invece della somma dei loro valori.</li>
            <li>Vince chi ha meno linguette aperte.</li>
          </ul>
          <h4>Un dado con restrizione maggiore</h4>
          <ul>
            <li>Il giocatore puÃ² scegliere un dado o due dadi solo se la somma
              delle linguette aperte Ã¨ pari o inferiore a 6.</li>
          </ul>
          <h4>Solo due dadi</h4>
          <ul>
            <li>Il giocatore deve usare sempre due dadi.</li>
            <li>Quindi il turno termina se rimane aperta solo la linguetta #1,
              salvo l'applicazione di altre regole.</li>
          </ul>
        </div>
      </div>`,
});
