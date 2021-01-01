import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAjtfgAJGfv1QweX9eWa8fkrWjZxD9fi9o",
    authDomain: "clone-d5bad.firebaseapp.com",
    databaseURL: "https://clone-d5bad.firebaseio.com",
    projectId: "clone-d5bad",
    storageBucket: "clone-d5bad.appspot.com",
    messagingSenderId: "736853290642",
    appId: "1:736853290642:web:1eaf531e8ed0baecf5c04b",
    measurementId: "G-V5RHLRP3R4"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };