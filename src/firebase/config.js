import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

import {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
} from "@env";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: `${apiKey}`,
    authDomain: `${authDomain}`,
    projectId: `${projectId}`,
    storageBucket: `${storageBucket}`,
    messagingSenderId: `${messagingSenderId}`,
    appId: `${appId}`,
};

// Initialize Firebase only if it's first time...
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
