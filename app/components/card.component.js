System.register(['angular2/core', 'angular2/router', '../services/card.service', '../model/card', '../pipes/enum.pipe', '../model/enum/attribute_card', '../model/enum/type'], function(exports_1, context_1) {
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
    var core_1, router_1, card_service_1, card_1, enum_pipe_1, attribute_card_1, type_1;
    var CardComponent;
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
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (enum_pipe_1_1) {
                enum_pipe_1 = enum_pipe_1_1;
            },
            function (attribute_card_1_1) {
                attribute_card_1 = attribute_card_1_1;
            },
            function (type_1_1) {
                type_1 = type_1_1;
            }],
        execute: function() {
            CardComponent = (function () {
                function CardComponent(_routeParams, _router, _cardService) {
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._cardService = _cardService;
                    this.attribute_card = attribute_card_1.AttributeCard;
                    this.type = type_1.Type;
                }
                CardComponent.prototype.ngOnInit = function () {
                    this.card = new card_1.Card();
                    var id = this._routeParams.get('id');
                    if (id) {
                    }
                };
                CardComponent.prototype.save = function () {
                    this._cardService.save(this.card).then(function () {
                        alert('Salvo');
                    });
                };
                CardComponent.prototype.cancel = function () {
                    this._router.navigate(['Cards']);
                };
                CardComponent = __decorate([
                    core_1.Component({
                        selector: 'card',
                        templateUrl: 'app/templates/card-component.html',
                        pipes: [enum_pipe_1.EnumPipe]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router, card_service_1.CardService])
                ], CardComponent);
                return CardComponent;
            }());
            exports_1("CardComponent", CardComponent);
        }
    }
});
//# sourceMappingURL=card.component.js.map