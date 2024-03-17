import { createContext, useContext } from "react";

const myContext = createContext({
    isLoggedIn : false,
    setIsLoggedIn : ()=>{}
})

export const MyContextProvider = myContext.Provider;

export const useMyContext = ()=>{
    return useContext(myContext)
}