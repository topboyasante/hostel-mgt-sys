import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {browserLocalPersistence, getAuth, setPersistence} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD0a-64m2Yew75uR_pSKZOtWmGmvq88V7g",
  authDomain: "hostel-mgt-sys.firebaseapp.com",
  projectId: "hostel-mgt-sys",
  storageBucket: "hostel-mgt-sys.appspot.com",
  messagingSenderId: "998702858446",
  appId: "1:998702858446:web:dff9e9f9f9726a8dd4909f",
  measurementId: "G-228WZFRWNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)