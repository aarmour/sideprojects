import { Observable } from 'rxjs/Observable';

import {
  Component,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';

import { MatAutocompleteSelectedEvent } from '@angular/material';

import { Store } from '@ngrx/store';

import { State } from '../../state';

import {
  ClearSearchAction,
  SearchAction,
  getResultsByIndex
} from '../../algolia';

import { Trail } from '../state/trails.interfaces';
import { TrailsSearchInputComponent } from './trails-search-input.component';

@Component({
  selector: 'trl-trails-search-input-container',
  templateUrl: './trails-search-input-container.component.html',
  styleUrls: ['./trails-search-input-container.component.scss']
})
export class TrailsSearchInputContainerComponent {

  private indexName = 'trails';

  searchResults: Observable<any>;

  @Output() selected = new EventEmitter<Trail>();

  @ViewChild('input') input: TrailsSearchInputComponent;

  constructor(private store: Store<State>) {
    this.searchResults = this.store.select(getResultsByIndex)
      .map(results => results[this.indexName]);
  }

  clear() {
    this.input.clear();
    this.input.focus();
  }

  onInputChange(value: string | object) {
    if (typeof value === 'object') {
      return;
    }

    this.store.dispatch(new SearchAction({ index: this.indexName, query: value }));
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.selected.next(event.option.value);
  }

}
