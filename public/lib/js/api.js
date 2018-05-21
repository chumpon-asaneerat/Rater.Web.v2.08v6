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
        return []
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