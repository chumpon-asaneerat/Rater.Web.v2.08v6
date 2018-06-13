// Export
/*
exports = module.exports = {
    app: {
        name: 'My Choice Rater Web',
        version: 'v2.0.8'
    },
    server: {
        portNumber: 3010
    },
    db: {
        //-- For DEV
        serverName: 'localhost',
        dbName: 'TestDb7x3',
        userName: 'sa',
        passWord: 'winnt123',
        //-- For EDL
        //dbName: 'RaterWeb2x8',
        //userName: 'sa',
        //passWord: 'P@ssw0rd',
        getDatabaseConfig: function () {
            return {
                user: this.userName,
                password: this.passWord,
                server: this.serverName,
                database: this.dbName,
                pool: {
                    max: 10,
                    min: 0,
                    idleTimeoutMillis: 30000
                }
            }
        }
    }
};
*/

class ServerConfig {
    //-- constructor.
    constructor() {
        this._app = { 
            name: 'My Choice Rater Web',
            version: 'v2.0.8',
            updated: '2018-06-13 23:50'
        };
        this._server = {
            portNumber: 3010
        }
        this._db = { 
            server: 'localhost',
            //-- For DEV
            database: 'TestDb7x3',
            user: 'sa',
            password: 'winnt123',
            //-- For EDL
            //database: 'RaterWeb2x8',
            //user: 'sa',
            //password: 'P@ssw0rd',
            getConfig: () => {
                let self = this;
                return {
                    server: self._db.server,
                    database: self._db.database,
                    user: self._db.user,
                    password: self._db.password,
                    pool: {
                        min: 0,
                        max: 10,
                        idleTimeoutMillis: 30000
                    }
                }
            }
        };
    }

    //-- public properties.
    get app() { return this._app; }
    get server() { return this._server; }
    get db() { return this._db; }
};

const config = new ServerConfig();

module.exports = exports = config;