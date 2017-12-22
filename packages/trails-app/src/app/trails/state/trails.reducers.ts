import { TrailsState, Trail } from './trails.interfaces';
import {
  TRAILS_FETCH_LAST_UPDATED_SUCCESS,
  TRAILS_FETCH_TRAIL_SUCCESS,
  TRAILS_LIST_UPDATED,
  TRAILS_SELECT_TRAIL,
  TrailsActions
} from './trails.actions';
import { adapter } from './trails.adapter';

export function reducer(state: TrailsState, action: TrailsActions) {
  switch (action.type) {
    case TRAILS_FETCH_TRAIL_SUCCESS: {
      if ((state.ids as any[]).includes(action.payload.slug)) {
        return adapter.updateOne({ id: action.payload.slug, changes: action.payload }, state);
      } else {
        return adapter.addOne(action.payload, state);
      }
    }

    case TRAILS_FETCH_LAST_UPDATED_SUCCESS: {
      const ids = action.payload.map((trail: Trail) => trail.slug);
      return adapter.addAll(action.payload, { ...state, lastUpdated: ids } );
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
