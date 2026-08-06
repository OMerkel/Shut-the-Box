export const LOCALE_BUNDLE_FR = Object.freeze({
    documentTitle: "Shut the Box",
    tabBoard: "Jeu",
    tabRules: "RÃ¨gles...",
    tabOptions: "Options...",
    tabAbout: "Infos...",
    newGame: "Nouveau",
    die1Alt: "DÃ© 1",
    die2Alt: "DÃ© 2",
    singleToggleAlt: "Basculer en mode un dÃ©",
    languageHeading: "Langue",
    languageDescription:
        "Choisissez votre langue prÃ©fÃ©rÃ©e pour l'interface de l'application.",
    languageEnglish: "English",
    languageGerman: "Deutsch",
    languageItalian: "Italiano",
    languageFrench: "FranÃ§ais",
    languageSpanish: "EspaÃ±ol",
    soundHeading: "Son",
    soundDescription: "Choisissez l'intensitÃ© du son des dÃ©s.",
    soundLegend: "Son des dÃ©s",
    soundOff: "DÃ©sactivÃ©",
    soundSoft: "Faible",
    soundNormal: "Normal",
    soundLoud: "Fort",
    rulesContentHtml: `
      <p><b>Shut the Box</b> est un cÃ©lÃ¨bre jeu traditionnel de pub.
        Il existe plusieurs variantes et aucune organisation n'est connue
        pour en standardiser officiellement les rÃ¨gles. Par consÃ©quent,
        si vous jouez Ã  <em>Shut the Box</em> avec d'autres personnes,
        il est recommandÃ© de convenir d'un rÃ¨glement commun Ã  l'avance.
        En cas de doute, appliquez les rÃ¨gles locales.</p>
      <p>L'application <b>Shut the Box</b> est conÃ§ue pour rester peu restrictive.
        Aucune rÃ¨gle spÃ©cifique n'est imposÃ©e de maniÃ¨re rigide. Ã€ tout moment,
        vous pouvez annuler une action, par exemple rouvrir un clapet
        que vous venez de fermer, puis choisir une autre option.
        Si nÃ©cessaire, vous pouvez utiliser un seul dÃ© ou deux dÃ©s,
        relancer, revenir au menu et consulter les variantes
        pendant la partie.</p>
      <div id='accordion-rules'>
        <h3>MatÃ©riel de jeu</h3>
        <div>
          <p>La <em>boÃ®te</em> se compose d'une sÃ©rie de <em>clapets</em> initialement ouverts.
            Les clapets indiquent leur valeur par des chiffres imprimÃ©s.
            La boÃ®te est fermÃ©e lorsque tous les clapets sont fermÃ©s.
            Cette version de <em>Shut the Box</em> utilise des clapets de un Ã  neuf.</p>
          <p>La plupart des variantes de <em>Shut the Box</em> se jouent avec <em>deux dÃ©s Ã  six faces</em>.</p>
        </div>
        <h3>Objectif</h3>
        <div>
          <ul>
            <li>L'objectif est de minimiser son score de pÃ©nalitÃ©.
              Le joueur ayant le score le plus bas gagne.</li>
            <li>Chaque joueur continue Ã  lancer et marquer jusqu'Ã  ce que&#8230;</li>
            <ul>
              <li>la somme des dÃ©s ne puisse plus Ãªtre utilisÃ©e
                pour fermer les clapets encore ouverts. Dans ce cas,
                le joueur suivant recommence avec tous les clapets ouverts.</li>
              <li>ou bien tous les clapets soient fermÃ©s. Dans ce cas,
                le joueur qui ferme la boÃ®te gagne immÃ©diatement.</li>
            </ul>
          </ul>
        </div>
        <h3>Score de pÃ©nalitÃ©</h3>
        <div>
          <p>Le score de pÃ©nalitÃ© est la somme des valeurs de tous les clapets restÃ©s ouverts.
            Tant qu'aucun joueur ne parvient Ã  fermer complÃ¨tement la boÃ®te,
            les clapets ouverts indiquent le score de pÃ©nalitÃ©.</p>
        </div>
        <h3>Variante recommandÃ©e</h3>
        <div>
          <ul>
            <li>Le joueur lance les dÃ©s et additionne les valeurs obtenues.</li>
            <li>Toute combinaison de clapets ouverts peut Ãªtre fermÃ©e,
              mais la somme doit correspondre exactement au total du lancer.</li>
            <li>Lorsque les clapets 7, 8 et 9 sont fermÃ©s, le joueur peut
              choisir Ã  chaque tour de lancer un dÃ© ou deux.</li>
          </ul>
        </div>
        <h3>Autres variantes</h3>
        <div>
          <h4>Ã‰viter les sommes Ã©levÃ©es</h4>
          <ul>
            <li>Le score peut Ãªtre basÃ© sur le nombre de clapets ouverts,
              plutÃ´t que sur la somme de leurs valeurs.</li>
            <li>Le joueur avec le moins de clapets ouverts l'emporte.</li>
          </ul>
          <h4>Un dÃ© avec contrainte renforcÃ©e</h4>
          <ul>
            <li>Le joueur peut choisir un dÃ© ou deux dÃ©s uniquement si la somme
              des clapets ouverts est infÃ©rieure ou Ã©gale Ã  6.</li>
          </ul>
          <h4>Deux dÃ©s uniquement</h4>
          <ul>
            <li>Le joueur doit toujours utiliser deux dÃ©s.</li>
            <li>Le tour se termine donc s'il ne reste ouvert que le clapet #1,
              sauf application d'autres rÃ¨gles.</li>
          </ul>
        </div>
      </div>`,
});
