import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth"

 // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOTXk1G4vP483Xuu7CKnOimjmnUgjZxzg",
  authDomain: "remix-blog-92c7d.firebaseapp.com",
  projectId: "remix-blog-92c7d",
  storageBucket: "remix-blog-92c7d.appspot.com",
  messagingSenderId: "39190282021",
  appId: "1:39190282021:web:5314077d6c5f34728b24cc",
  measurementId: "G-RK6HCFV4VZ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }