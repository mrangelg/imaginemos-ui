import React from "react";
import "normalize.css";
import UserProvider from "./provider";
import Home from "./pages/Home";

const App = () => {
  return (
    <UserProvider>
      <Home />
    </UserProvider>
  );
};

export default App;
