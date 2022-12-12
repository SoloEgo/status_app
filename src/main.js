import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken  } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4keGX5MRyVTYoX7NMQtHMRujg2p3TmVU",
  authDomain: "server-status-app-5b30d.firebaseapp.com",
  databaseURL: "https://server-status-app-5b30d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "server-status-app-5b30d",
  storageBucket: "server-status-app-5b30d.appspot.com",
  messagingSenderId: "369043395334",
  appId: "1:369043395334:web:ec7eeb787d1993b35e0487",
  measurementId: "G-0CN7X3408F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(store).use(router).mount('#app')

const messaging = getMessaging(app);
getToken(messaging, {vapidKey: "BIbMQKF9D97qH5z5pS0WupSADTFBzy3Pu-Kw1XQ-X9kg17u9shRAHo-S8r6uPWNuxfYT-fRxa21kp5kKEF63owY"});

// Request Permission of Notifications
messaging.requestPermission().then(() => {
    console.log('Notification permission granted.');
    
    // Get Token
    messaging.getToken().then((token) => {
        console.log(token)
    })
}).catch((err) => {
    console.log('Unable to get permission to notify.', err);
});