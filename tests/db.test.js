// common requires.
const path = require('path');

//const rootPath = path.dirname(require.main.filename);
process.env['ROOT_PATHS'] = path.join(path.dirname(require.main.filename), '../');

const rootPath = process.env['ROOT_PATHS'];

const libPath = path.join(rootPath, 'lib');

const nlib = require(path.join(libPath, 'nlib-core'));
const mssqldb = require(path.join(libPath, 'mssql-db'));
const raterdb = require(path.join(libPath, 'rater-web-db'));

function fatchData(callback) {
    callback('123');
}

describe('Database', () => {
    describe('utilities', () => {
        // Get Random Hex Code.
        describe.skip('GetRandomHexCode', () => {
            test('Normal', () => {
                var data = { length: 6 };
                var condition = (result) => { 
                    //console.log('data: ', result.data);
                    //console.log('output: ', result.outputs);
                    expect(result.errors.hasError).toBe(false);
                }
                raterdb.GetRandomHexCode(data, condition);
            });

            test.skip('Invalid Length', () => {
                var data = { length: -1 };
                var condition = (result) => {
                    //console.log('data: ', result.data);
                    //console.log('output: ', result.outputs);
                    expect(result.errors.hasError).toBe(false);
                }
                raterdb.GetRandomHexCode(data, condition);
            });
        });
    });

    describe('languages', () => {
        // Disable Language.
        describe.skip('DisableLanguage', () => {
            test('Disable TH', () => {
                var data = { langId: 'TH' };
                var condition = (result) => {
                    expect(result.errors.hasError).toBe(false);
                }
                raterdb.DisableLanguage(data, condition);
            });

            test.skip('Disable XX', () => {
                var data = { langId: 'XX' };
                var condition = (result) => {
                    expect(result.errors.hasError).toBe(false);
                }
                raterdb.DisableLanguage(data, condition);
            });
            
            test.skip('Null language Id', () => {
                var data = { langId: null };
                var condition = (result) => {
                    expect(result.errors.hasError).toBe(false);
                }
                raterdb.DisableLanguage(data, condition);
            });
        });

        // Enable Language.
        describe.skip('EnableLanguage', () => {
            test('Enable TH', () => {
                var data = { langId: 'TH' };
                var condition = (result) => {
                    expect(result.errors.hasError).toBe(false);
                }
                raterdb.EnableLanguage(data, condition);
            });

            test.skip('Enable XX', () => {
                var data = { langId: 'XX' };
                var condition = (result) => {
                    expect(result.errors.hasError).toBe(false);
                }
                raterdb.EnableLanguage(data, condition);
            });
            
            test.skip('Null language Id', () => {
                var data = { langId: null };
                var condition = (result) => {
                    expect(result.errors.hasError).toBe(false);
                }
                raterdb.EnableLanguage(data, condition);
            });
        });

        describe('SaveLanguage', () => {
            test('Save (Normal).', () => {
                var data = {
                    langId: 'XX',
                    flagId: 'XX',
                    descriptionEN: 'My Language',
                    descriptionNative: 'ภาษาใหม่',
                    sortOrder: null,
                    enabled: true
                };
                var condition = (result) => {
                    expect(result.errors.errNum).toBe(0);
                }
                raterdb.SaveLanguage(data, condition);
            });
            test('Save (NULL LangId).', () => {
                var data = {
                    langId: null,
                    flagId: 'XX',
                    descriptionEN: 'My Language',
                    descriptionNative: 'ภาษาใหม่',
                    sortOrder: null,
                    enabled: true
                };
                var condition = (result) => {
                    expect(result.errors.errNum).toBe(101);
                };
                raterdb.SaveLanguage(data, condition);
            });
            test('Save (NULL description).', () => {
                var data = {
                    langId: 'YY',
                    flagId: 'YY',
                    descriptionEN: '',
                    descriptionNative: '',
                    sortOrder: null,
                    enabled: true
                };
                var condition = (result) => {
                    expect(result.errors.errNum).toBe(102);
                };
                raterdb.SaveLanguage(data, condition);
            });
            test('Save (Description duplicated).', () => {
                var data = {
                    langId: 'YY',
                    flagId: 'YY',
                    descriptionEN: 'My Language',
                    descriptionNative: '',
                    sortOrder: null,
                    enabled: true
                };
                var condition = (result) => {
                    expect(result.errors.errNum).toBe(103);
                };
                raterdb.SaveLanguage(data, condition);
            });
        });

        // Get Languages.
        describe.skip('GetLanguages', () => {
            test('Gets all.', () => { 
                var data = { enabled: null };
                var condition = (result) => {
                    //console.log(result.data);
                    expect(result.data.length).toBeGreaterThan(0);
                }
                raterdb.GetLanguages(data, condition);
            });
            test('Gets only enabled.', () => { 
                var data = { enabled: true };
                var condition = (result) => {
                    //console.log(result.data);
                    expect(result.data.length).toBeGreaterThan(0);
                }
                raterdb.GetLanguages(data, condition);
            });
            test('Gets only disabled.', () => { 
                var data = { enabled: false };
                var condition = (result) => {
                    //console.log(result.data);
                    expect(result.data.length).toBeGreaterThan(0);
                }
                raterdb.GetLanguages(data, condition);
            });
        });
    });

    describe('period units', () => {
        // Save Period Unit.
        describe('SavePeriodUnit', () => {
            test('Save (Normal).', () => {
                var data = { };
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(true);
                };
                raterdb.SavePeriodUnit(data, condition);
            });
        });

        // Save Period Unit ML.
        describe('SavePeriodUnitML', () => {
            test('Save (Normal).', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(true);
                };
                raterdb.SavePeriodUnitML(data, condition);
            });
        });

        // Get Period Units.
        describe.skip('GetPeriodUnits', () => {
            test('Get all.', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(false);
                };
                raterdb.GetPeriodUnits(data, condition);
            });
        });
    });

    describe('limit units', () => {
        // Save Unit.
        describe('SaveLimitUnit', () => {
            test('Save (Normal).', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(true);
                };
                raterdb.SaveLimitUnit(data, condition);
            });
        });

        // Save Unit (ML).
        describe('SaveLimitUnitML', () => {
            test('Save (Normal).', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(true);
                };
                raterdb.SaveLimitUnitML(data, condition);
            });
        });

        // Get Limit Units.
        describe.skip('GetLimitUnits', () => {
            test('Get all.', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(false);
                };
                raterdb.GetLimitUnits(data, condition);
            });
        });
    });

    describe('member types', () => {
        // Get Member Types.
        describe.skip('GetMemberTypes', () => {
            test('Get all.', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(false);
                };
                raterdb.GetMemberTypes(data, condition);
            });
        });
    });

    describe('user informations', () => {
        // Save User Information.
        describe('SaveUserInfo', () => {
            test('Save (Normal).', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(true);
                };
                raterdb.SaveUserInfo(data, condition);
            });
        });

        // Save User Information (ML).
        describe('SaveUserInfoML', () => {
            test('Save (Normal).', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(true);
                };
                raterdb.SaveUserInfoML(data, condition);
            });
        });

        // Get User Informations.
        describe.skip('GetUserInfos', () => {
            test('Get all.', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(false);
                };
                raterdb.GetUserInfos(data, condition);
            });
        });
    });

    describe('license types', () => {
        // Save License Type.
        describe('SaveLicenseType', () => {
            test('Save (Normal).', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(true);
                };
                raterdb.SaveLicenseType(data, condition);
            });
        });

        // Save License Type (ML).
        describe('SaveLicenseTypeML', () => {
            test('Save (Normal).', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(true);
                };
                raterdb.SaveLicenseTypeML(data, condition);
            });
        });

        // Get License Types.
        describe.skip('GetLicenseTypes', () => {
            test('Get all.', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(false);
                };
                raterdb.GetLicenseTypes(data, condition);
            });
        });
    });

    describe('license features', () => {
        // Save License Feature.
        describe('SaveLicenseFeature', () => {
            test('Save (Normal).', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(true);
                };
                raterdb.SaveLicenseFeature(data, condition);
            });
        });

        // Get License Features.
        describe.skip('GetLicenseFeatures', () => {
            test('Get all.', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(false);
                };
                raterdb.GetLicenseFeatures(data, condition);
            });
        });
    });

    describe('customers', () => {
        // Save Customer.
        describe('SaveCustomer', () => {
            test('Save (Normal).', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(true);
                };
                raterdb.SaveCustomer(data, condition);
            });
        });

        // Save Customer (ML).
        describe('SaveCustomerML', () => {
            test('Save (Normal).', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(true);
                };
                raterdb.SaveCustomerML(data, condition);
            });
        });

        // Get Customers.
        describe.skip('GetCustomers', () => {
            test('Get all.', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(false);
                };
                raterdb.GetCustomers(data, condition);
            });
        });
    });

    describe('branchs', () => {
        // Save Branch.
        describe('SaveBranch', () => {
            test('Save (Normal).', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(true);
                };
                raterdb.SaveBranch(data, condition);
            });
        });

        // Save Branch (ML).
        describe('SaveBranchML', () => {
            test('Save (Normal).', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(true);
                };
                raterdb.SaveBranchML(data, condition);
            });
        });

        // Get Branchs.
        describe.skip('GetBranchs', () => {
            test('Get all.', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(false);
                };
                raterdb.GetBranchs(data, condition);
            });
        });
    });

    describe('member infos', () => {
        // Save Member Information.
        describe('SaveMemberInfo', () => {
            test('Save (Normal).', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(true);
                };
                raterdb.SaveMemberInfo(data, condition);
            });
        });

        // Save Member Information (ML).
        describe('SaveMemberInfoML', () => {
            test('Save (Normal).', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(true);
                };
                raterdb.SaveMemberInfoML(data, condition);
            });
        });

        // Get Member Informacions.
        describe.skip('GetMemberInfos', () => {
            test('Get all.', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(false);
                };
                raterdb.GetMemberInfos(data, condition);
            });
        });
    });

    describe('orgs', () => {
        // Save Org.
        describe('SaveOrg', () => {
            test('Save (Normal).', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(true);
                };
                raterdb.SaveOrg(data, condition);
            });
        });

        // Save Org (ML).
        describe('SaveOrgML', () => {
            test('Save (Normal).', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(true);
                };
                raterdb.SaveOrgML(data, condition);
            });
        });

        // Get Orgs.
        describe.skip('GetOrgs', () => {
            test('Get all.', () => {
                var data = {};
                var condition = (result) => {
                    //expect(result.errors.errNum).toBe(0);
                    expect(result.errors.hasError).toBe(false);
                };
                raterdb.GetOrgs(data, condition);
            });
        });
    });
});