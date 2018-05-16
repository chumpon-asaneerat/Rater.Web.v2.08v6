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
    }
};

class ContentModel {
    //-- constructor.
    constructor() {
        this._model = { };
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
                        this._modelLoaded.invoke(this, { 
                            "langId": langId, 
                            "type": modelType, 
                            "model": loadModel 
                        })
                    }
                }
            }
            else {
                console.error('detected error when get model:', modelType);
            }
        });
    };

    //-- public properties.
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

    //-- virtual methods.
    loadPage(langId) {
        let self = this;
        this.loadModel(langId, 'page', (r) => {
            document.title = self.model[langId].page.header.title;
        });
        this.loadModel(langId, 'banner', (r) => {
            //console.log(r);
        });
        this.loadModel(langId, 'nav', (r) => {
            //console.log(r);
        });
        this.loadModel(langId, 'footer', (r) => {
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
    get ModelService() {
        return this._modelService;
    };
    set ModelService(value) {
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

// The Client App class.
class ClientApp {
    constructor() {
        this._contServ = new ContentService();
    }

    //-- public properties.
    get content() {
        return this._contServ;
    };
};

; (function () {
    //console.log('Init app core...');
    window.lang = window.lang || new LanguageService();
    window.app = window.app || new ClientApp();

    // mount riot method call when model service assigned.
    let onModelServiceChanged = (sender, evtData) => {        
        //console.log('Model Service loaded.');
        riot.mount('*');
    };
    
    app.content.modelServiceChanged.add(onModelServiceChanged);
})();
