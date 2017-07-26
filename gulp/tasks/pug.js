'use strict';

module.exports = function() {
  $.gulp.task('pug', function() {
    var fs = require('fs'),
    LOCALS = './source/template/data/content.json';

    return $.gulp.src('./source/template/pages/*.pug')
      .pipe($.gp.pug({ 
        locals: JSON.parse(fs.readFileSync(LOCALS, 'utf-8')),
        pretty: true 
      }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
