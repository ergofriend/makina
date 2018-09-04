import firebase from "@firebase/app";
import "@firebase/auth";
import store from "./store";

const config = {
  apiKey: "AIzaSyDkYcITJHznTlVqbroQbZBqDk8UTivrWrA",
  authDomain: "for-test-firebase.firebaseapp.com",
  databaseURL: "https://for-test-firebase.firebaseio.com",
  projectId: "for-test-firebase",
  storageBucket: "for-test-firebase.appspot.com",
  messagingSenderId: "951272108176"
};

export default {
  init() {
    firebase.initializeApp(config);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  },
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function() {
        var user = firebase.auth().currentUser;
        store.commit("onAuthStateChanged", user);
      })
      .catch(function() {
        console.log("login");
      });
  },
  logout() {
    firebase
      .auth()
      .signOut()
      .then(function() {
        store.commit("onAuthStateChanged", {});
      })
      .catch(function() {
        console.log("logout");
      });
  },
  onAuth() {
    firebase.auth().onAuthStateChanged(user => {
      user = user ? user : {};
      store.commit("onAuthStateChanged", user);
    });
  }
};
