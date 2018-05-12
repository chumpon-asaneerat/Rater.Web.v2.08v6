<customer-admin-question-edit-content>
    <h2>Edit Question Information.</h2>

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
</customer-admin-question-edit-content>