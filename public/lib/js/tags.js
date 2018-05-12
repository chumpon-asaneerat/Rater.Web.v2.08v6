riot.tag2('page-content-relative', '<h3>Content gone below.</h3> <yield></yield> <h3>Content end here.</h3>', 'page-content-relative,[data-is="page-content-relative"]{ margin: 1px auto; padding: 1px; }', '', function(opts) {
});
riot.tag2('page-content-absolute', '<div> <yield></yield> </div>', 'page-content-absolute,[data-is="page-content-absolute"]{ margin: 1px auto; padding: 1px; position: absolute; top: 48px; bottom: 24px; left: 1px; right: 4px; overflow-x: hidden; overflow-y: auto; }', '', function(opts) {
});

riot.tag2('page-footer', '<nav class="navbar fixed-bottom m-0 p-1 navbar-light bg-primary"> <span class="float-right m-0 p-0 ml-auto" style="font-size: 0.7em;"> <div class="v-divider">&nbsp;</div> &copy;&nbsp;EDL co.th.&nbsp;&nbsp;&nbsp;&nbsp; </span> </nav>', 'page-footer,[data-is="page-footer"],page-footer nav,[data-is="page-footer"] nav,page-footer span,[data-is="page-footer"] span,page-footer .navbar-text,[data-is="page-footer"] .navbar-text{ color: whitesmoke; } page-footer .v-divider,[data-is="page-footer"] .v-divider{ display: inline; margin-left: 5px; margin-right: 5px; border-left: 1px solid whitesmoke; }', '', function(opts) {
});
riot.tag2('page-nav-bar', '<div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary m-0 p-1"> <div class="container-fluid"> <a href="{nav.banner.href}" class="navbar-brand align-middle"> <div if="{(nav.banner.src !== \'\' && nav.banner.src !== \'#\')}" class="d-inline-block align-middle"> <img riot-src="{nav.banner.src}" class="d-inline-block align-middle" width="24" height="24"> {nav.banner.title} </div> <div if="{(!(nav.banner.src !== \'\' && nav.banner.src !== \'#\') && nav.banner.icon !== \'\')}" class="d-inline-block align-middle"> <span class="fas fa-{nav.banner.icon}" style="width:24px; height:24px;"></span> {nav.banner.title} </div> </a> <button class="navbar-toggler align-middle" type="button" data-target="#{nav.target}" data-toggle="collapse" aria-controls="{nav.target}" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="{nav.target}"> <ul class="navbar-nav"> <li each="{nav.links}" class="nav-item {active}"> <a class="nav-link {active}" href="{href}"> {text} </a> </li> </ul> <ul class="nav navbar-nav ml-auto"> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);" id="nav-languages"> <span class="flag-icon flag-icon-{nav.language.FlagId}"></span> &nbsp;&nbsp;{nav.language.DescriptionNative}&nbsp;&nbsp; <span class="caret"></span> </a> <div class="dropdown-menu dropdown-menu-right" aria-labelledby="nav-languages"> <a each="{nav.languages}" class="dropdown-item {active}" href="javascript:void(0);" langid="{LangId}" onclick="{selectLanguage}"> <span class="flag-icon flag-icon-{FlagId}"></span> &nbsp;&nbsp;{DescriptionNative}&nbsp;&nbsp; </a> </div> </li> </ul> </div> </div> </div>', 'page-nav-bar .navbar-brand,[data-is="page-nav-bar"] .navbar-brand{ padding-top: 3px; padding-bottom: 0px; font-size: 1em; }', '', function(opts) {

        this.nav = { }

        this.nav.banner = {
            title: opts.title || 'DEFAULT_TIELE',
            src: opts.src || '',
            icon: opts.icon || 'home',
            href: 'javascript:void(0);'
        };

        this.nav.target = opts.target || 'collapse_menu';

        this.nav.links = [

        ];

        this.nav.hasLinks = (this.nav.links.length > 0);

        this.nav.languages = [
            { LangId: 'EN', FlagId: 'us', DescriptionNative: 'English', active: 'active' }
        ];

        this.nav.hasLanguages = (this.nav.languages.length > 0);

        this.nav.language = this.nav.languages[0];

        var self = this;

        this.selectLanguage = function(e) {
            e.preventDefault();

            var langIdAttr = e.target.attributes.getNamedItem('langId');
            if (langIdAttr !== 'undefined') {

                app.idService.upref.langId = langIdAttr.value;
                app.idService.save();
                app.languageService.changeLanguage(app.idService.upref.langId);
            }
            else {
                console.log('cannot find langId attribute.');

            }
        };

        this.on('mount', function () {
            app.languageService.on('languagechanged', self.changeLanguage);
            app.contentService.on('contentchanged', self.changeContent);
            self.changeLanguage();

            self.update();
        });

        this.changeLanguage = function () {

            self.nav.language = app.languageService.language;

            self.nav.languages = app.languageService.languages;

            self.update();
        }

        this.changeContent = function () {

            var currLang =  app.languageService.language;
            var contentServ = app.contentService;
            var langId = currLang.LangId;
            var langData = contentServ.content[langId]

            if (!langData) {
                langData = contentServ.content['EN'];
            }

            self.nav.banner = langData.nav.banner;
            self.nav.links = langData.nav.links;

            self.update();
        }
});

