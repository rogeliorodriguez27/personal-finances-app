//Firebase

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
  import { getFirestore, collection, addDoc, getDocs, onSnapshot} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCpYwmaddXQsI91IZiW5hso9S3F9pncO8k",
    authDomain: "personal-finances-app-a6d63.firebaseapp.com",
    projectId: "personal-finances-app-a6d63",
    storageBucket: "personal-finances-app-a6d63.appspot.com",
    messagingSenderId: "147581975981",
    appId: "1:147581975981:web:5d8010b6d2638bcff7b524",
    measurementId: "G-02BTDDCQEJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore();

  //save data
  export const saveTransaction = (name, value) => addDoc(collection(db, 'transaction'),{name, value});
  //get data
  export const getDataTransactions = () => getDocs(collection((db),'transaction'));
  export const onGetTransactions = (callback) => onSnapshot(collection(db, 'transaction'), callback);
  