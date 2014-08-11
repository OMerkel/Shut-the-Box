//
// Copyright (c) 2014 Oliver Merkel
// All rights reserved.
//
// @author Oliver Merkel, <Merkel(dot)Oliver(at)web(dot)de>
//

var die1 = $('#die1'),
  die2 = $('#die2');
var flap = new Array();
var single = $('#single');

function showResult() {
  die1.css({opacity: 1.0, visibility: 'visible'});
  if (!single.is(':checked')) {
    die2.css({opacity: 1.0, visibility: 'visible'});
  }
}

function roll() {
  die1.css({opacity: 0.0, visibility: 'hidden'});
  die2.css({opacity: 0.0, visibility: 'hidden'});
  var die1value=Math.floor(Math.random()*6)+1;
  var die2value=Math.floor(Math.random()*6)+1;
  die1[0].src = 'img/1w6-' + die1value + '.png';
  die2[0].src = 'img/1w6-' + die2value + '.png';
  setTimeout(showResult, 1000);
}

function newGame() {
  for(var i=0; i<9; ++i) {
    flap[i].val('off').flipswitch('refresh');
  }
}

function toggleDiceAmount() {
  roll();
}

function init() {
  for(var i=0; i<9; ++i) {
    flap[flap.length] = $('#flap-'+(i+1));
  }
  $('#new').click(newGame);
  single.click(toggleDiceAmount);
  die1.click(roll);
  die2.click(roll);
}

$( init );
