<register-entry class="h-100">
    <div class="container-fluid py-3 semi-trans">
        <div class="row">
            <div class="col-lg-6 col-md-8 col-sm-8 col-xs-8 mx-auto" style="margin-top: 5%;">
                <div class="card card-body">
                    <h3 class="text-center mb-4">{label.title}</h3>
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

        .semi-trans {
            opacity: 0.97;
        }
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

        //#region SERVICE EVENT HANDLERS
        
        //-- SERVICE EVENT HANDLERS

        this.onModelLoaded = (sender, evtData) => {
            //console.log(evtData.langId);
            //console.log(evtData.type);
            //console.log(evtData.model);
            if (evtData.type === 'register') {
                let model = app.content.model; // same as loadedModel
                //let model = loadedModel;
                console.log('Model Loaded:', model);
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
            let user = {
                customerName: $('#customerName').val(),
                userName: $('#userName').val(),
                passWord: $('#passWord').val(),
                confirnPassword: $('#confirnPassword').val()
            };
            console.log(user);
        }
    </script>
</register-entry>