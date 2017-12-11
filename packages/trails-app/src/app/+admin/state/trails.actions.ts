import { Action } from '@ngrx/store';

import { Trail } from '../../trails';

export const ADMIN_CREATE_TRAIL = 'ADMIN_CREATE_TRAIL';
export const ADMIN_CREATE_TRAIL_SUCCESS = 'ADMIN_CREATE_TRAIL_SUCCESS';
export const ADMIN_UPDATE_TRAIL = 'ADMIN_UPDATE_TRAIL';
export const ADMIN_DELETE_TRAIL = 'ADMIN_DELETE_TRAIL';

export class CreateTrailAction implements Action {
  readonly type = ADMIN_CREATE_TRAIL;

  constructor(public payload: Trail) { }
}

export class CreateTrailSuccessAction implements Action {
  readonly type= ADMIN_CREATE_TRAIL_SUCCESS;

  constructor(public payload: string) { }
}

export class UpdateTrailAction implements Action {
  readonly type = ADMIN_UPDATE_TRAIL;
}

export class DeleteTrailAction implements Action {
  readonly type = ADMIN_DELETE_TRAIL;
}

export type AdminTrailActions =
  | CreateTrailAction
  | CreateTrailSuccessAction
  | UpdateTrailAction
  | DeleteTrailAction
  ;
