import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useContext} from "react";
import { CardsContextt } from "../services/context";
import Loginn from '../Login';
const Navbarx = () => {
  const {login, showLogin} = useContext(CardsContextt);

  return (
    <React.Fragment>
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
        News
      </Typography>
      <Button color="inherit"><Loginn/></Button>
      <Button color="inherit">Basket</Button>
    </Toolbar>
  </AppBar>
  {showLogin ? <Loginn />: null}
    </React.Fragment>
  )
}

export default Navbarx