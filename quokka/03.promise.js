String.repeat = function (chr, count) {
    var str = "";
    for (var x = 0; x < count; x++) { str += chr };
    return str;
};

String.prototype.padL = function (width, pad) {
    if (!width || width < 1)
        return this;

    if (!pad) pad = " ";
    var length = width - this.length
    if (length < 1) return this.substr(0, width);

    return (String.repeat(pad, length) + this).substr(0, width);
};

String.prototype.padR = function (width, pad) {
    if (!width || width < 1)
        return this;

    if (!pad) pad = " ";
    var length = width - this.length
    if (length < 1) this.substr(0, width);

    return (this + String.repeat(pad, length)).substr(0, width);
};

Date.prototype.format = function (format) {
    var date = this;
    if (!format) format = "MM/dd/yyyy";

    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    format = format.replace("MM", month.toString().padL(2, "0"));

    if (format.indexOf("yyyy") > -1)
        format = format.replace("yyyy", year.toString());
    else if (format.indexOf("yy") > -1)
        format = format.replace("yy", year.toString().substr(2, 2));

    format = format.replace("dd", date.getDate().toString().padL(2, "0"));

    var hours = date.getHours();
    if (format.indexOf("t") > -1) {
        if (hours > 11)
            format = format.replace("t", "pm")
        else
            format = format.replace("t", "am")
    }
    if (format.indexOf("HH") > -1)
        format = format.replace("HH", hours.toString().padL(2, "0"));
    if (format.indexOf("hh") > -1) {
        if (hours > 12) hours - 12;
        if (hours == 0) hours = 12;
        format = format.replace("hh", hours.toString().padL(2, "0"));
    }
    if (format.indexOf("mm") > -1)
        format = format.replace("mm", date.getMinutes().toString().padL(2, "0"));
    if (format.indexOf("ss") > -1)
        format = format.replace("ss", date.getSeconds().toString().padL(2, "0"));
    // millisecond.
    if (format.indexOf("fff") > -1) {
        format = format.replace("fff", date.getMilliseconds().toString().padL(3, "0"));
    }

    return format;
};

class MockPromise {
    static create(fn, timeout) {
        let ret = new Promise((resolve, reject) => {
            let result = null;
            if (!fn || !(fn instanceof Function)) {
                console.log('The assigned value should be function.');
            }
            setTimeout(() => {
                result = fn(); 
                resolve(result);
            }, (timeout || !(typeof timeout !== 'Number')) ? timeout : 33);
        });

        return ret;
    };
};

class UserManager {
    constructor() { }

    //-- private methods.
    __getUsers() {
        let users = [{
            "userId": "M00001",
            "FullNameNative": "Mr. Test User.",
            "userName": "test@test.co.th", "passWord": "1234",
            "customerId": "EDL-2008050001",
            "CustomerName": "Test Company 1"
        },
        {
            "userId": "M00001",
            "FullNameNative": "Mr. Test User.",
            "userName": "test@test.co.th", "passWord": "1234",
            "customerId": "EDL-2008050002",
            "CustomerName": "Test Company 2"
        },
        {
            "userId": "M00001",
            "FullNameNative": "Mr. Admin User.",
            "userName": "admin@super-power.co.th", "passWord": "1234",
            "customerId": "EDL-2008050003",
            "CustomerName": "Super Power Company"
        },
        {
            "userId": "M00001",
            "FullNameNative": "Mr. Chumpon Asaneerat",
            "userName": "chumpon@softbase.co.th", "passWord": "1234",
            "customerId": "EDL-2008050004",
            "CustomerName": "Softbase Company"
        }];
        return users;
    };

    getUsers() {
        return MockPromise.create(this.__getUsers, 'xx');
    };
};

let usr = new UserManager();
let users = usr.getUsers();

let d = new Date();
console.log(d.format('yyyy-MM-dd HH:mm:ss.fff'));

users.then((r) => {
    d = new Date();
    console.log(d.format('yyyy-MM-dd HH:mm:ss.fff'));
    console.log(r);
});

/*
let iCnt = 0;
let iMax = 3;
let loop_fn = setInterval(() => {
    ++iCnt;
    if (iCnt >= iMax) {
        clearInterval(loop_fn);
    }
    d = new Date();
    console.log('Call:', iCnt, ' Value:', d.format('yyyy-MM-dd HH-mm-ss.fff'));
}, 33);
*/