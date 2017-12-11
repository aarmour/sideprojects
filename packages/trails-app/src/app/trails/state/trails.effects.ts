import { Injectable } from '@angular/core';

import {
  Actions,
  Effect
} from '@ngrx/effects';

import { TrailListService } from '../trail-list.service';
import { Trail } from './trails.interfaces';
import { ListUpdatedAction } from './trails.actions';

@Injectable()
export class TrailsEffects {

  @Effect()
  trailList = this.trailListService.listRef.valueChanges()
    .map((list: Trail[]) => new ListUpdatedAction(list));

  constructor(
    private actions: Actions,
    private trailListService: TrailListService
  ) { }

}