riot.tag2('customer-admin-home-content', '<h2>Administrator Home.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-admin-org-edit-content', '<h2>Edit Organization Information.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-admin-org-home-content', '<h2>Organization Home.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-admin-org-manage-content', '<h2>Organization Management.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-admin-question-edit-content', '<h2>Edit Question Information.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-admin-question-home-content', '<h2>Question Home.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-admin-question-manage-content', '<h2>Question Management.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-admin-report-home-content', '<h2>Report Home.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-admin-report-raw-vote-content', '<h2>Raw vote report.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-admin-report-staff-perf-content', '<h2>Staff Performance report.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-admin-report-vote-summary-content', '<h2>Vote summary report.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-admin-staff-edit-content', '<h2>Edit Staff Information.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-admin-staff-home-content', '<h2>Staff Home.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-admin-staff-manage-content', '<h2>Staff Management.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-device-home-content', '<h2>Device Home.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-exclusive-home-content', '<h2>Exclusive Home.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-exclusive-report-home-content', '<h2>Report Home.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-exclusive-report-raw-vote-content', '<h2>Raw vote report.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-exclusive-report-staff-perf-content', '<h2>Staff Performance report.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-exclusive-report-vote-summary-content', '<h2>Vote summary report.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-exclusive-staff-edit-content', '<h2>Edit Staff Information.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-exclusive-staff-home-content', '<h2>Staff Home.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-exclusive-staff-manage-content', '<h2>Staff Management.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('customer-staff-staff-edit-content', '<h2>Edit Staff Information.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('default-confirm-content', '<body> <div class="container" style="padding-top:100px"> <div class="row"> <div class="col-md-4"></div> <div class="col-md-5" style="background-color:#f4f4f4"> <h3 align="center" style="color:green"> <span class="glyphicon glyphicon-shopping-cart"> </span> confirm cart </h3> <form name="formlogin" action="" method="POST" id="login" class="form-horizontal"> <div class="form-group"> <div class="col-sm-12"> <input type="text" name="name" class="form-control" required placeholder="ชื่อ-สกุล"> </div> </div> <div class="form-group"> <div class="col-sm-12"> <textarea name="address" class="form-control" rows="3" required placeholder="ที่อยู่ในการส่งสินค้า"></textarea> </div> </div> <div class="form-group"> <div class="col-sm-12"> <input type="text" name="phone" class="form-control" required placeholder="เบอร์โทรศัพท์"> </div> </div> <div class="form-group"> <div class="col-sm-12"> <input name="name" class="form-control" required placeholder="อีเมล์" type="email"> </div> </div> <div class="form-group"> <div class="col-sm-12" align="center"> <button type="submit" class="btn btn-primary btn-lg" id="btn"> ยืนยันสั่งซื้อ </button> </div> </div> </form> </div> </div> </div> </body>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('page-footer', '<nav class="navbar fixed-bottom m-0 p-1 navbar-light bg-primary"> <span class="float-right m-0 p-0 ml-auto" style="font-size: 0.7em;"> <div class="v-divider">&nbsp;</div> &copy;&nbsp;EDL co.th.&nbsp;&nbsp;&nbsp;&nbsp; </span> </nav>', 'page-footer,[data-is="page-footer"],page-footer nav,[data-is="page-footer"] nav,page-footer span,[data-is="page-footer"] span,page-footer .navbar-text,[data-is="page-footer"] .navbar-text{ color: whitesmoke; } page-footer .v-divider,[data-is="page-footer"] .v-divider{ display: inline; margin-left: 5px; margin-right: 5px; border-left: 1px solid whitesmoke; }', '', function(opts) {
});
riot.tag2('page-nav-bar', '<div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary m-0 p-1"> <div class="container-fluid"> <a href="{nav.banner.href}" class="navbar-brand align-middle"> <div if="{(nav.banner.src !== \'\' && nav.banner.src !== \'#\')}" class="d-inline-block align-middle"> <img riot-src="{nav.banner.src}" class="d-inline-block align-middle" width="24" height="24"> {nav.banner.title} </div> <div if="{(!(nav.banner.src !== \'\' && nav.banner.src !== \'#\') && nav.banner.icon !== \'\')}" class="d-inline-block align-middle"> <span class="fas fa-{nav.banner.icon}" style="width:24px; height:24px;"></span> {nav.banner.title} </div> </a> <button class="navbar-toggler align-middle" type="button" data-target="#{nav.target}" data-toggle="collapse" aria-controls="{nav.target}" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="{nav.target}"> <ul class="navbar-nav"> <li each="{nav.links}" class="nav-item {active}"> <a class="nav-link {active}" href="{href}"> {text} </a> </li> </ul> <ul class="nav navbar-nav ml-auto"> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);" id="nav-languages"> <span class="flag-icon flag-icon-{nav.language.FlagId}"></span> &nbsp;&nbsp;{nav.language.DescriptionNative}&nbsp;&nbsp; <span class="caret"></span> </a> <div class="dropdown-menu dropdown-menu-right" aria-labelledby="nav-languages"> <a each="{nav.languages}" class="dropdown-item {active}" href="javascript:void(0);" langid="{LangId}" onclick="{selectLanguage}"> <span class="flag-icon flag-icon-{FlagId}"></span> &nbsp;&nbsp;{DescriptionNative}&nbsp;&nbsp; </a> </div> </li> </ul> </div> </div> </div>', 'page-nav-bar .navbar-brand,[data-is="page-nav-bar"] .navbar-brand{ padding-top: 3px; padding-bottom: 0px; font-size: 1em; }', '', function(opts) {

        this.nav = { }

        this.nav.banner = {
            title: opts.title || 'DEFAULT_TIELE',
            src: opts.src || '',
            icon: opts.icon || 'home',
            href: 'javascript:void(0);'
        };

        this.nav.target = opts.target || 'collapse_menu';

        this.nav.links = [

        ];

        this.nav.hasLinks = (this.nav.links.length > 0);

        this.nav.languages = [
            { LangId: 'EN', FlagId: 'us', DescriptionNative: 'English', active: 'active' }
        ];

        this.nav.hasLanguages = (this.nav.languages.length > 0);

        this.nav.language = this.nav.languages[0];

        var self = this;

        this.selectLanguage = function(e) {
            e.preventDefault();

            var langIdAttr = e.target.attributes.getNamedItem('langId');
            if (langIdAttr !== 'undefined') {

                app.idService.upref.langId = langIdAttr.value;
                app.idService.save();
                app.languageService.changeLanguage(app.idService.upref.langId);
            }
            else {
                console.log('cannot find langId attribute.');

            }
        };

        this.on('mount', function () {
            app.languageService.on('languagechanged', self.changeLanguage);
            app.contentService.on('contentchanged', self.changeContent);
            self.changeLanguage();

            self.update();
        });

        this.changeLanguage = function () {

            self.nav.language = app.languageService.language;

            self.nav.languages = app.languageService.languages;

            self.update();
        }

        this.changeContent = function () {

            var currLang =  app.languageService.language;
            var contentServ = app.contentService;
            var langId = currLang.LangId;
            var langData = contentServ.content[langId]

            if (!langData) {
                langData = contentServ.content['EN'];
            }

            self.nav.banner = langData.nav.banner;
            self.nav.links = langData.nav.links;

            self.update();
        }
});

