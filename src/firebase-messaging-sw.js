importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyB_fndBF8G1yqy2pCamERdxS-GTQToEpVk',
  authDomain: 'teamandwin-3c82f.firebaseapp.com',
  databaseURL: 'https://teamandwin-3c82f.firebaseio.com',
  projectId: 'teamandwin-3c82f',
  storageBucket: 'teamandwin-3c82f.appspot.com',
  messagingSenderId: '38755914548',
  appId: '1:38755914548:web:ed88826f3d18bc917b0b61',
  measurementId: 'G-FBQ49BLYRY'
});

const messaging = firebase.messaging();
