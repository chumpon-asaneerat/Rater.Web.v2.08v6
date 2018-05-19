//-- Repeat character by specificed number.
String.repeat = function (chr, count) {
    var str = "";
    for (var x = 0; x < count; x++) { str += chr };
    return str;
};
//-- Pad Left by specificed number.
String.prototype.padL = function (width, pad) {
    if (!width || width < 1)
        return this;

    if (!pad) pad = " ";
    var length = width - this.length
    if (length < 1) return this.substr(0, width);

    return (String.repeat(pad, length) + this).substr(0, width);
};
//-- Pad Right by specificed number.
String.prototype.padR = function (width, pad) {
    if (!width || width < 1)
        return this;

    if (!pad) pad = " ";
    var length = width - this.length
    if (length < 1) this.substr(0, width);

    return (this + String.repeat(pad, length)).substr(0, width);
};

//-- Date.format - The C# like DateTime.format.
// Usage:
// let a = new Date();
// d.format();
// d.format('yyyy-MM-dd');
// The avaliable format:
//   yyyy : year (4 digits)
//     yy : year (2 digits)
//     MM : month (1-12)
//     dd : date (1-31)
//      t : pm/am
//     HH : hour (0-23)
//     hh : hour (1-12)
//     mm : minute (0-59)
//     ss : second (0-59)
//     ss : second (0-59)
//    fff : milliseconds (0-999)
Date.prototype.format = function (format) {
    var date = this;
    if (!format) format = "yyyy-MM-dd HH-mm-ss.fff";

    var month = date.getUTCMonth() + 1;
    var year = date.getUTCFullYear();

    // year.
    if (format.indexOf("yyyy") > -1)
        format = format.replace("yyyy", year.toString());
    else if (format.indexOf("yy") > -1)
        format = format.replace("yy", year.toString().substr(2, 2));

    // month
    format = format.replace("MM", month.toString().padL(2, "0"));

    // date.
    format = format.replace("dd", date.getUTCDate().toString().padL(2, "0"));

    // hour - am/pm.
    var hours = date.getUTCHours();
    if (format.indexOf("t") > -1) {
        if (hours > 11)
            format = format.replace("t", "pm")
        else
            format = format.replace("t", "am")
    }
    // hour.
    if (format.indexOf("HH") > -1)
        format = format.replace("HH", hours.toString().padL(2, "0"));
    if (format.indexOf("hh") > -1) {
        if (hours > 12) hours - 12;
        if (hours == 0) hours = 12;
        format = format.replace("hh", hours.toString().padL(2, "0"));
    }
    // minute.
    if (format.indexOf("mm") > -1)
        format = format.replace("mm", date.getUTCMinutes().toString().padL(2, "0"));
    // second.
    if (format.indexOf("ss") > -1)
        format = format.replace("ss", date.getUTCSeconds().toString().padL(2, "0"));
    // millisecond.
    if (format.indexOf("fff") > -1) {
        format = format.replace("fff", date.getUTCMilliseconds().toString().padL(3, "0"));
    }

    return format;
};

let iCnt = 0;
let iMax = 3;
let loop_fn = setInterval(() => {
    ++iCnt;
    if (iCnt >= iMax) {
        clearInterval(loop_fn);
    }
    d = new Date();
    //console.log(d.getTimezoneOffset());
    console.log('Call:', iCnt, ' Value:', d.format());
}, 33);
