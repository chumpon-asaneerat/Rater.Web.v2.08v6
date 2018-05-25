//#region DOMEvents class
/*
class DOMEvents {
    constructor() { 
    };

    addEvent (selector, evtName, callback) {
        $(selector).on(evtName, callback);
    };

    listen() {
        this.addEvent(window, 'resize', (e) => {
            console.log(e);
        });
    };
};

; (function () {
    window.evts = window.evts || new DOMEvents();
    window.evts.listen();
})();
*/
//#endregion

//#region RiotTrack class
/*
class RiotTrack {
    constructor(riotTag) {
        this.__tag = riotTag;

        console.log(this.__tag);
    };

    get tag() {
        return this.__tag;
    };
};
*/
//#endregion

//#region ClientAccess class

class ClientAccess {
    constructor() {
        this.__userListChanged = new EventHandler();
        this._users = [];
    };

    getUsers(login) {
        let self = this;
        if (!login.langId) { 
            login.langId = 'EN'; // Or should be current language.
        }
        let fn = api.secure.getUsers(login);
        $.when(fn).then((r) => {
            if (!r || !r.errors) { 
                console.log('No data returns.'); 
            }
            if (r.errors.hasError) { 
                console.log(r.errors); 
            }
            if (!r.data || r.data.length <= 0) { 
                console.log('No user found.'); 
            }

            self._users = r.data;
            self.__userListChanged.invoke(self, EventArgs.Empty);
        });
    };

    getCurrentUser() {
        let fn = api.secure.getCurrentUser();
    };

    clear() {
        this._users = [];
    }

    signIn(user) {
        this.clear();
        let fn = api.secure.signIn(user);
        $.when(fn).then((r) => {
            if (r && !r.errors.hasError) {
                nlib.nav.gotoUrl(r.url);
            }
        });
    };

    signOut() {
        this.clear();
        let fn = api.secure.signOut();
        $.when(fn).then((r) => {
            if (r && r.url) {
                nlib.nav.gotoUrl(r.url);
            }
            else {
                nlib.nav.gotoUrl('/');
            }
        });
    };

    get users() {
        return this._users;
    };

    get userListChanged() {
        return this.__userListChanged;
    };
};

; (function () {
    //console.log('Init app core...');
    window.secure = window.secure || new ClientAccess();
})();

//#endregion

//#region BS4Modal class

class BS4Modal {
    constructor(id) {
        this._id = id;
        let self = this;
        this._handlers = {
            onHide: (e) => {
                //console.log('detected modal hide event.');
                let $modal = $(self._id);
                $modal.unbind('hide.bs.modal'); // unbind hide handler
            }
        };
    };

    show(options) {
        //console.log('manual show dialog.');        
        let $modal = $(this._id);
        let opts = options || {};
        // bind/rebind hide handler.
        $modal.on('hide.bs.modal', this._handlers.onHide);
        // show dialog
        $modal.modal(opts).modal('show');
    };
    
    hide() { 
        //console.log('manual hide dialog.');
        let $modal = $(this._id);
        // hide dialog.
        $modal.modal('hide');
    };

    get id() {
        return this.id;
    };
};

//#endregion

class ClientApp {
    constructor() {

    };
};

; (function () {
    //console.log('Init app core...');
    window.app = window.app || new ClientApp();
 })();
