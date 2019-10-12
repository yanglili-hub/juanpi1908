var gulp = require("gulp");
var sass = require("gulp-sass");
var minicss= require('gulp-minify-css')

gulp.task("watchall",async ()=>{
    //定义一个监听器，监听文件是否有改变，如果有改变，则自动拷贝。
    gulp.watch("*.html",async ()=>{
        gulp.src("*.html")
        .pipe(gulp.dest("E:\\PHP\\WWW\\fabu"));
    });

    gulp.watch("js/*.js",async ()=>{
        gulp.src("js/*.js")
        .pipe(gulp.dest("E:\\PHP\\WWW\\fabu\\js"));
    });
    // gulp.watch("sassdemos/*.scss",async ()=>{
    //     gulp.src("sassdemos/*.scss")
    //     .pipe(sass())
    //     .pipe(gulp.dest("E:\\Qianfeng\\juanpi1908\\css"));
    // });
    gulp.watch("css/*.css",async ()=>{
        gulp.src("css/*.css")
        .pipe(minicss())
        .pipe(gulp.dest("E:\\PHP\\WWW\\fabu\\css"));
    });
    	
    gulp.watch("sassdemos/**/*.scss",async ()=>{
        gulp.src("sassdemos/**/*.scss")
        .pipe(sass())
        .pipe(minicss())
        .pipe(gulp.dest("E:\\PHP\\WWW\\fabu\\css"));
    });
    gulp.watch("img/**/*",async ()=>{
        gulp.src("img/**/*")
        .pipe(gulp.dest("E:\\PHP\\WWW\\fabu\\img"));
    });
});
// gulp.task("copyallfile",async function(){
//     gulp.src("./**/*").
//     pipe(gulp.dest("E:\\PHP\\WWW\\fabu"));
// });

// gulp.task("watchall",async ()=>{

// 		gulp.watch("*.html",async ()=>{
// 			gulp.src("*.html")
//      .pipe(gulp.dest("E:\\PHP\\WWW\\fabu"));
// 		});

// 		gulp.watch("css/*.css",async ()=>{
// 			gulp.src("css/*.css")
//      .pipe(gulp.dest("E:\\PHP\\WWW\\fabu"));
// 		});

// 		gulp.watch("js/*.js",async ()=>{
// 			gulp.src("js/*.js")
//      .pipe(gulp.dest("E:\\PHP\\WWW\\fabu"));
// 		});

// })

