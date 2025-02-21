import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

export const authContext = createContext(null); 
const AuthProvider = ({ children }) => {
  
 const [user, setUser] = useState(null)
  // const [forgetPass,setForgetPass]=useState('')
  // console.log(user)
 
  const [loading,setLoading]=useState(true)
   const provider= new GoogleAuthProvider()

  
  
  const handleCreateNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
    
  }
  const handleSignin = (email, password) => {
setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
     
  }
  const handleLogOut = () => {
    setLoading(true)
    //  toast.success('successfully LogOut', {
    //       position: "top-center",
    //       theme: "colored",
    //       autoClose: 3000,
          
    //    })
   
    signOut(auth)
  }

  // const updateUserProfile = (updatedData) => {
  //   console.log(updatedData)
  //   return updateProfile(auth.currentUser, updatedData);

  // }
  const loginWithGoogle = () => {
    return signInWithPopup(auth,provider)
  }
 const authInfo = {
    handleCreateNewUser,
    user,
    setUser,
    handleLogOut,
    handleSignin,
    loading,
    // updateUserProfile,
   
    loginWithGoogle,
    // forgetPass,
    // setForgetPass
    


  }

  useEffect(() => {

    
    const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  },[])
  return (
    <authContext.Provider value={authInfo}>
      {children}
   </authContext.Provider>
  );
};

export default AuthProvider;