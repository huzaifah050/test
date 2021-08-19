import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/performance';
import 'firebase/analytics';
import 'firebase/firestore';

const clientCred = {
	apiKey: 'AIzaSyCabsMbVoQfeRyOxPdAUygtuXT1ZpvEbZE',
	authDomain: 'next-5a720.firebaseapp.com',
	projectId: 'next-5a720',
	storageBucket: 'next-5a720.appspot.com',
	messagingSenderId: '407505474008',
	appId: '1:407505474008:web:e1b3b0b943c70c18d122ad',
	measurementId: 'G-79MW1PT3RS',
};


export default function initFirebase () {
  if(!firebase.apps.length) {
     firebase.initializeApp(clientCred)
  }
  console.log('Firebase initialized');
}


