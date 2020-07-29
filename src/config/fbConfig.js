import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCMDWf-r6P1W0FJrg3ES118R9PJ3p5LyQM",
  authDomain: "react-redux-adv-course.firebaseapp.com",
  databaseURL: "https://react-redux-adv-course.firebaseio.com",
  projectId: "react-redux-adv-course",
  storageBucket: "react-redux-adv-course.appspot.com",
  messagingSenderId: "544020372105",
  appId: "1:544020372105:web:fe29bf23e0d9f547fd8458",
  measurementId: "G-TRBSN581KC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;