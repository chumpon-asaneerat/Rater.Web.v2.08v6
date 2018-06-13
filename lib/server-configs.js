const path = require('path');
const fs = require('fs');

const rootPath = process.env['ROOT_PATHS'];
const configPath = path.join(rootPath, 'configs');

class ServerConfig {
    //-- Constructor.
    constructor() {
        this._config = null;
        this.__loadConfig();
    }

    //-- Private Methods.
    __loadConfig() {
        let cfgFile = path.join(configPath, 'server-config.json');
        let obj = null;
        if (fs.existsSync(cfgFile)) {
            obj = fs.readFileSync(cfgFile, 'utf8');
            if (obj) {
                this._config = JSON.parse(obj);
            }
        }
        if (!obj) {
            // file not found or cannot read file.
            this._config = null;
        }
    };

    //-- public properties.
    get app() { return (this._config) ? this._config.app : null; };
    get server() { return (this._config) ? this._config.server : null; };
    get db() {
        let db = (this._config) ? this._config.db : null;
        if (!db || !db.accounts || db.accounts.length <= 0 || !db.current)  {
            return null;
        }
        let curr = db.current;
        let accounts = db.accounts;
        let accNames = accounts.map((acc) => acc.name.toLowerCase());
        let index = accNames.indexOf(curr.toLowerCase());
        if (index === -1) return null;
        return accounts[index];
    };
};

const config = new ServerConfig();

module.exports = exports = config;