// The DevHomeModelService class.
class DevHomeModelService extends ClientPageModelService {
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
    // Inject Content Model.
    app.content.ModelService = new DevHomeModelService();
})();
