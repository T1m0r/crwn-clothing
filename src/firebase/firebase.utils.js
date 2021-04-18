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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	// IF User is not signed in
	if (!userAuth) return;

	// Query if auth-User is in DB
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	//console.log(snapShot);

	// If user does not exist create it
	if (!snapShot.exists) {
		// What data do we want to store
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({ displayName, email, createdAt, ...additionalData });
		} catch (error) {
			console.log("Error creating User", error.message);
		}
	}
	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
