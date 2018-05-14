/* riotjs event manager. */
class RiotEvents {
    constructor() {
        riot.observable(this);
    }

    raise(eventName, ...args) {
        console.log('raise event: ', eventName);
        this.trigger(eventName, args);
        console.log('complete event: ', eventName);
    }
}

;(function () {
    console.log('Init event manager...');
    window.events = window.events || new RiotEvents();
})();

/* local storage base class. */
class LocalStorage {
    constructor() { 
        this._name = ''
        this._data = null
        this._ttl = 0;
    }

    /* public methods. */
    checkExist() {
        if (!this.data) {
            this.data = this.getDefault();
            this.save();
        }
    }

    getDefault() {
        return { }
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

    /* public properties. */
    get name() { return this._name; }
    set name(value) { this._name = value; }

    get data() { return this._data; }
    set data(value) { this._data = value; }

    get ttl() { return this._ttl; }
    set ttl(value) { this._ttl = value; }
}

/* client information. */
class ClientInfo extends LocalStorage {
    constructor() {
        super();
        this._clientjs = new ClientJS();
        this.name = 'cinfo'
        this.ttl = 0;
        this.load();
        this.checkExist();
    }

    /* public methods. */
    getDefault() {
        return {
            clientId: this._clientjs.getFingerprint(),
            initTime: new moment().format('DD-MM-YYYY HH.mm.ss.SSS')
        }
    }    

    /* public properties. */
    get clientjs() { return this._clientjs; }

    get clientId() {
        if (!this.data) this.checkExist();
        return this.data.clientId;
    }
    set clientId(value) {
        if (!this.data) this.checkExist();
        this.data.clientId = value;
    }

    get initTime() {
        if (!this.data) this.checkExist();
        return this.data.initTime;
    }
}

/* user perference. */
class UserPerference extends LocalStorage {
    constructor() {
        super();
        this.name = 'uperf'
        this.ttl = 0;
        this._prefchanged = null;
        this.load();
        this.checkExist();
    }

    /* public methods. */
    getDefault() {
        return {
            langId: 'EN'
        }
    }

    load() {
        super.load();
        if (!this._prefchanged) return;
        if (this._prefchanged instanceof Function) _prefchanged();
    }

    save() {
        super.save();
        if (!this._prefchanged) return;
        if (this._prefchanged instanceof Function) this._prefchanged();
    }
    
    /* public properties. */
    get langId() {
        if (!this.data) this.checkExist();
        return this.data.langId;
    }
    set langId(value) {
        if (!this.data) this.checkExist();
        this.data.langId = value;
    }

    /* public callbacks. */
    get prefchanged() { return this._prefchanged; }
    set prefchanged(value) {
        if (value instanceof Function) {
            this._prefchanged = value;
        }
    }
}

/* user access information. */
class AccessInfo extends LocalStorage {
    constructor() {
        super();
        this.name = 'uid'
        this.ttl = 24 * 60 * 60 * 1000;
        this.load();
        this.checkExist();
    }

    /* public methods. */
    getDefault() {
        return {
            accessId: '',
            customerId: '',
            memberType: 0,
            memberId: '',
        }
    }

    signIn(langId, userName, passWord) {
        let data = {
            "langId": langId,
            "userName": userName,
            "passWord": passWord
        };
        let self = this;
        var fn = api.signIn(data);
        $.when(fn).done(function (r) {
            if (!r.errors.hasError && r.data.length > 0) {
                var user = r.data[0];
                if (user) {
                    console.log(user);
                    self.memberId = user.MemberId
                    self.memberType = user.MemberType;
                    self.customerId = user.CustomerId;
                    self.save();

                    var data2 = { "MemberType": user.MemberType };

                    var fn2 = api.getUserHomeUrl(data2);

                    $.when(fn2).done(function (r2) {
                        console.log(r2);
                        if (!r.errors.hasError && r2.data.url !== '') {
                            nlib.nav.gotoUrl(r2.data.url);
                        }
                        else {
                            // TODO: invalid member type.
                        }
                    });
                }
                else {
                    console.log('cannot find user.');
                }
            }
            else {
                // TODO: send error to ui.
            }
        });
    }

    signOut() {
        super.data = this.getDefault();
        this.save();
        nlib.nav.gotoUrl('/');
    }

    /* public properties. */
    get customerId() {
        if (!this.data) this.checkExist();
        return this.data.customerId;
    }
    set customerId(value) {
        if (!this.data) this.checkExist();
        this.data.customerId = value;
    }

    get memberType() {
        if (!this.data) this.checkExist();
        return this.data.memberType;
    }
    set memberType(value) {
        if (!this.data) this.checkExist();
        this.data.memberType = value;
    }

