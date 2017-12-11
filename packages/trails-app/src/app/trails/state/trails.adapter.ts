import {
  EntityState,
  EntityAdapter,
  createEntityAdapter
} from '@ngrx/entity';

import { Trail } from './trails.interfaces';

export const adapter: EntityAdapter<Trail> =
  createEntityAdapter<Trail>({ selectId: (model: Trail) => model.slug });
