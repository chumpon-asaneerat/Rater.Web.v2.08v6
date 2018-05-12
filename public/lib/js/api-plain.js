function API() {

};

API.prototype.getLanguages = function (data) {
    /*
    var data = {
        "langId": "EN",
        "": "",
        "": ""
    };
    */
    var fn = $.ajax({
        type: 'GET',
        url: '/api/edl/languages/search',
        data: { "enabled": "1" },
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

API.prototype.signin = function (data) {
    var fn = $.ajax({
        type: 'POST',
        url: '/api/edl/signin',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

API.prototype.enableLanguage = function (data) {
    var fn = $.ajax({
        type: 'POST',
        url: '/api/edl/languages/enable',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

API.prototype.disableLanguage = function (data) {
    var fn = $.ajax({
        type: 'POST',
        url: '/api/edl/languages/disable',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

/*-----------------------------------------------*/
//  PeriodUnit

API.prototype.savePeriodUnit = function (data) {

    /*
   var data = {
       "periodUnitId": null,
       "descriptionEN": null
   };
   */

    var fn = $.ajax({
        type: 'POST',
        url: '/api/edl/periodunits/save',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

API.prototype.savePeriodUnitML = function (data) {

    /*
  var data = {
      "periodUnitId": null,
      "langId": null,
      "description": null
  };
  */

    var fn = $.ajax({
        type: 'POST',
        url: '/api/edl/periodunits/save-ml',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

API.prototype.getPeriodUnits = function (data) {
    /*
    var data = {
        "langId": "EN",
        "enabled": "1",
        "": ""
    };
    */
    var fn = $.ajax({
        type: 'GET',
        url: '/api/edl/periodunits/search',
        data: { "langId": "EN", "enabled": "1" },
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

/*-----------------------------------------------*/

/*-----------------------------------------------*/
//  LimitUnit

API.prototype.saveLimitUnit = function (data) {

    /*
   var data = {
       "limitUnitId": null,
       "descriptionEN": null,
       "unitTextEN": null;
   };
   */

    var fn = $.ajax({
        type: 'POST',
        url: '/api/edl/limitunits/save',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

API.prototype.saveLimitUnitML = function (data) {

    /*
  var data = {
       "limitUnitId": null,
       "langId": null,
       "description": null,
       "unitText": null;
  };
  */

    var fn = $.ajax({
        type: 'POST',
        url: '/api/edl/limitunits/save-ml',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

API.prototype.getLimitUnitds = function (data) {
    /*
    var data = {
        "langId": "EN",
        "enabled": "1",
        "": ""
    };
    */
    var fn = $.ajax({
        type: 'GET',
        url: '/api/edl/limitunits/search',
        data: { "langId": "EN", "enabled": "1" },
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

/*-----------------------------------------------*/

/*-----------------------------------------------*/
// MemberTypes
API.prototype.getMemberTypes = function (data) {
    /*
    var data = {
        "langId": "EN",
        "enabled": "1"
    };
    */
    var fn = $.ajax({
        type: 'GET',
        url: '/api/edl/membertypes/search',
        data: { "langId": "EN", "enabled": "1" },
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};
/*-----------------------------------------------*/

/*-----------------------------------------------*/
//  UserInfo

API.prototype.saveUserInfo = function (data) {

    /*
   var data = {
       "prefix": null,
       "firstName": null,
       "lastName": null,
       "userName": null,
       "passWord": null,
       "memberType": null
       "userId": null;
   };
   */

    var fn = $.ajax({
        type: 'POST',
        url: '/api/edl/users/save',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

API.prototype.saveUserInfoML = function (data) {

    /*
  var data = {
       "userId": null,
       "langId": null,
       "prefix": null,
       "firstName": null,
       "lastName": null;
  };
  */

    var fn = $.ajax({
        type: 'POST',
        url: '/api/edl/users/save-ml',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

API.prototype.getUserInfos = function (data) {
    /*
    var data = {
        "langId": "EN",
        "memberType": "1"
        "enabled": "1"
    };
    */
    var fn = $.ajax({
        type: 'GET',
        url: '/api/edl/users/search',
        data: { "langId": "EN", "memberType": "1", "enabled": "1" },
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

/*-----------------------------------------------*/

/*-----------------------------------------------*/
//  LicenseType

API.prototype.saveLicenseType = function (data) {

    /*
   var data = {
       "description": null,
       "adText": null,
       "periodUnitId": null,
       "numberOfUnit": null,
       "price": null,
       "currSymbol": null,
       "currText": null,
       "licenseTypeId": null;
   };
   */

    var fn = $.ajax({
        type: 'POST',
        url: '/api/edl/licensetypes/save',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

API.prototype.saveLicenseTypeML = function (data) {

    /*
  var data = {
       "licenseTypeId": null,
       "langId": null,
       "description": null,
       "adText": null,
       "price": null,
       "currSymbol": null,
       "currText": null;
  };
  */

    var fn = $.ajax({
        type: 'POST',
        url: '/api/edl/licensetypes/save-ml',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

API.prototype.getLicenseTypes = function (data) {
    /*
    var data = {
        "langId": "EN",
        "memberType": "1"
        "enabled": "1"
    };
    */
    var fn = $.ajax({
        type: 'GET',
        url: '/api/edl/licensetypes/search',
        data: { "langId": "EN", "memberType": "1", "enabled": "1" },
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

/*-----------------------------------------------*/

/*-----------------------------------------------*/
//  Licensefeatures

API.prototype.saveLicensefeature = function (data) {

    /*
   var data = {
       "licenseTypeId": null,
       "limitUnitId": null,
       "noOfLimit": null,
       "seq": null;
   };
   */

    var fn = $.ajax({
        type: 'POST',
        url: '/api/edl/licensefeatures/save',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

API.prototype.getLicensefeatures = function (data) {
    /*
    var data = {
        "langId": "EN",
        "licenseTypeId": "1";
    };
    */
    var fn = $.ajax({
        type: 'GET',
        url: '/api/edl/licensefeatures/search',
        data: { "langId": "EN", "licenseTypeId": "1" },
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

/*-----------------------------------------------*/

/*-----------------------------------------------*/
//  Customer

API.prototype.saveCustomer = function (data) {

    /*
   var data = {
       "customerName": null,
       "taxCode": null,
       "address1": null,
       "address2": null,
       "city": null,
       "province": null,
       "postalcode": null,
       "phone": null,
       "mobile": null,
       "fax": null,
       "email": null,
       "customerId": null;
   };
   */

    var fn = $.ajax({
        type: 'POST',
        url: '/api/edl/customers/save',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

API.prototype.saveCustomerML = function (data) {

    /*
  var data = {
       "customerId": null,
       "langId": null,
       "customerName": null,
       "taxCode": null,
       "address1": null,
       "address2": null,
       "city": null,
       "province": null,
       "postalcode": null;
  };
  */

    var fn = $.ajax({
        type: 'POST',
        url: '/api/edl/customers/save-ml',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

API.prototype.getCustomers = function (data) {
    /*
    var data = {
        "langId": "EN",
        "customerId": "1"
        "enabled": "1"
    };
    */
    var fn = $.ajax({
        type: 'GET',
        url: '/api/edl/customers/search',
        data: { "langId": "EN", "customerId": null, "enabled": "1" },
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

/*-----------------------------------------------*/

/*-----------------------------------------------*/
//  Branch

API.prototype.saveBranch = function (data) {

    /*
   var data = {
       "customerId": null,
       "branchName": null,
       "branchId": null;
   };
   */

    var fn = $.ajax({
        type: 'POST',
        url: '/api/branchs/save',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

API.prototype.saveBranchML = function (data) {

    /*
  var data = {
       "customerId": null,
       "branchId": null,
       "langId": null,
       "branchName": null;
  };
  */

    var fn = $.ajax({
        type: 'POST',
        url: '/api/branchs/save-ml',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

API.prototype.getBranchs = function (data) {
    /*
    var data = {
        "langId": "EN",
        "customerId": "1",
        "branchId": "1",
        "enabled": "1";
    };
    */
    var fn = $.ajax({
        type: 'GET',
        url: '/api/branchs/search',
        data: { "langId": "EN", "customerId": null, "branchId": null, "enabled": "1" },
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

/*-----------------------------------------------*/

/*-----------------------------------------------*/
//  MemberInfo

API.prototype.saveMemberInfo = function (data) {

    /*
   var data = {
       "customerId": null,
       "prefix": null,
       "firstName": null,
       "lastName": null,
       "userName": null,
       "passWord": null,
       "memberType": null,
       "tagId": null,
       "idCard": null,
       "employeeCode": null,
       "memberId": null;
   };
   */

    var fn = $.ajax({
        type: 'POST',
        url: '/api/members/save',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

API.prototype.saveMemberInfoML = function (data) {

    /*
  var data = {
       "customerId": null,
       "memberId": null,
       "langId": null,
       "prefix": null,
        "firstName": null,
       "lastName": null;
  };
  */

    var fn = $.ajax({
        type: 'POST',
        url: '/api/members/save-ml',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

API.prototype.getMemberInfos = function (data) {
    /*
    var data = {
        "langId": "EN",
        "customerId": "1",
        "memberId": "1",
        "enabled": "1";
    };
    */
    var fn = $.ajax({
        type: 'GET',
        url: '/api/members/search',
        data: { "langId": "EN", "customerId": null, "memberId": null, "enabled": "1" },
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

/*-----------------------------------------------*/

/*-----------------------------------------------*/
//  Org

API.prototype.saveOrg = function (data) {

    /*
   var data = {
       "customerId": null,
       "parentId": null,
       "branchId": null,
       "orgName": null,
       "orgId": null;
   };
   */

    var fn = $.ajax({
        type: 'POST',
        url: '/api/orgs/save',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

API.prototype.saveOrgML = function (data) {

    /*
  var data = {
       "customerId": null,
       "orgId": null,
       "langId": null,
       "orgName": null;
  };
  */

    var fn = $.ajax({
        type: 'POST',
        url: '/api/orgs/save-ml',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

API.prototype.getOrgs = function (data) {
    /*
    var data = {
        "langId": "EN",
        "customerId": null,
        "branchId": null,
        "orgId": null,
        "enabled": "1";
    };
    */
    var fn = $.ajax({
        type: 'GET',
        url: '/api/orgs/search',
        data: { "langId": "EN", "customerId": null, "branchId": null, "orgId": null, "enabled": "1" },
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

/*-----------------------------------------------*/

/*-----------------------------------------------*/
//  Vote

API.prototype.saveVote = function (data) {

    /*
   var data = {
        "customerId": null,
        "orgId": null,
        "branchId": null,
        "deviceId": null,
        "qSetId": null,
        "qSeq": null,
        "userId": null,
        "voteDate": null,
        "voteValue": null,
        "remark": null,
        "voteSeq": null;
   };
   */

    var fn = $.ajax({
        type: 'POST',
        url: '/api/votes/save',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

/*-----------------------------------------------*/

/*-----------------------------------------------*/
// registerCustomer & signIn

API.prototype.registerCustomer = function (data) {

    /*
   var data = {
       "customerName": null,
       "userName": null,
       "passWord": null;
   };
   */

    var fn = $.ajax({
        type: 'POST',
        url: '/api/edl/register',
        data: data,
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};

API.prototype.signIn = function (data) {
    /*
    var data = {
        "langId": "EN",
        "userName": null,
        "passWord": null,
        "customerId":null;
    };
    */
    var fn = $.ajax({
        type: 'GET',
        url: '/api/edl/signin',
        data: { "langId": "EN", "userName": null, "passWord": null, "customerId": null },
        dataType: 'json'
    });
    $.when(fn).done(function (r) {
        console.log(r);
    });
    //return fn;
};
