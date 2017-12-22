import { Observable } from 'rxjs/Observable';

import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { State } from '../../state';
import {
  Trail,
  FetchLastUpdatedAction,
  getLastUpdatedTrails
} from '../../trails';

@Component({
  selector: 'trl-trail-conditions-list-container',
  templateUrl: './trail-conditions-list-container.component.html',
  styleUrls: ['./trail-conditions-list-container.component.scss']
})
export class TrailConditionsListContainerComponent implements OnInit {

  trails: Observable<Trail[]>;

  constructor(
    private store: Store<State>
  ) {
    this.trails = this.store.select(getLastUpdatedTrails);
  }

  ngOnInit() {
    this.store.dispatch(new FetchLastUpdatedAction());
  }

}
