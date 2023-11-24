import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Loginn from "../Login";
import Registerr from '../Register'



export default function NavBar() {
  const [showLogin, setShowLogin] = useState(true);
  const handleLoginClick = () => {
    // setShowLogin((showLogin)=>!showLogin);
    setShowLogin(true);

  };  
  const [showRegister, setShowRegister] = useState(false);
  const handleRegisterClick = () => {
    setShowLogin(false);
  };

  return (
    <React.Fragment>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HELLO
          </Typography>
          <Button onClick={handleLoginClick} color="inherit">Login</Button>
        
          <Button onClick={handleRegisterClick} color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
    {showLogin ? <Loginn /> :<Registerr></Registerr>}
    </React.Fragment>
  );
}
