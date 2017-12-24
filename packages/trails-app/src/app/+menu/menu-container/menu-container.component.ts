import { Observable } from 'rxjs/Observable';

import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { State } from '../../state';
import {
  LoginWithFacebookAction,
  LoginWithGoogleAction,
  LogoutAction,
  UserInfo,
  getInitialized,
  getIsAuthenticated,
  getUserInfo
} from '../../auth';

@Component({
  selector: 'trl-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.scss']
})
export class MenuContainerComponent {

  isInitialized: Observable<boolean>;
  isAuthenticated: Observable<boolean>;
  userInfo: Observable<UserInfo>;

  constructor(
    private store: Store<State>
  ) {
    this.isInitialized = this.store.select(getInitialized);
    this.isAuthenticated = this.store.select(getIsAuthenticated);
    this.userInfo = this.store.select(getUserInfo);
  }

  loginWithFacebook() {
    this.store.dispatch(new LoginWithFacebookAction());
  }

  loginWithGoogle() {
    this.store.dispatch(new LoginWithGoogleAction());
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }

}
