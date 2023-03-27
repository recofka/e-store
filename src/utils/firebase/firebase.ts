import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  User
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, QueryDocumentSnapshot } from 'firebase/firestore';

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

const firebaseConfig = {
  apiKey: 'AIzaSyBZYxWI84llqdomgaiAVK1ayZ0iMdy9R0g',
  authDomain: 'estore-7583b.firebaseapp.com',
  projectId: 'estore-7583b',
  storageBucket: 'estore-7583b.appspot.com',
  messagingSenderId: '936411766182',
  appId: '1:936411766182:web:8d7f1b5e9d6e186d624367'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInWithGooleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth: User
): Promise<QueryDocumentSnapshot<UserData>> => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log('error creating user', error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};
