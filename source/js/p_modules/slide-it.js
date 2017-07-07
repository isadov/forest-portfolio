'use strict';

module.exports = function (block, parallaxAmount) {
  var
    parallax = -parallaxAmount + '%',
    transformString = 'translate3d(0,' + parallax + ',0)';

  block.css({"will-change":"transform"});
	block.css('transform', transformString);
  
};