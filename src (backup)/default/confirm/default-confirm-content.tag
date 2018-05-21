<default-confirm-content>
    
<body>
    <div class="container" style="padding-top:100px">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-5" style="background-color:#f4f4f4">
                <h3 align="center" style="color:green">
                    <span class="glyphicon glyphicon-shopping-cart"> </span>
                    confirm cart </h3>
                <form name="formlogin" action="" method="POST" id="login" class="form-horizontal">
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input type="text" name="name" class="form-control" required placeholder="ชื่อ-สกุล" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12">
                            <textarea name="address" class="form-control" rows="3" required placeholder="ที่อยู่ในการส่งสินค้า"></textarea>
                        </div>

                    </div>
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input type="text" name="phone" class="form-control" required placeholder="เบอร์โทรศัพท์" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input type="email" name="name" class="form-control" required placeholder="อีเมล์" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12" align="center">
                            <button type="submit" class="btn btn-primary btn-lg" id="btn">
                                ยืนยันสั่งซื้อ </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </body>

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
</default-confirm-content>