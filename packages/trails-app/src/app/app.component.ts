import { Component } from '@angular/core';

import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

import { snek } from './snek';

@Component({
  selector: 'trl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(angulartics2GoogleTagManager: Angulartics2GoogleTagManager) {
    console.log(snek);
  }

}
