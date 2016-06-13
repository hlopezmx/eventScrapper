/*----------------------------------------------------------------------------------------
 SCRIPT:
    /gulpfile.js

 DESCRIPTION:
    GULP and GULP-DEMON take care of the running service, monitoring for code changes
    and so relaunching it as needed to reflect the changes.

 -------------------
 Author: Hugo Lopez
 Date: 2016-05-25
 ----------------------------------------------------------------------------------------*/

// required libraries
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');


// definition of the gulp task
gulp.task('default', function () {
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: 8888
        },
        ignore: ['./node_modules/**']
    })
        .on('restart', function () {
            console.log('Restarting node server...');
        });
});
