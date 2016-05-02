System.register(['angular2/core', 'angular2/router', '../services/card.service'], function(exports_1, context_1) {
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
    var core_1, router_1, card_service_1;
    var CardsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (card_service_1_1) {
                card_service_1 = card_service_1_1;
            }],
        execute: function() {
            CardsComponent = (function () {
                function CardsComponent(_cardService, _router) {
                    this._cardService = _cardService;
                    this._router = _router;
                }
                CardsComponent.prototype.add = function () {
                    this._router.navigate(['Card', { id: 0 }]);
                };
                CardsComponent.prototype.ngOnInit = function () {
                    this.getAll();
                };
                CardsComponent.prototype.getAll = function () {
                    var _this = this;
                    this._cardService.getAll().then(function (obj) {
                        _this.cards = obj;
                    });
                };
                CardsComponent = __decorate([
                    core_1.Component({
                        selector: 'cards',
                        templateUrl: 'app/templates/cards-component.html',
                    }), 
                    __metadata('design:paramtypes', [card_service_1.CardService, router_1.Router])
                ], CardsComponent);
                return CardsComponent;
            }());
            exports_1("CardsComponent", CardsComponent);
        }
    }
});
//# sourceMappingURL=cards.component.js.map