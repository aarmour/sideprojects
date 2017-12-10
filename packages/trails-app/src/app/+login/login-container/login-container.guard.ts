import 'rxjs/add/observable/combineLatest';

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router
} from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import {
  AuthState,
  State,
  getAuthState,
  getInitialized,
  getIsAuthenticated
} from '../../auth';

@Injectable()
export class LoginContainerGuard implements CanActivate {

  constructor(
    private router: Router,
    private store: Store<State>
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(getAuthState)
      .filter((authState: AuthState) => authState.initialized)
      .map((authState: AuthState) => authState.isAuthenticated)
      .map((isAuthenticated: boolean) => {
        if (isAuthenticated) {
          this.router.navigate(['/']);
        }

        return !isAuthenticated;
      });
  }
}
