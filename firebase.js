// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAsCujffUGvMBF463ibK9id9-5Lfe_h9v8',
	authDomain: 'oval-machine-333300.firebaseapp.com',
	projectId: 'oval-machine-333300',
	storageBucket: 'oval-machine-333300.appspot.com',
	messagingSenderId: '280845890257',
	appId: '1:280845890257:web:55895ff93420d7c3d30bf0',
	measurementId: 'G-JNS9ZTH7ZQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth, analytics };
