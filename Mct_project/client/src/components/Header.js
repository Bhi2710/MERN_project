import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:"#000"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Link to="/home" style={{textDecoration:"none" , color:"white"}}>
            <Button sx={{textTransform:'none', fontSize:"16px"}} color="inherit">Home</Button>
          </Link>
          <Link to="/product" style={{textDecoration:"none", color:"white"}}>
            <Button sx={{textTransform:'none', fontSize:"16px"}} color="inherit">Products</Button>
          </Link>
          <Link to="/user" style={{textDecoration:"none", color:"white"}}>  
            <Button sx={{textTransform:'none', fontSize:"16px"}} color="inherit">Users</Button>
          </Link>
          <Link to="/contact" style={{textDecoration:"none", color:"white"}}> 
            <Button sx={{mr:"25px", textTransform:'none', fontSize:"16px"}} color="inherit">Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;


