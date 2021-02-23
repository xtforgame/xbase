import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import yargs from 'yargs';
import del from 'del';
import run from 'gulp-run';
import babel from 'gulp-babel';


gulp.task('xxx', gulp.series(
  cb => setTimeout(cb, 100),
));

gulp.task('clean', (cb) => del(['server-dist']));

gulp.task('build:server', () => gulp.src('server/*.js')
  .pipe(babel())
  .pipe(gulp.dest('server-dist'))
)

gulp.task('build:stencil', function() {
  return run('npm run build').exec();
})

gulp.task('build:css', function() {
  return run('npm run build-css').exec();
})

gulp.task('build', gulp.series(
  ['clean'],
  ['build:server', 'build:stencil', 'build:css']
))

const reloadTasks = ['build'];
const delay = 1000;

const mainFunc = (cb) => {
  const nodemonConfig = {
    script: 'server-dist/index.js',
    watch: ['server/', 'src/**/*.ts', 'src/**/*.js', 'src/**/*.tsx'],
    ignore: [
      'gulpfile.babel.js',
      'node_modules/',
      'doc/',
    ],
    tasks: reloadTasks,
    delay,
  };
  if (yargs.argv.inspect) {
    nodemonConfig.exec = 'node --inspect';
  }
  let called = false;
  return nodemon(nodemonConfig)
  .on('start', () => {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', () => {
    setTimeout(() => {
      // do some callback
    }, 1000);
  });
};
mainFunc.displayName = `serve:watch`;

gulp.task('server:watch:dev', gulp.series(
  gulp.parallel(...reloadTasks),
  mainFunc
));