    get memberId() {
        if (!this.data) this.checkExist();
        return this.data.memberId;
    }
    set memberId(value) {
        if (!this.data) this.checkExist();
        this.data.memberId = value;
    }
}

/* Master Models. */
class MasterModel {
    constructor() {
        this._languages = [];
        this._membertypes = { };
        this._periodUnits = { };
        this._limitUnits = {};
        this._licenses = {};
    }

    db2model(langId, dbResult, modelObj, errCallback) {
        //console.log(dbResult);
        if (dbResult && !dbResult.errors.hasError && dbResult.data.length > 0) {
            if (!modelObj[langId]) {
                modelObj[langId] = {}
            }
            modelObj[langId] = dbResult.data;
        }
        else {
            // TODO: Error
            if (errCallback && errCallback instanceof Function) {
                //errCallback();
            }
        }
    }

    load() {
        let self = this;
        let fn1 = api.getLanguages({ "enabled": "1" });
        $.when(fn1).then(function (r1) {
            if (r1 && !r1.errors.hasError && r1.data.length > 0) {
                //console.log(r1.data);
                self._languages = r1.data;
                self._languages.forEach(lang => {
                    let langId = lang.LangId;
                    let fn2 = api.getMemberTypes({ "langId": langId, "enabled": "1" });
                    let fn3 = api.getPeriodUnits({ "langId": langId, "enabled": "1" });
                    let fn4 = api.getLimitUnitds({ "langId": langId, "enabled": "1" });
                    let fn5 = api.getLicenses({ "langId": langId });
                    $.when(fn2, fn3, fn4, fn5).then(function (r2, r3, r4, r5) {
                        // Member Type.
                        if (!self._membertypes) self._membertypes = { }
                        self.db2model(langId, r2[0], self._membertypes, () => { 
                            console.log('Cannot get member types for langId: ', langId);
                        });
                        // Period Units.
                        if (!self._periodUnits) self._periodUnits = {}
                        self.db2model(langId, r3[0], self._periodUnits, () => {
                            console.log('Cannot get period units for langId: ', langId);
                        });
                        // Limit Units.
                        if (!self._limitUnits) self._limitUnits = {}
                        self.db2model(langId, r4[0], self._limitUnits, () => {
                            console.log('Cannot get limit units for langId: ', langId);
                        });
                        // Licenses.
                        if (!self._licenses) self._licenses = {}

                        if (r5[0] && !r5[0].errors.hasError && r5[0].data[langId] &&
                            r5[0].data[langId].licenses && 
                            r5[0].data[langId].licenses.length > 0) {
                            if (!self._licenses[langId]) {
                                self._licenses[langId] = {}
                            }
                            self._licenses[langId] = r5[0].data[langId].licenses;
                        }
                        else {
                            // TODO: Error
                            console.log('Cannot get licenses for langId: ', langId);
                            //console.log(r5[0].data[langId].licenses.length);
                        }
                    })
                });
            }
            else {
                // TODO: Error Get Languages.
                console.log('Cannot get language from server.');
            }
        })        
    }

    /* public properties */
    get languages() { return this._languages; }
    get memberTypes() { return this._membertypes; }
    get periodUnits() { return this._periodUnits; }
    get limitUnits() { return this._limitUnits; }
    get licenses() { return this._licenses; }
}

/* Core Application (client). */
class ClientApp {
    constructor() {
        this._clientInfo = new ClientInfo();
        this._userPerf = new UserPerference();
        this._userPerf.prefchanged = this.onchangepref;
        this._accessInfo = new AccessInfo();
        this._masters = new MasterModel();
    }

    /* public methods. */
    load() { 
        this._clientInfo.load();
        this._userPerf.load();
        this._accessInfo.load();
    }
    save() { 
        this._clientInfo.save();
        this._userPerf.save();
        this._accessInfo.save();
    }

    onchangepref() {
        console.log('preference changed.');
        events.raise('languagechanged');
    }

    /* sign in / sign out */
    signIn(userName, passWord) {
        let langId = this._userPerf.langId;
        this._accessInfo.signIn(langId, userName, passWord);
    }

    signOut() {
        this._accessInfo.signOut();
    }

    /* change language */
    changeLanguage(langId) {
        this._userPerf.langId = langId;
        this._userPerf.save();
    }

    /* public properties. */
    get info() { return this._clientInfo; }
    get perf() { return this._userPerf; }
    get id() { return this._accessInfo; }
    get master() { return this._masters; }
}

;(function() {
    console.log('Init app core...');
    window.app = window.app || new ClientApp();
    window.app.master.load();
})();
