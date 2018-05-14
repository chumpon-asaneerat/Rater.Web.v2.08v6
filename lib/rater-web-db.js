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

// ================================================================
// [==== Utilities ====]
// ================================================================
/**
 * Get Random Hex Code.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function GetRandomHexCode(pObj, callback) {
    var spName = 'GetRandomHexCode';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.GetRandomHexCode = module.exports.GetRandomHexCode = GetRandomHexCode;

// ================================================================
// [==== Languages ====]
// ================================================================
/**
 * Disable Language.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function DisableLanguage(pObj, callback) {
    var spName = 'DisableLanguage';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.DisableLanguage = module.exports.DisableLanguage = DisableLanguage;

/**
 * Enable Language.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function EnableLanguage(pObj, callback) {
    var spName = 'EnableLanguage';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.EnableLanguage = module.exports.EnableLanguage = EnableLanguage;

/**
 * Get Languages.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function GetLanguages(pObj, callback) {
    var spName = 'GetLanguages';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.GetLanguages = module.exports.GetLanguages = GetLanguages;

/**
 * Save Language.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function SaveLanguage(pObj, callback) {
    var spName = 'SaveLanguage';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.SaveLanguage = module.exports.SaveLanguage = SaveLanguage;

// ================================================================
// [==== Member Types ====]
// ================================================================
/**
 * Get Member Types.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function GetMemberTypes(pObj, callback) {
    var spName = 'GetMemberTypes';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.GetMemberTypes = module.exports.GetMemberTypes = GetMemberTypes;

// ================================================================
// [==== UserInfo ====]
// ================================================================
/**
 * Save UserInfo.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function SaveUserInfo(pObj, callback) {
    var spName = 'SaveUserInfo';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.SaveUserInfo = module.exports.SaveUserInfo = SaveUserInfo;

/**
 * Save UserInfo ML.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function SaveUserInfoML(pObj, callback) {
    var spName = 'SaveUserInfoML';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.SaveUserInfoML = module.exports.SaveUserInfoML = SaveUserInfoML;

/**
 * Get UserInfos.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function GetUserInfos(pObj, callback) {
    var spName = 'GetUserInfos';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.GetUserInfos = module.exports.GetUserInfos = GetUserInfos;

// ================================================================
// [==== Period Units ====]
// ================================================================
/**
 * Save Period Unit.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function SavePeriodUnit(pObj, callback) {
    var spName = 'SavePeriodUnit';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.SavePeriodUnit = module.exports.SavePeriodUnit = SavePeriodUnit;

/**
 * Save Period Unit ML.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function SavePeriodUnitML(pObj, callback) {
    var spName = 'SavePeriodUnitML';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.SavePeriodUnitML = module.exports.SavePeriodUnitML = SavePeriodUnitML;

/**
 * Get Period Units.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function GetPeriodUnits(pObj, callback) {
    var spName = 'GetPeriodUnits';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.GetPeriodUnits = module.exports.GetPeriodUnits = GetPeriodUnits;

// ================================================================
// [==== Limit Units ====]
// ================================================================
/**
 * Save Limit Unit.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function SaveLimitUnit(pObj, callback) {
    var spName = 'SaveLimitUnit';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.SaveLimitUnit = module.exports.SaveLimitUnit = SaveLimitUnit;

/**
 * Save Limit Unit ML.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function SaveLimitUnitML(pObj, callback) {
    var spName = 'SaveLimitUnitML';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.SaveLimitUnitML = module.exports.SaveLimitUnitML = SaveLimitUnitML;

/**
 * Get Limit Units.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function GetLimitUnits(pObj, callback) {
    var spName = 'GetLimitUnits';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.GetLimitUnits = module.exports.GetLimitUnits = GetLimitUnits;

// ================================================================
// [==== License Types ====]
// ================================================================
/**
 * Save License Type.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function SaveLicenseType(pObj, callback) {
    var spName = 'SaveLicenseType';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.SaveLicenseType = module.exports.SaveLicenseType = SaveLicenseType;

/**
 * Save License Type ML.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function SaveLicenseTypeML(pObj, callback) {
    var spName = 'SaveLicenseTypeML';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.SaveLicenseTypeML = module.exports.SaveLicenseTypeML = SaveLicenseTypeML;

/**
 * Get License Types
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function GetLicenseTypes(pObj, callback) {
    var spName = 'GetLicenseTypes';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.GetLicenseTypes = module.exports.GetLicenseTypes = GetLicenseTypes;

// ================================================================
// [==== License Features ====]
// ================================================================
/**
 * Save License Feature.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function SaveLicenseFeature(pObj, callback) {
    var spName = 'SaveLicenseFeature';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.SaveLicenseFeature = module.exports.SaveLicenseFeature = SaveLicenseFeature;

/**
 * Get License Features
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function GetLicenseFeatures(pObj, callback) {
    var spName = 'GetLicenseFeatures';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.GetLicenseFeatures = module.exports.GetLicenseFeatures = GetLicenseFeatures;

/**
 * Get Licenses
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function GetLicenses(pObj, callback) {
    var spName = 'GetLicenses';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.GetLicenses = module.exports.GetLicenses = GetLicenses;

// ================================================================
// [==== Customer ====]
// ================================================================
/**
 * Save Customer.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function SaveCustomer(pObj, callback) {
    var spName = 'SaveCustomer';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.SaveCustomer = module.exports.SaveCustomer = SaveCustomer;

/**
 * Save Customer ML.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function SaveCustomerML(pObj, callback) {
    var spName = 'SaveCustomerML';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.SaveCustomerML = module.exports.SaveCustomerML = SaveCustomerML;

/**
 * Get Customers.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function GetCustomers(pObj, callback) {
    var spName = 'GetCustomers';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.GetCustomers = module.exports.GetCustomers = GetCustomers;

// ================================================================
// [==== Branch ====]
// ================================================================
/**
 * Save Branch.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function SaveBranch(pObj, callback) {
    var spName = 'SaveBranch';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.SaveBranch = module.exports.SaveBranch = SaveBranch;

/**
 * Save Branch ML.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function SaveBranchML(pObj, callback) {
    var spName = 'SaveBranchML';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.SaveBranchML = module.exports.SaveBranchML = SaveBranchML;

/**
 * Get Branchs.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function GetBranchs(pObj, callback) {
    var spName = 'GetBranchs';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.GetBranchs = module.exports.GetBranchs = GetBranchs;

// ================================================================
// [==== Member Info ====]
// ================================================================
/**
 * Save MemberInfo.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function SaveMemberInfo(pObj, callback) {
    var spName = 'SaveMemberInfo';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.SaveMemberInfo = module.exports.SaveMemberInfo = SaveMemberInfo;

/**
 * Save MemberInfo ML.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function SaveMemberInfoML(pObj, callback) {
    var spName = 'SaveMemberInfoML';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.SaveMemberInfoML = module.exports.SaveMemberInfoML = SaveMemberInfoML;

/**
 * Get MemberInfos.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function GetMemberInfos(pObj, callback) {
    var spName = 'GetMemberInfos';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.GetMemberInfos = module.exports.GetMemberInfos = GetMemberInfos;

// ================================================================
// [==== Org ====]
// ================================================================
/**
 * Save Org.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function SaveOrg(pObj, callback) {
    var spName = 'SaveOrg';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.SaveOrg = module.exports.SaveOrg = SaveOrg;

/**
 * Save Org ML.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function SaveOrgML(pObj, callback) {
    var spName = 'SaveOrgML';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.SaveOrgML = module.exports.SaveOrgML = SaveOrgML;

/**
 * Get Orgs.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function GetOrgs(pObj, callback) {
    var spName = 'GetOrgs';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.GetOrgs = module.exports.GetOrgs = GetOrgs;

// ================================================================
// [==== Votes ====]
// ================================================================
/**
 * Save Vote.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function SaveVote(pObj, callback) {
    var spName = 'SaveVote';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.SaveVote = module.exports.SaveVote = SaveVote;

// ================================================================
// [==== Register/SignIn ====]
// ================================================================
/**
 * Register Customer.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
 function RegisterCustomer(pObj, callback) {
    var spName = 'RegisterCustomer';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.RegisterCustomer = module.exports.RegisterCustomer = RegisterCustomer;

/**
 * SignIn.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function SignIn(pObj, callback) {
    var spName = 'SignIn';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.SignIn = module.exports.SignIn = SignIn;

// ================================================================
// [==== Reports ====]
// ================================================================
/**
 * Get Raw Votes.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function GetRawVotes(pObj, callback) {
    var spName = 'GetRawVotes';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.GetRawVotes = module.exports.GetRawVotes = GetRawVotes;

/**
 * Get Vote Summaries.
 * 
 * @param {any} pObj 
 * @param {any} callback 
 */
function GetVoteSummaries(pObj, callback) {
    var spName = 'GetVoteSummaries';
    var dbdef = new mssqldb.msSqldb(spName);
    // Execute
    dbdef.Execute(pObj, callback);
};

exports.GetVoteSummaries = module.exports.GetVoteSummaries = GetVoteSummaries;
