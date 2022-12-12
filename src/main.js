import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var config = {
    apiKey: "AIzaSyC4keGX5MRyVTYoX7NMQtHMRujg2p3TmVU",
    authDomain: "server-status-app-5b30d.firebaseapp.com",
    projectId: "server-status-app-5b30d",
    storageBucket: "server-status-app-5b30d.appspot.com",
    messagingSenderId: "369043395334",
    appId: "1:369043395334:web:ec7eeb787d1993b35e0487",
    measurementId: "G-0CN7X3408F"
}; // 4. Get Firebase Configuration
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.usePublicVapidKey("BIbMQKF9D97qH5z5pS0WupSADTFBzy3Pu-Kw1XQ-X9kg17u9shRAHo-S8r6uPWNuxfYT-fRxa21kp5kKEF63owY"); // 1. Generate a new key pair

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

createApp(App).use(store).use(router).mount('#app')
