import { Action } from '@ngrx/store';

import { FirebaseListPushActionPayload } from './firebase.interfaces';

export const FIREBASE_LIST_PUSH = 'FIREBASE_LIST_PUSH';
export const FIREBASE_LIST_PUSH_SUCCESS = 'FIREBASE_LIST_PUSH_SUCCESS';
export const FIREBASE_LIST_PUSH_FAILURE = 'FIREBASE_LIST_PUSH_FAILURE';

export class ListPushAction<T> implements Action {
  readonly type = FIREBASE_LIST_PUSH;

  constructor(public payload: FirebaseListPushActionPayload<T>) { }
}

export class ListPushSuccessAction implements Action {
  readonly type = FIREBASE_LIST_PUSH_SUCCESS;

  constructor(public payload: string) { }
}

export class ListPushFailureAction implements Action {
  readonly type = FIREBASE_LIST_PUSH_FAILURE;

  constructor(public payload: any) { }
}
