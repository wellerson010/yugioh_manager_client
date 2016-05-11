System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FilePreviewService;
    return {
        setters:[],
        execute: function() {
            FilePreviewService = (function () {
                function FilePreviewService() {
                }
                FilePreviewService.prototype.getUrl = function (file) {
                    return new Promise(function (resolve, reject) {
                        var reader = new FileReader();
                        reader.onload = function (event) {
                            resolve(event.target.result);
                        };
                        reader.readAsDataURL(file);
                    });
                };
                return FilePreviewService;
            }());
            exports_1("FilePreviewService", FilePreviewService);
        }
    }
});
//# sourceMappingURL=file-preview-service.js.map