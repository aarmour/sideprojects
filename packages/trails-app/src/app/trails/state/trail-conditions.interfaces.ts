import { TrailConditionRating } from './shared/interfaces';

export enum TrailHazard {
  Ice = 'Ice',
  Mud = 'Mud',
  Snakes = 'Snakes',
  Snow = 'Snow'
}

export interface TrailConditionReport {
  date: Date;
  fromUser: string;
  hazards: TrailHazard[];
  rating: TrailConditionRating;
}
