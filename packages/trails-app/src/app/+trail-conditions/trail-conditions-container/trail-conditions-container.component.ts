import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { State } from '../../state';
import { selectAllTrails } from '../../trails';

@Component({
  selector: 'trl-trail-conditions-container',
  templateUrl: './trail-conditions-container.component.html',
  styleUrls: ['./trail-conditions-container.component.scss']
})
export class TrailConditionsContainerComponent {

  trails: Observable<any>;

  constructor(private store: Store<State>) {
    this.trails = this.store.select(selectAllTrails);
  }

}
