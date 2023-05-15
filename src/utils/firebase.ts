
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {  apiKey: "AIzaSyBn873uB06o5WcxAlHg_o-wqg5O1v-l_y0",
authDomain: "letschat-f2162.firebaseapp.com",
projectId: "letschat-f2162",
storageBucket: "letschat-f2162.appspot.com",
messagingSenderId: "346242011930",
appId: "1:346242011930:web:7e623fefe8cf7fd84292a3",
measurementId: "G-QJSPM9KT8J",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();