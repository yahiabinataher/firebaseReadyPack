import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth } from "../firebaseConfig";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [authUser,setAuthUser] = useState(null);
  const [loading,setLoading] = useState(true);
  const [campaignData, setCampaignData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

 
 
 //fatch data 
 const fetchData = async () => {
  try {
    const response = await fetch("https://expressfast.vercel.app/campain"); 
    const data = await response.json();
    setCampaignData(data.data); 
  } catch (error) {
    console.error("Fetching data failed:", error);
  }
};
  
  //handle singup
  const createUser = (email,password) => {
    setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
  }
  //handle login
  const loginUser = (email,password) => {
    setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
  }
//handle logout
  const logOut = () => {
    setLoading(true)
      return signOut(auth)
  }


  // auth user handle
  useEffect(()=> {
    
     const unSubscribe =  onAuthStateChanged(auth,(currentUser) => {
             setAuthUser(currentUser)
             setLoading(false) 
      })
     
//api call
      fetchData()
      return () => {
          unSubscribe()
      }

  },[campaignData])

  const user = {
      authUser,
      createUser,
      loginUser,
      logOut,
      loading,
      setLoading,
      campaignData,
      setCampaignData,
      darkMode,
      toggleDarkMode
  }
  return (
    <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider