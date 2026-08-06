export const LOCALE_BUNDLE_EN = Object.freeze({
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
    languageDescription:
        "Choose your preferred language for the application interface.",
    languageEnglish: "English",
    languageGerman: "Deutsch",
    languageItalian: "Italiano",
    languageFrench: "FranÃ§ais",
    languageSpanish: "EspaÃ±ol",
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
});
