System.register(['angular2/http', 'angular2/core', '../config', '../common/request'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, config_1, request_1;
    var CardService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (request_1_1) {
                request_1 = request_1_1;
            }],
        execute: function() {
            CardService = (function () {
                function CardService(_http) {
                    this._http = _http;
                    this.urlCard = config_1.Config.urlApi + 'card/';
                }
                CardService.prototype.getStatus = function () {
                    var url = this.urlCard + 'status';
                    return request_1.CommonRequest.get(this._http, url);
                };
                CardService.prototype.getAll = function () {
                    var url = this.urlCard + 'all';
                    return request_1.CommonRequest.get(this._http, url);
                };
                CardService.prototype.save = function (card) {
                    var url = this.urlCard + 'save';
                    return request_1.CommonRequest.post(this._http, url, card);
                };
                CardService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CardService);
                return CardService;
            }());
            exports_1("CardService", CardService);
        }
    }
});
//# sourceMappingURL=card.service.js.map