// The Local storage class.
class LocalStorage {
    constructor() {
        this._name = ''
        this._data = null
        this._ttl = 0;
    };

    //-- public methods.
    checkExist() {
        if (!this.data) {
            this.data = this.getDefault();
            this.save();
        }
    };

    getDefault() {
        return {}
    };

    save() {
        if (!this._name) return; // no name specificed.
        let ttl = (this._ttl) ? this._ttl : 0;
        nlib.storage.set(this._name, this._data, { TTL: ttl }); // 1 days.
    };

    load() {
        if (!this._name) return; // no name specificed.
        let ttl = (this._ttl) ? this._ttl : 0;
        this._data = nlib.storage.get(this._name);
    };

    //-- public properties.
    get name() { return this._name; };
    set name(value) { this._name = value; };

    get data() { return this._data; };
    set data(value) { this._data = value; };

    get ttl() { return this._ttl; };
    set ttl(value) { this._ttl = value; };
};

// The user perference class.
class UserPerference extends LocalStorage {
    constructor() {
        super();
        this.name = 'uperf'
        this.ttl = 0;
        this._prefchanged = null;
        this.load();
        this.checkExist();
    };

    //-- public methods.
    getDefault() {
        return {
            langId: 'EN'
        }
    };

    load() {
        super.load();
        if (!this._prefchanged) return;
        if (this._prefchanged instanceof Function) _prefchanged();
    };

    save() {
        super.save();
        if (!this._prefchanged) return;
        if (this._prefchanged instanceof Function) this._prefchanged();
    };

    //-- public properties.
    get langId() {
        if (!this.data) this.checkExist();
        return this.data.langId;
    };
    set langId(value) {
        if (!this.data) this.checkExist();
        this.data.langId = value;
    };

    //-- public callbacks.
    get prefchanged() {
        return this._prefchanged;
    };
    set prefchanged(value) {
        if (value instanceof Function) {
            this._prefchanged = value;
        }
    };
};

// The Client Information class.
class ClientInfo extends LocalStorage {
    constructor() {
        super();
        this.name = 'cinfo'
        this.ttl = 0;
        this.load();
        this.checkExist();
        //this.__checkAccessId();
    }

    //-- private methods.
    __checkAccessId() {
        if (!this.accessId || this.accessId === '') {
            let fn = api.registerClient({
                clientId: this.clientId,
                clientInitDate: this.initTime,
                clientInfo: JSON.stringify(this.clientInfo)
            });
            $.when(fn).then(r => {
                if (r && !r.errors.hasError && r.data && r.data.length > 0) {
                    this.accessId = r.data[0].accessId;
                    console.log('access id:', this.accessId);
                }
                else {
                    console.log(r);
                }
            });
        }
    };
    //-- public methods.
    getDefault() {
        let clientjs = new ClientJS();
        return {
            accessId: '',
            clientId: clientjs.getFingerprint(),
            initTime: new moment().format('YYYY-MM-DD HH.mm.ss.SSS'),
            clientInfo: {
                // User Agent
                userAgent: clientjs.getUserAgent(),
                // Browser
                browser: clientjs.getBrowser(),
                browserVersion: clientjs.getBrowserVersion(),
                browserMajorVersion: clientjs.getBrowserMajorVersion(),
                isIE: clientjs.isIE(),
                isChrome: clientjs.isChrome(),
                isFirefox: clientjs.isFirefox(),
                isSafari: clientjs.isSafari(),
                isOpera: clientjs.isOpera(),
                // Mobile
                isMobile: clientjs.isMobile(),
                isMobileMajor: clientjs.isMobileMajor(),
                isMobileAndroid: clientjs.isMobileAndroid(),
                isMobileIOS: clientjs.isMobileIOS(),
                isIphone: clientjs.isIphone(),
                isIpad: clientjs.isIpad(),
                isIpod: clientjs.isIpod(),
                isMobileSafari: clientjs.isMobileSafari(),
                isMobileWindows: clientjs.isMobileWindows(),
                isMobileBlackBerry: clientjs.isMobileBlackBerry(),
                // Engine
                engine: clientjs.getEngine(),
                engineVersion: clientjs.getEngineVersion(),
                // OS
                OS: clientjs.getOS(),
                osVersion: clientjs.getOSVersion(),
                isWindows: clientjs.isWindows(),
                isMac: clientjs.isMac(),
                isLinux: clientjs.isLinux(),
                isUbuntu: clientjs.isUbuntu(),
                isSolaris: clientjs.isSolaris(),
                // Device
                device: clientjs.getDevice(),
                deviceType: clientjs.getDeviceType(),
                deviceVendor: clientjs.getDeviceVendor(),
                // CPU
                CPU: clientjs.getCPU()
            }
        };
    };

    reset() {
        // overwrite all data with new one.
        this.data = this.getDefault();
    };

    //-- public properties.
    get accessId() {
        if (!this.data) this.checkExist();
        return this.data.accessId;
    };
    get clientId() {
        if (!this.data) this.checkExist();
        return this.data.clientId;
    };
    get initTime() {
        if (!this.data) this.checkExist();
        return this.data.initTime;
    };
    get clientInfo() {
        if (!this.data) this.checkExist();
        return this.data.clientInfo;
    };
};

// The Client App class.
class ClientApp {
    constructor() {
        this._clientInfo = new ClientInfo();
    };

    //-- public properties.
    get client() {
        return this._clientInfo;
    };
};

; (function () {
    //console.log('Init app core...');
    window.app = window.app || new ClientApp();
    /*
    let ret = 0;
    let fns = [];
    let fn1 = api.getLanguages({ enabled:true });
    let fn2 = api.getPeriodUnits({ langId: 'TH', enabled: true });
    let fn3 = api.getMemberTypes({ langId: 'TH', enabled: true });
    fns.push(fn1);
    fns.push(fn2);
    fns.push(fn3);
    
    $.when.all(fns).then((rs) => {
        ++ret;
        console.log(ret);
        console.log(rs);
    });

    let uid = nlib.utils.newUId();
    console.log(uid, ' Length:', uid.length);
    */
})();