riot.tag2('default-about-home-content', '<section id="about"> <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel"> <ol class="carousel-indicators"> <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li> <li data-target="#carouselExampleIndicators" data-slide-to="1"></li> <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> </ol> <div class="carousel-inner" role="listbox"> <div class="carousel-item active"> <img class="d-block img-fluid" src="/public/assets/images/home/1.png" alt="First slide"> </div> <div class="carousel-item"> <img class="d-block img-fluid" src="/public/assets/images/home/2.png" alt="Second slide"> </div> <div class="carousel-item"> <img class="d-block img-fluid" src="/public/assets/images/home/3.png" alt="Third slide"> </div> </div> <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a> </div> </section>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('default-contact-home-content', '<section id="contact"> <div class="container"> <div class="row"> <div class="col-md-4 col-sm-12 col-xs-12 pull-left"> <h3>{contact.header.title}</h3> <p>{contact.header.text}</p> </div> <div class="col-md-4 col-sm-12 col-xs-12 pull-right"> <figure> <img class="card-img-top" src="/public/assets/images/home/about_us.jpg" alt="..."> </figure> </div> <div class="col-lg-8 mx-auto text-center"> <form enctype="multipart/form-data" id="form-application" action="success" method="post"> <div class="row"> <div class="col-md-12 col-sm-12 col-xs-12"> <div class="location-map"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.496625564328!2d100.592086!3d13.809191000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29da6aaf3c0b7%3A0xbdb472cda587612a!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4reC4teC4lOC4teC5geC4reC4pSDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sth!4v1429980660184" width="100%" height="550" frameborder="0" style="border:0"></iframe> <div class="bottom_strip"></div> <div class="bottom_shape two"></div> <small> <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Washington,+DC,+United+States&amp;aq=2&amp;oq=was&amp;sll=40.714353,-74.005973&amp;sspn=0.765069,1.674042&amp;ie=UTF8&amp;hq=&amp;hnear=Washington,+District+of+Columbia&amp;t=m&amp;z=11&amp;ll=38.907231,-77.036464" style="color:#0000FF;text-align:left">View Larger Map</a> </small> </div> <hr> </div> </div> </form> </div> </div> <div class="row"> <div class="container"> <div class="row"> <div class="col-md-4 col-sm-12 col-xs-12 pull-left"> <div class="footer-part"> <h5>about us</h5> <div class="footer-list"> <div class="fb-page" data-href="https://www.facebook.com/edlpcb/" data-tabs="timeline" data-height="270" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"> <blockquote cite="https://www.facebook.com/edlpcb/" class="fb-xfbml-parse-ignore"> <a href="https://www.facebook.com/edlpcb/">EDL Co., Ltd. - บริษัท อีดีแอล จำกัด</a> </blockquote> </div> </div> </div> </div> <div class="col-md-4 col-sm-12 col-xs-12 pull-left"> <div class="footer-part"> <a href="/reportproblem" class="btn btn-info" role="button"> <img class="card-img-top" src="/public/assets/images/home/logo-edl-white.png"> </a> </div> </div> <div class="col-md-4 col-sm-12 col-xs-12 pull-right"> <div class="footer-part"> <h5>{contact.contact.title}</h5> <div class="footer-list"> <p>{contact.contact.text}</p> </div> </div> </div> </div> </div> </div> </div> </section>', '', '', function(opts) {
    var self = this;

    this.contacts = {};

    this.contact = {
            "header": {
                "title": "About EDL",
                "text": "จากความตั้งใจที่อยากให้วงการอิเล็กทรอนิกส์ในบ้านเรามีผู้ผลิตแผ่นวงจรพิมพ์ (PCB) ที่มีความรู้และเข้าใจในวงจรอิเล็กทรอนิกส์เป็นอย่างดี สามารถออกแบบแผ่นวงจรพิมพ์ ตามความต้องการของลูกค้าและช่วยแนะนำในด้านเทคนิค เพื่อให้แผ่นวงจรพิมพ์ ที่ลูกค้าสั่งผลิตเป็นแผ่นที่มีคุณภาพและทำงานได้จริง ด้วยความมุ่งมั่นและตั้งใจจริง จากแนวคิดดังกล่าว ในปี พ.ศ. 2536 บริษัทของเราจึงถือกำเนิดขึ้นในนาม “ บริษัท อีดีแอล จำกัด(EDL Co., Ltd.) “ EDL มีที่มาจาก คำว่า Electronics Design Laboratory ซึ่งหมายถึงศูนย์รวมการออกแบบและวิจัยด้านอิเล็กทรอนิกส์ จากวันนั้นจนถึงวันนี้ บริษัทได้ออกแบบและผลิตแผ่นวงจรพิมพ์ และงานด้านอิเล็กทรอนิกส์ที่มีคุณภาพ เพื่อบริการแก่ลูกค้าเป็นเวลายาวนานกว่า 23 ปี"
            },
            "contact": {
                "title": "Contact",
                "text": "บริษัท อีดีแอล จำกัด \r\n 25,31,33 ซอยลาดพร้าววังหิน 26 ถนนลาดพร้าววังหิน \r\n แขวงลาดพร้าว เขตลาดพร้าว กทม. 10230 \r\n โทรศัพท์ +662 - 935 - 8615-8 \r\n โทรสาร +662 - 935 - 8619 \r\n email sales@edl.co.th \r\n เปิดทำการเวลา 8.30 - 17.30 น. จันทร์ - เสาร์"
            }
        };

    this.on('mount', function () {
        app.languageService.on('languagechanged', self.languageChanged);

        self.update();
    });

    this.languageChanged = function () {
        var langId = app.languageService.language.LangId;
        if (!langId) {
            langId = 'EN';
        }
        console.log('request to change content to ', langId);
        if (!self.contacts[langId]) {
            console.log('load new language content');
            self.contacts[langId] = {};
            var url = '/models/contact/' + langId;
            var fn = $.ajax(url);

            $.when(fn).then(function (r1) {
                self.contacts[langId] = r1.data;
                self.contact = self.contacts[langId];
            });
        }
        else {
            console.log('used exist content');
            self.contact = self.contacts[langId];
        }

        self.update();
    };
});
riot.tag2('default-head-home-content', '<header class="masthead text-center text-white d-flex"> <div class="container my-auto"> <div class="row"> <div class="col-lg-10 mx-auto"> <h1 class="text-uppercase"> <strong>{head.header.title}</strong> </h1> <hr> </div> <div class="col-lg-8 mx-auto"> <p class="text-faded mb-5">{head.header.text}</p> <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">{head.header.learn}</a> </div> </div> </div> </header>', '', '', function(opts) {
    var self = this;

    this.heads = {};

    this.head = {
            "header": {
                "title": "WHAT ARE WE DO!!!",
                "text": "THE EDL Company รับผลิตและออกแบบแผ่นวงจรพิมพ์(PCB) ทั้งงานต้นแบบ งานตามตัวอย่าง งานเร่งด่วน(PCB Express) ไปจนถึงงานผลิตจำนวนมาก ชนิด Single Side, Double Side(PTH) ด้วยคุณสมบัติต่างๆ เช่น HAL Lead - Free, Electro Chemical Tin Plating, Gold Plating, Flux Coating, Solder Mask สีต่างๆ ยังสามารถบริการ Rounting และ V-Cut ได้เป็นต้น นอกเหนือจากงานผลิต PCB แล้ว ยังมีงานด้านอิเล็กทรอนิกส์ไว้บริการอีกหลากหลายอย่างครบวงจร เช่น รับออกแบบและผลิตแผงวงจรปุ่มกด, Sticker และงาน Membrane switch ทุกชนิด รวมถึงงานประกอบอุปกรณ์ลงบนแผงวงจร(PCBA) พร้อมทั้งสามารถจัดหาอุปกรณ์สำหรับลูกค้าได้อีกด้วย โดยงานทุกชนิดไม่จำกัดจำนวนการสั่งขั้นต่ำ",
                "learn": "Learn More"
            }
        };

    this.on('mount', function () {
        app.languageService.on('languagechanged', self.languageChanged);

        self.update();
    });

    this.languageChanged = function () {
        var langId = app.languageService.language.LangId;
        if (!langId) {
            langId = 'EN';
        }
        console.log('request to change content to ', langId);
        if (!self.heads[langId]) {
            console.log('load new language content');
            self.heads[langId] = {};
            var url = '/models/head/' + langId;
            var fn = $.ajax(url);

            $.when(fn).then(function (r1) {
                self.heads[langId] = r1.data;
                self.head = self.heads[langId];
            });
        }
        else {
            console.log('used exist content');
            self.head = self.heads[langId];
        }

        self.update();
    };
});
riot.tag2('default-home-content', '<div class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav"> <div class="container"> <a class="navbar-brand js-scroll-trigger" href="#page-top"> <img class="site_logo" alt="Site Logo" src="/public/assets/images/home/logo.jpg"> </a> <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarResponsive"> <ul class="navbar-nav ml-auto"> <li class="nav-item"> <a class="nav-link js-scroll-trigger" href="#about">{content.mainNav.aboutLink}</a> </li> <li class="nav-item"> <a class="nav-link js-scroll-trigger" href="#services">{content.mainNav.serviceLink}</a> </li> <li class="nav-item"> <a class="nav-link js-scroll-trigger" href="#product">Product</a> </li> <li class="nav-item"> <a class="nav-link js-scroll-trigger" href="#contact">Contact</a> </li> <li class="nav-item"> <a class="nav-link js-scroll-trigger" href="javascript:void(0);" onclick="{selectLanguage}" langid="EN">EN</a> </li> <li class="nav-item"> <a class="nav-link js-scroll-trigger" href="javascript:void(0);" onclick="{selectLanguage}" langid="TH">TH</a> </li> </ul> </div> </div> </div> <header class="masthead text-center text-white d-flex"> <div class="container my-auto"> <div class="row"> <div class="col-lg-10 mx-auto"> <h1 class="text-uppercase"> <strong>{content.header.title}</strong> </h1> <hr> </div> <div class="col-lg-8 mx-auto"> <p class="text-faded mb-5">{content.header.text}</p> <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Learn More</a> </div> </div> </div> </header> <section id="about"> <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel"> <ol class="carousel-indicators"> <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li> <li data-target="#carouselExampleIndicators" data-slide-to="1"></li> <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> </ol> <div class="carousel-inner" role="listbox"> <div class="carousel-item active"> <img class="d-block img-fluid" src="/public/assets/images/home/1.png" alt="First slide"> </div> <div class="carousel-item"> <img class="d-block img-fluid" src="/public/assets/images/home/2.png" alt="Second slide"> </div> <div class="carousel-item"> <img class="d-block img-fluid" src="/public/assets/images/home/3.png" alt="Third slide"> </div> </div> <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a> </div> </section> <section id="services"> <div class="container"> <div class="row"> <div class="col-lg-12 text-center"> <h2 class="section-heading text-uppercase">Services</h2> <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> </div> </div> <div class="row text-center"> <div class="col-md-4"> <span class="fa-stack fa-4x"> <i class="fa fa-circle fa-stack-2x text-primary"></i> <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i> </span> <h4 class="service-heading">E-Commerce</h4> <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p> </div> <div class="col-md-4"> <span class="fa-stack fa-4x"> <i class="fa fa-circle fa-stack-2x text-primary"></i> <i class="fa fa-laptop fa-stack-1x fa-inverse"></i> </span> <h4 class="service-heading">Responsive Design</h4> <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p> </div> <div class="col-md-4"> <span class="fa-stack fa-4x"> <i class="fa fa-circle fa-stack-2x text-primary"></i> <i class="fa fa-lock fa-stack-1x fa-inverse"></i> </span> <h4 class="service-heading">Web Security</h4> <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p> </div> </div> <div class="row"> <div class="col-lg-12 text-center"> <img class="card-img-top" src="/public/assets/images/home/how-to-order.jpg" alt="..."> </div> </div> </div> </section> <section id="product" class="bg-primary"> <div class="container"> <div class="row"> <div class="col-lg-3 col-md-6 mb-4"> <div class="thumbnail"> <img class="card-img-top" src="/public/assets/images/home/product/p1.jpg" alt="..."> <div class="caption"> <h3>500 บาท/กก.</h3> <p>Guatemala Casi Cielo® </p> <p> <a href="#" class="btn btn-info" role="button"> สั่งซื้อ </a> <a href="#" class="btn btn-primary" role="button"> รายละเอียดสินค้า</a> </p> </div> </div> </div> <div class="col-lg-3 col-md-6 mb-4"> <div class="thumbnail"> <img class="card-img-top" src="/public/assets/images/home/product/p2.jpg" alt="..."> <div class="caption"> <h3>500 บาท/กก.</h3> <p>Africa Kitamu </p> <p> <a href="#" class="btn btn-primary" role="button"> สั่งซื้อ </a> <a href="#" class="btn btn-primary" role="button"> รายละเอียดสินค้า</a> </p> </div> </div> </div> <div class="col-lg-3 col-md-6 mb-4"> <div class="thumbnail"> <img class="card-img-top" src="/public/assets/images/home/product/p3.jpg" alt="..."> <div class="caption"> <h3>250 บาท/กก.</h3> <p>Three Region Blend </p> <p> <a href="#" class="btn btn-primary" role="button"> สั่งซื้อ </a> <a href="#" class="btn btn-primary" role="button"> รายละเอียดสินค้า</a> </p> </div> </div> </div> <div class="col-lg-3 col-md-6 mb-4"> <div class="thumbnail"> <img class="card-img-top" src="/public/assets/images/home/product/p4.jpg" alt="..."> <div class="caption"> <h3>850 บาท/กก.</h3> <p>Pike Place® Roast </p> <p> <a href="#" class="btn btn-primary" role="button"> สั่งซื้อ </a> <a href="#" class="btn btn-primary" role="button"> รายละเอียดสินค้า</a> </p> </div> </div> </div> </div> </div> </div> </section> <section id="contact"> <div class="container"> <div class="row"> <div class="col-md-4 col-sm-12 col-xs-12 pull-left"> <h3>About EDL</h3> <p>จากความตั้งใจที่อยากให้วงการอิเล็กทรอนิกส์ในบ้านเรามีผู้ผลิตแผ่นวงจรพิมพ์ (PCB) ที่มีความรู้และเข้าใจในวงจรอิเล็กทรอนิกส์เป็นอย่างดี สามารถออกแบบแผ่นวงจรพิมพ์ ตามความต้องการของลูกค้าและช่วยแนะนำในด้านเทคนิค เพื่อให้แผ่นวงจรพิมพ์ ที่ลูกค้าสั่งผลิตเป็นแผ่นที่มีคุณภาพและทำงานได้จริง ด้วยความมุ่งมั่นและตั้งใจจริง จากแนวคิดดังกล่าว ในปี พ.ศ. 2536 บริษัทของเราจึงถือกำเนิดขึ้นในนาม “ บริษัท อีดีแอล จำกัด (EDL Co., Ltd.) “ EDL มีที่มาจาก คำว่า Electronics Design Laboratory ซึ่งหมายถึงศูนย์รวมการออกแบบและวิจัยด้านอิเล็กทรอนิกส์ จากวันนั้นจนถึงวันนี้ บริษัทได้ออกแบบและผลิตแผ่นวงจรพิมพ์ และงานด้านอิเล็กทรอนิกส์ที่มีคุณภาพ เพื่อบริการแก่ลูกค้าเป็นเวลายาวนานกว่า 23 ปี</p> </div> <div class="col-md-4 col-sm-12 col-xs-12 pull-right"> <figure> <img class="card-img-top" src="/public/assets/images/home/about_us.jpg" alt="..."> </figure> </div> <div class="col-lg-8 mx-auto text-center"> <form enctype="multipart/form-data" id="form-application" action="success" method="post"> <div class="row"> <div class="col-md-12 col-sm-12 col-xs-12"> <div class="location-map"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.496625564328!2d100.592086!3d13.809191000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29da6aaf3c0b7%3A0xbdb472cda587612a!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4reC4teC4lOC4teC5geC4reC4pSDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sth!4v1429980660184" width="100%" height="550" frameborder="0" style="border:0"></iframe> <div class="bottom_strip"></div> <div class="bottom_shape two"></div> <small> <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Washington,+DC,+United+States&amp;aq=2&amp;oq=was&amp;sll=40.714353,-74.005973&amp;sspn=0.765069,1.674042&amp;ie=UTF8&amp;hq=&amp;hnear=Washington,+District+of+Columbia&amp;t=m&amp;z=11&amp;ll=38.907231,-77.036464" style="color:#0000FF;text-align:left">View Larger Map</a> </small> </div> <hr> </div> <div class="col-md-4 col-sm-4 col-xs-12"> <div class="about-us"> <h3>บริษัท อีดีแอล จำกัด</h3> </div> <div class="contact-us"> <p> <i class="fa fa-map-marker" aria-hidden="true"></i>25,31,33 ซอยลาดพร้าววังหิน 26 ถนนลาดพร้าววังหิน แขวงลาดพร้าว เขตลาดพร้าว กทม. 10230 </p> <p> <i class="fa fa-envelope" aria-hidden="true"></i>sales@edl.co.th</p> <p> <i class="fa fa-phone" aria-hidden="true"></i>+662 - 935 - 8615-8</p> <p> <i class="fa fa-fax" aria-hidden="true"></i>+662 - 935 - 8619</p> <p>เปิดทำการเวลา 8.30 - 17.30 น. จันทร์ - เสาร์</p> </div> </div> <div class="col-md-4 col-sm-4 col-xs-12 padL0 padR0"> <div class="comment-review"> <div class="col-md-12 col-sm-12 col-xs-12 marB30"> <input type="text" name="name" id="name" placeholder="Name"> </div> <div class="col-md-12 col-sm-12 col-xs-12 marB30"> <input type="text" name="email" id="email" placeholder="Email"> </div> <div class="col-md-12 col-sm-12 col-xs-12 marB30"> <input type="text" name="phone" id="phone" placeholder="Phone"> </div> <div class="col-md-12 col-sm-12 col-xs-12 marB30"> <input type="text" name="subject" id="subject" placeholder="Subject"> </div> </div> </div> <div class="col-md-4 col-sm-4 col-xs-12 padL0 padR0"> <div class="col-md-12 col-sm-12 col-xs-12 marB20"> <textarea placeholder="Message" rows="7" name="detail" id="detail"></textarea> </div> <div class="col-md-12 col-sm-12 col-xs-12 marB30"> <button type="submit" class="itg-button send-btn">send message</button> </div> </div> </div> </form> </div> </div> </div> </section> <footer class="p-3 mb-2 bg-secondary text-white"> <div class="main-footer"> <div class="container"> <div class="row"> <div class="col-md-4 col-sm-12 col-xs-12 pull-left"> <div class="footer-part"> <h5>about us</h5> <div class="footer-list"> <div class="fb-page" data-href="https://www.facebook.com/edlpcb/" data-tabs="timeline" data-height="270" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"> <blockquote cite="https://www.facebook.com/edlpcb/" class="fb-xfbml-parse-ignore"> <a href="https://www.facebook.com/edlpcb/">EDL Co., Ltd. - บริษัท อีดีแอล จำกัด</a> </blockquote> </div> </div> </div> </div> <div class="col-md-4 col-sm-12 col-xs-12 pull-left"> <div class="footer-part"> <img class="card-img-top" src="/public/assets/images/home/logo-edl-white.png"> </div> </div> <div class="col-md-4 col-sm-12 col-xs-12 pull-right"> <div class="footer-part"> <h5>Contact Us</h5> <div class="footer-list"> <h3>บริษัท อีดีแอล จำกัด</h3> <p>25,31,33 ซอยลาดพร้าววังหิน 26 ถนนลาดพร้าววังหิน <br> แขวงลาดพร้าว เขตลาดพร้าว กทม. 10230 <br> โทรศัพท์ +662 - 935 - 8615-8 <br> โทรสาร +662 - 935 - 8619 <br> email sales@edl.co.th <br> เปิดทำการเวลา 8.30 - 17.30 น. จันทร์ - เสาร์ </p> </div> </div> </div> </div> </div> </div> </footer>', '', '', function(opts) {
        var self = this;

        this.contents = {};

        this.content = {
            "mainNav": {
                "aboutLink": "About!!",
                "serviceLink": "Service!!"
            },
            "header": {
                "title": "WHATTTTTT!!!!",
                "text": "!!! THE EDL Company รับผลิตและออกแบบแผ่นวงจรพิมพ์(PCB) ทั้งงานต้นแบบ งานตามตัวอย่าง งานเร่งด่วน(PCB Express) ไปจนถึงงานผลิตจำนวนมาก ชนิด Single Side, Double Side(PTH) ด้วยคุณสมบัติต่างๆ เช่น HAL Lead - Free, Electro Chemical Tin Plating, Gold Plating, Flux Coating, Solder Mask สีต่างๆ ยังสามารถบริการ Rounting และ V-Cut ได้เป็นต้น นอกเหนือจากงานผลิต PCB แล้ว ยังมีงานด้านอิเล็กทรอนิกส์ไว้บริการอีกหลากหลายอย่างครบวงจร เช่น รับออกแบบและผลิตแผงวงจรปุ่มกด, Sticker และงาน Membrane switch ทุกชนิด รวมถึงงานประกอบอุปกรณ์ลงบนแผงวงจร(PCBA) พร้อมทั้งสามารถจัดหาอุปกรณ์สำหรับลูกค้าได้อีกด้วย โดยงานทุกชนิดไม่จำกัดจำนวนการสั่งขั้นต่ำ"
            },
            "address": {
                "text": "\r\nเปิดทำการเวลา 8.30 - 17.30 น. จันทร์ - เสาร์"
            }
        };

        this.on('mount', function () {
            app.languageService.on('languagechanged', self.languageChanged);

            self.update();
        });

        this.selectLanguage = function (e) {
            e.preventDefault();

            var langIdAttr = e.target.attributes.getNamedItem('langId');
            if (langIdAttr !== 'undefined') {

                app.idService.upref.langId = langIdAttr.value;
                app.idService.save();
                app.languageService.changeLanguage(app.idService.upref.langId);
            }
            else {
                console.log('cannot find langId attribute.');

            }
        };

        this.languageChanged = function () {
            var langId = app.languageService.language.LangId;
            if (!langId) {
                langId = 'EN';
            }
            console.log('request to change content to ', langId);
            if (!self.contents[langId]) {
                console.log('load new language content');
                self.contents[langId] = {};
                var url = '/models/content/' + langId;
                var fn = $.ajax(url);

                $.when(fn).then(function (r1) {
                    self.contents[langId] = r1.data;
                    self.content = self.contents[langId];
                });
            }
            else {
                console.log('used exist content');
                self.content = self.contents[langId];
            }

            self.update();
        };
});

