// common requires.
const path = require('path');

//const rootPath = path.dirname(require.main.filename);
process.env['ROOT_PATHS'] = path.join(path.dirname(require.main.filename), '../');

const rootPath = process.env['ROOT_PATHS'];

const libPath = path.join(rootPath, 'lib');

const nlib = require(path.join(libPath, 'nlib-core'));
const mssqldb = require(path.join(libPath, 'mssql-db'));
const raterdb = require(path.join(libPath, 'rater-web-db'));

describe('Database', () => { 
    describe('GetRandomCode', () => {
        test('Direct', () => {
            expect(false).toBe(false);
        });
    });
});