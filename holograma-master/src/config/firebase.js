import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBSxxdlduhp2udNTL8YeLvjC-YRzWefj2o",
  authDomain: "holograma-db2f8.firebaseapp.com",
  projectId: "holograma-db2f8",
  storageBucket: "holograma-db2f8.appspot.com",
  messagingSenderId: "236174191208",
  appId: "1:236174191208:web:8bcc6764c122f59fcda9dd"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default app