riot.tag2('default-product-home-content', '<section id="product" class="bg-primary"> <div class="container"> <div class="row"> <div class="col-lg-3 col-md-6 mb-4"> <div class="thumbnail"> <img class="card-img-top" src="/public/assets/images/home/product/p1.jpg" alt="..."> <div class="caption"> <h3> {product.pro1.price}</h3> <p>{product.pro1.doc} </p> <p> <a href="/confirm" class="btn btn-info" role="button"> {product.defbtn.buy} </a> <a href="/itemdocument" class="btn btn-primary" role="button"> {product.defbtn.product}</a> </p> </div> </div> </div> <div class="col-lg-3 col-md-6 mb-4"> <div class="thumbnail"> <img class="card-img-top" src="/public/assets/images/home/product/p2.jpg" alt="..."> <div class="caption"> <h3> {product.pro2.price}</h3> <p>{product.pro2.doc} </p> <p> <a href="#" class="btn btn-primary" role="button"> {product.defbtn.buy} </a> <a href="#" class="btn btn-primary" role="button"> {product.defbtn.product}</a> </p> </div> </div> </div> <div class="col-lg-3 col-md-6 mb-4"> <div class="thumbnail"> <img class="card-img-top" src="/public/assets/images/home/product/p3.jpg" alt="..."> <div class="caption"> <h3> {product.pro3.price}</h3> <p>{product.pro3.doc} </p> <p> <a href="#" class="btn btn-primary" role="button"> {product.defbtn.buy} </a> <a href="#" class="btn btn-primary" role="button"> {product.defbtn.product}</a> </p> </div> </div> </div> <div class="col-lg-3 col-md-6 mb-4"> <div class="thumbnail"> <img class="card-img-top" src="/public/assets/images/home/product/p4.jpg" alt="..."> <div class="caption"> <h3> {product.pro4.price}</h3> <p>{product.pro4.doc} </p> <p> <a href="#" class="btn btn-primary" role="button"> {product.defbtn.buy} </a> <a href="#" class="btn btn-primary" role="button"> {product.defbtn.product}</a> </p> </div> </div> </div> </div> </div> </div> </section>', '', '', function(opts) {
    var self = this;

    this.products = {};

    this.product = {
            "defbtn": {
                "buy": "สั่งซื้อ",
                "product": "รายละเอียดสินค้า"
            },
            "pro1": {
                "price": "Free",
                "doc": "My Choice Wi-Fi"
            },
            "pro2": {
                "price": "1,000 Baht",
                "doc": "My Choice Rater"},
            "pro3": {
               "price": "1,500 Baht",
                "doc": "My Choice Rater 2 User"},
        "pro4": {
            "price": "10,000 Baht",
            "doc": "My Choice Rater 15 User"
        }
        };

    this.on('mount', function () {
        app.languageService.on('languagechanged', self.languageChanged);

        self.update();
    });

    this.languageChanged = function () {
        var langId = app.languageService.language.LangId;
        if (!langId) {
            langId = 'EN';
        }
        console.log('request to change content to ', langId);
        if (!self.products[langId]) {
            console.log('load new language content');
            self.products[langId] = {};
            var url = '/models/product/' + langId;
            var fn = $.ajax(url);

            $.when(fn).then(function (r1) {
                self.products[langId] = r1.data;
                self.product = self.products[langId];
            });
        }
        else {
            console.log('used exist content');
            self.product = self.products[langId];
        }

        self.update();
    };
});
riot.tag2('default-services-home-content', '<section id="services"> <div class="container"> <div class="row"> <div class="col-lg-12 text-center"> <h2 class="section-heading text-uppercase">{services.header.title}</h2> <h3 class="section-subheading text-muted">{services.header.text}</h3> </div> </div> <div class="row text-center"> <div class="col-md-4"> <span class="fa-stack fa-4x"> <i class="fa fa-circle fa-stack-2x text-primary"></i> <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i> </span> <h4 class="service-heading">{services.ECom.title}</h4> <p class="text-muted">{services.ECom.text}</p> </div> <div class="col-md-4"> <span class="fa-stack fa-4x"> <i class="fa fa-circle fa-stack-2x text-primary"></i> <i class="fa fa-laptop fa-stack-1x fa-inverse"></i> </span> <h4 class="service-heading">{services.responsive.title}</h4> <p class="text-muted">{services.responsive.text}</p> </div> <div class="col-md-4"> <span class="fa-stack fa-4x"> <i class="fa fa-circle fa-stack-2x text-primary"></i> <i class="fa fa-lock fa-stack-1x fa-inverse"></i> </span> <h4 class="service-heading">{services.security.title}</h4> <p class="text-muted">{services.security.text}</p> </div> </div> <div class="row"> <div class="col-lg-12 text-center"> <img class="card-img-top" src="/public/assets/images/home/how-to-order.jpg" alt="..."> </div> </div> </div> </section>', '', '', function(opts) {
        var self = this;

        this.servicess = {};

        this.services = {
            "header": {
                "title": "Services",
                "text": "provision of assistance to customers or clients"
            },
            "ECom": {
                "title": "E-Commerce",
                "text": "E-commerce is the activity of buying or selling of products and services online or over the internet. Electronic commerce draws on technologies"
            },
            "responsive": {
                "title": "Responsive Design",
                "text": "Responsive web design (RWD) is an approach to web design which makes web pages render well on a variety of devices and window or screen sizes."
            },
            "security": {
                "title": "Web Security",
                "text": " Web Security, Email Security, and DLP may be deployed together to create a comprehensive security solution."
            }
        };

        this.on('mount', function () {
            app.languageService.on('languagechanged', self.languageChanged);

            self.update();
        });

        this.languageChanged = function () {
            var langId = app.languageService.language.LangId;
            if (!langId) {
                langId = 'EN';
            }
            console.log('request to change content to ', langId);
            if (!self.servicess[langId]) {
                console.log('load new language content');
                self.servicess[langId] = {};
                var url = '/models/services/' + langId;
                var fn = $.ajax(url);

                $.when(fn).then(function (r1) {
                    self.servicess[langId] = r1.data;
                    self.services = self.servicess[langId];
                });
            }
            else {
                console.log('used exist content');
                self.services = self.servicess[langId];
            }

            self.update();
        };
});
riot.tag2('page-footer', '<nav class="navbar fixed-bottom m-0 p-1 navbar-light bg-primary"> <span class="float-right m-0 p-0 ml-auto" style="font-size: 0.7em;"> <div class="v-divider">&nbsp;</div> &copy;&nbsp;EDL co.th.&nbsp;&nbsp;&nbsp;&nbsp; </span> </nav>', 'page-footer,[data-is="page-footer"],page-footer nav,[data-is="page-footer"] nav,page-footer span,[data-is="page-footer"] span,page-footer .navbar-text,[data-is="page-footer"] .navbar-text{ color: whitesmoke; } page-footer .v-divider,[data-is="page-footer"] .v-divider{ display: inline; margin-left: 5px; margin-right: 5px; border-left: 1px solid whitesmoke; }', '', function(opts) {
});
riot.tag2('page-nav-bar', '<div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary m-0 p-1"> <div class="container-fluid"> <a href="{nav.banner.href}" class="navbar-brand align-middle"> <div if="{(nav.banner.src !== \'\' && nav.banner.src !== \'#\')}" class="d-inline-block align-middle"> <img riot-src="{nav.banner.src}" class="d-inline-block align-middle" width="24" height="24"> {nav.banner.title} </div> <div if="{(!(nav.banner.src !== \'\' && nav.banner.src !== \'#\') && nav.banner.icon !== \'\')}" class="d-inline-block align-middle"> <span class="fas fa-{nav.banner.icon}" style="width:24px; height:24px;"></span> {nav.banner.title} </div> </a> <button class="navbar-toggler align-middle" type="button" data-target="#{nav.target}" data-toggle="collapse" aria-controls="{nav.target}" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="{nav.target}"> <ul class="navbar-nav"> <li each="{nav.links}" class="nav-item {active}"> <a class="nav-link {active}" href="{href}"> {text} </a> </li> </ul> <ul class="nav navbar-nav ml-auto"> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);" id="nav-languages"> <span class="flag-icon flag-icon-{nav.language.FlagId}"></span> &nbsp;&nbsp;{nav.language.DescriptionNative}&nbsp;&nbsp; <span class="caret"></span> </a> <div class="dropdown-menu dropdown-menu-right" aria-labelledby="nav-languages"> <a each="{nav.languages}" class="dropdown-item {active}" href="javascript:void(0);" langid="{LangId}" onclick="{selectLanguage}"> <span class="flag-icon flag-icon-{FlagId}"></span> &nbsp;&nbsp;{DescriptionNative}&nbsp;&nbsp; </a> </div> </li> </ul> </div> </div> </div>', 'page-nav-bar .navbar-brand,[data-is="page-nav-bar"] .navbar-brand{ padding-top: 3px; padding-bottom: 0px; font-size: 1em; }', '', function(opts) {

        this.nav = { }

        this.nav.banner = {
            title: opts.title || 'DEFAULT_TIELE',
            src: opts.src || '',
            icon: opts.icon || 'home',
            href: 'javascript:void(0);'
        };

        this.nav.target = opts.target || 'collapse_menu';

        this.nav.links = [

        ];

        this.nav.hasLinks = (this.nav.links.length > 0);

        this.nav.languages = [
            { LangId: 'EN', FlagId: 'us', DescriptionNative: 'English', active: 'active' }
        ];

        this.nav.hasLanguages = (this.nav.languages.length > 0);

        this.nav.language = this.nav.languages[0];

        var self = this;

        this.selectLanguage = function(e) {
            e.preventDefault();

            var langIdAttr = e.target.attributes.getNamedItem('langId');
            if (langIdAttr !== 'undefined') {

                app.idService.upref.langId = langIdAttr.value;
                app.idService.save();
                app.languageService.changeLanguage(app.idService.upref.langId);
            }
            else {
                console.log('cannot find langId attribute.');

            }
        };

        this.on('mount', function () {
            app.languageService.on('languagechanged', self.changeLanguage);
            app.contentService.on('contentchanged', self.changeContent);
            self.changeLanguage();

            self.update();
        });

        this.changeLanguage = function () {

            self.nav.language = app.languageService.language;

            self.nav.languages = app.languageService.languages;

            self.update();
        }

        this.changeContent = function () {

            var currLang =  app.languageService.language;
            var contentServ = app.contentService;
            var langId = currLang.LangId;
            var langData = contentServ.content[langId]

            if (!langData) {
                langData = contentServ.content['EN'];
            }

            self.nav.banner = langData.nav.banner;
            self.nav.links = langData.nav.links;

            self.update();
        }
});

riot.tag2('default-itemdocument-content', '<body> <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"> <p></p> <h1 class="display-4">Pricing</h1> <p></p> </div> <div class="container"> <div class="card-deck mb-3 text-center"> <div class="card mb-4 box-shadow"> <div class="card-header"> <h4 class="my-0 font-weight-normal">Free</h4> </div> <div class="card-body"> <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small> </h1> <ul class="list-unstyled mt-3 mb-4"> <li>10 users included</li> <li>2 GB of storage</li> <li>Email support</li> <li>Help center access</li> </ul> <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button> </div> </div> <div class="card mb-4 box-shadow"> <div class="card-header"> <h4 class="my-0 font-weight-normal">Pro</h4> </div> <div class="card-body"> <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small> </h1> <ul class="list-unstyled mt-3 mb-4"> <li>20 users included</li> <li>10 GB of storage</li> <li>Priority email support</li> <li>Help center access</li> </ul> <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button> </div> </div> <div class="card mb-4 box-shadow"> <div class="card-header"> <h4 class="my-0 font-weight-normal">Enterprise</h4> </div> <div class="card-body"> <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small> </h1> <ul class="list-unstyled mt-3 mb-4"> <li>30 users included</li> <li>15 GB of storage</li> <li>Phone and email support</li> <li>Help center access</li> </ul> <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button> </div> </div> </div> </body>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('page-footer', '<nav class="navbar fixed-bottom m-0 p-1 navbar-light bg-primary"> <span class="float-right m-0 p-0 ml-auto" style="font-size: 0.7em;"> <div class="v-divider">&nbsp;</div> &copy;&nbsp;EDL co.th.&nbsp;&nbsp;&nbsp;&nbsp; </span> </nav>', 'page-footer,[data-is="page-footer"],page-footer nav,[data-is="page-footer"] nav,page-footer span,[data-is="page-footer"] span,page-footer .navbar-text,[data-is="page-footer"] .navbar-text{ color: whitesmoke; } page-footer .v-divider,[data-is="page-footer"] .v-divider{ display: inline; margin-left: 5px; margin-right: 5px; border-left: 1px solid whitesmoke; }', '', function(opts) {
});
riot.tag2('page-nav-bar', '<div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary m-0 p-1"> <div class="container-fluid"> <a href="{nav.banner.href}" class="navbar-brand align-middle"> <div if="{(nav.banner.src !== \'\' && nav.banner.src !== \'#\')}" class="d-inline-block align-middle"> <img riot-src="{nav.banner.src}" class="d-inline-block align-middle" width="24" height="24"> {nav.banner.title} </div> <div if="{(!(nav.banner.src !== \'\' && nav.banner.src !== \'#\') && nav.banner.icon !== \'\')}" class="d-inline-block align-middle"> <span class="fas fa-{nav.banner.icon}" style="width:24px; height:24px;"></span> {nav.banner.title} </div> </a> <button class="navbar-toggler align-middle" type="button" data-target="#{nav.target}" data-toggle="collapse" aria-controls="{nav.target}" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="{nav.target}"> <ul class="navbar-nav"> <li each="{nav.links}" class="nav-item {active}"> <a class="nav-link {active}" href="{href}"> {text} </a> </li> </ul> <ul class="nav navbar-nav ml-auto"> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);" id="nav-languages"> <span class="flag-icon flag-icon-{nav.language.FlagId}"></span> &nbsp;&nbsp;{nav.language.DescriptionNative}&nbsp;&nbsp; <span class="caret"></span> </a> <div class="dropdown-menu dropdown-menu-right" aria-labelledby="nav-languages"> <a each="{nav.languages}" class="dropdown-item {active}" href="javascript:void(0);" langid="{LangId}" onclick="{selectLanguage}"> <span class="flag-icon flag-icon-{FlagId}"></span> &nbsp;&nbsp;{DescriptionNative}&nbsp;&nbsp; </a> </div> </li> </ul> </div> </div> </div>', 'page-nav-bar .navbar-brand,[data-is="page-nav-bar"] .navbar-brand{ padding-top: 3px; padding-bottom: 0px; font-size: 1em; }', '', function(opts) {

        this.nav = { }

        this.nav.banner = {
            title: opts.title || 'DEFAULT_TIELE',
            src: opts.src || '',
            icon: opts.icon || 'home',
            href: 'javascript:void(0);'
        };

        this.nav.target = opts.target || 'collapse_menu';

        this.nav.links = [

        ];

        this.nav.hasLinks = (this.nav.links.length > 0);

        this.nav.languages = [
            { LangId: 'EN', FlagId: 'us', DescriptionNative: 'English', active: 'active' }
        ];

        this.nav.hasLanguages = (this.nav.languages.length > 0);

        this.nav.language = this.nav.languages[0];

        var self = this;

        this.selectLanguage = function(e) {
            e.preventDefault();

            var langIdAttr = e.target.attributes.getNamedItem('langId');
            if (langIdAttr !== 'undefined') {

                app.idService.upref.langId = langIdAttr.value;
                app.idService.save();
                app.languageService.changeLanguage(app.idService.upref.langId);
            }
            else {
                console.log('cannot find langId attribute.');

            }
        };

        this.on('mount', function () {
            app.languageService.on('languagechanged', self.changeLanguage);
            app.contentService.on('contentchanged', self.changeContent);
            self.changeLanguage();

            self.update();
        });

        this.changeLanguage = function () {

            self.nav.language = app.languageService.language;

            self.nav.languages = app.languageService.languages;

            self.update();
        }

        this.changeContent = function () {

            var currLang =  app.languageService.language;
            var contentServ = app.contentService;
            var langId = currLang.LangId;
            var langData = contentServ.content[langId]

            if (!langData) {
                langData = contentServ.content['EN'];
            }

            self.nav.banner = langData.nav.banner;
            self.nav.links = langData.nav.links;

            self.update();
        }
});

