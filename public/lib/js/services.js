// The Client App class.
class ClientApp {
    constructor() {
        this._clientInfo = new ClientInfo();
        this._contServ = new ContentService();
        this._userServ = new UserService();
    };

    //-- public properties.
    get client() {
        return this._clientInfo;
    };
    get content() {
        return this._contServ;
    };
    get user() {
        return this._userServ;
    };
};

; (function () {
    //console.log('Init app core...');
    window.app = window.app || new ClientApp();
})();
