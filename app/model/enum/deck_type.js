System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DeckType;
    return {
        setters:[],
        execute: function() {
            (function (DeckType) {
                DeckType[DeckType["Deck"] = 1] = "Deck";
                DeckType[DeckType["Booster"] = 2] = "Booster";
            })(DeckType || (DeckType = {}));
            exports_1("DeckType", DeckType);
        }
    }
});
//# sourceMappingURL=deck_type.js.map