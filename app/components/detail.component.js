System.register(['angular2/core', '../services/card.service'], function(exports_1, context_1) {
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
    var core_1, card_service_1;
    var DetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (card_service_1_1) {
                card_service_1 = card_service_1_1;
            }],
        execute: function() {
            DetailComponent = (function () {
                function DetailComponent(_cardService) {
                    this._cardService = _cardService;
                    this.monstersUnique = 0;
                    this.spellsUnique = 0;
                    this.trapsUnique = 0;
                    this.totalUnique = 0;
                }
                DetailComponent.prototype.ngOnInit = function () {
                    this.getStatus();
                };
                DetailComponent.prototype.getStatus = function () {
                    var _this = this;
                    this._cardService.getStatus()
                        .then(function (obj) {
                        _this.monstersUnique = obj.monstersUnique;
                        _this.trapsUnique = obj.trapsUnique;
                        _this.spellsUnique = obj.spellsUnique;
                        _this.totalUnique = _this.monstersUnique + _this.trapsUnique + _this.spellsUnique;
                    });
                };
                DetailComponent = __decorate([
                    core_1.Component({
                        selector: 'detail',
                        styleUrls: ['app/styles/detail.component.css'],
                        templateUrl: 'app/templates/detail-component.html'
                    }), 
                    __metadata('design:paramtypes', [card_service_1.CardService])
                ], DetailComponent);
                return DetailComponent;
            }());
            exports_1("DetailComponent", DetailComponent);
        }
    }
});
//# sourceMappingURL=detail.component.js.map