<default-confirm-content>
    
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">

                <form action="" method="POST" name="contact" id="contact">
                    <table width="70%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tr>
                            <td colspan="3">
                                <p></p>
                                <h3 align="center"> แจ้งปัญหาการใช้งาน </h3>
                                <p></p>
                            </td>
                        </tr>
                        <tr>
                            <td width="18%" align="right" valign="top">รายละเอียด&nbsp;</td>
                            <td colspan="2">
                                <textarea name="detail" rows="3" required="required" class="form-control" id="detail" placeholder="กรุณากรอกข้อมูล"></textarea>
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="right"> ชื่อ &nbsp;</td>
                            <td colspan="2">
                                <input name="qname" type="text" id="qname" class="form-control" placeholder="กรุณากรอกข้อมูล"
                                    required>
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="right"> E-mail &nbsp; </td>
                            <td width="31%">
                                <input name="email" type="email" id="Email" class="form-control" placeholder="เช่น abc@gmail.com "
                                    required>
                            </td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="center">&nbsp;</td>
                            <td colspan="3" align="center">&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="center">&nbsp;</td>
                            <td colspan="3" align="left">

                                <input type="reset" name="reset" id="reset" class="btn btn-warning btn-sm" value="Reset"> &nbsp;&nbsp; &nbsp;
                                <input type="submit" name="regis" id="regis" class="btn btn-info btn-sm" value="แจ้งปัญหา">

                            </td>
                        </tr>
                        <tr>
                            <td colspan="4" align="center"></td>
                        </tr>
                        <tr>
                            <td align="right">
                                <br />
                            </td>
                            <td>&nbsp;</td>
                            <td width="10%">&nbsp;</td>
                            <td width="41%">&nbsp;</td>
                        </tr>
                    </table>
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