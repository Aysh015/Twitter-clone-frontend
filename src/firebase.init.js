import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAPQqmnwvoalb9NJIEn13ssQkX5AZ4nzDk",
  authDomain: "twitter-clone-a1f34.firebaseapp.com",
  projectId: "twitter-clone-a1f34",
  storageBucket: "twitter-clone-a1f34.appspot.com",
  messagingSenderId: "978083669871",
  appId: "1:978083669871:web:0a1e73a317ae3b19e7aa9a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;