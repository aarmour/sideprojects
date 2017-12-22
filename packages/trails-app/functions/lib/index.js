"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const update_current_conditions_1 = require("./update-current-conditions");
exports.updateCurrentConditions = functions.database.ref('/trailConditions/{trailId}/{id}')
    .onCreate(event => update_current_conditions_1.handleUpdateCurrentConditions(event.params.trailId, event.data));
//# sourceMappingURL=index.js.map