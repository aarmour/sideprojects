import { Observable } from 'rxjs/Observable';

import { Component, ViewChild } from '@angular/core';

import { Store } from '@ngrx/store';

import { State } from '../../state';

import {
  ClearSearchAction,
  SearchAction,
  getResultsByIndex
} from '../../algolia';

import { TrailsSearchInputComponent } from './trails-search-input.component';

@Component({
  selector: 'trl-trails-search-input-container',
  templateUrl: './trails-search-input-container.component.html',
  styleUrls: ['./trails-search-input-container.component.scss']
})
export class TrailsSearchInputContainerComponent {

  private indexName = 'trails';

  searchResults: Observable<any>;

  @ViewChild('input') input: TrailsSearchInputComponent;

  constructor(private store: Store<State>) {
    this.searchResults = this.store.select(getResultsByIndex)
      .map(results => results[this.indexName]);
  }

  clear() {
    this.store.dispatch(new ClearSearchAction(this.indexName));
    this.input.clear();
    this.input.focus();
  }

  onInputChange(value: string) {
    this.store.dispatch(new SearchAction({ index: this.indexName, query: value }));
  }

}
