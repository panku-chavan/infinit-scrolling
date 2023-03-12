import { createContext, useState } from "react";

export const AuthContext=createContext<any>(null);

const AuthContextProvider = ({children}:any) => {
  
  const [state,handleState]=useState({
    isAuth:false,
  })

  const loginUser=()=>{
    handleState({
      ...state,
      isAuth:true,
    })
  }
  const logoutUser=()=>{
    handleState({
      ...state,
      isAuth:false,
    })
  }
  return (
  <AuthContext.Provider value={{authState:state,loginUser,logoutUser}}>
    {children}
  </AuthContext.Provider>
    );
};

export default AuthContextProvider;
