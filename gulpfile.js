const gulp = require('gulp');
const tap = require('gulp-tap');
const removeUnused = require('email-remove-unused-css');
const util = require('gulp-util');

const whitelist = [
  // '.External*',
  // '.ReadMsgBody',
  // '.yshortcuts',
  // '.Mso*',
  // '#outlook',
  // '.module*',
];

gulp.task('build', () => {
  return gulp
    .src('build/index.html')
    .pipe(
      tap(file => {
        const cleanedHtmlResult = removeUnused(file.contents.toString(), {
          whitelist,
        });
        console.log('aa:' + JSON.stringify(cleanedHtmlResult));

        util.log(
          util.colors.green(
            `\nremoved ${
              cleanedHtmlResult.deletedFromHead.length
            } from head: ${cleanedHtmlResult.deletedFromHead.join(' ')}`
          )
        );
        util.log(
          util.colors.green(
            `\nremoved ${
              cleanedHtmlResult.deletedFromBody.length
            } from body: ${cleanedHtmlResult.deletedFromBody.join(' ')}`
          )
        );
        file.contents = Buffer.from(cleanedHtmlResult.result);
      })
    )
    .pipe(gulp.dest('build/index2.html'));
});
