// 请求gulp
const gulp=require("gulp");
// const sass=require('gulp-sass');
// const concat=require('gulp-concat');
// const mini=require('gulp-minify-css');
// 执行监听任务
//复制项目下的所有代码复制到服务器下的发布目录下
    gulp.task('copyallfile',async ()=>{
        gulp.src('./**/*')
        .pipe(gulp.dest('E:\\PHP\\WWW\\fabu'))
    })
//监听文件，当开发文件有改动的时候，就会自动保存到www
//     gulp.task('watchall',async ()=>{
//         gulp.watch('*.html',async ()=>{
//         gulp.src('*.html')
//         .pipe(gulp.dest('E:\\PHP\\WWW\\fabu'))
    
//         gulp.watch('css/**/*',async ()=>{
//             gulp.src('css/**/*')
//             .pipe(mini())
//             .pipe(gulp.dest('E:\\PHP\\WWW\\fabu\\css'))
//         });
//         gulp.watch('sassdemos/**/*',async ()=>{
//             gulp.src('sassdemos/**/*')
//             .pipe(sass())
//             .pipe(mini())
//             .pipe(gulp.dest('E:\\PHP\\WWW\\fabu\\sassdemos'))
//         })
// });
//     // gulp.watch('*.img',async ()=>{
//     //     gulp.src('*.img')
//     //     .pipe(gulp.dest('E:\\PHP\\WWW\\fabu'));
//     // });
//     // gulp.watch('*.js',async ()=>{
//     //     gulp.src('*.js')
//     //     .pipe(gulp.dest('E:\\PHP\\WWW\\fabu'));
//     // });
// })
// 合并文件
// gulp.task('hebingfile',async ()=>{
//     gulp.src(['js/index.js','js/logins.js'])
//     .pipe(concat('cendor.js'))
//     .pipe(gulp.dest('E:\\PHP\\WWW\\fabu'));
// })
// sass监听

