import React, { useState, createContext } from "react";
import "regenerator-runtime/runtime";
import { auth, signInWithGoogle } from "./../auth";

export const UserContext = createContext();

function Provider({ children }) {
  const [user, setUser] = useState();

  const handleUserSignIn = async () => {
    let resp = await signInWithGoogle();
    if (resp.displayName) {
      setUser(resp.displayName);
    }
  };

  const handleUserSignOut = () => {
    auth.signOut();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, handleUserSignIn, handleUserSignOut }}>
      {children}
    </UserContext.Provider>
  );
}

export default Provider;
