<default-services-home-content>

<section id="services">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="section-heading text-uppercase">{services.header.title}</h2>
                <h3 class="section-subheading text-muted">{services.header.text}</h3>
            </div>
        </div>
        <div class="row text-center">
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                    <i class="fa fa-circle fa-stack-2x text-primary"></i>
                    <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="service-heading">{services.ECom.title}</h4>
                <p class="text-muted">{services.ECom.text}</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                    <i class="fa fa-circle fa-stack-2x text-primary"></i>
                    <i class="fa fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="service-heading">{services.responsive.title}</h4>
                <p class="text-muted">{services.responsive.text}</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                    <i class="fa fa-circle fa-stack-2x text-primary"></i>
                    <i class="fa fa-lock fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="service-heading">{services.security.title}</h4>
                <p class="text-muted">{services.security.text}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 text-center">
                <img class="card-img-top" src="/public/assets/images/home/how-to-order.jpg" alt="...">
            </div>
        </div>
    </div>
</section>

    <script>
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
            //this.languageChanged();
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
            // render tag.
            self.update();
        };
    </script>


</default-services-home-content>