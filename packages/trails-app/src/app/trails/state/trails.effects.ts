import { Injectable } from '@angular/core';

import {
  Actions,
  Effect
} from '@ngrx/effects';

import { DatabaseSnapshot } from 'angularfire2/database/interfaces';
import { AngularFireAction } from 'angularfire2/database';

import { TrailListService } from '../trail-list.service';
import { Trail } from './trails.interfaces';
import { ListUpdatedAction } from './trails.actions';

@Injectable()
export class TrailsEffects {

  @Effect()
  trailList = this.trailListService.listRef.snapshotChanges()
    .map((snapshot: AngularFireAction<DatabaseSnapshot>[]) =>
      snapshot.map(item => ({ key: item.key, ...item.payload.toJSON() })))
    .map(payload => new ListUpdatedAction(payload as any));

  constructor(
    private actions: Actions,
    private trailListService: TrailListService
  ) { }

}
