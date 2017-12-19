import { Action } from '@ngrx/store';

export const ALGOLIA_SEARCH = 'ALGOLIA_SEARCH';
export const ALGOLIA_SEARCH_SUCCESS = 'ALGOLIA_SEARCH_SUCCESS';
export const ALGOLIA_CLEAR_SEARCH = 'ALGOLIA_CLEAR_SEARCH';

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

export class ClearSearchAction implements Action {
  readonly type = ALGOLIA_CLEAR_SEARCH;

  constructor(public payload: string) { }
}

export type SearchActions =
  | SearchAction
  | SearchSuccessAction
  | ClearSearchAction
  ;
