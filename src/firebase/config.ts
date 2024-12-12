import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

export const app = firebase.initializeApp({
    apiKey: "AIzaSyBNyUWUIztfV5orr8IMcAIw9gXgWhKzNsI",
    authDomain: "mdc-guide.firebaseapp.com",
    projectId: "mdc-guide",
    storageBucket: "mdc-guide.appspot.com",
    messagingSenderId: "14031118432",
    appId: "1:14031118432:web:6d36395657f2333824a305",
    measurementId: "G-23CQ8HKFBM"
})


const auth = app.auth();
const db = app.firestore();
const storage = app.storage();
export {auth, db, storage };
export default app; 