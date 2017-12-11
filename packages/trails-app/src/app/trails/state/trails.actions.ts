import { Action } from '@ngrx/store';

import { Trail } from './trails.interfaces';

export const TRAILS_LIST_UPDATED = 'TRAILS_LIST_UPDATED';
export const TRAILS_SELECT_TRAIL = 'TRAILS_SELECT_TRAIL';

export class ListUpdatedAction {
  readonly type = TRAILS_LIST_UPDATED;

  constructor(public payload: Trail[]) { }
}

export class SelectTrailAction {
  readonly type = TRAILS_SELECT_TRAIL;

  constructor(public payload: string) { }
}

export type TrailsActions =
  | ListUpdatedAction
  | SelectTrailAction
  ;
