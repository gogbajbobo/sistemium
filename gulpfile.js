'use strict';

var gulp = require('gulp');
var sistemiumGulp = require('sistemium-gulp');
var gettext = require('gulp-angular-gettext');

sistemiumGulp
  .config({
    ngModule: 'webPage',
    browserSync: {
      ghostMode: false
    }
  })
  .run(gulp);

gulp.task('pot', function () {
        return gulp.src(['src/partials/**/*.html', 'src/scripts/**/*.js'])
            .pipe(gettext.extract('template.pot', {
                // options to pass to angular-gettext-tools...
            }))
            .pipe(gulp.dest('po/'));
    });

gulp.task('translations', function () {
        return gulp.src('po/**/*.po')
            .pipe(gettext.compile({
                // options to pass to angular-gettext-tools...
                format: 'json'
            }))
            .pipe(gulp.dest('dist/translations/'));
    });