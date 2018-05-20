<signin-entry class="h-100">
    <div class="container-fluid py-3 semi-trans">
        <div class="row">
            <div class="col-lg-6 col-md-8 col-sm-8 col-xs-8 mx-auto" style="margin-top: 5%;">
                <div class="card card-body">
                    <h3 class="text-center mb-4 alert alert-success" role="alert">
                        {label.title}
                    </h3>
                    <fieldset>
                        <div class="form-group">
                            <label for="userName">&nbsp;{label.userName}</label>
                            <input class="form-control input-lg" placeholder="{hint.userName}" id="userName" name="userName" type="email">
                        </div>
                        <div class="form-group">
                            <label for="passWord">&nbsp;{label.passWord}</label>
                            <input class="form-control input-lg" placeholder="{hint.passWord}" id="passWord" name="passWord" value="" type="password">
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit" onclick="{onsubmituser}">
                            <i class="fas fa-key"></i>
                            {label.signIn}
                        </button>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Modal -->
    <div class="modal fade" id="selectCustomer" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="false">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header alert-success">
                    <h5 class="modal-title">
                        {label.chooseCompany}
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body m-0 p-0">
                    <div class="container-fluid m-0 p-0" data-simplebar>
                        <div class="list-group m-1 p-1 pl-1 pr-2">
                            <virtial each={company in companies}>
                                <a href="javascript:void(0);" 
                                    class="list-group-item list-group-item-action m-auto p-0" 
                                    customerId="{company.customerId}"
                                    onclick={onsubmitusercompany}>
                                    <div class="d-flex m-0 p-1">
                                        <div class="flex-column m-1 p-0">
                                            <div class="profile-image align-middle"></div>
                                        </div>
                                        <div class="flex-column m-0 p-0">
                                            <div class="m-0 p-0">
                                                <p class="m-0 p-0">
                                                    &nbsp;{company.CustomerNameNative}
                                                </p>
                                            </div>
                                            <div class="m-0 p-0">
                                                <p class="m-0 p-0">
                                                    &nbsp;{company.FullNameNative}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </virtial>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <style>        
        :scope {
            width: 100%;
            height: 100%;
        }
        .semi-trans { opacity: 0.97; }
        .err-msg { color: red; }
        .curr-user { color: navy; }
        .profile-image { 
            margin: 5px auto;
            padding: 5px;
            width: 30px;
            height: 30px;
            background-color: rebeccapurple;
            border: 1px solid cornflowerblue;
            border-radius: 50%;
        }
        .modal-dialog { padding-top: 3em; }
        .modal-body { max-height: 300px; }        
    </style>
    
    <script>
        //#region LOCAL VARIABLES

        //-- LOCAL VARIABLES

        let self = this;
        //-- default before load content from server.
        //-- default before load content from server.
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

        //-- END LOCAL VARIABLES

        //#endregion

        //#region PRIVATE METHODS

        //-- PRIVATE METHODS
        
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
                //$ctrl.tooltip('hide');
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
                //this.showErrMessage('Please Enter User Name.');
                this.showToolTip($('#userName'), 'Please Enter User Name.');
                return false;
            }
            if (!nlib.utils.isValidEmail(user.userName)) {
                //this.showErrMessage('Please Enter User Name.');
                this.showToolTip($('#userName'), 'User Name is not valid email address.');
                return false;
            }
            if (!user.passWord || user.passWord.trim() === '') {
                //this.showErrMessage('Please Enter Password.');
                this.showToolTip($('#passWord'), 'Please Enter Password.');
                return false;
            }
            return true;
        };
        
        //-- END PRIVATE METHODS

        //#endregion
        
        //-- SERVICE EVENT HANDLERS

        let onModelLoaded = (sender, evtData) => {
            //console.log('page-footer');
            //console.log(evtData.langId);
            //console.log(evtData.type);
            //console.log(evtData.model);            
            if (evtData.type === 'signin') {
                let model = app.content.model; // same as loadedModel
                //let model = loadedModel;
                //console.log('Model Loaded:', model);
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
        // content event handler.
        app.content.modelService.modelLoaded.add(onModelLoaded);
        // user event handlers.
        app.user.userNotFound.add(onUserNotFound);
        app.user.currentUserChanged.add(onUserChanged);

        //-- END SERVICE EVENT HANDLERS

        //#endregion 
        
        // Temporary variables.
        this.companies = [];
        
        this.onsubmituser = function (e) {
            e.preventDefault();
            
            let user = {
                langId: lang.currentLangId,
                userName: $('#userName').val(),
                passWord: $('#passWord').val()
            };
            if (!self.validateInput(user)) {
                //console.log(user);
                return;
            }

            app.user.signIn(user, (users) => {
                self.companies = users; // setup companies array.
                self.update();
                let options = {};
                let $modal = $('#selectCustomer');
                $modal.modal(options).modal('show');
            });
        }

        this.onsubmitusercompany = (e) => {
            e.preventDefault();
            //console.log(e);
            //console.log(e.item);
            let selectedItem = e.item;            
            let selectedUser = (selectedItem) ? selectedItem.company : null;
            //console.log(selectedUser);

            let $modal = $('#selectCustomer');
            let options = {};
            $modal.modal(options).modal('hide');
            self.companies = []; // clear list.

            // Update current user.
            if (selectedUser) {
                app.user.selectedUser = selectedUser;
            }
            else {
                self.showAlert('No user choose.');
            }
        };
    </script>
</signin-entry>