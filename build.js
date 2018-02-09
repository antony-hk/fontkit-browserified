var browserify = require('browserify');
var fs = require('fs');

browserify('./src/index.js', {
    standalone: 'fontkit',
})
    .transform('babelify')
    .bundle()
    .pipe(fs.createWriteStream('./build/fontkit-browserified.js'));
