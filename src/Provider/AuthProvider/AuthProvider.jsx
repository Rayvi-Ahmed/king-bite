
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase_config";

const auth = getAuth(app);

// Context////
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    const signUp = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(false)
        return signOut(auth)

    }

    const logIn = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)


    }

    // User sustainbility / Observer////
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                alert('user is created !')
            }
            setLoading(false)
        })
        return () => {
            unSubscribe
        }

    }, [])
    const authInfo = {
        signUp,
        loading,
        user,
        logOut,
        logIn,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;