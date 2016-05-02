System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Type;
    return {
        setters:[],
        execute: function() {
            (function (Type) {
                Type[Type["NormalMonster"] = 1] = "NormalMonster";
                Type[Type["EffectMonster"] = 2] = "EffectMonster";
                Type[Type["RitualMonster"] = 3] = "RitualMonster";
                Type[Type["FusionMonster"] = 4] = "FusionMonster";
                Type[Type["SynchroMonster"] = 5] = "SynchroMonster";
                Type[Type["XyzMonster"] = 6] = "XyzMonster";
            })(Type || (Type = {}));
            exports_1("Type", Type);
        }
    }
});
//# sourceMappingURL=type.js.map