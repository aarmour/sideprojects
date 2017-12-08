import { RouterReducerState } from '@ngrx/router-store';

import { RouterStateUrl } from './shared/utils';

export interface State {
  router: RouterReducerState<RouterStateUrl>;
}
