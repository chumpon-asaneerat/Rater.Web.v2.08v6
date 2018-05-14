// The DevHomeModel class.
class DevHomeModel extends ContentModel {
    //-- constructor.
    constructor() {        
        super();
    };

    //-- private methods.
    loadPage(langId) {
        let self = this;        
        this.loadModel(langId, 'page', (r) => {
            document.title = self.model[langId].page.header.title;
        });
        this.loadModel(langId, 'footer', (r) => {

        });
    };

    //-- public, override methods.
    loadModels(langId) {
        //console.log('Request to load models.');
        this.loadPage(langId);
    };
};

; (function () {
    // Inject Content Model.
    //console.log('Inject "Dev-Home" Content Model.');
    app.content.ContentModel = new DevHomeModel();
})();
