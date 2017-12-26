import { Injectable } from '@angular/core';

import {
  Actions,
  Effect
} from '@ngrx/effects';

import { DatabaseSnapshot } from 'angularfire2/database/interfaces';
import { AngularFireAction, AngularFireDatabase } from 'angularfire2/database';

import { TrailListService } from '../trail-list.service';
import { Trail } from './trails.interfaces';
import {
  TRAILS_FETCH_LAST_UPDATED,
  TRAILS_FETCH_TRAIL,
  FetchLastUpdatedAction,
  FetchLastUpdatedSuccessAction,
  FetchTrailAction,
  FetchTrailSuccessAction,
  ListUpdatedAction
} from './trails.actions';
import { } from '../index';

@Injectable()
export class TrailsEffects {

  @Effect()
  fetchTrail = this.actions
    .ofType<FetchTrailAction>(TRAILS_FETCH_TRAIL)
    .map(action => action.payload)
    .switchMap((slug: string) =>
      this.db.list(TrailListService.PATH, ref => ref.orderByChild('slug').limitToFirst(1).equalTo(slug))
        .snapshotChanges()
        .take(1)
        .map(results => results[0])
        .map(result =>
          new FetchTrailSuccessAction({ id: result.key, ...result.payload.toJSON() } as Trail))
    );

  @Effect()
  fetchLastUpdated = this.actions
    .ofType<FetchLastUpdatedAction>(TRAILS_FETCH_LAST_UPDATED)
    .switchMap(() =>
      this.db.list(TrailListService.PATH, ref =>
        ref.orderByChild('currentConditionLastUpdated').startAt(-32472144000000).limitToFirst(25)
      )
        .snapshotChanges()
        .take(1)
        .map(results => results.map(result => ({ id: result.key, ...result.payload.toJSON() })))
        .map(results => new FetchLastUpdatedSuccessAction(results as Trail[]))
    );

  // @Effect()
  // trailList = this.trailListService.listRef.snapshotChanges()
  //   .map((snapshot: AngularFireAction<DatabaseSnapshot>[]) =>
  //     snapshot.map(item => ({ key: item.key, ...item.payload.toJSON() })))
  //   .map(payload => new ListUpdatedAction(payload as any));

  constructor(
    private actions: Actions,
    private db: AngularFireDatabase,
    private trailListService: TrailListService
  ) { }

}
