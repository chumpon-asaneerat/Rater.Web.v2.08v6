<page-footer class="navbar fixed-bottom m-0 p-1 navbar-light bg-primary">
    <span class="float-left m-0 p-0" style="font-size: 0.7em;">
        &nbsp;&nbsp;{ label.status }&nbsp;
        <div class="v-divider">&nbsp;</div>
    </span>
    <span class="float-right m-0 p-0 ml-auto">
        <div class="v-divider">&nbsp;</div>
        &copy;&nbsp;{ label.copyright }&nbsp;&nbsp;&nbsp;&nbsp;
    </span>

    <style>
        :scope,
        nav,
        span,
        .navbar-text {
            color: whitesmoke;
            font-size: 0.8em;
            margin: 0 auto;
        }

        .v-divider {
            display: inline;
            margin-left: 5px;
            margin-right: 5px;
            border-left: 1px solid whitesmoke;
        }
    </style>
    <script>
        let self = this;
        //-- default before load content from server.
        this.label = { 
            status: "status",
            copyright: "EDL Co., Ltd."
        };

        app.content.ContentModel.modelloaded = (langId, modelType, loadedModel) => {
            if (modelType === 'footer') {
                let model = app.content.model; // same as loadedModel
                //let model = loadedModel;
                console.log('Model Loaded:', model);
                self.label = model.footer.label;
                self.update();
            }
        };
    </script>
</page-footer>