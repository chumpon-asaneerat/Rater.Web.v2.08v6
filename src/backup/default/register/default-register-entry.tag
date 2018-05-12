<default-register-entry>
    <h1>Register Page.</h1>

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
</default-register-entry>