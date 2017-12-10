import { User as FirebaseUser } from 'firebase/app';

import { UserInfo } from './auth.interfaces';

export function getUserInfoFromFirebaseUser(firebaseUser: FirebaseUser): UserInfo {
  return {
    displayName: firebaseUser.displayName,
    email: firebaseUser.email,
    emailVerified: firebaseUser.emailVerified,
    isAnonymous: firebaseUser.isAnonymous,
    phoneNumber: firebaseUser.phoneNumber,
    photoURL: firebaseUser.photoURL,
    uid: firebaseUser.uid
  };
}
