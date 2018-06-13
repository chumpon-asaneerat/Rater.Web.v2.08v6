const path = require('path');
// setup root path.
process.env['ROOT_PATHS'] = path.dirname(require.main.filename);
const rootPath = process.env['ROOT_PATHS'];
const libPath = path.join(rootPath, 'lib');

const conf = require(path.join(libPath, 'server-configs'));
const esvr = require(path.join(libPath, 'express-server'));
const server = new esvr.ExpressServer();

/*
const conf = require('./configs/app-configs');
const middleware = require('./lib/app-middlewares');
const commonpaths = require('./lib/app-paths');
const routes = require('./lib/app-routes');
//const nlib = require('./lib/nlib-core');

// create express middle ware instance.
var app = express();
// setup port
app.set('port', process.env.PORT || conf.server.portNumber);
// setup middlewares.
middleware.init(app);
// setip common path(s).
commonpaths.init(app);
// setup routes
routes.init(app);

// start server.
var server = app.listen(app.get('port'), function () {
    var appName = conf.app.name + ' ' + conf.app.version;
    var portName = server.address().port;
    console.log(appName + ' listening on port ' + portName);
});
*/

//console.log(conf.app);
//console.log(conf.server);
console.log(conf.db);

// Run Express Server.
//server.start();

