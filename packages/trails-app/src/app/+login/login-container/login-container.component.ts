import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import {
  LoginWithFacebookAction,
  LoginWithGoogleAction,
  State,
  getInitialized,
  getIsAuthenticated
} from '../../auth';

@Component({
  selector: 'trl-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent {

  isAuthInitialized: Observable<boolean>;
  isUserAuthenticated: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.isAuthInitialized = store.select(getInitialized);
    this.isUserAuthenticated = store.select(getIsAuthenticated);
  }

  loginWithFacebook() {
    this.store.dispatch(new LoginWithFacebookAction());
  }

  loginWithGoogle() {
    this.store.dispatch(new LoginWithGoogleAction());
  }

}
