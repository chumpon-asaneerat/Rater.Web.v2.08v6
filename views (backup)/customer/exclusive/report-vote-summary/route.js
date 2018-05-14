// common requires
const path = require('path');
const fs = require('fs');

//const rootPath = path.dirname(require.main.filename);
const rootPath = process.env['ROOT_PATHS'];

const nlib = require(path.join(rootPath, 'lib', 'nlib-core'));

const workPath = path.join(rootPath, 'views', 'customer', 'exclusive', 'report-vote-summary');
const baseUrl = '/exclusive/report-vote-summary';

function getIndex(req, res, next) {
    //var targetFile = path.join(workPath, 'index.html');
    //nlib.sendFile(req, res, targetFile);

    var targetFile = path.join(workPath, 'index.handlebars');
    if (fs.existsSync(targetFile)) {
        res.render(targetFile, { 
            title: "Vote summary report.", 
            baseUrl: baseUrl
        })
    }
    else {
        next();
    }
};

function getJSFile(req, res, next) {
    var allowFiles = [ 'app.js', 'model.js' ];
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
    var modelType = req.params.modelType;
    var langId = req.params.langId;
    var targetFile = path.join(workPath, 'contents', langId, modelType + '.json');
    if (!fs.existsSync(targetFile)) {
        targetFile = path.join(workPath, 'contents', 'EN', modelType + '.json');
    }
    var result = nlib.loadJsonFile(targetFile);
    nlib.sendJson(req, res, result);
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
    app.get(baseUrl + '/models/:modelType/:langId', getJsonModelByLangId);
};

exports.init_routes = init_routes;