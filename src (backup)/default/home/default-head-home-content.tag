<default-head-home-content>
    
<header class="masthead text-center text-white d-flex">
    <div class="container my-auto">
        <div class="row">
            <div class="col-lg-10 mx-auto">
                <h1 class="text-uppercase">
                    <strong>{ head.header.title }</strong>
                </h1>
                <hr>
            </div>
            <div class="col-lg-8 mx-auto">
                <p class="text-faded mb-5">{ head.header.text }</p>
                <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">{ head.header.learn }</a>
            </div>
        </div>
    </div>
</header>

<script>
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
        //this.languageChanged();
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
        // render tag.
        self.update();
    };
</script>


</default-head-home-content>