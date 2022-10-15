import { useState } from "react";
import { createContext } from "react";
import { Children } from "react";

export const AuthContext=createContext()

function AuthContextProvider({children}){
    const [isAuth,setIsAuth]=useState(false);
    function handleIsAuth(value){

        setIsAuth(value)
    }
    return(
        <AuthContext.Provider value={{isAuth,handleIsAuth}}>
        {
            children
        }
        </AuthContext.Provider>
    )
}
export default AuthContextProvider