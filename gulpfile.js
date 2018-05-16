// gulp shortcut is: .\node_modules\.bin\gulp

var gulp = require('gulp');
var debug = require('gulp-debug');
var sort = require('gulp-sort');
var concat = require('gulp-concat');
var insert = require('gulp-insert');

var riot = require('gulp-riot');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('riot-tags', function () {
    // tagSrc =	['./src/*.tag', './src/**/*.tag']
    gulp.src('src/riot/tags/*.tag')
        .pipe(riot({ compact: true }))
        //.pipe(sourcemaps.init())
        .pipe(concat('tags.js'))
        .pipe(uglify())
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/lib/js'));
});

gulp.task('db-script-2018-04-26', function () {
    var sDate = '2018-04-26'
    var rootPath = 'db/scripts/' + sDate;
    var src = [
        /* Concat all *.sql file in subdirectories. */
        rootPath + '/**/*.sql', 
        /* Ignore all *.sql in 99.test.scripts path */
        '!' + rootPath + '/99.test.scripts/*.sql',
        /* Ignore all *.sql in root path */
        '!' + rootPath + '/*.sql'
    ];
    
    gulp.src(src)
        .pipe(sort())
        .pipe(debug())
        .pipe(insert.prepend(`/*********** Script Update Date: ` + sDate + `  ***********/\n`))
        .pipe(insert.append(`\n`))
        .pipe(concat('update-' + sDate + '.sql'))
        .pipe(gulp.dest('db/scripts/dist/'));
});

gulp.task('db-script-2018-05-09', function () {
    var sDate = '2018-05-09'
    var rootPath = 'db/scripts/' + sDate;
    var src = [
        /* Concat all *.sql file in subdirectories. */
        rootPath + '/**/*.sql',
        /* Ignore all *.sql in 99.test.scripts path */
        '!' + rootPath + '/99.test.scripts/*.sql',
        /* Ignore all *.sql in root path */
        '!' + rootPath + '/*.sql'
    ];

    gulp.src(src)
        .pipe(sort())
        .pipe(debug())
        .pipe(insert.prepend(`/*********** Script Update Date: ` + sDate + `  ***********/\n`))
        .pipe(insert.append(`\n`))
        .pipe(concat('update-' + sDate + '.sql'))
        .pipe(gulp.dest('db/scripts/dist/'));
});

gulp.task('db-script-2018-05-14', function () {
    var sDate = '2018-05-14'
    var rootPath = 'db/scripts/' + sDate;
    var src = [
        /* Concat all *.sql file in subdirectories. */
        rootPath + '/**/*.sql',
        /* Ignore all *.sql in 99.test.scripts path */
        '!' + rootPath + '/99.test.scripts/*.sql',
        /* Ignore all *.sql in root path */
        '!' + rootPath + '/*.sql'
    ];

    gulp.src(src)
        .pipe(sort())
        .pipe(debug())
        .pipe(insert.prepend(`/*********** Script Update Date: ` + sDate + `  ***********/\n`))
        .pipe(insert.append(`\n`))
        .pipe(concat('update-' + sDate + '.sql'))
        .pipe(gulp.dest('db/scripts/dist/'));
});

gulp.task('db-script-2018-05-15', function () {
    var sDate = '2018-05-15'
    var rootPath = 'db/scripts/' + sDate;
    var src = [
        /* Concat all *.sql file in subdirectories. */
        rootPath + '/**/*.sql',
        /* Ignore all *.sql in 99.test.scripts path */
        '!' + rootPath + '/99.test.scripts/*.sql',
        /* Ignore all *.sql in root path */
        '!' + rootPath + '/*.sql'
    ];

    gulp.src(src)
        .pipe(sort())
        .pipe(debug())
        .pipe(insert.prepend(`/*********** Script Update Date: ` + sDate + `  ***********/\n`))
        .pipe(insert.append(`\n`))
        .pipe(concat('update-' + sDate + '.sql'))
        .pipe(gulp.dest('db/scripts/dist/'));
});

gulp.task('db-script-2018-05-16', function () {
    var sDate = '2018-05-16'
    var rootPath = 'db/scripts/' + sDate;
    var src = [
        /* Concat all *.sql file in subdirectories. */
        rootPath + '/**/*.sql',
        /* Ignore all *.sql in 99.test.scripts path */
        '!' + rootPath + '/99.test.scripts/*.sql',
        /* Ignore all *.sql in root path */
        '!' + rootPath + '/*.sql'
    ];

    gulp.src(src)
        .pipe(sort())
        .pipe(debug())
        .pipe(insert.prepend(`/*********** Script Update Date: ` + sDate + `  ***********/\n`))
        .pipe(insert.append(`\n`))
        .pipe(concat('update-' + sDate + '.sql'))
        .pipe(gulp.dest('db/scripts/dist/'));
});

gulp.task('db-script-2018-05-17', function () {
    var sDate = '2018-05-17'
    var rootPath = 'db/scripts/' + sDate;
    var src = [
        /* Concat all *.sql file in subdirectories. */
        rootPath + '/**/*.sql',
        /* Ignore all *.sql in 99.test.scripts path */
        '!' + rootPath + '/99.test.scripts/*.sql',
        /* Ignore all *.sql in root path */
        '!' + rootPath + '/*.sql'
    ];

    gulp.src(src)
        .pipe(sort())
        .pipe(debug())
        .pipe(insert.prepend(`/*********** Script Update Date: ` + sDate + `  ***********/\n`))
        .pipe(insert.append(`\n`))
        .pipe(concat('update-' + sDate + '.sql'))
        .pipe(gulp.dest('db/scripts/dist/'));
});

gulp.task('task2', function () {
    console.log('vscode call log task2 running...');
});

gulp.task('default', ['riot-tags', 'task2'], function () {
    console.log('vscode call default task running...');
});
