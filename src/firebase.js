import firebase from 'firebase'; 
import 'firebase/database'

// Initialize Firebase
// USE YOUR CONFIG OBJECT
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1vbgujCHtmUOKXamUVfl9eh5M0Nb1S_o",
    authDomain: "grocery-list-73906.firebaseapp.com",
    databaseURL: "https://grocery-list-73906.firebaseio.com",
    projectId: "grocery-list-73906",
    storageBucket: "grocery-list-73906.appspot.com",
    messagingSenderId: "431558922197",
    appId: "1:431558922197:web:818a1b8c12597f3040775c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// this exports the CONFIGURED version of firebase
export default firebase;