//- Create New object with clone all properties with supports ignore case sensitive.
function clone(o, caseSensitive) {
    var oRet = {}
    var ignoreCase = (caseSensitive) ? false : true;
    var keys = Object.keys(o);
    keys.forEach((key) => { 
        oRet[(ignoreCase) ? key.toLowerCase() : key] = o[key]; 
    });
    return oRet;
};

function setValues(dest, src) {
    var keys = Object.keys(dest);
    keys.forEach(key => {
        let dKey = key.toLowerCase();
        dest[key] = (!src[dKey]) ? null : src[dKey];
    })
}

//-- Test Clone Functions
let o1 = { nAmE: "test" };
let o2 = clone(o1);
console.log(o2);

//-- Simulate update data from REST api.
// The data from client.
let data = {
    LangID: "TH",
    "customerid": "CUS0001",
    UId: "123456",
    "Name": "joe",
    "TEXT": "hello!!!"
};

// The data from json definition on server.
let dbDefs = {
    inputs: [
        { "name": "langId", "default": null },
        { "name": "CustomerId", "default": null },
        { "name": "uID", "default": null },
        { "name": "Text", "default": null }
    ]
};

// Simulate MSSQL connection input function.
// The connection has input and output methods for set input parameter and output parameter
// look like below.
//
//   conn.input(name, sqltype, value)
//   conn.outupt(name, sqltype, value)
let dbParams = { 
    "langId": null,
    "CustomerId": null,
    "uID": null,
    "Text": null
};

var pObj = clone(data); // assume send via rest get/post parameter.

var p_name = '';
var p_value = null;
var p_defval = null;

dbDefs.inputs.forEach(p_input => {
    p_name = p_input.name.toLocaleLowerCase();

    // get default value if not assigned in pObj.
    p_defval = (!p_input.default) ? null : p_input.default;
    if (p_name in pObj || pObj.p_name) {
        p_value = pObj[p_name];
    }
    else {
        p_value = p_defval;
    }

    // set conn.input here.
    console.log('name:', p_name, ', sql_type: any', ', value:', p_value);
});

setValues(dbParams, pObj);
console.log(dbParams);
