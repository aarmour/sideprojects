import {
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { SearchState } from './search.interfaces';

export const getSearchState = createFeatureSelector<SearchState>('search');

export const getResultsByIndex = createSelector(
  getSearchState,
  (state: SearchState) => state.resultsByIndex
);
