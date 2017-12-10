import { Action } from '@ngrx/store';

import { UserInfo } from './auth.interfaces';

export const LOGIN_INITIALIZED = 'AUTH_LOGIN_INITIALIZED';
export const LOGIN_WITH_FACEBOOK = 'AUTH_LOGIN_WITH_FACEBOOK';
export const LOGIN_WITH_GOOGLE = 'AUTH_LOGIN_WITH_GOOGLE';
export const LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE';
export const LOGOUT = 'AUTH_LOGOUT';
export const LOGOUT_COMPLETED = 'AUTH_LOGOUT_COMPLETED';

export class LoginInitializedAction implements Action {
  readonly type = LOGIN_INITIALIZED;
}

export class LoginWithFacebookAction implements Action {
  readonly type = LOGIN_WITH_FACEBOOK;
}

export class LoginWithGoogleAction implements Action {
  readonly type = LOGIN_WITH_GOOGLE;
}

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: UserInfo) { }
}

export class LoginFailureAction implements Action {
  readonly type = LOGIN_FAILURE;
}

export class LogoutAction implements Action {
  readonly type = LOGOUT;
}

export class LogoutCompletedAction implements Action {
  readonly type = LOGOUT_COMPLETED;
}

export type AuthActions =
  | LoginInitializedAction
  | LoginWithFacebookAction
  | LoginWithGoogleAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction
  | LogoutCompletedAction
  ;
