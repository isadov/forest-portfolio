'use strict';

module.exports = function() {
	$.gulp.task('js:desktop', function() {
		return $.gulp.src($.path.jsDesktop)
			.pipe($.gp.concat('desktop.js'))
			.pipe($.gulp.dest($.config.root + '/assets/js'))
	})
};
