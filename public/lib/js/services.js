// The Local storage class.
class LocalStorage {
    constructor() {
        this._name = ''
        this._data = null
        this._ttl = 0;
    }

    //-- public methods.
    checkExist() {
        if (!this.data) {
            this.data = this.getDefault();
            this.save();
        }
    }

    getDefault() {
        return {}
    }

    save() {
        if (!this._name) return; // no name specificed.
        let ttl = (this._ttl) ? this._ttl : 0;
        nlib.storage.set(this._name, this._data, { TTL: ttl }); // 1 days.
    }

    load() {
        if (!this._name) return; // no name specificed.
        let ttl = (this._ttl) ? this._ttl : 0;
        this._data = nlib.storage.get(this._name);
    }

    //-- public properties.
    get name() { return this._name; }
    set name(value) { this._name = value; }

    get data() { return this._data; }
    set data(value) { this._data = value; }

    get ttl() { return this._ttl; }
    set ttl(value) { this._ttl = value; }
};

// The Client App class.
class ClientApp {
    constructor() {

    }
};

; (function () {
    console.log('Init app core...');
    window.app = window.app || new ClientApp();
    //window.app.master.load();
})();
