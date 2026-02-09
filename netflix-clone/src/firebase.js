
import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut } from "firebase/auth";
import { 
    addDoc, 
    collection, 
    getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAtYWNUyVk-p4VthUGzzm8DvRzhiAc7vy4",
  authDomain: "netflix-clone-8eb27.firebaseapp.com",
  projectId: "netflix-clone-8eb27",
  storageBucket: "netflix-clone-8eb27.firebasestorage.app",
  messagingSenderId: "446121875530",
  appId: "1:446121875530:web:029379b63164cf2b58aeb3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }

    let message = error.code.split('/')[1].split('-').join(" ");

    if (message === "invalid credential") {
        message += "s";
    }

    toast.error(message);
}

const logout = () => {
    signOut(auth);
}

export { auth, db, login, signup, logout };