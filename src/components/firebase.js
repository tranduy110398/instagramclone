// import firebase from "firebase/app";
// import 'firebase/auth';
// import "firebase/storage";
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyAs56pdhQ3PotHqHrR6G5UgG9XAr3k_Zg4",
    authDomain: "instagramclone-a85ff.firebaseapp.com",
    projectId: "instagramclone-a85ff",
    storageBucket: "instagramclone-a85ff.appspot.com",
    messagingSenderId: "923950739469",
    appId: "1:923950739469:web:218fb3294d3a84a44ea544",
    measurementId: "${config.measurementId}"
  });

// const firebaseConfig = {
//     apiKey: "AIzaSyAs56pdhQ3PotHqHrR6G5UgG9XAr3k_Zg4",
//     authDomain: "instagramclone-a85ff.firebaseapp.com",
//     projectId: "instagramclone-a85ff",
//     storageBucket: "instagramclone-a85ff.appspot.com",
//     messagingSenderId: "923950739469",
//     appId: "1:923950739469:web:218fb3294d3a84a44ea544",
//     measurementId: "${config.measurementId}"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = firebase.auth();
const storage = firebase.storage();

export {storage, auth};

