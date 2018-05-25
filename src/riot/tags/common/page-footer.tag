<page-footer class="navbar fixed-bottom m-0 p-0 navbar-light bg-primary">
    <span class="float-left m-0 p-0">
        <label class="m-0 p-1">&nbsp;{page.model.footer.label.status}&nbsp;:</label>
        <div class="v-divider">&nbsp;</div>
    </span>
    <span class="float-right m-0 p-0 ml-auto">
        <div class="v-divider"></div>
        <label class="m-0 p-1">
            &nbsp;
            <span id="user-info" class="fas fa-user-circle"></span>
            &nbsp;
            {secure.currentUserName}
            &nbsp;
        </label>
        <div class="v-divider"></div>
        <label class="m-0 p-1">&copy;&nbsp;{page.model.footer.label.copyright}&nbsp;&nbsp;&nbsp;</label>
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
        let self = this;
        
        let onModelLoaded = (sender, evtData) => {
            self.update();
        };
        page.modelLoaded.add(onModelLoaded);

        let onCurrentUserChanged = (sender, evtData) => {
            self.update();
        };
        secure.currentUserChanged.add(onCurrentUserChanged);
    </script>
</page-footer>