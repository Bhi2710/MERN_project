import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Header from '../components/Header';

const User = () => {
  return (
    <div>
      <Header />
      <Box>
        <Typography variant='h4' mt={6}>
          User Details
        </Typography>
        <Typography variant='h6' mt={1} mb={6}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
      <Box>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="all"
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ background: "#000" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
            <Button sx={{ textTransform: 'none', fontSize: "16px" }} color="inherit">IMAGE</Button>
            <Button sx={{ textTransform: 'none', fontSize: "16px" }} color="inherit">NAME</Button>
            <Button sx={{ textTransform: 'none', fontSize: "16px" }} color="inherit">EMAIL</Button>
            <Button sx={{ textTransform: 'none', fontSize: "16px" }} color="inherit">CONTACT</Button>
            <Button sx={{ textTransform: 'none', fontSize: "16px" }} color="inherit">GENDER</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default User;
