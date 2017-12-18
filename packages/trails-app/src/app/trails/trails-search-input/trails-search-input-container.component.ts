import { Observable } from 'rxjs/Observable';

import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { State } from '../../state';

import { SearchAction, getResultsByIndex } from '../../algolia';

@Component({
  selector: 'trl-trails-search-input-container',
  templateUrl: './trails-search-input-container.component.html',
  styleUrls: ['./trails-search-input-container.component.scss']
})
export class TrailsSearchInputContainerComponent {

  searchResults: Observable<any>;

  constructor(private store: Store<State>) {
    this.searchResults = this.store.select(getResultsByIndex)
      .map(results => results['trails']);
  }

  onInputChange(value: string) {
    this.store.dispatch(new SearchAction({ index: 'trails', query: value }));
  }

}
