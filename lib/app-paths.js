// common requires
const express = require('express');
const path = require('path');

//const rootPath = path.dirname(require.main.filename);
const rootPath = process.env['ROOT_PATHS'];

const publicPath = path.join(rootPath, 'public');
const assetPath = path.join(publicPath, 'assets');
const imagePath = path.join(assetPath, 'images');
const videoPath = path.join(assetPath, 'videos');
const audioPath = path.join(assetPath, 'audios');

const distPath = path.join(rootPath, 'public', 'dist');
const commonPath = path.join(rootPath, 'public', 'lib');

const distMaxAge = { maxage: '1d' };
const libMaxAge = { maxage: '15s' };

const dist_libs = [
    /* jQuery */
    { "route": "/dist/js", "path": "jquery-3.1.0" },
    /* jQuery UI */
    { "route": "/dist", "path": "jquery-ui-1.12.1" },
    /* bootstrap 4.x */
    { "route": "/dist/js", "path": "popperjs-1.14.3" },
    { "route": "/dist/js", "path": "tooltipjs-1.2.0" },
    { "route": "/dist", "path": "bootstrap-4.1.0" },
    /* font-awesome 5.x */
    { "route": "/dist", "path": "font-awesome-5.0.10" },
    /* emoji-symbols */
    { "route": "/dist/css", "path": "emoji-symbols-1.0.0" },
    /* flag-icon-css 3.x */
    { "route": "/dist", "path": "flag-icon-css-3.1.0" },
    /* animate-css */
    { "route": "/dist/css", "path": "animate-css-3.6.1" },
    /* moment */
    { "route": "/dist/js", "path": "moment-2.22.0" },
    /* client-js */
    { "route": "/dist/js", "path": "clientjs-0.1.11" },
    /* riot */
    { "route": "/dist/js", "path": "riotjs-3.10.0" },
    /* wow */
    { "route": "/dist/js", "path": "wow-1.3.0" },
    /* howler */
    { "route": "/dist/js", "path": "howler-2.0.3" },
    /* highcharts */
    //{ "route": "/dist", "path": "highcharts-6.0.7" },
    { "route": "/dist", "path": "highcharts-6.1.0" },
    /* preload-js */
    { "route": "/dist/js", "path": "preloadjs-1.0.0" },
    /* simplebar-js */
    { "route": "/dist", "path": "simplebar-2.6.1" },
    /* jquery-easing */
    { "route": "/dist/js", "path": "jquery-easing-1.4.1" },
    /* jquery-orgchart */
    { "route": "/dist", "path": "orgchart-2.1.1" },
    /* org-chart (jquery) */
    { "route": "/dist", "path": "jquery-org-chart-2.1.1" },
    /* tabulator */
    { "route": "/dist", "path": "tabulator-3.4.0" },
    /* json2html 1.2.0 */
    { "route": "/dist/js", "path": "json2html-1.2.0" },
    /* tether */
    { "route": "/dist/", "path": "tether-1.3.3" },
    /* offline.js */
    { "route": "/dist/", "path": "offline-0.7.13" },  
    /* CAPTCHA */
    { "route": "/dist/", "path": "puzzle-captcha-1.0.0" },
    /* reveal */
    { "route": "/dist", "path": "reveal-3.6.0" }
];

function dist_lib(app, exportRoute, localPath) {
    console.log('publish "' + localPath + '"');
    app.use(exportRoute, express.static(path.join(distPath, localPath), distMaxAge));
};

/**
 * init common paths.
 * 
 * @param {express} app
 */
function init_functions(app) {
    console.log('init common paths....');
    // common lib paths.
    app.use('/lib', express.static(commonPath, libMaxAge));
    // public paths.
    app.use('/public', express.static(publicPath));

    // public->assets paths.
    app.use('/images', express.static(imagePath));
    app.use('/videos', express.static(videoPath));
    app.use('/audios', express.static(audioPath));

    // dist paths.
    dist_libs.forEach(element => {
        dist_lib(app, element.route, element.path);
    });
};

exports.init = init_functions;