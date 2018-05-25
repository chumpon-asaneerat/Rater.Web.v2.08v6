riot.tag2('page-content-relative', '<h3>Content gone below.</h3> <yield></yield> <h3>Content end here.</h3>', 'page-content-relative,[data-is="page-content-relative"]{ margin: 1px auto; padding: 1px; }', '', function(opts) {
});
riot.tag2('page-content-absolute', '<div id="page-content-abs" class="container-fluid"> <yield></yield> </div>', 'page-content-absolute,[data-is="page-content-absolute"]{ margin: 1px auto; padding: 1px; position: absolute; top: 3em; bottom: 2em; left: 1px; right: 4px; overflow-x: hidden; overflow-y: auto; }', '', function(opts) {


        let self = this;
        this.uid = nlib.utils.newUId();

});
riot.tag2('page-footer', '', '', 'class="navbar fixed-bottom m-0 p-0 navbar-light bg-primary"', function(opts) {
});
riot.tag2('page-nav-bar', '', '', 'class="container-fluid"', function(opts) {


        let self = this;

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
riot.tag2('register-entry', '', '', 'class="h-100"', function(opts) {
});
riot.tag2('signin-entry', '', '', 'class="h-100"', function(opts) {
});
riot.tag2('default-page', '<div data-is="page-nav-bar"></div> <div data-is="page-content-absolute" data-simplebar> <yield></yield> </div> <div data-is="page-footer"></div>', '', '', function(opts) {
});
riot.tag2('dev-home-dashboard', '<h1>DEV HOME!!!</h1>', '', '', function(opts) {
});
riot.tag2('dev-register-entry', '', '', '', function(opts) {
});
riot.tag2('dev-report-dashboard', '<h1>DEV REPORT HOME!!!</h1>', '', '', function(opts) {
});
riot.tag2('dev-signin-entry', '<div class="container-fluid py-3 semi-trans"> <div class="row"> <div class="col-lg-6 col-md-8 col-sm-8 col-xs-8 mx-auto" style="margin-top: 5%;"> <div class="card card-body"> <h3 class="text-center mb-4 alert alert-success" role="alert"> Sign In </h3> <fieldset> <div class="form-group"> <label for="userName">&nbsp;User Name:</label> <input class="form-control input-lg" placeholder="User Name" id="userName" name="userName" type="email"> </div> <div class="form-group"> <label for="passWord">&nbsp;Password:</label> <input class="form-control input-lg" placeholder="Password" id="passWord" name="passWord" value="" type="password"> </div> <button class="btn btn-lg btn-primary btn-block" type="submit" onclick="{onSignInUser}"> <i class="fas fa-key"></i> Sign In </button> </fieldset> </div> </div> </div> </div> <div class="modal fade" id="selectCustomer" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="false"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header alert-success"> <h5 class="modal-title"> Choose Company </h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> <div class="modal-body m-0 p-0"> <div class="container-fluid m-0 p-0" data-simplebar> <div class="list-group m-1 p-1 pl-1 pr-2"> <virtial each="{user in users}"> <a href="javascript:void(0);" class="list-group-item list-group-item-action m-auto p-0" customerid="{user.customerId}" onclick="{onSelectedCustomer}"> <div class="d-flex m-0 p-1"> <div class="flex-column m-1 p-0"> <div class="profile-image align-middle"></div> </div> <div class="flex-column m-0 p-0"> <div class="m-0 p-0"> <p class="m-0 p-0"> &nbsp;{user.CustomerNameNative} </p> </div> <div class="m-0 p-0"> <p class="m-0 p-0"> &nbsp;{user.FullNameNative} </p> </div> </div> </div> </a> </virtial> </div> </div> </div> <div class="modal-footer"> <button type="button" class="btn btn-secondary" data-dismiss="modal"> Close </button> </div> </div> </div> </div>', 'dev-signin-entry .profile-image,[data-is="dev-signin-entry"] .profile-image{ margin: 5px auto; padding: 5px; width: 30px; height: 30px; background-color: rebeccapurple; border: 1px solid cornflowerblue; border-radius: 50%; } dev-signin-entry .modal-dialog,[data-is="dev-signin-entry"] .modal-dialog{ padding-top: 3em; } dev-signin-entry .modal-body,[data-is="dev-signin-entry"] .modal-body{ max-height: 300px; }', '', function(opts) {

        let self = this;
        this.users = [];
        this.modal = new BS4Modal('#selectCustomer');

        let onUserListChanged = (sender, evt) => { self.updateUsers(); };
        secure.userListChanged.add(onUserListChanged);

        this.getUser = (customerId) => {
            let user = {
                "langId": 'TH',
                "userName": $('#userName').val(),
                "passWord": $('#passWord').val()
            };
            if (customerId) { user.customerId = customerId; }
            return user;
        };

        this.updateUsers = () => {
            if (secure.users.length <= 0) { return; }
            if (secure.users.length === 1) {
                secure.signIn(self.getUser(secure.users[0].customerId));
            }
            else {
                self.users = secure.users;
                secure.clear();
                self.update();
                self.modal.show();
            }
        };

        this.onSignInUser = (e) => {
            e.preventDefault();
            secure.getUsers(self.getUser());
        };

        this.onSelectedCustomer = (e) => {
            e.preventDefault();
            secure.signIn(self.getUser(e.item.user.customerId));
            self.modal.hide();
        };
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