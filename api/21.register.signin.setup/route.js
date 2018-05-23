// common requires
const path = require('path');
const fs = require('fs');
const express = require('express');

//const rootPath = path.dirname(require.main.filename);
const rootPath = process.env['ROOT_PATHS'];

const nlib = require(path.join(rootPath, 'lib', 'nlib-core'));
const mssqldb = require(path.join(rootPath, 'lib', 'mssql-db'));
const raterdb = require(path.join(rootPath, 'lib', 'rater-web-db'));

// ================================================================
// [==== Resiger/Sign In ====]
// ================================================================
function __Register(req, res) {
    raterdb.CallSp(req, res, function (req, res, reqModel) {
        raterdb.Register(reqModel.data, function (dbResult) {
            nlib.sendJson(req, res, dbResult);
        });
    });
};

function __CheckUsers(req, res) {
    raterdb.CallSp(req, res, function (req, res, reqModel) {
        raterdb.CheckUsers(reqModel.data, function (dbResult) {
            nlib.sendJson(req, res, dbResult);
        });
    });
};

function __SignIn(req, res) {
    raterdb.CallSp(req, res, function (req, res, reqModel) {
        raterdb.SignIn(reqModel.data, function (dbResult) {
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
    // register-signin.
    app.all('/api/edl/register', __Register); // OK.
    app.all('/api/edl/users', __CheckUsers); // OK.
    app.all('/api/edl/signin', __SignIn); // OK.
};

exports.init_routes = init_routes;
