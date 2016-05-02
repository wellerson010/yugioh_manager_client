System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TypeCard;
    return {
        setters:[],
        execute: function() {
            (function (TypeCard) {
                TypeCard[TypeCard["Monster"] = 1] = "Monster";
                TypeCard[TypeCard["Type"] = 2] = "Type";
                TypeCard[TypeCard["Spell"] = 3] = "Spell";
            })(TypeCard || (TypeCard = {}));
            exports_1("TypeCard", TypeCard);
        }
    }
});
//# sourceMappingURL=type_card.js.map