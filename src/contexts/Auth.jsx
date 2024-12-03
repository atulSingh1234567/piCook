import { useContext , createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from 'axios'
const AuthContext = createContext();

export const  AuthContextProvider = ({children})=>{
    const [user , setUser] = useState();
    const [photoBox , setPhotoBox] = useState(false)
    const [error , setError] = useState({})
    const [image , setImage] = useState('')
    const [showLoader, setShowLoader] = useState(false)
    const [savedPhotoByUser, setSavedPhotoByUser] = useState([])
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

    const saveThePhoto = (photoId)=>{
        try {
            const accessToken = Cookies.get('accessToken');
            const userId = JSON.parse(localStorage.getItem('user'))
            if(accessToken){
                axios.post('http://localhost:8000/api/v1/photos/save-photo' , {userId,photoId,accessToken})
                .then(
                    (res)=>{
                        console.log(res);
                    }
                )
            }
            else{
                console.log("lsakdfjlksdjf")
            }
        } catch (error) {
            console.log(error)
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

    return <AuthContext.Provider value={{savedPhotoByUser,setSavedPhotoByUser,saveThePhoto,showLoader,setShowLoader,error,setError,user,setUser,image,setImage,setPhotoBox,photoBox,logOut}}>
        {
           children
        }
    </AuthContext.Provider>
}

export const useAuthContext = ()=>{
    return useContext(AuthContext)
}