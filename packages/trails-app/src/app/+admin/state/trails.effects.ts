import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import {
  Actions,
  Effect
} from '@ngrx/effects';

import { TrailListService } from '../../trails';
import { State } from '../../trails';

import {
  ADMIN_CREATE_TRAIL,
  CreateTrailAction,
  CreateTrailSuccessAction
} from './trails.actions';

@Injectable()
export class TrailsEffects {

  @Effect()
  createTrail = this.actions
    .ofType(ADMIN_CREATE_TRAIL)
    .switchMap((action: CreateTrailAction) =>
      Observable.fromPromise(this.trailListService.listRef.push(action.payload))
        .map((response: { key: string }) => response.key)
        .map((id: string) => new CreateTrailSuccessAction(id))
    );

  constructor(
    private actions: Actions,
    private store: Store<State>,
    private trailListService: TrailListService
  ) { }

}
