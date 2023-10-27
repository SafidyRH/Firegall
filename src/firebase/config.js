import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyAnZHFZLJgFRgX-UdLAnOKrI7PvkU-7duY",
  
    authDomain: "firegram-3e988.firebaseapp.com",
  
    projectId: "firegram-3e988",
  
    storageBucket: "firegram-3e988.appspot.com",
  
    messagingSenderId: "831424960273",
  
    appId: "1:831424960273:web:55655e611c4497c89bdeb0"
  
  };
  
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const  projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};

  