riot.tag2('default-register-entry', '<h1>Register Page.</h1>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('default-confirm-content', '<body> <div class="container"> <div class="row"> <div class="col-md-12"> <form action="" method="POST" name="contact" id="contact"> <table width="70%" border="0" align="center" cellpadding="0" cellspacing="0"> <tr> <td colspan="3"> <p></p> <h3 align="center"> แจ้งปัญหาการใช้งาน </h3> <p></p> </td> </tr> <tr> <td width="18%" align="right" valign="top">รายละเอียด&nbsp;</td> <td colspan="2"> <textarea name="detail" rows="3" required="required" class="form-control" id="detail" placeholder="กรุณากรอกข้อมูล"></textarea> </td> <td>&nbsp;</td> </tr> <tr> <td align="right"> ชื่อ &nbsp;</td> <td colspan="2"> <input name="qname" type="text" id="qname" class="form-control" placeholder="กรุณากรอกข้อมูล" required> </td> <td>&nbsp;</td> </tr> <tr> <td align="right"> E-mail &nbsp; </td> <td width="31%"> <input name="email" id="Email" class="form-control" placeholder="เช่น abc@gmail.com " required type="email"> </td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td align="center">&nbsp;</td> <td colspan="3" align="center">&nbsp;</td> </tr> <tr> <td align="center">&nbsp;</td> <td colspan="3" align="left"> <input type="reset" name="reset" id="reset" class="btn btn-warning btn-sm" value="Reset"> &nbsp;&nbsp; &nbsp; <input type="submit" name="regis" id="regis" class="btn btn-info btn-sm" value="แจ้งปัญหา"> </td> </tr> <tr> <td colspan="4" align="center"></td> </tr> <tr> <td align="right"> <br> </td> <td>&nbsp;</td> <td width="10%">&nbsp;</td> <td width="41%">&nbsp;</td> </tr> </table> </form> </div> </div> </div> </body>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('page-footer', '<nav class="navbar fixed-bottom m-0 p-1 navbar-light bg-primary"> <span class="float-right m-0 p-0 ml-auto" style="font-size: 0.7em;"> <div class="v-divider">&nbsp;</div> &copy;&nbsp;EDL co.th.&nbsp;&nbsp;&nbsp;&nbsp; </span> </nav>', 'page-footer,[data-is="page-footer"],page-footer nav,[data-is="page-footer"] nav,page-footer span,[data-is="page-footer"] span,page-footer .navbar-text,[data-is="page-footer"] .navbar-text{ color: whitesmoke; } page-footer .v-divider,[data-is="page-footer"] .v-divider{ display: inline; margin-left: 5px; margin-right: 5px; border-left: 1px solid whitesmoke; }', '', function(opts) {
});
riot.tag2('page-nav-bar', '<div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary m-0 p-1"> <div class="container-fluid"> <a href="{nav.banner.href}" class="navbar-brand align-middle"> <div if="{(nav.banner.src !== \'\' && nav.banner.src !== \'#\')}" class="d-inline-block align-middle"> <img riot-src="{nav.banner.src}" class="d-inline-block align-middle" width="24" height="24"> {nav.banner.title} </div> <div if="{(!(nav.banner.src !== \'\' && nav.banner.src !== \'#\') && nav.banner.icon !== \'\')}" class="d-inline-block align-middle"> <span class="fas fa-{nav.banner.icon}" style="width:24px; height:24px;"></span> {nav.banner.title} </div> </a> <button class="navbar-toggler align-middle" type="button" data-target="#{nav.target}" data-toggle="collapse" aria-controls="{nav.target}" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="{nav.target}"> <ul class="navbar-nav"> <li each="{nav.links}" class="nav-item {active}"> <a class="nav-link {active}" href="{href}"> {text} </a> </li> </ul> <ul class="nav navbar-nav ml-auto"> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);" id="nav-languages"> <span class="flag-icon flag-icon-{nav.language.FlagId}"></span> &nbsp;&nbsp;{nav.language.DescriptionNative}&nbsp;&nbsp; <span class="caret"></span> </a> <div class="dropdown-menu dropdown-menu-right" aria-labelledby="nav-languages"> <a each="{nav.languages}" class="dropdown-item {active}" href="javascript:void(0);" langid="{LangId}" onclick="{selectLanguage}"> <span class="flag-icon flag-icon-{FlagId}"></span> &nbsp;&nbsp;{DescriptionNative}&nbsp;&nbsp; </a> </div> </li> </ul> </div> </div> </div>', 'page-nav-bar .navbar-brand,[data-is="page-nav-bar"] .navbar-brand{ padding-top: 3px; padding-bottom: 0px; font-size: 1em; }', '', function(opts) {

        this.nav = { }

        this.nav.banner = {
            title: opts.title || 'DEFAULT_TIELE',
            src: opts.src || '',
            icon: opts.icon || 'home',
            href: 'javascript:void(0);'
        };

        this.nav.target = opts.target || 'collapse_menu';

        this.nav.links = [

        ];

        this.nav.hasLinks = (this.nav.links.length > 0);

        this.nav.languages = [
            { LangId: 'EN', FlagId: 'us', DescriptionNative: 'English', active: 'active' }
        ];

        this.nav.hasLanguages = (this.nav.languages.length > 0);

        this.nav.language = this.nav.languages[0];

        var self = this;

        this.selectLanguage = function(e) {
            e.preventDefault();

            var langIdAttr = e.target.attributes.getNamedItem('langId');
            if (langIdAttr !== 'undefined') {

                app.idService.upref.langId = langIdAttr.value;
                app.idService.save();
                app.languageService.changeLanguage(app.idService.upref.langId);
            }
            else {
                console.log('cannot find langId attribute.');

            }
        };

        this.on('mount', function () {
            app.languageService.on('languagechanged', self.changeLanguage);
            app.contentService.on('contentchanged', self.changeContent);
            self.changeLanguage();

            self.update();
        });

        this.changeLanguage = function () {

            self.nav.language = app.languageService.language;

            self.nav.languages = app.languageService.languages;

            self.update();
        }

        this.changeContent = function () {

            var currLang =  app.languageService.language;
            var contentServ = app.contentService;
            var langId = currLang.LangId;
            var langData = contentServ.content[langId]

            if (!langData) {
                langData = contentServ.content['EN'];
            }

            self.nav.banner = langData.nav.banner;
            self.nav.links = langData.nav.links;

            self.update();
        }
});

riot.tag2('default-signin-entry', '<div class="row"> <div class="col col-md-1"></div> <div class="col col-md-auto"> <h1>My Choice Rater.</h1> <div class="form-group"> <label>User Name.</label> <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" type="email"> </div> <div class="form-group"> <label>Password.</label> <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> </div> <button type="submit" class="btn btn-primary">Submit</button> </div> <div class="col col-md-1"></div> </div>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('dev-home-content', '<h1>This is Developer - Home</h1> <h4>Test Load Style Sheet and Java Script</h4> <yield></yield>', '', '', function(opts) {
});
riot.tag2('edl-admin-customer-edit-content', '<h2>Customer Information.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('edl-admin-customer-home-content', '<h2>Customer Home.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('edl-admin-customer-manage-content', '<h2>Customer Management.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('edl-admin-home-content', '<h2>EDL Administrator Home.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('edl-admin-staff-edit-content', '<h2>Edit Staff Information.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('edl-admin-staff-home-content', '<h2>Staff Home.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('edl-admin-staff-manage-content', '<h2>Staff Management.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('edl-staff-staff-edit-content', '<h2>Edit Staff Information.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('edl-supervisor-home-content', '<h2>EDL Supervisor Home.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('edl-supervisor-staff-edit-content', '<h2>Edit Staff Information.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('edl-supervisor-staff-home-content', '<h2>Staff Home.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});
riot.tag2('edl-supervisor-staff-manage-content', '<h2>Staff Management.</h2>', '', '', function(opts) {
        var self = this;

        this.on('mount', function () {
            app.contentService.on('contentchanged', self.changeContent);
            self.changeContent();

            self.update();
        });

        this.changeContent = function () {

            self.update();
        };
});