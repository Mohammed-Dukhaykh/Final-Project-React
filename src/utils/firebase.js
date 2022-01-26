import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyB5yZ4gMw7iWVdok3UJZjTeynl8ReVakKM",
    authDomain: "jobs-db988.firebaseapp.com",
    projectId: "jobs-db988",
    storageBucket: "jobs-db988.appspot.com",
    messagingSenderId: "1085047959436",
    appId: "1:1085047959436:web:a5c4c08b413db850f7f0a9",
    measurementId: "G-JE0B6XDK24"
  };
  
  
  firebase.initializeApp(firebaseConfig)
  
  export default firebase