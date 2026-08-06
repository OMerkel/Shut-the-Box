export const LOCALE_BUNDLE_ES = Object.freeze({
    documentTitle: "Shut the Box",
    tabBoard: "Juego",
    tabRules: "Reglas...",
    tabOptions: "Opciones...",
    tabAbout: "InformaciÃ³n...",
    newGame: "Nuevo",
    die1Alt: "Dado 1",
    die2Alt: "Dado 2",
    singleToggleAlt: "Activar o desactivar el modo de un dado",
    languageHeading: "Idioma",
    languageDescription:
        "Elige tu idioma preferido para la interfaz de la aplicaciÃ³n.",
    languageEnglish: "English",
    languageGerman: "Deutsch",
    languageItalian: "Italiano",
    languageFrench: "FranÃ§ais",
    languageSpanish: "EspaÃ±ol",
    soundHeading: "Sonido",
    soundDescription: "Elige la intensidad del sonido de los dados.",
    soundLegend: "Sonido de los dados",
    soundOff: "Desactivado",
    soundSoft: "Bajo",
    soundNormal: "Normal",
    soundLoud: "Fuerte",
    rulesContentHtml: `
      <p><b>Shut the Box</b> es un famoso juego tradicional de pub.
        Se juega en distintas variantes y no se conoce ninguna organizaciÃ³n
        que estandarice oficialmente sus reglas. Por eso, si
        juegas a <em>Shut the Box</em> con otras personas, es recomendable
        acordar antes un reglamento comÃºn. En caso de duda,
        se recomienda aplicar las reglas locales.</p>
      <p>La aplicaciÃ³n <b>Shut the Box</b> estÃ¡ diseÃ±ada para ser poco restrictiva.
        No se impone de forma rÃ­gida ninguna regla especÃ­fica. En cualquier
        momento puedes deshacer una acciÃ³n, por ejemplo volver a abrir
        una pestaÃ±a que acabas de cerrar, y elegir una jugada distinta.
        Si hace falta, puedes usar un solo dado o dos dados,
        volver a lanzar, cambiar al menÃº y consultar variantes
        durante la partida.</p>
      <div id='accordion-rules'>
        <h3>Material de juego</h3>
        <div>
          <p>La <em>caja</em> estÃ¡ formada por una serie de <em>pestaÃ±as</em> inicialmente abiertas.
            Las pestaÃ±as indican su valor con nÃºmeros impresos.
            La caja se cierra cuando todas las pestaÃ±as estÃ¡n cerradas.
            Esta versiÃ³n de <em>Shut the Box</em> usa pestaÃ±as del uno al nueve.</p>
          <p>La mayorÃ­a de las variantes de <em>Shut the Box</em> se juegan con <em>dos dados de seis caras</em>.</p>
        </div>
        <h3>Objetivo</h3>
        <div>
          <ul>
            <li>El objetivo es minimizar tu puntuaciÃ³n de penalizaciÃ³n.
              Gana el jugador con la puntuaciÃ³n mÃ¡s baja.</li>
            <li>Cada jugador sigue lanzando y puntuando hasta que&#8230;</li>
            <ul>
              <li>la suma de los dados ya no pueda usarse
                para cerrar las pestaÃ±as abiertas restantes. En ese caso,
                el siguiente jugador empieza de nuevo con todas las pestaÃ±as abiertas.</li>
              <li>o bien se cierren todas las pestaÃ±as. En este caso,
                el jugador que cierra la caja gana de inmediato.</li>
            </ul>
          </ul>
        </div>
        <h3>PuntuaciÃ³n de penalizaciÃ³n</h3>
        <div>
          <p>La puntuaciÃ³n de penalizaciÃ³n es la suma de los valores de todas las pestaÃ±as que quedan abiertas.
            Mientras ningÃºn jugador consiga cerrar completamente la caja,
            las pestaÃ±as abiertas indican la puntuaciÃ³n de penalizaciÃ³n.</p>
        </div>
        <h3>Variante recomendada</h3>
        <div>
          <ul>
            <li>El jugador lanza los dados y suma los valores obtenidos.</li>
            <li>Se puede cerrar cualquier combinaciÃ³n de pestaÃ±as abiertas,
              pero la suma debe coincidir exactamente con el total de la tirada.</li>
            <li>Cuando las pestaÃ±as 7, 8 y 9 estÃ¡n cerradas, el jugador puede
              elegir en cada turno si lanza un dado o dos.</li>
          </ul>
        </div>
        <h3>MÃ¡s variantes</h3>
        <div>
          <h4>Evitar sumas altas</h4>
          <ul>
            <li>Se puede usar como puntuaciÃ³n el nÃºmero de pestaÃ±as abiertas,
              en lugar de la suma de sus valores.</li>
            <li>Gana quien tenga menos pestaÃ±as abiertas.</li>
          </ul>
          <h4>Un dado con restricciÃ³n mayor</h4>
          <ul>
            <li>El jugador puede elegir un dado o dos dados solo si la suma
              de las pestaÃ±as abiertas es igual o inferior a 6.</li>
          </ul>
          <h4>Solo dos dados</h4>
          <ul>
            <li>El jugador debe usar siempre dos dados.</li>
            <li>Por tanto, el turno termina si solo queda abierta la pestaÃ±a #1,
              salvo que se apliquen otras reglas.</li>
          </ul>
        </div>
      </div>`,
});
