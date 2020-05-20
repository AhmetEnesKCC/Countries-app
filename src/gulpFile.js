var gulp = require("gulp");
var sass = require("gulp-sass");
var del = require("del");
var tap = require("gulp-tap"); // npm install gulp-tap --save-dev
var newFile = require("gulp-file");
var path = require("path"); // npm install gulp-file

gulp.task("clean", function () {
  return del([
    "./serviceWorker.js",
    "./setupTests.js",
    "./logo.svg",
    "./App.css",
    "./App.test.js",
    "./index.css",
    "./App.js",
  ]);
});

gulp.task("new", async function () {
  gulp.src("./").pipe(
    tap(function (file) {
      var fileName = "main.scss";
      var contents = "body {margin: 0;padding:0}";
      return newFile(fileName, contents).pipe(gulp.dest("./SCSS"));
    })
  );
});

gulp.task("sass", async function () {
  return gulp
    .src("./SCSS/**/*.scss")
    .pipe(sass())
    .on("error", function (err) {
      console.log("BÜYÜK HATA");
      this.emit("end");
    })
    .pipe(gulp.dest("./CSS"));
});
gulp.task("watch:sass", async function () {
  return gulp.watch("./SCSS/**/*.scss", gulp.series("sass"));
});

const imageFolder = "countries app";
gulp.task("copyImages", function () {
  return gulp
    .src(
      `C:/Users/ahmet/Desktop/Resimler/Kodlama Resimleri/React/${imageFolder}/**`
    )
    .pipe(gulp.dest("./Images"));
});

gulp.task("watch:image", async function () {
  return gulp.watch(
    `C:/Users/ahmet/Desktop/Resimler/Kodlama Resimleri/React/${imageFolder}/**`,
    gulp.series("copyImages")
  );
});

gulp.task("default", (done) => {
  return gulp.series(["clean", "new", "sass", "watch:sass"])(done);
});

// copy this to start action :D
// npm install gulp gulp-sass del gulp-tap gulp-file path --save-dev
// recommended cd src > gulp
