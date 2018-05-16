// The DefaultHomeModelService class.
class DefaultHomeModelService extends ClientPageModelService {
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
    app.content.ModelService = new DefaultHomeModelService();
})();
