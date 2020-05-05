import * as firebase from 'firebase';
import * as RootNavigation from './routes/RootNavigation';

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
  export const saveUserintoDB = (uid, fullname, email) => {
      firebase.database().ref('users/' + uid).set({
          fullname: fullname,
          email: email
      });
  };

  //create user
  export const createUser = (email, password, fullname) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((response) => {
        console.log(`${email} has been registered`);
        let uid = response.user.uid;
        saveUserintoDB(uid, fullname, email);
        RootNavigation.navigate('Dashboard', { uid: uid });
    })
    .catch(error => console.log(error))
  };

  export const login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((response) => {
      console.log("Successful signed in");
        let uid = response.user.uid;
        RootNavigation.navigate('Dashboard', { uid: uid });
    })
    .catch(error => console.log(error))
  };

  export const addPaymentMethod = (paymentMethod, uid) => {
    firebase.database().ref('users/' + uid + '/paymentMethods').push({
      type: paymentMethod.type,
      name: paymentMethod.name,
      number: paymentMethod.number,
      balance: paymentMethod.balance
    });
  }
//   firebase.analytics();