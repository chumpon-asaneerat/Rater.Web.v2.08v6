riot.tag2('page-content-relative', '<h3>Content gone below.</h3> <yield></yield> <h3>Content end here.</h3>', 'page-content-relative,[data-is="page-content-relative"]{ margin: 1px auto; padding: 1px; }', '', function(opts) {
});
riot.tag2('page-content-absolute', '<div id="page-content-abs" class="container-fluid"> <yield></yield> </div>', 'page-content-absolute,[data-is="page-content-absolute"]{ margin: 1px auto; padding: 1px; position: absolute; top: 3em; bottom: 2em; left: 1px; right: 4px; overflow-x: hidden; overflow-y: auto; }', '', function(opts) {


        let self = this;
        this.uid = nlib.utils.newUId();

});

riot.tag2('page-footer', '<span class="float-left m-0 p-0"> <label class="m-0 p-1">&nbsp;{label.status}&nbsp;:</label> <div class="v-divider">&nbsp;</div> </span> <span class="float-right m-0 p-0 ml-auto"> <div class="v-divider"></div> <label class="m-0 p-1">&copy;&nbsp;{label.copyright}&nbsp;&nbsp;&nbsp;</label> </span>', 'page-footer,[data-is="page-footer"],page-footer .navbar,[data-is="page-footer"] .navbar,page-footer .nav,[data-is="page-footer"] .nav,page-footer span,[data-is="page-footer"] span{ margin: 0 auto; padding: 0; } page-footer label,[data-is="page-footer"] label{ color: whitesmoke; font-size: 0.95em; font-weight: bold; } page-footer .v-divider,[data-is="page-footer"] .v-divider{ display: inline; margin-left: 2px; margin-right: 2px; border-left: 1px solid whitesmoke; }', 'class="navbar fixed-bottom m-0 p-0 navbar-light bg-primary"', function(opts) {


        let self = this;
        this.uid = nlib.utils.newUId();

        this.label = {
            status: "status",
            copyright: "EDL Co., Ltd."
        };

        let onModelLoaded = (sender, evtData) => {

            if (evtData.type === 'footer') {
                let model = app.content.model;

                self.label = model.footer.label;
                self.update();
            }
        };

        app.content.modelService.modelLoaded.add(onModelLoaded);

});
riot.tag2('page-nav-bar', '<div class="navbar navbar-expand-sm fixed-top navbar-dark bg-primary m-0 p-1"> <a href="{banner.url}" class="navbar-band m-1 p-0 align-middle"> <div class="d-inline-block"> <div if="{(banner.type === \'image\')}" class="d-inline-block m-0 p-0"> <img riot-src="{banner.src}" class="d-inline-block m-0 p-0 logo"> </div> <div if="{(banner.type===\'font\')}" class="d-inline-block m-0 p-0"> <span class="fas fa-{banner.src} navbar-text w-auto m-0 p-0"> <div if="{(banner.text !==\'\')}" class="d-inline-block m-0 p-0"> <span class="rater-text w-auto m-0 p-0"> &nbsp;&nbsp;{banner.text}&nbsp;&nbsp; </span> </div> </span> </div> </div> </a> <div class="d-flex flex-row order-2 order-sm-3 order-md-3 order-lg-3"> <ul class="navbar-nav flex-row ml-auto"> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle px-2 align-middle" data-toggle="dropdown" href="javascript:void(0);" id="nav-languages"> <span class="flag-icon flag-icon-{selectedLanguage.flagId.toLowerCase()}"></span> &nbsp;&nbsp;{selectedLanguage.DescriptionNative}&nbsp;&nbsp; <span class="caret"></span> </a> <div class="dropdown-menu dropdown-menu-right" aria-labelledby="nav-languages"> <a each="{languages}" class="dropdown-item {(selectedLanguage.flagId === flagId) ? \'active\': \'\'}" href="javascript:void(0);" langid="{langId}" onclick="{selectLanguage}"> <span class="flag-icon flag-icon-{flagId.toLowerCase()}"></span> &nbsp;&nbsp;{DescriptionNative}&nbsp;&nbsp; </a> </div> </li> </ul> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"> <span class="navbar-toggler-icon"></span> </button> </div> <div class="collapse navbar-collapse m-0 p-0 order-3 order-sm-2 order-md-2 order-lg-2" id="collapsibleNavbar"> <ul class="navbar-nav"> <li each="{nav.links}" class="nav-item {active}"> <a class="nav-link align-middle" href="{url}"> <span>&nbsp;</span> <div class="v-divider"></div> <span>&nbsp;</span> <div if="{(type===\'image\')}" class="d-inline-block m-0 p-0"> <img riot-src="{src}" class="d-inline-block m-0 p-0 menu-img"> <div if="{(text !==\'\' )}" class="d-inline-block m-0 p-0"> <span class="rater-text w-auto m-0 p-0"> &nbsp;{text}&nbsp; </span> </div> </div> <div if="{(type===\'font\')}" class="d-inline-block m-0 p-0"> <span class="fas fa-{src} navbar-text w-auto m-0 p-0"> <div if="{(text !==\'\' )}" class="d-inline-block m-0 p-0"> <span class="rater-text w-auto m-0 p-0"> &nbsp;{text}&nbsp; </span> </div> </span> </div> <div if="{(type===\'none\' || type===\'\')}" class="d-inline-block m-0 p-0"> <div if="{(text !==\'\' )}" class="d-inline-block m-0 p-0"> <span class="rater-text w-auto m-0 p-0"> &nbsp;{text}&nbsp; </span> </div> </div> </a> </li> </ul> </div> </div>', 'page-nav-bar,[data-is="page-nav-bar"]{ padding-top: 2px; padding-bottom: 0px; font-size: 1em; } page-nav-bar .logo,[data-is="page-nav-bar"] .logo{ height: 28px; } page-nav-bar .menu-img,[data-is="page-nav-bar"] .menu-img{ height: 1em; } page-nav-bar .rater-text,[data-is="page-nav-bar"] .rater-text{ font-family: "Lucida Sans Unicode", sans-serif; } page-nav-bar .v-divider,[data-is="page-nav-bar"] .v-divider{ display: inline; margin-left: 2px; margin-right: 2px; border-left: 1px solid whitesmoke; } page-nav-bar a:hover .v-divider,[data-is="page-nav-bar"] a:hover .v-divider{ border-color: white; } page-nav-bar a:hover .fas,[data-is="page-nav-bar"] a:hover .fas{ color: white; } page-nav-bar a:hover .rater-text,[data-is="page-nav-bar"] a:hover .rater-text{ color: white; }', 'class="container-fluid"', function(opts) {


        let self = this;
        this.uid = nlib.utils.newUId();

        this.banner = {
            "type": "font",
            "src": "home",
            "text": "My Choice Rater",
            "url": "JavaScript:void(0);"
        };

        this.nav = {
            "links": [
                { "text": "Register", "url": "#" },
                { "text": "Sign In", "url": "#" }
            ]
        };

        this.languages = [
            { "langId": "EN", "flagId": "US", "DescriptionNative": "English" },
            { "langId": "TH", "flagId": "TH", "DescriptionNative": "ไทย" }
        ];

        this.selectedLanguage = {
            "langId": "EN", "flagId": "US", "DescriptionNative": "English"
        };

        let onLanguagesLoaded = (sender, evtData) => {
            this.languages = lang.datasource;
            self.update();
        };

        let onLanguageChanged = (sender, evtData) => {
            this.selectedLanguage = lang.selectedObject;
            self.update();
        };

        let onModelLoaded = (sender, evtData) => {

            if (evtData.type === 'banner') {
                let model = app.content.model;

                self.banner = model.banner;
                self.update();
            }
            else if (evtData.type === 'nav') {
                let model = app.content.model;

                self.nav = model.nav;
                self.update();
            }
        };

        lang.datasourceChanged.add(onLanguagesLoaded);
        lang.selectedIndexChanged.add(onLanguageChanged);
        app.content.modelService.modelLoaded.add(onModelLoaded);

        this.selectLanguage = function(e) {
            e.preventDefault();

            var langIdAttr = e.target.attributes.getNamedItem('langId');
            if (langIdAttr !== 'undefined') {

                lang.changeLanguage(langIdAttr.value);
            }
            else {
                console.log('cannot find langId attribute.');

            }
        };

});

