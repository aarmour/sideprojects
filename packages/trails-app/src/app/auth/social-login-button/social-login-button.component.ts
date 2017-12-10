import { Component, Input, OnInit } from '@angular/core';

export enum SocialLoginButton {
  Facebook = 'facebook',
  Google = 'google'
}

@Component({
  selector: 'trl-social-login-button',
  templateUrl: './social-login-button.component.html',
  styleUrls: ['./social-login-button.component.scss']
})
export class SocialLoginButtonComponent {

  _properties = {
    facebook: { color: 'white', bg: '#3b5998', iconClassName: 'fa-facebook-official', text: 'Log in with Facebook' },
    google: { color: 'white', bg: '#4184f3', iconClassName: 'fa-google', text: 'Log in with Google' }
  };
  private get properties() {
    return this._properties[this.provider];
  }

  @Input() provider: SocialLoginButton;

  get backgroundColor() {
    return this.properties.bg;
  }

  get color() {
    return this.properties.color;
  }

  get iconClassName() {
    return this.properties.iconClassName;
  }

  get text() {
    return this.properties.text;
  }

}
