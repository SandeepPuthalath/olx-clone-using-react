import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpxsSlVfD47y98NmcTAL3K8t71BdFt-fI",
    authDomain: "fir-c0a97.firebaseapp.com",
    projectId: "fir-c0a97",
    storageBucket: "fir-c0a97.appspot.com",
    messagingSenderId: "632658986985",
    appId: "1:632658986985:web:cd66f2173423a1edb72d78",
    measurementId: "G-V570HYXRYM"
  };

export default  firebase.initializeApp(firebaseConfig)

