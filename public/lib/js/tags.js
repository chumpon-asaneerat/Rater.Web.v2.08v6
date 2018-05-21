riot.tag2('page-content-relative', '<h3>Content gone below.</h3> <yield></yield> <h3>Content end here.</h3>', 'page-content-relative,[data-is="page-content-relative"]{ margin: 1px auto; padding: 1px; }', '', function(opts) {
});
riot.tag2('page-content-absolute', '<div id="page-content-abs" class="container-fluid"> <yield></yield> </div>', 'page-content-absolute,[data-is="page-content-absolute"]{ margin: 1px auto; padding: 1px; position: absolute; top: 3em; bottom: 2em; left: 1px; right: 4px; overflow-x: hidden; overflow-y: auto; }', '', function(opts) {


        let self = this;
        this.uid = nlib.utils.newUId();

});

riot.tag2('page-footer', '<span class="float-left m-0 p-0"> <label class="m-0 p-1">&nbsp;{label.status}&nbsp;:</label> <div class="v-divider">&nbsp;</div> </span> <span class="float-right m-0 p-0 ml-auto"> <div class="v-divider"></div> <label class="m-0 p-1"> &nbsp; <span id="user-info" class="fas fa-user-circle"></span> &nbsp; {app.user.selectedUser.FullNameNative} &nbsp; </label> <div class="v-divider"></div> <label class="m-0 p-1">&copy;&nbsp;{label.copyright}&nbsp;&nbsp;&nbsp;</label> </span>', 'page-footer,[data-is="page-footer"],page-footer .navbar,[data-is="page-footer"] .navbar,page-footer .nav,[data-is="page-footer"] .nav,page-footer span,[data-is="page-footer"] span{ margin: 0 auto; padding: 0; } page-footer label,[data-is="page-footer"] label{ color: whitesmoke; font-size: 0.95em; font-weight: bold; } page-footer .v-divider,[data-is="page-footer"] .v-divider{ display: inline; margin-left: 2px; margin-right: 2px; border-left: 1px solid whitesmoke; }', 'class="navbar fixed-bottom m-0 p-0 navbar-light bg-primary"', function(opts) {


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

        let onCurrentUserChanged = (sender, evtData) => {
            self.update();
        };

        app.content.modelService.modelLoaded.add(onModelLoaded);
        app.user.currentUserChanged.add(onCurrentUserChanged);

});
riot.tag2('page-nav-bar', '<div class="navbar navbar-expand-sm fixed-top navbar-dark bg-primary m-0 p-1"> <virtual if="{(banner)}"> <a href="{banner.url}" class="navbar-band m-1 p-0 align-middle"> <div class="d-inline-block"> <virtual if="{(banner.type === \'image\')}"> <div class="d-inline-block m-0 p-0"> <img riot-src="{banner.src}" class="d-inline-block m-0 p-0 logo"> </div> </virtual> <virtual if="{(banner.type===\'font\')}"> <div class="d-inline-block m-0 p-0"> <span class="fas fa-{banner.src} navbar-text w-auto m-0 p-0"> <virtual if="{(banner.text !==\'\')}" class="d-inline-block m-0 p-0"> <span class="rater-text w-auto m-0 p-0"> &nbsp;&nbsp;{banner.text}&nbsp;&nbsp; </span> </virtual> </span> </div> </virtual> </div> </a> </virtual> <div class="d-flex flex-row order-2 order-sm-3 order-md-3 order-lg-3"> <ul class="navbar-nav flex-row ml-auto"> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle px-2 align-middle" data-toggle="dropdown" href="javascript:void(0);" id="nav-languages"> <span class="flag-icon flag-icon-{selectedLanguage.flagId.toLowerCase()}"></span> &nbsp;&nbsp;{selectedLanguage.DescriptionNative}&nbsp;&nbsp; <span class="caret"></span> </a> <div class="dropdown-menu dropdown-menu-right" aria-labelledby="nav-languages"> <virtual each="{languages}"> <a class="dropdown-item {(selectedLanguage.flagId === flagId) ? \'active\': \'\'}" href="javascript:void(0);" langid="{langId}" onclick="{selectLanguage}"> <span class="flag-icon flag-icon-{flagId.toLowerCase()}"></span> &nbsp;&nbsp;{DescriptionNative}&nbsp;&nbsp; </a> </virtual> </div> </li> </ul> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"> <span class="navbar-toggler-icon"></span> </button> </div> <div class="collapse navbar-collapse m-0 p-0 order-3 order-sm-2 order-md-2 order-lg-2" id="collapsibleNavbar"> <ul class="navbar-nav"> <virtual if="{(nav && nav.links && nav.links.length > 0)}"> <virtual each="{nav.links}"> <li class="nav-item {active}"> <a class="nav-link align-middle" href="{url}"> <span>&nbsp;</span> <div class="v-divider"></div> <span>&nbsp;</span> <virtual if="{(type===\'image\')}"> <div class="d-inline-block m-0 p-0"> <img riot-src="{src}" class="d-inline-block m-0 p-0 menu-img"> <virtual if="{(text !== \'\')}" class="d-inline-block m-0 p-0"> <span class="rater-text w-auto m-0 p-0"> &nbsp;{text}&nbsp; </span> </virtual> </div> </virtual> <virtual if="{(type===\'font\')}"> <div class="d-inline-block m-0 p-0"> <span class="fas fa-{src} navbar-text w-auto m-0 p-0"> <virtual if="{(text !== \'\')}" class="d-inline-block m-0 p-0"> <span class="rater-text w-auto m-0 p-0"> &nbsp;{text}&nbsp; </span> </virtual> </span> </div> </virtual> <virtual if="{(type===\'none\' || type===\'\')}"> <div class="d-inline-block m-0 p-0"> <virtual if="{(text !== \'\')}"> <div class="d-inline-block m-0 p-0"> <span class="rater-text w-auto m-0 p-0"> &nbsp;{text}&nbsp; </span> </div> </virtual> </div> </virtual> </a> </li> </virtual> </virtual> </ul> </div> </div>', 'page-nav-bar,[data-is="page-nav-bar"]{ padding-top: 2px; padding-bottom: 0px; font-size: 1em; } page-nav-bar .logo,[data-is="page-nav-bar"] .logo{ height: 28px; } page-nav-bar .menu-img,[data-is="page-nav-bar"] .menu-img{ height: 1em; } page-nav-bar .rater-text,[data-is="page-nav-bar"] .rater-text{ font-family: "Lucida Sans Unicode", sans-serif; } page-nav-bar .v-divider,[data-is="page-nav-bar"] .v-divider{ display: inline; margin-left: 2px; margin-right: 2px; border-left: 1px solid whitesmoke; } page-nav-bar a:hover .v-divider,[data-is="page-nav-bar"] a:hover .v-divider{ border-color: white; } page-nav-bar a:hover .fas,[data-is="page-nav-bar"] a:hover .fas{ color: white; } page-nav-bar a:hover .rater-text,[data-is="page-nav-bar"] a:hover .rater-text{ color: white; }', 'class="container-fluid"', function(opts) {


        let self = this;
        this.uid = nlib.utils.newUId();

        this.banner = {
            "type": "font",
            "src": "home",
            "text": "My Choice Rater",
            "url": "JavaScript:void(0);"
        };
        this.nav = { "links": [] };

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
riot.tag2('device-home-dashboard', '<yield></yield>', '', '', function(opts) {
});
riot.tag2('device-page', '<div data-is="page-nav-bar"></div> <div data-is="page-content-absolute" data-simplebar> <yield></yield> </div> <div data-is="page-footer"></div>', '', '', function(opts) {
});
riot.tag2('exclusive-home-dashboard', '<yield></yield>', '', '', function(opts) {
});
riot.tag2('exclusive-page', '<div data-is="page-nav-bar"></div> <div data-is="page-content-absolute" data-simplebar> <yield></yield> </div> <div data-is="page-footer"></div>', '', '', function(opts) {
});
riot.tag2('question-home-dashboard', '<yield></yield>', '', '', function(opts) {
});
riot.tag2('question-page', '<div data-is="page-nav-bar"></div> <div data-is="page-content-absolute" data-simplebar> <yield></yield> </div> <div data-is="page-footer"></div>', '', '', function(opts) {
});
riot.tag2('staff-home-dashboard', '<yield></yield>', '', '', function(opts) {
});
riot.tag2('staff-page', '<div data-is="page-nav-bar"></div> <div data-is="page-content-absolute" data-simplebar> <yield></yield> </div> <div data-is="page-footer"></div>', '', '', function(opts) {
});
riot.tag2('default-home-dashboard', '<h3>Home Dashboard</h3> <yield></yield>', '', '', function(opts) {
});
riot.tag2('register-entry', '<div class="container-fluid py-3 semi-trans"> <div class="row"> <div class="col-lg-6 col-md-8 col-sm-8 col-xs-8 mx-auto" style="margin-top: 5%;"> <div class="card card-body"> <h3 class="text-center mb-4 alert alert-success" role="alert"> {label.title} </h3> <fieldset> <div class="form-group has-error"> <label for="customerName">&nbsp;{label.customerName}</label> <input class="form-control input-lg" placeholder="{hint.customerName}" id="customerName" name="customerName" type="text"> </div> <div class="form-group has-error"> <label for="userName">&nbsp;{label.userName}</label> <input class="form-control input-lg" placeholder="{hint.userName}" id="userName" name="userName" type="email"> </div> <div class="form-group has-success"> <label for="passWord">&nbsp;{label.passWord}</label> <input class="form-control input-lg" placeholder="{hint.passWord}" id="passWord" name="passWord" value="" type="password"> </div> <div class="form-group has-success"> <label for="confirnPassword">&nbsp;{label.confirmPassWord}</label> <input class="form-control input-lg" placeholder="{hint.confirmPassWord}" id="confirnPassword" name="confirnPassword" value="" type="password"> </div> <button class="btn btn-lg btn-primary btn-block" type="submit" onclick="{onsubmit}"> <i class="fas fa-user-plus"></i> {label.signUp} </button> </fieldset> </div> </div> </div> </div>', 'register-entry,[data-is="register-entry"]{ width: 100%; height: 100%; } register-entry .semi-trans,[data-is="register-entry"] .semi-trans{ opacity: 0.97; }', 'class="h-100"', function(opts) {


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

        this.showToolTip = ($ctrl, msg, placement) => {
            if (!$ctrl) return;

            let options = {
                trigger: 'manual',
                placement: (placement) ? placement : 'top',
                title: msg
            };

            let attr = $ctrl.attr('rel');
            if (!attr) {
                $ctrl.attr('rel', 'tooltip');
            }

            $ctrl.tooltip(options).tooltip('show');
            setTimeout(() => {

                $ctrl.tooltip('dispose');
            }, 3000);
        };

        this.showAlert = (msg) => {
            let x = "alert-primary";
            let $ctrl = $('[role="alert"]');

            $ctrl.removeClass("alert-primary");
            $ctrl.addClass("alert-danger");

            this.showToolTip($ctrl, msg, 'bottom');

            setTimeout(() => {
                $ctrl.removeClass("alert-danger");
                $ctrl.addClass("alert-primary");
            }, 3000);
        };

        this.validateInput = (customer) => {
            if (!customer) {
                this.showErrMessage('User is null.');
                return false;
            }
            if (!customer.customerName || customer.customerName.trim() === '') {

                this.showToolTip($('#customerName'), 'Please Enter Customer Name.');
                return false;
            }
            if (!customer.userName || customer.userName.trim() === '') {

                this.showToolTip($('#userName'), 'Please Enter User Name.');
                return false;
            }
            if (!nlib.utils.isValidEmail(customer.userName)) {

                this.showToolTip($('#userName'), 'User Name is not valid email address.');
                return false;
            }
            if (!customer.passWord || customer.passWord.trim() === '') {

                this.showToolTip($('#passWord'), 'Please Enter Password.');
                return false;
            }
            if (!customer.confirnPassword || customer.confirnPassword.trim() === '') {

                this.showToolTip($('#confirnPassword'), 'Please Enter Confirm Password.');
                return false;
            }
            if (customer.confirnPassword !== customer.passWord) {
                this.showToolTip($('#confirnPassword'), 'The Confirm Password not match Password.');
                return false;
            }
            return true;
        };

        this.onModelLoaded = (sender, evtData) => {

            if (evtData.type === 'register') {
                let model = app.content.model;

                self.label = model.register.label;
                self.hint = model.register.hint;
                self.update();
            }
        };

        app.content.modelService.modelLoaded.add(this.onModelLoaded);

        this.onsubmit = function(e) {
            e.preventDefault();
            let customer = {
                customerName: $('#customerName').val(),
                userName: $('#userName').val(),
                passWord: $('#passWord').val(),
                confirnPassword: $('#confirnPassword').val()
            };

            if (!self.validateInput(customer)) {

                return;
            }

            app.user.register(customer, (r) => {
                console.log(r);
                if (r.errors.hasError) {
                    console.log(r.errors);
                    if (r.errors.errNum >= 900 && r.errors.errNum <= 999) {
                        self.showToolTip($('#customerName'), r.errors.errMsg);
                    }
                    else {
                        self.showAlert(r.errors.errNum, ' - ', r.errors.errMsg);
                    }

                }
            });
        }
});
riot.tag2('signin-entry', '<div class="container-fluid py-3 semi-trans"> <div class="row"> <div class="col-lg-6 col-md-8 col-sm-8 col-xs-8 mx-auto" style="margin-top: 5%;"> <div class="card card-body"> <h3 class="text-center mb-4 alert alert-success" role="alert"> {label.title} </h3> <fieldset> <div class="form-group"> <label for="userName">&nbsp;{label.userName}</label> <input class="form-control input-lg" placeholder="{hint.userName}" id="userName" name="userName" type="email"> </div> <div class="form-group"> <label for="passWord">&nbsp;{label.passWord}</label> <input class="form-control input-lg" placeholder="{hint.passWord}" id="passWord" name="passWord" value="" type="password"> </div> <button class="btn btn-lg btn-primary btn-block" type="submit" onclick="{onsubmituser}"> <i class="fas fa-key"></i> {label.signIn} </button> </fieldset> </div> </div> </div> </div> <div class="modal fade" id="selectCustomer" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="false"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header alert-success"> <h5 class="modal-title"> {label.chooseCompany} </h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> <div class="modal-body m-0 p-0"> <div class="container-fluid m-0 p-0" data-simplebar> <div class="list-group m-1 p-1 pl-1 pr-2"> <virtial each="{company in companies}"> <a href="javascript:void(0);" class="list-group-item list-group-item-action m-auto p-0" customerid="{company.customerId}" onclick="{onsubmitusercompany}"> <div class="d-flex m-0 p-1"> <div class="flex-column m-1 p-0"> <div class="profile-image align-middle"></div> </div> <div class="flex-column m-0 p-0"> <div class="m-0 p-0"> <p class="m-0 p-0"> &nbsp;{company.CustomerNameNative} </p> </div> <div class="m-0 p-0"> <p class="m-0 p-0"> &nbsp;{company.FullNameNative} </p> </div> </div> </div> </a> </virtial> </div> </div> </div> <div class="modal-footer"> <button type="button" class="btn btn-secondary" data-dismiss="modal"> Close </button> </div> </div> </div> </div>', 'signin-entry,[data-is="signin-entry"]{ width: 100%; height: 100%; } signin-entry .semi-trans,[data-is="signin-entry"] .semi-trans{ opacity: 0.97; } signin-entry .err-msg,[data-is="signin-entry"] .err-msg{ color: red; } signin-entry .curr-user,[data-is="signin-entry"] .curr-user{ color: navy; } signin-entry .profile-image,[data-is="signin-entry"] .profile-image{ margin: 5px auto; padding: 5px; width: 30px; height: 30px; background-color: rebeccapurple; border: 1px solid cornflowerblue; border-radius: 50%; } signin-entry .modal-dialog,[data-is="signin-entry"] .modal-dialog{ padding-top: 3em; } signin-entry .modal-body,[data-is="signin-entry"] .modal-body{ max-height: 300px; }', 'class="h-100"', function(opts) {


        let self = this;

        this.label = {
            title: "Sign In",
            userName: "User Name:",
            passWord: "Password:",
            signIn: "Sign In",
            chooseCompany: "Please Choose Company."
        };

        this.hint = {
            userName: "Enter E-Mail address as User Name",
            passWord: "Enter Password"
        };

        this.showToolTip = ($ctrl, msg, placement) => {
            if (!$ctrl) return;

            let options = {
                trigger: 'manual',
                placement: (placement) ? placement : 'top',
                title: msg
            };

            let attr = $ctrl.attr('rel');
            if (!attr) {
                $ctrl.attr('rel', 'tooltip');
            }

            $ctrl.tooltip(options).tooltip('show');
            setTimeout(() => {

                $ctrl.tooltip('dispose');
            }, 3000);
        };

        this.showAlert = (msg) => {
            let x = "alert-primary";
            let $ctrl = $('[role="alert"]');

            $ctrl.removeClass("alert-primary");
            $ctrl.addClass("alert-danger");

            this.showToolTip($ctrl, msg, 'bottom');

            setTimeout(() => {
                $ctrl.removeClass("alert-danger");
                $ctrl.addClass("alert-primary");
            }, 3000);
        };

        this.validateInput = (user) => {
            if (!user) {
                this.showErrMessage('User is null.');
                return false;
            }
            if (!user.userName || user.userName.trim() === '') {

                this.showToolTip($('#userName'), 'Please Enter User Name.');
                return false;
            }
            if (!nlib.utils.isValidEmail(user.userName)) {

                this.showToolTip($('#userName'), 'User Name is not valid email address.');
                return false;
            }
            if (!user.passWord || user.passWord.trim() === '') {

                this.showToolTip($('#passWord'), 'Please Enter Password.');
                return false;
            }
            return true;
        };

        let onModelLoaded = (sender, evtData) => {

            if (evtData.type === 'signin') {
                let model = app.content.model;

                self.label = model.signin.label;
                self.hint = model.signin.hint;
                self.update();
            }
        };

        let onUserNotFound = (sender, evtData) => {
            self.showAlert('No user found.');
        };

        let onUserChanged = (sender, evtData) => {
            let user = app.user.selectedUser;
            let str = (user) ? user.FullNameNative + ' (' + user.CustomerNameNative + ')' : '';
            console.log(str, ' required to redirect to home by user role.');
            let $ctrl = $('#currUser');
            if ($ctrl) {
                $ctrl.text(str);
            }
        };

        app.content.modelService.modelLoaded.add(onModelLoaded);

        app.user.userNotFound.add(onUserNotFound);
        app.user.currentUserChanged.add(onUserChanged);

        this.companies = [];

        this.onsubmituser = function (e) {
            e.preventDefault();

            let user = {
                langId: lang.currentLangId,
                userName: $('#userName').val(),
                passWord: $('#passWord').val()
            };
            if (!self.validateInput(user)) {

                return;
            }

            app.user.signIn(user, (users) => {
                self.companies = users;
                self.update();
                let options = {};
                let $modal = $('#selectCustomer');
                $modal.modal(options).modal('show');
            });
        }

        this.onsubmitusercompany = (e) => {
            e.preventDefault();

            let selectedItem = e.item;
            let selectedUser = (selectedItem) ? selectedItem.company : null;

            let $modal = $('#selectCustomer');
            let options = {};
            $modal.modal(options).modal('hide');
            self.companies = [];

            if (selectedUser) {
                app.user.selectedUser = selectedUser;
            }
            else {
                self.showAlert('No user choose.');
            }
        };
});
riot.tag2('default-page', '<div data-is="page-nav-bar"></div> <div data-is="page-content-absolute" data-simplebar> <yield></yield> </div> <div data-is="page-footer"></div>', '', '', function(opts) {
});
riot.tag2('dev-home-dashboard', '<h1>DEV HOME!!!</h1>', '', '', function(opts) {
});
riot.tag2('dev-large-text', '<h1>Welcome to DEV HOME!!</h1> <p> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: </p>', '', '', function(opts) {
});
riot.tag2('dev-page', '<div data-is="page-nav-bar"></div> <div data-is="page-content-absolute" data-simplebar> <yield></yield> </div> <div data-is="page-footer"></div>', '', '', function(opts) {
});
riot.tag2('edl-admin-home-dashboard', '<yield></yield>', '', '', function(opts) {
});
riot.tag2('edl-admin-page', '<div data-is="page-nav-bar"></div> <div data-is="page-content-absolute" data-simplebar> <yield></yield> </div> <div data-is="page-footer"></div>', '', '', function(opts) {
});
riot.tag2('edl-staff-home-dashboard', '<yield></yield>', '', '', function(opts) {
});
riot.tag2('edl-staff-page', '<div data-is="page-nav-bar"></div> <div data-is="page-content-absolute" data-simplebar> <yield></yield> </div> <div data-is="page-footer"></div>', '', '', function(opts) {
});
riot.tag2('edl-supervisor-home-dashboard', '<yield></yield>', '', '', function(opts) {
});
riot.tag2('edl-supervisor-page', '<div data-is="page-nav-bar"></div> <div data-is="page-content-absolute" data-simplebar> <yield></yield> </div> <div data-is="page-footer"></div>', '', '', function(opts) {
});