// common requires
//const express = require('express');
const path = require('path');

const favicon = require('serve-favicon');

const logger = require('morgan');

const helmet = require('helmet');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const exphbs = require('express-handlebars');
const hbs = exphbs.create();

//const rootPath = path.dirname(require.main.filename);
const rootPath = process.env['ROOT_PATHS'];

const publicPath = path.join(rootPath, 'public');
const viewPath = path.join(rootPath, 'views');

/**
 * setup view engine.
 * 
 * @param {express} app
 */
function init_view_engine(app) {
    // view engine setup
    app.set('views', viewPath);
    //app.set('view engine', 'pug');
    //app.set('view engine', 'ejs');
    app.engine('handlebars', hbs.engine)
    app.set('view engine', 'handlebars');
};

/**
 * setup favicon.
 * 
 * @param {express} app
 */
function init_favicon(app) {
    // if change favicon.ico required to restart server.
    app.use(favicon(path.join(publicPath, 'favicon.ico')));
    //app.use(favicon(path.join(publicPath, 'favicon.ico'), { maxAge: '15s' }));
};

/**
 * setup logger.
 * 
 * @param {express} app
 */
function init_logger(app) {    
    app.use(logger('dev'));
};

/**
 * setup helmet.
 * 
 * @param {express} app
 */
function init_helmet(app) {
    app.use(helmet());
};

/**
 * setup parsers.
 * 
 * @param {express} app
 */
function init_parsers(app) {
    // body parser.
    app.use(bodyParser.json());
    // extended must be false??.
    app.use(bodyParser.urlencoded({ extended: true }));
    // cookie parser.
    app.use(cookieParser());
};

/**
 * init common paths.
 * 
 * @param {express} app
 */
function init_functions(app) {
    console.log('init middleware....');

    init_view_engine(app);
    init_favicon(app);
    
    init_logger(app);
    init_helmet(app);    
    init_parsers(app);
};

exports.init = init_functions;