// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3sWhMo5tt9trhSFz2dj4cE1fS6HHl-BA",
  authDomain: "to-do-list-react-native-41612.firebaseapp.com",
  projectId: "to-do-list-react-native-41612",
  storageBucket: "to-do-list-react-native-41612.appspot.com",
  messagingSenderId: "622601798982",
  appId: "1:622601798982:web:99c46af6e0156abc211147",
  measurementId: "G-0CZCD3RNF8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestoreDB = firebase.firestore();
const auth = firebase.auth();

export {firestoreDB, auth};

// firestoreDB.collection("users").add({
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });