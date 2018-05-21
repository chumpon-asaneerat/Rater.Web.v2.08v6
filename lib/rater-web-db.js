'use strict';

// common requires.
const path = require('path');
const sql = require('mssql');

//const rootPath = path.dirname(require.main.filename);
const rootPath = process.env['ROOT_PATHS'];

const libPath = path.join(rootPath, 'lib');
const nlib = require(path.join(libPath, 'nlib-core'));
const mssqldb = require(path.join(libPath, 'mssql-db'));

// ================================================================
// [==== CallSp ====]
// ================================================================
/**
 * Call SP.
 * 
 * @param {callback} req The Request object.
 * @param {callback} res The Response object.
 * @param {callback} spCallback The SP Callback.
 */
function CallSp(req, res, spCallback) {
    var reqModel = nlib.parseReq(req);
    if (reqModel.errors.hasError) {
        nlib.SendJson(req, res, reqModel.errors.errMsg);
    }
    else {
        spCallback(req, res, reqModel, spCallback);
    }
};

exports.CallSp = module.exports.CallSp = CallSp;

// ================================================================
// [==== Query ====]
// ================================================================
/**
 * Query
 * 
 * @param {string} queryString - The custom query string.
 * @param {function} callback - The callback parameter is db_result. 
 */
function Query(queryString, callback) {
    var result = new nlib.NResult();

    var config = conf.db.getDatabaseConfig();
    var conn = new sql.Connection(config);

    conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.query(queryString).then(function (recordsets) {
            if (recordsets !== null && recordsets !== 'undefined') {
                if (recordsets.length > 0)
                    result.data = recordsets[0];
                else result.data = [];
            }
            // send result to callback function.
            callback(result);
        });
    }).catch(function (err) {
        result.error(err.message);
        callback(result);
    });
};

exports.Query = module.exports.Query = Query;
