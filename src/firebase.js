import firebase from '@firebase/app';
import '@firebase/auth';
import store from './store';

const config = {
  apiKey: 'AIzaSyDkYcITJHznTlVqbroQbZBqDk8UTivrWrA',
  authDomain: 'for-test-firebase.firebaseapp.com',
  databaseURL: 'https://for-test-firebase.firebaseio.com',
  projectId: 'for-test-firebase',
  storageBucket: 'for-test-firebase.appspot.com',
  messagingSenderId: '951272108176'
};

export default {
  init() {
    firebase.initializeApp(config);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  },
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  },
  logout() {
    firebase.auth().signOut();
  },
  onAuth() {
    firebase.auth().onAuthStateChanged(user => {
      user = user ? user : {};
      store.commit('onAuthStateChanged', user);
      store.commit('onUserStatusChanged', user.uid ? true : false);
    });
  }
};
