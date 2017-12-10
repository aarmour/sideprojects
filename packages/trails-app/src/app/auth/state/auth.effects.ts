import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import {
  auth as FirebaseAuth,
  User as FirebaseUser
} from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

import { Effect, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { getUserInfoFromFirebaseUser } from './utils';
import { State } from './auth.interfaces';
import {
  LOGIN_WITH_FACEBOOK,
  LOGIN_WITH_GOOGLE,
  LOGOUT,
  LogoutCompletedAction,
  LoginInitializedAction,
  LoginSuccessAction,
} from './auth.actions';

@Injectable()
export class AuthEffects {

  @Effect()
  initialize = this.afAuth.authState
    .take(1)
    .map((firebaseUser: FirebaseUser) => {
      if (firebaseUser) {
        return new LoginSuccessAction(getUserInfoFromFirebaseUser(firebaseUser));
      }
      return new LoginInitializedAction();
    });

  @Effect()
  loginWithFacebook = this.actions
    .ofType(LOGIN_WITH_FACEBOOK)
    .switchMap(() => Observable.fromPromise(this.afAuth.auth.signInWithRedirect(new FirebaseAuth.FacebookAuthProvider()))
      .map((response: { user: FirebaseUser }) => response.user)
      .map((firebaseUser: FirebaseUser) => {
        return new LoginSuccessAction(getUserInfoFromFirebaseUser(firebaseUser));
      }));

  @Effect()
  loginWithGoogle = this.actions
    .ofType(LOGIN_WITH_GOOGLE)
    .switchMap(() => Observable.fromPromise(this.afAuth.auth.signInWithRedirect(new FirebaseAuth.GoogleAuthProvider()))
      .map((response: { user: FirebaseUser }) => response.user)
      .map((firebaseUser: FirebaseUser) => {
        return new LoginSuccessAction(getUserInfoFromFirebaseUser(firebaseUser));
      }));

  @Effect()
  logout = this.actions
    .ofType(LOGOUT)
    .switchMap(() => Observable.fromPromise(this.afAuth.auth.signOut())
      .map(() => new LogoutCompletedAction()));

  constructor(
    private actions: Actions,
    private afAuth: AngularFireAuth,
    private store: Store<State>
  ) { }

}
