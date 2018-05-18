class API {
    /* common ajax related functions. */
    static get ajax() {
        return {
            get(url, data) {
                return $.ajax({ type: 'GET', dataType: 'json', url: url, data: data })
            },
            post(url, data) {
                return $.ajax({ type: 'POST', dataType: 'json', url: url, data: data })
            }
        }
    }

    static get functions() {
        return [
            /* error messages */
            { name: "getErrorMessages", url: "/api/edl/errors/search" },
            { name: "saveErrorMessage", url: "/api/edl/errors/save" },
            { name: "saveErrorMessageML", url: "/api/edl/errors/save-ml" },
            /* languages */
            { name: "getLanguages", url: "/api/edl/languages/search" },
            { name: "enableLanguage", url: "/api/edl/languages/enable" },
            { name: "disableLanguage", url: "/api/edl/languages/disable" },
            /* period units */
            { name: "savePeriodUnit", url: "/api/edl/periodunits/save" },
            { name: "savePeriodUnitML", url: "/api/edl/periodunits/save-ml" },
            { name: "getPeriodUnits", url: "/api/edl/periodunits/search" },
            /* limit units */
            { name: "saveLimitUnit", url: "/api/edl/limitunits/save" },
            { name: "saveLimitUnitML", url: "/api/edl/limitunits/save-ml" },
            { name: "getLimitUnitds", url: "/api/edl/limitunits/search" },
            /* member types */
            { name: "getMemberTypes", url: "/api/edl/membertypes/search" },
            /* user infos */
            { name: "saveUserInfo", url: "/api/edl/users/save" },
            { name: "saveUserInfoML", url: "/api/edl/users/save-ml" },
            { name: "getUserInfos", url: "/api/edl/users/search" },
            /* license types */
            { name: "saveLicenseType", url: "/api/edl/licensetypes/save" },
            { name: "saveLicenseTypeML", url: "/api/edl/licensetypes/save-ml" },
            { name: "getLicenseTypes", url: "/api/edl/licensetypes/search" },
            /* license features */
            { name: "saveLicensefeature", url: "/api/edl/licensefeatures/save" },
            { name: "getLicensefeatures", url: "/api/edl/licensefeatures/search" },
            /* licenses */
            { name: "getLicenses", url: "/api/edl/licenses/search" },
            /* customers */
            { name: "saveCustomer", url: "/api/edl/customers/save" },
            { name: "saveCustomerML", url: "/api/edl/customers/save-ml" },
            { name: "getCustomers", url: "/api/edl/customers/search" },
            /* branchs */
            { name: "saveBranch", url: "/api/branchs/save" },
            { name: "saveBranchML", url: "/api/branchs/save-ml" },
            { name: "getBranchs", url: "/api/branchs/search" },
            /* member infos */
            { name: "saveMemberInfo", url: "/api/members/save" },
            { name: "saveMemberInfoML", url: "/api/members/save-ml" },
            { name: "getMemberInfos", url: "/api/members/search" },
            /* orgs */
            { name: "saveOrg", url: "/api/orgs/save" },
            { name: "saveOrgML", url: "/api/orgs/save-ml" },
            { name: "getOrgs", url: "/api/orgs/search" },
            /* qsets */
            { name: "saveQSet", url: "/api/qsets/save" },
            { name: "saveQSetML", url: "/api/qsets/save-ml" },
            { name: "getQSets", url: "/api/qsets/search" },
            /* qslides */
            { name: "saveQSlide", url: "/api/qslides/save" },
            { name: "saveQSlideML", url: "/api/qslides/save-ml" },
            { name: "getQSlides", url: "/api/qslides/search" },
            /* qslideItems */
            { name: "saveQSlideItem", url: "/api/qslideitems/save" },
            { name: "saveQSlideItemML", url: "/api/qslideitems/save-ml" },
            { name: "getQSlideItems", url: "/api/qslideitems/search" },
            /* devices */
            /* votes */
            { name: "saveVote", url: "/api/votes/save" },
            /* register/signIn/getUserHomeUrl */
            { name: "register", url: "/api/edl/register" },
            { name: "signIn", url: "/api/edl/signin" },
            { name: "getUserHomeUrl", url: "/api/edl/utils/userhome" },
            /* reports */
            { name: "getRawVotes", url: "/api/reports/raw-votes/search" },
            { name: "getVoteSummaries", url: "/api/reports/vote-summaries/search" },
            /* page content model */
            { name: "getModel", url: API.getUrl("models") }
        ]
    };
    
    static getUrl(relUrl) {
        let result = window.location.pathname;
        if (!result.endsWith('/')) {
            if (!relUrl.startsWith('/')) {
                result = result + '/' + relUrl;
            }
            else {
                result = result + relUrl;
            }
        }
        else {
            if (!relUrl.startsWith('/')) {
                result = result + relUrl;
            }
            else {
                result = result + relUrl.substring(1);
            }
        }
        //console.log(window.location);
        return result;
    };

    constructor() {
        let self = this;
        API.functions.forEach(fn => {
            self.__proto__[fn.name] = function (data) { return API.ajax.post(fn.url, data) };
        });
    }
}

;(function() {
    window.api = window.api || new API();
})();