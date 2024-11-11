import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const config = {
    apiKey: "AIzaSyDSQxumeQxt_kDl2zVOA4o9trkBogxGx5Q",
    authDomain: "control-alumnos-a594a.firebaseapp.com",
    databaseURL: "https://control-alumnos-a594a-default-rtdb.firebaseio.com",
    projectId: "control-alumnos-a594a",
    storageBucket: "control-alumnos-a594a.appspot.com",
    messagingSenderId: "531632945498",
    appId: "1:531632945498:web:005213130b31f9d48d5b63",
    measurementId: "G-W1Y3XP96HZ"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  export default firebase;