
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAsx4VVjcnqm5mBwSgwc28XLAIqTnkGJQk",
  authDomain: "socialtodo-71d0b.firebaseapp.com",
  projectId: "socialtodo-71d0b",
  storageBucket: "socialtodo-71d0b.appspot.com",
  messagingSenderId: "218363788567",
  appId: "1:218363788567:web:9df11ca1e18d81e9660b52"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();