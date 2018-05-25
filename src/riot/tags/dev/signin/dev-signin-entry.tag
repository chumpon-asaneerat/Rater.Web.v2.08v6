<dev-signin-entry>
    <div class="container-fluid py-3 semi-trans">
        <div class="row">
            <div class="col-lg-6 col-md-8 col-sm-8 col-xs-8 mx-auto" style="margin-top: 5%;">
                <div class="card card-body">
                    <h3 class="text-center mb-4 alert alert-success" role="alert">
                        Sign In
                    </h3>
                    <fieldset>
                        <div class="form-group">
                            <label for="userName">&nbsp;User Name:</label>
                            <input class="form-control input-lg" placeholder="User Name" id="userName" name="userName" type="email">
                        </div>
                        <div class="form-group">
                            <label for="passWord">&nbsp;Password:</label>
                            <input class="form-control input-lg" placeholder="Password" id="passWord" name="passWord" value="" type="password">
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit" onclick="{onSignInUser}">
                            <i class="fas fa-key"></i>
                            Sign In
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
                        Choose Company
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body m-0 p-0">
                    <div class="container-fluid m-0 p-0" data-simplebar>
                        <div class="list-group m-1 p-1 pl-1 pr-2">
                            <!-- LOOP  -->
                            <virtial each={user in users}>
                                <a href="javascript:void(0);" class="list-group-item list-group-item-action m-auto p-0" customerId="{user.customerId}"
                                    onclick={onSelectedCustomer}>
                                    <div class="d-flex m-0 p-1">
                                        <div class="flex-column m-1 p-0">
                                            <div class="profile-image align-middle"></div>
                                        </div>
                                        <div class="flex-column m-0 p-0">
                                            <div class="m-0 p-0">
                                                <p class="m-0 p-0">
                                                    &nbsp;{user.CustomerNameNative}
                                                </p>
                                            </div>
                                            <div class="m-0 p-0">
                                                <p class="m-0 p-0">
                                                    &nbsp;{user.FullNameNative}
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
        //-- local variables.
        let self = this;
        this.users = [];
        this.modal = new BS4Modal('#selectCustomer');

        //-- setup service handlers.
        let onUserListChanged = (sender, evt) => { self.updateUsers(); };
        secure.userListChanged.add(onUserListChanged);

        //-- private methods.
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
                self.users = secure.users; // init users list on self.
                secure.clear(); // clear users list.
                self.update(); // invalidate UI.                
                self.modal.show(); // hide modal
            }
        };
        
        //-- click events
        this.onSignInUser = (e) => {
            e.preventDefault();
            secure.getUsers(self.getUser()); // request user list.
        };

        this.onSelectedCustomer = (e) => {
            e.preventDefault();
            secure.signIn(self.getUser(e.item.user.customerId));
            self.modal.hide(); // hide modal
        };
    </script>
</dev-signin-entry>