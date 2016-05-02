System.register(['angular2/core', 'angular2/router', '../pipes/enum.pipe', '../model/deck', '../services/deck.service', '../model/enum/deck_type'], function(exports_1, context_1) {
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
    var core_1, router_1, enum_pipe_1, deck_1, deck_service_1, deck_type_1;
    var DeckComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (enum_pipe_1_1) {
                enum_pipe_1 = enum_pipe_1_1;
            },
            function (deck_1_1) {
                deck_1 = deck_1_1;
            },
            function (deck_service_1_1) {
                deck_service_1 = deck_service_1_1;
            },
            function (deck_type_1_1) {
                deck_type_1 = deck_type_1_1;
            }],
        execute: function() {
            DeckComponent = (function () {
                function DeckComponent(_routeParams, _router, _deckService) {
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._deckService = _deckService;
                    this._imageChanged = false;
                    this.deck = new deck_1.Deck();
                    this.deck_type = deck_type_1.DeckType;
                }
                DeckComponent.prototype.ngOnInit = function () {
                    var id = this._routeParams.get('id');
                    if (!id) {
                    }
                };
                DeckComponent.prototype.cancel = function () {
                    this._router.navigate(['Decks']);
                };
                DeckComponent.prototype.changeImage = function (files) {
                    if (files.length > 0) {
                        this._picture = files[0];
                    }
                    else {
                        this._picture = null;
                    }
                    this._imageChanged = true;
                };
                DeckComponent.prototype.save = function () {
                    var _this = this;
                    this._deckService.save(this.deck, this._imageChanged, this._picture).then(function () {
                        _this._router.navigate(['Decks']);
                    });
                };
                DeckComponent = __decorate([
                    core_1.Component({
                        selector: 'deck',
                        templateUrl: 'app/templates/deck-component.html',
                        pipes: [enum_pipe_1.EnumPipe]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router, deck_service_1.DeckService])
                ], DeckComponent);
                return DeckComponent;
            }());
            exports_1("DeckComponent", DeckComponent);
        }
    }
});
//# sourceMappingURL=deck.component.js.map