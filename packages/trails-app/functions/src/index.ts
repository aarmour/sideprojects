import * as functions from 'firebase-functions';

import { handleUpdateCurrentConditions } from './update-current-conditions';

export const updateCurrentConditions = functions.database.ref('/trailConditions/{trailId}/{id}')
  .onCreate(event => handleUpdateCurrentConditions(event.params.trailId, event.data));
