// The RegisterModel class.
class SignInModelService extends ClientPageModelService {
    //-- override method(s).
    loadPage(langId) {
        super.loadPage(langId); // call base class.
        let self = this;
        this.loadModel(langId, 'signin', (r) => {
            //console.log(langId, 'signin');
            //console.log(r);
        });
    };
};

; (function () {
    // Inject Model Service.
    app.content.ModelService = new SignInModelService();
})();