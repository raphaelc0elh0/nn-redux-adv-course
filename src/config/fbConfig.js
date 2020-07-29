import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import configObject from './configObject';

// Initialize Firebase
firebase.initializeApp(configObject);
firebase.firestore();

export default firebase;