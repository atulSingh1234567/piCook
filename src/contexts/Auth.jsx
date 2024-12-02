import { useContext , createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
const AuthContext = createContext();

export const  AuthContextProvider = ({children})=>{
    const [user , setUser] = useState();
    const [photoBox , setPhotoBox] = useState(false)
    const [error , setError] = useState({})
    const [image , setImage] = useState('')
    const [showLoader, setShowLoader] = useState(false)
    const logOut = ()=>{
        try {
            setUser(null)
            localStorage.removeItem('user')
            Cookies.remove('accessToken')
            window.location.href = '/login'
        } catch (error) {
            console.log('could not log out! ', error)
        }
    }
    useEffect(
        ()=>{
            const accessToken = Cookies.get('accessToken')
            if(accessToken){
                const user = JSON.parse(localStorage.getItem('user'))
                setUser(user);
            }
            else{
                localStorage.removeItem('user')
            }
        },[]
    )

    return <AuthContext.Provider value={{showLoader,setShowLoader,error,setError,user,setUser,image,setImage,setPhotoBox,photoBox,logOut}}>
        {
           children
        }
    </AuthContext.Provider>
}

export const useAuthContext = ()=>{
    return useContext(AuthContext)
}