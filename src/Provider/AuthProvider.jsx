import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';


export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null)
    console.log(user)
    // userRegister
    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // UserLogIn
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth,email, password)
    }
    // Logout 
    const logOutUser = ()=> {
        signOut(auth)
    }

    useEffect(()=> {
        const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return ()=> {
            unSubscribe()
        }
    },[])

    const authData = {
        user,
        setUser,
        signUpUser,
        logOutUser,
        signInUser
    }

    return (
            <AuthContext value={authData}>
                {children}
            </AuthContext>
    );
};

export default AuthProvider;