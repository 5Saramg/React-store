import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { doc, setDoc, getDoc, getFirestore, collection, writeBatch, query, getDocs, QuerySnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCM5yVNyxUcw3OvbadwduQ8j1DTxFjYqz8",
  authDomain: "golden-moon-store.firebaseapp.com",
  projectId: "golden-moon-store",
  storageBucket: "golden-moon-store.appspot.com",
  messagingSenderId: "80215286635",
  appId: "1:80215286635:web:5fc9903484b5ead4b1e22e",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const AddCollectionAndDocuments = async (collectionKey, objectsAdd) =>{
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db)

  objectsAdd.forEach((object) =>{
    const docRef= doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef)
  });

  await batch.commit();

}

export const getCategoriesAndDocuments = async() =>{
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) =>{
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase] = items;
    return acc
  }, {})

  return categoryMap
}

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { 
        displayName, 
        email, 
        createdAt, 
        ...additionalInformation, 
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async() => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)