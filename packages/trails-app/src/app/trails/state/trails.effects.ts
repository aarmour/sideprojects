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
  TRAILS_FETCH_TRAIL,
  FetchTrailAction,
  FetchTrailSuccessAction,
  ListUpdatedAction
} from './trails.actions';

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
