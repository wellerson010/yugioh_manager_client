System.register(['angular2/core', '../pipes/my-date.pipe', 'angular2/router', '../config', '../services/deck.service', '../services/alert.service'], function(exports_1, context_1) {
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
    var core_1, my_date_pipe_1, router_1, config_1, deck_service_1, alert_service_1;
    var DecksComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (my_date_pipe_1_1) {
                my_date_pipe_1 = my_date_pipe_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (deck_service_1_1) {
                deck_service_1 = deck_service_1_1;
            },
            function (alert_service_1_1) {
                alert_service_1 = alert_service_1_1;
            }],
        execute: function() {
            DecksComponent = (function () {
                function DecksComponent(_deckService, _router, _alertService) {
                    this._deckService = _deckService;
                    this._router = _router;
                    this._alertService = _alertService;
                }
                DecksComponent.prototype.ngOnInit = function () {
                    this.getAll();
                };
                Object.defineProperty(DecksComponent.prototype, "decks", {
                    get: function () {
                        return this._deckService.decks;
                    },
                    enumerable: true,
                    configurable: true
                });
                DecksComponent.prototype.add = function () {
                    this._router.navigate(['Deck', { id: 0 }]);
                };
                DecksComponent.prototype.delete = function (deck) {
                    this._alertService.confirm('Deseja mesmo apagar esse deck?', this.deleteConfirm.bind(this, deck._id));
                };
                DecksComponent.prototype.deleteConfirm = function (id) {
                    this._deckService.delete(id).then(this._alertService.alert.bind(this, 'Deck deletado com sucesso!'));
                };
                DecksComponent.prototype.edit = function (deck) {
                    this._router.navigate(['Deck', { id: deck._id }]);
                };
                DecksComponent.prototype.getAll = function () {
                    this._deckService.getAll();
                };
                DecksComponent.prototype.refresh = function () {
                    this._deckService.refresh();
                };
                DecksComponent.prototype.setThumbnail = function (deck) {
                    if (deck.picture) {
                        return 'url(' + config_1.Config.urlApi + 'card_images/' + deck._id + '.jpg' + ')';
                    }
                    return '';
                };
                DecksComponent = __decorate([
                    core_1.Component({
                        selector: 'decks',
                        templateUrl: 'app/templates/decks-component.html',
                        pipes: [my_date_pipe_1.MyDatePipe]
                    }), 
                    __metadata('design:paramtypes', [deck_service_1.DeckService, router_1.Router, alert_service_1.AlertService])
                ], DecksComponent);
                return DecksComponent;
            }());
            exports_1("DecksComponent", DecksComponent);
        }
    }
});
//# sourceMappingURL=decks.component.js.map