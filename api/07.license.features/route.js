// common requires
const path = require('path');
const fs = require('fs');
const express = require('express');

//const rootPath = path.dirname(require.main.filename);
const rootPath = process.env['ROOT_PATHS'];

const nlib = require(path.join(rootPath, 'lib', 'nlib-core'));
const mssqldb = require(path.join(rootPath, 'lib', 'mssql-db'));
const raterdb = require(path.join(rootPath, 'lib', 'rater-web-db'));

function __SaveLicenseFeature(req, res) {
    raterdb.CallSp(req, res, function (req, res, reqModel) {
        raterdb.SaveLicenseFeature(reqModel.data, function (dbResult) {
            nlib.sendJson(req, res, dbResult);
        });
    });
};


function __GetLicenseFeatures(req, res) {
    raterdb.CallSp(req, res, function (req, res, reqModel) {
        raterdb.GetLicenseFeatures(reqModel.data, function (dbResult) {
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
    // LicenseFeature.
    app.all('/api/edl/licensefeatures/save', __SaveLicenseFeature); // OK.
    app.all('/api/edl/licensefeatures/search', __GetLicenseFeatures); // OK.
};

exports.init_routes = init_routes;