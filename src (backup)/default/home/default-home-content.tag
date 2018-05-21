<default-home-content>
    <div class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <img class="site_logo" alt="Site Logo" src="/public/assets/images/home/logo.jpg" />
            </a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#about">{ content.mainNav.aboutLink }</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#services">{ content.mainNav.serviceLink }</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#product">Product</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="javascript:void(0);" onclick="{ selectLanguage }" langId="EN">EN</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="javascript:void(0);" onclick="{ selectLanguage }" langId="TH">TH</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <header class="masthead text-center text-white d-flex">
        <div class="container my-auto">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <h1 class="text-uppercase">
                        <strong>{ content.header.title }</strong>
                    </h1>
                    <hr>
                </div>
                <div class="col-lg-8 mx-auto">
                    <p class="text-faded mb-5">{ content.header.text }</p>
                    <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Learn More</a>
                </div>
            </div>
        </div>
    </header>
    
    <section id="about">
        <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img class="d-block img-fluid" src="/public/assets/images/home/1.png" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block img-fluid" src="/public/assets/images/home/2.png" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block img-fluid" src="/public/assets/images/home/3.png" alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </section>
    
    <section id="services">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading text-uppercase">Services</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="service-heading">E-Commerce</h4>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum
                        ex magni, dicta impedit.</p>
                </div>
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-laptop fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="service-heading">Responsive Design</h4>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum
                        ex magni, dicta impedit.</p>
                </div>
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-lock fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="service-heading">Web Security</h4>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum
                        ex magni, dicta impedit.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 text-center">
                    <img class="card-img-top" src="/public/assets/images/home/how-to-order.jpg" alt="...">
                </div>
            </div>
        </div>
    </section>
    
    <!-- About product -->
    <section id="product" class="bg-primary">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="thumbnail">
                        <img class="card-img-top" src="/public/assets/images/home/product/p1.jpg" alt="...">
                        <div class="caption">
                            <h3>500 บาท/กก.</h3>
                            <p>Guatemala Casi Cielo® </p>
                            <p>
                                <a href="#" class="btn btn-info" role="button">
                                    สั่งซื้อ
                                </a>
                                <a href="#" class="btn btn-primary" role="button">
                                    รายละเอียดสินค้า</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="thumbnail">
                        <img class="card-img-top" src="/public/assets/images/home/product/p2.jpg" alt="...">
                        <div class="caption">
                            <h3>500 บาท/กก.</h3>
                            <p>Africa Kitamu </p>
                            <p>
                                <a href="#" class="btn btn-primary" role="button">
                                    สั่งซื้อ
                                </a>
                                <a href="#" class="btn btn-primary" role="button">
                                    รายละเอียดสินค้า</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="thumbnail">
                        <img class="card-img-top" src="/public/assets/images/home/product/p3.jpg" alt="...">
                        <div class="caption">
                            <h3>250 บาท/กก.</h3>
                            <p>Three Region Blend </p>
                            <p>
                                <a href="#" class="btn btn-primary" role="button">
                                    สั่งซื้อ
                                </a>
                                <a href="#" class="btn btn-primary" role="button">
                                    รายละเอียดสินค้า</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="thumbnail">
                        <img class="card-img-top" src="/public/assets/images/home/product/p4.jpg" alt="...">
                        <div class="caption">
                            <h3>850 บาท/กก.</h3>
                            <p>Pike Place® Roast </p>
                            <p>
                                <a href="#" class="btn btn-primary" role="button">
                                    สั่งซื้อ
                                </a>
                                <a href="#" class="btn btn-primary" role="button">
                                    รายละเอียดสินค้า</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    
    <!-- About contact -->
    <section id="contact">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-12 col-xs-12 pull-left">
                    <h3>About EDL</h3>
                    <p>จากความตั้งใจที่อยากให้วงการอิเล็กทรอนิกส์ในบ้านเรามีผู้ผลิตแผ่นวงจรพิมพ์ (PCB) ที่มีความรู้และเข้าใจในวงจรอิเล็กทรอนิกส์เป็นอย่างดี
                        สามารถออกแบบแผ่นวงจรพิมพ์ ตามความต้องการของลูกค้าและช่วยแนะนำในด้านเทคนิค เพื่อให้แผ่นวงจรพิมพ์ ที่ลูกค้าสั่งผลิตเป็นแผ่นที่มีคุณภาพและทำงานได้จริง
                        ด้วยความมุ่งมั่นและตั้งใจจริง จากแนวคิดดังกล่าว ในปี พ.ศ. 2536 บริษัทของเราจึงถือกำเนิดขึ้นในนาม “ บริษัท
                        อีดีแอล จำกัด (EDL Co., Ltd.) “ EDL มีที่มาจาก คำว่า Electronics Design Laboratory ซึ่งหมายถึงศูนย์รวมการออกแบบและวิจัยด้านอิเล็กทรอนิกส์
                        จากวันนั้นจนถึงวันนี้ บริษัทได้ออกแบบและผลิตแผ่นวงจรพิมพ์ และงานด้านอิเล็กทรอนิกส์ที่มีคุณภาพ เพื่อบริการแก่ลูกค้าเป็นเวลายาวนานกว่า
                        23 ปี</p>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12 pull-right">
                    <figure>
                        <img class="card-img-top" src="/public/assets/images/home/about_us.jpg" alt="...">
                    </figure>
                </div>
    
                <div class="col-lg-8 mx-auto text-center">
                    <form enctype="multipart/form-data" id="form-application" action="success" method="post">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="location-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.496625564328!2d100.592086!3d13.809191000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29da6aaf3c0b7%3A0xbdb472cda587612a!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4reC4teC4lOC4teC5geC4reC4pSDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sth!4v1429980660184"
                                        width="100%" height="550" frameborder="0" style="border:0"></iframe>
                                    <div class="bottom_strip"></div>
                                    <div class="bottom_shape two"></div>
                                    <small>
                                        <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Washington,+DC,+United+States&amp;aq=2&amp;oq=was&amp;sll=40.714353,-74.005973&amp;sspn=0.765069,1.674042&amp;ie=UTF8&amp;hq=&amp;hnear=Washington,+District+of+Columbia&amp;t=m&amp;z=11&amp;ll=38.907231,-77.036464"
                                            style="color:#0000FF;text-align:left">View Larger Map</a>
                                    </small>
                                </div>
                                <hr>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-12">
                                <div class="about-us">
                                    <h3>บริษัท อีดีแอล จำกัด</h3>
                                </div>
                                <div class="contact-us">
                                    <p>
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>25,31,33 ซอยลาดพร้าววังหิน 26 ถนนลาดพร้าววังหิน แขวงลาดพร้าว เขตลาดพร้าว กทม. 10230
                                    </p>
                                    <p>
                                        <i class="fa fa-envelope" aria-hidden="true"></i>sales@edl.co.th</p>
                                    <p>
                                        <i class="fa fa-phone" aria-hidden="true"></i>+662 - 935 - 8615-8</p>
                                    <p>
                                        <i class="fa fa-fax" aria-hidden="true"></i>+662 - 935 - 8619</p>
                                    <p>เปิดทำการเวลา 8.30 - 17.30 น. จันทร์ - เสาร์</p>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-12 padL0 padR0">
                                <div class="comment-review">
                                    <div class="col-md-12 col-sm-12 col-xs-12 marB30">
                                        <input type="text" name="name" id="name" placeholder="Name">
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-xs-12 marB30">
                                        <input type="text" name="email" id="email" placeholder="Email">
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-xs-12 marB30">
                                        <input type="text" name="phone" id="phone" placeholder="Phone">
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-xs-12 marB30">
                                        <input type="text" name="subject" id="subject" placeholder="Subject">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-12 padL0 padR0">
                                <div class="col-md-12 col-sm-12 col-xs-12 marB20">
                                    <textarea placeholder="Message" rows="7" name="detail" id="detail"></textarea>
                                </div>
                                <div class="col-md-12 col-sm-12 col-xs-12 marB30">
                                    <button type="submit" class="itg-button send-btn">send message</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>    
    
    <footer class="p-3 mb-2 bg-secondary text-white">
        <div class="main-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-12 col-xs-12 pull-left">
                        <div class="footer-part">
                            <h5>about us</h5>
                            <div class="footer-list">
                                <div class="fb-page" data-href="https://www.facebook.com/edlpcb/" data-tabs="timeline" data-height="270" data-small-header="false"
                                    data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                                    <blockquote cite="https://www.facebook.com/edlpcb/" class="fb-xfbml-parse-ignore">
                                        <a href="https://www.facebook.com/edlpcb/">EDL Co., Ltd. - บริษัท อีดีแอล จำกัด</a>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12 pull-left">
                        <div class="footer-part">
                            <img class="card-img-top" src="/public/assets/images/home/logo-edl-white.png" />
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12 pull-right">
                        <div class="footer-part">
                            <h5>Contact Us</h5>
    
                            <div class="footer-list">
                                <h3>บริษัท อีดีแอล จำกัด</h3>
                                <p>25,31,33 ซอยลาดพร้าววังหิน 26 ถนนลาดพร้าววังหิน
                                    <br> แขวงลาดพร้าว เขตลาดพร้าว กทม. 10230
                                    <br> โทรศัพท์ +662 - 935 - 8615-8
                                    <br> โทรสาร +662 - 935 - 8619
                                    <br> email sales@edl.co.th
                                    <br> เปิดทำการเวลา 8.30 - 17.30 น. จันทร์ - เสาร์
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        
    <script>
        var self = this;

        this.contents = {};
        /*
        this.contents["EN"] = {
            "mainNav": {
                "aboutLink": "เกี่ยวกับ",
                "serviceLink": "Service"
            },
            "header": {
                "title": "สิ่งที่เราทำ",
                "text": "THE EDL Company รับผลิตและออกแบบแผ่นวงจรพิมพ์(PCB) ทั้งงานต้นแบบ งานตามตัวอย่าง งานเร่งด่วน(PCB Express) ไปจนถึงงานผลิตจำนวนมาก ชนิด Single Side, Double Side(PTH) ด้วยคุณสมบัติต่างๆ เช่น HAL Lead - Free, Electro Chemical Tin Plating, Gold Plating, Flux Coating, Solder Mask สีต่างๆ ยังสามารถบริการ Rounting และ V-Cut ได้เป็นต้น นอกเหนือจากงานผลิต PCB แล้ว ยังมีงานด้านอิเล็กทรอนิกส์ไว้บริการอีกหลากหลายอย่างครบวงจร เช่น รับออกแบบและผลิตแผงวงจรปุ่มกด, Sticker และงาน Membrane switch ทุกชนิด รวมถึงงานประกอบอุปกรณ์ลงบนแผงวงจร(PCBA) พร้อมทั้งสามารถจัดหาอุปกรณ์สำหรับลูกค้าได้อีกด้วย โดยงานทุกชนิดไม่จำกัดจำนวนการสั่งขั้นต่ำ"
            }
        }
        this.content = this.contents["EN"];
        */
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
            //this.languageChanged();
            self.update();
        });
    

        this.selectLanguage = function (e) {
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
            // render tag.
            self.update();
        };
    </script>
</default-home-content>