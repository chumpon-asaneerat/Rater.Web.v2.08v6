// common requires
const path = require('path');
const fs = require('fs');

//const rootPath = path.dirname(require.main.filename);
const rootPath = process.env['ROOT_PATHS'];

const nlib = require(path.join(rootPath, 'lib', 'nlib-core'));
const rwc = require(path.join(rootPath, 'rater-web-secure'));

const workPath = path.join(rootPath, 'views', 'customer', 'exclusive', 'home');
const baseUrl = '/exclusive';

function getIndex(req, res, next) {
    var targetFile = path.join(workPath, 'index.handlebars');
    if (fs.existsSync(targetFile)) {
        res.render(targetFile, {
            title: "Exclusive Home.",
            baseUrl: baseUrl
        });
    }
    else {
        next();
    }
};

function getJSFile(req, res, next) {
    var allowFiles = ['app.js', 'model.js'];
    var fileName = req.params.fileName;
    if (allowFiles.indexOf(fileName.toLowerCase()) == -1) {
        next();
    }
    else {
        var targetFile = path.join(workPath, 'js', fileName);
        nlib.sendFile(req, res, targetFile);
    }
};

function getCSSFile(req, res, next) {
    var fileName = req.params.fileName;
    var targetFile = path.join(workPath, 'css', fileName);
    nlib.sendFile(req, res, targetFile);
};

function getJsonModelByLangId(req, res, next) {
    var reqModel = nlib.parseReq(req);
    if (!reqModel.errors.hasError) {
        var modelType = reqModel.data.modelType;
        var langId = reqModel.data.langId;
        //console.log(baseUrl, ' request model:', modelType, ' for langId:', langId);
        var targetFile = path.join(workPath, 'contents', langId, modelType + '.json');
        if (!fs.existsSync(targetFile)) {
            targetFile = path.join(workPath, 'contents', 'EN', modelType + '.json');
        }
        var result = nlib.loadJsonFile(targetFile);
        nlib.sendJson(req, res, result);
    }
    else {
        next();
    }
};

/**
 * Init routes.
 * 
 * @param {express} app 
 */
function init_routes(app) {
    app.get(baseUrl + '/', getIndex);
    app.get(baseUrl + '/js/:fileName', getJSFile);
    app.get(baseUrl + '/css/:fileName', getCSSFile);
    app.all(baseUrl + '/models', getJsonModelByLangId);
};

exports.init_routes = init_routes;