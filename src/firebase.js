import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyCHoK1Ez1aQCy5ZYG-TbYVvc5EYzdOZF3Y",
    authDomain: "reels-40f74.firebaseapp.com",
    projectId: "reels-40f74",
    storageBucket: "reels-40f74.appspot.com",
    messagingSenderId: "422707203737",
    appId: "1:422707203737:web:33a4a324e3e3df5196b208"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()