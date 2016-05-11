System.register(['angular2/http', '../config', 'angular2/core', '../common/request', './form-data.service'], function(exports_1, context_1) {
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
    var http_1, config_1, core_1, request_1, form_data_service_1;
    var DeckService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (request_1_1) {
                request_1 = request_1_1;
            },
            function (form_data_service_1_1) {
                form_data_service_1 = form_data_service_1_1;
            }],
        execute: function() {
            DeckService = (function () {
                function DeckService(_http, _formDataService) {
                    this._http = _http;
                    this._formDataService = _formDataService;
                    this.urlDeck = config_1.Config.urlApi + 'deck';
                }
                DeckService.prototype.delete = function (id) {
                    var _this = this;
                    var url = this.urlDeck + '/delete';
                    return request_1.CommonRequest.delete(this._http, url, { id: id }).then(function () {
                        for (var i = 0; i < _this.decks.length; i++) {
                            if (_this.decks[i]._id == id) {
                                _this.decks.splice(i, 1);
                                break;
                            }
                        }
                    });
                };
                DeckService.prototype.get = function (id) {
                    return request_1.CommonRequest.get(this._http, this.urlDeck, { id: id });
                };
                DeckService.prototype.getAll = function (forceRefresh) {
                    var _this = this;
                    if (!this.decks || forceRefresh) {
                        var url = this.urlDeck + '/all';
                        request_1.CommonRequest.get(this._http, url).then(function (decks) {
                            _this.decks = decks;
                        });
                    }
                };
                DeckService.prototype.refresh = function () {
                    this.getAll(true);
                };
                DeckService.prototype.save = function (deck, imageChanged, picture) {
                    var _this = this;
                    var url = this.urlDeck + '/save';
                    return request_1.CommonRequest.post(this._http, url, deck).then(function (data) {
                        var id = data.id;
                        if (imageChanged) {
                            if (picture) {
                                var formData = _this._formDataService.buildToImage(picture, id);
                                return _this.uploadImage(formData);
                            }
                            else {
                            }
                        }
                    });
                };
                DeckService.prototype.uploadImage = function (data) {
                    var url = this.urlDeck + '/uploadImage';
                    return request_1.CommonRequest.postFormData(url, data);
                };
                DeckService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, form_data_service_1.FormDataService])
                ], DeckService);
                return DeckService;
            }());
            exports_1("DeckService", DeckService);
        }
    }
});
//# sourceMappingURL=deck.service.js.map