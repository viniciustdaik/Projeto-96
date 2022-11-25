import firebase from "firebase";

/*export*/ const firebaseConfig = {
  apiKey: "AIzaSyCeBcWyeIr6HWw9qGsCin9oTkD7XPOZucc",
  authDomain: "apanhador-de-frutas-8bde9.firebaseapp.com",
  databaseURL: "https://apanhador-de-frutas-8bde9-default-rtdb.firebaseio.com",
  projectId: "apanhador-de-frutas-8bde9",
  storageBucket: "apanhador-de-frutas-8bde9.appspot.com",
  messagingSenderId: "1040942860465",
  appId: "1:1040942860465:web:09faac8ed975d0b6363a90"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
