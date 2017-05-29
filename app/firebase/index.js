import firebase from 'firebase';

try {
  const config = {
    apiKey: "AIzaSyAN7g-9rEEUO6CXOX6aY6ua6Z3Mcr3wdhc",
    authDomain: "headlines-9b423.firebaseapp.com",
    databaseURL: "https://headlines-9b423.firebaseio.com",
    projectId: "headlines-9b423",
    storageBucket: "headlines-9b423.appspot.com",
    messagingSenderId: "215630532516"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export let firebaseRef = firebase.database().ref();
export default firebase;
