
import LoginRoutes from "./routes/LoginRoutes"
import AppRoutes from "./routes/AppRoutes";
import { Navigate } from "react-router";
import { useEffect } from "react";


function App() {

  const isLoginData = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if(isLoginData.isLogin){
      return 
    }
    else{
      if(window.location.pathname !=="/login"){
        window.location.pathname = "/login"
      }
    }
  }, [isLoginData.isLogin]);

  return (
    <>
      {
        isLoginData.isLogin ? <AppRoutes /> : <LoginRoutes />
      }
    </>
  )
}

export default App
