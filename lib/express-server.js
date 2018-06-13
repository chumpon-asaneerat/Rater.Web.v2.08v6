const express = require('express');
const path = require('path');
const fs = require('fs');

const rootPath = process.env['ROOT_PATHS'];
const libPath = path.join(rootPath, 'lib');
const conf = require(path.join(libPath, 'server-configs'));

class ExpressServer {
    //-- Constructor.
    constructor() {
        // create express instance.
        this.__app = express();
        this.__initPort();
    };

    //-- Private Methods.
    __initPort() {
        this.__app.set('port', process.env.PORT || conf.server.port);
    };

    //-- Public Methods.

    
    /**
     * Start the express web server.
     */
    start() {
        let self = this;
        let server = self.__app.listen(self.__app.get('port'), function () {
            var appName = conf.app.name + ' ' + conf.app.version;
            var portName = server.address().port;
            console.log(appName + ' listening on port ' + portName);
        })
    };
};

module.exports.ExpressServer = exports.ExpressServer = ExpressServer;