import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyChgDlQ6sy5w4lizsBFKPIC02_ZPFXA15c",
  authDomain: "microbloggingapp-f3af3.firebaseapp.com",
  projectId: "microbloggingapp-f3af3",
  storageBucket: "microbloggingapp-f3af3.appspot.com",
  messagingSenderId: "741625542230",
  appId: "1:741625542230:web:3f1e6efbe9b77a4351adf7",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
