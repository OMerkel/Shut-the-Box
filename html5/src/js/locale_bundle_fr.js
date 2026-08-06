export const LOCALE_BUNDLE_FR = Object.freeze({
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
    languageDescription:
        "Choisissez votre langue préférée pour l'interface de l'application.",
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
});

