import { AuthState } from './auth.interfaces';
import {
  LOGIN_INITIALIZED,
  LOGIN_SUCCESS,
  LOGOUT_COMPLETED,
  AuthActions,
  LoginSuccessAction
} from './auth.actions';

export function reducer(state: AuthState, action: AuthActions) {
  switch (action.type) {
    case LOGIN_INITIALIZED: {
      return {
        ...state,
        initialized: true
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        initialized: true,
        isAuthenticated: true,
        userInfo: (action as LoginSuccessAction).payload
      };
    }

    case LOGOUT_COMPLETED: {
      return {
        ...state,
        isAuthenticated: false,
        userInfo: null
      };
    }

    default: {
      return state;
    }
  }
}
