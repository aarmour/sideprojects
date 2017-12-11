import {
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { TrailsState } from './trails.interfaces';
import { adapter } from './trails.adapter';

export const getTrailsState = createFeatureSelector<TrailsState>('trails');

export const {
  selectIds: selectTrailIds,
  selectEntities: selectTrailEntities,
  selectAll: selectAllTrails,
  selectTotal: selectTrailsTotal
} = adapter.getSelectors(getTrailsState);
