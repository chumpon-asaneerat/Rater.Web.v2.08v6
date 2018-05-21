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
        this.onsaved();
    };

    onsaved() { }

    load() {
        if (!this._name) return; // no name specificed.
        let ttl = (this._ttl) ? this._ttl : 0;
        this._data = nlib.storage.get(this._name);
        this.onloaded();
    };

    onloaded() { }

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

    /* public methods. */
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

    /* public properties. */
    get langId() {
        if (!this.data) this.checkExist();
        return this.data.langId;
    };
    set langId(value) {
        if (!this.data) this.checkExist();
        this.data.langId = value;
    };

    /* public callbacks. */
    get prefchanged() { 
        return this._prefchanged; 
    };
    set prefchanged(value) {
        if (value instanceof Function) {
            this._prefchanged = value;
        }
    };
};

/* client information. */
class ClientInfo extends LocalStorage {
    constructor() {
        super();        
        this.name = 'cinfo'
        this.ttl = 0;
        this.load();
        this.checkExist();
    }

    /* public methods. */
    getDefault() {
        let clientjs = new ClientJS();
        return {
            
            clientId: clientjs.getFingerprint(),
            initTime: new moment().format('DD-MM-YYYY HH.mm.ss.SSS')
        }
    };

    /* public properties. */
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
};

/* The UserInfo class. */
class UserInfo extends LocalStorage {
    constructor() {
        super();
        this._valueChanged = new EventHandler();
        this.name = 'uid'
        this.ttl = 24 * 60 * 60 * 1000;
        this.load();
        this.checkExist();

        this._FullNameNative = "";
        this._CustomerNameNative = "";
        this._homeUrl = "";
    };

    //- public methods
    getDefault() {
        return {
            "customerId": "",
            "memberId": "",
            "MemberType": ""
        };
    };

    reset() {
        this.data = this.getDefault();
        this._FullNameNative = "";
        this._CustomerNameNative = "";
        this.save();
    };

    redirect() {
        // redirect.
        if (this.data && this.data.MemberType) {
            let data2 = { "MemberType": this.data.MemberType };
            let fn2 = api.getUserHomeUrl(data2);
            $.when(fn2).done(function (r2) {
                console.log(r2);
                if (!r2.errors.hasError && r2.data.url !== '') {
                    nlib.nav.gotoUrl(r2.data.url);
                }
                else {
                    // TODO: invalid member type.
                    console.log('invalid member type.');
                    this._userInfo.reset();
                    nlib.nav.gotoUrl('/');
                }
            });
        }
    };

    onsaved() {
        //this.redirect();
    };

    onloaded() {
        //this.redirect();
    };

    sync(langId) {
        let fn = api.getMemberDescription({
            "langId": langId,
            "customerId": this.customerId,
            "memberId": this.memberId
        });
        $.when(fn).then(r => {
            if (r && r.errors && !r.errors.hasError && r.data && r.data.length > 0) {
                this.FullNameNative = r.data[0].FullNameNative;
                this.CustomerNameNative = r.data[0].CustomerNameNative;
            }
            else {
                this.FullNameNative = this.memberId;
                this.CustomerNameNative = this.customerId;
            }
            // raise event.
            this._valueChanged.invoke(this, EventArgs.Empty);
        });
    };

    //-- public properties.
    get customerId() { 
        if (!this.data) this.checkExist();
        return this.data.customerId;
    };
    set customerId(value) {
        if (!this.data) this.checkExist();
        this.data.customerId = value;
    };

    get memberId() {
        if (!this.data) this.checkExist();
        return this.data.memberId;
    };
    set memberId(value) {
        if (!this.data) this.checkExist();
        this.data.memberId = value;
    };

    get MemberType() {
        if (!this.data) this.checkExist();
        return this.data.MemberType;
    };
    set MemberType(value) {
        if (!this.data) this.checkExist();
        this.data.MemberType = value;
    };

    get FullNameNative() {
        return this._FullNameNative;
    };
    set FullNameNative(value) {
        this._FullNameNative = value;
    };

    get CustomerNameNative() {
        return this._CustomerNameNative;
    };
    set CustomerNameNative(value) {
        this._CustomerNameNative = value;
    };

    get value() {
        return {
            "customerId": this.customerId,
            "memberId": this.memberId,
            "MemberType": this.MemberType,
            "FullNameNative": this.FullNameNative,
            "CustomerNameNative": this.CustomerNameNative
        }
    };

    get homeUrl() {
        return this._homeUrl;
    };

    //-- event properties
    get valueChanged() {
        return this._valueChanged;
    }
};

// The Language Service class.
class LanguageService extends DataSource {
    //-- constructor
    constructor() {
        super();
        this._locked = false;
        this._pref = new UserPerference();
        this.load(); // load from server.
    };

    //-- override methods.
    onDatasourceChange() { 
        super.onDatasourceChange();
    };

