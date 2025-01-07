import { getDataFromToken, isAdmin, isLoggedIn } from './services/AuthService';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from 'react-router-dom';
import Person3Icon from '@mui/icons-material/Person3';
export default function NavBar() {
  const navigate=useNavigate();
  const signOut=()=>{
    if(window.confirm("Do u want to logout ?")){
       localStorage.removeItem("_token");
       navigate("/");
    }
  }
  return (
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
            Dashboard
          </Typography>
          {isLoggedIn() && <> 
            
            <Button color="inherit" onClick={()=> navigate('products')}>Products</Button>
            {isAdmin() && <> 
              <Button color="inherit" onClick={()=> navigate('addproduct')}>Add Products</Button>
            </>}
            <Button color="inherit" onClick={()=> navigate('cart')}>Cart</Button>
            <Button color="inherit" onClick={()=> signOut()}>Logout</Button>
          </>}
          <Person3Icon /> {getDataFromToken().fullName}
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
