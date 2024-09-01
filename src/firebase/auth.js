import { auth } from "./firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    // sendEmailVerification,
    signOut,
    onAuthStateChanged,
    updateProfile,
} from "firebase/auth";

// register/signup
export const doCreateUserWithEmailAndPassword = async (email, password, name) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Set the display name
    await updateProfile(user, {
        displayName: name,
    });

    return userCredential;
};

// login
export const doSignInWithEmailAndPassword = async (email, password) => {
    try {
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        throw new Error(error.message);
    }
};

// logout
export const doSignOut = () => {
    return signOut(auth);
};

// Getting Account/profle
export const onAuthStateChange = (callback) => {
    return onAuthStateChanged(auth, callback);
};