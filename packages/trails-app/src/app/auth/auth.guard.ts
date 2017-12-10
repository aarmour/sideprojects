import 'rxjs/add/observable/combineLatest';

import { Injectable } from '@angular/core';
import {
  CanLoad,
  Router,
  Route
} from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import {
  AuthState,
  State,
  getAuthState
} from './state';

@Injectable()
export class AuthGuard implements CanLoad {

  constructor(
    private router: Router,
    private store: Store<State>
  ) { }

  canLoad(route: Route): Observable<boolean> {
    return this.store.select(getAuthState)
      .filter((authState: AuthState) => authState.initialized)
      .map((authState: AuthState) => authState.isAuthenticated)
      .map((isAuthenticated: boolean) => {
        if (!isAuthenticated) {
          this.router.navigate(['/login']);
        }

        return isAuthenticated;
      });
  }
}