    onSelectedIndexChange() {
        //console.log('detected selected index changed.');
        super.onSelectedIndexChange();

        if (this._locked) {
            //console.log('detected lock update local storage.');
            return;
        }
        this._pref.langId = this.currentLangId;
        this._pref.save(); // Keep to local storage.
        //console.log('Save ', this.currentLangId, ' to local storage.');
    };

    //-- public methods.
    findLanguage(langId) {
        if (this.datasource && this.datasource.length > 0 &&
            langId && langId !== '') {
            let maps = this.datasource.map((item) => {
                return item.langId;
            });            
            let index = maps.indexOf(langId);
            return index;
        }
        else {
            return -1;
        }
    };

    changeLanguage(langId) {
        //console.log('Current LangId:', this.currentLangId);
        if (this.datasource && this.datasource.length > 0) {
            let index = this.findLanguage(langId);
            if (index !== -1) {
                //console.log('Use Language :', langId);
                if (!this._locked) {
                    this.selectedIndex = index;
                }
                else {
                    //console.log('deteced lock selectedindex.');
                }
            }
            else {
                //console.log('Not found language match langId:', langId);
                if (this.selectedIndex === -1) {
                    // use EN.
                    index = this.findLanguage('EN');
                    if (index !== -1) {
                        //console.log('Use EN.');
                        if (!this._locked) {
                            this.selectedIndex = index;
                        }
                        else {
                            //console.log('deteced lock selectedindex.');
                        }
                    }
                    else {
                        // not found EN.
                        //console.log('Not Found LangId: EN.');
                    }
                }
                else {
                    console.log('Not Found LangId:', langId);
                    index = this.findLanguage(this.currentLangId);
                    if (index !== -1) {
                        //console.log('Use Current Language Selection.');
                        if (!this._locked) {
                            this.selectedIndex = index; // use current selection.
                        }
                        else {
                            //console.log('deteced lock selectedindex.');
                        }
                    }
                    else {
                        // no current language selection.
                        //console.log('No Current Language Selection.');
                    }
                }
            }
        }
        else {
            //console.log('No languages loaded.');
        }
    };

    load() {
        let fn = api.getLanguages({ "enabled": "1" });
        //console.log('load languages...');
        $.when(fn).then((r) => {
            if (!r.errors.hasError) {
                //console.log('load languages...success');
                this._locked = true; // lock update local storage.
                this.datasource = r.data;
                this._locked = false; // unlock update local storage.
                //console.log('Previous LangId:', this._pref.langId);
                this.changeLanguage(this._pref.langId); // set language previous set.
            }
            else {
                //console.error('load languages...failed');
            }
        });
    };

    //-- public properties.
    get currentLangId() {
        let langId = null;
        if (this.selectedObject) {
            langId = this.selectedObject.langId;
        }
        return langId;
    };

    get isLocked() {
        return this._locked;
    };
};

class ContentModel {
    //-- constructor.
    constructor() {
        this._model = { };
        this._mountTags = '';

        let self = this;

        this._modelLoaded = new EventHandler();

        //-- event handler(s).
        let onLanguageChanged = (sender, evtData) => { 
            if (lang.isLocked) {
                return;
            }
            //console.log(evtData);
            let langId = lang.currentLangId;
            //console.log('langId:', langId);
            if (!self._model) {
                self._model = { };
            }
            if (!self._model[langId]) {
                self._model[langId] = { };
            }
            //console.log(langId);
            self.loadModels(langId);
        };
        lang.selectedIndexChanged.add(onLanguageChanged);
    };

    //-- public, virtual methods.
    loadModels(langId) { }
    
    loadModel(langId, modelType, callback) {
        //console.log('Current LangId:', lang.currentLangId);
        let self = this;
        let data = {
            langId: langId,
            modelType: modelType
        }
        let fn = api.getModel(data);
        $.when(fn).then((r) => {
            if (!r.errors.hasError) {
                if (!self._model[langId]) {
                    self._model[langId] = { }
                }
                if (!self._model[langId][modelType]) {
                    self._model[langId][modelType] = r.data;
                    //console.log(self._model);
                }
                let loadModel = self._model[langId][modelType];
                if (callback && callback instanceof Function) {
                    //console.log('Raise callback. data:', model[modelType], ', langId:', lang.currentLangId);
                    callback(loadModel);
                    if (this._modelLoaded) {
                        //console.log('raise event for type:', modelType);
                        this._modelLoaded.invoke(this, { 
                            "langId": langId, 
                            "type": modelType, 
                            "model": loadModel 
                        });
                    }
                }
            }
            else {
                console.error('detected error when get model:', modelType);
            }
        });
    };

    //-- public properties.
    get mountTags() {
        return this._mountTags;
    };
    set mountTags(value) {
        this._mountTags = value;
    };

    get model() {
        return this._model;
    }

    //-- event properties.
    get modelLoaded() {
        return this._modelLoaded;
    };
};

