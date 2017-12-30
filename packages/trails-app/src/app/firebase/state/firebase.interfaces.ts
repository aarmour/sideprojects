import { Action } from '@ngrx/store';

export interface ListPushActionPayload<T> {
  path: string;
  data: T;
  successAction?: Action | Function;
  failureAction?: Action | Function;
}

export interface ListPushSuccessActionPayload {
  path: string;
  key: string;
}
