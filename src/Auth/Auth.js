import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

export const CreateAccount = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const LoginAccount = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const SignOut = () => {
    return auth.signOut();
};