// The ClientPageModelService class. Provide function for load common contents.
class ClientPageModelService extends ContentModel {
    //-- constructor.
    constructor() {
        super();
    };

    //-- base methods.
    loadPage(langId) {
        let self = this;
        this.loadModel(langId, 'page', (r) => {
            //console.log(langId, 'page');
            document.title = self.model[langId].page.header.title;
        });
        this.loadModel(langId, 'banner', (r) => {
            //console.log(langId, 'banner');
            //console.log(r);
        });
        this.loadModel(langId, 'nav', (r) => {
            //console.log(langId, 'nav');
            //console.log(r);
        });
        this.loadModel(langId, 'footer', (r) => {
            //console.log(langId, 'footer');
            //console.log(r);
        });
    };

    //-- public, override methods.
    loadModels(langId) {
        //console.log('Request to load models.');
        this.loadPage(langId);
    };
};

// The Content Service class.
class ContentService {
    constructor() {
        this._modelService = null;
        this._modelServiceChanged = new EventHandler();
    };

    //-- public properties.
    get modelService() {
        return this._modelService;
    };
    set modelService(value) {
        //console.log('detected set model service.');
        this._modelService = value;
        this._modelServiceChanged.invoke(this, EventArgs.Empty);
    };

    get model() {
        let langId = lang.currentLangId;
        //console.log('langId:', langId);
        if (this._modelService && 
            this._modelService.model) {
            // returns model on current selected language.
            if (!this._modelService.model[langId]) {
                this._modelService.loadModels(langId);
            }
            return this._modelService.model[langId];
        }
        else {
            // not found.
            console.log('not found.');
            return null;
        }
    };

    //-- event properties.
    get modelServiceChanged() {
        return this._modelServiceChanged;
    };
};

// The User Service class.
class UserService {
    constructor() {
        this._userInfo = new UserInfo();
        this._selectedUser = this._userInfo.data;
        this._userNotFound = new EventHandler();
        this._currentUserChanged = new EventHandler();

        let self = this;

        let onValueChanged = (sender, evtData) => {
            // raise event that selected user is changed.
            self._currentUserChanged.invoke(self, EventArgs.Empty);
        };

        this._userInfo.valueChanged.add(onValueChanged);
    };

    //-- public methods.
    register(customer, errorCallback) {
        let fn = api.register(customer);
        $.when(fn).then((r) => {
            if (!r || !r.errors || r.errors.hasError) {
                if (errorCallback) {
                    errorCallback(r);
                }
            }
            else {
                // goto home.
                nlib.nav.gotoUrl('/');
            }
        });
    };

    // refresh description of current user by specificed langId.
    refresh(langId) {
        this._userInfo.sync(langId);
    };
    
    signIn(user, chooseCompanies) {
        let fn = api.signIn(user);
        $.when(fn).then((r) => {
            if (r && r.data && r.data.length > 0) {
                if (r.data.length === 1) {
                    this.selectedUser = r.data[0];
                }
                else {
                    //console.log('Sign In - found multiple companies for specificed user.');
                    if (chooseCompanies) {
                        chooseCompanies(r.data);
                    }
                }
            }
            else {
                // User not found.
                this._userNotFound.invoke(this, EventArgs.Empty);
            }
        });
    };

    signOut() {
        this._userInfo.reset();
        this.selectedUser = this._userInfo.data;
        // goto home.
        nlib.nav.gotoUrl('/');        
    };

    //-- public properties.
    get selectedUser() {
        return this._userInfo.value;
        //return this._selectedUser;
    };
    set selectedUser(value) {
        // some checking reqired.
        if (!value) {
            this._userInfo.customerId = "";
            this._userInfo.memberId = "";
            this._userInfo.MemberType = "";
            this._userInfo.FullNameNative = "";
            this._userInfo.CustomerNameNative = "";
        }
        else {
            this._userInfo.customerId = value.customerId;
            this._userInfo.memberId = value.memberId;
            this._userInfo.MemberType = value.MemberType;
            this._userInfo.FullNameNative = value.FullNameNative;
            this._userInfo.CustomerNameNative = value.CustomerNameNative;
        }

        this._selectedUser = value;
        this._currentUserChanged.invoke(this, EventArgs.Empty);

        this._userInfo.save();
    };

    //-- public events.
    get userNotFound() {
        return this._userNotFound;
    };
    get currentUserChanged() {
        return this._currentUserChanged;
    };
}

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
    window.lang = window.lang || new LanguageService();
    window.app = window.app || new ClientApp();

    let onLanguageChanged = (sender, evtData) => {
        app.user.refresh(lang.currentLangId);
    };

    lang.selectedIndexChanged.add(onLanguageChanged);

    // mount riot method call when model service assigned.
    let onModelServiceChanged = (sender, evtData) => {        
        //console.log('Model Service loaded.');
        riot.mount(app.content.modelService.mountTags);
    };
    
    app.content.modelServiceChanged.add(onModelServiceChanged);
})();