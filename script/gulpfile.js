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

gulp.task('all_function', shell.task([
  'node medium_scripts/all.js'
]));

gulp.task('expr_reg', shell.task([
  'node medium_scripts/get-expreg.js'
]));

gulp.task('matrix', shell.task([
  'node medium_scripts/matrix.js'
]));

gulp.task('next', shell.task([
  'node medium_scripts/next-sample.js'
]));
