import {
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { AuthState } from './auth.interfaces';

export const getAuthState = createFeatureSelector<AuthState>('auth');

export const getInitialized = createSelector(
  getAuthState,
  (state: AuthState) => state.initialized
);

export const getIsAuthenticated = createSelector(
  getAuthState,
  (state: AuthState) => state.isAuthenticated
);

export const getUserInfo = createSelector(
  getAuthState,
  (state: AuthState) => state.userInfo
);
