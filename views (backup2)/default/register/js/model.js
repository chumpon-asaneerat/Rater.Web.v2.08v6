// The RegisterModelService class.
class RegisterModelService extends ClientPageModelService {
    constructor() {
        super();
        this.mountTags = 'default-page';
    }

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
    app.content.modelService = new RegisterModelService();
})();