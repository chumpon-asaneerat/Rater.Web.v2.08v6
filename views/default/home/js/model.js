class DefaultHomeModel extends ContentModel {
    //-- constructor.
    constructor() {        
        super();
    };

    //-- public, override methods.
    loadModels(langId, model) {
        console.log('Request to load models.');
    };
};

; (function () {
    // Inject Model Service.
    console.log('Inject "Default-Home" Model Service.');
    app.content.ModelService = new DefaultHomeModel();
})();
