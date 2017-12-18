import 'rxjs/add/operator/debounceTime';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';

import { AlgoliaResponse } from 'algoliasearch';

import { AlgoliaService } from '../algolia.service';
import {
  ALGOLIA_SEARCH,
  SearchAction,
  SearchActionPayload,
  SearchSuccessAction
} from './search.actions';

const SEARCH_DEBOUNCE_MS = 300;

@Injectable()
export class SearchEffects {

  @Effect()
  search = this.actions
    .ofType<SearchAction>(ALGOLIA_SEARCH)
    .debounceTime(SEARCH_DEBOUNCE_MS)
    .map(action => action.payload)
    .switchMap((payload: SearchActionPayload) => {
      const index = this.algolia.client.initIndex(payload.index);

      // TODO: enhance the Algolia service to abstract this so that
      // we can get the search results as an Observable.
      return Observable.fromPromise(new Promise((resolve, reject) => {
        index.search({ query: payload.query }, (err, content) => {
          if (err) {
            return reject(err);
          }

          return resolve({ index: payload.index, response: content });
        });
      }));
    })
    .map((data: { index: string, response: AlgoliaResponse }) =>
      new SearchSuccessAction({ index: data.index, query: data.response.query, hits: data.response.hits }));

  constructor(
    private actions: Actions,
    private algolia: AlgoliaService
  ) { }

}
