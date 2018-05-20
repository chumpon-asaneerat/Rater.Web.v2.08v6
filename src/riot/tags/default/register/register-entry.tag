<register-entry class="h-100">
    <div class="container-fluid py-3 semi-trans">
        <div class="row">
            <div class="col-lg-6 col-md-8 col-sm-8 col-xs-8 mx-auto" style="margin-top: 5%;">
                <div class="card card-body">
                    <h3 class="text-center mb-4 alert alert-success" role="alert">
                        {label.title}
                    </h3>
                    <fieldset>
                        <div class="form-group has-error">
                            <label for="customerName">&nbsp;{label.customerName}</label>
                            <input class="form-control input-lg" placeholder="{hint.customerName}" id="customerName" name="customerName" type="text">
                        </div>
                        <div class="form-group has-error">
                            <label for="userName">&nbsp;{label.userName}</label>
                            <input class="form-control input-lg" placeholder="{hint.userName}" id="userName" name="userName" type="email">
                        </div>
                        <div class="form-group has-success">
                            <label for="passWord">&nbsp;{label.passWord}</label>
                            <input class="form-control input-lg" placeholder="{hint.passWord}" id="passWord" name="passWord" value="" type="password">
                        </div>
                        <div class="form-group has-success">
                            <label for="confirnPassword">&nbsp;{label.confirmPassWord}</label>
                            <input class="form-control input-lg" placeholder="{hint.confirmPassWord}" id="confirnPassword" name="confirnPassword" value="" type="password">
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit" onclick="{onsubmit}">
                            <i class="fas fa-user-plus"></i>
                            {label.signUp}
                        </button>
                    </fieldset>
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
    </style>

    <script>
        //#region LOCAL VARIABLES

        //-- LOCAL VARIABLES

        let self = this;
        this.uid = nlib.utils.newUId(); // for debug instance id.
        //-- default before load content from server.
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

        this.validateInput = (customer) => {
            if (!customer) {
                this.showErrMessage('User is null.');
                return false;
            }
            if (!customer.customerName || customer.customerName.trim() === '') {
                //this.showErrMessage('Please Enter User Name.');
                this.showToolTip($('#customerName'), 'Please Enter Customer Name.');
                return false;
            }
            if (!customer.userName || customer.userName.trim() === '') {
                //this.showErrMessage('Please Enter User Name.');
                this.showToolTip($('#userName'), 'Please Enter User Name.');
                return false;
            }
            if (!nlib.utils.isValidEmail(customer.userName)) {
                //this.showErrMessage('Please Enter User Name.');
                this.showToolTip($('#userName'), 'User Name is not valid email address.');
                return false;
            }
            if (!customer.passWord || customer.passWord.trim() === '') {
                //this.showErrMessage('Please Enter Password.');
                this.showToolTip($('#passWord'), 'Please Enter Password.');
                return false;
            }
            if (!customer.confirnPassword || customer.confirnPassword.trim() === '') {
                //this.showErrMessage('Please Enter Password.');
                this.showToolTip($('#confirnPassword'), 'Please Enter Confirm Password.');
                return false;
            }
            if (customer.confirnPassword !== customer.passWord) {
                this.showToolTip($('#confirnPassword'), 'The Confirm Password not match Password.');
                return false;
            }
            return true;
        };
        
        //-- END PRIVATE METHODS

        //#endregion

        //#region SERVICE EVENT HANDLERS
        
        //-- SERVICE EVENT HANDLERS

        this.onModelLoaded = (sender, evtData) => {
            //console.log(evtData.langId);
            //console.log(evtData.type);
            //console.log(evtData.model);
            if (evtData.type === 'register') {
                let model = app.content.model; // same as loadedModel
                //let model = loadedModel;
                //console.log('Model Loaded:', model);
                self.label = model.register.label;
                self.hint = model.register.hint;
                self.update();
            }
        };

        app.content.modelService.modelLoaded.add(this.onModelLoaded);

        //-- END SERVICE EVENT HANDLERS

        //#endregion 

        this.onsubmit = function(e) {
            e.preventDefault();
            let customer = {
                customerName: $('#customerName').val(),
                userName: $('#userName').val(),
                passWord: $('#passWord').val(),
                confirnPassword: $('#confirnPassword').val()
            };
            //console.log(user);
            if (!self.validateInput(customer)) {
                //console.log(user);
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
                    //self.showToolTip($('#userName'), '');
                    //self.showToolTip($('#passWord'), '');
                    //self.showAlert('');
                }
            });
        }
    </script>
</register-entry>