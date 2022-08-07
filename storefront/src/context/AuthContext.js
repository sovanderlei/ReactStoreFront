import React, { createContext, useState, useEffect  } from 'react';
import { cookieGet, cookieSet, cookieDelet } from '../components/Useful';
 
/*
{interface IUserLogin {
  username: String;
}
*/

const Context = createContext();  
function AuthProvider({ children }) {
 
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userLogin, setUserLogin] = useState({
      name: ''
    }); 
    
    useEffect(() => { 
        setLoading(true); 
        const API_REQUEST_COOKIE = cookieGet();  
        if (API_REQUEST_COOKIE !== "") {  
           setAuthenticated(true);
        }  
        setLoading(false); 
      }, [userLogin]);    
    

    async function handleLogin(user, token){ 
        cookieSet(token); 
        setUserLogin(user); 
        setAuthenticated(false);
        const API_REQUEST_COOKIE = cookieGet(); 
        if (API_REQUEST_COOKIE) { 
            setAuthenticated(true);
            window.location = "http://localhost:3000/home"
        } 
        setLoading(false);  
    }

    function handleLogout() { 
        setAuthenticated(false);
        cookieDelet(); 
        window.location = "http://localhost:3000/login"
    }

  
 
  return (  
    <Context.Provider value={{loading, authenticated, handleLogin, handleLogout, userLogin,setUserLogin}} >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };