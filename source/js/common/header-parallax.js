'use strict';

var slideIt = require('./slide-it');

module.exports = function () {
	var slideItText= function (block, parallaxAmount) {
		var
		parallax = -parallaxAmount + '%',
		transformString = 'translate3d(-50%,' + parallax + ',0)';

		block.css({"will-change":"transform"});
		block.css('transform', transformString);
	}

	var verticalParallax = function() {
		var
		headerHeight = $('.js-header').height(),
		bg = $('.js-header__bg'),
		author = $('.js-header__author'),
		text = $('.js-header__text');

		$(window).scroll(function() {

			var scrollPos = $(window).scrollTop();
			var defaultValue = 50;

			if (scrollPos < headerHeight) {
				slideIt(bg, -scrollPos / 30);
				slideItText(text, defaultValue + scrollPos / 15);
				slideIt(author, scrollPos / 10);
			}
		});
	}
};
