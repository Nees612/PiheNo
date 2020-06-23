import { initializeApp } from 'firebase';

const myApp = initializeApp({
	apiKey: "AIzaSyDn91X821ojWci5Zaf7ds5tnn2vieXQQls",
	authDomain: "testproject-30112.firebaseapp.com",
	databaseURL: "https://testproject-30112.firebaseio.com",
	projectId: "testproject-30112",
	storageBucket: "testproject-30112.appspot.com",
	messagingSenderId: "327156458932",
	appId: "1:327156458932:web:926c4392dae97bf8df7ee1",
	measurementId: "G-6WWGPFENJH"
});

export const database = myApp.firestore()
export const workshopsRef = database.collection("workshops")