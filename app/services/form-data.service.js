System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FormDataService;
    return {
        setters:[],
        execute: function() {
            FormDataService = (function () {
                function FormDataService() {
                }
                FormDataService.prototype.buildToImage = function (image, id) {
                    var formData = new FormData();
                    formData.append('picture', image);
                    formData.append('id', id);
                    return formData;
                };
                return FormDataService;
            }());
            exports_1("FormDataService", FormDataService);
        }
    }
});
//# sourceMappingURL=form-data.service.js.map