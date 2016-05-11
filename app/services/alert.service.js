System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AlertService;
    return {
        setters:[],
        execute: function() {
            AlertService = (function () {
                function AlertService() {
                }
                AlertService.prototype.alert = function (message) {
                    alertify.alert(message);
                };
                AlertService.prototype.confirm = function (message, callbackSuccess) {
                    alertify.confirm(message, callbackSuccess);
                };
                return AlertService;
            }());
            exports_1("AlertService", AlertService);
        }
    }
});
//# sourceMappingURL=alert.service.js.map