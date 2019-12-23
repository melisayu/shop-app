import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCnzosFoXM8941jCnxrDm_c83IaMI8f6XE",
    authDomain: "shop-app-4412f.firebaseapp.com",
    databaseURL: "https://shop-app-4412f.firebaseio.com",
    projectId: "shop-app-4412f",
    storageBucket: "shop-app-4412f.appspot.com",
    messagingSenderId: "1023799780916",
    appId: "1:1023799780916:web:0a6b14826c38d48d7f8c61",
    measurementId: "G-29SM2LPNG7"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;