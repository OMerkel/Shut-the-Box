export const LOCALE_BUNDLE_ES = Object.freeze({
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
    languageDescription:
        "Elige tu idioma preferido para la interfaz de la aplicación.",
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
});

