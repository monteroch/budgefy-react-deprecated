import * as firebase from 'firebase';
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
      console.log('Initializing Firebase...');
      if(!firebase.apps.length)
        firebase.initializeApp(firebaseConfig);
  }

  export const storeHighScore = (userId, score) => {
      console.log("Inside storeHighScore");
      firebase.database().ref('users/' + userId).set({
          highscore: score
      });
  };
//   firebase.analytics();