import { EntityState } from '@ngrx/entity';

import { State as RootState } from '../../state';

import { TrailConditionRating } from './shared/interfaces';

export class Trail {
  name: string;
  id?: string;
  slug?: string;
  mtbProjectUrl?: string;
  hasRestrictedUseSchedule?: boolean;
  restrictedUseScheduleDescription?: string;
  currentCondition?: TrailConditionRating;
  currentConditionLastUpdated?: number;

  static fromFirebaseObject(obj): Trail {
    const id = obj.key;
    const data = obj.payload.toJSON();
    const trail = new Trail();

    trail.id = id;
    trail.name = data.name;
    trail.slug = data.slug;
    trail.mtbProjectUrl = data.mtbProjectUrl;
    trail.currentCondition = data.currentCondition;

    if (data.currentConditionLastUpdated) {
      // The date is stored as a negative timestamp so that trail objects can be
      // sorted in reverse order. Reverse it here.
      trail.currentConditionLastUpdated = -(data.currentConditionLastUpdated);
    }

    return trail;
  }

}

export interface TrailsState extends EntityState<Trail> {
  selectedTrail: string | null;
  lastUpdated: string[];
}

export interface State extends RootState {
  trails: TrailsState;
}
