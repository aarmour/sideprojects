import {
  Dictionary,
  State as RootState
} from '../../state';

export interface SearchState {
  resultsByIndex: Dictionary<any>;
  lastQueryByIndex: Dictionary<string>;
}

export interface State extends RootState {
  search: SearchState;
}
