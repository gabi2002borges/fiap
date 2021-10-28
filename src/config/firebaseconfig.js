import firebase from "firebase"
import "firebase/storage"

var firebaseConfig = {
  apiKey: "AIzaSyCmc5V_Oxh1EMEUSUDTnXl873bLWn9B8Gg",
  authDomain: "login-3d405.firebaseapp.com",
  projectId: "login-3d405",
  storageBucket: "login-3d405.appspot.com",
  messagingSenderId: "179557630434",
  appId: "1:179557630434:web:ca3c98dcc608118dbdf9bb",
  measurementId: "G-ERREGWWJ7F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase