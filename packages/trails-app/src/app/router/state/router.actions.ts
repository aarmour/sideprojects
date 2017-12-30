import { NavigationExtras } from '@angular/router';

import { Action } from '@ngrx/store';

export const ROUTER_GO = 'ROUTER_GO';
export const ROUTER_BACK = 'ROUTER_BACK';
export const ROUTER_FORWARD = 'ROUTER_FORWARD';

export class GoAction implements Action {
  readonly type = ROUTER_GO;

  constructor(public payload: {
    path: any[];
    query?: object;
    extras?: NavigationExtras;
  }) {}
}

export class BackAction implements Action {
  readonly type = ROUTER_BACK;
}

export class ForwardAction implements Action {
  readonly type = ROUTER_FORWARD;
}

export type Actions
  = GoAction
  | BackAction
  | ForwardAction;
