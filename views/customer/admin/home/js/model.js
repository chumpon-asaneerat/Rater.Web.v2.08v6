// The AdminHomeModelService class.
class AdminHomeModelService extends ClientPageModelService {
    constructor() {
        super();
        this.mountTags = 'admin-page';
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
    app.content.modelService = new AdminHomeModelService();
})();
