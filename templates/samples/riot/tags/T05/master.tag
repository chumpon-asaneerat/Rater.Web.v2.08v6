<master>
    <div class="container-fluid py-3 semi-trans">
        <div class="row">
            <div class="col-lg-6 col-md-8 col-sm-8 col-xs-8 mx-auto" style="margin-top: 10%;">
                <div class="card card-body">
                    <h3 class="text-center mb-4">Sign In</h3>
                    <fieldset>
                        <div class="form-group has-error">
                            <label for="userName">&nbsp;User Name.</label>
                            <input class="form-control input-lg" placeholder="Use E-mail Address as User Name." id="userName" name="userName" type="email">
                        </div>
                        <div class="form-group has-success">
                            <label for="passWord">&nbsp;Password.</label>
                            <input class="form-control input-lg" placeholder="Password." id="passWord" name="passWord" value="" type="password">
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit" onclick="{onsubmit}">
                            <i class="fas fa-key"></i>
                            Sign In
                        </button>
                    </fieldset>
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
            background-image: url('images/register-bg2.png');
            background-repeat: no-repeat;
            background-size: 100%;
        }

        .semi-trans {
            opacity: 0.97;
        }
    </style>
    <script>
        this.onsubmit = function (e) {
            e.preventDefault();
            let user = {
                userName: $('#userName').val(),
                passWord: $('#passWord').val()
            };
            console.log(user);
        }
    </script>
</master>