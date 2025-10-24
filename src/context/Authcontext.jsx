import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.config";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";


export const AuthContext = createContext();
const googleProvider  = new GoogleAuthProvider()
const githubProvider  = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email , password ) => {
    return signInWithEmailAndPassword(auth ,email , password)
  }

  const signInWithGoogle = () => {
    return signInWithPopup(auth , googleProvider)
  }


  const signInWithGithub = () => {
    return signInWithPopup(auth , githubProvider)
  }

  const signOutUser = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("user signed out");
      }
    });


    return () => unSubscribe()
  }, []);

  const value = {
    user,
    createUser,
    loginUser,
    signInWithGoogle,
    signInWithGithub,
    signOutUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
