import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDY5mPxHjOj7KJPxjWup-RmRZQECaggor0",
	authDomain: "react-tutorial-crwn-db.firebaseapp.com",
	projectId: "react-tutorial-crwn-db",
	storageBucket: "react-tutorial-crwn-db.appspot.com",
	messagingSenderId: "739698033111",
	appId: "1:739698033111:web:cdc55fc5c0b7d381b18b92",
	measurementId: "G-0FEH5VL576",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestote = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
