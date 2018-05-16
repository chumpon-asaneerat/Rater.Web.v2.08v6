<page-footer class="navbar fixed-bottom m-0 p-0 navbar-light bg-primary">
    <span class="float-left m-0 p-0">
        <label class="m-0 p-1">&nbsp;{label.status}&nbsp;:</label>
        <div class="v-divider">&nbsp;</div>
    </span>
    <span class="float-right m-0 p-0 ml-auto">
        <div class="v-divider"></div>
        <label class="m-0 p-1">&copy;&nbsp;{label.copyright}&nbsp;&nbsp;&nbsp;</label>
    </span>

    <style>
        :scope, .navbar, .nav, span {
            margin: 0 auto;
            padding: 0;
        }
        label {
            color: whitesmoke;
            font-size: 0.95em;
            font-weight: bold;
        }
        .v-divider {
            display: inline;
            margin-left: 2px;
            margin-right: 2px;
            border-left: 1px solid whitesmoke;
        }
    </style>
    <script>
        //#region LOCAL VARIABLES

        //-- LOCAL VARIABLES

        let self = this;
        let __model = app.content.model;
        let __footer = (__model) ? __model.footer : null;
        let __label = (__footer) ? __footer.label : null;
        
        //-- default before load content from server.
        this.label = (__label) ? __label : { 
            status: "status",
            copyright: "EDL Co., Ltd."
        };

        //-- END LOCAL VARIABLES

        //#endregion

        //#region SERVICE EVENT HANDLERS
        
        //-- SERVICE EVENT HANDLERS

        let onModelLoaded = (sender, evtData) => {
            //console.log('page-footer');
            //console.log(evtData.langId);
            //console.log(evtData.type);
            //console.log(evtData.model);            
            if (evtData.type === 'footer') {
                let model = app.content.model; // same as loadedModel
                //let model = loadedModel;
                //console.log('Model Loaded:', model);
                self.label = model.footer.label;
                self.update();
            }
        };

        app.content.ModelService.modelLoaded.add(onModelLoaded);

        //-- END SERVICE EVENT HANDLERS

        //#endregion 
    </script>
</page-footer>