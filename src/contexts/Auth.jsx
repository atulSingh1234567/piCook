import { signInWithPopup, GoogleAuthProvider , signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../components/login/firebase.config.js";
import { useContext , createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from 'axios'

const AuthContext = createContext();

export const  AuthContextProvider = ({children})=>{
    const [user , setUser] = useState({});
    const [photoBox , setPhotoBox] = useState(false)
    const [error , setError] = useState({})
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

            const accessToken = Cookies.get('accessToken');
            axios.post('http://localhost:8000/api/v1/users/fetch-user' , {
                accessToken
            })
            .then(
                res => {console.log(res)
                setUser(res.data)}
            )
            .catch(
                err => console.log(err)
            )

            return ()=>unsub();
        },[]
    )

    return <AuthContext.Provider value={{googleSignIn,error,setError,user,setUser,image,setImage,setPhotoBox,photoBox,logOut}}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext = ()=>{
    return useContext(AuthContext)
}