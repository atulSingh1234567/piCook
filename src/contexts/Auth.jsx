import { signInWithPopup, GoogleAuthProvider , signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../components/login/firebase.config.js";
import { useContext , createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const  AuthContextProvider = ({children})=>{
    const [user , setUser] = useState({});
    const [photoBox , setPhotoBox] = useState(false)
    const [image , setImage] = useState('')
    const googleSignIn =  ()=>{
        const Provider = new GoogleAuthProvider();
        signInWithPopup(auth , Provider)
    }

    const logOut = ()=>{
        signOut(auth)
    }

    useEffect(
        ()=>{
            const unsub = onAuthStateChanged(auth , (authUser)=>{
                setUser(authUser);
                console.log(authUser)
            })

            return ()=>unsub();
        },[]
    )

    return <AuthContext.Provider value={{googleSignIn,user,image,setImage,setPhotoBox,photoBox,logOut}}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext = ()=>{
    return useContext(AuthContext)
}