import axios from "axios";
import {
  Children,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [token, setToken_] = useState(localStorage.getItem("token"));
  const setToken = (newToken) => {
    setToken_(newToken);
  };

  // This effect runs whenever the token value changes.
  // If the token exists, it sets the authorization header in axios and localStorage.
  // If the token is null or undefined, it removes the authorization header from axios and localStorage.
  
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer" + token;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);


// Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

// Provide the authentication context to the children components
  return(
    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
  )
};

export const useAuth=()=>{
    return useContext(AuthContext);
}

export default AuthProvider;