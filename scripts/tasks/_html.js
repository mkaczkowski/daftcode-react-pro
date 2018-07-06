// gulp.task("inject", function() {
//   gulp
//     .src("./build/en.html")
//     .pipe(
//       inject(gulp.src(["./build/static/media/*.css"],
//         {
//           read: true,
//           removeTags:true
//         }), {
//         transform: function(filePath, file) {
//           return '<style type="text/css">' + file.contents.toString("utf8") + "</style>";
//         }
//       })
//     )
//     .pipe(gulp.dest("./build"));
// });
