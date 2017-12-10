import { State as RootState } from '../state';

export interface UserInfo {
  displayName: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  phoneNumber: string;
  photoURL: string;
  uid: string;
}

export interface AuthState {
  initialized: boolean;
  isAuthenticated: boolean;
  userInfo: UserInfo | null;
}

export interface State extends RootState {
  auth: AuthState;
}
