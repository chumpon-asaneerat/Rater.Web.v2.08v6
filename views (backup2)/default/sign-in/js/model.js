// The RegisterModel class.
class SignInModelService extends ClientPageModelService {
    constructor() {
        super();
        this.mountTags = 'default-page';
    }

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
    app.content.modelService = new SignInModelService();
})();