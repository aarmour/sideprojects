import {
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { Dictionary } from '@ngrx/entity/src/models';

import { TrailsState, Trail } from './trails.interfaces';
import { adapter } from './trails.adapter';

export const getTrailsState = createFeatureSelector<TrailsState>('trails');

export const {
  selectIds: selectTrailIds,
  selectEntities: selectTrailEntities,
  selectAll: selectAllTrails,
  selectTotal: selectTrailsTotal
} = adapter.getSelectors(getTrailsState);

export const getSelectedTrail =
  createSelector(getTrailsState, (state: TrailsState) => state.entities[state.selectedTrail]);

export const getLastUpdatedTrails =
  createSelector(
    getTrailsState,
    selectTrailEntities,
    (state: TrailsState, entities: Dictionary<Trail>) =>
      state.lastUpdated.map(id => entities[id])
  );
