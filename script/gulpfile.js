var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('basic1', shell.task([
  'node basic_scripts/b1-get.js'
]));

gulp.task('basic2', shell.task([
  'node basic_scripts/b2-post.js'
]));

gulp.task('basic3', shell.task([
  'node basic_scripts/b3-put.js'
]));

gulp.task('basic4', shell.task([
  'node basic_scripts/b4-delete.js'
]));

gulp.task('basicall', shell.task([
  'node basic_scripts/b_all.js'
]));