import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCzMXOsTdDR5_5HhF1Zdd3FjBgZvvhILwg",
    authDomain: "crwn-clothing-8e63b.firebaseapp.com",
    projectId: "crwn-clothing-8e63b",
    storageBucket: "crwn-clothing-8e63b.appspot.com",
    messagingSenderId: "55076818654",
    appId: "1:55076818654:web:84651b171f691170a43c4f",
    measurementId: "G-T9Z3PLYZWP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const gglprovider = new firebase.auth.GoogleAuthProvider();
gglprovider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(gglprovider);

export default firebase;