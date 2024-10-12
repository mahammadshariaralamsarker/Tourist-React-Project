import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../firebase.cofig";
import { GithubAuthProvider } from "firebase/auth";

// const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password);
        console.log("hello")
    }

    const signinUser = (email, password) => {
        setLoading(true);
        console.log('login')
        console.log(email, password)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode, errorMessage)
            });
    }
    const goggleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleprovider)
    }
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubprovider)
    }
    const logOut = () => {
        setLoading(false);
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    const userInfo = {
        user,
        createUser,
        loading,
        signinUser,
        goggleLogin,
        githubLogin,
        logOut,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;