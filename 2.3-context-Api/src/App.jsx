import React from "react";
import "./App.css";
import {
  LoginContextProvider,
  RegisterContexttProvider,
} from "../src/components/services/context/index";
import NavBar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <RegisterContexttProvider>
        <LoginContextProvider>
          <NavBar />
        </LoginContextProvider>
      </RegisterContexttProvider>
    </React.Fragment>
  );
}

export default App;
