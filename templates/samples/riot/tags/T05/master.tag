<master>
    <div class="container-fluid py-3 semi-trans">
        <div class="row">
            <div class="col-lg-6 col-md-8 col-sm-8 col-xs-8 mx-auto" style="margin-top: 10%;">
                <div class="card card-body">
                    <div class="text-center mb-4 alert alert-primary" role="alert">
                        <h4>Sign In</h4>
                    </div>
                    <fieldset>
                        <div class="form-group">
                            <label for="userName">&nbsp;User Name.</label>
                            <input class="form-control input-lg" 
                                placeholder="Use E-mail Address as User Name." 
                                id="userName" 
                                name="userName" 
                                type="email">
                        </div>
                        <div class="form-group">
                            <label for="passWord">&nbsp;Password.</label>
                            <input class="form-control input-lg" 
                                placeholder="Password." 
                                id="passWord" 
                                name="passWord" 
                                value="" 
                                type="password">
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit" onclick="{onsubmit}">
                            <i class="fas fa-key"></i>
                            Sign In
                        </button>
                    </fieldset>
                    <div class="text-center m-0 p-0 mb-1">
                        <label class="m-0 p-1 d-inline-block">User :</label>
                        <label class="m-0 p-1 d-inline-block curr-user" id="currUser"></label>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br/>
    
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                    ...
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
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
    </style>
    <script>
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
        /*
        this.showErrMessage = (msg) => {
            let str = (msg) ? msg : '';
            //console.log(str);
            $('#errMsg').text(str);
        };
        */
        this.updateCurrentUser = (user) => {
            let str = (user) ? user.FullNameNative : '';
            //console.log(str);
            $('#currUser').text(str);
        };

        this.validateUser = (user) => {
            if (!user) {
                this.showErrMessage('User is null.');
                return false;
            }
            if (!user.userName || user.userName.trim() === '') {
                //this.showErrMessage('Please Enter User Name.');
                this.showToolTip($('#userName'), 'Please Enter User Name.');
                return false;
            }
            if (!user.passWord || user.passWord.trim() === '') {
                //this.showErrMessage('Please Enter Password.');
                this.showToolTip($('#passWord'), 'Please Enter Password.');
                return false;
            }
            return true;
        };

        this.doSignIn = (user) => {
            if (!user) {
                return;
            }
            // test@test.co.th
            // admin@super-power.co.th
            // chumpon@softbase.co.th
            let fn = app.userService.signin(user);
            $.when(fn).then((r) => {
                if (r && r.length > 0) {
                    if (r.length === 1) {
                        this.updateCurrentUser(r[0]);
                    }
                    else {
                        console.log('Has more than one users. Please select company.');
                        console.log(r);
                    }
                }
                else {
                    //this.showErrMessage('No user found.');
                    this.showAlert('No user found.');
                }
            });
        };

        this.onsubmit = function (e) {
            e.preventDefault();
            let user = {
                userName: $('#userName').val(),
                passWord: $('#passWord').val()
            };
            if (!this.validateUser(user)) {
                //console.log(user);
                return;
            }
            this.doSignIn(user);
        };
    </script>
</master>