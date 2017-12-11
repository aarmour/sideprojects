import { Action } from '@ngrx/store';

import { TrailConditionReport } from './trail-conditions.interfaces';

export const TRAIL_CONDITIONS_CREATE_REPORT = 'TRAIL_CONDITIONS_CREATE_REPORT';

export class CreateReportAction implements Action {
  readonly type = TRAIL_CONDITIONS_CREATE_REPORT;

  constructor(public payload: TrailConditionReport) { }
}
