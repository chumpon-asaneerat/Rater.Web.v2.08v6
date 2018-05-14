riot.tag2('page-content-relative', '<h3>Content gone below.</h3> <yield></yield> <h3>Content end here.</h3>', 'page-content-relative,[data-is="page-content-relative"]{ margin: 1px auto; padding: 1px; }', '', function(opts) {
});
riot.tag2('page-content-absolute', '<div> <yield></yield> </div>', 'page-content-absolute,[data-is="page-content-absolute"]{ margin: 1px auto; padding: 1px; position: absolute; top: 48px; bottom: 24px; left: 1px; right: 4px; overflow-x: hidden; overflow-y: auto; }', '', function(opts) {
});

riot.tag2('page-footer', '<span class="float-left m-0 p-0" style="font-size: 0.7em;"> &nbsp;&nbsp;{label.status}&nbsp; <div class="v-divider">&nbsp;</div> </span> <span class="float-right m-0 p-0 ml-auto"> <div class="v-divider">&nbsp;</div> &copy;&nbsp;{label.copyright}&nbsp;&nbsp;&nbsp;&nbsp; </span>', 'page-footer,[data-is="page-footer"],page-footer nav,[data-is="page-footer"] nav,page-footer span,[data-is="page-footer"] span,page-footer .navbar-text,[data-is="page-footer"] .navbar-text{ color: whitesmoke; font-size: 0.8em; margin: 0 auto; } page-footer .v-divider,[data-is="page-footer"] .v-divider{ display: inline; margin-left: 5px; margin-right: 5px; border-left: 1px solid whitesmoke; }', 'class="navbar fixed-bottom m-0 p-1 navbar-light bg-primary"', function(opts) {
        let self = this;

        this.label = {
            status: "status",
            copyright: "EDL Co., Ltd."
        };

        app.content.ContentModel.modelloaded = (langId, modelType, loadedModel) => {
            if (modelType === 'footer') {
                let model = app.content.model;

                console.log('Model Loaded:', model);
                self.label = model.footer.label;
                self.update();
            }
        };
});
riot.tag2('page-nav-bar', '<div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary m-0 p-1"> <div class="container-fluid"> <a href="{nav.banner.href}" class="navbar-brand align-middle"> <div if="{(nav.banner.src !== \'\' && nav.banner.src !== \'#\')}" class="d-inline-block align-middle"> <img riot-src="{nav.banner.src}" class="d-inline-block align-middle" width="24" height="24"> {nav.banner.title} </div> <div if="{(!(nav.banner.src !== \'\' && nav.banner.src !== \'#\') && nav.banner.icon !== \'\')}" class="d-inline-block align-middle"> <span class="fas fa-{nav.banner.icon}" style="width:24px; height:24px;"></span> {nav.banner.title} </div> </a> <button class="navbar-toggler align-middle" type="button" data-target="#{nav.target}" data-toggle="collapse" aria-controls="{nav.target}" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="{nav.target}"> <ul class="navbar-nav"> <li each="{nav.links}" class="nav-item {active}"> <a class="nav-link {active}" href="{href}"> {text} </a> </li> </ul> <ul class="nav navbar-nav ml-auto"> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);" id="nav-languages"> <span class="flag-icon flag-icon-{nav.language.FlagId}"></span> &nbsp;&nbsp;{nav.language.DescriptionNative}&nbsp;&nbsp; <span class="caret"></span> </a> <div class="dropdown-menu dropdown-menu-right" aria-labelledby="nav-languages"> <a each="{nav.languages}" class="dropdown-item {active}" href="javascript:void(0);" langid="{LangId}" onclick="{selectLanguage}"> <span class="flag-icon flag-icon-{FlagId}"></span> &nbsp;&nbsp;{DescriptionNative}&nbsp;&nbsp; </a> </div> </li> </ul> </div> </div> </div>', 'page-nav-bar .navbar-brand,[data-is="page-nav-bar"] .navbar-brand{ padding-top: 3px; padding-bottom: 0px; font-size: 1em; }', '', function(opts) {

        this.nav = { }

        this.nav.banner = {
            title: opts.title || 'DEFAULT_TIELE',
            src: opts.src || '',
            icon: opts.icon || 'home',
            href: 'javascript:void(0);'
        };

        this.nav.target = opts.target || 'collapse_menu';

        this.nav.links = [

        ];

        this.nav.hasLinks = (this.nav.links.length > 0);

        this.nav.languages = [
            { LangId: 'EN', FlagId: 'us', DescriptionNative: 'English', active: 'active' }
        ];

        this.nav.hasLanguages = (this.nav.languages.length > 0);

        this.nav.language = this.nav.languages[0];

        var self = this;

        this.selectLanguage = function(e) {
            e.preventDefault();

            var langIdAttr = e.target.attributes.getNamedItem('langId');
            if (langIdAttr !== 'undefined') {

                app.idService.upref.langId = langIdAttr.value;
                app.idService.save();
                app.languageService.changeLanguage(app.idService.upref.langId);
            }
            else {
                console.log('cannot find langId attribute.');

            }
        };

        this.on('mount', function () {
            app.languageService.on('languagechanged', self.changeLanguage);
            app.contentService.on('contentchanged', self.changeContent);
            self.changeLanguage();

            self.update();
        });

        this.changeLanguage = function () {

            self.nav.language = app.languageService.language;

            self.nav.languages = app.languageService.languages;

            self.update();
        }

        this.changeContent = function () {

            var currLang =  app.languageService.language;
            var contentServ = app.contentService;
            var langId = currLang.LangId;
            var langData = contentServ.content[langId]

            if (!langData) {
                langData = contentServ.content['EN'];
            }

            self.nav.banner = langData.nav.banner;
            self.nav.links = langData.nav.links;

            self.update();
        }
});

riot.tag2('customer-admin-home-content', '<h2>Administrator Home.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-device-home-content', '<h2>Device Home.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-exclusive-home-content', '<h2>Exclusive Home.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-staff-staff-edit-content', '<h2>Edit Staff Information.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('default-home-content', '', '', '', function(opts) {
        var self = this;
});
riot.tag2('dev-home-content', '<h1>This is Developer - Home</h1> <h4>Test Load Style Sheet and Java Script</h4> <yield></yield> <page-footer></page-footer>', '', '', function(opts) {
});
riot.tag2('edl-admin-home-content', '<h2>EDL Administrator Home.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('edl-staff-staff-edit-content', '<h2>Edit Staff Information.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('edl-supervisor-home-content', '<h2>EDL Supervisor Home.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});