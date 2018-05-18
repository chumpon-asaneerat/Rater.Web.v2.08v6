// common requires
const path = require('path');
const fs = require('fs');
const express = require('express');

//const rootPath = path.dirname(require.main.filename);
const rootPath = process.env['ROOT_PATHS'];

const nlib = require(path.join(rootPath, 'lib', 'nlib-core'));
const mssqldb = require(path.join(rootPath, 'lib', 'mssql-db'));
const raterdb = require(path.join(rootPath, 'lib', 'rater-web-db'));

function __SaveErrorMsg(req, res) {
    raterdb.CallSp(req, res, function (req, res, reqModel) {
        raterdb.SaveErrorMsg(reqModel.data, function (dbResult) {
            nlib.sendJson(req, res, dbResult);
        });
    });
};

function __SaveErrorMsgML(req, res) {
    raterdb.CallSp(req, res, function (req, res, reqModel) {
        raterdb.SaveErrorMsgML(reqModel.data, function (dbResult) {
            nlib.sendJson(req, res, dbResult);
        });
    });
};

function __GetErrorMsgs(req, res) {
    raterdb.CallSp(req, res, function (req, res, reqModel) {
        raterdb.GetErrorMsgs(reqModel.data, function (dbResult) {
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
    // period.units
    app.all('/api/edl/errors/save', __SaveErrorMsg); // OK.
    app.all('/api/edl/errors/save-ml', __SaveErrorMsgML); // OK.
    app.all('/api/edl/errors/search', __GetErrorMsgs); // OK.
};

exports.init_routes = init_routes;