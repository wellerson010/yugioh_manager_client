System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var urlApi, Config;
    return {
        setters:[],
        execute: function() {
            urlApi = 'http://localhost:3000/';
            exports_1("Config", Config = {
                urlApi: urlApi,
                urlImageNotFound: urlApi + 'common_images/no-image.png',
                urlDeckImage: urlApi + 'deck_images/'
            });
        }
    }
});
//# sourceMappingURL=config.js.map