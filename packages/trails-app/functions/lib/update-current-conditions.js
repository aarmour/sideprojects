"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleUpdateCurrentConditions(trailId, data) {
    if (!data.exists()) {
        return null;
    }
    const conditions = data.val();
    if (!conditions.condition) {
        return null;
    }
    const trail = data.ref.root.child(`trails/${trailId}`);
    return Promise.all([
        trail.child('currentCondition').set(conditions.condition),
        trail.child('currentConditionLastUpdated').set(conditions.date)
    ]);
}
exports.handleUpdateCurrentConditions = handleUpdateCurrentConditions;
//# sourceMappingURL=update-current-conditions.js.map