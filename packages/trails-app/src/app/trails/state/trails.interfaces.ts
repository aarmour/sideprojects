import { EntityState } from '@ngrx/entity';

import { State as RootState } from '../../state';

import { TrailConditionRating } from './shared/interfaces';

export interface Trail {
  name: string;
  id?: string;
  slug?: string;
  mtbProjectUrl?: string;
  hasRestrictedUseSchedule?: boolean;
  restrictedUseScheduleDescription?: string;
  currentConditionRating?: TrailConditionRating;
  currentConditionRatingLastUpdated?: Date;
}

export interface TrailsState extends EntityState<Trail> {
  selectedTrail: string | null;
  lastUpdated: string[];
}

export interface State extends RootState {
  trails: TrailsState;
}
