System.register(['angular2/core', 'angular2/router', '../config', '../services/deck.service'], function(exports_1, context_1) {
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
    var core_1, router_1, config_1, deck_service_1;
    var DecksComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (deck_service_1_1) {
                deck_service_1 = deck_service_1_1;
            }],
        execute: function() {
            DecksComponent = (function () {
                function DecksComponent(_deckService, _router) {
                    this._deckService = _deckService;
                    this._router = _router;
                }
                DecksComponent.prototype.ngOnInit = function () {
                    this.getAll();
                };
                DecksComponent.prototype.add = function () {
                    this._router.navigate(['Deck', { id: 0 }]);
                };
                DecksComponent.prototype.delete = function (deck) {
                    this._deckService.delete(deck._id).then(function () {
                        alert('a');
                    });
                };
                DecksComponent.prototype.edit = function () {
                };
                DecksComponent.prototype.getAll = function () {
                    var _this = this;
                    this._deckService.getAll().then(function (obj) {
                        _this.decks = obj;
                    });
                };
                DecksComponent.prototype.setThumbnail = function (deck) {
                    return 'url(' + config_1.Config.urlApi + 'card_images/' + deck._id + '.jpg' + ')';
                };
                DecksComponent = __decorate([
                    core_1.Component({
                        selector: 'decks',
                        templateUrl: 'app/templates/decks-component.html'
                    }), 
                    __metadata('design:paramtypes', [deck_service_1.DeckService, router_1.Router])
                ], DecksComponent);
                return DecksComponent;
            }());
            exports_1("DecksComponent", DecksComponent);
        }
    }
});
//# sourceMappingURL=decks.component.js.map