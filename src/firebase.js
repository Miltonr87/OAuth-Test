import * as firebase from 'firebase';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCH26SuQQXyJ1pvGFlEhliA5YtJnHG274o",
    authDomain: "devilstechcommerce.firebaseapp.com",
    projectId: "devilstechcommerce",
    storageBucket: "devilstechcommerce.appspot.com",
    messagingSenderId: "272834964743",
    appId: "1:272834964743:web:83f405ff76219adbc4a9a2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Export Auth + Google Login
  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();