import { Action } from '@ngrx/store';

import { Trail } from './trails.interfaces';

export const TRAILS_FETCH_TRAIL = 'TRAILS_FETCH_TRAIL';
export const TRAILS_FETCH_TRAIL_SUCCESS = 'TRAILS_FETCH_TRAIL_SUCCESS';
export const TRAILS_FETCH_LAST_UPDATED = 'TRAILS_FETCH_LAST_UPDATED';
export const TRAILS_FETCH_LAST_UPDATED_SUCCESS = 'TRAILS_FETCH_LAST_UPDATED_SUCCESS';
export const TRAILS_LIST_UPDATED = 'TRAILS_LIST_UPDATED';
export const TRAILS_SELECT_TRAIL = 'TRAILS_SELECT_TRAIL';
export const TRAILS_SAVE_TRAIL_CONDITION = 'TRAILS_SAVE_TRAIL_CONDITION';
export const TRAILS_SAVE_TRAIL_CONDITION_SUCCESS = 'TRAILS_SAVE_TRAIL_CONDITION_SUCCESS';
export const TRAILS_SAVE_TRAIL_CONDITION_FAILURE = 'TRAILS_SAVE_TRAIL_CONDITION_FAILURE';

export class FetchTrailAction {
  readonly type = TRAILS_FETCH_TRAIL;

  public constructor(public payload: string) { }
}

export class FetchTrailSuccessAction {
  readonly type = TRAILS_FETCH_TRAIL_SUCCESS;

  public constructor(public payload: Trail) { }
}

export class FetchLastUpdatedAction {
  readonly type = TRAILS_FETCH_LAST_UPDATED;
}

export class FetchLastUpdatedSuccessAction {
  readonly type = TRAILS_FETCH_LAST_UPDATED_SUCCESS;

  public constructor(public payload: Trail[]) { }
}

export class ListUpdatedAction {
  readonly type = TRAILS_LIST_UPDATED;

  constructor(public payload: Trail[]) { }
}

export class SelectTrailAction {
  readonly type = TRAILS_SELECT_TRAIL;

  constructor(public payload: string) { }
}

export class SaveTrailCondition {
  readonly type = TRAILS_SAVE_TRAIL_CONDITION;

  constructor(public payload: any) { }
}

export class SaveTrailConditionSuccess {
  readonly type = TRAILS_SAVE_TRAIL_CONDITION_SUCCESS;
}

export class SaveTrailConditionFailure {
  readonly type = TRAILS_SAVE_TRAIL_CONDITION_FAILURE;
}

export type TrailsActions =
  | FetchLastUpdatedAction
  | FetchLastUpdatedSuccessAction
  | FetchTrailAction
  | FetchTrailSuccessAction
  | ListUpdatedAction
  | SelectTrailAction
  ;
