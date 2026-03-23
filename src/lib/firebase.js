// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_R_bN7tF1G68RYAeUviXZF8618LJzRnU",
  authDomain: "gearvndb.firebaseapp.com",
  projectId: "gearvndb",
  storageBucket: "gearvndb.firebasestorage.app",
  messagingSenderId: "163580213267",
  appId: "1:163580213267:web:95b40c7838d1be5616e7e6",
  measurementId: "G-1S6QR3X85C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);