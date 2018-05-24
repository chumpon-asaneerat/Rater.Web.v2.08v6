
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

class RiotTrack {
    constructor(riotTag) {
        this.__tag = riotTag;

        console.log(this.__tag);
    };

    get tag() {
        return this.__tag;
    };
};

class ClientApp {
    constructor() {

    };
};

; (function () {
    //console.log('Init app core...');
    window.app = window.app || new ClientApp();
 })();
