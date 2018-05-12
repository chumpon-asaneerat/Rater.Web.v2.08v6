<default-signin-entry>
    <div class="row">
        <div class="col col-md-1"></div>
        <div class="col col-md-auto">
            <h1>My Choice Rater.</h1>
            <div class="form-group">
                <label>User Name.</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label>Password.</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        <div class="col col-md-1"></div>
    </div>

    <script>
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            // render tag.
            self.update();
        };
    </script>
</default-signin-entry>