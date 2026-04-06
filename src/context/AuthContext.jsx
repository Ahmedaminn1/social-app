import { createContext, useEffect, useState } from "react";
import { getLoggedUserData } from "../services/authServices";

export const authContext = createContext();
export default function AuthContextProvider({ children }) {
  const [token, settoken] = useState(localStorage.getItem("userToken"));
  const [userData, setuserData] = useState("")
  const [isLoading, setisLoading] = useState(false)
  
  async function getUserData() {
    try {
      setisLoading(true)
      const response = await getLoggedUserData();
      const body = response?.data;
      const apiPayload = body?.data || body; // Auto-discovery for nested data field
      
      // Auto-Discovery Logic: Find user object wherever it is hidden
      if (apiPayload?.user) {
        setuserData(apiPayload.user);
      } else if (apiPayload && (apiPayload.name || apiPayload.email)) {
        // The payload itself IS the user object
        setuserData(apiPayload);
      }
    } catch (error) {
      console.error("DEBUG: Failed to fetch profile:", error.response?.data || error.message);
    } finally {
      setisLoading(false)
    }
  }
  useEffect(() => {
    if(token){
      getUserData()
    }
  }, [token])
  
  return (
    <authContext.Provider value={{ token, settoken,userData,isLoading}}>
      {children}
    </authContext.Provider>
  );
}
