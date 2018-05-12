// common requires
const path = require('path');
const fs = require('fs');
const express = require('express');

//const rootPath = path.dirname(require.main.filename);
const rootPath = process.env['ROOT_PATHS'];

const nlib = require(path.join(rootPath, 'lib', 'nlib-core'));
const mssqldb = require(path.join(rootPath, 'lib', 'mssql-db'));
const raterdb = require(path.join(rootPath, 'lib', 'rater-web-db'));

function __DisableLanguage(req, res) {
    raterdb.CallSp(req, res, function (req, res, reqModel) {
        raterdb.DisableLanguage(reqModel.data, function (dbResult) {
            nlib.sendJson(req, res, dbResult);
        });
    });
};

function __EnableLanguage(req, res) {
    raterdb.CallSp(req, res, function (req, res, reqModel) {
        raterdb.EnableLanguage(reqModel.data, function (dbResult) {
            nlib.sendJson(req, res, dbResult);
        });
    });
};

function __GetLanguages(req, res) {
    raterdb.CallSp(req, res, function (req, res, reqModel) {
        raterdb.GetLanguages(reqModel.data, function (dbResult) {
            nlib.sendJson(req, res, dbResult);
        });
    });
};

/**
 * Init routes.
 * 
 * @param {express} app 
 */
function init_routes(app) {
    // Languages.
    app.all('/api/edl/languages/enable', __EnableLanguage); // OK.
    app.all('/api/edl/languages/disable', __DisableLanguage); // OK.
    app.all('/api/edl/languages/search', __GetLanguages); // OK.
};

exports.init_routes = init_routes;