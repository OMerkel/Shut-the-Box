//
// Copyright (c) 2016 Oliver Merkel
// All rights reserved.
//
// @author Oliver Merkel, <Merkel(dot)Oliver(at)web(dot)de>
//

var die1 = $('#die1'),
  die2 = $('#die2');
var flap = new Array();
var single = $('#single');

function showResult() {
  die1.css('visibility', 'visible');
  die2.css('visibility', single.is(':checked') ? 'hidden' : 'visible');
}

function roll() {
  die1.css('visibility', 'hidden');
  die2.css('visibility', 'hidden');
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

function resize() {
  var innerHeight = $(window).innerHeight();
	$('#game-region').css('min-height', (innerHeight-64)+'px');

  var innerWidth = window.innerWidth;
  var size = 500 < innerWidth ? 125 : (innerWidth>>2);
  die1.css('width', size);
  die2.css('width', size);

  var minSize = 32;
  var size = 0.05 * innerWidth < minSize ? minSize : 0.05 * innerWidth;
  $('#customMenu').css({
    'width': size+'px', 'height': size+'px',
    'background-size': size+'px ' + size+'px',
  });
  size = 0.05 * innerWidth < minSize ? minSize : 0.05 * innerWidth;
  $('#customBackRules').css({
    'width': size+'px', 'height': size+'px',
    'background-size': size+'px ' + size+'px',
  });
  $('#customBackAbout').css({
    'width': size+'px', 'height': size+'px',
    'background-size': size+'px ' + size+'px',
  });
}

function init() {
  for(var i=0; i<9; ++i) {
    flap[flap.length] = $('#flap-'+(i+1));
  }
  $('#new').click(newGame);
  single.click(toggleDiceAmount);
  $(window).resize(resize);
  $(window).resize();
  die1.click(roll);
  die2.click(roll);
  showResult();
}

$(window).load( init() );
