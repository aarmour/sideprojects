import { AuthState } from './auth.interfaces';

export const initialState: AuthState = {
  initialized: false,
  isAuthenticated: false,
  userInfo: null
};
