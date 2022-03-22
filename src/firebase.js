// import firebase from 'firebase/compat/app';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAORT5BzPs7vEZkRn0jvrilO6I164Fqqk0",
    authDomain: "dhadkan-1o1.firebaseapp.com",
    databaseURL: "https://dhadkan-1o1-default-rtdb.firebaseio.com",
    projectId: "dhadkan-1o1",
    storageBucket: "dhadkan-1o1.appspot.com",
    messagingSenderId: "1071661286989",
    appId: "1:1071661286989:web:95ab5bcde4ea758628be04",
    measurementId: "G-60PGVQXDD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);


// export default firebase;