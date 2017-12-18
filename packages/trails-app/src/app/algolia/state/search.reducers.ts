import { ALGOLIA_SEARCH_SUCCESS, SearchActions } from './search.actions';
import { SearchState } from './search.interfaces';

export function reducer(state: SearchState, action: SearchActions) {
  switch (action.type) {
    case ALGOLIA_SEARCH_SUCCESS: {
      return {
        ...state,
        resultsByIndex: {
          ...state.resultsByIndex,
          [action.payload.index]: action.payload.hits
        },
        lastQueryByIndex: {
          ...state.lastQueryByIndex,
          [action.payload.index]: action.payload.query
        }
      };
    }

    default: {
      return state;
    }
  }
}
