// The DeviceHomeModelService class.
class DeviceHomeModelService extends ClientPageModelService {
    constructor() {
        super();
        this.mountTags = 'device-page';
    }

    //-- override method(s).
    loadPage(langId) {
        super.loadPage(langId); // call base class.
        /*
        let self = this;
        this.loadModel(langId, 'some-special-content', (r) => {
            //console.log(r);
        });
        */
    };
};

; (function () {
    // Inject Model Service.
    app.content.modelService = new DeviceHomeModelService();
})();
