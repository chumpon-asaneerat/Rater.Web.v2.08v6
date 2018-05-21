<page-nav-bar>
    <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary m-0 p-1">
        <div class="container-fluid">
            <a href="{ nav.banner.href }" class="navbar-brand align-middle">
                <div if={ (nav.banner.src !== '' && nav.banner.src !== '#') } 
                    class="d-inline-block align-middle">
                    <img src="{ nav.banner.src }" 
                        class="d-inline-block align-middle" 
                        width="24" height="24">
                    { nav.banner.title }
                </div>                    
                <div if={ (!(nav.banner.src !== '' && nav.banner.src !== '#') && nav.banner.icon !== '') } 
                    class="d-inline-block align-middle">
                    <span class="fas fa-{ nav.banner.icon }" 
                        style="width:24px; height:24px;"></span>
                    { nav.banner.title }
                </div>
            </a>
            <!-- Collapse button -->
            <button class="navbar-toggler align-middle" type="button" data-target="#{ nav.target }" data-toggle="collapse" aria-controls="{ nav.target }"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Links -->
            <div class="collapse navbar-collapse" id="{ nav.target }">
                <!-- Links -->                
                <ul class="navbar-nav">
                    <li each={ nav.links } class="nav-item { active }">
                        <a class="nav-link { active }" href="{ href }">
                             { text }
                        </a>
                    </li>
                </ul>
                <!-- Languages -->
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" 
                            data-toggle="dropdown" href="javascript:void(0);"
                            id="nav-languages"> 
                            <span class="flag-icon flag-icon-{ nav.language.FlagId }"></span>
                            &nbsp;&nbsp;{ nav.language.DescriptionNative }&nbsp;&nbsp;
                            <span class="caret"></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" 
                            aria-labelledby="nav-languages">
                            <a each={ nav.languages } class="dropdown-item { active }"
                                href="javascript:void(0);"
                                langId="{ LangId }"
                                onclick="{ selectLanguage }">
                                <span class="flag-icon flag-icon-{ FlagId }"></span>
                                &nbsp;&nbsp;{ DescriptionNative }&nbsp;&nbsp;
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <style>
        .navbar-brand {
            padding-top: 3px;
            padding-bottom: 0px;
            font-size: 1em;
        }
    </style>
    <script>
        //console.log('run script on TAG: nav-bar');
        this.nav = { }
        // Banner Logo and text.
        this.nav.banner = { 
            title: opts.title || 'DEFAULT_TIELE', 
            src: opts.src || '',
            icon: opts.icon || 'home',
            href: 'javascript:void(0);'
        };
        
        // Collapse target.
        this.nav.target = opts.target || 'collapse_menu';
        // Avaliable links.
        this.nav.links = [
            /*
            { text: 'Features', href: 'javascript:void(0);', active: 'active' },
            { text: 'Prices', href: 'javascript:void(0);', active: '' }
            */
        ];

        this.nav.hasLinks = (this.nav.links.length > 0);

        // Avaliable languages.
        this.nav.languages = [
            { LangId: 'EN', FlagId: 'us', DescriptionNative: 'English', active: 'active' }
        ];

        this.nav.hasLanguages = (this.nav.languages.length > 0);

        // Current language.
        this.nav.language = this.nav.languages[0];

        var self = this;

        this.selectLanguage = function(e) {
            e.preventDefault();
            //console.log('detected changing language...');            
            var langIdAttr = e.target.attributes.getNamedItem('langId');
            if (langIdAttr !== 'undefined') {
                //console.log('change language to: ', langIdAttr.value)
                app.idService.upref.langId = langIdAttr.value;
                app.idService.save();
                app.languageService.changeLanguage(app.idService.upref.langId);
            }
            else {
                console.log('cannot find langId attribute.');
                //console.log(langIdAttr);
            }
        };

        this.on('mount', function () {
            app.languageService.on('languagechanged', self.changeLanguage);
            app.contentService.on('contentchanged', self.changeContent);
            self.changeLanguage();
            
            self.update();
        });

        this.changeLanguage = function () {
            //console.log('changeLanguage');
            // Current language.
            self.nav.language = app.languageService.language;
            // Avaliable languages.
            self.nav.languages = app.languageService.languages;
            // render tag.
            self.update();
        }

        this.changeContent = function () {
            //console.log('changeContent');
            // Current Content
            var currLang =  app.languageService.language;
            var contentServ = app.contentService;
            var langId = currLang.LangId;                        
            var langData = contentServ.content[langId]
            //console.log('data for langId:', langId, ' is: ', langData);
            if (!langData) {
                langData = contentServ.content['EN'];
            }

            self.nav.banner = langData.nav.banner;
            self.nav.links = langData.nav.links;

            // render tag.
            self.update();
        }
    </script>
</page-nav-bar>
