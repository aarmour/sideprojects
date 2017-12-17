import { Action } from '@ngrx/store';

export interface FirebaseListPushActionPayload<T> {
  path: string;
  data: T;
  successAction?: Action;
  failureAction?: Action;
}
