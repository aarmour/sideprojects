import { Action } from '@ngrx/store';

export const ALGOLIA_SEARCH = 'ALGOLIA_SEARCH';
export const ALGOLIA_SEARCH_SUCCESS = 'ALGOLIA_SEARCH_SUCCESS';

export class SearchActionPayload {
  index: string;
  query: string;
}

export class SearchAction implements Action {
  readonly type = ALGOLIA_SEARCH;

  constructor(public payload: SearchActionPayload) { }
}

export class SearchSuccessActionPayload extends SearchActionPayload {
  hits: any[];
}

export class SearchSuccessAction implements Action {
  readonly type = ALGOLIA_SEARCH_SUCCESS;

  constructor(public payload: SearchSuccessActionPayload) { }
}

export type SearchActions =
  | SearchAction
  | SearchSuccessAction
  ;
