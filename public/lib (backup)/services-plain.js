// jqyery, moment, nlib, riotjs required.

function IDService() {
    this.clientjs = new ClientJS();
    this.load();
};

IDService.prototype.load = function() {
    //console.log('load local storage.');
    this.uinfo = nlib.storage.get('uinfo');
    if (!this.uinfo) {
        this.uinfo = {
            clientId: this.clientjs.getFingerprint(),
            initTime: new moment().format('DD-MM-YYYY HH.mm.ss.SSS')
        };
    };

    this.upref = nlib.storage.get('upref');
    if (!this.upref) {
        this.upref = {
            langId: 'EN'
        };
    };

    this.id = nlib.storage.get('uid');
    if (!this.id) {
        this.id = this.default_uid();
    };
};

IDService.prototype.default_uid = function() {
    return {
        accessId: '',
        customerId: '',
        memberType: 0,
        memberId: '',
    };
};

IDService.prototype.save = function() {
    //console.log('save local storage');
    if (!this.uinfo) {
        this.uinfo = {
            clientId: this.clientjs.getFingerprint(),
            initTime: new moment().format('DD-MM-YYYY HH.mm.ss.SSS')
        };
    };
    nlib.storage.set('uinfo', this.uinfo, { TTL: 0 }); // infinite

    if (!this.upref) {
        this.upref = {
            langId: 'EN'
        };
    };
    //console.log(this.upref);
    nlib.storage.set('upref', this.upref, { TTL: 0 }); // infinite

    if (!this.id) {
        this.id = this.default_uid();
    };
    nlib.storage.set('uid', this.id, { TTL: 24 * 60 * 60 * 1000 }); // 1 days.
};

IDService.prototype.reset_uid = function () {
    this.id = this.default_uid();
    nlib.storage.set('uid', this.id, { TTL: 24 * 60 * 60 * 1000 }); // 1 days.
};

IDService.prototype.register = function (customerName, userName, passWord) {
    var self = this;

    var data = { 
        "customerName": customerName, 
        "userName": userName, 
        "passWord": passWord 
    };

    var fn = $.ajax({
        type: 'POST',
        url:'/api/edl/register', 
        data: data,
        dataType: 'json'
    });

    $.when(fn).done(function(r) {
        console.log(r);
        if (!r.errors.hasError) {
            self.reset_uid();
            nlib.nav.gotoUrl('/');
        }
        else {
            // TODO: send error to ui.
        }
    });
};

IDService.prototype.signin = function(userName, passWord) {
    var self = this;

    var data = {
        "langId": this.upref.langId,
        "userName": userName,
        "passWord": passWord
    };

    var fn = $.ajax({
        type: 'POST',
        url: '/api/edl/signin',
        data: data,
        dataType: 'json'
    });

    $.when(fn).done(function (r) {
        if (!r.errors.hasError && r.data.length > 0) {            
            var user = r.data[0];
            if (user) {
                console.log(user);
                self.id.memberId = user.MemberId
                self.id.memberType = user.MemberType;
                self.id.customerId = user.CustomerId;
                self.save();

                var data2 = { "MemberType": user.MemberType };

                var fn2 = $.ajax({
                    type: 'POST',
                    url: '/api/edl/utils/userhome',
                    data: data2,
                    dataType: 'json'
                });

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
};

IDService.prototype.signout = function () {
    var self = this;
    this.reset_uid();
    nlib.nav.gotoUrl('/');
};

/**
 * Language Service.
 */
function LanguageService() {
    // Make instances observable
    riot.observable(this);

    this.language = { }
    this.languages = [];
};

LanguageService.prototype.init = function() {

    var fn = $.ajax({
        type: 'GET',
        url: '/api/edl/languages/search',
        data: { "enabled": "1" },
        dataType: 'json'
    });
    
    return fn;
};

LanguageService.prototype.setup = function(langs) {
    this.languages = langs;
    for (var i = 0; i < this.languages.length; ++i) {
        // change flag to lower case.
        this.languages[i].FlagId = this.languages[i].FlagId.toLowerCase();
    }
};

LanguageService.prototype.changeLanguage = function(langId) {
    this.language = null;
    for (var i = 0; i < this.languages.length; ++i) {
        if (this.languages[i].LangId === langId) {
            this.language = this.languages[i];
            break;
        }
    }

    if (this.language === null) {
        //console.log('cannot find match language use EN.');
        this.language = this.languages[0];
    }
    //console.log('current language: ', this.language);
    this.trigger('languagechanged');
};

/**
 * Content Service.
 */
function ContentService() {
    // Make instances observable
    riot.observable(this);

    this.content = { };
};

ContentService.prototype.bindEvents = function() {
    var self = this;
    app.languageService.on('languagechanged', function () {
        var langServ = app.languageService;
        var langId = langServ.language.LangId;
        if (!langId) { 
            langId = 'EN';
        }
        //console.log('Content Service detected language changed to: ', langId);
        self.changeContent(langId);
    });
};

ContentService.prototype.loadContent = function(langId) {
    var url = '/models/nav/' + langId;
    //console.log('url:', url);
    return $.ajax(url);
};

ContentService.prototype.changeContent = function(langId) {
    var self = this;
    //console.log('request to change content to ', langId);
    if (!this.content[langId]) {
        this.content[langId] = { };
        var fn = this.loadContent(langId);
        $.when(fn).then(function (r1) {
            self.content[langId] = r1.data;
            self.trigger('contentchanged');
        });
    }
    else {
        //console.log(self.content[sLangId]);
        self.trigger('contentchanged');
    }
};

/**
 * App Service.
 */
function App() {
    this.idService = new IDService();
    this.languageService = new LanguageService();
    this.contentService = new ContentService();
    this.api = new API();
};

App.prototype.init = function() {
    var self = this;
    var idServ = this.idService;
    var langServ = this.languageService;
    var contentServ = this.contentService;

    var cL = langServ.init;

    $.when(cL()).then(function(r1) {
        contentServ.bindEvents();

        langServ.setup(r1.data); // update language array.

        var langId = idServ.upref.langId;
        langServ.changeLanguage(langId);
        
        riot.mount('*'); // init tags.
    });
};

var app = new App();

; (function() {
    app.init();
})();