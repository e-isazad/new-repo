import React from "react";
import "./App.css";
import Navbarx from "./components/Navbar";
import {
  CardsContextProvider,
  LoginContextProvider,
} from "./components/services/context";
function App() {
  return (
    <React.Fragment>
      <LoginContextProvider>
        <CardsContextProvider>
          <Navbarx />
        </CardsContextProvider>
      </LoginContextProvider>
    </React.Fragment>
  );
}

export default App;
