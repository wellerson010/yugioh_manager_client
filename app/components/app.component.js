System.register(['angular2/router', 'angular2/core', '../services/card.service', '../services/deck.service', '../services/form-data.service', './cards.component', './card.component', './deck.component', './decks.component', './home.component'], function(exports_1, context_1) {
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
    var router_1, core_1, card_service_1, deck_service_1, form_data_service_1, cards_component_1, card_component_1, deck_component_1, decks_component_1, home_component_1;
    var AppComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (card_service_1_1) {
                card_service_1 = card_service_1_1;
            },
            function (deck_service_1_1) {
                deck_service_1 = deck_service_1_1;
            },
            function (form_data_service_1_1) {
                form_data_service_1 = form_data_service_1_1;
            },
            function (cards_component_1_1) {
                cards_component_1 = cards_component_1_1;
            },
            function (card_component_1_1) {
                card_component_1 = card_component_1_1;
            },
            function (deck_component_1_1) {
                deck_component_1 = deck_component_1_1;
            },
            function (decks_component_1_1) {
                decks_component_1 = decks_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router) {
                    this._router = _router;
                }
                AppComponent.prototype.toCards = function () {
                    this._router.navigate(['Cards']);
                };
                AppComponent.prototype.toDecks = function () {
                    this._router.navigate(['Decks']);
                };
                AppComponent.prototype.toHome = function () {
                    this._router.navigate(['Home']);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/templates/app-component.html',
                        styleUrls: ['app/styles/app.component.css'],
                        providers: [router_1.ROUTER_PROVIDERS, card_service_1.CardService, deck_service_1.DeckService, form_data_service_1.FormDataService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/home',
                            name: 'Home',
                            useAsDefault: true,
                            component: home_component_1.HomeComponent
                        },
                        {
                            path: '/cards',
                            name: 'Cards',
                            component: cards_component_1.CardsComponent
                        },
                        {
                            path: '/card/:id',
                            name: 'Card',
                            component: card_component_1.CardComponent
                        },
                        {
                            path: '/decks',
                            name: 'Decks',
                            component: decks_component_1.DecksComponent
                        },
                        {
                            path: '/deck/:id',
                            name: 'Deck',
                            component: deck_component_1.DeckComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map