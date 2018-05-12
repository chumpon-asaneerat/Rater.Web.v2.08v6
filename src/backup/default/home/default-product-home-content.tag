<default-product-home-content>
    
<section id="product" class="bg-primary">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="thumbnail">
                    <img class="card-img-top" src="/public/assets/images/home/product/p1.jpg" alt="...">
                    <div class="caption">
                        <h3> {product.pro1.price}</h3>
                        <p>{product.pro1.doc} </p>
                        <p>
                            <a href="/confirm" class="btn btn-info" role="button" >
                                 {product.defbtn.buy}
                            </a>
                            <a href="/itemdocument" class="btn btn-primary" role="button">
                                 {product.defbtn.product}</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="thumbnail">
                    <img class="card-img-top" src="/public/assets/images/home/product/p2.jpg" alt="...">
                    <div class="caption">
                        <h3> {product.pro2.price}</h3>
                        <p>{product.pro2.doc} </p>
                        <p>
                            <a href="#" class="btn btn-primary" role="button">
                                 {product.defbtn.buy}
                            </a>
                            <a href="#" class="btn btn-primary" role="button">
                                 {product.defbtn.product}</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="thumbnail">
                    <img class="card-img-top" src="/public/assets/images/home/product/p3.jpg" alt="...">
                    <div class="caption">
                        <h3> {product.pro3.price}</h3>
                        <p>{product.pro3.doc} </p>
                        <p>
                            <a href="#" class="btn btn-primary" role="button">
                                 {product.defbtn.buy}
                            </a>
                            <a href="#" class="btn btn-primary" role="button">
                                 {product.defbtn.product}</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="thumbnail">
                    <img class="card-img-top" src="/public/assets/images/home/product/p4.jpg" alt="...">
                    <div class="caption">
                        <h3> {product.pro4.price}</h3>
                        <p>{product.pro4.doc} </p>
                        <p>
                            <a href="#" class="btn btn-primary" role="button">
                                 {product.defbtn.buy}
                            </a>
                            <a href="#" class="btn btn-primary" role="button">
                                 {product.defbtn.product}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>

<script>
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
        //this.languageChanged();
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
        // render tag.
        self.update();
    };
</script>


</default-product-home-content>