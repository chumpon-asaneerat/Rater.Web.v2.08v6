// The RegisterModelService class.
class RegisterModelService extends ClientPageModelService {
    //-- override method(s).
    loadPage(langId) {        
        super.loadPage(langId); // call base class.
        let self = this;
        this.loadModel(langId, 'register', (r) => {
            //console.log(langId, 'register');
            //console.log(r);
        });
    };
};

; (function () {
    // Inject Model Service.
    app.content.ModelService = new RegisterModelService();
})();