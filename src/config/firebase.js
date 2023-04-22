import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBJbDmQU_-_US6v_bFolrTDzFyyr3jh1Hc",
  authDomain: "react-project-ae383.firebaseapp.com",
  projectId: "react-project-ae383",
  storageBucket: "react-project-ae383.appspot.com",
  messagingSenderId: "995347528740",
  appId: "1:995347528740:web:12f886fbaa62ded5206cb1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;