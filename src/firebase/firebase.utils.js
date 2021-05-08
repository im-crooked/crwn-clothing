import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config  = {
    apiKey: "AIzaSyAjYXHEYHh0cK_A9-wLOUauAcsbZV2pcQs",
    authDomain: "crwn-db-f9ebd.firebaseapp.com",
    projectId: "crwn-db-f9ebd",
    storageBucket: "crwn-db-f9ebd.appspot.com",
    messagingSenderId: "35962870670",
    appId: "1:35962870670:web:cccea14753b8472d5b22df",
    measurementId: "G-HNLSRFDV2H"
  };


  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;