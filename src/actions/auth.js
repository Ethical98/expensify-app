import { signInWithPopup, signOut } from '@firebase/auth';
import { googleAuthProvider, auth } from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid,
});

export const startLogin = () => () => signInWithPopup(auth, googleAuthProvider);

export const logout = () => ({
  type: 'LOGOUT',
});

export const startLogout = () => () => signOut(auth);
