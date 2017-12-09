import { Component } from '@angular/core';

import { snek } from './snek';

@Component({
  selector: 'trl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    console.log(snek);
  }

}
