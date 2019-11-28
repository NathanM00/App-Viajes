import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyB6eXKltwHimBnTr98Q1fC6Rn6S5Effc7o",
  authDomain: "rcomend-fadea.firebaseapp.com",
  databaseURL: "https://rcomend-fadea.firebaseio.com",
  projectId: "rcomend-fadea",
  storageBucket: "rcomend-fadea.appspot.com",
  messagingSenderId: "432186738151",
  appId: "1:432186738151:web:280726a6e1efd6ea5a6942"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const fb = firebase;