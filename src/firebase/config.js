import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAm4cd6Go50rFyxpll4ttHc3bCraqKsF8Y",
  authDomain: "miniblog-e4665.firebaseapp.com",
  projectId: "miniblog-e4665",
  storageBucket: "miniblog-e4665.appspot.com",
  messagingSenderId: "408366244167",
  appId: "1:408366244167:web:2cdabf6c68cfaf2548ec62",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
