/**
 * NDelegate class. The .NET like delegate.
 */
class NDelegate {
    constructor() {
        this._locked = false;
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
            //console.log(this._events);
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

    locked() {
        this._locked = true;
    };

    unlocked() {
        this._locked = false;
    };

    get isLocked() {
        return this._locked;
    };

    invoke(...args) {
        if (this._locked) {
            return;
        }
        let evtDataObj = this.createEventData(args);
        //console.log(this._events.length);
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

            if (!evtData) {
                evtData = { sender: null, handled: false };
            }
        }

        return { "sender": sender, "evtData": evtData }
    };

    raiseEvent(evt, evtDataObj) {
        let evtData = (!evtDataObj) ? { sender: null, handled: false } : evtDataObj.evtData;

        if (!evtData) {
            evtData = { handled: false };
        }

        if (typeof evtData.handled === 'undefined' || evtData.handled === null) {
            evtData.handled = false;
        }

        if (!evtData.handled) {
            evt(evtDataObj.sender, evtData);
        }
    };
};
/**
 * The Event Args class. The .NET like EventArgs.
 */
class EventArgs {
    static get Empty() { return null; }
};

let evt1 = new EventHandler();

let handler1 = (sender, evtData) => {
    evtData.handled = true;
    console.log('handler1 received event.');
};
evt1.add(handler1);

let handler2 = (sender, evtData) => {
    console.log('handler2 received event.');
};
evt1.add(handler2);

let handler3 = (sender, evtData) => {
    console.log('handler3 received event.');
};
evt1.add(handler3);

evt1.invoke('me3', EventArgs.Empty);