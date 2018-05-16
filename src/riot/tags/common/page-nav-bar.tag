<page-nav-bar class="container-fluid">
    <div class="navbar navbar-expand-sm fixed-top navbar-dark bg-primary m-0 p-1">
        <!-- Banner -->
        <a href="{banner.url}" class="navbar-band m-1 p-0 align-middle">
            <div class="d-inline-block">
                <!-- IMAGE AND TEXT -->
                <div if={(banner.type === 'image')}
                     class="d-inline-block m-0 p-0">
                    <img src="{banner.src}" class="d-inline-block m-0 p-0 logo">
                </div>
                <!-- FONT-ICON AND TEXT -->
                <div if={(banner.type==='font')}
                     class="d-inline-block m-0 p-0">
                    <span class="fas fa-{banner.src} navbar-text w-auto m-0 p-0">
                        <div if={(banner.text !=='')} class="d-inline-block m-0 p-0">
                            <span class="rater-text w-auto m-0 p-0">
                                &nbsp;&nbsp;{banner.text}&nbsp;&nbsp;
                            </span>
                        </div>
                    </span>
                </div>
            </div>
        </a>
        <!-- Right Nav Item for languages -->
        <div class="d-flex flex-row order-2 order-sm-3 order-md-3 order-lg-3">
            <ul class="navbar-nav flex-row ml-auto">
                <!-- CURRENT LANGUAGE WITH DROPDOWN ARROW -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle px-2 align-middle" data-toggle="dropdown" href="javascript:void(0);" id="nav-languages">
                        <span class="flag-icon flag-icon-{selectedLanguage.flagId.toLowerCase()}"></span>
                        &nbsp;&nbsp;{selectedLanguage.DescriptionNative}&nbsp;&nbsp;
                        <span class="caret"></span>
                    </a>
                    <!-- ALL LANGUAGES DROP MENU LIST -->
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="nav-languages">
                        <a each={languages} class="dropdown-item {(selectedLanguage.flagId === flagId) ? 'active': ''}" 
                            href="javascript:void(0);" 
                            langId="{langId}" 
                            onclick="{selectLanguage}">
                            <span class="flag-icon flag-icon-{flagId.toLowerCase()}"></span>
                            &nbsp;&nbsp;{DescriptionNative}&nbsp;&nbsp;
                        </a>
                    </div>
                </li>
            </ul>
            <!-- Toggle Collapse Button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <!-- Collapse Items -->
        <div class="collapse navbar-collapse m-0 p-0 order-3 order-sm-2 order-md-2 order-lg-2" id="collapsibleNavbar">
            <ul class="navbar-nav m-0 p-0">
                <ul class="navbar-nav">
                    <!-- EACH MAIN MENU ITEM LINKS -->
                    <li each={nav.links} class="nav-item {active}">
                        <a class="nav-link align-middle" href="{url}">
                            <span>&nbsp;</span>
                            <div class="v-divider"></div>
                            <span>&nbsp;</span>
                            <!-- IMAGE AND TEXT -->
                            <div if={(type==='image')} class="d-inline-block m-0 p-0">
                                <img src="{src}" class="d-inline-block m-0 p-0 menu-img">
                                <div if={(text !=='' )} class="d-inline-block m-0 p-0">
                                    <span class="rater-text w-auto m-0 p-0">
                                        &nbsp;{text}&nbsp;
                                    </span>
                                </div>
                            </div>
                            <!-- FONT-ICON AND TEXT -->
                            <div if={(type==='font')} class="d-inline-block m-0 p-0">
                                <span class="fas fa-{src} navbar-text w-auto m-0 p-0">
                                    <div if={(text !=='' )} class="d-inline-block m-0 p-0">
                                        <span class="rater-text w-auto m-0 p-0">
                                            &nbsp;{text}&nbsp;
                                        </span>
                                    </div>
                                </span>
                            </div>
                            <!-- TEXT ONLY -->
                            <div if={(type==='none' || type==='')} class="d-inline-block m-0 p-0">
                                <div if={(text !=='' )} class="d-inline-block m-0 p-0">
                                    <span class="rater-text w-auto m-0 p-0">
                                        &nbsp;{text}&nbsp;
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </ul>
        </div>
    </div>
    <style>
        :scope {
            padding-top: 2px;
            padding-bottom: 0px;
            font-size: 1em;
        }
        .logo { height: 28px; }
        .menu-img { height: 1em; }
        .rater-text { font-family: "Lucida Sans Unicode", sans-serif; }
        .v-divider {
            display: inline;
            margin-left: 2px;
            margin-right: 2px;
            border-left: 1px solid whitesmoke;
        }
        a:hover .v-divider { border-color: white; }
        a:hover .fas { color: white; }
        a:hover .rater-text { color: white; }
    </style>
    <script>
        //#region LOCAL VARIABLES

        //-- LOCAL VARIABLES
        let self = this;

        let __model = app.content.model;
        let __banner = (__model) ? __model.banner : null;
        let __nav = (__model) ? __model.nav : null;
        let __langs = (app.lang && app.lang.datasource) ? app.lang.datasource : null;
        let __selectedLang = (app.lang && app.lang.selectedObject) ? app.lang.selectedObject : null;

        this.banner = (__banner) ? __banner : {
            "type": "font",
            "src": "home",
            "text": "My Choice Rater",
            "url": "JavaScript:void(0);"
        };

        this.nav = (__nav) ? __nav : {
            "links": [
                { "text": "Register", "url": "#" },
                { "text": "Sign In", "url": "#" }
            ]
        };

        this.languages = (__langs) ? __langs : [
            { "langId": "EN", "flagId": "US", "DescriptionNative": "English" },
            { "langId": "TH", "flagId": "TH", "DescriptionNative": "ไทย" }
        ];

        this.selectedLanguage = (__selectedLang) ? __selectedLang : {
            "langId": "EN", "flagId": "US", "DescriptionNative": "English"
        };
        
        //-- END LOCAL VARIABLES

        //#endregion

        //#region SERVICE EVENT HANDLERS

        //-- SERVICE EVENT HANDLERS 

        let onLanguagesLoaded = (sender, evtData) => {
            this.languages = lang.datasource;
            self.update();
        };

        let onLanguageChanged = (sender, evtData) => {
            this.selectedLanguage = lang.selectedObject;
            self.update();
        };

        let onModelLoaded = (sender, evtData) => {
            //console.log('page-nav');
            //console.log(evtData.langId);
            //console.log(evtData.type);
            //console.log(evtData.model);
            if (evtData.type === 'banner') {
                let model = app.content.model; // same as loadedModel
                //let model = loadedModel;
                //console.log('Model Loaded:', model);
                self.banner = model.banner;
                self.update();
            }
            else if (evtData.type === 'nav') {
                let model = app.content.model; // same as loadedModel
                //let model = loadedModel;
                //console.log('Model Loaded:', model);
                self.nav = model.nav;
                self.update();
            }
        };

        lang.datasourcechanged.add(onLanguagesLoaded);
        lang.selectedindexchanged.add(onLanguageChanged);
        app.content.ModelService.modelloaded.add(onModelLoaded);

        //-- END SERVICE EVENT HANDLERS

        //#endregion

        //#region PAGE EVENT HANDLERS
        
        //-- PAGE EVENT HANDLERS

        this.selectLanguage = function(e) {
            e.preventDefault();
            //console.log('detected changing language...');            
            var langIdAttr = e.target.attributes.getNamedItem('langId');
            if (langIdAttr !== 'undefined') {
                //console.log('change language to: ', langIdAttr.value)
                lang.changeLanguage(langIdAttr.value);
            }
            else {
                console.log('cannot find langId attribute.');
                //console.log(langIdAttr);
            }
        };

        //-- END PAGE EVENT HANDLERS

        //#endregion
    </script>
</page-nav-bar>
