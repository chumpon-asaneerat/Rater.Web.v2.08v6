class App {
    constructor() { }
}


function GetNavLinks(langId) {
    if (langId === 'TH') {
        return [
            { "text": "ลงชื่อเข้าใช้งาน", "url": "#" },
            { "text": "ลงทะเบียน", "url": "#" }
        ];
    }
    else {
        return [
            { "text": "Sign In", "url": "#" },
            { "text": "Register", "url": "#" }
        ];
    }
};

function getlanguages() {
    return [
        { "langId": "EN", "DescriptionNative": "English", "FlagIcon": "EN" },
        { "langId": "TH", "DescriptionNative": "ไทย", "FlagIcon": "TH" }
    ];
};

; (function () {
    // set global app variable in window.
    window.app = window.app || new App();

    riot.compile(function () {
        var tags = riot.mount('*');
    });
})();