riot.tag2('admin-home-dashboard', '<yield></yield>', '', '', function(opts) {
});
riot.tag2('admin-page', '<div data-is="page-nav-bar"></div> <div data-is="page-content-absolute" data-simplebar> <yield></yield> </div> <div data-is="page-footer"></div>', '', '', function(opts) {
});
riot.tag2('device-page', '<div data-is="page-nav-bar"></div> <div data-is="page-content-absolute" data-simplebar> <yield></yield> </div> <div data-is="page-footer"></div>', '', '', function(opts) {
});
riot.tag2('exclusive-home-dashboard', '<yield></yield>', '', '', function(opts) {
});
riot.tag2('exclusive-page', '<div data-is="page-nav-bar"></div> <div data-is="page-content-absolute" data-simplebar> <yield></yield> </div> <div data-is="page-footer"></div>', '', '', function(opts) {
});
riot.tag2('staff-page', '<div data-is="page-nav-bar"></div> <div data-is="page-content-absolute" data-simplebar> <yield></yield> </div> <div data-is="page-footer"></div>', '', '', function(opts) {
});
riot.tag2('default-home-dashboard', '<h3>Home Dashboard</h3> <yield></yield>', '', '', function(opts) {
});
riot.tag2('register-entry', '<div class="container-fluid py-3 semi-trans"> <div class="row"> <div class="col-lg-6 col-md-8 col-sm-8 col-xs-8 mx-auto" style="margin-top: 5%;"> <div class="card card-body"> <h3 class="text-center mb-4">{label.title}</h3> <fieldset> <div class="form-group has-error"> <label for="customerName">&nbsp;{label.customerName}</label> <input class="form-control input-lg" placeholder="{hint.customerName}" id="customerName" name="customerName" type="text"> </div> <div class="form-group has-error"> <label for="userName">&nbsp;{label.userName}</label> <input class="form-control input-lg" placeholder="{hint.userName}" id="userName" name="userName" type="email"> </div> <div class="form-group has-success"> <label for="passWord">&nbsp;{label.passWord}</label> <input class="form-control input-lg" placeholder="{hint.passWord}" id="passWord" name="passWord" value="" type="password"> </div> <div class="form-group has-success"> <label for="confirnPassword">&nbsp;{label.confirmPassWord}</label> <input class="form-control input-lg" placeholder="{hint.confirmPassWord}" id="confirnPassword" name="confirnPassword" value="" type="password"> </div> <button class="btn btn-lg btn-primary btn-block" type="submit" onclick="{onsubmit}"> <i class="fas fa-user-plus"></i> {label.signUp} </button> </fieldset> </div> </div> </div> </div>', 'register-entry,[data-is="register-entry"]{ width: 100%; height: 100%; } register-entry .semi-trans,[data-is="register-entry"] .semi-trans{ opacity: 0.97; }', 'class="h-100"', function(opts) {


        let self = this;
        this.uid = nlib.utils.newUId();

        this.label = {
            title: "Register",
            customerName: "Customer Name:",
            userName: "User Name:",
            passWord: "Password:",
            confirmPassWord: "Confirm Password:",
            signUp: "Sign Up"
        };

        this.hint = {
            customerName: "Enter Customer Name",
            userName: "Enter E-Mail address as User Name",
            passWord: "Enter Password",
            confirmPassWord: "Enter Confirm Password"
        };

        this.onModelLoaded = (sender, evtData) => {

            if (evtData.type === 'register') {
                let model = app.content.model;

                console.log('Model Loaded:', model);
                self.label = model.register.label;
                self.hint = model.register.hint;
                self.update();
            }
        };

        app.content.modelService.modelLoaded.add(this.onModelLoaded);

        this.onsubmit = function(e) {
            e.preventDefault();
            let user = {
                customerName: $('#customerName').val(),
                userName: $('#userName').val(),
                passWord: $('#passWord').val(),
                confirnPassword: $('#confirnPassword').val()
            };
            console.log(user);
        }
});
riot.tag2('signin-entry', '<div class="container-fluid py-3 semi-trans"> <div class="row"> <div class="col-lg-6 col-md-8 col-sm-8 col-xs-8 mx-auto" style="margin-top: 5%;"> <div class="card card-body"> <h3 class="text-center mb-4">{label.title}</h3> <fieldset> <div class="form-group has-error"> <label for="userName">&nbsp;{label.userName}</label> <input class="form-control input-lg" placeholder="{hint.userName}" id="userName" name="userName" type="email"> </div> <div class="form-group has-success"> <label for="passWord">&nbsp;{label.passWord}</label> <input class="form-control input-lg" placeholder="{hint.passWord}" id="passWord" name="passWord" value="" type="password"> </div> <button class="btn btn-lg btn-primary btn-block" type="submit" onclick="{onsubmit}"> <i class="fas fa-key"></i> {label.signIn} </button> </fieldset> </div> </div> </div> </div>', 'signin-entry,[data-is="signin-entry"]{ width: 100%; height: 100%; } signin-entry .semi-trans,[data-is="signin-entry"] .semi-trans{ opacity: 0.97; }', 'class="h-100"', function(opts) {


        let self = this;

        this.label = {
            title: "Sign In",
            userName: "User Name:",
            passWord: "Password:",
            signIn: "Sign In"
        };

        this.hint = {
            userName: "Enter E-Mail address as User Name",
            passWord: "Enter Password"
        };

        let onModelLoaded = (sender, evtData) => {

            if (evtData.type === 'signin') {
                let model = app.content.model;

                self.label = model.signin.label;
                self.hint = model.signin.hint;
                self.update();
            }
        };

        app.content.modelService.modelLoaded.add(onModelLoaded);

        this.onsubmit = function (e) {
            e.preventDefault();
            let user = {
                userName: $('#userName').val(),
                passWord: $('#passWord').val()
            };
            console.log(user);
        }
});
riot.tag2('default-page', '<div data-is="page-nav-bar"></div> <div data-is="page-content-absolute" data-simplebar> <yield></yield> </div> <div data-is="page-footer"></div>', '', '', function(opts) {
});
riot.tag2('dev-home-dashboard', '', '', '', function(opts) {
});
riot.tag2('dev-large-text', '<h1>Welcome to DEV HOME!!</h1> <p> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: </p>', '', '', function(opts) {
});
riot.tag2('dev-page', '<div data-is="page-nav-bar"></div> <div data-is="page-content-absolute" data-simplebar> <yield></yield> </div> <div data-is="page-footer"></div>', '', '', function(opts) {
});
riot.tag2('edl-admin-home-dashboard', '<yield></yield>', '', '', function(opts) {
});
riot.tag2('edl-admin-page', '<div data-is="page-nav-bar"></div> <div data-is="page-content-absolute" data-simplebar> <yield></yield> </div> <div data-is="page-footer"></div>', '', '', function(opts) {
});
riot.tag2('edl-staff-page', '<div data-is="page-nav-bar"></div> <div data-is="page-content-absolute" data-simplebar> <yield></yield> </div> <div data-is="page-footer"></div>', '', '', function(opts) {
});
riot.tag2('edl-supervisor-home-dashboard', '<yield></yield>', '', '', function(opts) {
});
riot.tag2('edl-supervisor-page', '<div data-is="page-nav-bar"></div> <div data-is="page-content-absolute" data-simplebar> <yield></yield> </div> <div data-is="page-footer"></div>', '', '', function(opts) {
});