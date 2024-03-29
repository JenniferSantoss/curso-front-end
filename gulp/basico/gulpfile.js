const gulp = require('gulp')
const series = gulp.series

const antes1 = cb => {
    console.log('Tarefa Antes 1')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2')
    return cb()
}

function copiar(cb) {
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    // gulp.scr('pastaA/**/*.txt') -> Para todos os arquivos com essa extensão dento da pasta
    //    .pipe(imagemPelaMetade())
    //    .pipe(imagemEmPretoEBranco())
    //    .pipe(trasnformacaoA())
    //    .pipe(trasnformacaoB())
        .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim')
    return cb()
}

module.exports.default = series(
    antes1,
    antes2,
    copiar,
    fim,
)

//No gulp, cada função representa uma task