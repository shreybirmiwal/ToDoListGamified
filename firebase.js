// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAsx4VVjcnqm5mBwSgwc28XLAIqTnkGJQk",
  authDomain: "socialtodo-71d0b.firebaseapp.com",
  projectId: "socialtodo-71d0b",
  storageBucket: "socialtodo-71d0b.appspot.com",
  messagingSenderId: "218363788567",
  appId: "1:218363788567:web:9df11ca1e18d81e9660b52"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };