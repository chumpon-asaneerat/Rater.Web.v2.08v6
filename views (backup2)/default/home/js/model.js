// The DefaultHomeModelService class.
class DefaultHomeModelService extends ClientPageModelService {
    constructor() {
        super();
        this.mountTags = 'default-page';
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
    app.content.modelService = new DefaultHomeModelService();
})();
