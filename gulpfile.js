'use strict';

var gulp = require('gulp');
var sistemiumGulp = require('sistemium-gulp');

sistemiumGulp
  .config({
    ngModule: 'webPage',
    browserSync: {
      ghostMode: false
    }
  })
  .run(gulp);
