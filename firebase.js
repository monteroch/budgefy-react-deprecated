import * as firebase from 'firebase';
import NavigationService from './services/NavigationService';
import { 
    API_KEY, 
    AUTH_DOMAIN, 
    DATABASE_URL, 
    PROJECT_ID, 
    STORAGE_BUCKET, 
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID
 } from 'react-native-dotenv';

// Initialize Firebase
var firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
  };

  // Initialize Firebase
  export const initFirebase = () => {
      if(!firebase.apps.length)
        firebase.initializeApp(firebaseConfig);
  }

  //Save user into db, before creating the user
  export const saveUserintoDB = (id, fullname, email) => {
      firebase.database().ref('users/' + id).set({
          fullname: fullname,
          email: email
      });
  };

  //create user
  export const createUser = (email, password, fullname) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((response) => {
        let id = Date.now();
        console.log(`${email} has been registered`);
        let uid = response.user.uid;
        saveUserintoDB(id, fullname, email);
        return uid;
    })
    .catch(error => console.log(error))
  };

  export const login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((response) => {
      console.log("Successful signed in");
        let uid = response.user.uid;
        NavigationService.navigate('Home', {uid: uid});
    })
    .catch(error => console.log(error))
  };
//   firebase.analytics();