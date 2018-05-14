import { lang } from "moment";

/**
 * NDelegate class. The .NET like delegate.
 */
class NDelegate {
    constructor() {
        this._events = [];
    };

    //-- public methods.
    indexOf(value) {
        if (value && value instanceof Function) {
            return this._events.indexOf(value);
        }
        else return -1;
    };

    add(value) {
        if (value && value instanceof Function) {
            let index = this.indexOf(value);
            if (index === -1) {
                this._events.push(value); // append.
            }
            else this._events[index] = value; // replace.
        }
        else {
            console.log('The value is null or is not instance of Function.');
        }
    };

    remove(value) {
        if (value && value instanceof Function) {
            let index = this.indexOf(value);
            if (index >= 0 && index < this._events.length) {
                this._events.splice(index, 1); // delete.
            }
        }
        else {
            console.log('The value is null or is not instance of Function.');
        }
    };

    invoke(...args) {
        let evtDataObj = this.createEventData(args);
        this._events.forEach((evt) => {
            this.raiseEvent(evt, evtDataObj);
        });
    };

    createEventData(...args) {
        return args;
    };

    raiseEvent(evt, evtDataObj) {
        evt(evtDataObj)
    };
};
/**
 * EventHandler class. The .NET like EventHandler.
 */
class EventHandler extends NDelegate {
    //-- overrides
    createEventData(...args) {
        let sender = null;
        let evtData = null;

        if (args && args.length >= 1 && args[0]) {
            var a0 = args[0];
            if (a0.length >= 1) sender = a0[0];
            if (a0.length >= 2) evtData = a0[1];
        }

        return { "sender": sender, "evtData": evtData }
    };

    raiseEvent(evt, evtDataObj) {
        evt(evtDataObj.sender, evtDataObj.evtData);
    };
};
/**
 * The Event Args class. The .NET like EventArgs.
 */
class EventArgs {
    static get Empty() { return null; }
};
/**
 * The DataSource class.
 */
class DataSource {
    //-- constructor.
    constructor() {
        this._datasource = null;
        this._selectedIndex = -1;
        this._datasourcechanged = new EventHandler();
        this._selectedindexchanged = new EventHandler();
    };

    //-- public properties.
    get datasource() {
        return this._datasource;
    };
    set datasource(value) {
        if (value && (value instanceof Array)) {
            //console.log('new data source assigned.');
            let oVal = this._datasource
            let nVal = value;
            this._datasource = value;
            //console.log(this._datasource);
            this._datasourcechanged.invoke(this, { "oldValue": oVal, "newValue": nVal })
            if (this._datasource && this._datasource.length > 0) {
                //console.log('datasource is not null');
                this.selectedIndex = 0;
            }
            else {
                //console.log('datasource is null');
                this.selectedIndex = -1;
            }
        }
        else {
            console.log('datasource is null and is not instance of array.');
        }
    };

    get selectedIndex() {
        return this._selectedIndex;
    };
    set selectedIndex(value) {
        if (!this._datasource ||
            value < 0 || value >= this._datasource.length) {

            let oVal = this._selectedIndex
            let nVal = -1;
            this._selectedIndex = -1;
            this._selectedindexchanged.invoke(this, { "oldValue": oVal, "newValue": nVal })
        }
        else {
            let oVal = this._selectedIndex
            let nVal = value;
            this._selectedIndex = value;
            this._selectedindexchanged.invoke(this, { "oldValue": oVal, "newValue": nVal })
        }
    };

    get selectedObject() {
        if (!this._datasource ||
            this._selectedIndex < 0 || this._selectedIndex >= this._datasource.length) {
            return null;
        }
        else {
            return this._datasource[this._selectedIndex];
        }
    };

    //-- event handlers.
    get datasourcechanged() {
        return this._datasourcechanged;
    };
    get selectedindexchanged() {
        return this._selectedindexchanged;
    };
};
/**
 * Language Service.
 */
class LanguageService extends DataSource {
    //-- public methods.
    findLanguage(langId) {
        if (this.datasource && this.datasource.length > 0 && 
            langId && langId !== '') {
            let index = this.datasource.map((item) => { return item.langId; }).indexOf(langId);
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
                this.selectedIndex = index;
            }
            else {
                //console.log('Not found language match langId:', langId);
                if (this.selectedIndex === -1) {
                    // use EN.
                    index = this.findLanguage('EN');
                    if (index !== -1) {
                        //console.log('Use EN.');
                        this.selectedIndex = index;
                    }
                    else {
                        // not found EN.
                        //console.log('Not Found LangId: EN.');
                    }
                }
                else {
                    //console.log('Not Found LangId:', langId);
                    index = this.findLanguage(this.currentLangId);
                    if (index !== -1) {
                        //console.log('Use Current Language Selection.');
                        this.selectedIndex = index; // use current selection.
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

    //-- public properties.
    get currentLangId() {
        let langId = null;
        if (this.selectedObject) {
            langId = this.selectedObject.langId;
        }
        return langId;
    };
};

let languages = [
    { "langId": "EN", "DescriptionNative": "English" },
    { "langId": "TH", "DescriptionNative": "ไทย" }
];

//-- Test Data Source
/*
let ds = new DataSource();
let ds_datasoure_changed = (sender, evtData) => {
    //console.log(sender);
    //console.log(evtData);
};
let ds_selected_index_changed = (sender, evtData) => {
    //console.log(sender);
    //console.log(evtData);
    let dsc = sender;
    console.log(dsc.selectedObject);
};

//ds.datasourcechanged.add(ds_datasoure_changed);
ds.selectedindexchanged.add(ds_selected_index_changed);

ds.datasource = languages;
*/

//-- Test Language Service
let langS = new LanguageService();
langS.datasource = languages;

let lang_selected_index_changed = (sender, evtData) => {
    //console.log(sender);
    //console.log(evtData);
    let dsc = sender;
    console.log(dsc.currentLangId);
    console.log(dsc.selectedObject);
};
langS.selectedindexchanged.add(lang_selected_index_changed);

//langS.changeLanguage('TH');
//langS.changeLanguage('');
//langS.changeLanguage('EN');
//langS.changeLanguage('');
