import { TrailsState } from './trails.interfaces';
import {
  TRAILS_FETCH_TRAIL_SUCCESS,
  TRAILS_LIST_UPDATED,
  TRAILS_SELECT_TRAIL,
  TrailsActions
} from './trails.actions';
import { adapter } from './trails.adapter';

export function reducer(state: TrailsState, action: TrailsActions) {
  switch (action.type) {
    case TRAILS_FETCH_TRAIL_SUCCESS: {
      return adapter.addOne(action.payload, state);
    }

    case TRAILS_LIST_UPDATED: {
      return adapter.addAll(action.payload, state);
    }

    case TRAILS_SELECT_TRAIL: {
      return {
        ...state,
        selectedTrail: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
