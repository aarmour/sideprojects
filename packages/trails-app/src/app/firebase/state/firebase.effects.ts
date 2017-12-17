import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { AngularFireList } from 'angularfire2/database';

import { FirebaseListRegistry } from '../firebase-list-registry.service';
import { FirebaseListPushActionPayload } from './firebase.interfaces';
import {
  FIREBASE_LIST_PUSH,
  ListPushAction,
  ListPushSuccessAction,
  ListPushFailureAction
} from './firebase.actions';
import { formatData } from '../shared/utils';

@Injectable()
export class FirebaseEffects {

  @Effect()
  listPush = this.actions
    .ofType(FIREBASE_LIST_PUSH)
    .switchMap((action: ListPushAction<any>) => {
      const listRef = this.fbListRegistry.register(action.payload.path);
      const data = formatData(action.payload.data);

      return Observable.fromPromise(listRef.push(data))
        .mergeMap((response: { path: object }) => {
          const path = response.path.toString();
          return this.createActions(action.payload.successAction, path, new ListPushSuccessAction(path));
        })
        .catch(error => Observable.of(new ListPushFailureAction(null)));
    });

  constructor(
    private actions: Actions,
    private fbListRegistry: FirebaseListRegistry
  ) { }

  createActions(actionOrFactory, payload, defaultAction) {
    let actions = [defaultAction];

    if (actionOrFactory) {
      if (typeof actionOrFactory === 'function') {
        actionOrFactory = actionOrFactory.call(null, payload);
      }

      actions = [...actions, actionOrFactory];
    }

    return actions;
  }

}
