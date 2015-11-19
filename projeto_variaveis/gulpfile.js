'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps');





//Esta tarefa realiza a compilação do SASS e também cria o seu arquivo mapa
gulp.task("compileSass", function()
{
  return gulp.src("*.scss")
  .pipe(maps.init())
  .pipe(sass())
  .pipe(maps.write('.'))
  .pipe(gulp.dest('.'));
});

// ** olha em todos os diretórios, *.scss olha em todos os arquivos com a extensão scss
// com esta tarefa sempre que um dos arquivos definidos mudarem ele irá executar as tarefas descritas
gulp.task("watchFiles", function()
{
  gulp.watch(['*.scss'], ['compileSass'])
});
