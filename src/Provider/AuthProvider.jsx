import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';


export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // useUpdateProfile
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }
    // userRegister
    const signUpUser = (email, password) => {
        
        setLoading(true)
        console.log(email, password)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // UserLogIn
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }
    // Logout 
    const logOutUser = ()=> {
        signOut(auth)
    }

    useEffect(()=> {
        const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
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
        signInUser,
        setLoading,
        loading,
        updateUser
    }

    return (
            <AuthContext.Provider value={authData}>
                {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;